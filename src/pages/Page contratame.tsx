import { IonButtons, IonContent, IonHeader, IonImg, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import './style.css';

const Contratame: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Contrátame</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Contrátame</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='yo'>
          <div className='yo-imagen'>
            <img src='src/img/yo.png'></img>
          </div>
          <h1>Berlyn Sánchez González</h1>
          <small>Software Developer</small>
          <p>Habilidades: vs, vs code, C#, git, html, css, godot, gdscript, etc.</p>
          <a href='https://berlynsg.github.io/portafolio/'>más información en mi página web</a>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Contratame;
