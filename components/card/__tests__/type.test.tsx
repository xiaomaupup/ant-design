import * as React from 'react';

import Card from '../index';

describe('card.typescript', () => {
  it('ref', () => {
    function Demo() {
      const cardRef = React.useRef<HTMLDivElement>(null);

      return <Card ref={cardRef} />;
    }

    expect(Demo).toBeTruthy();
  });
});
