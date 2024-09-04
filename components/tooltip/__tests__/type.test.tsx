import * as React from 'react';

import Tooltip from '..';

describe('tooltip.typescript', () => {
  it('tooltip children should accept ReactNode', () => {
    const tooltip = (
      <Tooltip title="title">
        <div />
        <div />
      </Tooltip>
    );
    const tooltip2 = <Tooltip title="title">{null}</Tooltip>;
    expect(tooltip).toBeTruthy();
    expect(tooltip2).toBeTruthy();
  });

  it('tooltip support zIndex', () => {
    const tooltip = (
      <Tooltip title="title" zIndex={999}>
        <div />
      </Tooltip>
    );

    expect(tooltip).toBeTruthy();
  });
});
