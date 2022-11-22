import React from 'react';
import SingleTask from './SingleTask';
import './list.css'
function List({ list }) {
    return (
        <div className='List' style={{ display: "flex", justifyContent: "space-around" , borde:"2px,solid,black"}}>
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
