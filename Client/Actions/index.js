export function selectUnit(unit) {
  //selectUnit is an ActionCreator, it needs to return an action, an object with a type property.
  return {
    type: 'UNIT_SELECTED',
    payload: unit
  };
}

