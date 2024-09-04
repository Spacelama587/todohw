import React from 'react'

function Header() {
  return (
    <div style={{display: "flex", justifyContent: "space-between", border:"1px solid #d4d4d8", alignItems: "center", borderBottom: "10px", padding: "30px"}}>
    <div>My My Todo List</div>
    <div>React</div>
    </div>
  )
}

export default Header