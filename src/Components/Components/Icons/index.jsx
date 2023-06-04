import React from 'react'
import '../../../Styles/Components/icons.scss'
const Icons = ({ github, url }) => {
    return (
        <div
            data-aos="fade-in"
            data-aos-duration="1800"
            className='project-info-icons'>
            <a href={github} target="_blank" rel='noreferrer'>
                <i className="fa-brands fa-github"></i>
            </a>
            {url && <a href={url} target="_blank" rel='noreferrer'>
                <i className="fa-solid fa-up-right-from-square"></i>
            </a>}
        </div>
    )
}

export default Icons