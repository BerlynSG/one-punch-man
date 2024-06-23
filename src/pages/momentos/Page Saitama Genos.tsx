import { IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y } from 'swiper/modules';
import "swiper/css";
import '../style.css';

const SvsGenos: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Saitama vs Genos</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Saitama vs Genos</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='titulo-info'>
          <h1>saitama vs genos</h1>
        </div>
        <div className='slider-info'>
          <Swiper
            modules={[A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            autoplay={{delay: 5000}}
          >
            <SwiperSlide>
              <IonImg src='./src/img/momentos/genos vs saitama/1.png'></IonImg>
            </SwiperSlide>
            <SwiperSlide>
              <IonImg src='./src/img/momentos/genos vs saitama/2.png'></IonImg>
            </SwiperSlide>
            <SwiperSlide>
              <IonImg src='./src/img/momentos/genos vs saitama/3.png'></IonImg>
            </SwiperSlide>
            <SwiperSlide>
              <IonImg src='./src/img/momentos/genos vs saitama/4.png'></IonImg>
            </SwiperSlide>
          </Swiper>
        </div>
        <div>
          <div>
            <div className='tema-info'>
              <h3>Preludio</h3>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <p>
                      Después de que Saitama y Genos aprobaran el examen del Registro Nacional de Héroes, fueron colocados en último lugar en sus clases, con Genos en el rango 17 de Clase-S y Saitama en el rango 388 de Clase-C. 
                      Más tarde, Genos agradece a Saitama por aceptar la solicitud de combate y le pide que lo tome en serio. 
                      La motivación tras esto, es descubrir el poder de Saitama.
                    </p>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </div>
          </div>
          <div>
            <div className='tema-info'>
              <h3>Batalla</h3>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <p>
                      Genos se lanza a Saitama pero falla. Luego sigue con un aluvión de golpes que Saitama esquiva. 
                      Genos intenta golpear a Saitama con su cañón de incineración pero falla. 
                      Genos trata de golpear a Saitama con otro aluvión de golpes, pero Saitama se ve afectado por la velocidad, ya que resulta que solo estuvo persiguiendo su imagen residual todo el tiempo. 
                      El Clase-S intenta golpear a Saitama con una versión más poderosa de su cañón de incineración, pero Saitama lo evade fácilmente; 
                      toca a Genos en el hombro, lo pone el dedo en la mejilla cuando gira la cabeza y dice que ha ganado. 
                      Genos toma represalias tratando de golpear a Saitama, quien lo evita saltando por encima y se posiciona detrás del cyborg.
                    </p>
                    <p>
                      Luego, Genos le recuerda a Saitama que las reglas de la pelea implican que se tome la pelea en serio y continúe luchando hasta que Genos ya no pueda seguir haciéndolo. 
                      Las piernas de Saitama se tensan ligeramente y de repente aparece frente a Genos. 
                      El cyborg intenta patearlo solo para que salte detrás suyo. 
                      Cuando Genos se gira para mirar a Saitama, el puñetazo del calvo se dirige hacia él. 
                      Genos experimenta una sensación de muerte inminente y no puede hacer nada al respecto. 
                      Saitama detiene su puño justo antes de que golpee a Genos y toda la fuerza del golpe parece viajar alrededor del cyborg. 
                      Saitama lo toca en la frente y dice que deberían comer un poco de udon.
                    </p>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </div>
          </div>
          <div>
            <div className='video-info-container'>
              <iframe src="https://www.youtube.com/embed/RxR68UwAG1s?si=HOH_yw1YDSlEkRVt" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SvsGenos;
