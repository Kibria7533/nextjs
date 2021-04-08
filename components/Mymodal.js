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
        closeButton={<>'jhjjj'</>}
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

          {props.questions.map((item,mainindex)=>{
            return(
            <p key={mainindex}>
           <p>{item.question}</p>
           <ul>
             {item.answers.map((ans,index)=>{
               return(
                <li key={index}onClick={()=>props.checkclick(ans,mainindex)}>{ans}</li>
               )
             })}
           </ul>
           {/* <UrgeWithPleasureComponent pointsave={props.pointsave} hideme={props.hide}/> */}
           </p>
            )
          })}
          
         
        </div>
      </AnimatedModal>
    </div>
  );
}

export default Mymodal;