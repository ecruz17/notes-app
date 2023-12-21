import React from 'react'

const page = () => {
  return (
    
    <main className="p-4">
      <h1 className='flex justify-center items-center' style={{ fontWeight: 'bold', fontSize: '3rem' }}>Notes App</h1>
      <div className='flex justify-center items-center'>
         <p>Proyecto creado con Next.js y Firebase por: </p> <a href='https://github.com/ecruz17' className='text-slate-800 hover:text-slate-500 p-2 cursor-pointer'>@ecruz17</a>
      </div>     
    </main>
    
  )
}

export default page