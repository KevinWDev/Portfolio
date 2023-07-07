// Composants
import Collapse from '../../components/Collapse';
// Datas
import DataSkills from '../../data/skills.json';
// Styles
import '../../utils/styles/Home.css';
// Assets
import imgProfil from '../../assets/kevin.jpg';
import logoJs from '../../assets/logo/logoJs.png';
import logoCss from '../../assets/logo/logoCss.png';
import logoHtml from '../../assets/logo/logoHtml.png';
import logoReact from '../../assets/logo/logoReact.png';


function Home() {

  return (

    <main>
      <section className="intro">

        <div className="intro__div">

          <h2 className="intro__title">
            <div className='intro__container__span'>
              <span className='intro__word'>Bonjour,</span>
              <span className='hand'>👋🏻</span>
            </div>
            je suis <span className='myName'>Kevin Watteau</span>,
            <br />
            développeur front-end.
          </h2>

          <div className="intro__div__img">
            <img className="intro__img" src={imgProfil} alt="" />
          </div>

        </div>

      </section>

      <section className="propos">

        <h2 className="propos__title">À Propos</h2>

        <div className="propos__div">
          <div className="propos__div__paragraphe">
            <p>
              J’ai décidé de me former dans le métier de développeur web côté
              front-end en suivant une formation de <b>développeur intégrateur/web enregistrée au Répertoire National des Certifications Professionnelles avec OpenClassrooms</b> qui m’a
              permis de gagner en compétences à travers différents projets que
              j’ai réalisés durant cette formation.
            </p>
            <br />
            <p>
              Dans ce portfolio vous trouverez les différents projets que j’ai
              réalisés. <b>Passionné et motivé</b> aujourd’hui je souhaite
              travailler en tant que développeur front-end
              <b>
                afin de développer mes compétences tout en produisant des
                applications de qualité.
              </b>
            </p>
          </div>
        </div>

      </section>

      <section className="skills">

        <h2 className="skills__title">Mes compétences</h2>

        <div className="skills__container__aside">
            
            {DataSkills.map((data, index) => {
              return (
                <aside className='skills__collapse' key={index}>
                  <Collapse name={data.name}>
                    {
                      data.description.map((infos, index) => {
                        return (
                          <li key={index}>{infos}</li>
                        )
                      })
                    }
                  </Collapse>
                </aside>            
              )
            })}
        </div>

        <div className="skills__container__logo">
          <img src={logoJs} alt="" />
          <img src={logoCss} alt="" />
          <img src={logoHtml} alt="" />
          <img src={logoReact} alt="" />
        </div>
         
      </section>
    </main>
  );
};

export default Home;
