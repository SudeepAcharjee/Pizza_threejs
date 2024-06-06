import React from 'react';

// Importing images
import section_1_bg from './img/section_1_bg.webp';
import section_1_01 from './img/section_1_01.webp';
import section_1_02 from './img/section_1_02.webp';
import section_1_03 from './img/section_1_03.webp';
import section_1_04 from './img/section_1_04.webp';
import section_1_05 from './img/section_1_05.webp';
import section_1_06 from './img/section_1_06.webp';
import section_1_07 from './img/section_1_07.webp';
import section_1_08 from './img/section_1_08.webp';
import section_1_09 from './img/section_1_09.webp';

import section_2_01 from './img/section_2_01.webp';
import section_2_02 from './img/section_2_02.webp';
import section_2_03 from './img/section_2_03.webp';
import section_2_04 from './img/section_2_04.webp';
import section_2_05 from './img/section_2_05.webp';
import section_2_06 from './img/section_2_06.webp';
import section_2_07 from './img/section_2_07.webp';
import section_2_08 from './img/section_2_08.webp';
import section_2_09 from './img/section_2_09.webp';
import section_2_10 from './img/section_2_10.webp';

import section_3_01 from './img/section_3_01.webp';
import section_3_02 from './img/section_3_02.webp';
import section_3_03 from './img/section_3_03.webp';
import section_3_04 from './img/section_3_04.webp';
import section_3_05 from './img/section_3_05.webp';
import section_3_06 from './img/section_3_06.webp';

import section_4_01 from './img/section_4_01.webp';
import section_4_02 from './img/section_4_02.webp';
import section_4_03 from './img/section_4_03.webp';
import section_4_04 from './img/section_4_04.webp';

const App = () => {
  return (
    <>
      <section className="first-section">
        <h1>
          Make Your Site Move with <br />
          Animation
        </h1>
        <div className="images-wrapper">
          <img className="section_1_bg" src={section_1_bg} />
          <div className="ingredient-images">
            <img className="section_1_01" src={section_1_01} />
            <img className="section_1_02" src={section_1_02} />
            <img className="section_1_03" src={section_1_03} />
            <img className="section_1_04" src={section_1_04} />
            <img className="section_1_05" src={section_1_05} />
            <img className="section_1_06" src={section_1_06} />
            <img className="section_1_07" src={section_1_07} />
            <img className="section_1_08" src={section_1_08} />
            <img className="section_1_09" src={section_1_09} />
          </div>
        </div>
      </section>
      <section className="second-section">
        <h1>Draw Attention Where You Want it Most</h1>
        <p>A great animation effect is impossible to ignore.</p>
        <div className="images-wrapper bottom">
          <div className="image-container">
            <img className="section_2_06" src={section_2_06} />
          </div>
          <div className="image-container">
            <img className="section_2_07" src={section_2_07} />
          </div>
          <div className="image-container">
            <img className="section_2_08" src={section_2_08} />
          </div>
          <div className="image-container">
            <img className="section_2_09" src={section_2_09} />
          </div>
          <div className="image-container">
            <img className="section_2_10" src={section_2_10} />
          </div>
        </div>
        <div className="images-wrapper top">
          <div className="image-container">
            <img className="section_2_01" src={section_2_01} />
          </div>
          <div className="image-container">
            <img className="section_2_02" src={section_2_02} />
          </div>
          <div className="image-container">
            <img className="section_2_03" src={section_2_03} />
          </div>
          <div className="image-container">
            <img className="section_2_04" src={section_2_04} />
          </div>
          <div className="image-container">
            <img className="section_2_05" src={section_2_05} />
          </div>
        </div>
      </section>
      <section className="third-section">
        <h1>Animate Anything You Want</h1>
        <p>Easily add animation to text, photos, buttons &amp; more.</p>
        <div className="images-wrapper">
          <img className="section_3_06" src={section_3_06} />
          <img className="section_3_05" src={section_3_05} />
          <img className="section_3_04" src={section_3_04} />
          <img className="section_3_03" src={section_3_03} />
          <img className="section_3_02" src={section_3_02} />
          <img className="section_3_01" src={section_3_01} />
        </div>
      </section>
      <section className="forth-section">
        <h1>14 Types of Animation</h1>
        <p>With so many different effects, the possibilities are endless.</p>
        <div className="images-wrapper">
          <img className="section_4_01" src={section_4_01} />
          <img className="section_4_02" src={section_4_02} />
          <img className="section_4_03" src={section_4_03} />
          <img className="section_4_04" src={section_4_04} />
        </div>

        <footer>Your Pizza is on its way!</footer>
      </section>
    </>
  );
};

export default App;
