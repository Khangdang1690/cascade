import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
        <div className="footer-block">
          <div className = "text-des">
            By Giang Ho - Tam Dang - Khang Dang - Anny Dang
          </div>

          <div className="text-des">
            <p>&copy; {currentYear} CAScade. All rights reserved</p>
          </div>
        </div>
    </>
  )
}

export default Footer;