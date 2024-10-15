"use client";
import { useRouter } from 'next/navigation';
import React from 'react'

const page = () => {
    const router=useRouter();
    const handler=()=>{
        console.log("order is placing")
        router.push("/")
    }
  return (
    <div>
      <h1>order now</h1>
      <button onClick={handler}>placing order</button>
    </div>
  )
}

export default page
