import './App.css';
import Modal from './components/Modals'

//using stateHook
import { useState } from 'react'; //importing use state from the react library
function App() {
  // Outputting lists 
  const [showEvents, setShowEvents] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [events, setEvents] = useState([
      {title:"Peter's birthday bash", id: 1},
      {title:"Play video games", id: 2},
      {title:"Go to the gym", id: 3}
  ])

  console.log(showModal)


  const handleClick = (id) => {
      //safe practice
      setEvents ((preEvents)=> {
        return preEvents.filter((event) => {
          return id !== event.id
        })
      })
    
  }

  const handleClose = () => {
    setShowModal(false)
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


        <button onClick={()=> setShowModal(true)}>Show Modal</button>
    {showEvents && events.map((event) => (
      <div key={event.id}> 
        <h2>{event.title}</h2>
        <button onClick = {() => handleClick(event.id)}>delete event</button>
      </div>
    ))}
    
    {showModal && (<Modal handleClose = {handleClose}>
        <h2>Terms and Conditions</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        {/* <a href="#"> find out more</a> */}
    </Modal>)}
    </div>
  );
}

export default App;
