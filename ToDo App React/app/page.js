'use client'
import React, { useState } from 'react'

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("")
  const [mainTask, setMainTask] = useState([])


  const submitHandeler = (e) => {
    e.preventDefault()
    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
    console.log(mainTask)
  };

  const deleteHandeler = (i)=>{
    let copyTask = [...mainTask];
    copyTask.splice(i,1);
    setMainTask(copyTask);
  }

  let renderTask = <h2 className='text-black'>No Tasks Available</h2>;

  if(mainTask.length>0){
    renderTask = mainTask.map((t, i) => {
      return (
        <li className='flex items-center justify-between my-2' key={i}>
          <div className='flex flex-col w-1/2 bg-slate-300 p-2 rounded-xl shadow-sm shadow-black m-2 text-xl'>
            <h5 className='text-3xl  font-semibold'>{t.title}</h5>
            <p className='text-xl  font-medium'>{t.desc}</p>
          </div>
          <button 
         
        onClick={()=>{
          deleteHandeler(i)
        }}
          className='bg-red-400 text-white p-3 rounded-xl font-bold'>Delete</button>
        </li>
      );
    });
  }

  return (
    <>
      <form className='h-fit w-fit rounded-md mt-0 pb-3 pt-1 bg-slate-200 my-4 mx-[50%] translate-x-[-50%] flex flex-col items-center' onSubmit={submitHandeler}>
        <input type="text" className='bg-transparent p-2 text-2xl mx-20 text-white border-white border-2 m-2 rounded-md outline-none' placeholder='Enter your task'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }} />

        <textarea type="text" rows="3" maxLength={50} columns="210" className=' bg-transparent p-2 text-2xl mx-20 rounded-md text-white border-white border-2 m-2 outline-none' placeholder='Enter your task'
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value)
          }} />

        <button className='bg-white p-2 text-black rounded-md hover:bg-red-500 transition-all ease-in duration-[0.5] '>Add Task</button>
      </form>
      <hr />
      <div className='p-8 bg-slate-200'>
        <ul className='text-black'>{renderTask}</ul>
      </div>
    </>
  )
}

export default page