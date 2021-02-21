import { h, Fragment } from 'preact';
import { ToastContainer } from 'react-toastify';
import { Route, Redirect } from 'wouter-preact';

import Bookmarks from './components/Bookmarks/Bookmarks';
import Header from './components/Header';
import TagRoute from './components/TagRoute';

function App() {
  return (
    <Fragment>
      <Route path="/">
        <Redirect to="/all" />
      </Route>
      <Header />
      <TagRoute component={Bookmarks} />
      <ToastContainer />
    </Fragment>
  );
}

export default App;
