export default function Login(){
    return(
        <div>
        <header className="secondeHeader">
            <div className="cab">
            <img src="logo.png"></img>
            <h1>JaggerTV</h1>
            </div>       
        </header>
    <section className="login">
        <div>
            <h2 className="tit">Login</h2>
        </div>
        <div>
            <p>E-mail</p>
            <input type="text" />

            <br />

            <p>Senha</p>
            <input type="text" /><button>confirmar</button>
            <br />
            <br />
            <a href="">Esqueceu sua senha?</a>

        </div>
    </section>
    </div>
    )
}