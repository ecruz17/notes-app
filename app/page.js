export default function Home() {
  return (
    <main className="p-4">
      <h1 className='flex justify-center items-center' style={{ fontWeight: 'bold', fontSize: '3rem' }
      } > Notes App</h1 >
      <a className="bg-slate-300 py-2 rounded-md flex justify-center items-center hover:text-slate-500 cursor-pointer mx-[30vw]" href={"/profile"}>
        Ir a mis notas
      </a>
    </main >
  )
}
