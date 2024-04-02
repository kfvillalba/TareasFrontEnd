import React, { useEffect, useState } from 'react'
import CategoriaSideNavBar from './components/CategoriaSideNavBar'
import './index.css'

export default function App() {
  //   useEffect(() => {
  //     viewPost();
  // }, []);

  // const [ispost, setpost] = useState([]);
  // const viewPost = async() =>{
  //   try {
  //     await fetch(`http://localhost:8000/allPost`)
  //     .then(res => {
  //       if(res.data.success === true){
  //         setpost(res.data.listall);
  //       }
  //     })
  //   } catch (error) { throw error;}
  // }
  return (
    <div>
      <CategoriaSideNavBar />
    </div>
  )
}
