export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQCUPxpmY1anmzP1S33Ar0xE39WeX-ZUK4HKCtc14nPQ2980G1c1p35DkRxNT0RxATwn0eCOu0U8W4U6KiD0b2HFhQyztlk62mKpArTMeY147Lzm0cCIPy5zDi0q3CAWvSA_L2aPldF7jPqLDrY3YDVfdPc",
};

// Reducers will listen to an action and then continue to update the state if necessary based on the action
const reducer = (state, action) => {
  console.log(action);

  //Action -> type, [payload]
  switch (action.type) {
    case "SET_USER":
      return {
        // ...state is basically stating that we want to change the current state not override it
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        // ...state is basically stating that we want to change the current state not override it
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
