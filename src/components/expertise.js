import React, { useState, useEffect } from 'react'
import { InputGroup, Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import '../css/containers.css'

export default function Expertise() {

    const navigate = useNavigate()

    const [checked, setChecked] = useState([])

    const switchPage = (page) => {
        sessionStorage.setItem('checked', JSON.stringify(checked))
        navigate(page)
    }

    useEffect(() => {
        var arr = sessionStorage.getItem('checked')
        if (arr) {setChecked([...JSON.parse(arr)])}
    }, [])

    return (
        <div>
            <h1>Hi {}!</h1>
            <h2>What are your expertise?</h2>
            <InputGroup>
                <Form>
                    <Form.Check 
                        inline
                        checked={checked.includes("Lifestyle")}
                        label="Lifestyle"
                        name="group1"
                        type="checkbox"
                        id={`inline-checkbox-1`}
                        onChange={(e) => setChecked([...checked, "Lifestyle"])}
                    />
                    <Form.Check 
                        inline
                        checked={checked.includes("Beauty")}
                        label="Beauty"
                        name="group1"
                        type="checkbox"
                        id={`inline-checkbox-2`}
                        onChange={(e) => setChecked([...checked, "Beauty"])}
                    />
                    <Form.Check 
                        inline
                        checked={checked.includes("Food")}
                        label="Food"
                        name="group1"
                        type="checkbox"
                        id={`inline-checkbox-3`}
                        onChange={(e) => setChecked([...checked, "Food"])}
                    />
                </Form>
            </InputGroup>
            <div>
                <Button className='inliners' onClick={() => switchPage('/')}>Back</Button>
                <p className='inliners'>2/3</p>
                <Button className='inliners' onClick={() => switchPage('/col')}>Next</Button>
            </div>
        </div>
    )
}
