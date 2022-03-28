import React, { useState, useEffect } from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import '../css/containers.css'

export default function Welcome() {

    const navigate = useNavigate()

    const [name, setName] = useState()

    const setNewName = () => {
        try {
            sessionStorage.setItem('name', name)
            switchPage()
        } catch (error) {
            console.log(error)
        }
    }

    const switchPage = () => {
        navigate('/exp')
    }

    useEffect(() => {
        setName(sessionStorage.getItem('name'))
    }, [])

    return (
        <div>
            <h1>Welcome</h1>
            <h2>How shold we call you?</h2>
            <InputGroup style={{width: '100%'}} onChange={e => setName(e.target.value)}>
                <FormControl
                    value={name}
                    placeholder="Name"
                    aria-label="Name"
                    aria-describedby="basic-addon1"
                    />  
            </InputGroup>
            <div>
                <p className='inliners'>1/3</p>
                <Button className='inliners' onClick={setNewName}>Next</Button>
            </div>
        </div>
    )
}
