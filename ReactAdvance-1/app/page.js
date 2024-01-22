'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const page = () => {

  const [users, setUsers] = useState([])
  const getUser = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    setUsers(data)
  }

  useEffect(() => {
    getUser()
  }, [])
  
  
  return (
    <>
      <div className='w-full flex justify-between'>
        <button onClick={getUser} className='mx-5 p-3 text-xl bg-cyan-500 my-10 rounded-lg'>Get Data</button>
      </div>
      <div className='p-5 mx-5 bg-slate-400 text-black'>
        <ul>
        {users.map((e) => {
          return <li>{e.username} --- <Link href={`/${e.id}`}>Explore</Link> </li>
        })}
        </ul>
      </div>
    </>
  )
}

export default page