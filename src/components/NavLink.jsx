/* eslint-disable react/jsx-props-no-spreading */
import { h } from 'preact';
import { Link, useRoute } from 'wouter-preact';

import '../styles/navlink.css';

export default function NavLink(props) {
  const { href, children } = props;
  const [isActive] = useRoute(href);

  return (
    <Link {...props} className={isActive ? 'navlink active-navlink' : 'navlink'}>
      {children}
    </Link>
  );
}
