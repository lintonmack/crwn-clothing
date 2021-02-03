import React from 'react';
import {CustomButton} from "../custom-button/custom-button.component";
import './collection-item.component.styles.scss';

export const CollectionItem = ({id, name, imageUrl, price}) => (
    <div className="collection-item">
        <div
            className="image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className="collection-footer">
            <span className="name"> {name} </span>
            <span className="price"> {price} </span>

        </div>
        <CustomButton inverted>ADD TO CART</CustomButton>
    </div>
)
