import { IonGrid, IonCol, IonRow, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton, IonImg } from '@ionic/react';
import './style.css';

const Personajes: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Personajes</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Personajes</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton className='personaje' routerLink='personajes/saitama'>
                <div>
                  <IonImg src='./src/img/personajes/saitama/1.png'></IonImg>
                  <h1>Saitama</h1>
                  <small>Calvo con Capa</small>
                  <p>El héroe más fuerte</p>
                </div>
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton className='personaje' routerLink='personajes/genos'>
                <div>
                  <IonImg src='./src/img/personajes/genos/1.png'></IonImg>
                  <h1>Genos</h1>
                  <small>Cyborg Demoniaco</small>
                  <p>Siempre superándose</p>
                </div>
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton className='personaje' routerLink='personajes/satoru'>
                <div>
                  <IonImg src='./src/img/personajes/satoru/1.png'></IonImg>
                  <h1>Satoru</h1>
                  <small>Ciclista sin licencia</small>
                  <p>Valiente aún siendo débil</p>
                </div>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Personajes;
