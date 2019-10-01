import { SelectOptionObject } from '@patternfly/react-core';

export class State implements SelectOptionObject {
  name: string;
  abbreviation: string;
  capital: string;
  founded: number;
  constructor(name: string, abbreviation: string, capital: string, founded: number) {
    this.name = name;
    this.abbreviation = abbreviation;
    this.capital = capital;
    this.founded = founded;
  }
  toString = () => `${this.name} (${this.abbreviation}) - Founded: ${this.founded}`;
}
