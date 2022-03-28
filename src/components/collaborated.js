import React, { useEffect, useState } from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import '../css/containers.css'

export default function Collaborated() {

    const navigate = useNavigate()

    const [brands, setBrands] = useState([])

    const [curBrand, setCurBrand] = useState()

    const switchPage = (page) => {
        sessionStorage.setItem('brands', JSON.stringify(brands))
        navigate(page)
    }

    const finishAlert = () => {
        alert('Finish!')
    }

    useEffect(() => {
        var arr = sessionStorage.getItem('brands')
        if (arr) {setBrands([...JSON.parse(arr)])}
    }, [])

    return (
        <div>
            <h1>One last thing</h1>
            <h2>have you collaborated with brands in the past?</h2>
            <InputGroup style={{width: '100%'}} onChange={e => setCurBrand(e.target.value)}>
                <FormControl
                    placeholder="Enter Brand Name"
                    aria-label="brandName"
                    aria-describedby="basic-addon1"
                    />  
                <Button id="basic-addon1" onClick={e => setBrands([...brands, curBrand])}><b>Add</b></Button>
            </InputGroup>
            <div>
                { brands && brands.map((brand, index) => { return <p key={index}>{brand}</p>})}
            </div>
            <div>
                <Button className='inliners' onClick={() => switchPage('/exp')}>Back</Button>
                <p className='inliners'>3/3</p>
                <Button className='inliners' onClick={() => finishAlert}>Finish</Button>
            </div>
        </div>
    )
}
