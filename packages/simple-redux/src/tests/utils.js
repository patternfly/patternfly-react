export const basicState = {
  someValue: 1
};

export const reducersHash = {
  someAction: (currState, action) => ({ ...currState, someValue: 2 })
};

export const complexHash = {
  actionOne: (currState, action) => ({ ...currState, actionOne: 'actionOne' }),
  actionTwo: (currState, action) => ({ ...currState, actionTwo: 'actionTwo' })
};

export const someReducer = (state, action) => {
  switch (action.type) {
    case 'otherAction':
      return {
        ...state,
        otherValue: 'something'
      };
    case 'anotherAction':
      return {
        ...state,
        anotherValue: 'another'
      };
    default:
      return { ...state };
  }
};
