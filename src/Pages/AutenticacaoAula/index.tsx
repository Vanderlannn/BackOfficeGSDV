import "./styles.scss"

export function AutenticacaoAula () {

        return (

            <div className="container-aula">
                <form className="login-container">

                <h1 className="login-title">Autenticação</h1>
                <h2 className="login-subtitle">Bem-vindo ao sistema de autenticação!</h2>

                <div className="input-container">
                    <input type="e-mail" placeholder="E-mail" required />
                    <input type="password" placeholder="Senha" required />
                </div>

                <div className="button-container">
                    <button className="bt-entrar" type="submit">Entrar</button>
                    <button className="bt-esqueci-senha" type="button">Esqueci a senha</button>
                </div>

                <div className="checkbox-container">
                    <input type="checkbox" id="lembre-me" />
                    <span className="checkbox-label">Lembrar minha senha</span>
                </div>

                </form>

            </div>
        )
}