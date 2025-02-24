import { useState } from "react";
const initialTasks = ['Fare la spesa', 'Pulire casa', 'Fare il bucato', 'vivere'];

const Main = () => {

    const [arrayTasks, setArrayTasks] = useState(initialTasks);

    const [newTask, setNewTask] = useState('');


    const addNewTask = (e) => {
        e.preventDefault(); 
        if (newTask.trim() === "") return alert("Nooooo, vuoto nooooo!");
        setArrayTasks([...arrayTasks, newTask]);
        setNewTask(' ');

    };

    const removeTheTask= (indiceEl) => {

        const filteredArray = arrayTasks.filter((el, idx)=> idx!=indiceEl)
        return setArrayTasks(filteredArray);

    }

    return (
    <>
        <div className="container">

            <ul>
                    {arrayTasks.map((el, idx) => {
                        
                        return (
                            
                            <li key={idx}>
                                {el}


                                <button onClick={()=> removeTheTask(idx)}>
                                    X
                                </button>

                            </li>
                        )
                        
                    })}     
            </ul>
          
        </div>
        <div className="container">
                
            <form onSubmit={addNewTask}>
                <input
                    type="text"
                    placeholder = "Inserisci le tue Task!"
                    onChange={(e) => setNewTask(e.target.value)}
                    value={newTask}
                    />
                    
                <div className="container">

                    <button >Aggiungi il nuovo task</button>


                </div>

            </form>

        </div>
    </>


    )
}

export default Main;