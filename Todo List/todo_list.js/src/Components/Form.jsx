import React, { useState } from 'react';
import List from './List';

const Form = (props) => {
    const [lists, setLists] = useState([]);

    const [task, setTask] = useState({name: "", isCompleted: false});

    const onChange = (event) => {
        setTask({
            name: event.target.value,
            isCompleted: false
        });
    };

    const addTask = (event) => {
        event.preventDefault();
        const newLists = [...lists, task];
        setLists(newLists);

        setTask({name: "", isCompleted: false});
    }

    return(
        <div>
            <form onSubmit={addTask}>
                <input type="text" name="task" onChange={onChange} value={task.name} />
                <input type="submit" value="Add" />
            </form>
            <List lists={lists} setLists={setLists} />
        </div>
    );
}

export default Form;