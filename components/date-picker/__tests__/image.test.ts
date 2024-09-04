import { imageDemoTest } from '../../../tests/shared/imageTest';

describe('datePicker image', () => {
  imageDemoTest('date-picker', {
    openTriggerClassName: 'ant-picker-dropdown',
  });
});
