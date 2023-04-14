import './App.css'
import Navbar from './Navbar'
import AboutUs from './container/aboutus/AboutUs'
import Chef from './container/chef/Chef'
import Gallery from './container/gallery/Gallery'
import Header from './container/header/Header'
import Intro from './container/intro/Intro'
import SpecialMenu from './container/specialMenu/SpecialMenu'

export default function App(){
  return(<main>
    <Navbar/>
    <Header/>
    <AboutUs/>
    <SpecialMenu/>
    <Chef/>
    <Intro/>
    <Gallery/>
  </main>)
}