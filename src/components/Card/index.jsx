import '../../utils/styles/Card.css'


function Card({ id, image, title }) {

    return (

        <div className='card'>
          
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