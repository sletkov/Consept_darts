import React, {useEffect} from 'react';
import './LocationModal.scss'
import moment from "moment";

// created_at, creator.username, name, description, images

export type LocationModalProps = {
    modalProps: any;
    onClose:any;
}

export const LocationModal = ({
                                  modalProps,
    onClose,
}: LocationModalProps) => {


    const keydownHandler = (key: any) => {
        switch (key) {
            case 'Escape':
                onClose();
                break;
            default:
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', keydownHandler);
        return () => document.removeEventListener('keydown', keydownHandler);
    });

    return !modalProps.visible ? null : (
        <div className="LocationModal" onClick={onClose}>
            <div className="LocationModal-dialog" onClick={e => e.stopPropagation()}>
                <div className="LocationModal-header">
                    <span className="LocationModal-close" onClick={onClose}>&times;</span>
                </div>
                <div className="LocationModal-body">
                    <div className='LocationModal__img'>
                        <img src={modalProps?.location?.images[0].image} alt="photo"/>
                    </div>
                    <div>
                        <div className='LocationModal__header'>
                            <div>
                                {modalProps.location.creator.username}
                            </div>
                            <div className='LocationModal__header-date'>
                                {moment(modalProps.location.created_at).format('DD MMMM YYYY')}
                            </div>

                        </div>
                        <div className='LocationModal__name'>
                            {modalProps.location.name}
                        </div>
                        <div className='LocationModal__descr'>
                            {modalProps.location.description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

