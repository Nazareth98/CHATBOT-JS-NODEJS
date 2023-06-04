import '../../Styles/Components/header.scss'
import React from 'react'
import useMedia from '../../Hooks/useMedia'
import logo from '../../Assets/img/logo.png'
import { useState } from 'react'
import curriculo from '../../Assets/pdf/Patrick Nazareth - Currículo.pdf'

const Header = () => {
    const mobile = useMedia('(max-width: 40rem)')
    const [mobileMenu, setMobileMenu] = useState(false)

    function handleClick() {
        setMobileMenu(!mobileMenu)
        console.log(mobileMenu)
    }


    return (
        <header>
            <div className="navbar-container">
                <div
                    data-aos="slide-down"
                    data-aos-duration="1200"
                    data-aos-delay="500"
                    className='left-container'>
                    <a href="#home"><img className='logo' src={logo} alt="iniciais do nome Patrick Nazareth" /></a>
                </div>
                <nav
                    data-aos="slide-down"
                    data-aos-duration="1200"
                    className='right-container'>
                    {!mobile &&
                        <ul>
                            <li><a href="#about"><span>01.</span>Sobre</a></li>
                            <li><a href="#projects"><span>02.</span>Projetos</a></li>
                            <li><a href="#contact"><span>03.</span>Contato</a></li>
                            <a className='button' href={curriculo} target="_blank" rel='noreferrer'>Curriculo</a>
                        </ul>
                    }
                    {mobile &&
                        <i className={mobileMenu ? "fa-solid fa-square-xmark" : "fa-solid fa-ellipsis-vertical"} onClick={handleClick}></i>
                    }
                </nav>
            </div>

            {mobile && mobileMenu &&
                <nav className='navMobile'>
                    <ul>
                        <li><a href="#about"><span>01.</span>Sobre</a></li>
                        <li><a href="#projects"><span>02.</span>Projetos</a></li>
                        <li><a href="#contact"><span>03.</span>Contato</a></li>
                    </ul>
                </nav>
            }
        </header>
    )
}

export default Header