import { imageDemoTest } from '../../../tests/shared/imageTest';

describe('list image', () => {
  imageDemoTest('list', { skip: ['loadmore.tsx'] });
});
