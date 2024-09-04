import { imageDemoTest } from '../../../tests/shared/imageTest';

describe('tooltip image', () => {
  imageDemoTest('tooltip', {
    onlyViewport: ['shift.tsx'],
  });
});
