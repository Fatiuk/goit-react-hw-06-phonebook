const { filterInitialState } = require('redux/filter/initialState');

export const filtersReducer = (state = filterInitialState.filter, action) => {
  switch (action.type) {
    case 'filter/setQueryFilter':
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};
