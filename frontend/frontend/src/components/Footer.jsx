import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© All rights reserved - 2025 mohamadit102@gmail.com</p>
        <div className="footer-social">
          <a
            href="https://www.facebook.com/?ref=homescreenpwa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

     
      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
          color: #fff;
          padding: 25px 10%;
          text-align: center;
          position: relative;
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
        }

        .footer p {
          margin: 0;
          font-size: 1rem;
          letter-spacing: 0.5px;
          opacity: 0.9;
          animation: fadeIn 2s ease;
        }

        .footer-social {
          display: flex;
          gap: 15px;
        }

        .footer-social a {
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          font-size: 1.2rem;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .footer-social a:hover {
          background: #fff;
          color: #2c5364;
          transform: translateY(-4px) scale(1.1);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 600px) {
          .footer {
            padding: 20px 5%;
          }
          .footer p {
            font-size: 0.9rem;
          }
          .footer-social a {
            width: 35px;
            height: 35px;
            font-size: 1rem;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
