import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextInputGroup = (props) => {
  const { label, id, value, placeholder, type, onChange, error } = props;
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input type={type}
        id={id}
        className={classnames('form-control form-control-lg', {
          'is-invalid': error
        })}
        placeholder={placeholder}
        value={value}
        onChange={onChange} />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

TextInputGroup.defaultProps = {
  type: 'text'
}
export default TextInputGroup
