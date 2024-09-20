import React from 'react'
import Link from 'next/link'
const Welcome = () => {
  return (
    <div>
      <Link href="/blog">Blog</Link>
      <Link href="/login">Login</Link>
    </div>
  )
}

export default Welcome