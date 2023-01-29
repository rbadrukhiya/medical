import Header from "./header"
import Welcome from "./welcome"
import About from "./about"
import Count from "./count"
import Expert from "./expert"
import Ask_questions from "./Askquestions"
import TopBottom from "./top-bottom"
import Client_say from "./client-say"
import Latest from "./latestnews"
import Choose from "./Choose"
import Health from "./healthcare"
import Subscribe from "./subscribe"
import Footer from "./footer"
import Copyright from "./copyright"
import { useState } from "react"

function Home()
{
    
    return(
        <>
          <Header></Header>
      <Welcome></Welcome>
      <About></About>
      <Count></Count>
      <Expert></Expert>
      <Health></Health>
      <Ask_questions></Ask_questions>
      {/* <Choose></Choose> */}
      <TopBottom></TopBottom>
      <Client_say></Client_say>
      <Latest></Latest>
      <Subscribe/>
      <Footer></Footer>
      <Copyright/>
      
        </>
    )

}
export default Home