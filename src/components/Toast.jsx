import { h } from 'preact';
import { useEffect, useRef } from 'preact/compat';
import { Slide } from 'react-toastify';
import { useLocation } from 'wouter-preact';

import 'react-toastify/dist/ReactToastify.css';
import '../styles/toast.css';

export default function Toast({ closeToast, deleteCallback }) {
  const isDelete = useRef(true);
  const [location] = useLocation();

  useEffect(
    () => () => {
      if (isDelete.current) {
        deleteCallback();
        closeToast();
      }
    },
    [location],
  );

  const handleUndo = () => {
    isDelete.current = false;
    closeToast();
  };

  return (
    <button type="button" onClick={handleUndo} className="form-button">
      Undo
    </button>
  );
}

export const config = {
  closeOnClick: false,
  autoClose: 2000,
  position: 'top-center',
  pauseOnHover: true,
  transition: Slide,
};
