import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import './style.css';

const Portada: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="portada">
          <iframe className="video" src="https://www.youtube.com/embed/KmjvZLScldY?autoplay=1&mute=1&controls=0&loop=1&playsinline=1&playlist=KmjvZLScldY" title="YouTube video player"></iframe>
          <div className="oscuro"></div>
          <div className='cabezal'>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
          </div>
          <div className="info">
            <h1>one punch man</h1>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Portada;
