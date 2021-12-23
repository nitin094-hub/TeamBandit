import "./fonts/B612-Regular.ttf";
import "./fonts/B612-Bold.ttf";
import capaLoki from "./img/capaLoki.png";
import bgLoki from "./img/bgLoki.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import './Home.scss';


function Home() {
  return (
    <main className="content">
      <header>
        <h2>ESTÁ DISPONÍVEL AGORA!</h2>
        <h1>LOKI</h1>
      </header>
      <section>
        <aside>
          <img src={capaLoki}></img>
        </aside>
        <article>
          <p>
            Em “Loki” da Marvel Studios, o vilão mercurial Loki (Tom Hiddleston) 
            retoma seu papel como o Deus do Mal em uma nova série 
            que ocorre após os eventos de “Vingadores: Endgame”. 
          </p>
          <div className="movie-stats">
            <div className="movie-time">
              <FontAwesomeIcon className="clock" icon={faClock} />
              <span>51min</span>
            </div>
            <div className="movie-stars">
              <FontAwesomeIcon className="star active" icon={faStar} />
              <FontAwesomeIcon className="star active" icon={faStar} />
              <FontAwesomeIcon className="star active" icon={faStar} />
              <FontAwesomeIcon className="star active" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
            </div>
            <span className="movie-years">2021</span>
          </div>
          <div className="container-buttons"> 
            <button className="btn-primary">ASSISTIR AGORA</button>
            <button className="btn-secondary">TRAILER</button>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Home;
