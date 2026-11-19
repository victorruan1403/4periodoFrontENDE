import Logo from "./assets/logo.svg"
import Close from "./assets/close.svg";
import Menu from "./assets/menu.svg";
import { useState, useEffect } from "react";
import Button from "./components/Button";
import "./styles/header.css";
import "./styles/utility.css";
import HeroRectangleTwo from "./assets/images/rectangleTwo.svg";
import Card from "./components/Card";
import TruckIcon from "./assets/truck.svg";
import ToolIcon from "./assets/tool.svg";
import ChartIcon from "./assets/chart.svg";
import "./styles/Hero.css";
import "./styles/Solution.css";
import TestimonialCard from "./components/TestimonialCard";
import ProfileImageOne from "./assets/images/profileOne.svg";
import ProfileImageTwo from "./assets/images/profileTwo.svg";
import ProfileImageThree from "./assets/images/profileThree.svg";
import "./styles/Testimonials.css";
import Check from "./assets/check.svg";
import "./styles/Pricing.css";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

// Depoimentos de exemplo: troque pelos depoimentos reais dos clientes antes de entregar.
const testimonials = [
    {
        text: "Depoimento de exemplo. Troque este texto pelo que um cliente real falou sobre o controle de saída e devolução dos veículos.",
        image: ProfileImageOne,
        stars: 5,
        name: "Nome do cliente",
        role: "Cargo, Empresa",
    },
    {
        text: "Depoimento de exemplo. Aqui entra a opinião de um cliente real sobre o controle de abastecimentos e manutenções.",
        image: ProfileImageTwo,
        stars: 4,
        name: "Nome do cliente",
        role: "Cargo, Empresa",
    },
    {
        text: "Depoimento de exemplo. Aqui entra o que um cliente real achou dos relatórios por veículo, obra e motorista.",
        image: ProfileImageThree,
        stars: 5,
        name: "Nome do cliente",
        role: "Cargo, Empresa",
    },
];

