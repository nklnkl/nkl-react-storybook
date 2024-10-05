import React, { useState } from 'react';
import './tags.css';
import { Tag, TagProps } from '../Tag/Tag';

interface TagsProps {
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    tagProps?: TagProps;
}

export const Tags: React.FC<TagsProps> = ({ inputProps, tagProps }) => {

    const [tags, setTags] = useState<string[]>([]);

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
        <div>
            {tags.map((tag) =>
                <Tag key={tag} label={tag} onClick={() => removeTag(tag)} {...tagProps} />
            )}
            <input
                type="text"
                placeholder="Enter tags"
                onKeyDown={onSubmit}
                {...inputProps}
            />
        </div>
    )
};