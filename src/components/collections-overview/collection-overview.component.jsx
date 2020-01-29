import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PreviewCollection from '../preview-Collections/preview-collection.component';
import { selectCollections } from '../../redux/shop/shop.selector';

import './collection-overview.component';

const CollectionsOverview = ({ collections }) => (
    <div className="collections-overview">
        {
            collections.map(({ id, ...CollectionProps }) => (
                <PreviewCollection key={id} {...CollectionProps} />
            ))}
    </div>
);


const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})
export default connect(mapStateToProps)(CollectionsOverview);