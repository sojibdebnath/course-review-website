
import React from 'react';
import { Button } from 'react-bootstrap';
import Rating from 'react-rating';
import { useHistory } from 'react-router';
import './Teacher.css';
const Teacher = (props) => {
    const { id, name, course, price, language, students, review, update, person } = props.teacher
    let history = useHistory();
    const handleClick = () => {
        history.push(`/teacher/${id}`);
    }
    return (
        <div>
            <div className="service">
                <img src={person} alt="" />
                <h6 className="mt-3 mb-2 fw-500">Course Name: {course}</h6>
                <h5 className="mt-3 mb-2 fw-bold">Teacher Name: {name.slice(0, 15)}</h5>
                <h6 className="my-2 fw-bold">Course Price: {price}</h6>
                <h6 className="my-2 fw-bold">Language: {language}</h6>
                <h6 className="my-2 fw-bold">Enroll Students: {students}</h6>
                <Rating
                    initialRating={review}
                    readonly
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                />
                <span className="my-2">{review}</span>
                <p className="my-2 ">Update Last: {update}</p>
                <Button onClick={handleClick} className="register">Get Services</Button>
            </div>
        </div>
    );
};

export default Teacher;