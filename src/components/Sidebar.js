import Phone from '../assets/img/index/footer_icon/phone.png'
import Letter from '../assets/img/index/footer_icon/letter.png'
import Locate from '../assets/img/index/footer_icon/location.png'
import { Link } from 'react-router-dom'
import React, { useContext,useRef,useEffect } from 'react';
import DataContext from '../context/DataContext';

function Sidebar() {
  const { isActive,setIsActive } = useContext(DataContext);
  const sidebarRef = useRef(); // Create a ref

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsActive(false); // Close sidebar if clicked outside
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setIsActive]);
  const navItems =[
    {
      link:'/about',
      className:'bi bi-house',
      text:'Home',
    },
    {
      link:'/about',
      className:'bi bi-people-fill',
      text:'About Us',
    }, {
      link:'/plan',
      className:'bi bi-rocket',
      text:'Plans',
    }, {
      link:'/faq',
      className:'bi bi-question-diamond',
      text:'F&Q',
    }, {
      link:'/contact',
      className:'bi bi-headset',
      text:'Contact Us',
    },
  ];
  const socialLinks =[
    {
      link:'/about',
      className:'https://telegram.org',
      
    },
    {
      link:'/about',
      className:'https://twitter.com',
      
    }, {
      link:'https://facebook.com',
      className:'bi bi-facebook',
      
    }, {
      link:'https://instagram.com',
      className:'bi bi-instagram',
      
    }
  ]
  return (
    <div ref={sidebarRef} className={`side-navbar ${isActive ? 'is-active' : ''} flex-wrap flex-column`} id="sidebar">
    
        <ul className="nav flex-column text-white w-100">
           {
            navItems.map((item,index) =>(
              <li className={`nav-item ${index === 0 ? 'active' : ''}`} >
                <Link to={item.link} key={index}>
                  <i className={item.className}></i>
                  {item.text}
                </Link>
            </li> 
            ))
           }            
               
        </ul>
        <div className="side-nav-contact">
          <ul className="text-left">
            <li>
              <Link href="#">
                <img src={Phone} alt='Phone' />
                00905538355909
              </Link>
            </li>
            <li>
              <Link href="#">
                <img src={Letter} alt='letter'/>
                Investpack@gmail.com
              </Link>
            </li>
            <li>
              <Link href="#">
                <img src={Locate} alt='location'/>
                Iran-tehran
              </Link>
            </li>
           
            
            
    
          </ul>
       
            <ul className="nav">
                {
                  socialLinks.map((item,index) =>(
                    <li className="nav-item" key={index}>
                      <Link  to={item.link}>
                        <i className={item.className}></i>
                      </Link>
                    </li>
                  ))
                }
                
              </ul>
        
        </div>
    </div>
  )
}


export default Sidebar
