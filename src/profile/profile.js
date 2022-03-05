import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import   './css.css'
import mg from './Diamonds.png'
import '../App.css'
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure'
import FigureImage from 'react-bootstrap/FigureImage'
import FigureCaption from 'react-bootstrap/FigureCaption'

function Profile(props)
{
    const handleName=(Name)=>{alert('hello '+Name)}   
    
   return(
        <div>
           

            <Figure className="ctr">
  <Figure.Image
    
    alt="171x180"
    src={mg}
    className="img"
  />
  <Figure.Caption>
             <p >{props.fullName}</p>
             <p>  _{props.bio}</p>
             <p>  _{props.profession} _</p>
  </Figure.Caption>
  <input  type='button' onClick={()=>handleName(props.fullName)}  value="click"/>
</Figure>
            
            
        </div>

    );
    Profile.defaultProps={
        fullName:'inconnu',
        profession:'vide',
        bio:'vierge',
    }
}
Profile.propTypes={
fullName: propTypes.string,
bio:propTypes.string
}
export default Profile;