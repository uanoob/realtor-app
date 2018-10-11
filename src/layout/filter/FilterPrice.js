import React from 'react';
import PropTypes from 'prop-types';

const filterPrice = ({
  label, htmlFor, name, id, value, onChange,
}) => (
  <div className="col-12 col-sm-6 col-md-12 col-lg-6">
    <div className="form-group row">
      <label htmlFor={htmlFor} className="col-form-label">
        {label}
        <div className="col">
          <input
            type="text"
            className="form-control"
            name={name}
            id={id}
            value={value}
            onChange={onChange}
          />
        </div>
      </label>
    </div>
  </div>
);

filterPrice.propTypes = {
  label: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default filterPrice;
