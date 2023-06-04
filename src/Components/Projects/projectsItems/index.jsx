import React from 'react'
import '../../../Styles/Components/projectItems.scss'
import useMedia from '../../../Hooks/useMedia'
import Projects from './projects'
import Icons from '../../Components/Icons'


const ProjectsItems = () => {
    const mobile = useMedia('(max-width: 60rem)')
    return (
        Projects.map(project => {
            return <div className={`${!mobile ? project.orientation : ''} project-box`} key={project.id}>
                {!mobile &&
                    <div
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        className='project-img'>
                        <div className='img-overlay'></div>
                        <img src={project.image} alt="" />
                    </div>}
                <div className='project-info-container'>
                    <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className='project-info-title'>
                        <span>Projeto em Destaque</span>
                        <h3>{project.title}</h3>
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-duration="1400"
                        className='project-info-description'>
                        <p>{project.description}
                        </p>
                    </div>
                    <Icons github={project.github} url={project.url} />
                </div>
            </div>
        })
    )
}

export default ProjectsItems