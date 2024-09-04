import * as React from 'react';

import DatePicker from '..';

describe('datePicker.typescript', () => {
  it('datePicker ref methods', () => {
    const datePicker = (
      <DatePicker
        ref={(picker) => {
          picker?.focus();
          picker?.blur();
        }}
      />
    );
    expect(datePicker).toBeTruthy();
  });

  // https://github.com/ant-design/ant-design/issues/33417
  it('datePicker ref methods with forwardRef', () => {
    const datePicker = (
      <DatePicker
        ref={(picker) => {
          picker?.focus();
          picker?.blur();
        }}
      />
    );
    expect(datePicker).toBeTruthy();
  });

  it('rangePicker ref methods', () => {
    const rangePicker = (
      <DatePicker.RangePicker
        ref={(picker) => {
          picker?.focus();
          picker?.blur();
        }}
      />
    );
    expect(rangePicker).toBeTruthy();
  });

  it('rangePicker ref methods with forwardRef', () => {
    const datePicker = (
      <DatePicker.RangePicker
        ref={(picker) => {
          picker?.focus();
          picker?.blur();
        }}
      />
    );
    expect(datePicker).toBeTruthy();
  });

  it('datePicker and RangePicker supports popupClassName', () => {
    const datePicker = <DatePicker popupClassName="popupClassName" />;
    expect(datePicker).toBeTruthy();
    const rangePicker = <DatePicker.RangePicker popupClassName="popupClassName" />;
    expect(rangePicker).toBeTruthy();
  });
});
