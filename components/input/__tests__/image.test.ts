import { imageDemoTest } from '../../../tests/shared/imageTest';

describe('input image', () => {
  imageDemoTest('input', { skip: ['search-input-loading.tsx'] });
});
