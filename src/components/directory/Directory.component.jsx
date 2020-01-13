import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './Directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [{
                title: 'hats',
                imageUrl: 'http://i.ibb.co/cvpntL1/hats.png',
                id: 1
            },
            {
                title: 'jackets',
                imageUrl: 'http://i.ibb.co/px2tCc3/jackets.png',
                id: 2
            },
            {
                title: 'sneakers',
                imageUrl: 'http://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3
            },
            {
                title: 'womens',
                imageUrl: 'http://i.ibb.co/GCCdy8t/womens.png',
                size:'larger',
                id: 4
            },
            {
                title: 'mens',
                imageUrl: 'http://i.ibb.co/R70vBrQ/mens.png',
                size:'larger',
                id: 5
            }]
        }
    }
    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({ title, imageUrl,size,id }) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                ))}
            </div>
        );
    }
} 

export default Directory;