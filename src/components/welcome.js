import React, { useState, useEffect } from 'react'
import { InputGroup, FormControl } from 'react-bootstrap';
import PageSwitch from './pageSwitch';

export default function Welcome() {

    const [name, setName] = useState()

    const saveState = () => {
        sessionStorage.setItem('name', name)
    }

    useEffect(() => {
        setName(sessionStorage.getItem('name') ? sessionStorage.getItem('name') : '')
    }, [])

    return (
        <div>
            <h1>Welcome</h1>
            <h2>How should we call you?</h2>
            <InputGroup style={{width: '100%'}} onChange={e => setName(e.target.value)}>
                <FormControl
                    value={name}
                    placeholder="Name"
                    aria-label="Name"
                    aria-describedby="basic-addon1"
                    />  
            </InputGroup>
            <PageSwitch {...{index: 1, next: 'exp', saveData: saveState}}/>
        </div>
    )
}
