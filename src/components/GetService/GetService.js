import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './GetService.css';
const GetService = () => {
    const { teacherId } = useParams();
    const [teacher, setTeacher] = useState({})
    useEffect(() => {
        const url = `./data.JSON/teacher/${teacherId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTeacher(data));

    }, []);
    return (
        <div className="py-5 text-center">
            <h2>{teacherId}</h2>
            <span>{teacher.name}</span>
        </div>
    );
};

export default GetService;