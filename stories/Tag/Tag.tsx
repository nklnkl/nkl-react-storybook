import React from 'react';
import './tag.css';

export interface TagProps {
  label: string;
  onClick?: () => void;
}

export const Tag: React.FC<TagProps> = ({ label, onClick }) => {
  return <div className={`tag`} onClick={onClick}>{label}</div>;
};
