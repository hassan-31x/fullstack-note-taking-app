import { useState, useEffect } from 'react'
import './App.css'
// import axios from 'axios';
import DUMMY_NOTES from './assets/DUMMY_NOTES';

function App() {

  const [notesList, setNotesList] = useState<{ text: string }[]>([])

  useEffect(() => {
    setNotesList(DUMMY_NOTES)
    console.log(DUMMY_NOTES)
  }, [])
  
  
    // try {
    //   const response = await axios.get('http://localhost:5000/notes')
    //   console.log(response)
    // } catch (err) {
    //   console.error(err)
    // }

  return (
    <>
      <div>Notes Application</div>
        <div> 
          {notesList.map((note, index) => (
            <div key={index}>
              <h4>{note?.text}</h4>
              <h5>{note?.link}</h5>
            </div>
          ))}
        </div>
    </>
  )
}

export default App
