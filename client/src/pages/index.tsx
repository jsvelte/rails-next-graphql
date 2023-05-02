import React from 'react'
import type { NextPage } from 'next'

type PageProps = Record<string, unknown>

const Index: NextPage<PageProps> = (): JSX.Element => {
  return (
    <div>
      <p className="text-xl font-bold text-blue-500">This is tailwindcss</p>
    </div>
  )
}

Index.defaultProps = {}

export default Index
