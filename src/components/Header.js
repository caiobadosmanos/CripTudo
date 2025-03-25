import "./Header.css"

function Header(){
    function rolarAte(id) {

        const elemento = document.getElementById(id);
        if (elemento) {
            elemento.scrollIntoView({ behavior: "smooth" });
        }
    }
    

    return(
        <div className ="boxHeader">
            <div className="titleHeader">
                <h2>
                    CripiTudo
                </h2>
                <p>
                    Criptografe Seus Textos Facilmente
                </p>
            </div>
            <div className ="itemHeader">
                
                <h3 className="itemI" onClick ={()=>rolarAte("c")}>Cripitografar</h3>
                <h3 className="itemI" onClick ={()=>rolarAte("d")}>DEScripitografar</h3>
                <h3 className="itemI" onClick ={()=>rolarAte("contatos")}>Contate-me</h3>
                <h3 className="itemI" onClick ={()=>rolarAte("sobre")}>Sobre</h3>
            </div>
        </div>
    )

}
export default Header