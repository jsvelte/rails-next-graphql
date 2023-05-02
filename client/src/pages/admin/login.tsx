import React from 'react'
import type { NextPage } from 'next'

type PageProps = Record<string, unknown>

const AdminLogin: NextPage<PageProps> = (): JSX.Element => {
  return <div className="font-bold text-blue-500">AdminLogin</div>
}

AdminLogin.defaultProps = {}

export default AdminLogin
