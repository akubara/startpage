import { h } from 'preact';

export default function Input({ value, onChange, placeholder, max, type = 'text' }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={max}
      className="styled-input"
    />
  );
}
