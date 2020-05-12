import RectAnchor from '../RectAnchor';
import { Rect, Point } from '../../geom';
import { BaseNode } from '../../elements';

describe('RectAnchor', () => {
  it('should return node center location', () => {
    const node = new BaseNode();
    node.setBounds(new Rect(4, 5, 0, 0));
    expect(new RectAnchor(node).getLocation(new Point())).toEqual({ x: 4, y: 5 });
  });

  it('should return node anchor location', () => {
    const node = new BaseNode();
    node.setBounds(new Rect(0, 0, 10, 10));
    expect(new RectAnchor(node).getLocation(new Point(100, 5))).toEqual({ x: 10, y: 5 });
    expect(new RectAnchor(node).getLocation(new Point(5, 100))).toEqual({ x: 5, y: 10 });

    expect(new RectAnchor(node).getLocation(new Point(100, 100))).toEqual({ x: 10, y: 10 });
    expect(new RectAnchor(node, 4).getLocation(new Point(100, 5))).toEqual({ x: 14, y: 5 });
    expect(new RectAnchor(node, 4).getLocation(new Point(5, 100))).toEqual({ x: 5, y: 14 });
    expect(new RectAnchor(node, 4).getLocation(new Point(100, 100))).toEqual({ x: 14, y: 14 });
  });

  it('should return node center reference point', () => {
    const node = new BaseNode();
    node.setBounds(new Rect(0, 0, 10, 10));
    expect(new RectAnchor(node).getReferencePoint()).toEqual({ x: 5, y: 5 });
  });
});
