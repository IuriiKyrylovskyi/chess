import React from 'react';

import './styles.scss';

const Input = ({ labelText, type, name, accept, className, value, onChange }) => {
  return (
    <div className="input">
      <label htmlFor={name}>{labelText}</label>
      <input
        type={type}
        name={name}
        className={className}
        accept={accept}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;

{
  /* <input
  type="email"
  name="email"
  className="email"
  value={email}
  onChange={e => setEmail(e.target.value)}
/>; */
}
