import { imageDemoTest } from '../../../tests/shared/imageTest';

describe('carousel image', () => {
  imageDemoTest('carousel', {
    ssr: true,
  });
});
