import React, { useState } from 'react';
import { TiDelete } from 'react-icons/ti';
import './tasks.css'

const Tasks = (props) => {
    const {task, _id} = props.task
    const [tasks, setTasks]=useState([])


    //delete task
    const handleDeletePost = id =>{
        const proceed = window.confirm("Are you want to delete?")
        console.log(id)
        if(proceed){
            const url = `https://serene-coast-78648.herokuapp.com/alltask/${id}`
        fetch(url, {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                window.location.reload();
                const remainingTasks = tasks.filter(task => _id!==id);
                setTasks(remainingTasks);
                
                
            }
        })
 
    }
        }
    return (
        <div className='tasks'>
            <p className='task-list'>{task}</p>
            <button onClick={()=>handleDeletePost(_id)} type="submit" className='btn-delete'><TiDelete/></button>
        </div>
    );
};

export default Tasks;