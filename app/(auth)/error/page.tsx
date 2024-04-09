'use client'
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function page() {
    const searchParams = useSearchParams()
    const error = searchParams.get('error')
  return (
    <h1 className='text-center mt-[20%] text-5xl font-extrabold'>Error {error?.toString()}</h1>
  )
}
