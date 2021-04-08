import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
const UrgeWithPleasureComponent = (props) => (
    <CountdownCircleTimer
      onComplete={() => {
        // do your stuff here
        // props.pointsave()
        props.hideme(false)
        //  return [true, 100] // repeat animation in 1.5 seconds
      }}
      isPlaying
      duration={15}
      colors="#A30000"
      size={50}
    />
  )
  export default UrgeWithPleasureComponent;