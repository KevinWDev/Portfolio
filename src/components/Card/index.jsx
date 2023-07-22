// Composants
import Button from '../Button';
// Styles
import '../../utils/styles/Card.css';

function Card({ cover, title, date, mission, problematique, links }) {
  return (

    <div className="card">

      <div className="container__card__img">
        <img className="card__img" src={cover} alt="" />
      </div>

      <div className="container__card__infos">
        <div>
          <h2 className="card__title">{title}</h2>
          <p className="card__date">
            <span>Data : </span>
            {date}
          </p>

          <aside className="card__mission">
            <span>Mission :</span> <br />
            {mission}
          </aside>

          {problematique.map((e, index) => {
            return (
              <div>
                <aside className="card__probleme">
                  <span>Problèmes :</span>
                  <br />
                  {e.probleme}
                </aside>

                <aside className="card__solution">
                  <span>Solutions :</span>
                  <br />
                  {e.solution}
                </aside>
              </div>
            );
          })}
        </div>

        <div className="container__infos__button">
          {links.map((e, index) => {
            return (
              <div className="container__button">
                <Button lien={e.link} name={e.name} />
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

export default Card;
