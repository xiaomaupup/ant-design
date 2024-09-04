import * as React from 'react';

import Radio from '..';
import type { RadioRef } from '..';

describe('radio.typescript', () => {
  it('radio', () => {
    const ref = React.createRef<RadioRef>();
    const checkbox = <Radio value ref={ref} />;

    expect(checkbox).toBeTruthy();
  });

  it('radio.Group', () => {
    const group = (
      <Radio.Group>
        <Radio />
      </Radio.Group>
    );

    expect(group).toBeTruthy();
  });
});
