import { h } from 'preact';
import { useCallback } from 'preact/compat';

import Form from '../Form';
import SiteList from './SiteList';
import TagContainer from './TagContainer';

import '../../styles/bookmarks.css';

export default function Bookmarks({ tag }) {
  const decodedTag = decodeURI(tag);

  const sitesAddPattern = useCallback((value) => ({ url: value, tag }), [tag]);

  return (
    <div className="container">
      <TagContainer tag={decodedTag} />
      <div className="site-list-wrapper">
        <Form dispatchKey="sites/add" placeholder="Site" payloadPattern={sitesAddPattern} />
        <SiteList tag={decodedTag} />
      </div>
    </div>
  );
}
