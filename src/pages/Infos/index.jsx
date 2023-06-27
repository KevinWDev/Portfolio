import datas from '../../datas/datas.json'
import { useParams } from 'react-router-dom';
import '../../utils/styles/Infos.css'
// import { Link } from 'react-router-dom';
import Button from '../../components/Button';


function Infos() {

    const { id } = useParams();
   
    let data = datas.find((d) => d.id === id)
    console.log(data);

    return (
        <main>
            <div className='infos'>
                <h2>{data.title}</h2>
                <p>{data.date}</p>
                <aside>{data.mission}</aside>
                <div className='infos__img'>
                    {data.images.map((image, index) => {
                        return (
                            <div key={index}>
                                <img src={image} alt="" />
                            </div>
                        )
                    })}
                </div>
                <Button 
                    lien="https://google.com"
                    name="google"
                />
            </div>
        </main>
    );
};

export default Infos