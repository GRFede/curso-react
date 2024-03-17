import React from 'react'
import NavBar from "./componenetes/NavBar"
import ItemListContainer from './componenetes/ItemListContainer'

const App = () => {

  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos a mi Ecommerce"}/>
    </div>
  )
}

export default App
