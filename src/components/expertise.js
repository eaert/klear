import React, { useState } from 'react'
import { InputGroup, Form } from 'react-bootstrap';
import '../css/containers.css'
import PageSwitch from './pageSwitch';

const checkboxes = ["Lifestyle", "Beauty", "Food"]

export default function Expertise() {

    const [checked, setChecked] = useState(sessionStorage.getItem('checked') ? JSON.parse(sessionStorage.getItem('checked')) : [])

    const setCheckBox = (checkbox) => {
        if (checked.includes(checkbox)) {
            setChecked(checked.filter(item => item !== checkbox))
        } else {
            setChecked([...checked, checkbox])
        }
    }

    const saveState = () => {
        sessionStorage.setItem('checked', JSON.stringify(checked))
    }



    return (
        <div>
            <h1>Hi {sessionStorage.getItem('name')}!</h1>
            <h2>What are your expertise?</h2>
            <InputGroup>
                <Form>
                    {checkboxes.map((checkbox, index) => {
                        return (
                        <Form.Check 
                            inline
                            key={index}
                            checked={checked.includes(checkbox)}
                            label={checkbox}
                            name="group1"
                            type="checkbox"
                            id={`inline-checkbox-1`}
                            onChange={(e) => setCheckBox(checkbox)}
                        />)
                    })}
                </Form>
            </InputGroup>
            <PageSwitch {...{index: 2, back: '/', next: '/col', saveData: saveState}}/>
        </div>
    )
}
