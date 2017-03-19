import React, {PropTypes} from 'react';
import {Link} from 'react-router';

// Use destructuring to keep the ref to course short down in the template
const DeltaListRow = ({delta}) => {
  return (
    <tr>
      <td><input type="checkbox"/></td>
      <td>{delta.id}</td>
      <td>{delta.category}</td>
    </tr>
  );
};

DeltaListRow.propTypes = {
  delta: PropTypes.object.isRequired
};

export default DeltaListRow;