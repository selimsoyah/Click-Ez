import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SingleTask from './SingleTask';
import List from './List';


function AddTask() {
    const lists =[
         ]
    const[task,setTask] = useState("")
    const[listTask,setListTask] = useState(lists)
    const len = listTask.length 
    return (
        
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
                }}>
                    ADD
                </Button>
            </Form>
            {console.log(listTask)}
                 <List list = {listTask} />
              
        </div>
    );
}

export default AddTask;
