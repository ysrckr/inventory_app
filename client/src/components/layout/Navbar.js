import React from 'react'

export const Navbar = () => {
    return (
        <header id='header'>
            <div className="logo">
            <i class="fas fa-barcode logo-icon"></i>
            </div>
            <nav id='navbar' className='navbar'>
            <i class="fas fa-sign-out-alt nav-icon"></i>
                <p className='nav-text'>Çıkış</p>
            </nav>
        </header>
    )
}
