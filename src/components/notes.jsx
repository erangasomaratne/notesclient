import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { deleteMovie, listUsers } from '../redux/notes-reducer/notesAction';



const Notes = () => {
    const dispatch = useDispatch();
    const { users } = useSelector(state => state.users);
    
    
    
    useEffect(() => {
        dispatch(listUsers());            
    },[dispatch]);

    const handleDelete = id => {
        if(window.confirm("are you sure you want to delete")){
            dispatch(deleteMovie(id));
        }
        
    }
    return (
        <div>
            <h1>Notes</h1>
            {
                users.map(user =><div key={user.id}> <p >{user.review}</p>
                    <Button variant="dark"><Link to={`/updatemovie/${user.id}`}>Update</Link></Button>
                    <Button variant="danger" onClick={() => handleDelete(user.id)}>Delete</Button>
                    </div>)
            }
        </div>

    );
};

export default Notes;