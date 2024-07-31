import React from 'react'

const Question_Card = ({statement,papa,children}) => {

  return (
    <div>
        <h1>{statement}</h1>
        <h2>{papa}</h2>
        <h3>{children}</h3>
    </div>
  )
}

export default Question_Card