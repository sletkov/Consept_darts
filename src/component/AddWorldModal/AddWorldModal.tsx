import React, {useEffect, useState} from 'react';
import './AddWorldModal.scss'
import {Button, Form, Input, Upload} from "antd";
import addWorld from "./AddWorld.png";
import type { UploadFile } from 'antd/es/upload/interface';
import { PlusOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import type { RcFile, UploadProps } from 'antd/es/upload';
import {useDispatch} from "react-redux";
import {uploadWorldFile} from "../../store/actions/uploadFileActions";

export type AddWorldProps = {
    isVisible: boolean;
    onClose:any
}

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};


export const AddWorldModal = ({
                           isVisible = false,
                           onClose
}:AddWorldProps ) => {
    const keydownHandler = (key:any) => {
        switch (key) {
            case 'Escape':
                onClose();
                break;
            default:
        }
    };

    const dispatch: any = useDispatch();

    const [fileList, setFileList] = useState<UploadFile[]>([])


    const handleChange = ( fileList:any) => {
        setFileList(fileList);
        console.log(fileList)
        dispatch(uploadWorldFile(fileList))

    }

    const uploadButton = (
        <div>
            <img src={addWorld} alt="photo"/>
        </div>
    );

    const onFinish = (values: any) => {
        console.log(values);
    };

    useEffect(() => {
        document.addEventListener('keydown', keydownHandler);
        return () => document.removeEventListener('keydown', keydownHandler);
    });

    const [file, setFile] = useState('')

    const onFileChange = (event:any) => {
        setFile( event.target.files[0] );
    };
    console.log(file)

    // const onFileUpload = () => {
    //     const formData = new FormData();
    //
    //     formData.append(
    //         "myFile",
    //         selectedFile,
    //     );
    //
    //     console.log(formData);
    //
    // };

    const  handleSubmit = (event:any) => {
        event.preventDefault()
        const formData = new FormData();
        formData.append('file', file);
        // formData.append('fileName', file?.name);

        dispatch(uploadWorldFile(formData))

    }

    return !isVisible ? null : (
        <div className="modal" onClick={onClose}>
            <div className="modal-dialog" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h3 className="modal-title">Создание мира</h3>
                    <span className="modal-close" onClick={onClose}>
            &times;</span>
                </div>

                {/*<form onSubmit={handleSubmit}>*/}
                {/*    <input  onChange={onFileChange} type="file" />*/}
                {/*    <button type="submit">Submit</button>*/}
                {/*</form  >*/}

                {/*<Upload*/}
                {/*    listType="picture-card"*/}
                {/*    onChange={handleChange}*/}
                {/*>*/}
                {/*    {fileList.length >= 1 ? null : uploadButton}*/}
                {/*</Upload>*/}

                <div className="modal-body">
                    <div className="modal-content">
                        <img src={addWorld} alt="photo"/>
                        <div>Выберите карту мира</div>
                    </div>

                    <div className="modal-content">
                        <img src={addWorld} alt="photo"/>
                        <div>Выберите картинку для мира</div>
                    </div>

                    <div className="modal-content">
                        <Form {...layout}  onFinish={onFinish} >
                            <Form.Item
                                name="website"
                                label="Название мира"
                                rules={[{ required: true, message: 'Пожалуйста, введите название мира!' }]}
                            >
                                <Input  placeholder="Пожалуйста, введите название мира" />
                            </Form.Item>

                            <Form.Item
                                name="intro"
                                label="Описание мира"
                                rules={[{ required: true, message: 'Пожалуйста, введите описание мира' }]}
                            >
                                <Input.TextArea  maxLength={100} placeholder="Пожалуйста, введите описание мира" />
                            </Form.Item>
                        </Form>

                    </div>
                </div>
                <div className="modal-footer">
                    <Button type={'primary'}>Создать</Button>
                </div>
            </div>
        </div>
    );
};

