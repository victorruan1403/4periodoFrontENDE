import { useState, type FormEvent } from "react";
import Button from "./Button";
import "../styles/Contact.css";

interface IContactData {
    email: string;
    message: string;
}

// Chama a Netlify Function (netlify/functions/send-email.ts) pelo atalho /api/send-email.
async function sendContactEmail(data: IContactData) {
    const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.error ?? "Erro ao enviar mensagem.");
    }
}

export default function ContactForm() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sending, setSending] = useState(false);
    const [feedback, setFeedback] = useState<{ ok: boolean; text: string } | null>(null);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (sending) return;

        setSending(true);
        setFeedback(null);

        try {
            await sendContactEmail({ email, message });
            setFeedback({ ok: true, text: "Mensagem enviada! Responderemos em breve." });
            setEmail("");
            setMessage("");
        } catch (error) {
            const text = error instanceof Error ? error.message : "Erro ao enviar mensagem.";
            setFeedback({ ok: false, text });
        } finally {
            setSending(false);
        }
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="contact-email">Seu e-mail</label>
            <input
                id="contact-email"
                type="email"
                placeholder="voce@empresa.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
            />

            <label htmlFor="contact-message">Mensagem</label>
            <textarea
                id="contact-message"
                rows={5}
                placeholder="Conte como podemos ajudar"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
            />

            <Button text={sending ? "Enviando..." : "Enviar mensagem"} />

            {feedback && (
                <p role="status" className={feedback.ok ? "feedback-ok" : "feedback-error"}>
                    {feedback.text}
                </p>
            )}
        </form>
    )
}
