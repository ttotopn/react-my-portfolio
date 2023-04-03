 import React, { Component } from 'react'
 import Widecard from '../components/Widecard';

 class Education extends Component {
     render() {
         return(
             <div className="condiv">
                 <h1 className="subtopic">My Education</h1>
                 <Widecard title="Bachelor of Science (Information Technology)" where="Suandusit University" from="2016" to="2020" />
                 <Widecard title="Science-Math" where="Pakphanang School" from="2014" to="2016" />
             </div>
         );
     }
 }
 
 export default Education;