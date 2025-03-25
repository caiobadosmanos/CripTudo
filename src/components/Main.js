import { useState, useEffect } from 'react';
import './Main.css'; // Importa o arquivo CSS

function Main(props) {
    function place(props) {
        if (props.tipo === "c") {
            return "texto para criptografar";
        } else {
            return "texto para descriptografar";
        }
    }

    function gerar() {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let resultado = '';
        for (let i = 0; i < 10; i++) {
            const indice = Math.floor(Math.random() * caracteres.length);
            resultado += caracteres[indice];
        }
        return resultado;
    }

    function title(props) {
        if (props.tipo === "c") {
            return "Criptografar";
        } else {
            return "Descriptografar";
        }
    }

    // Função que calcula o texto criptografado ou descriptografado
    function processarTexto(texto, chave, tipo) {
        let resultado = '';
        if (texto) {
            for (let i = 0; i < texto.length; i++) {
                let j = i;
                while (j >= chave.length) {
                    j -= chave.length;
                }
                let soma;
                if (tipo === 'c') {
                    soma = String.fromCharCode(texto[i].charCodeAt(0) + chave[j].charCodeAt(0));  // Criptografar
                } else {
                    soma = String.fromCharCode(texto[i].charCodeAt(0) - chave[j].charCodeAt(0));  // Descriptografar
                }
                resultado += soma;
            }
        }
        return resultado || "Digite um texto Primeiro...";
    }
    
    function copiarChave() {
        // Seleciona o elemento com a classe 'chave'
        const chaveElement = document.querySelector('.chave');
    
        if (chaveElement) {
            // Cria um elemento de input temporário para copiar o texto
            const input = document.createElement('input');
            input.value = chaveElement.textContent; // Pega o conteúdo do elemento
            document.body.appendChild(input);
            
            // Seleciona o conteúdo do input
            input.select();
            input.setSelectionRange(0, 99999); // Para dispositivos móveis
            
            // Copia o conteúdo para a área de transferência
            document.execCommand('copy');
            
            // Remove o input temporário
            document.body.removeChild(input);
            
            // Exibe o alerta
            alert('Chave copiada para a área de transferência!');
        } else {
            alert('Elemento com a classe "chave" não encontrado.');
        }
    }
    function copi2(){
        
        copiar("f");

    }
    function copiar(nome) {
        // Seleciona o elemento com a classe 'chave'
        const chaveElement = document.querySelector('#'+nome);
    
        if (chaveElement) {
            // Cria um elemento de input temporário para copiar o texto
            const input = document.createElement('input');
            input.value = chaveElement.textContent; // Pega o conteúdo do elemento
            document.body.appendChild(input);
            
            // Seleciona o conteúdo do input
            input.select();
            input.setSelectionRange(0, 99999); // Para dispositivos móveis
            
            // Copia o conteúdo para a área de transferência
            document.execCommand('copy');
            
            // Remove o input temporário
            document.body.removeChild(input);
            
            // Exibe o alerta
            alert('Texto copiado para a área de transferência!');
        } else {
            alert('Elemento com a classe "chave" não encontrado.');
        }
    }

    const [chave, setChave] = useState("");
    const [texto, setTexto] = useState("");
    const [final, setFinal] = useState("");

    useEffect(() => {
        if (chave === "") {
            setChave(gerar());
        }
    }, [props.tipo, chave]); // Só atualiza a chave quando o tipo mudar e a chave estiver vazia

    useEffect(() => {
        const resultado = processarTexto(texto, chave, props.tipo);
        setFinal(resultado); // Só atualiza o final quando o texto ou chave mudam
    }, [texto, chave, props.tipo]); // Atualiza o texto final

    function gerarChave(props, chave, setChave) {
        if (props.tipo === "c") {
            return (
                <>
                <div className='d'>
                    <h2 className='chave' onClick={copiarChave}>Sua chave é: < bold id = "cha">{chave}</bold></h2>
                </div>
                    <button onClick={() => setChave(gerar())}>Gerar outra Chave Aleatoria</button>
                </>
            );
        } else {
            return (
                <>
                    <h2>Digite sua chave</h2>
                    <input type="text"  onChange = {e=> setChave(e.target.value)}placeholder='sua chave aqui' />
                </>
            );
        }
    }

    return (
        <div className="main-container" id={props.tipo}>
            <h1>{title(props)}</h1>

            <textarea placeholder={place(props)} rows="4" cols="50" onChange={e => setTexto(e.target.value)} />
            
            <h2 className='titles'>Texto Pronto:</h2>
            <h3 id= "f">{final}</h3>

            {gerarChave(props, chave, setChave)}
            <button className='but' onClick={copi2}>Compartilhar</button>
        </div>
    );
}

export default Main;
