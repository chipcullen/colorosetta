import { colorTypes } from './colorTypes';
import { formatColor } from './formatColor';

describe('formatColor()', () => {
  it('formatColor returns correct string', () => {
    expect(formatColor([255, 0, 0, 1], colorTypes.rgba)).toEqual('rgba(255, 0, 0, 1)');
    expect(formatColor([255, 0, 0], colorTypes.rgba)).toEqual('rgba(255, 0, 0, 1)');
    expect(formatColor([255, 0, 0], colorTypes.rgb)).toEqual('rgb(255, 0, 0)');
    expect(formatColor([120, 60, 40], colorTypes.hsla)).toEqual('hsla(120, 60%, 40%, 1)');
  });
});
