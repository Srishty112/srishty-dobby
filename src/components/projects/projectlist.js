import React from 'react'
import Projectsummary from './projectsummary'

const projectlist = ({projects, users,id, str}) => {

    return (
      <div className="project-list section row">
        { projects && projects.map(project => {
          if(project.AuthorId === id && project.title.toUpperCase().search(str.toUpperCase())>=0)
          return (
            
            <div class="col l3 s5 m4 offset-s1">
            <Projectsummary project={project} users={users} key={project.id} /></div>
          )
          else return null;
        })}  
      </div>
    )
  }
  
  export default projectlist