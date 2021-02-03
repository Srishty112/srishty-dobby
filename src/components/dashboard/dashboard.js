import React , {Component} from 'react'
import Projectlist from '../projects/projectlist'
import { connect } from 'react-redux'
import {compose} from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import {Redirect} from 'react-router-dom'

class dashboard extends Component{


  state = {str: ""}
        
        search=()=>{
          this.setState({str: document.getElementById('title').value,     
          })
        }
  

    render(){
      
        
        const {projects, auth, users}= this.props
        if(!auth.uid) return <Redirect to='/SignIn'/>

        return(
            <div>
            <div  class="row">
            <div class="col l5 s10 m9">
            <input type="text" id='title' class="grey lighten-2" onChange={this.search} />
            </div><div class="col l1">
            <b class=" left btn-floating btn waves-effect waves-light" onClick={this.search}><i class="material-icons">search</i></b>
            </div></div>
                 <Projectlist projects= {projects} users={users} id= {auth.uid} str={this.state.str}/>                  
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      projects: state.firestore.ordered.project,
      users: state.firestore.ordered.users,
      auth:state.firebase.auth
    }
  }
  
  export default compose(
    firestoreConnect(() => [{collection: 'project', orderBy: ['createdAt', 'desc']}, 'users']),
    connect(mapStateToProps)
    )(dashboard)
