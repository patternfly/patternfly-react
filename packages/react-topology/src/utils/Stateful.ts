import { action, observable } from 'mobx';
import { WithState, State } from '../types';

export default class Stateful implements WithState {
  @observable.shallow
  private state: State = {};

  getState<S = {}>(): S {
    return this.state as S;
  }

  @action
  setState(state: State): void {
    if (state) {
      Object.assign(this.state, state);
    }
  }
}
