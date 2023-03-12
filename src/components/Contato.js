import React from 'react';
import './contato.css';
import img from './img/cinema.png';
const Contato = () => {
  return (
    <div className="container">
      <div className="container-contato">
        <div className="conteudo-contato">
          <img src={img} alt="" />
        </div>
        <div className="title-contato">
          <h1>Entre em contato.</h1>
          <ul>
            <li>
              <a
                target="_blank"
                rel="noopener"
                href="mailto: lucas_hcosta@live.com"
              >
                Email
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener"
                href="https://www.linkedin.com/in/lucas-torresin-0052b9207/"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener"
                href="https://www.instagram.com/lucas_torresin/"
              >
                Instagram
              </a>
            </li>
          </ul>
          <p>Aberto para Projetos!</p>
        </div>
      </div>
    </div>
  );
};

export default Contato;
