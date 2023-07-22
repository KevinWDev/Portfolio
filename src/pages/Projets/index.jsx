// Data
import data from '../../data/data.json';
// Composants
import Card from '../../components/Card';
// Styles
import '../../utils/styles/Projets.css';

function Projets() {
  return (
    
    <main>
      <div className="projetsDiv">
        <h2 className="projetsDiv__title">Mes projets</h2>
      </div>

      <section className="containerProjets">
        <div className="containerProjets__div">

            {data.map((data, index) => (
              <Card
                id={data.id}
                key={index}
                cover={data.cover}
                title={data.title}
                date={data.date}
                mission={data.mission}
                problematique={data.problematique}
                links={data.links}
                
              />
            ))}
          </div>

      </section>
    </main>
  );
}

export default Projets;
