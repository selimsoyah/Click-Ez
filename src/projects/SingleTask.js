import React from 'react';
import "./singleTask.css"
import './list.css'
import { BiTrashAlt } from "react-icons/bi";
function SingleTask({ task }) {
    return (
        <div className={task.visibility == false ? 'Button' : 'noButton'} >
            < div className={task.done == true ? 'boxDone' : 'boxUnDone'} >
            
                <h2 className={task.done == true ? 'done' : 'unDone'}>{task.text}</h2>
                
                <div className='secBox'>
                    <input className="check" type="checkbox" value="done" onClick={(e) => {
                        if (e.target.checked == true) {
                            task.done = true
                        }
                        else {
                            task.done = false
                        }
                    }} /> Done


                    <input className="check" type="checkbox" value="priority" onClick={(e) => {
                        if (e.target.checked == true) {
                            task.priority = true
                        }
                        else {
                            task.priority = false
                        }
                    }} /> High 


                    <div className='date'>
                        <p>
                            {task.date.getDate()}

                            {task.date.toLocaleString('default', { month: 'long' })}

                            {task.date.getFullYear()}
                        </p>
                    </div>

                    <button variant="danger" onClick={() => {
                        task.visibility = false
                    }}><BiTrashAlt /></button>
                </div>

            </div >

        </div>
    );
}
export default SingleTask;
