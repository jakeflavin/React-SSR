/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import Paper from 'components/Surfaces/Paper';

export default function NotFound() {
  return (
    <Paper>
      <h1>Page not found.</h1>
    </Paper>
  );
}
