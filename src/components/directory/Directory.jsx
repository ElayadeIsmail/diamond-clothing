import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { directorySectionsSelector } from "../../redux/directory/directorySelector";
import MenuItem from "../menu-item/MenuItem";

import "./directory.scss";

const Directory = ({ sections }) => {
  return (
    <div className='directory'>
      {sections.map((section) => (
        <MenuItem key={section.id} section={section} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: directorySectionsSelector,
});
export default connect(mapStateToProps)(Directory);
