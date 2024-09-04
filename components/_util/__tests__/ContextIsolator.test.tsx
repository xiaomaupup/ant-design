import React from 'react';

import { render } from '../../../tests/utils';
import ContextIsolator from '../ContextIsolator';

describe('contextIsolator component', () => {
  it('contextIsolator should work when Children is null', () => {
    [undefined, null].forEach((item) => {
      expect(() => {
        render(<ContextIsolator>{item}</ContextIsolator>);
      }).not.toThrow();
    });
  });
});
