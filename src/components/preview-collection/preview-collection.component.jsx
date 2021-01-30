import React from 'react';
import './preview-collection.component.styles.scss';

export const CollectionPreview = ({title, items}) => (
    <div className="collection-preview">
        <h1>{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items.filter((item, index) => index < 4).map(item => {
                   return <div key={item.id}>{item.name}</div>
                })
            }
        </div>
    </div>
);
