const initialState = {
  detailLookupTable: {},
}

const SET_TITLE = 'DetailState/SET_TITLE'

export const setTitle = (title, id) => ({
  type: SET_TITLE,
  payload: {
    title,
    id,
  },
})

export default detailReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_TITLE:
      return {
        ...state,
        detailLookupTable: {
          ...state.detailLookupTable,
          [action.payload.id]: {
            ...state.detailLookupTable[action.payload.id],
            title: action.payload.title
          }
        }
      }

    default:
      return state
  }
}
