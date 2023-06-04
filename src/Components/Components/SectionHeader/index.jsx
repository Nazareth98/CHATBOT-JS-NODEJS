import React from 'react'
import '../../../Styles/Components/sectionHeader.scss'

const SectionHeader = ({ title, id }) => {
    return (
        <h2
            data-aos="fade-right"
            data-aos-duration="800"
            className='section-header'><span>{id}</span>{title}</h2>
    )
}

export default SectionHeader