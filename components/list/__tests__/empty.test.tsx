import React from 'react';

import List from '..';
import { render } from '../../../tests/utils';

describe('list', () => {
  it('renders empty list', () => {
    const { container } = render(<List dataSource={[]} renderItem={() => <List.Item />} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
