import '../../utils/styles/Card.css'

function Card({ image }) {

    return (


        <div className='card'>
          
            <img className='card__img' src={image} alt="" />
            <div className='card__hover'>
                <p style={{
                    color: "white"
                }}>bonjour je m'appel kevin</p>
            </div>
         
        </div>

    );
};

export default Card;