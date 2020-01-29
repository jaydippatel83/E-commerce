import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';
import './Directory.styles.scss';

import { selectDirectorySections } from '../../redux/directory/directory.selector';
import { createStructuredSelector } from 'reselect';


const Directory = ({ sections }) => (
    <div className="directory-menu">
        {sections.map(({ id, ...SectionProps }) => (
            <MenuItem key={id} {...SectionProps} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});
export default connect(mapStateToProps)(Directory);