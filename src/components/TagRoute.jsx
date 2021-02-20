import { h } from 'preact';
import { useStoreon } from 'storeon/preact';
import { Route, Redirect } from 'wouter-preact';

export default function TagRoute({ component: Component }) {
  const { tags } = useStoreon('tags');

  return (
    <Route path="/:tag">
      {({ tag }) =>
        tags.includes(decodeURI(tag)) ? <Component tag={tag} /> : <Redirect to="/all" />
      }
    </Route>
  );
}
