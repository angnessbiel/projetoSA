export default function Cadastro(){
    return(
        <div>
            <header className="secondeHeader">
            <div className="cab">
            <img src="logo.png"></img>
            <h1>JaggerTV</h1>
            </div>       
        </header>
    <section className="cadastro">
        <div>
            <h2 className="tit">Cadastro</h2>
        </div>
        <div>
            <p>E-mail</p>
            <input type="text" />

            <br /><br />

            <p>Senha</p>
            <input type="text" />
            <br />
            <p>Confirmar Senha</p>
            <input type="text" />
            <br />
            <button>confirmar</button>
        </div>
    </section>
    </div>
    )
}