import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

export default function PageSwitch(params) {
    const navigate = useNavigate()

    const switchPage = (page) => {
        params.saveData()
        navigate(page)
    }

    const finishMode = () => {
        params.saveData()
        alert('Finished.')
    }

    return (
        <div>
            {params.back && <Button className='inliners' onClick={() => switchPage(params.back)}>Back</Button>}
            <p className='inliners'>{params.index}/3</p>
            {params.next === 'finish' ? 
            <Button className='inliners' onClick={() => finishMode()}>Finish</Button>
             : 
             <Button className='inliners' onClick={() => switchPage(params.next)}>Next</Button>}
        </div>
    )
}
