import Image from 'next/image';

export function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="nav-logo">
            <Image src="/assets/lamb-mark.png" alt="" width={30} height={30} style={{ filter: 'brightness(0) invert(1)' }} />
            <span>Rooted</span>
          </div>
          <p>The calm command center for new parents. Two patients, one app, the whole household held.</p>
        </div>
        <div className="footer-col">
          <h4>Product</h4>
          <ul>
            <li><a href="#two-patient">For Mom</a></li>
            <li><a href="#features">For Baby</a></li>
            <li><a href="#handoff">Co-parents</a></li>
            <li><a href="#faq">Roadmap</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#founder">Our story</a></li>
            <li><a href="#two-patient">Why postpartum</a></li>
            <li><a href="mailto:hello@rootedapp.co">Press</a></li>
            <li><a href="mailto:hello@rootedapp.co">Contact</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li><a href="mailto:hello@rootedapp.co">Help center</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="mailto:hello@rootedapp.co">hello@rootedapp.co</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Rooted. Made with care for new families.</span>
        <span>Rooted is a household tool, not a medical device.</span>
      </div>
    </footer>
  );
}
