import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import {connect} from 'react-redux';
import { selectDirectorySelections } from "../../redux/directory/directory.selector";
import { createStructuredSelector } from "reselect";

import './directory.component.styles.scss';


const Directory = ({ sections }) => (
    <div className="directory-menu">
        {
            sections.map(({id, ...otherSectionProps}) => {
                return <MenuItem key={id} {...otherSectionProps} />
            })
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySelections
})

export default connect(mapStateToProps)(Directory);

