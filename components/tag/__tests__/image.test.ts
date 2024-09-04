import { imageDemoTest } from '../../../tests/shared/imageTest';

describe('tag image', () => {
  imageDemoTest('tag', { skip: ['status.tsx'] });
});
