import Link from "next/link";

export default () => {
  return (
    <div style={{ width: `100%` }} className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 text-center item">
              <h3>About</h3>
              <ul>
                <li>
                  <Link href="/team">
                    <a>Team</a>
                  </Link>
                </li>
                <li>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSffGJweoZwhw-V3rQ157451KbRIkqsuZtmffh-opcpfEHnXNg/viewform">
                    Teach
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 item text">
              <h3></h3>
              <p></p>
              <img alt="logo" id="footer-logo" src="assets/img/white.png" />
            </div>

            <div className="col item social">
              <a href="https://facebook.com/codetheuniverse">
                <i className="icon ion-social-facebook"></i>
              </a>
              <a href="https://www.instagram.com/codetheuniverse/?hl=en">
                <i className="icon ion-social-instagram"></i>
              </a>
            </div>
          </div>
          <p className="copyright">Code The Universe Foundation© 2020</p>
        </div>
      </footer>
    </div>
  );
};
