// Data
import datas from '../../datas/datas.json'
// Composants
import Card from '../../components/Card'
// Styles
import '../../utils/styles/Projets.css'

function Projets() {



    return (
        <main>

            <div className="projetsDiv">
                <h2 className="projetsDiv__title">Mes projets</h2>
            </div>

            <section className='containerProjets'>

                <div className='containerProjets__div'>

                    <div className='containerProjets__div__grid'>
                        {datas.map((data, index) => 
                             (
                                <Card 
                                id={data.id}
                                key={index} 
                                image={data.cover}
                                title={data.title}
                                /> 
                            )
                    )}
                                
                    </div>

                </div>

            </section>
            
            

        </main>
    )
}

export default Projets