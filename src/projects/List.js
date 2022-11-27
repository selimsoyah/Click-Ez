import React from 'react';
import SingleTask from './SingleTask';
import { useState,useReducer } from 'react';
import './list.css'
function List({ list }) {
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    return (
        <div className='List' onChange={forceUpdate}style={{ display: "flex", justifyContent: "space-around" , marginTop:"20px"}}>
            <div className='listDisplay' >
                <h2> Assigned Tasks </h2>
                {list.map((data) => {

                   if (data.done == false && data.priority==false)
                   {
                    const { id } = data
                    return <SingleTask key={id} task={data} />
                   }
                })}
            </div>
            <div>
            <h2> High priority </h2>
            {list.map((data) => {
                    const { id } = data
                    if (data.priority == true && data.done==false)
                    {
                        return <SingleTask key={id} task={data} />
                        
                    }
                   
                })}
            </div>
            <div className='listDone'>
            <h2> Done </h2>
            {list.map((data) => {
                    const { id } = data
                    if (data.done== true)
                    {
                        return <SingleTask key={id} task={data} />
                    }
                   
                })}
            </div>
        </div>

    );
}

export default List;
