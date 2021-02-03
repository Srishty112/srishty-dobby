import React from 'react'
import { Link } from 'react-router-dom';

const projectsummary = ({project, users}) => {
    var k ="/project/"+project.id;
    return (
      <div className="card z-depth-2 project-summary">
        <div className="card-content">
          <Link to={k}><c class="stitle">{project.title}</c><br/>
          {project.image? <img alt="img" id="k" widhth="150" height="150" src={project.image}/>:null}
          </Link>

          <hr/>
          
            
                      <div class="spc grey-text-small">
                      Posted on -
                      <c >{ project.createdAt.toDate().toString().slice(0,15)}</c>
                      </div>
            
          
        </div>
        
      </div>
    )
  }

export default projectsummary;