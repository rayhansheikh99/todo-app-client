import React, { useState } from 'react';
import { HiCheck } from 'react-icons/hi';
import axios from "axios";

import './home.css'

const Home = () => {
    const [postData, setPostData] = useState({});

    const handleInputField = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newPostData = { ...postData };
        newPostData[field] = value;
        setPostData(newPostData);
        
      };

     

      const handleSubmit = e => {
        const data = {
            ...postData,
            
          };
        axios
        .post('https://serene-coast-78648.herokuapp.com/tasks',data) 
        .then((res) => {
            if (res.status === 200) {
                window.location.reload();
               
            } else Promise.reject();
          })
          .catch((err) => alert("Something went wrong"));
      
            e.preventDefault() 
       
        };

    return (
        <div className='todo-home'>
            <h1>All Tasks</h1>
            <form onSubmit={handleSubmit}>
                <input onBlur={handleInputField} name="task"  className='todo-input' type="text" placeholder='Today Task' required/>
                <button type="submit" className='btn-hi'><HiCheck /></button>
                
            </form>
        </div>
    );
};

export default Home;