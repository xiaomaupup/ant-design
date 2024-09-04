import { imageDemoTest } from '../../../tests/shared/imageTest';

describe('tree image', () => {
  imageDemoTest('tree', { skip: ['virtual-scroll.tsx', 'big-data.tsx'] });
});
