import React, {useEffect} from 'react';
import './AddWorldModal.scss'
import {Button, Form, Input} from "antd";

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

    const onFinish = (values: any) => {
        console.log(values);
    };

    useEffect(() => {
        document.addEventListener('keydown', keydownHandler);
        return () => document.removeEventListener('keydown', keydownHandler);
    });

    return !isVisible ? null : (
        <div className="modal" onClick={onClose}>
            <div className="modal-dialog" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h3 className="modal-title">Создание мира</h3>
                    <span className="modal-close" onClick={onClose}>
            &times;</span>
                </div>
                <div className="modal-body">
                    <div className="modal-content">
                        <img src="#" alt="photo"/>
                        <div>Выберите карту мира</div>
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

