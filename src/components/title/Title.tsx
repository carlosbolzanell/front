import React from 'react'

export default function Title({title}: Readonly<{title: string}>) {
  return (
    <h1 className='text-lg text-black font-poppins'>{title}</h1>
  )
}
