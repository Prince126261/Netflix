import "./Navbar.css";
import search_icon from "../../assets/search_icon.svg"
import bell_icon from "../../assets/bell_icon.svg"
import profile_img from "../../assets/profile_img.png"
import Logo from "../../assets/logo.png"
import caret_icon from "../../assets/caret_icon.svg"
import { useEffect, useRef } from "react";
import { logout } from "../../Firebase";
const Navbar = () => {
  const navRef = useRef();
  
  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return; // 🛡️ safety check

      if (window.scrollY >= 80) {
        navRef.current.classList.add("navbar_black");
      } else {
        navRef.current.classList.remove("navbar_black");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div ref={navRef} className="navbar">
      <div className="navbar_left">
        <img src={Logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Show</li>
          <li>Moivies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse By Language</li>
        </ul>
      </div>
      <div className="navbar_right">
        <img src={search_icon} alt="" className="icons" />
        <p>Children</p>
        <img src={bell_icon} alt="" className="icons" />
        <div className="navbar_profile">
          <img src={profile_img} alt="" className="profile" />
          <img src={caret_icon} alt="" />
          <div className="dropdown">
            <p onClick={() => { logout() }}>Sign out from Netflix</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar