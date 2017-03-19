import React, {PropTypes} from 'react';
import DeltaListRow from './DeltaListRow';

const DeltaList = ({deltas}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Distribute to</th>
        <th>Id</th>
        <th>Category</th>
      </tr>
      </thead>
      <tbody>
      {deltas.map(delta =>
        <DeltaListRow key={delta.id} delta={delta}/>
      )}
      </tbody>
    </table>
  );
};

DeltaList.propTypes = {
  deltas: PropTypes.array.isRequired
};

export default DeltaList;
