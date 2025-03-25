import "./Button.css";

function rolarAte(x) {
    let id = "d";
    if (x === "Cripitografar") {
        id = "c";
    }

    const elemento = document.getElementById(id);
    if (elemento) {
        elemento.scrollIntoView({ behavior: "smooth" });
    }
}

function Button({ text }) {
    return (
        <>
            <button className="botao-bonito" onClick={() => rolarAte(text)}>
                {text}
            </button>
        </>
    );
}

export default Button;
