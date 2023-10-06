export const setQueryFilter = value => {
  return {
    type: 'filter/setQueryFilter',
    payload: value,
  };
};
