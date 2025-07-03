import '@testing-library/jest-dom';

import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as any;

declare global {
  const jest: any;
  const describe: any;
  const it: any;
  const expect: any;
  const beforeEach: any;
  const afterEach: any;
  const test: any;
}
