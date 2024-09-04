import * as React from 'react';

import Popconfirm from '..';

describe('popconfirm.typescript', () => {
  it('popconfirm.okType', () => {
    const form = <Popconfirm title="" okType="danger" />;

    expect(form).toBeTruthy();
  });
});
