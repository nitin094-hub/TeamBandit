import "./fonts/B612-Regular.ttf";
import "./fonts/B612-Bold.ttf";
import "./fonts/B612-Italic.ttf";
import "./fonts/B612-BoldItalic.ttf";
import capaLoki from "./img/capaLoki.png";
import bgLoki from "./img/bgLoki.jpg";
import './Home.scss';


function Home() {
  return (
    <main className="content">
      <img src={bgLoki}></img>
      <section>
        <h2>ESTÁ DISPONÍVEL AGORA!</h2>
        <h3>LOKI</h3>
      </section>
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
          <div>
            <span>51min</span>
            {/* STARS */}
            <span>2021</span>
          </div>
          <div>
            <button>ASSISTIR AGORA</button>
            <button>TRAILER</button>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Home;
