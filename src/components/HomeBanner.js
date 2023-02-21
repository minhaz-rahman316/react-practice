import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomeBanner = () => {

    let[todo,setTodo] = useState([])


    useEffect(() => { 

        // * fetch the data from the server

        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((res) => {
                setTodo(res.data)
            })
            .catch((err) => {
        },);  


        
          
    }, [])
    
    //? event handlers

    const DeleteEvent = (id) => {
        let DeleteId = "Delete ID =" + id;
        alert(DeleteId)

    //! API call delete event 
        
    };
    const EditEvent = (id) => {
        let EditId = "Edit ID =" + id;
        alert(EditId)

        //! API call edit event
    };
    const DetailsEvent = (id) => {
        let DetailsId = "Details ID =" + id;
        alert(DetailsId)

        //! API call details event

    };


    // * map my list


    const Mylist = todo.map((list, i) => {
        return (
            <tr>
            <td>{ list['userId'] }</td>
            <td>{ list['id'] }</td>
            <td>{ list['title'] }</td>
            <td>{list['completed']}</td>
            <td><button onClick={DeleteEvent.bind(this,list.id)} className='btn btn-primary'>Edit</button></td>      
            <td><button onClick={EditEvent.bind(this,list.id)} className='btn btn-danger'>Delete</button></td>      
            <td><button onClick={DetailsEvent.bind(this,list.id)} className='btn btn-warning'>Details</button></td>      
        </tr>
        )
     })

    return (
        <div className='container text-center'>
           <table className='table table-striped'>
            <thead>
            <tr>
            <td>User ID</td>            
            <td>ID</td>            
            <td>Title</td>            
            <td>Edit/Delete/Details</td>            
            </tr>        
            </thead>
            <tbody>
                    {Mylist}
           </tbody>    
            
                
           
        </table>
        </div>
    );
};

export default HomeBanner;