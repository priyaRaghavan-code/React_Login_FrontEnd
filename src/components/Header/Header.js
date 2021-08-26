import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <div className="bg-blue-400 text-white px-2 py-2 flex items-center" >
        {/* <h2 className="font-bold text-lg mr-4">React Router</h2> */}
        <div>
          <Link to='/home' className="px-2">Home</Link>
          <Link to='/' className="px-2">SignUp</Link>

          {/* <Link to='/posts' className="px-2">Posts</Link> */}
        </div>
      </div>
    </div>
  )
}
