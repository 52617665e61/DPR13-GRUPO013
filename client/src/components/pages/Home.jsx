import Layout from "./../../Layouts/Layout"
import styles from './Home.module.css'

function Home() {
    return(
        <>
        <Layout>
            
            <div className={styles.apresentation}>
                <h1 class='text-h1'>Nome do prestador</h1>
                <h2 class='text-h2'>Subtítulo com os valores do prestador</h2>
                <p className={styles.p}>Espaço com uma breve apresentação sobre o prestador e seus valores. 
                </p>
            </div>

            <div className={styles.apresentation_image}>
                <img src="src/assets/exemplo_logo.png" title='Exemplo de imagem' alt='Quadrado amarelo com um texto em preto escrito: Esse é umexemplo de imagem/logo' align='right'/>
            </div>

            <div>
                <p>A partir daqui pode ser colocados textos desde falando sobre o prestador ou das principais funcionalidades que o cliente pode ter acesso no aplicativo web, os principais links para redirecionamento pode ser feitos nessa parte, como por exemplo.

                Caso deseje fazer um agendamento conosco basta clicar em <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href='/agendamento'>agendamento</a>, basta preencher o formulário e pronto seu agendamento conosco está feito.
                </p>
            </div>
   
        </Layout>
        </>
    )
}

export default Home;