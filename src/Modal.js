
import { Button } from 'react-bootstrap';
import React, { useEffect,useState } from 'react';
import { Card } from 'react-bootstrap';

function CharacterModal({el}) {
   
    return (
      <>
       
                    <Card bg="link" style={{width:'100%',padding:'20px'}} >
                        <Card.Body  className="row" style={{alignItems:'center'}} >
                            <span className="col-4" >
                                <img width="100" height="100" src={el?.image} style={{borderRadius:'50%'}} />
                            </span>
                            <div style={{display:'flex',flexDirection:'column',}}>
                                <span ><b>{el.name}</b></span>
                                
                                  <span style={{display:'flex',flexDirection:'row',alignItems:'center'}} > 
                                        {
                                            el.status == 'Alive' ? 
<span style={{background:'green',display:'block',height:'10px',width:'10px',borderRadius:'50%',marginRight:'10px'}}></span>:
<span style={{background:'gray',display:'block',height:'10px',width:'10px',borderRadius:'50%',marginRight:'10px'}}> </span>
                                        }
                                       {el.status} - {el.species}
                                  </span>
                            </div>
                        </Card.Body>
                        <hr></hr>
                        <Card.Body>
                            <div className="row">
                                <div className="col-6" style={{display:'flex',flexDirection:'column',}}>
                                        <span>Gender</span>
                                        <span style={{fontWeight:'bolder'}}>{el.gender}</span>
                                </div>
                                <div className="col-6" style={{display:'flex',flexDirection:'column',}}>
                                        <span>Location</span>
                                        <span style={{fontWeight:'bolder'}}>{el.location.name}</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6" style={{display:'flex',flexDirection:'column',}}>
                                        <span>Species</span>
                                        <span style={{fontWeight:'bolder'}}>{el.species}</span>
                                </div>
                                <div className="col-6" style={{display:'flex',flexDirection:'column',}}>
                                        <span>Origin</span>
                                        <span style={{fontWeight:'bolder'}}>{el.origin.name}</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>

        
      </>
    );
  }
  


  export default CharacterModal;