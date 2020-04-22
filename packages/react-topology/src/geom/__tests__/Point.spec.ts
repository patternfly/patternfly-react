import Point from '../Point';

describe('Point', () => {
  it('should provide an empty instance', () => {
    expect(Point.EMPTY).toEqual({ x: 0, y: 0 });
  });

  it('should re-use single use instance', () => {
    expect(Point.singleUse()).toBe(Point.singleUse());
    expect(Point.singleUse()).toEqual({ x: 0, y: 0 });
    expect(Point.singleUse(1)).toEqual({ x: 1, y: 0 });
    expect(Point.singleUse(1, 2)).toEqual({ x: 1, y: 2 });
  });

  it('should create a new Point from existing Point', () => {
    const p1 = new Point(5, 10);
    const p2 = Point.fromPoint(p1);
    expect(p1).not.toBe(p2);
    expect(p1).toEqual(p2);
  });

  it('should create a Point', () => {
    expect(new Point()).toEqual({ x: 0, y: 0 });
    expect(new Point(1)).toEqual({ x: 1, y: 0 });
    expect(new Point(1, 2)).toEqual({ x: 1, y: 2 });
  });

  it('should set location', () => {
    const p = new Point(5, 10);
    expect(p.setLocation(2, 3)).toBe(p);
    expect(p).toEqual({ x: 2, y: 3 });
  });

  it('should negate point', () => {
    const p = new Point(5, 10);
    expect(p.negate()).toBe(p);
    expect(p).toEqual({ x: -5, y: -10 });
  });

  it('should translate point', () => {
    const p = new Point(5, 10);
    expect(p.translate(2, 3)).toBe(p);
    expect(p).toEqual({ x: 7, y: 13 });
  });

  it('should scale point', () => {
    const p = new Point(5, 10);
    expect(p.scale(2)).toBe(p);
    expect(p).toEqual({ x: 10, y: 20 });
    p.scale(1.5, 2);
    expect(p).toEqual({ x: 15, y: 40 });
  });

  it('should clone point', () => {
    const p1 = new Point(5, 10);
    const p2 = p1.clone();
    expect(p1).not.toBe(p2);
    expect(p1).toEqual(p2);
  });

  it('should check point equality', () => {
    const p1 = new Point(5, 10);
    const p2 = new Point(5, 10);
    const p3 = new Point(1, 2);
    expect(p1.equals(p2)).toBe(true);
    expect(p1.equals(p3)).toBe(false);
  });
});
