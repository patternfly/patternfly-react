import Dimensions from '../../geom/Dimensions';
import BaseNode from '../BaseNode';

describe('BaseNode', () => {
  it('should init dimensions', () => {
    let node = new BaseNode();
    expect(node.isDimensionsInitialized()).toBe(false);
    node.setDimensions(new Dimensions());
    expect(node.isDimensionsInitialized()).toBe(true);
    node = new BaseNode();
    node.setModel({
      id: 'test',
      type: 'test',
      width: 1,
      height: 1
    });
    expect(node.isDimensionsInitialized()).toBe(true);
  });

  it('should be invisible until dimensions are set', () => {
    const node = new BaseNode();
    node.setVisible(true);
    expect(node.isDimensionsInitialized()).toBe(false);
    expect(node.isVisible()).toBe(false);
    node.setDimensions(new Dimensions());
    expect(node.isDimensionsInitialized()).toBe(true);
    expect(node.isVisible()).toBe(true);
  });

  it('should init group dimensions based on child state', () => {
    const node = new BaseNode();
    node.setGroup(true);
    expect(node.isDimensionsInitialized()).toBe(false);

    const c1 = new BaseNode();
    node.appendChild(c1);
    expect(node.isDimensionsInitialized()).toBe(false);
    c1.setDimensions(new Dimensions());
    expect(node.isDimensionsInitialized()).toBe(true);

    node.removeChild(c1);
    expect(node.isDimensionsInitialized()).toBe(true);

    node.setGroup(false);
    expect(node.isDimensionsInitialized()).toBe(true);
  });
});
