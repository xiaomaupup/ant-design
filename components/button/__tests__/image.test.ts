import { imageDemoTest } from '../../../tests/shared/imageTest';

describe('button image', () => {
  imageDemoTest('button', { skip: ['loading.tsx'] });
});
