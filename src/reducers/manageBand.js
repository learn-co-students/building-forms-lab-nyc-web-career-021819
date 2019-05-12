const defaultState = { bands: [] }

export default function manageBand(state = defaultState, action) {
  switch(action.type) {
    case 'ADD_BAND':
      return { ...state, bands:[...state.bands, action.band] }
    default:
      return state
  }
};
