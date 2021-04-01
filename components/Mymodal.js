import React,{useState} from 'react';
 
import AnimatedModal from 'simple-react-animated-modal';
import 'simple-react-animated-modal/dist/index.css';
import UrgeWithPleasureComponent from './CountDown'
 
const Mymodal=(props)=> {
  const [showModal, setShowModal] = useState(false);
 
  return (
    <div>
      
      
      <AnimatedModal
        show={props.show}
        title={props.title}
         onHide={() => props.hide(false)}
        closeButton={<>{props.title}<UrgeWithPleasureComponent hideme={props.hide}/></>}
        style={{
          backgroundColor: '#1e2939',
          border: '2px solid #1cc5b7',
          color: 'white',
          boxShadow: '2px 2px 4px black',
          width:"800px"
        }}
        headStyle={{
          borderBottom: '1px solid white',
          height: '3.2rem',
        }}
      >
        <div className="modal-body">

          {props.questions.map((item,index)=>{
            return(
            < >
           <p>{item.question}</p>
           <ul>
             <li>{item.answers[0]}</li>
             <li>{item.answers[1]}</li>
             <li>{item.answers[2]}</li>
             <li>{item.answers[3]}</li>
           </ul>
           </>
            )
          })}
          
         
        </div>
      </AnimatedModal>
    </div>
  );
}

export default Mymodal;