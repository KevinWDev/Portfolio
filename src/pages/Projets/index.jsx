// Composants
import Card from '../../components/Card'
// Styles
import '../../utils/styles/Projets.css'
// Assets
import imgKasa from '../../assets/images/Kasa_Home800.png'
import imgMVG from '../../assets/images/AccueilMVG.png'
import imgNina from '../../assets/images/imgNina.png'
import imgDesc from '../../assets/images/DesktopBooki.png'
import imgSB from '../../assets/images/SophieBluelHome.png'


function Projets() {



    return (
        <main>

            <div className="projetsDiv">
                <h1 className="projetsDiv__title">Mes projets</h1>
            </div>

            <section className='containerProjets'>

                <div className='containerProjets__div'>

                    <div className='containerProjets__div__grid'>
            
                        <Card image={imgDesc}/>
                        <Card image={imgSB}/>
                        <Card image={imgKasa}/>
                        <Card image={imgMVG}/>
                        <Card image={imgNina}/>
                         
                    </div>

                </div>

            </section>
            
            

        </main>
    )
}

export default Projets