import React, { useState } from 'react';

const List = (props) => {
    const {lists, setLists} = props;

    const deleteTask = (index) => {
        setLists(lists.filter((task, i) => {
            return index !== i;
        }));
    }

    const handleCheck = (i) => {
        const copiedLists = [...lists];
        copiedLists[i].isCompleted = !copiedLists[i].isCompleted;

        setLists(copiedLists);
    }

    return(
        <div>
            {lists.map((task, i) => {
                const taskStyle = {
                    display: "inline-block"
                };

                if (task.isCompleted) {
                    taskStyle.textDecoration = "line-through";
                }
                return(
                    <div key={i}>
                        <p style={taskStyle}>{task.name}</p>
                        <input onChange={(index) => {handleCheck(i);}} type="checkbox" checked={task.isCompleted} />
                        <button onClick={(index) => {deleteTask(i);}}>Delete</button>
                    </div>
                );
            })}
        </div>
    );
}

export default List;