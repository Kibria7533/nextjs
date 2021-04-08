import React from 'react'

import Card from 'react-animated-3d-card'

const MyCard = (props) => {

  return (
    <Card
      style={{
        background: props.color,
        width: '250px',
        height: '250px',
        cursor: 'pointer',
        margin:"5px"

      }}
      onClick={() => props.onClick()}
    >
      <div>
        {/* <img
          style={{
            position: 'absolute',
            left: '25px',
            top: '25px',
            height: '50px'
          }}
          src='https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png'
          class='card-item__chip'
          alt='credit card chip'
        ></img>
        <img
          style={{
            position: 'absolute',
            right: '25px',
            top: '25px',
            height: '50px'
          }}
          src='https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png'
          class='card-item__chip'
          alt='credit card chip'
        ></img> */}
      </div>
      
      <div
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div
          style={{
            fontSize: '30px',
            fontFamily: 'Fira Code',
            color: 'white'
          }}
          onClick={console.log('prova')}
        >
          <label>{props.title}</label>
          
        </div>
      </div>
      {/* <div>
        <label
          style={{
            color: 'white',
            position: 'absolute',
            bottom: '60px',
            left: '25px',
            opacity: 0.5
          }}
        >
          Attept
        </label>
        <label
          style={{
            color: 'white',
            position: 'absolute',
            bottom: '60px',
            right: '25px',
            opacity: 0.5
          }}
        >
         {props.at}
         
        </label>
      </div> */}

      {/* <div>
        <label
          style={{
            color: 'white',
            position: 'absolute',
            bottom: '25px',
            left: '25px',
            opacity: 1,
            fontSize: '25px'
          }}
        >
          Expert
        </label>
        <label
          style={{
            color: 'white',
            position: 'absolute',
            bottom: '25px',
            right: '25px',
            opacity: 1,
            fontSize: '25px'
          }}
        >
          {props.ex}
        </label>
      </div> */}
    
    </Card>
  )
}

export default MyCard;