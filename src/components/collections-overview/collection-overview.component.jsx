import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import './collection-overview.styles.scss';
import PreviewCollection from '../preview-Collections/preview-collection.component';
import { selectCollections } from '../../redux/shop/shop.selector';

const CollectionOverview =({collections})=>(
    <div className='collection-overview'>
         {
            collections.map(({ id, ...CollectionProps }) => (
                <PreviewCollection key={id} {...CollectionProps} />
         ))}
    </div>
);
const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)( CollectionOverview);