import React from 'react';
import CollectionOverview from '../../components/collections-overview/collection-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => (

    <div className="container">
        <div className="row">
            <div className="col">
                <div className="shop-page">
                    <Route exact path={`${match.path}`} component={CollectionOverview} />
                    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
                </div>
            </div>
        </div>
    </div>
);

export default ShopPage;