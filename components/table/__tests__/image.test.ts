import { imageDemoTest } from '../../../tests/shared/imageTest';

describe('table image', () => {
  imageDemoTest('table', { skip: ['virtual-list.tsx'] });
});
