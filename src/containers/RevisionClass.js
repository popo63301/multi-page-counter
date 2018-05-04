import React, {Component} from 'react'
import { connect } from 'react-redux'
import { increase } from '../actions'

class body extends Component {


  render() {
  return (
    <div>
    <div>
    hello {this.props.counter.page1}
    </div>
    <div>
    <button onClick={() => this.props.onButtonClick('page1')}>hello</button>
    </div>
    </div>
  )
  }

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
