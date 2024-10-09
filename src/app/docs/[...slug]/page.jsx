import React from 'react'

const Docs = ({params}) => {
  return (
    <>
    if(params.slug.length==2){
        <h1>
            viewing docs for feature {params.slug[0]} and concept {params.slug[1]}
        </h1>
        } else if(params.slug.length==1){
         <h2>viewing docs for feature {params.slug[0]} </h2>
        }
        <h1>home page is here !</h1>
    </>
  )
}

export default Docs
