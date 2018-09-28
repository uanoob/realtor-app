import React from 'react';
// import PropTypes from 'prop-types';

const filterPrice = ({ label, htmlFor, name, id, value, onChange }) => {
  return (
    <div className="col-12 col-sm-6 col-md-12 col-lg-6">
      <div className="form-group row">
        <label htmlFor={htmlFor} className="col-form-label">
          {label}
        </label>
        <div className="col">
          <input
            type="text"
            className="form-control"
            name={name}
            id={id}
            placeholder=""
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};

filterPrice.propTypes = {};

export default filterPrice;
