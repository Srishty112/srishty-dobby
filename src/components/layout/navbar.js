import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Signedoutlinks from './signedoutlinks'
import {signOut} from '../../store/actions/projectActions' 
import {connect} from 'react-redux'


class Navbar extends Component{
render() {


  const handleClick=(props)=>{
    if (window.confirm('Are you sure you wish to Log Out?'))
    props.signOut()
  }

  

  let drop=()=>{
     if(document.getElementById('dropdown').style.display==="inline")
     document.getElementById('dropdown').style.display="none"
     else
     {document.getElementById('dropdown').style.display="inline";}
  }
  const {profile, details}= this.props
  console.log(this.props)

  //signedin links

  if(details.isEmpty !== true)
  return (
    <div>
    <div className="grey darken-3 row" >
    <b class="col l1 s1"><br/><Link to= '/'><i class="material-icons white-text">home</i></Link></b>
    <div class="col l2 offset-l9 s3 offset-s8">
    {profile.image ?<div class="right"> <br/><img alt="img" src={profile.image} width="50" height="50" class="img" onMouseEnter={drop} onClick={drop} /></div>:
    <i class="medium material-icons img white-text right"  onMouseEnter={drop} onClick={drop}>account_circle</i>} 
    <Link to= '/Create'><br/>
    <b class="btn-floating btn waves-effect waves-light"><i class="material-icons">add</i></b>
    </Link>    
    </div>
    
    <div class="right dropdown card a" id="dropdown" onMouseLeave={drop} >
    <Link to= '/upload'class="black-text"> Update Profile Pic<hr/></Link>
    <Link onClick={()=>handleClick(this.props)} class="black-text"> Log Out </Link>
    </div>
    </div> 
    </div>
  )
    
  else return(
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Signedoutlinks details={details}/>
      </div>
    </nav>)
}
}

const mapStatetoProps=(state)=>{
  return {
    details:state.firebase.auth,
    profile:state.firebase.profile
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    signOut: ()=> dispatch(signOut()),
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Navbar);

