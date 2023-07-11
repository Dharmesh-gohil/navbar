import { useState } from "react"
import { links, social } from "./data"
import { FaBars } from "react-icons/fa"
import logo from "./logo.svg"

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false)
    
    //use this function in button as refrence or set direct arrow function in it what we used
    // const toggleLinks = () => { 
    //     setShowLinks(!showLinks)
    // }

  return (
      <nav>
          <div className="nav-center">
              <div className="nav-header">
                  <img src={logo} alt="logo" className="logo" />
                  <button className="nav-toggle"
                      onClick={() => setShowLinks(!showLinks)}>
                      <FaBars />
                  </button>
              </div>
              {/* { showLinks && <div className="links-container">
                  <ul className="links">
                      {links.map((link) => { 
                          const { id,text,url}=link
                          return <li key={text}>
                              <a href={ url}>{ text}</a>
                          </li>
                      })}
                  </ul>
              </div>}  or second approach is using css class adding this is static 
              approach so when links value means any links added then it will not show 
              in becoz we have set link height fixed to 160px or 10rem so we have to set 
              dynamic approach*/}
              <div className={ showLinks ? "links-container show-container":"links-container"}>
                  <ul className="links">
                      {links.map((link) => { 
                          const { id,text,url}=link
                          return <li key={text}>
                              <a href={ url}>{ text}</a>
                          </li>
                      })}
                  </ul>
              </div>
          </div>
    </nav>
  )
}
export default Navbar