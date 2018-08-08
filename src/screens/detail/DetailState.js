const initialState = {
  title: '',
}

const SET_TITLE = 'DetailState/SET_TITLE'

export const setTitle = title => ({
  type: SET_TITLE,
  payload: {
    title,
  },
})

export default detailReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_TITLE:
      return state.set('title', action.payload.title)

    default:
      return state
  }
}
