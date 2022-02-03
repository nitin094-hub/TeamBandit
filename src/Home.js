import React from "react";
import "./fonts/B612-Regular.ttf";
import "./fonts/B612-Bold.ttf";
import capaLoki from "./img/capaLoki.png";
import capaEndgame from "./img/capaEndgame.jpg";
import capaJoker from "./img/capaJoker.jpg";
import "./img/bgLoki.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Home.scss";
import "../node_modules/react-modal-video/scss/modal-video.scss";
import ModalVideo from "react-modal-video";
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isWatchNow: false,
      isWatchTrailer: false,
      rating: 0,
      hover: 0,
    };
  }

  handleWatchNow = (value) => {
    this.setState({
      ...this.state,
      isWatchNow: value,
    });
  };

  handleWatchTrailer = (value) => {
    this.setState({
      ...this.state,
      isWatchTrailer: value,
    });
  };

  handleRating = (value) => {
    this.setState({
      ...this.state,
      rating: value,
    });
  };

  handleHover = (value) => {
    this.setState({
      ...this.state,
      hover: value,
    });
  };

  render() {
    return (
      <>
        
        <Carousel >
          <Carousel.Item >
          <main className="content bg-Loki">
        <header>
          <h2>ESTÁ DISPONÍVEL AGORA!</h2>
          <h1>LOKI</h1>
        </header>
        <section>
          <aside>
            <img src={capaLoki} alt="Capa do Trailer de Loki"></img>
          </aside>
          <article>
            <p>
              Em “Loki” da Marvel Studios, o vilão mercurial Loki (Tom Hiddleston)
              retoma seu papel como o Deus do Mal em uma nova série que ocorre após 
              os eventos de “Vingadores: Endgame”. 
            </p>
            <div className="movie-stats">
              <div className="movie-time">
                <FontAwesomeIcon className="clock" icon={faClock} />
                <span>51min</span>
              </div>
              <div className="movie-stars">
                {
                  [...Array(5)].map((star, index) => {
                      index+=1;
                      return (
                        <button 
                          type="button" 
                          key={index}
                          onClick={()=>{this.handleRating(index)}}
                          onMouseEnter={()=>{this.handleHover(index)}}
                          onMouseLeave={()=>{this.handleHover(this.state.rating)}}
                        >
                          {console.log(this.state)}
                           <FontAwesomeIcon className={ index <= (this.state.hover || this.state.rating) ? "star active": "star"} icon={faStar} />
                        </button>
                      )
                      
                  })
                }                
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
          </Carousel.Item>
          <Carousel.Item >
          <main className="content bg-EndGame">
        <header>
          <h2>ESTÁ DISPONÍVEL AGORA!</h2>
          <h1>ENDGAME</h1>
        </header>
        <section>
          <aside>
            <img src={capaEndgame} alt="Capa do Trailer de Loki"></img>
          </aside>
          <article>
            <p>
            After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.
            </p>
            <div className="movie-stats">
              <div className="movie-time">
                <FontAwesomeIcon className="clock" icon={faClock} />
                <span>51min</span>
              </div>
              <div className="movie-stars">
                {
                  [...Array(5)].map((star, index) => {
                      index+=1;
                      return (
                        <button 
                          type="button" 
                          key={index}
                          onClick={()=>{this.handleRating(index)}}
                          onMouseEnter={()=>{this.handleHover(index)}}
                          onMouseLeave={()=>{this.handleHover(this.state.rating)}}
                        >
                          {console.log(this.state)}
                           <FontAwesomeIcon className={ index <= (this.state.hover || this.state.rating) ? "star active": "star"} icon={faStar} />
                        </button>
                      )
                      
                  })
                }                
              </div>
              <span className="movie-years">2021</span>
            </div>
            <div className="container-buttons"> 
              <button className="btn-primary"  onClick={()=> this.handleWatchNow(true)}>ASSISTIR AGORA</button>
              <button className="btn-secondary" onClick={()=> this.handleWatchTrailer(true)}>TRAILER</button>
              <ModalVideo channel='youtube' autoplay isOpen={this.state.isWatchNow} videoId="6ZfuNTqbHE8" onClose={() => this.handleWatchNow(false)} />
              <ModalVideo channel='youtube' autoplay isOpen={this.state.isWatchTrailer} videoId="TcMBFSGVi1c" onClose={() => this.handleWatchTrailer(false)} />
            </div>
          </article>
        </section>
      </main>
          </Carousel.Item>


          
          <Carousel.Item >
          <main className="content bg-Joker">
        <header>
          <h2>ESTÁ DISPONÍVEL AGORA!</h2>
          <h1>JOKER</h1>
        </header>
        <section>
          <aside>
            <img src={capaJoker} alt="Capa do Trailer Joker"></img>
          </aside>
          <article>
            <p>
            Arthur Fleck, a party clown, leads an impoverished life with his ailing mother. However, when society shuns him and brands him as a freak, he decides to embrace the life of crime and chaos.
            </p>
            <div className="movie-stats">
              <div className="movie-time">
                <FontAwesomeIcon className="clock" icon={faClock} />
                <span>51min</span>
              </div>
              <div className="movie-stars">
                {
                  [...Array(5)].map((star, index) => {
                      index+=1;
                      return (
                        <button 
                          type="button" 
                          key={index}
                          onClick={()=>{this.handleRating(index)}}
                          onMouseEnter={()=>{this.handleHover(index)}}
                          onMouseLeave={()=>{this.handleHover(this.state.rating)}}
                        >
                          {console.log(this.state)}
                           <FontAwesomeIcon className={ index <= (this.state.hover || this.state.rating) ? "star active": "star"} icon={faStar} />
                        </button>
                      )
                      
                  })
                }                
              </div>
              <span className="movie-years">2021</span>
            </div>
            <div className="container-buttons"> 
              <button className="btn-primary"  onClick={()=> this.handleWatchNow(true)}>ASSISTIR AGORA</button>
              <button className="btn-secondary" onClick={()=> this.handleWatchTrailer(true)}>TRAILER</button>
              <ModalVideo channel='youtube' autoplay isOpen={this.state.isWatchNow} videoId="t433PEQGErc" onClose={() => this.handleWatchNow(false)} />
              <ModalVideo channel='youtube' autoplay isOpen={this.state.isWatchTrailer} videoId="zAGVQLHvwOY" onClose={() => this.handleWatchTrailer(false)} />
            </div>
          </article>
        </section>
      </main>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}
