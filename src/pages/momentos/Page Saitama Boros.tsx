import { IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y } from 'swiper/modules';
import "swiper/css";
import '../style.css';

const SvsBoros: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Saitama vs Boros</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Saitama vs Boros</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='titulo-info'>
          <h1>saitama vs boros</h1>
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
              <IonImg src='./src/img/momentos/saitama vs boros/1.png'></IonImg>
            </SwiperSlide>
            <SwiperSlide>
              <IonImg src='./src/img/momentos/saitama vs boros/2.png'></IonImg>
            </SwiperSlide>
            <SwiperSlide>
              <IonImg src='./src/img/momentos/saitama vs boros/3.png'></IonImg>
            </SwiperSlide>
            <SwiperSlide>
              <IonImg src='./src/img/momentos/saitama vs boros/4.png'></IonImg>
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
                      Boros siente que Saitama se acerca a él y efectivamente el héroe llega destruyendo las puertas de la sala del trono de un solo golpe. 
                      Ya cara a cara con Saitama, Boros se presenta y explica que su llegada a la Tierra se debía a una profecía que había escuchado de una vidente veinte años atrás, donde él conseguiría una batalla contra un oponente que pudiera rivalizar contra él y que por eso había venido, para poder enfrentarse con alguien de su calibre. 
                      Sin embargo, Saitama le da un puñetazo que lo manda a volar contra un pilar, mientras Saitama dice lo absurdo que es que destruya mundos solo para buscarle el sentido a su vida, pero en el proceso destruye su armadura que sellaba el inmenso poder del alien. 
                      Boros menciona esto y le dice a Saitama que se prepare para el combate, transformándose y liberando su poder, para después embestir contra Saitama a gran velocidad.
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
                      Boros comienza la lucha contra Saitama propinándole una serie intensa de golpes que comienzan a causar destrucción por el interior de la nave, en un momento dado Saitama logra arrancarle el brazo a Boros de un puñetazo pero este sigue atacándolo a pesar de la herida.
                    </p>
                    <p>
                      La pelea entre Boros y Saitama se va intensificando cada vez mas, con los ataques y golpes del primero tan fuertes que destruyen y vaporizan grandes partes de la sala. 
                      Ambos, en un intercambio veloz de golpes, atraviesan el techo y salen fuera de la nave, mientras Boros elogia la enorme durabilidad de Saitama, algo que ninguno de sus oponentes anteriores tenía, para acto seguido dispararle a Saitama un enorme rayo de energía que genera una gran explosión en toda la cubierta de la nave, y luego posicionarse rápidamente detrás del héroe y propinarle un golpe en el rostro provocando una gran onda de presión que disipa el humo y el fuego a su alrededor. 
                    </p>
                  </IonCol>
                  <IonCol>
                    <p>
                      Se detienen por un momento donde Boros comenta que Saitama es un oponente digno, pero que la victoria está asegurada para él, y comienza a hablar de su capacidad de regenerarse usando su energía, recuperando su brazo arrancado rápidamente. 
                      Boros sigue explicando sus cualidades de supervivencia pero es interrumpido por un Saitama cansado de escuchar palabras y le pregunta si era todo lo que tenía. 
                      Eso hace enojar a Boros que usa su Ráfaga Meteoro, incrementando sus habilidades de una manera descomunal para seguir atacando seguidamente al héroe, vaporizando enormes partes de su nave, hasta mandarlo de una patada a la luna.
                    </p>
                  </IonCol>
                  <IonCol>
                    <p>
                      Boros comienza a sentir el agotamiento de su última transformación a lo que Saitama llega de la luna con un impacto que balancea la nave hacia un costado. 
                      Sorprendido, emocionado y frustrado, Boros se abalanza contra este pero Saitama lo lanza lejos de un puñetazo, Boros elogia al héroe pero no termina porque este destroza su cuerpo por completo con los Golpes Normales Consecutivos, un ahora furioso Boros se regenera y decide utilizar su máximo poder para acabar con Saitama; 
                      desata el Cañón de Estrella que Colapsa, apunto de impactar con el héroe pero este usa su Serie Mortal Severa: Golpe Grave, desarmando el ataque de Boros, destruyendo la esfera de energía de su nave y derrotándolo definitivamente. 
                    </p>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </div>
          </div>
          <div>
            <div className='video-info-container'>
              <iframe src="https://www.youtube.com/embed/0ZT-jqQOgHI?si=nbobQuuertBO3LfQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SvsBoros;
