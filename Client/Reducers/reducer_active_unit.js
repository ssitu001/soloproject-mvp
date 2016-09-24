//State argument is not application state, only the state this reducer is responsible for.

export default function(state = null, action) {
  //return state if we don't care about action
  switch(action.type) {
  case 'UNIT_SELECTED':
    return action.payload;
  }
  
  return state;
}