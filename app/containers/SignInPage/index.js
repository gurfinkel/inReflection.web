/*
 * SignInPage
 *
 * Sign in form
 */
import React from 'react';
import { Helmet } from 'react-helmet';

import H1 from 'components/H1';

export default class SignInPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Sign In Page</title>
          <meta
            name="description"
            content="Login page of React.js Boilerplate application"
          />
        </Helmet>
        <H1>Sign in</H1>
      </div>
    );
  }
}
