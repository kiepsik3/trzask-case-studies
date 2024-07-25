import React from 'react'
import { Container, } from 'react-bootstrap';
import './footer.less';

export default function Footer() {
    return (
        <footer className="footer">
            <Container>
                <div className="footer-content">
                    <address className="footer-address">Pana Balcera 6B/77, 20-631 Lublin, Polska</address>
                    <div className="footer-links">
                        <ul>
                            <li><a href="https://instagram.com/trzaskstudio" target="_blank">@insta</a></li>
                            <li><a href="https://www.linkedin.com/company/trzaskstudio" target="_blank">@linked</a></li>
                            <li><a href="https://www.youtube.com/channel/UCCgVKfDGxxWt-PHsZwz2NDQ" target="_blank">@youtube</a></li>
                        </ul>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
