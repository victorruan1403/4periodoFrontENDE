import Star from "../assets/star.svg";
import StarOuter from "../assets/starOuter.svg";

interface ITestimonialCardProps {
    text: string;
    image: string;
    stars: number;
    name: string;
    role: string;
}

export default function TestimonialCard({ text, image, stars, name, role }: ITestimonialCardProps) {
    return (
        <div className="carousel-card">
            <img src={image} alt={`Foto de ${name}`} />
            <span className="testimony">
                <p>{text}</p>
            </span>
            <span className="rating" aria-label={`${stars} de 5 estrelas`}>
                {[1, 2, 3, 4, 5].map((n) => (
                    <img
                        key={n}
                        src={n <= stars ? Star : StarOuter}
                        alt=""
                        width={22}
                        height={22}
                    />
                ))}
            </span>
            <span className="names">
                <p>{name}</p>
                <p>{role}</p>
            </span>
        </div>
    )
}
