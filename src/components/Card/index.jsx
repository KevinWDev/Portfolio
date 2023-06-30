// Hooks
import { useNavigate } from 'react-router-dom';
// Styles
import '../../utils/styles/Card.css';


function Card({ id, image, title }) {

let navigate = useNavigate();

function getInfos() {
    let path = ("../infos/"+id);
    navigate(path);
};


    return (

        <div className='card' onClick={() => getInfos()}>
          
            <img className='card__img' src={image} alt="" />

            <div className='card__hover'>

                <div className='card__title__container'>
                    <h2 className='card__title'>{title}</h2>
                </div>

                <div className='card__div__span'>
                    <span className='card__span'>Voir plus</span>

                </div>

            </div>
         
        </div>

    );
};

export default Card;