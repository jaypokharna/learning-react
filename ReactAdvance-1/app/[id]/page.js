'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const contact = ({params}) => {
  const {id} = params;

  const [users, setUsers] = useState([])
  const getUser = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users/'+id)
    console.log(data.name)
    setUsers(data)
  }

  useEffect(() => {
    getUser()
  }, [])
  

  return (
    <>
     <div className='text-xl bg-cyan-500 m-2 p-2'>Page ID - {id}</div>
    <div className='text-xl bg-cyan-500 m-2 p-2'>Data - {JSON.stringify(users)}</div>
    </>
   )
}

export default contact