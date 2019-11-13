import React, { Fragment, Suspense } from 'react';

import useFetch from '../../hooks/useFetch';
import logo from './react.svg';
import './style.css';

const FetchingComponent = () => {
  const response = useFetch('https://jsonplaceholder.typicode.com/todos');
  return <p>The server responded with: {JSON.stringify(response)}</p>;
};

const Home = () => {
  return (
    <div className="Home">
      <div className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <h2>Welcome to Razzle</h2>
      </div>
      <p className="Home-intro">
        To get started, edit <code>src/App.js</code> or{' '}
        <code>src/Home.js</code> and save to reload.
      </p>
      <ul className="Home-resources">
        <li>
          <a href="https://github.com/jaredpalmer/razzle">Docs</a>
        </li>
        <li>
          <a href="https://github.com/jaredpalmer/razzle/issues">Issues</a>
        </li>
        <li>
          <a href="https://palmer.chat">Community Slack</a>
        </li>
      </ul>
      <Fragment>
        <Suspense fallback="Loading...">
          <FetchingComponent />
        </Suspense>
      </Fragment>
    </div>
  );
};

export default Home;
