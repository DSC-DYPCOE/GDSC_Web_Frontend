import React, { useEffect } from 'react'
import Page404Comp from '../components/Page404Comp/Page404Comp'

const Page404 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <Page404Comp />
  )
}

export default Page404;
