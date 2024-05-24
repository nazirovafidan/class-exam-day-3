import React, { useEffect, useState } from 'react'
import { getOne } from '../../sevices/requests'
import { endpoint } from '../../sevices/constants'
import {useParams} from 'react-router-dom'

const Deatil = () => {
    const[detail,setDetail]=useState({})
    const {id}=useParams()
    useEffect(()=>{
        getOne(endpoint.arrivals,id).then((res)=>{
            setDetail(res.data)
        })
    },[])
  return (
    <div>Deatil</div>
  )
}

export default Deatil