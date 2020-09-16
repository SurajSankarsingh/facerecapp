/* eslint-disable no-template-curly-in-string */
import React from 'react';

const Rank = ({name, entries}) => {
  return (
    <div>
      <div className='black f3 b'>
        {`Current rank of ${name} is: `}
      </div>
      <div className='black f1 b'>
        {entries}
      </div>
    </div>
  );
};

export default Rank;