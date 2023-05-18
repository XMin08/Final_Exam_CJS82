import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <div className='container'>
        <h1>#TODO</h1>
        <ul className='head'>
            <li>
                <Link to="/" className='link'>All</Link>
            </li>
            <li>
                <Link to="/Active" className='link'>Active</Link>
            </li>
            <li>
                <Link to="/Completed" className='link'>Completed</Link>
            </li>
        </ul>
    </div>
  )
}
