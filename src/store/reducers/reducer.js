const initialState = {
  data: ''
};

const reducer = (state = initialState, action) => {

  const newState = { ...state };
  switch (action.type) {
    case "LOADING":
      newState.loading = true;
      break;

    case "LOAD_DATA":
      newState.loading = false;
      newState.data = action.value;
      break;

    case "LOAD_DATA_ERROR":
      newState.loading = false;
      newState.data = 'Error';
      break;

    default:
      return newState;
  }
  return newState;
};

export default reducer;
