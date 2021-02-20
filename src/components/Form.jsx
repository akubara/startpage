import { h } from 'preact';
import { useState, useCallback } from 'preact/compat';
import { GrAdd } from 'react-icons/gr';
import { useStoreon } from 'storeon/preact';

import Input from './Input';

export default function Form({ dispatchKey, payloadPattern, placeholder, mini, max = 256 }) {
  const [value, setValue] = useState('');
  const { dispatch } = useStoreon();

  const onHandle = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(dispatchKey, payloadPattern(value));
    setValue('');
  };

  return (
    <form onSubmit={onSubmit} className={`flex py-3 ${mini ? 'mini-form' : ''}`}>
      <Input value={value} onChange={onHandle} placeholder={placeholder} max={max} />
      <button type="submit" className="form-button">
        <GrAdd />
      </button>
    </form>
  );
}
