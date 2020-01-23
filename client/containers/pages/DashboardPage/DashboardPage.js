/*
 * DashboardPage
 */

import React from 'react';
import { Helmet } from 'react-helmet';

class DashboardPage extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>Dashboard</title>
          <meta name="description" content="Dashboard" />
        </Helmet>
        <h1>Dashboard</h1>
      </div>
    );
  }
}

export default DashboardPage;
