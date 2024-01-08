import Link from "next/link";

export default function Navbar() {
    return (
        <div className="container navbar-containter">
            <nav className="navbar navbar-dark navbar-expand-lg bg-transparent">
                <Link className="navbar-brand navLogo fs-1" href="/">RichardTandean.</Link>
                <a className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </a>
                <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" data-bs-backdrop="false">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title navLogo" id="offcanvasNavbarLabel">RichardTandean.</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 fs-3">
                        <li className="nav-item">
                            <Link className="nav-link navMenu" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link navMenu" href="#Education">Education</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link navMenu" href="#Experience">Experience</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link navMenu" href="#Portofolio">Portofolio</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link navMenu" href="#Contact">Contact</Link>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}