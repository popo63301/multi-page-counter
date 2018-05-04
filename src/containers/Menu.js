import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {

  return (
    // eslint-disable-next-line
    <div>
    Menu: <Link to="/">Page 1</Link> - <Link to="/page2">Page 2</Link> - <Link to="/page3">Page 3</Link>
    </div>
  )
}




export default Menu
