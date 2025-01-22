import React, { useEffect, useState } from 'react'
import Header from './Header';
import Footer from './Footer';
import { Outlet, Route, useNavigate } from 'react-router';
import Sidebar from './Sidebar';
function Landing() {
  const navigate = useNavigate()
  // const [isSidebar, setSidebar] = useState(true)
  // function handleSidebar(){
  //   if(isSidebar){
  //     setSidebar(false)
  //   }
  //   else{
  //     setSidebar(true)
  //   }
  // }
  useEffect(()=>{
    let userType = localStorage.getItem('userType')
    if(userType!='admin'){
      navigate('/')
    }
  },[])
  return (
    <>
      {/* <Header handleSidebar={handleSidebar}/> */}
      <Header/>
      {/* {(isSidebar)?<Sidebar />:""} */}
      <Sidebar/>
      {/* <main id={`${(isSidebar)?'main':""}`} class="main">
        <Outlet />
      </main> */}
      <main id='main' class="main">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Landing