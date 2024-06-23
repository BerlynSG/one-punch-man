import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import './style.css';

const Vida: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Influencia en mi vida</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Influencia en mi vida</IonTitle>
          </IonToolbar>
        </IonHeader>
        <video className='video-vida' controls>
          <source src="./src/img/video2.mp4" type="video/mp4" />
          Tu navegador no soporta el formato de video.
        </video>
      </IonContent>
    </IonPage>
  );
};

export default Vida;
