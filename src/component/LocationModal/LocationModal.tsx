import React, {useEffect, useState} from 'react';
import './LocationModal.scss'
import moment from "moment";
import {Button, Form, Input, Modal} from "antd";
import {EditOutlined} from "@ant-design/icons";
import {useDispatch} from "react-redux";
import {UpdateLocation} from "../../store/actions/locationActions";


export type LocationModalProps = {
    modalProps: any;
    onClose:any;
}

const layout = {
    labelCol: { span: 20},
    wrapperCol: { span: 30 },
};

export const LocationModal = ({modalProps,
    onClose,
}: LocationModalProps) => {

    const userCreator = modalProps?.userid === modalProps?.location?.creator?.id
    const dispatch: any = useDispatch()

    const [editProps, setEditProps] = useState({
        name: '',
        description:'',
        edit: false
    })

    const keydownHandler = (key: any) => {
        switch (key) {
            case 'Escape':
                onClose();
                break;
            default:
        }
    };
    console.log(editProps,'modalProps', modalProps)


    useEffect(() => {
        document.addEventListener('keydown', keydownHandler);
        return () => document.removeEventListener('keydown', keydownHandler);
    },);
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log(values)
        dispatch(UpdateLocation(values,modalProps?.location?.creator?.id))
    };

    const success = () => {
        setEditProps({...editProps, edit: false});
        Modal.success({
            title: 'Изменения сохранены. ',
            content: 'Новые данные будут отображаться в мире.',
        });
    }

    const deleteworld = () => {
        // // dispatch(deleteWorld(world.id))
        // navigate(-1)
    }

    return !modalProps.visible ? null : (
        <div className="LocationModal" onClick={onClose}>
            <div className="LocationModal-dialog" onClick={e => e.stopPropagation()}>
                <div className="LocationModal-header">
                    {userCreator &&
                        <div onClick={() => setEditProps({
                            ...editProps,
                            edit: true,
                            name: modalProps.location.name,
                            description:  modalProps.location.description
                        })}>
                            <EditOutlined />
                            Редактировать
                        </div>
                    // <Button className='World__container' type='primary'>
                    //
                    //     Редактировать мир
                    // </Button>
                    }
                    <span className="LocationModal-close" onClick={onClose}>&times;</span>
                </div>
                <div className="LocationModal-body">
                    <div className='LocationModal__img'>
                        {modalProps.location.images.map((item:any, index:any) => (
                            <img src={item.image} alt="photo" key={index}/>
                        ))}
                    </div>
                    <div className='LocationModal__text'>
                        <div className='LocationModal__header'>
                            <div>
                                {modalProps.location.creator.username}
                            </div>
                            <div className='LocationModal__header-date'>
                                {moment(modalProps.location.created_at).format('DD MMMM YYYY')}
                            </div>

                        </div>
                        {editProps.edit
                        ?
                            <Form
                                {...layout}
                                form={form}
                                onFinish={onFinish}
                                layout={'vertical'}
                                initialValues={{
                                    name: editProps.name,
                                    description: editProps.description,
                                }}
                            >
                                <div className="EditWorld-body">

                                    <div className="LocationModal-content">

                                        <Form.Item name="name" label="Название локации">
                                            <Input />
                                        </Form.Item>

                                        <Form.Item name="description" label="Описание локации">
                                            <Input.TextArea maxLength={100} />
                                        </Form.Item>

                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <Form.Item >
                                        <Button htmlType="submit" onClick={success}>Сохранить</Button>
                                    </Form.Item>
                                    <Button type={'primary'}  onClick={deleteworld} >Удалить мир</Button>
                                </div>
                            </Form>
                        :
                            <div>
                                <div className='LocationModal__name'>
                                    {modalProps.location.name}
                                </div>
                                <div className='LocationModal__descr'>
                                    {modalProps.location.description}
                                </div>
                            </div>

                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

