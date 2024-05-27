export default function Adm() {
    return (
        <div>
            <header className="secondeHeader">
                <div className="cab">
                    <img src="logo.png"></img>
                    <h1>JaggerTV</h1>
                </div>
            </header>
            <h1 className="titulo-pag">ÁREA DO ADMINISTRADOR</h1>
            <section className="blog">
                <h1 className="blogH1">BLOGS CADASTRADOS</h1>
                <button class="cadastrar">CADASTRAR BLOGS</button>
            </section>
            <br />
            <section className="blog">
                <div className="admdiv">
                    <img className="admFoto" src="neymar.PNG" alt="" />
                    <h2>Título</h2>
                    <p>texto</p>
                    <button class="admBotao">Ver mais</button>
                </div>
                <div className="admdiv">
                    <img className="admFoto" src="neymar.PNG" alt="" />
                    <h2>Título</h2>
                    <p>texto</p>
                    <button class="admBotao">Ver mais</button>
                </div>
                <div className="admdiv">
                    <img className="admFoto" src="neymar.PNG" alt="" />
                    <h2>Título</h2>
                    <p>texto</p>
                    <button class="admBotao">Ver mais</button>
                </div>
            </section>
            <br />
            <footer className="admFooter">
                <p>&copy; adiministração</p>
            </footer>
        </div>
    )
}