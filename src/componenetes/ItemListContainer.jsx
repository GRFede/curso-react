import React from 'react'
import ItemList from './ItemList'

//COMPONENTE CONTENEDOR

const ItemListContainer = ({greeting}) => {


    const productos = [
    {nombre:"Producto A", descripcion:"Descripcion de productos A", precio: 1000},
    {nombre:"Producto B", descripcion:"Descripcion de productos B", precio: 1500},
    {nombre:"Producto C", descripcion:"Descripcion de productos C", precio: 2000}
    ]

   return (
   <>
    <div>{greeting}</div>

        <ItemList
            productos={productos}
            />
    </>
    )
}

export default ItemListContainer