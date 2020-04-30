import Dimensions from '../Dimensions';

describe('Dimensions', () => {
  it('should provide an empty instance', () => {
    expect(Dimensions.EMPTY).toEqual({ width: 0, height: 0 });
  });

  it('should re-use single use instance', () => {
    expect(Dimensions.singleUse()).toBe(Dimensions.singleUse());
    expect(Dimensions.singleUse()).toEqual({ width: 0, height: 0 });
    expect(Dimensions.singleUse(1)).toEqual({ width: 1, height: 0 });
    expect(Dimensions.singleUse(1, 2)).toEqual({ width: 1, height: 2 });
  });

  it('should create a new Dimensions from existing Dimensions', () => {
    const d1 = new Dimensions(5, 10);
    const d2 = Dimensions.fromDimensions(d1);
    expect(d1).not.toBe(d2);
    expect(d1).toEqual(d2);
  });

  it('should create a Dimensions', () => {
    expect(new Dimensions()).toEqual({ width: 0, height: 0 });
    expect(new Dimensions(1)).toEqual({ width: 1, height: 0 });
    expect(new Dimensions(1, 2)).toEqual({ width: 1, height: 2 });
  });

  it('should be empty if no height or width', () => {
    expect(new Dimensions().isEmpty()).toBe(true);
    expect(new Dimensions(1, 0).isEmpty()).toBe(true);
    expect(new Dimensions(0, 1).isEmpty()).toBe(true);
    expect(new Dimensions(1, 1).isEmpty()).toBe(false);
  });

  it('should set size', () => {
    const d = new Dimensions(8, 9);
    expect(d.setSize(2, 3)).toBe(d);
    expect(d).toEqual({ width: 2, height: 3 });
  });

  it('should scale Dimensions', () => {
    const d = new Dimensions(4, 6);
    expect(d.scale(2)).toBe(d);
    expect(d).toEqual({ width: 8, height: 12 });
    d.scale(0.5, 2);
    expect(d).toEqual({ width: 4, height: 24 });
  });

  it('should resize the Dimensions', () => {
    const d = new Dimensions(8, 9);
    expect(d.resize(2, 3)).toBe(d);
    expect(d).toEqual({ width: 10, height: 12 });
  });

  it('should expand the Dimensions in size', () => {
    const d = new Dimensions(8, 9);
    expect(d.expand(4, 5)).toBe(d);
    expect(d).toEqual({ width: 16, height: 19 });
  });

  it('should clone Dimensions', () => {
    const d1 = new Dimensions(5, 10);
    const d2 = d1.clone();
    expect(d1).not.toBe(d2);
    expect(d1).toEqual(d2);
  });

  it('should check Dimensions equality', () => {
    const d1 = new Dimensions(5, 10);
    const d2 = new Dimensions(5, 10);
    const d3 = new Dimensions(1, 2);
    expect(d1.equals(d2)).toBe(true);
    expect(d1.equals(d3)).toBe(false);
  });
});
