import { imageDemoTest } from '../../../tests/shared/imageTest';

describe('timeline image', () => {
  imageDemoTest('timeline', { skip: ['pending.tsx'] });
});
