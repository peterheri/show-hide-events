import './App.css';

//using stateHook
import { useState } from 'react'; //importing use state from the react library
function App() {
  // Outputting lists 
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
      {title:"Peter's birthday bash", id: 1},
      {title:"Play video games", id: 2},
      {title:"Go to the gym", id: 3}
  ])

  console.log(showEvents)


  const handleClick = (id) => {
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
      <h1>Upcoming Events</h1>
        {showEvents && (<div>
            <button onClick={() => setShowEvents(false)}>Hide Events</button>
        </div>
        )}
        {!showEvents && (<div>
          <button onClick={() => setShowEvents(true)}>Shows Events</button>
          </div>
        )}
    {showEvents && events.map((event) => (
      <div key={event.id}> 
        <h2>{event.title}</h2>
        <button onClick = {() => handleClick(event.id)}>delete event</button>
      </div>
    ))}
    </div>
  );
}

export default App;
