import { ColorTypes } from './colorTypes';
import { formatColor } from './formatColor';

describe('formatColor()', () => {
  it('formatColor returns correct string', () => {
    expect(formatColor([255, 0, 0, 1], ColorTypes.rgba)).toEqual('rgba(255, 0, 0, 1)');
    expect(formatColor([255, 0, 0], ColorTypes.rgba)).toEqual('rgba(255, 0, 0, 1)');
    expect(formatColor([255, 0, 0], ColorTypes.rgb)).toEqual('rgb(255, 0, 0)');
    expect(formatColor([120, 60, 40], ColorTypes.hsla)).toEqual('hsla(120, 60%, 40%, 1)');
  });
});
