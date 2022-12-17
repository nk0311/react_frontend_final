import * as at from "../actions/actionTypes";

// REDUCER;
const allEmployees = (state = [], action) => {
  switch (action.type) {
    case at.FETCH_ALL_EMPLOYEES:
      return action.payload;
      case at.ADD_EMPLOYEE:
        return [...state, action.payload]
      // case at.DELETE_TASK:
      //   return state.filter(task => task.id!==action.payload);
      // case at.EDIT_TASK:
      //   return state.map(task => { 
      //     return (
      //       task.id===action.payload.id ? action.payload : task
      //     );
      //   });
    default:
      return state;
  }
};

export default allEmployees;