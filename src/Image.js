import React, { useEffect, useRef, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
function Image({el}) {
    const [loading, setLoading] = useState(false);
    const placeHolderRef = useRef(null);
    const registerObserver = (ref, setLoading) => {
        const observer = new IntersectionObserver((enteries, observer) => {
          enteries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }
            setTimeout(function(){ setLoading(true); }, 1000);
            
            observer.disconnect();
          });
        });
        observer.observe(ref);
      };
    useEffect(() => {
        registerObserver(placeHolderRef.current, setLoading);
      }, []); 
    return (
        <div style={{cursor:'pointer'}}>
                {
                    loading ? 
                    <Card bg="link" style={{width:'50rem'}} >
                                <Card.Body  className="row" style={{alignItems:'center'}} >
                                    <span className="offset-1"></span>
                                    <img width="50" height="50" src={el?.image} style={{borderRadius:'50%'}} />
                                    <span className="col-3">{el.name}</span>
                                    <span className="offset-2"></span>
                                    <span className="col-3">{el.status} - {el.species}</span>
                                </Card.Body>
                    </Card> :
                    <Card bg="link" style={{width:'50rem'}} >
                    <Card.Body  className="row" style={{alignItems:'center'}} >
                        <span className="offset-1"></span>
                        <span ref={placeHolderRef} style={{borderRadius:'50%',height:'50px',width:'50px'}} ><Spinner animation="grow" /></span>
                        <span className="col-3">{el.name}</span>
                        <span className="offset-2"></span>
                        <span className="col-3">{el.status} - {el.species}</span>
                    </Card.Body>
        </Card>

                }
              
            
        </div>
    )
}

export default Image
