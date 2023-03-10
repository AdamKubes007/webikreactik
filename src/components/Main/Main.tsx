import { useState } from 'react';
import Lev from "../../assets/images/logos/Lev.jpg";
import { ArticleAbout, Articlecite, MainStyle, ProfileImagePart, ProfileImagePartImg } from './Main.styled';

function Main() {
  return (
    <MainStyle>
      <div>
        <Articlecite>
          <h2>"Keď si smutný, tak nebuď"</h2>
          <p>Simona 2022</p>
        </Articlecite>
        <ArticleAbout>
          <h2>O mně</h2>
          <p>
            Jmenuji se Herold. <br /> Mám stabilní práci jako vodič autobusu,
            <br /> ale ve volném čase dělám weby.<br /> Mám tři děti a rád vařím.
          </p>
        </ArticleAbout>
      </div>
      <ProfileImagePart>
        <ProfileImagePartImg src={Lev} alt="Lev" width="500" height="333" />
      </ProfileImagePart>
    </MainStyle>
  );
}

export default Main;