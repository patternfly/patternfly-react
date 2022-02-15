import { Node } from '../../types';
import { AbstractAnchor } from '../../anchors';
import { Point } from '../../geom';
import { getRectAnchorPoint } from '../../utils';

class CollapsedGroupAnchor extends AbstractAnchor<Node> {
  protected readonly width: number;

  protected readonly height: number;

  constructor(owner: Node, width: number, height: number, offset: number = 0) {
    super(owner, offset);
    this.width = width;
    this.height = height;
  }

  getLocation(reference: Point): Point {
    const center = new Point(this.owner.getPosition().x + this.width / 2, this.owner.getPosition().y + this.height / 2);

    const offset2x = this.offset * 2;
    return getRectAnchorPoint(center, this.width + offset2x, this.height + offset2x, reference);
  }
}

export default CollapsedGroupAnchor;
