import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
const UrgeWithPleasureComponent = (props) => (
    <CountdownCircleTimer
      onComplete={() => {
        // do your stuff here
        props.hideme(false)
        return [true, 1] // repeat animation in 1.5 seconds
      }}
      isPlaying
      duration={10}
      colors="#A30000"
      size={50}
    />
  )
  export default UrgeWithPleasureComponent;