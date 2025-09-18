import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/events', label: 'Events' },
  { to: '/schedule', label: 'Schedule' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
  { to: '/faq', label: 'FAQ' }
]

export default function Navbar() {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg shadow-sm position-relative"
        style={{
          backgroundImage: 'url("semi.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          fontFamily: '"Times New Roman", serif',
          fontWeight: 'bold',
          color: 'white',
          zIndex: 1
        }}
      >
        {/* Dark overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.6)',
            zIndex: 0
          }}
        ></div>

        <div className="container position-relative" style={{ zIndex: 1 }}>
          {/* Brand + Logo */}
          <Link to="/" className="navbar-brand d-flex align-items-center text-white">
            <img
              src="/logo.png"
              alt="Sensonics logo"
              width="75"
              height="75"
              className="me-2"
            />
            <div>
              <div style={{ fontWeight: 'bold', fontSize: '24px', color: 'white' }}>
                SENSONICS – 2025
              </div>
              <small style={{ fontSize: '16px', color: 'white' }}>
                National Level Technical Symposium
              </small>
            </div>
          </Link>

          {/* Navbar toggler button */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{
              filter: 'invert(1)', // makes the toggler icon white
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 mt-3 text-center text-lg-start">
              {links.map((l) => (
                <li key={l.to} className="nav-item">
                  <NavLink
                    to={l.to}
                    className={({ isActive }) =>
                      'nav-link' + (isActive ? ' active' : '')
                    }
                    end
                    style={{
                      fontSize: '18px',
                      color: 'white',
                      margin: '0 8px'
                    }}
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}

              {/* ✅ KEC logo after FAQ */}
              <li className="nav-item d-flex align-items-center justify-content-center justify-content-lg-start ms-0 ms-lg-3 mt-3 mt-lg-0">
                <Link to="https://kongu.ac.in" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/kec.png"
                    alt="KEC Logo"
                    width="75"
                    height="75"
                    style={{ objectFit: 'contain' }}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
