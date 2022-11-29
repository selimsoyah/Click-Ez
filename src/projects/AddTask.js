import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SingleTask from './SingleTask';
import {FaPlusSquare} from 'react-icons/fa'
import List from './List';
import "./addTask.css"


function AddTask() {
    const lists =[
         ]
    const[task,setTask] = useState("")
    const[listTask,setListTask] = useState(lists)
    const [view , setView]= useState(true)
    const len = listTask.length 
    const addTaskBar = ()=>{
        setView(false)
    }
    const removeTaskBar = ()=>{
        setView(true)
    }
    return (
        
       <div className='AddTask'>
            {view ? (
                <div className='addButton'>
                <FaPlusSquare onClick={addTaskBar} id="button"/>
                </div>
            ):(
                <div className='List'>
                < Form style={{ width: "50%", margin: "auto", marginBottom: "100px" ,marginTop: "50px" }} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
    
                        <Form.Control
                            type="text" placeholder="Enter Your Task" onChange={(e)=>{
                                setTask(e.target.value)
                            }}/>
                    </Form.Group>
                    <Button variant="primary" type="submit"  onClick={(e)=>{
                        e.preventDefault()
                        setListTask([...listTask,{id:len , text : task ,done: false, date: new Date(),visibility:true , priority:false}])
                        removeTaskBar()
                    }}>
                        ADD
                    </Button>
                    <Button variant='danger' onClick={removeTaskBar}>Cancel</Button>
                </Form>
                {console.log(listTask)}
            </div>
            )}
            <List list = {listTask} />
       </div>
    );
}

export default AddTask;
