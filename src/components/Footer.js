// eslint-disable-next-line import/no-extraneous-dependencies
import { BsFillHeartFill } from "react-icons/bs";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container row">
        <p className="text">
          Built with
          <BsFillHeartFill className="heart-icon" />
          by:
          <a
            href="https://github.com/serengia"
            target="_blank"
            rel="noreferrer"
          >
            James Serengia.
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
