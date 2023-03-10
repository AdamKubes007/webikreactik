import { useState } from 'react';
import Lev from "../../assets/images/logos/Lev.jpg";

function Main() {
  return (
    <main>
      <div className="text-part">
        <article className="cite">
          <h2>"Keď si smutný, tak nebuď"</h2>
          <p>Simona 2022</p>
        </article>
        <article className="about">
          <h2>O mně</h2>
          <p>
            Jmenuji se Herold. <br /> Mám stabilní práci jako vodič autobusu,
            <br /> ale ve volném čase dělám weby.<br /> Mám tři děti a rád vařím.
          </p>
        </article>
      </div>
      <div className="profile-image-part">
        <img src={Lev} alt="Lev" width="500" height="333" />
      </div>
    </main>
  );
}

export default Main;