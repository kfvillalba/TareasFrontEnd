import React, { useEffect, useState } from 'react'
import CategoriaSideNavBar from './components/CategoriaSideNavBar'
import './index.css'


export default function App() {
  const [categorias, setCategorias] = React.useState([
    {
    id: "1",
    nombre:"Cloud",
    tareas:[
      {
      id:"1",
      titulo:"Lorem ipsum dolor," ,
      descripcion:"sit amet consectetur adipisicing elit. Similique animi repellat praesentium debitis quod id. Voluptatibus alias, aliquam laudantium atque omnis consectetur, dolor, consequatur nostrum ullam rerum nesciunt itaque corporis!",
      fecha:"12/03/2024"
    },
      {
      id:"2",
      titulo:"Lorem ipsum dolor,ss" ,
      descripcion:"sit amet consectetur adipisicing elit. Similique animi repellat praesentium debitis quod id. Voluptatibus alias, aliquam laudantium atque omnis consectetur, dolor, consequatur nostrum ullam rerum nesciunt itaque corporis!",
      fecha:"12/03/2024"
    },
      {
      id:"3",
      titulo:"Lorem ipsum dolor," ,
      descripcion:"sit amet consectetur adipisicing elit. Similique animi repellat praesentium debitis quod id. Voluptatibus alias, aliquam laudantium atque omnis consectetur, dolor, consequatur nostrum ullam rerum nesciunt itaque corporis!",
      fecha:"12/03/2024"
    }
  ]
  }
  ])
 
  return (
    <div>
      <CategoriaSideNavBar categorias={categorias} />
    </div>
  )
}
