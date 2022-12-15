import './App.css';

//using stateHook
import { useState } from 'react'; //importing use state from the react library
 
function App() {
  // let  name = 'mario'
  // const [name, setName] = useState('mario') //using array destructuring to get the two values that useStates returns us inside this array
  
  // Outputting lists 
  const [events, setEvents] = useState([
      {title:"mario's birthday bash", id: 1},
      {title:"browser's live stream", id: 2},
      {title:"race on moo moo farm", id: 3}
  ])


  const handleClick = (id) => {
    // name = 'luigi'
    // setName('luigi') //using setName and passing the new value for name, this updates the value of the name and triggers react to evaluate the whole function by running the whole component function
    
    //unsafe practice
    // setEvents(events.filter((event) => {
    //   return id !== event.id


      //safe practice
      setEvents ((preEvents)=> {
        return preEvents.filter((event) => {
          return id !== event.id
        })
      })
   //retutns a new array that has been filtered from the orginal one
    console.log(id)

   
    
  }

  return (
    <div className="App">
    {/* <h1>My name is {name}</h1> */}
    {/* <button onClick = {handleClick}>Change Name</button> */}
    
    {/* Outputting lists  */}
    {/* Cycling through an array of events and display them  */}
    {events.map((event) => (
      <div key={event.id}> 
        <h2>{event.title}</h2>
        <button onClick = {() => handleClick(event.id)}>delete event</button>
      </div>
    ))}
    </div>
  );
}

export default App;
