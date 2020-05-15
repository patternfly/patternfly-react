import CenterAnchor from '../CenterAnchor';
import { Rect, Point } from '../../geom';
import { BaseNode } from '../../elements';

describe('CenterAnchor', () => {
  it('should return node center location', () => {
    const node = new BaseNode();
    node.setBounds(new Rect(4, 5, 0, 0));
    expect(new CenterAnchor(node).getLocation(new Point())).toEqual({ x: 4, y: 5 });
  });

  it('should return node anchor location', () => {
    const node = new BaseNode();
    node.setBounds(new Rect(0, 0, 10, 10));
    expect(new CenterAnchor(node).getLocation(new Point(10, 5))).toEqual({ x: 5, y: 5 });
    expect(new CenterAnchor(node, 4).getLocation(new Point(100, 5))).toEqual({ x: 9, y: 5 });
    expect(new CenterAnchor(node, 4).getLocation(new Point(5, 100))).toEqual({ x: 5, y: 9 });
  });

  it('should return node center reference point', () => {
    const node = new BaseNode();
    node.setBounds(new Rect(0, 0, 10, 10));
    expect(new CenterAnchor(node).getReferencePoint()).toEqual({ x: 5, y: 5 });
  });
});
