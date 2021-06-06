import React from 'react';
import { ImPhone, ImLocation, ImMail2 } from "react-icons/im";
import { BackTop } from 'antd';

const PageFooter = () => {
  return (
    <div className="container-fluid">
    <div className="footer-flex-css">
   
      <div className="footer">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="/">Air Index</a>
        </div>
        <ul className="socials">
          <li><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a></li>
          <li><a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a></li>
          <li><a href="https://www.pinterest.com/"><i className="fab fa-pinterest-p"></i></a></li>
          <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
        </ul>
        
        <BackTop>
          <div className="goTop"><i className="fas fa-arrow-circle-up"></i></div>
        </BackTop>
      </div>
      </div>
      <div className="copyright">Copyright &copy; 2021 airIndex</div>
    </div>
  );
}

export default PageFooter;