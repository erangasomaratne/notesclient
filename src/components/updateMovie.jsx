import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import {  useDispatch } from 'react-redux';
import { updateMovie } from '../redux/notes-reducer/notesAction';

const UpdateMovie = ({ match }) => {
    const movieId = match.params.id;
    const [ movieName, setMovieName ] = useState("");
    const [ review, setReview ] = useState("");
    //const { users } = useSelector(state => state.users);
    const dispatch = useDispatch();
    //const movie = users.find(user => user.id === movieId);

    useEffect(() => {
        setMovieName("Street Kings");
        setReview("Best movie ever");

    },[]);
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateMovie({ id:movieId, movieName, review}));
        setMovieName("");
        setReview("");
    }
    return (
        <div>
            <h1>Update Movie Details</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                <Form.Label>Movie Name</Form.Label>
                <Form.Control type="input" placeholder="enter movie" value={movieName} onChange={e => setMovieName(e.target.value)}>                            
                </Form.Control>
                </Form.Group>
                <Form.Group>
                <Form.Label>Review</Form.Label>
                <Form.Control type="input" placeholder="enter review" value={review} onChange={e => setReview(e.target.value)}>                            
                </Form.Control>
                </Form.Group>
                <Button type="submit" variant="dark">Update</Button>
            </Form>
        </div>
    );
};

export default UpdateMovie;