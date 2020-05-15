import AbstractAnchor from '../AbstractAnchor';
import { Node } from '../../types';
import { Point, Rect } from '../../geom';
import { BaseNode } from '../../elements';

class TestAnchor extends AbstractAnchor {
  getOwner(): Node {
    return this.owner;
  }

  getOffset() {
    return this.offset;
  }

  getLocation(): Point {
    return Point.EMPTY;
  }
}

describe('AbstractAnchor', () => {
  it('should have an owner and offset', () => {
    const node = new BaseNode();
    let anchor = new TestAnchor(node);
    expect(anchor.getOffset()).toBe(0);
    expect(anchor.getOwner()).toBe(node);
    anchor = new TestAnchor(node, 10);
    expect(anchor.getOffset()).toBe(10);
  });

  it('should default to node center reference point', () => {
    const node = new BaseNode();
    node.setBounds(new Rect(0, 0, 10, 10));
    expect(new TestAnchor(node).getReferencePoint()).toEqual({ x: 5, y: 5 });
    expect(new TestAnchor(node, 4).getReferencePoint()).toEqual({ x: 9, y: 9 });
  });
});
