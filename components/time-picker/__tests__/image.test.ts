import { imageDemoTest } from '../../../tests/shared/imageTest';

describe('timePicker image', () => {
  imageDemoTest('time-picker', {
    openTriggerClassName: 'ant-picker-dropdown',
  });
});
