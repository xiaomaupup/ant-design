import * as React from 'react';

import Modal from '..';

describe('modal.typescript', () => {
  it('modal.okType', () => {
    const modal = <Modal okType="danger" />;

    expect(modal).toBeTruthy();
  });

  it('modal.styles', () => {
    const style: React.CSSProperties = {
      position: 'absolute',
    };
    const modal = (
      <Modal
        styles={{
          header: style,
          body: style,
          footer: style,
          mask: style,
          wrapper: style,
          content: style,
        }}
      />
    );

    expect(modal).toBeTruthy();
  });
});
