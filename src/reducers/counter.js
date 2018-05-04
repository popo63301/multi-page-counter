export const counter = (state = {
  page1: 0,
  page2: 0,
  page3: 0
}, action) => {
  switch (action.type) {
    case 'INCREASE':
      var page = action.page

      return Object.assign({}, state, {
        [page]: ++state[page]
      })
    default:
      return state
  }
}
