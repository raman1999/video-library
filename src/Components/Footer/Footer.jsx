export function Footer() {
  return (
    <>
      <footer className="footer txt-center flex-column">
        <h3 className="txt-white">
          Made with <i className="fas fa-heart txt-bgFailure"></i> by Raman
        </h3>
        <div>
          <a
            className="link"
            href="https://github.com/raman1999"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-github fa-lg txt-white"></i>
          </a>
          <a
            className="link"
            href="https://twitter.com/raman_joshi99"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-twitter fa-lg txt-white "></i>
          </a>
          <a
            className="link"
            href="https://www.linkedin.com/in/raman-joshi-01325b168/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-linkedin-in fa-lg txt-white "></i>
          </a>
        </div>
      </footer>
    </>
  );
}
