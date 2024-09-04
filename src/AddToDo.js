import React, { useState } from 'react'
import './App.css'

function AddToDo() {
   const [title, setTitle] = useState("")
   const [content, setContent] = useState("")
   const [toDo, setToDo] = useState([])
   const [completedToDo, setCompletedToDo] = useState([])
   const [idCounter, setIdCounter] = useState(0)
    
   function addItemsTotodoList() {
    if(title && content) {
      const newToDo = {id: idCounter, title, content, isDone: false}
      setToDo([...toDo, newToDo])
      setTitle("")
      setContent("")
      setIdCounter(idCounter + 1)
    }
   }

   const deleteToDo = (id, isCompleted = false) => {
     if (isCompleted) {
       setCompletedToDo(completedToDo.filter(item => item.id !== id))
     } else {
       setToDo(toDo.filter(item => item.id !== id))
     }
   }

   const completeToDo = (id) => {
     const itemToComplete = toDo.find(item => item.id === id)
     if (itemToComplete) {
       setToDo(toDo.filter(item => item.id !== id))
       setCompletedToDo([...completedToDo, {...itemToComplete, isDone: true}])
     }
   }

   const moveBackToWorking = (id) => {
     const itemToMoveBack = completedToDo.find(item => item.id === id)
     if (itemToMoveBack) {
       setCompletedToDo(completedToDo.filter(item => item.id !== id))
       setToDo([...toDo, {...itemToMoveBack, isDone: false}])
     }
   }

  return (
    <>
    <div className='form-container'>
      <div className='input-container'>
        <div>
        <label>
        Title
        <input type="text" value={title}
        onChange={(e) => setTitle(e.target.value)}
        />  
        </label>
        </div>

        <div>
        <label>
        Content
        <input type="text" value={content}
        onChange={(e) => setContent(e.target.value)}
        />
        </label>
        </div>
        </div>
        <div>
            <button onClick={addItemsTotodoList}>Add</button>
        </div>
    </div>
    <WorkingContainer toDo={toDo} onDelete={deleteToDo} onComplete={completeToDo} />
    <CompletedContainer completedToDo={completedToDo} onMoveBack={moveBackToWorking} onDelete={deleteToDo} />
    </>
  )
}

function ContainerBoxWorking({ id, title, content, onDelete, onComplete }) {
  return (
    <div className='containerBoxWorking-parent'>
      <div className="containerBoxWorking">
          <h3 className="title">
              {title}
          </h3>

          <p className="content">
              {content}
          </p>

          <div className="button-container">
              <div>
              <button className='done-button' onClick={() => onComplete(id)}>Done</button>
              </div>
              <div>
              <button className='delete-button' onClick={() => onDelete(id)}>Delete</button>
              </div>
          </div>
      </div>
    </div>
  )
}

function ContainerBoxCompleted({ id, title, content, onDelete, onMoveBack }) {
  return (
    <div className='containerBoxWorking-parent'>
      <div className="containerBoxWorking">
          <h3 className="title">
              {title}
          </h3>

          <p className="content">
              {content}
          </p>

          <div className="button-container">
              <div>
              <button className='done-button' onClick={() => onMoveBack(id)}>Cancel</button>
              </div>
              <div>
              <button className='delete-button' onClick={() => onDelete(id, true)}>Delete</button>
              </div>
          </div>
      </div>
    </div>
  )
}

function WorkingContainer({ toDo, onDelete, onComplete }) {
  return (
    <div className="workingContainer">
        <h2>Working🔥...</h2>
        <div className='containerBoxWorking-parent'>
            {toDo.map((item) => (
                <ContainerBoxWorking 
                  key={item.id} 
                  id={item.id}
                  title={item.title} 
                  content={item.content} 
                  onDelete={onDelete}
                  onComplete={onComplete}
                />
            ))}
        </div>
    </div>
  )
}

function CompletedContainer({ completedToDo, onMoveBack, onDelete }) {
  return (
    <div className="completedContainer">
        <h2>Completed 🎉...</h2>
        <div className='containerBoxWorking-parent'>
            {completedToDo.map((item) => (
                <ContainerBoxCompleted 
                  key={item.id} 
                  id={item.id}
                  title={item.title} 
                  content={item.content} 
                  onDelete={onDelete}
                  onMoveBack={onMoveBack}
                />
            ))}
        </div>
    </div>
  )
}

export default AddToDo