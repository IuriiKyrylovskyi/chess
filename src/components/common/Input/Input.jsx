import React from 'react';
import { Field } from 'formik';

import './styles.scss';

const Input = ({ labelText, type, as, name, accept, className, value, onChange, children }) => {
  return (
    <div className="input">
      <label htmlFor={name}>{labelText}</label>
      <Field
        type={type}
        as={as}
        name={name}
        className={className}
        accept={accept}
        value={value}
        // autoComplete={name}
        onChange={onChange}
      >
        {children}
      </Field>
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
