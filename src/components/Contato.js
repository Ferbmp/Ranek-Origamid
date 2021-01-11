import React from 'react';
import styles from './Contato.module.css';
import foto from '../img/contato.jpg';
import Head from './Head';
function Contato() {
  return (
    <div className={`${styles.contato} animeLeft `}>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <img src={foto} alt="Maquina de escrever" />
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.dados}>
          <li>fernando.barreto@hotmail.com</li>
          <li>9999-9999</li>
          <li>Rua lins de vasconcelos</li>
        </ul>
      </div>
    </div>
  );
}

export default Contato;
