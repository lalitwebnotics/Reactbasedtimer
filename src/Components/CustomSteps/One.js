import React from 'react'
import ActionButtons from './ActionButtons';

const One = (props) => {
    return (
      <div>
        <h1>this is popup step 1</h1>
        <br />
        <ActionButtons {...props} />
      </div>
    );
  };

export default One

