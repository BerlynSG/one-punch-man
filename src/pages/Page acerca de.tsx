import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import './style.css';

const Acerca: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='titulo-info'>
          <h1>one punch man</h1>
        </div>
        <div>
          <div>
            <div className='tema-info'>
              <h3>¿Qué es?</h3>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <p>
                      One Punch-Man (ワンパンマン lit. Hombre-Un Golpe?) es un webcómic de acción y comedia japonés, creado por el artista One e iniciado en 2009. 
                      El webcómic rápidamente ganó popularidad, llegando a alcanzar las 8 millones de visitas. 
                      La pronunciación de su nombre en japonés, "Wanpanman", es un juego de palabras basado en el personaje infantil Anpanman, siendo wanpan una contracción de wanpanchi («un golpe»). 
                      La historia se centra en Saitama, un superhéroe calvo y extremadamente fuerte que se muestra abrumado por la ausencia de un verdadero desafío, y que continuamente busca a un oponente digno de su poder.
                    </p>
                  </IonCol>
                  <IonCol>
                    <p>
                      Una versión digital, ilustrada por Yūsuke Murata, comenzó a publicarse en el sitio web de la revista Young Jump en 2012. 
                      Shūeisha también pública el manga en físico. Actualmente es publicado en la revista Weekly Shonen Jump Alpha.
                    </p>
                    <p>
                      Una adaptación a serie de anime producida por el estudio Madhouse, fue emitida en Japón entre octubre y diciembre de 2015. 
                      El 25 de septiembre de 2017 se anunció que se cambiaría de director y de estudio de animación a J.C.Staff, empezó a emitirse el 9 de abril de 2019 y finalizó el 2 de julio de 2019. 
                      La serie se encuentra disponible a través de las plataformas Crunchyroll y Netflix.
                    </p>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </div>
          </div>
          <div>
            <div className='tema-info'>
              <h3>Argumento</h3>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <p>
                      La historia tiene lugar en una metrópolis ficticia conocida como Ciudad Z, en esa Tierra. 
                      El mundo se ve invadido por extraños monstruos que aparecen misteriosamente y que causan numerosos desastres a la población. 
                      Saitama es un poderoso superhéroe calvo que derrota fácilmente a los monstruos u otros villanos con un único golpe de su puño. Debido a esto, Saitama ha encontrado aburrida su fuerza y siempre está tratando de encontrar rivales más poderosos que le puedan igualar. 
                    </p>
                    <p>
                      En sus aventuras se encuentra con nuevos amigos, enemigos y su propio discípulo, el poderoso cíborg Genos, y se une a la Asociación de Héroes para ganar fama por todas sus acciones y para prevenir el mal. 
                      A pesar de derrotar a muchos más enemigos poderosos que los principales héroes, incluso los de la Asociación de Héroes, Saitama es incapaz de conseguir el reconocimiento de sus acciones en general. 
                      La mayoría de la gente lo discrimina por su apariencia física normal y algunos lo acusan de ser un héroe falso; así mismo los guerreros más fuertes lo discriminan basados en la falta de reconocimientos por la asociación de héroes sin tener idea que es más fuerte que todos. 
                      Solo un pequeño número de individuos conocen su increíble talento y humildad hacia los demás.
                    </p>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </div>
          </div>
          <div>
            <div className='tema-info'>
              <h3>¿Quién es su autor?</h3>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <p>
                      Esta obra está escrita por ONE.
                      ONE (Prefectura de Niigata, Japón, 29 de octubre de 1986) es el seudónimo utilizado por el dibujante japonés, principalmente conocido por ser el creador de los webcómics One-Punch Man y Mob Psycho 100. 
                      Su obra, One-Punch Man, más tarde sería adaptada al manga por Yūsuke Murata. 
                      One serializa One-Punch Man en su propio sitio web, mientras que el manga es serializado en la versión en línea de la revista Weekly Young Jump. 
                      A su vez, Mob Psycho 100 es serializada en la página en línea de la Shūkan Shōnen Sunday, llamada Ura Sunday.
                    </p>
                  </IonCol>
                  <IonCol>
                    <p>
                      En diciembre de 2015, se estimó que su página web recibe más de 100.000 visitas al día, habiéndose registrado más de 70 millones de visitas totales.
                    </p>
                    <p>
                      One nació en la Prefectura de Niigata, pero creció en la ciudad de Kōnosu, Saitama.
                    </p>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Acerca;
