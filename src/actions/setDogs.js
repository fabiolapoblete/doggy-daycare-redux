import { store } from "../store/dogsStore";

export const setDogs = () => ({
  type: "SET_DOGS",
  payload: store.dogs, //Hade kunnat skippa payload här om jag kör store.dogs i reducern
});
