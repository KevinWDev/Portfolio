// Data
import datas from '../../datas/datas.json'
//Hooks
import { useParams } from 'react-router-dom';
// Styles
import '../../utils/styles/Infos.css';
// Composants / Pages
import Button from '../../components/Button';


function Infos() {

    const { id } = useParams();
   
    let data = datas.find((d) => d.id === id)
    console.log(data);

    return (

        <main>

            <div className='infos'>

                <div className='infos__container__all'>
                    <h2 className='infos__title'>{data.title}</h2>
                    <p className='infos__date'><span>Date :</span> {data.date}</p>
                    <aside className='infos__mission'><span>Mission :</span> <br /> {data.mission}</aside>

                    <div className='container__infos__button'>

                        {data.links.map((e, index) => {

                            return (

                                <div className='container__button' key={index}>
                                    <Button 
                                        lien={e.link}
                                        name={e.name}
                                    />
                                </div>
                          )
                        })}
                    </div>
                </div>


                <div className='container__img'>
                    <div className='container__infos__img'>

                    {data.images.map((image, index) => {
                        return (

                            <div className="infos__img" key={index}>
                                <img src={image} alt="" />
                            </div>
                        )
                    })}
                    </div>
                </div>

            </div>
        </main>
    );
};

export default Infos;