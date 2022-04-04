import React, { useState } from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import '../css/containers.css'
import PageSwitch from './pageSwitch';

export default function Collaborated() {

    const [brands, setBrands] = useState(sessionStorage.getItem('brands') ? JSON.parse(sessionStorage.getItem('brands')) : [])

    const [curBrand, setCurBrand] = useState()

    const setNewBrand = () => {
        if (!brands.includes('@'+curBrand)){ 
            setBrands([...brands, '@'+curBrand])
            setCurBrand('')
        }
    }

    const saveState = () => {
        sessionStorage.setItem('brands', JSON.stringify(brands))
    }

    return (
        <div>
            <h1>One last thing</h1>
            <h2>have you collaborated with brands in the past?</h2>
            <InputGroup style={{width: '100%'}} onChange={e => setCurBrand(e.target.value)}>
                <FormControl
                    value={curBrand ? curBrand : ''}
                    placeholder="Enter Brand Name"
                    aria-label="brandName"
                    aria-describedby="basic-addon1"
                    />  
                <Button id="basic-addon1" onClick={e => setNewBrand()}><b>Add</b></Button>
            </InputGroup>
            <div>
                { brands && brands.map((brand, index) => { return <p key={index}>{brand}</p>})}
            </div>
            <PageSwitch {...{index: 3, back: '/exp', next: 'finish', saveData: saveState}}/>
        </div>
    )
}
