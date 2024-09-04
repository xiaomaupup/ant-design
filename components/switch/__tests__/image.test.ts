import { imageDemoTest } from '../../../tests/shared/imageTest';

describe('switch image', () => {
  imageDemoTest('switch', { skip: ['loading.tsx'] });
});
