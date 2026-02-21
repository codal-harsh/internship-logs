import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <aside className="col-2 pt-3 top-0 bg-black h-100 border border-secondary">
        <ul className='pt-5 list-unstyled fs-4 fst-italic d-flex flex-column gap-2'>
            <li><Link className='text-decoration-none text-white' href="/app">Home</Link></li>
            <li><Link className='text-decoration-none text-white' href="/profile">Profile</Link></li>
            <li><Link className='text-decoration-none text-white' href="/settings">Settings</Link></li>
            <li><Link className='text-decoration-none text-white' href="/api">API</Link></li>
        </ul>
    </aside>
  )
}

export default Sidebar