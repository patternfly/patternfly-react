import EllipseAnchor from '../EllipseAnchor';
import { Rect, Point } from '../../geom';
import { BaseNode } from '../../elements';

describe('EllipseAnchor', () => {
  it('should return node center location', () => {
    const node = new BaseNode();
    node.setBounds(new Rect(4, 5, 0, 0));
    expect(new EllipseAnchor(node).getLocation(new Point())).toEqual({ x: 4, y: 5 });
  });

  it('should return node anchor location', () => {
    const node = new BaseNode();
    node.setBounds(new Rect(0, 0, 10, 10));
    expect(new EllipseAnchor(node).getLocation(new Point(100, 5))).toEqual({ x: 10, y: 5 });
    expect(new EllipseAnchor(node).getLocation(new Point(5, 100))).toEqual({ x: 5, y: 10 });
    expect(new EllipseAnchor(node, 4).getLocation(new Point(100, 5))).toEqual({ x: 14, y: 5 });
    expect(new EllipseAnchor(node, 4).getLocation(new Point(5, 100))).toEqual({ x: 5, y: 14 });

    // 45deg angle
    let point45 = 5 * Math.cos(45 * (Math.PI / 180)) + 5;
    let loc = new EllipseAnchor(node).getLocation(new Point(100, 100));
    expect(loc.x).toBeCloseTo(point45);
    expect(loc.y).toBeCloseTo(point45);

    // 45deg angle with offset
    point45 = 9 * Math.cos(45 * (Math.PI / 180)) + 5;
    loc = new EllipseAnchor(node, 4).getLocation(new Point(100, 100));
    expect(loc.x).toBeCloseTo(point45);
    expect(loc.y).toBeCloseTo(point45);
  });

  it('should return node center reference point', () => {
    const node = new BaseNode();
    node.setBounds(new Rect(0, 0, 10, 10));
    expect(new EllipseAnchor(node).getReferencePoint()).toEqual({ x: 5, y: 5 });
  });
});
