import * as d3 from 'd3';
import { action } from 'mobx';

export interface ForceSimulationNode extends d3.SimulationNodeDatum {
  id: string;
  collisionRadius: number;
  update(): void;
}

interface ForceSimulationOptions {
  collideDistance: number;
  simulationSpeed: number;
  chargeStrength: number;
}

class ForceSimulation {
  private forceLink: d3.ForceLink<ForceSimulationNode, d3.SimulationLinkDatum<ForceSimulationNode>>;

  private simulation: any;

  private options: ForceSimulationOptions;

  private destroyed = false;

  constructor(options?: Partial<ForceSimulationOptions>) {
    this.options = {
      ...{
        collideDistance: 0,
        simulationSpeed: 10,
        chargeStrength: 0
      },
      ...options
    };

    this.setupForceSimulation();
  }

  private setupForceSimulation(): void {
    this.simulation = d3.forceSimulation<ForceSimulationNode>();
    this.simulation.force(
      'collide',
      d3.forceCollide<ForceSimulationNode>().radius(d => d.collisionRadius + this.options.collideDistance)
    );
    this.simulation.force('charge', d3.forceManyBody().strength(this.options.chargeStrength));
    this.simulation.alpha(0);
    this.forceLink = d3.forceLink<ForceSimulationNode, d3.SimulationLinkDatum<ForceSimulationNode>>().id(e => e.id);

    this.simulation.force('link', this.forceLink);
    this.simulation.on(
      'tick',
      action(() => {
        // speed up the simulation
        for (let i = 0; i < this.options.simulationSpeed; i++) {
          this.simulation.tick();
        }
        this.simulation.nodes().forEach((d: ForceSimulationNode) => !this.destroyed && d.update());
      })
    );
  }

  public destroy(): void {
    this.destroyed = true;
    this.simulation.stop();
  }

  public useForceSimulation(
    nodes: ForceSimulationNode[],
    links: d3.SimulationLinkDatum<ForceSimulationNode>[],
    distance: (
      link: d3.SimulationLinkDatum<ForceSimulationNode>,
      i: number,
      links: d3.SimulationLinkDatum<ForceSimulationNode>[]
    ) => number
  ): void {
    this.forceLink.distance(distance);

    // first remove the links so that the layout doesn't error
    this.forceLink.links([]);

    this.simulation.nodes([...nodes]);
    this.forceLink.links([...links]);
  }

  public haltForceSimulation(): void {
    this.simulation.alpha(0);
    this.simulation.nodes([]);
    this.forceLink.links([]);
  }

  public forceCenter(cx: number, cy: number): void {
    this.simulation.force('center', d3.forceCenter(cx, cy));
  }

  public stopSimulation(): void {
    this.simulation.stop();
  }

  public restart() {
    this.simulation.restart();
  }

  public alpha(value: number) {
    this.simulation.alpha(value);
  }

  public alphaTarget(value: number) {
    this.simulation.alphaTarget(value);
  }
}

export { ForceSimulation };
