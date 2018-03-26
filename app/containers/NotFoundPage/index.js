import React from 'react';

import H1 from '../../components/H1';

export default function NotFound() {
  const href = window.location.href;

  return (
    <article>
      <H1>
        Not Found ...
      </H1>
    </article>
  );
}
