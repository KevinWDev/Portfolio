// Styles
import '../../utils/styles/Footer.css';
// Assets
import logoLinkedin from '../../assets/logo/logoLinkedin.png';
import logoGithub from '../../assets/logo/logoGithub.png';

function Footer() {

    return(

        <footer className='container__footer'>

            <div className='footer__div'>

                <p>Réalisé par Kevin Watteau</p>

                <div className='footer__div__lien'>
                    <a href="https://www.linkedin.com/in/kevin-watteau-478526254/" aria-label='Lien vers linkedin'><img src={logoLinkedin} alt="" /></a>
                    <a href="https://github.com/KevinWDev" aria-label='Lien vers github'><img src={logoGithub} alt="" /></a>
                </div>

            </div>
            
        </footer>
    );
};

export default Footer;