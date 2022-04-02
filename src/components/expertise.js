import React, { useState } from 'react'
import { InputGroup, Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import '../css/containers.css'

export default function Expertise() {

    const navigate = useNavigate()

    const [checked, setChecked] = useState(sessionStorage.getItem('checked') ? JSON.parse(sessionStorage.getItem('checked')) : [])

    const setCheckBox = (checkbox) => {
        if (checked.includes(checkbox)) {
            setChecked(checked.filter(item => item !== checkbox))
        } else {
            setChecked([...checked, checkbox])
        }
    }

    const switchPage = (page) => {
        sessionStorage.setItem('checked', JSON.stringify(checked))
        navigate(page)
    }

    return (
        <div>
            <h1>Hi {sessionStorage.getItem('name')}!</h1>
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
                        onChange={(e) => setCheckBox("Lifestyle")}
                    />
                    <Form.Check 
                        inline
                        checked={checked.includes("Beauty")}
                        label="Beauty"
                        name="group1"
                        type="checkbox"
                        id={`inline-checkbox-2`}
                        onChange={(e) => setCheckBox("Beauty")}
                    />
                    <Form.Check 
                        inline
                        checked={checked.includes("Food")}
                        label="Food"
                        name="group1"
                        type="checkbox"
                        id={`inline-checkbox-3`}
                        onChange={(e) => setCheckBox("Food")}
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
