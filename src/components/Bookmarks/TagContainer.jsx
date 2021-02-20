import { h } from 'preact';
// import { HiTrash } from 'react-icons/hi';
import { useCallback } from 'preact/compat';
import { GrClose } from 'react-icons/gr';
import { useStoreon } from 'storeon/preact';
import { useLocation } from 'wouter-preact';

import Form from '../Form';

const tagsAddPatern = (value) => value;

export default function TagContainer({ tag }) {
  const { dispatch } = useStoreon();
  // eslint-disable-next-line no-unused-vars
  const [_, setLocation] = useLocation();

  const handleDel = useCallback(() => {
    dispatch('tags/del', tag);
    dispatch('toast/show');
    setLocation('/all');
  }, [tag]);

  return (
    <div className="tag-wrapper">
      <div className="flex items-center">
        <h1 className="tag-title">#{tag}</h1>
        {tag === 'all' ? null : (
          <button type="button" onClick={handleDel} className="pl-2">
            <GrClose size="20px" />
          </button>
        )}
      </div>
      <Form dispatchKey="tags/add" placeholder="Tag" max={12} payloadPattern={tagsAddPatern} mini />
    </div>
  );
}
