import { h } from 'preact';
import { useStoreon } from 'storeon/preact';

import NavLink from './NavLink';

import '../styles/header.css';

export default function Header() {
  const { tags } = useStoreon('tags');

  return (
    <nav className="nav">
      {tags.map((tag) => (
        <NavLink key={tag} href={`/${tag}`}>
          #{tag}
        </NavLink>
      ))}
    </nav>
  );
}
