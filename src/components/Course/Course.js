import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Teacher from '../Teacher/Teacher';
import './Course.css';
const Course = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        fetch(`./data.JSON`)
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, []);
    return (
        <div className="bg-dark">
            <Container className=" text-white">
                <h2 className="text-center pt-5 services-top" >Our Services</h2>
                <div className="course">
                    {
                        teachers.map(teach => <Teacher
                            key={teach.id}
                            teacher={teach}
                        ></Teacher>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Course;