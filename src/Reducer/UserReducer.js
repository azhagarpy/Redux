// initial form of state
const intialState = {
  Name: "initial state",
  Age: "XX",
};

// reducer 
export const UserReducer = (state = intialState, actions) => {
  switch (actions.type) {
    //  return a json based on the action.type
    case 1:
      return (state = { Name: "state 1", Age: "YY" });
      break;
    case 2:
      return (state = { Name: "state 2", Age: "YY" });
      break;
    case 3:
      return (state = { Name: "state 3", Age: "YY" });
      break;
    case 4:
        // payload is from action(action get from dispatch function)
      return (state = actions.payload);
      break;
    default:
      return state=intialState;
  }
};
