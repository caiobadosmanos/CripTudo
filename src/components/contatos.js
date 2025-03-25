import './Contact.css';

function Contact() {
    return (
        <div className="contact-container" id="contatos">
            <h1 className="contact-title">Entre em Contato</h1>
            <div className="text-lg space-y-2">
                <p className="contact-info">📧 Email: <a href="mailto:caioba.maciel@gmail.com">caioba.maciel@gmail.com</a></p>
                <p className="contact-info">📱 Telefone: <a href="tel:+5531984217616">+55 31 98421-7616</a></p>
                <p className="contact-info">📸 Instagram: <a href="https://www.instagram.com/caior.maciel" target="_blank">@caior.maciel</a></p>
            </div>
            <div className="contact-footer">📲 Bora conversar!</div>
        </div>
    );
}

export default Contact;