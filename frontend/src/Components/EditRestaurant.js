import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import authHeader from './../services/auth-header';

function EditRestaurant() {
    const [name, SetName] = useState("");
    const [code, SetCode] = useState("");
    const [address, SetAddress] = useState("");

    const navigate = useNavigate();
    const{id} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:8080/api/restaurants/${id}`,{ headers: authHeader() }).then((res)=>{
            SetName(res.data.name)
            SetCode(res.data.code)
            SetAddress(res.data.address)

        })
    },[])

    const data ={
        name:name,
        code:code,
        address:address
    }


    
    function Update(e){
        e.preventDefault();
        if(!name || !address || !code){
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Laukeliai neatitinka formato'
                
              })
        }  else { 
            Swal.fire({
                title: 'Ar tikrai norite išsaugoti pakeitimus?',
                showDenyButton: true,
                confirmButtonText: 'Išsaugoti',
                denyButtonText: `Neišsaugoti`,
              }).then((result) => {
                if (result.isConfirmed) {
                axios.put(`http://localhost:8080/api/restaurants/${id}`,data,{ headers: authHeader() }).then(navigate("/home"))
                  Swal.fire('Išsaugota!', '', 'success')
                } else if (result.isDenied) {
                  Swal.fire('Pakeitimai nebuvo išsaugoti', '', 'info')
                }
              })
    
        
    }
       
    }

    

  return (
    <div className=''>
            <h3 className=''>Redaguoti Restorana</h3>
            <form className=''>

            
                <input value={name} onChange={(e) => SetName(e.target.value)} type="text" required placeholder='Pavadinimas' className='' />
                <input value={code} onChange={(e) => SetCode(e.target.value)} type="number" required placeholder='Kodas' className='' />
                <input value={address} onChange={(e) => SetAddress(e.target.value)} type="text" required placeholder='Adresas' className='' />
                <button onClick={Update} className=''>Išsaugoti</button>
            </form>

        </div>
  )
}

export default EditRestaurant