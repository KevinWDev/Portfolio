import '../../utils/styles/Footer.css'
import logoLinkedin from '../../assets/logo/logoLinkedin.png'
import logoGithub from '../../assets/logo/logoGithub.png'

function Footer() {
    return(
        <footer className='container__footer'>
            <div className='footer__div'>
                <p>Réalisé par Kevin Watteau</p>
                <div className='footer__div__lien'>
                    <a href="https://www.linkedin.com/in/kevin-watteau-478526254/"><img src={logoLinkedin} alt="" /></a>
                    <a href="https://github.com/KevinWDev"><img src={logoGithub} alt="" /></a>
                </div>
            </div>
        </footer>
    )
}
export default Footer