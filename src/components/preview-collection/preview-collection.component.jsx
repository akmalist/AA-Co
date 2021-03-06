import React from 'react';
import '../preview-collection/preview-collection.styles.scss'
import CollectionItem from '../collection-item/collection.item.component';

const PreviewCollection = ({ title, items,id }) => (
	<div className="collection-preview">
		<h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">{items.filter((item, idx)=> idx<4).map(({id,...restOtherItems}) => 
            <CollectionItem key={id} {...restOtherItems}/>
       )}</div>
	</div>
);

export default PreviewCollection;

