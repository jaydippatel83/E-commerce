import React from 'react';
import CustomButton from '../custom-buttons/custom-buttons.component';
import './collection-item.styles.scss';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import { ToastContainer, toast } from 'react-toastify';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import 'react-toastify/dist/ReactToastify.css';

const CollectionItem = ({ item, addItem,itemCount }) => {
    const { name, price, imageUrl } = item;
    const Img = ({ src }) =>
        <div className="row" >
            <div className="col-3">
                <img className="mr-1" width={50} src={src} />
            </div>
            <div className="col-9">
                <span className="text-success"> {name} is Successfully added...!</span><br/>
                <span className="text-success"> Cart Item :- {itemCount + 1}</span>
            </div> 
        </div>;
    const opt = {
        name: "your"
    };
    return (
        <div className="collection-item">
            <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}>
            </div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <ToastContainer
            />
            <CustomButton onClick={() => addItem(item, toast(<Img src={imageUrl} />))} inverted>
                add to cart
            </CustomButton>

        </div>

    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

const mapStateToProps =createStructuredSelector({
    itemCount: selectCartItemsCount 
});


export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem); 