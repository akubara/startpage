import { h } from 'preact';

export default function Search() {
  return (
    <form action="http://google.com/search" method="get">
      <input type="search" name="q" placeholder="google search" />
    </form>
  );
}
