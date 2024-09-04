import { imageDemoTest } from '../../../tests/shared/imageTest';

describe('popover image', () => {
  imageDemoTest('popover', {
    onlyViewport: ['shift.tsx', 'arrow-point-at-center.tsx'],
  });
});
