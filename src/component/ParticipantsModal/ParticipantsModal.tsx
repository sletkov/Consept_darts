import React, {useEffect} from 'react';
// import {Button, Form, Input} from "antd";
import './ParticipantsModal.scss'
import {Avatar} from "antd";
import {UserOutlined} from "@ant-design/icons";

export type AddWorldProps = {
    isVisible: boolean;
    onClose:any
}

export const ParticipantsModal = ({
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

    const user = [
        {
            userName: 'Иван петров'
        },
        {
            userName: 'Иван петров'
        },{
            userName: 'Иван петров'
        },{
            userName: 'Иван петров'
        },{
            userName: 'Иван петров'
        },{
            userName: 'Иван петров'
        },{
            userName: 'Иван петров'
        },{
            userName: 'Иван петров'
        },{
            userName: 'Иван петров'
        },{
            userName: 'Иван петров'
        },{
            userName: 'Иван петров'
        },
    ]


    useEffect(() => {
        document.addEventListener('keydown', keydownHandler);
        return () => document.removeEventListener('keydown', keydownHandler);
    });

    return !isVisible ? null : (
        <div className="modal" onClick={onClose}>
            <div className="modal-dialog" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h3 className="modal-title">Участники мира: </h3>
                    <span className="modal-close" onClick={onClose}>
            &times;
          </span>
                </div>
                <div className="modal-body">
                    <div className="modal-content">
                            {user?.map((item: any, index: number) => (
                                <div className='Participants__users'>
                                    <Avatar size={40} icon={<UserOutlined />} key={index}/>
                                    <div>
                                        {item.userName}
                                    </div>
                                </div>
                            ))}
                            <div>
                        </div>
                    </div>
                    {/*<div className="modal-content">*/}

                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
};

