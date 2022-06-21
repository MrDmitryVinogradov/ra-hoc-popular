import Wrapper from './Wrapper'

import React from 'react'

function highliter(data, Component) {
  if (data.views > 1000) {
    return (props) => {
      return (
        <Wrapper label='popular' name='Popular!'>
          <Component {...props} />
        </Wrapper>
      )
    }
  }
  if (data.views < 100) {
    return (props) => {
      return (
        <Wrapper label='new' name='New!'>
          <Component {...props} />
        </Wrapper>
      )
    }
  }

  else {
    return (props) => (
      <Component {...props} />
    )
  }
}

export default highliter
