import React, { useEffect,useState } from 'react';
import { Button, FormControl, InputGroup, Modal, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import Image from './Image';
import CharacterModal from './Modal';
function Images(props) {
    // const [images, setImages] = useState([])
    const [page, setPage] = useState(1)
    const [loadingSpinner, setLoadingSpinner] = useState(false);
    const [search, setSearch] = useState("")
    const [show, setShow] = useState(false);
    const [element, setElement] = useState({})
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const images = useSelector(state => state.imagesReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({type:'GET_IMAGES_SAGA',payload:{page}})
    },[])  

    useEffect(() => {
        window.onscroll = function() {
                if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && loadingSpinner==false) {
                    setLoadingSpinner(true);
                    setTimeout(function(){
                        dispatch({type:'GET_IMAGES_SAGA',payload:{'page':Number(page)+1}})
                        setLoadingSpinner(false);
                            setPage(page+1);
                    }, 2000);
                 }
          };
    })
    let filter = (name) => {
        dispatch({type:'REFRESH_IMAGES_SAGA',payload:{'page':page,'name':name}})
    }
    const loadCharacterModal = (el) => {
        console.log(el)
        setShow(true)
        setElement(el)
    }
    return (
        <div className="container-fluid" >
            <h1><center>Rick and Morty Search</center></h1>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">Enter Character Name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={(e)=>{setSearch(e.target.value);filter(e.target.value)}}
                value={search}
                />
            </InputGroup>
            
                <div style={{display:'flex',width:'100%',justifyContent:'center',flexDirection:"column",alignItems:'center'}}>
                    {
                        images.map((el,index)=>
                        <div key={index} onClick={()=>{loadCharacterModal(el)}}>
                            <Image el={el} />
                        </div>
                        )
                    }
                    {loadingSpinner?<Spinner variant="success" size="lg" animation="border" />:''}
                </div>
                <>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Character Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                   <CharacterModal el={element} />
          </Modal.Body>
        </Modal>
      </>             
        </div>
    )
}

export default Images;