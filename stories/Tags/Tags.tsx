import React, { useState, useEffect } from 'react';
import './tags.css';
import { Tag, TagProps } from '../Tag/Tag';

interface TagsProps {
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    tagProps?: TagProps;
    onTagsChange?: (tags: string[]) => void;

}

export const Tags: React.FC<TagsProps> = ({ inputProps, tagProps, onTagsChange }) => {

    const [tags, setTags] = useState<string[]>([]);

    useEffect(() => {
        onTagsChange?.(tags);
    }, [tags]);

    const onSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const input = e.currentTarget;
            const tag = input.value;
            if (tag) {
                setTags([...tags, tag]);
                input.value = '';
            }
        }
    };

    const removeTag = (tag: string) => {
        setTags(tags.filter((t) => t !== tag));
    };

    return (
        <div className="container">
            <div className="tags">
                {tags.map((tag) =>
                <Tag key={tag} label={tag} onClick={() => removeTag(tag)} {...tagProps} />
            )}
            <input
                type="text"
                className="input"
                placeholder="Enter tags"
                onKeyDown={onSubmit}
                {...inputProps}
                />
            </div>
            <span className="info">
                Each tag followed by enter key
            </span>
        </div>
    )
};