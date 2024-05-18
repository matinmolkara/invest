import Maskgroup from '../assets/img/index/Maskgroup.png';
import Ham from '../assets/img/menu_icon/ham.png';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import DataContext from '../context/DataContext';

function LeftNav() {
  const { isActive,setIsActive } = useContext(DataContext);
  const toggleSidebar = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="col-12 col-lg-3">
            <div className="header-1">
              <div className="header-1-0">
              <img src={Maskgroup} alt="Logo Invest" />
              </div>
              <div className="header-1-1">
                <Link to="/">
                  INVEST PACK
                </Link>
              </div>
              <div className="header-1-2">
                <button className="toggle-hamburger" onClick={toggleSidebar}>
                    <img src={Ham} alt="Logo Invest" />
                </button>
              </div>
            </div>
          </div>
  )
}

export default LeftNav