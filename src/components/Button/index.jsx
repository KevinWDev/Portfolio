// Styles
import '../../utils/styles/Button.css';

function Button({ lien, name}) {
    return (
        <div>
             <a type='button' className='bouton' href={lien} aria-label='Lien'>{name}</a>
        </div>
    );
};

export default Button;