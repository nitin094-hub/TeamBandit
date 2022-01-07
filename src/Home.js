import React from "react"
import "./fonts/B612-Regular.ttf";
import "./fonts/B612-Bold.ttf";
import capaLoki from "./img/capaLoki.png";
import "./img/bgLoki.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import './Home.scss';
import '../node_modules/react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video'

export default class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isWatchNow: false,
      isWatchTrailer: false
    }
  }

  handleWatchNow = (value) => {
    this.setState({isWatchNow: value})
  }

  handleWatchTrailer = (value) => {
    this.setState({isWatchTrailer: value})
  }

  render() {
    return (
      <main className="content">
        <header>
          <h2>ESTÁ DISPONÍVEL AGORA!</h2>
          <h1>LOKI</h1>
        </header>
        <section>
          <aside>
            <img src={capaLoki} alt="Capa do Trailer da série Loki"></img>
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
              <button className="btn-primary"  onClick={()=> this.handleWatchNow(true)}>ASSISTIR AGORA</button>
              <button className="btn-secondary" onClick={()=> this.handleWatchTrailer(true)}>TRAILER</button>
              <ModalVideo channel='youtube' autoplay isOpen={this.state.isWatchNow} videoId="xdBWrkcmMwU" onClose={() => this.handleWatchNow(false)} />
              <ModalVideo channel='youtube' autoplay isOpen={this.state.isWatchTrailer} videoId="uVQu7byChTk" onClose={() => this.handleWatchTrailer(false)} />
            </div>
          </article>
        </section>
      </main>
    )
  }
}

