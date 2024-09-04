import { imageDemoTest } from '../../../tests/shared/imageTest';

describe('form image', () => {
  imageDemoTest('form', { skip: ['complex-form-control.tsx'] });
});
