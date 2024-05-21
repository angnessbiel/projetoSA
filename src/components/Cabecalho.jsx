function Cabecalho(){
    return(
        <header>
            <div className="cab">
            <img src="logo.png"></img>
            <h1>JaggerTV</h1>
            </div> 
            <div className="nav">
              <button onclick="scrollToElement('Sobre')">Parceiros</button>  
             <a href="https://www.figma.com/proto/J5BUXyEGJtHqBfcKtVJpjF/alta-fidelidade?node-id=0-23&t=hVTUin2MM6Cgc8J3-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=0%3A187"><button onclick="scrollToElement('secao-alvo')" >Protótipo</button></a> 
                           <a href="https://www.figma.com/proto/J5BUXyEGJtHqBfcKtVJpjF/alta-fidelidade?node-id=0-23&t=hVTUin2MM6Cgc8J3-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=0%3A187"><button onclick="scrollToElement('secao-alvo')" >Protótipo</button></a> 
              <button>Time</button> 
            </div>        
        </header>

    )
}

export default Cabecalho
