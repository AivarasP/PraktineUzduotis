import axios from 'axios';
import React, { useState } from 'react'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import authHeader from "./../services/auth-header"

function AddRestaurant() {
    const [name, SetName] = useState("");
    const [code, SetCode] = useState("");
    const [address, SetAddress] = useState("");

    const navigate = useNavigate();

    const data = {
        name: name,
        code: code,
        address:address
    }

    function Submit(e) {
        e.preventDefault();
        if(!name || !code || !address ){
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Laukeliai neatitinka formato'
                
              })
        }  else {
            Swal.fire(
                'Maitinimo įstaiga pridėta!',
                '',
                'success',
                axios.post('http://localhost:8080/api/restaurants', data, { headers: authHeader() }).then(
                navigate('/home')
                )
              )
    }
    }
    return (

        
        <div className=''>
            <h3 className=''>Pridėti Restorana</h3>
            <form className=''>

                <input value={name} onChange={(e) => SetName(e.target.value)} type="text" className='' placeholder='Pavadinimas' />
                <input value={code} onChange={(e) => SetCode(e.target.value)} type="number" placeholder='Kodas' className='' required/>
                <input value={address} onChange={(e) => SetAddress(e.target.value)} type="text" placeholder='Adresas' className='' required />
                <button onClick={Submit} className=''>Išsaugoti</button>
            </form>

        </div>
    )
}

export default AddRestaurant