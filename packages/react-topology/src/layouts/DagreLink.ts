import Point from '../geom/Point';
import { LayoutLink } from './LayoutLink';
export class DagreLink extends LayoutLink {
  public points?: { x: number; y: number }[];
  updateBendpoints(): void {
    if (this.points && !this.isFalse && this.points.length > 2) {
      this.element.setBendpoints(this.points.slice(1, -1).map((point: any) => new Point(point.x, point.y)));
    }
  }
}
