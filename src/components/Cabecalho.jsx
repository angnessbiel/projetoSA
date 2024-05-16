function Cabecalho(){
    return(
        <header>
            <div className="cab">
            <img src="logo.png"></img>
            <h1>JaggerTV</h1>
            </div> 
            <div className="nav">
              <button onclick="scrollToElement('Sobre')">Parceiros</button>  
              <button onclick="scrollToElement('secao-alvo')">Protótipo</button> 
              <button>Time</button> 
            </div>        
        </header>

    )
}

export default Cabecalho