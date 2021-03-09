import React,{useState} from 'react'
import "./index.css"
import Data from './Data'
import List from './List'

function App() {
  const [people, setPeople]= useState(Data)
  return (
    <main>
      <section className="container">
        <h3>{people.length} BirthDay's Today</h3>
        <List people={people}/>
        <button onClick={()=>{setPeople([])}}>Clear All</button>
      </section>
    </main>
  )
}

export default App
