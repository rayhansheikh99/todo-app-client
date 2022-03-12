import React, { useEffect, useState } from 'react';
import Tasks from '../Tasks/Tasks';
import './alltask.css'

const AllTask = () => {

    const [tasks, setTasks]=useState([])
    // data fetch from database
    useEffect(()=>{
        fetch('https://serene-coast-78648.herokuapp.com/alltask')
        .then(res=>res.json())
        .then(data=> setTasks(data))

    },[])
    return (
        <div className='tasks'>
            <div>
            {
              tasks.map(task=> <Tasks key={task._id} task={task}/>)
              
            }
            </div>
        </div>
    );
};

export default AllTask;