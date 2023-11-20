export interface DraggableObject {
  /** Unique id of the draggable object */
  id: string;
  /** Content rendered in the draggable object */
  content: React.ReactNode;
  /** Props spread to the rendered wrapper of the draggable object */
  props?: any;
}
