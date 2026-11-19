import Logo from "../assets/logo.svg";
import "../styles/Footer.css";

export default function Footer() {
    return (
        <footer id="footer">
            <div className="container footer-content">
                <img src={Logo} alt="Gestão Fácil" width={140} />

                <nav aria-label="Links do rodapé">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#solution">Soluções</a></li>
                        <li><a href="#testimonials">Depoimentos</a></li>
                        <li><a href="#pricing">Preços</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                </nav>

                <p>© {new Date().getFullYear()} Gestão Fácil. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}
