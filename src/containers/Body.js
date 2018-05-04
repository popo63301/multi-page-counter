import React from 'react'
import { connect } from 'react-redux'
import { increase } from '../actions'

const body = ( { page, counter, onButtonClick}) => {
  var numpage = page.charAt(4)

  return (
    // eslint-disable-next-line
    <div>
    <h3>Vous êtes à la page {numpage} </h3>
    <p>{counter[page]}</p>
    <button type="button" onClick={() => onButtonClick(page)}>Incrémenter!</button>
    </div>
  )
}



const mapStateToProps = (state) => ({
  counter: state.counter
})

const mapDispatchToProps = {
  onButtonClick: increase
}

const Body = connect(
  mapStateToProps,
  mapDispatchToProps
)(body)



export default Body