export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
            html.style.overflow = showMobileMenu ? "hidden" : "auto";
        }
    }, [showMobileMenu]);

    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Gestão Fácil - página inicial" width={140} />
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li><a href="#">Home</a></li>
                            <li><a href="#solution">Soluções</a></li>
                            <li><a href="#testimonials">Depoimentos</a></li>
                            <li><a href="#pricing">Preços</a></li>
                            <li><a href="#contact">Contato</a></li>
                        </ul>
                    </div>
                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="#">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>

                    <div className="mobile-menu">
                        {showMobileMenu ? (
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li><a onClick={() => setShowMobileMenu(false)} href="#">Home</a></li>
                                        <li><a onClick={() => setShowMobileMenu(false)} href="#solution">Soluções</a></li>
                                        <li><a onClick={() => setShowMobileMenu(false)} href="#testimonials">Depoimentos</a></li>
                                        <li><a onClick={() => setShowMobileMenu(false)} href="#pricing">Preços</a></li>
                                        <li><a onClick={() => setShowMobileMenu(false)} href="#contact">Contato</a></li>
                                        <li><a className="reverse-color" onClick={() => setShowMobileMenu(false)} href="#">Login</a></li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(false)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <span onClick={() => setShowMobileMenu(true)} className="btn-wrapper">
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        )}
                    </div>
                </nav>
            </header>

            <section id="hero">
                <span className="desktop-only">
                    <img src={HeroRectangleTwo} alt="" />
                </span>

                <div className="container content">
                    <p className="desktop-only">Controle de frota</p>
                    <h1>Saiba onde estão seus veículos e quanto cada um custa.</h1>
                    <p>
                        Acompanhe retiradas, devoluções, abastecimentos e manutenções
                        em um só lugar, sem papel e sem planilha.
                    </p>
                    <div className="flex gap-1">
                        <span><Button text="Quero testar" /></span>
                        <span className="desktop-only">
                            <Button text="Saiba mais" secondary />
                        </span>
                    </div>
                </div>
            </section>

            <section className="container" id="solution">
                <header>
                    <span>
                        <h2>Soluções</h2>
                        <span className="desktop-only">
                            <h2>Pensado para o dia a dia da frota</h2>
                        </span>
                    </span>
                    <p>
                        A <strong>Gestão Fácil</strong> organiza o controle dos veículos da sua empresa:
                        você vê quem está com cada um, quanto foi gasto e o que precisa de manutenção.
                    </p>
                </header>

                <section className="even-columns">
                    <Card
                        icon={TruckIcon}
                        title="Quem está com o veículo"
                        text="Registre quem retirou, para qual obra e quando devolveu, e deixe o papel de lado."
                    />
                    <Card
                        icon={ToolIcon}
                        title="Gastos sob controle"
                        text="Lance abastecimentos e manutenções e veja quanto cada veículo custa."
                    />
                    <Card
                        icon={ChartIcon}
                        title="Relatórios na hora"
                        text="Filtre por veículo, obra, motorista ou período e tenha os números em segundos."
                    />
                </section>
            </section>

            <section id="testimonials">
                <header>
                    <span>
                        <p className="desktop-only">Quem usa, recomenda</p>
                        <h2>Cada cliente importa!</h2>
                    </span>
                    <p>
                        Veja o que dizem as empresas que já organizaram o controle de
                        veículos com a Gestão Fácil.
                    </p>
                </header>

                <section className="carousel">
                    {[0, 1].map((copy) => (
                        <div className="carousel-content" key={copy} aria-hidden={copy === 1}>
                            {testimonials.map((item, index) => (
                                <TestimonialCard key={index} {...item} />
                            ))}
                        </div>
                    ))}
                </section>
            </section>

            <section id="pricing" className="container">
                <header>
                    <p className="desktop-only">Planos e preços</p>
                    <h2>Nossos planos</h2>
                </header>

                <section className="even-columns gap-1.5">
                    <div className="pricing-card">
                        <span className="plan">
                            <h3>Básico</h3>
                            <p>Para conhecer o sistema e testar com poucos veículos.</p>
                        </span>
                        <h2>Grátis</h2>
                        <Button text="Quero testar" secondary />
                        <span className="hr" />
                        <ul>
                            <li className="features">
                                <img src={Check} alt="ícone check" width={24} height={24} />
                                <p>Até 3 veículos</p>
                            </li>
                            <li className="features">
                                <img src={Check} alt="ícone check" width={24} height={24} />
                                <p>Registro de retiradas e devoluções</p>
                            </li>
                        </ul>
                    </div>

                    <div className="pricing-card premium">
                        <span className="bonus">
                            <p>1º MÊS COM DESCONTO</p>
                        </span>
                        <span className="plan">
                            <h3>Premium</h3>
                            <p>Para empresas que precisam controlar toda a frota.</p>
                        </span>
                        <span className="price">
                            <h2>R$ 89,90</h2>
                            <p>/mês</p>
                        </span>
                        <Button text="Quero testar" />
                        <span className="hr" />
                        <ul>
                            <li className="features">
                                <img src={Check} alt="ícone check" width={24} height={24} />
                                <p>Veículos ilimitados</p>
                            </li>
                            <li className="features">
                                <img src={Check} alt="ícone check" width={24} height={24} />
                                <p>Abastecimentos e manutenções</p>
                            </li>
                            <li className="features">
                                <img src={Check} alt="ícone check" width={24} height={24} />
                                <p>Relatórios por veículo, obra e motorista</p>
                            </li>
                        </ul>
                    </div>
                </section>
            </section>

            <section id="contact" className="container">
                <header>
                    <p className="desktop-only">Contato</p>
                    <h2>Fale com a gente</h2>
                    <p>
                        Quer testar a Gestão Fácil ou tirar uma dúvida? Mande uma
                        mensagem e responderemos por e-mail.
                    </p>
                </header>

                <ContactForm />
            </section>

            <Footer />
        </>
    )
}
