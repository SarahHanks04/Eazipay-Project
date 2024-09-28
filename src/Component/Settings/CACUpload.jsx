import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCACDocument } from './Slice';


const CACUpload = () => {
  const dispatch = useDispatch();
  const cacDocument = useSelector((state) => state.form.cacDocument);

  const handleCACChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(setCACDocument(file));
    }
  };

  return (
    <div>
      <label htmlFor="cacUpload">Upload CAC Doc</label>
      <input type="file" id="cacUpload" onChange={handleCACChange} />
      {cacDocument && <p>{cacDocument.name}</p>}
    </div>
  );
};

export default CACUpload;
