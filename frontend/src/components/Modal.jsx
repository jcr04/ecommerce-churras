import './Modal.css'
import img from '../imgs/close.png'


export default function Modal(props){

if(props.isOpen){
    return(
        <div className='bg'>
            <div className='dv-modal'>
          <img src={img} className='close' alt='Fechar' onClick={props.setOpenModal}/>
            {props.content}
        </div>
        </div>

    )
}else{
    return null;
}

}