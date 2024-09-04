import { imageDemoTest } from '../../../tests/shared/imageTest';

describe('layout image', () => {
  imageDemoTest('layout', {
    skip: ['fixed-sider.tsx'],
  });
});
