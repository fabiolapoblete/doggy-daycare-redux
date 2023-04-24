import { store } from "../store/dogsStore";

const ourDogsReducer = (state = store, action) => {
  switch (action.type) {
    case "SET_DOGS":
      return {
        ...state,
        dogs: action.payload, //Hade också kunnat stå store.dogs
      };
    case "FILTER_DOGS":
      return {
        ...state,
        dogs: action.payload,
      };
    default:
      return state;
  }
};

export default ourDogsReducer;
