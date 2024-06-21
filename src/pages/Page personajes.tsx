import { IonGrid, IonCol, IonRow, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton, IonImg } from '@ionic/react';
import { useParams } from 'react-router';
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
              <IonButton className='personaje'>
                <div>
                  <IonImg src='https://th.bing.com/th/id/R.3a035526aa51dbe02a443a4b044a2da9?rik=WEP%2bF%2btw1zmnDA&riu=http%3a%2f%2forig07.deviantart.net%2f2032%2ff%2f2016%2f014%2f4%2fe%2fsaitama_2_one_punch_man_by_truss31-d9nz7ey.png&ehk=g3DaW2DfiCdHPMnt9w6I9Hpm4A%2fGDYeEmR50qY%2byP1g%3d&risl=&pid=ImgRaw&r=0'></IonImg>
                  <h1>Saitama</h1>
                  <small>Calvo con Capa</small>
                  <p>El héroe más fuerte</p>
                </div>
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton className='personaje'>
                <div>
                  <IonImg src='https://th.bing.com/th/id/R.7bfa722a2990edc34ed3428814986c7c?rik=Rr04FJZBqy5DRg&pid=ImgRaw&r=0'></IonImg>
                  <h1>Genos</h1>
                  <small>Cyborg Demoniaco</small>
                  <p>Siempre superándose</p>
                </div>
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton className='personaje'>
                <div>
                  <IonImg src='https://th.bing.com/th/id/R.626e56f4b973d45e1e86f3c4c7ae3eb6?rik=aqbzr60nNWku%2bQ&riu=http%3a%2f%2fonepunchman-anime.net%2fcharacter%2fimg%2fdetail_mumen.png&ehk=f50NgYTt5QGWghr%2bTUlzGzHQEMCgi9Rlr3Zgpdd7SxU%3d&risl=&pid=ImgRaw&r=0'></IonImg>
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
