import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import './style.css';

const Momentos: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Momentos</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Momentos</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton className='personaje' routerLink='momentos/genos'>
                <div>
                  <IonImg src='src/img/momentos/genos vs saitama/1.png'></IonImg>
                  <h1>saitama</h1>
                  <h2>vs</h2>
                  <h1>genos</h1>
                </div>
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton className='personaje' routerLink='momentos/boros'>
                <div>
                  <IonImg src='src/img/momentos/saitama vs boros/1.png'></IonImg>
                  <h1>saitama</h1>
                  <h2>vs</h2>
                  <h1>boros</h1>
                </div>
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton className='personaje' routerLink='momentos/bakuzan'>
                <div>
                  <IonImg src='src/img/momentos/saitama vs bakuzan/1.png'></IonImg>
                  <h1>saitama</h1>
                  <h2>vs</h2>
                  <h1>bakuzan</h1>
                </div>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Momentos;
