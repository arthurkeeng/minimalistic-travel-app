import { useState } from 'react'
import Card from './components/card'
import data from './data/data'
import './App.css'
function App() {
  const [ places , setPlaces ] = useState(data)

  const clearAll = () =>{
    setPlaces([])
  }

  const deletePlace=( id ) =>{
    let newPlaces = places.filter(place => place.id !== id )
    setPlaces(newPlaces)
    console.log(id);
  }
 
 
  return (
    <main>
      <h2> This is a minimalistic travel app</h2>
      <h3> There are {places.length} nice places to travel to </h3>
      {places.map((place ) =>{
        console.log(place);
       return <Card key = {place.id} place = {place} deletePlace={(id ) => deletePlace(id)}/>
      })}
      

      <button onClick={clearAll}>clear all</button>

    </main>
  )
}

export default App
