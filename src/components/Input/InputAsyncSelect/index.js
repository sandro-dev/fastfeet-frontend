import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';
import AsyncSelect from 'react-select/async';

export default function InputAsyncSelect({ name, ...rest }) {
  const selectRef = useRef(null);
  const [inputValue, setInputValue] = useState({});
  const {
    fieldName,
    defaultValue = inputValue,
    registerField,
    error,
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'select.state.value',
      setValue(ref, value) {
        setInputValue(value);
      },
      clearValue() {
        setInputValue(null);
      },
      getValue: (ref) => {
        if (!ref.select.state.value) {
          return '';
        }
        return ref.select.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <>
      <AsyncSelect
        id={fieldName}
        cacheOptions
        defaultValue={defaultValue}
        value={inputValue}
        ref={selectRef}
        isClearable
        onChange={(selected) => setInputValue(selected)}
        noOptionsMessage={() => 'Nenhum registro encontrado'}
        classNamePrefix="react-select"
        {...rest}
      />
      {error && <span className="error">{error}</span>}
    </>
  );
}

InputAsyncSelect.propTypes = {
  name: PropTypes.string.isRequired,
};
