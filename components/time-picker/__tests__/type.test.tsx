import * as React from 'react';

import TimePicker from '..';

describe('timePicker.typescript', () => {
  it('no need picker props', () => {
    const rangePicker = <TimePicker.RangePicker />;

    expect(rangePicker).toBeTruthy();
  });
});
