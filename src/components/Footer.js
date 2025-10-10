import './footer.css';
export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <p className="footer-title">Készítette:</p>
                    <p className="footer-text">I. Bori</p>
                </div>

                <div className="footer-section">
                    <p className="footer-title">Támogatóink:</p>
                    <ul className="footer-list">
                        <li><p className="footer-text">Supporter 1</p></li>
                        <li><p className="footer-text">Supporter 2</p></li>
                        <li><p className="footer-text">Supporter 3</p></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <p className="footer-title">Elérhetőségek:</p>
                    <ul className="footer-list">
                        <li><p className="footer-text">Telefonszám: 564-451-521-435</p></li>
                        <li><p className="footer-text">Email: valami@gmail.com</p></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p className="footer-text">&copy; 2025 I. Bori - Minden jog fenntartva.</p>
            </div>
        </div>
    );
}
