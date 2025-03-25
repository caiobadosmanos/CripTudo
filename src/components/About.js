import "./About.css"

function About() {
    return (
        <div className="about-container" id ="sobre">
            <h2 className="about-title">Como Usar?</h2>
            
            <h3 className="about-subtitle">Criptografar</h3>
            <p className="about-text">
                Basta clicar em "Gerar Chave", depois digitar a mensagem. Em seguida, copie a chave e o texto e envie para quem você deseja que leia a mensagem.
            </p>    
            
            <h3 className="about-subtitle">Descriptografar</h3>
            <p className="about-text">
                Cole o texto e a chave nos campos indicados para decifrar a mensagem e visualizar o conteúdo.
            </p>    

            <h2 className="about-title">Como Funciona?</h2>
            <p className="about-text">
                Nosso sistema de criptografia gera chaves totalmente aleatórias e utiliza um algoritmo avançado para codificar ou decodificar sua mensagem, tornando-a ilegível para terceiros e garantindo total segurança na comunicação.
            </p>
        </div>
    );
}

export default About;
