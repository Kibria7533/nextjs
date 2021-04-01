import Head from 'next/head'
import { useState } from 'react'
import MyCard from '../components/Card'
import HeaderText from '../components/HeaderText'
import MyComponent from '../components/TypingText'
import styles from '../styles/Home.module.css'
import Avatar from 'react-avatar';
import React from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
import Mymodal from '../components/Mymodal'
import {phpBank,jsBank,pythonBank} from '../components/Bank'
// import Modal from "react-animated-modal";
// import List from '../components/List'
export default function Home() {
  const [Modal, showModal] = useState(false);
  const [ques,setQues]=useState([])
  const [User,setUser]=useState({
userid:"",
name:"",
email:"",
picture:""
  }) 
  const [state, setstate] = useState([
    {
      id: 1,
      title: "PHP",
    },
    {
      id: 2,
      title: "JS",
    },
    {
      id: 3,
      title: "PYTHON",
    }
  ])

  const phpclick = () => {
    setQues(phpBank)
    showModal(true)
  }
  const jsclick = () => {
    setQues(jsBank)
    showModal(true)
  }
  const pythonclick = () => {
    setQues(pythonBank)
    showModal(true)
  }
  const responseFacebook = (response) => {
    const newuser={...User}
    newuser.name=response.name;
    newuser.userid=response.userId;
    newuser.email=response.email,
    newuser.picture=response.picture.data.url
    setUser(newuser)
    console.log(response);
  }
  return (
    <div className="container">
      <div className="container-header">
        <h1>Lets Check Yor Varsality...</h1>

      </div>

      <div className="leader-board">Leader Board
      <ul class="list-group" style={{ overflowY: "scroll" }}>
          <li class="list-group-item">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Morbi leo risus</li>
          <li class="list-group-item">Porta ac consectetur ac</li>
          <li class="list-group-item">Vestibulum at eros</li>
          <li class="list-group-item">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Morbi leo risus</li>
          <li class="list-group-item">Porta ac consectetur ac</li>
          <li class="list-group-item">Vestibulum at eros</li>
          <li class="list-group-item">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Morbi leo risus</li>
          <li class="list-group-item">Porta ac consectetur ac</li>
          <li class="list-group-item">Vestibulum at eros</li>
          <li class="list-group-item">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Morbi leo risus</li>
          <li class="list-group-item">Porta ac consectetur ac</li>
          <li class="list-group-item">Vestibulum at eros</li>
          <li class="list-group-item">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
         

        </ul>
      </div>
      <img src={User.picture} alt="Profile-image"/>
      <div className="dynamic-text"> <div
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <MyCard color="#208293" title="PHP"  onClick={phpclick} />
        <MyCard color="#F76A5B" title="JS" onClick={jsclick} />
        <MyCard color="#164843" title="PYTHON" onClick={pythonclick} />
      </div></div>
      <div className="profile-icon"><Avatar facebookId={User.userid} size="50" /></div>
      <div className="facebook-icon"><FacebookLogin
        appId="1080000269162058"
        autoLoad={true}
        fields="name,email,picture"
        // onClick={componentClicked}
        callback={responseFacebook} /></div>

<Mymodal show={Modal} questions={ques} hide={showModal}/>
      
    </div>





  )
}
