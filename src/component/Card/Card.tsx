import React from 'react';
import {Card as CoreCard} from "antd";
import './Card.scss'

export type CardProps = {
    image: React.ReactNode;
    title: string
}

export const Card = ({
 image,
 title
}: CardProps) => {
    return (
        <CoreCard>

        </CoreCard>
    );
};
