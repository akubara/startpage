import { h } from 'preact';
import { useCallback } from 'preact/compat';
import { GrClose } from 'react-icons/gr';
import { useStoreon } from 'storeon/preact';

import useSelectSitesByTag from './useSelectSitesByTag';

export default function SiteList({ tag }) {
  const { dispatch } = useStoreon();
  const { selectedSites } = useSelectSitesByTag(tag);

  const handleDel = useCallback((e) => {
    dispatch('sites/del', { url: e.currentTarget.dataset.url });
  }, []);

  return selectedSites.map(({ url }) => (
    <div key={url} className="list-item">
      <a href={url} target="_blank" rel="noreferrer noopener" className="styled-link">
        {url}
      </a>
      <button type="button" data-url={url} onClick={handleDel} className="icon-button">
        <GrClose />
      </button>
    </div>
  ));
}
