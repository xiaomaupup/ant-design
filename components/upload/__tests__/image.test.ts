import { imageDemoTest } from '../../../tests/shared/imageTest';

describe('upload image', () => {
  imageDemoTest('upload', { skip: ['crop-image.tsx'] });
});
