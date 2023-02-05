import React from 'react'

function Links({url,children}) {
  return (
    <a href={url}>{children}</a>
  )
}

export  {Links}