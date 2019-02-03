import React from 'react';

export default function Footer() {
  return (
    <footer className="unique-color-dark text-white mt-5 p-4 text-center">
       
       <div className="text-center mr-auto"> 
               <a href="https://lk-portfolio.herokuapp.com" rel="noopener noreferrer" className="text-white m-2" target="_blank"><i className="fas fa-globe"></i></a>
               <a href="https://www.facebook.com/lakshyajit.laxmikant" rel="noopener noreferrer" className="text-white m-2" target="_blank"><i className="fab fa-facebook "></i></a>
               <a href="https://github.com/lakshyajit165" rel="noopener noreferrer" className="text-white m-2" target="_blank"><i className="fab fa-github "></i></a>
               <a href="https://www.linkedin.com/in/lakshyajit/" rel="noopener noreferrer" className="text-white m-2" target="_blank"><i className="fab fa-linkedin "></i></a>
               <a href="https://www.quora.com/profile/Lakshyajit-Laxmikant" rel="noopener noreferrer" className="text-white m-2" target="_blank"><i className="fab fa-quora"></i></a>
               <a href="https://medium.com/@lakshyajit165" rel="noopener noreferrer" className="text-white m-2" target="_blank"><i className="fab fa-medium"></i></a>
       </div> 
       <p className="md-0">Made with <span style={{color:'red', fontSize: '20px'}}>&hearts; </span>by Lakshyajit</p>
    
   </footer>
  )
}
