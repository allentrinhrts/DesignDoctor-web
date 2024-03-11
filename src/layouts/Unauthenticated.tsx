import { Outlet } from 'react-router-dom'

function Unauthenticated() {
  return (
    <div className="bg-slate-800">
      <div className="container mx-auto flex justify-center items-center h-screen py-8">
        <Outlet />
      </div>
    </div>
  )
}

export default Unauthenticated
