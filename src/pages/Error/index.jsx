// Assets
import imgError from '../../assets/error.png'
// Styles
import '../../utils/styles/Error.css'
// Link
import { Link } from 'react-router-dom'

function Error() {
    return (
        <main>

            <div className="container__error">
                <p className='error__404'>404</p>
                {/* <div className='container__error__img'> */}

                <img className='error__img' src={imgError} alt="" />
                {/* </div> */}
                <p className='error__text'>Il semblerait que cette page n'existe pas.</p>

                <Link to="/" className='error__button'>Retour à l'accueil</Link>
            </div>
            
        </main>
    )
}

export default Error