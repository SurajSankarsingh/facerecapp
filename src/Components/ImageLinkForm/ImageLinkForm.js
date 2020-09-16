import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3 b'>
        {'Submit your Image'}
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input className='f4 pa2 w-75 center' type='tex' onChange={onInputChange} />
          <button 
          className='w-15 grow f4 link ph3 pv2 dib black bg-light-purple b'
          onClick={onButtonSubmit}
          >Scan!</button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;