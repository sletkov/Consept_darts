import React, {useEffect} from 'react';
import {Button, Form, Input, message, Modal} from "antd";
import {useDispatch} from "react-redux";
import './EditWorldModal.scss'
import {deleteWorld, UpdateWorld} from "../../store/actions/worldActions";
import {useNavigate} from "react-router-dom";

export type EditWorldProps = {
    isVisible: boolean;
    onClose:any;
    world:any
}

const layout = {
    labelCol: { span: 6},
    wrapperCol: { span: 30 },
};

export const EditWorldModal = ({
        isVisible = false,
        onClose,
        world
}:EditWorldProps) => {

    const keydownHandler = (key:any) => {
        switch (key) {
            case 'Escape':
                onClose();
                break;
            default:
        }
    };

    const dispatch: any = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        document.addEventListener('keydown', keydownHandler);
        return () => document.removeEventListener('keydown', keydownHandler);
    });

    const onFinish = (values: any) => {
        dispatch(UpdateWorld(values, world.id))

        // message.success({
        //     content:'Изменения сохранены',
        //     style: {
        //         zIndex: 100,
        //     },
        // });
    };

    const success = () => {
        Modal.success({
            title: 'Изменения сохранены. ',
            content: 'Новые данные будут отображаться в мире.',
        });
    }

    const deleteworld = () => {
        dispatch(deleteWorld(world.id))
        navigate(-1)
    }


    return !isVisible ? null : (
        <div className="EditWorld" onClick={onClose}>
            <div className="EditWorld-dialog" onClick={e => e.stopPropagation()}>
                <div className="EditWorld-header">
                    <div className="EditWorld-title">Редактирование мира</div>
                    <span className="EditWorld-close" onClick={onClose}>&times;</span>
                </div>
                <Form
                    {...layout}
                    onFinish={onFinish}
                    initialValues={{
                        name: world?.name,
                        description: world?.description,
                    }}
                >

                    <div className="EditWorld-body">

                        <div className='EditWorld__img'>
                            <img src={world.map_image} alt=""/>
                        </div>

                        <div className="EditWorld-content">

                                <Form.Item name="name" label="Название мира">
                                    <Input />
                                </Form.Item>

                                <Form.Item name="description" label="Описание мира">
                                    <Input.TextArea maxLength={100} />
                                </Form.Item>

                        </div>
                    </div>
                    <div className="modal-footer">
                        <Button type={'primary'} htmlType="submit" onClick={success} >Сохранить</Button>
                        <Button type={'primary'}  onClick={deleteworld} >Удалить мир</Button>

                    </div>
                </Form>

            </div>
        </div>
    );
};

