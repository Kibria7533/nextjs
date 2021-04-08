import Head from 'next/head'
import { useEffect, useState } from 'react'
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
import axios from 'axios';
// import Modal from "react-animated-modal";
// import List from '../components/List'
export default function Home(props) {
  const [Modal, showModal] = useState(false);
  const [ques,setQues]=useState([])
  const [questype,setQtype]=useState("")
  const [accessToken,setAccessToken]=useState("");
  const [userid,setUserId]=useState("");
  const [point,setPoint]=useState(0);
  const [jsat,setJsat]=useState(0)
  const [jsex,setJsex]=useState(0)
  const [phat,setPhat]=useState(0)
  const [phex,setPhex]=useState(0)
  const [pyat,setPyat]=useState(0)
  const [pyex,setPyex]=useState(0)
  const [User,setUser]=useState({
userid:"",
name:"",
email:"",
picture:"",
accessToken:""
  }) 
  // const poinsave=async ()=>{
  //   console.log(userid,questype,point)
  //   const res = await fetch("api/pointsave", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({userid,questype,point})
  //   }).then(res2=>{
  //    
  //   }).catch(err=>{
  //   
  //   })
  // }
  const phpclick = () => {
    
    if(!localStorage.getItem('accessToken'))
    return alert("Please login first using facebook")
    if(!localStorage.getItem('phpclick')){
      localStorage.setItem('phpclick','ok')
    }
    else if(localStorage.getItem('phpclick')){
      return alert("You already seated for PHP")
    }
    setQues(phpBank)
    setQtype('PHP')
    setPoint(0)
    setTimeout(async()=>{
      const res = await fetch("api/pointsave", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({userid,questype:"PHP",point})
      }).then(re=>{
        showModal(false)
       
      })
    },50000)
    
    showModal(true)
  }
  const jsclick = () => {
    if(!localStorage.getItem('accessToken'))
    return alert("Please login first using facebook")
    if(!localStorage.getItem('jsclick')){
      localStorage.setItem('jsclick','ok')
    }
    else if(localStorage.getItem('jsclick')){
      return alert("You already seated for PHP")
    }
    setQues(jsBank)
    setQtype('JS')
    setPoint(0)
    setTimeout(async()=>{
      const res = await fetch("api/pointsave", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({userid,questype:"JS",point})
      }).then(re=>{
        showModal(false)
       
      })
          },50000)
    
    showModal(true)
  }
  const pythonclick = () => {
    if(!localStorage.getItem('accessToken'))
    return alert("Please login first using facebook")
    if(!localStorage.getItem('pythonclick')){
      localStorage.setItem('pythonclick','ok')
    }
    else if(localStorage.getItem('pythonclick')){
      return alert("You already seated for PHP")
    }
    setQues(pythonBank)
    setQtype('PYTHON')
    setPoint(0)
    setTimeout(async()=>{
      const res = await fetch("api/pointsave", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({userid,questype:"PYTHON",point})
      }).then(re=>{
        showModal(false)
        
      })
          },50000)
  
    showModal(true)
  }
  const responseFacebook = async(response) => {
    const newuser={...User}
    newuser.name=response.name;
    newuser.userid=response.userID;
    newuser.email=response.email;
    newuser.picture=response.picture.data.url;
   newuser.accessToken=response.accessToken;
   newuser.php=0,
   newuser.js=0,
   newuser.python=0
    setUser(newuser)
    console.log(response)
    localStorage.setItem('name', response.name);
    localStorage.setItem('userid', response.userID);
    localStorage.setItem('email', response.email);
    localStorage.setItem('picture', response.picture.data.url);
    localStorage.setItem('accessToken', response.accessToken);
  

    const res = await fetch("api/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(User)
    }).then(reqt=>{
      console.log(reqt);
      
    })
   
   
    
  }
  useEffect(()=>{
    const showaccessToken=localStorage.getItem('accessToken')
    const showuserid=localStorage.getItem('userid')
    setAccessToken(showaccessToken);
    setUserId(showuserid);
   
  })
const check=(ans ,itemindex)=>{
  console.log(ans,itemindex,'lllllll')
  const newques=ques.map((item,index)=>{
    if(index===itemindex){
     
      if(ans===item.correct) {
      setPoint(point+1)
        var newanswer = new Array();
        newanswer.push(ans)
        item.answers=newanswer;
        return item;
      }
      else{
        var newanswer = new Array();
        newanswer.push(ans)
        item.answers=newanswer;
        return item;

      }
      
    }

    return item;
  })
  // console.log(newques)
  setQues(newques)
  
}
useEffect(()=>{
  if(props.users.user){
    let jsattemp=0;
    let pythonattemp=0;
    let phpattemp=0;
    let jsexpert=0;
    let pythonexpert=0;
    let phpexpert=0;
    props.users.user.map(user=>{
      if(user.js===10)
      jsexpert++;
       if(user.js!=0)
      jsattemp++;
       if(user.python==10)
      pythonexpert++;
       if(user.python!=0)
      pythonattemp++;
     if(user.php==10)
      phpexpert++;
      if(user.php!=0)
      phpattemp++;
  
      
    })
    setJsat(jsattemp);
    setJsex(jsexpert)
    setPyat(pythonattemp)
    setPyex(pythonexpert)
    setPhat(phpattemp)
    setPhex(phpexpert)
  }
},[props.users.user])



  
  return (
    <div className="container">
      <div className="container-header">
        <h1>Lets Check Yor Varsality...</h1>
        php attemt={phat}
        php expert={phex}
        js attemt={jsat}
        js expert={jsex}
        python attemt={pyat}
        python expert={pyex}
      

      </div>

      <div className="leader-board">Leader Board
      <ul className="list-group" style={{ overflowY: "scroll" }}>
        {/* {JSON.stringify(props.users.user)} */}
        {props.users.user.map((persion,index)=>{ 
          return(
            <li className="list-group-item" key={index} >{persion.name}=php={persion.php},python={persion.python},js={persion.js}</li>
          )
        })}
       
         
         
         

        </ul>
      </div>
      
      <div className="dynamic-text"> <div
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        
        
        <MyCard color="#208293" title="PHP" at={phat} ex={phex}  onClick={phpclick} />
        <MyCard color="#F76A5B" title="JS"   at={jsat} ex={jsex} onClick={jsclick} />
        <MyCard color="#164843" title="PYTHON"  at={pyat} ex={pyex} onClick={pythonclick} />
      </div></div>
      <div className="profile-icon"><img src={`https://graph.facebook.com/${userid}/picture?type=square&access_token=${accessToken}`} alt="profile-icon"/></div>
     
     <div className="facebook-icon">
     <FacebookLogin
     appId="1080000269162058"
     autoLoad={true}
     fields="name,email,picture"
     // onClick={componentClicked}
     callback={responseFacebook} /></div>
     
     

<Mymodal show={Modal} checkclick={check} type={questype} questions={ques} hide={showModal}/>
      
    </div>





  )
}

export const getStaticProps=async()=> {
  const res = await fetch('http://localhost:5000/')
const users = await res.json()
console.log(users,'users')



return {
  props: {
    users,
  },
}
}