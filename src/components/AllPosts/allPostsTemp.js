import React, {useState} from 'react';
import HeaderImg from '../../img/headerimg.png';
import '../../styles.css';
import insta from '../../img/IG.svg'
import facebook from "../../img/facebook.png";
import twitter from "../../img/twitter.png";
import pinterest from "../../img/pinterest.png";
import AllPosts from './AllPosts';
import { Link } from "react-router-dom";

const AllPostsTemp = () => {
  
  return (
      <div className="frontPageWrapper" >
            <img className="logo" style={{ alignItems:'center', marginBottom: '25px'}} src={HeaderImg} />
                <div className="navDiv"  style={{marginBottom: '50px'}}>
                    <nav className="navBar">
                        <nav style={{textAlign:'left', marginBottom: '-30px',marginTop: '15px', marginLeft: '20px'}} className="linkButtons">
                            <a className="navButton"><img src={insta} alt="" style={{width:'13px'}} /> </a>
                            <a className="navButton"><img src={facebook} alt="" style={{width:'13px'}}  /> </a>
                            <a className="navButton"><img src={twitter} alt="" style={{width:'13px'}} /> </a>
                            <a className="navButton"><img src={pinterest} alt="" style={{width:'13px'}} /> </a>
                        </nav>
                        <Link to="/"><button style={{backgroundColor:'none', outline:'none', border:'none'}} className="navButton">Home</button></Link> 
                        <Link to="/contact"><button className="navButton">Contact</button></Link> 
                        <Link to ="/allposts"><button className="navButton">All Posts</button></Link> 
                    </nav>
          </div>
          <div className="AllPostsWrapper">

        <AllPosts />
          </div>
        </div>
    
    )
  
};

export default AllPostsTemp;