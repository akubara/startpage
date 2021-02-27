import { h } from 'preact';
import { useCallback } from 'preact/compat';
import { GrClose } from 'react-icons/gr';
import { toast } from 'react-toastify';
import { useStoreon } from 'storeon/preact';
import { useLocation } from 'wouter-preact';

import Form from '../Form';
import Toast, { config } from '../Toast';

const tagsAddPatern = (value) => value;

export default function TagContainer({ tag }) {
  const { dispatch } = useStoreon();
  const [, setLocation] = useLocation();

  const handleDel = useCallback(() => {
    dispatch('tags/del', tag);
    setLocation('/all');
  }, [tag]);

  const handleToast = useCallback(() => {
    toast(<Toast deleteCallback={handleDel} />, config);
  }, [tag]);

  return (
    <div className="tag-wrapper">
      <div className="flex items-center">
        <h1 className="tag-title">#{tag}</h1>
        {tag === 'all' ? null : (
          <button type="button" onClick={handleToast} className="pl-2">
            <GrClose size="20px" />
          </button>
        )}
      </div>
      <Form dispatchKey="tags/add" placeholder="Tag" max={12} payloadPattern={tagsAddPatern} mini />
    </div>
  );
}
