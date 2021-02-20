import { h } from 'preact';

import '../styles/input.css';

export default function Input({ value, onChange, placeholder, max }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={max}
      className="styled-input"
    />
  );
}
