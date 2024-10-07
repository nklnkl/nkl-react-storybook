import React from 'react';
import './tag.css';

export interface TagProps {
    label: string;
    onClick?: () => void;
    onClose?: () => void;
}

export const Tag: React.FC<TagProps> = ({ label, onClick, onClose }) => {
    return <div className={`tag`}>
        <span className="label" onClick={onClick}>{label}</span>
        <span className="close" onClick={onClose}>x</span>
    </div>;
};