import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import reducer from './reducers'
import { BrowserRouter, Route } from 'react-router-dom'


const store = createStore(reducer)

// console.log(JSON.stringify(store.getState()))

function chouf() {

  console.log(JSON.stringify(store.getState()))
}

store.subscribe(chouf)

const Root = ({ store }) => (
  <Provider store={store}>
  <BrowserRouter>
  <div>
      <Route exact path="/" component={Page1} />
      <Route path="/page2" component={Page2} />
      <Route path="/page3" component={Page3} />
      </div>
  </BrowserRouter>
  </Provider>
)

render(
  <Root store={store} />,
  document.getElementById('root')
)

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )
