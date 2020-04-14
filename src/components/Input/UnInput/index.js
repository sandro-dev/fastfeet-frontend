import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

export default function Input({ name, label, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue = '', registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  return (
    <>
      <label htmlFor={fieldName}>
        <strong>{label}</strong>
        <input
          ref={inputRef}
          defaultValue={defaultValue}
          className={error ? 'has-error' : ''}
          {...rest}
        />
      </label>
      {error && <span className="error">{error}</span>}
    </>
  );
}
