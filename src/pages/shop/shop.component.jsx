import React from 'react';
import PreviewCollection from '../../components/preview-Collections/preview-collection.component';
import { selectCollections } from '../../redux/shop/shop.selector';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const ShopPage = ({ collections }) => (

    <div className="shop-page">
        {
            collections.map(({ id, ...CollectionProps }) => (
                <PreviewCollection key={id} {...CollectionProps} />
            ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage);