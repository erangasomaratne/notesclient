import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form , Button } from 'react-bootstrap';
import { addReview } from '../redux/notes-reducer/notesAction';

const MovieReview = () => {

    const [ movieName, setMovieName ] = useState("");
    const [ review, setReview ] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addReview(movieName, review));
    }

    return (
        <div style={{ width:"30%"}}>
            <h1>Add Reviews</h1>
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
                <Button type="submit" variant="dark">Submit</Button>
            </Form>
        </div>
    );
};

export default MovieReview;