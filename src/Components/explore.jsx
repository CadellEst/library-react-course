import React from 'react'
import { Link } from 'react-router-dom'

export default function Explore() {
  return (
    <section id="explore">
        <div className="row row__column">
            <h2>
                Explore more <span className="purple">Books</span>
            </h2>
            <Link to="/books" className='btn'>Explore books</Link>
        </div>
    </section>
  )
}
