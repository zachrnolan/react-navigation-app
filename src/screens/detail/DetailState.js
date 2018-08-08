const initialState = {
  detailLookupTable: {},
}

const SET_TITLE = 'DetailState/SET_TITLE'
export const GET_USERS_REQUEST = 'DetailState/GET_USERS_REQUEST'
export const GET_USERS_SUCCESS = 'DetailState/GET_USERS_SUCCESS'

export const setTitle = (title, id) => ({
  type: SET_TITLE,
  payload: {
    title,
    id,
  },
})

export const getUsers = id => ({
  type: GET_USERS_REQUEST,
  payload: {
    id,
  }
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

    case GET_USERS_SUCCESS:
      return {
        ...state,
        detailLookupTable: {
          ...state.detailLookupTable,
          [action.payload.id]: {
            ...state.detailLookupTable[action.payload.id],
            users: action.payload.users
          }
        }
      }

    default:
      return state
  }
}
