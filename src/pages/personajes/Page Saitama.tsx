import { IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y } from 'swiper/modules';
import "swiper/css";
import '../style.css';

const Saitama: React.FC = () => {

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
          <h1>saitama</h1>
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
              <IonImg src='src/img/personajes/saitama/1.png'></IonImg>
            </SwiperSlide>
            <SwiperSlide>
              <IonImg src='src/img/personajes/saitama/2.png'></IonImg>
            </SwiperSlide>
            <SwiperSlide>
              <IonImg src='src/img/personajes/saitama/3.png'></IonImg>
            </SwiperSlide>
            <SwiperSlide>
              <IonImg src='src/img/personajes/saitama/4.png'></IonImg>
            </SwiperSlide>
          </Swiper>
        </div>
        <div>
          <div>
            <div className='tema-info'>
              <h3>¿Quién es?</h3>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <p>
                      Saitama (サイタマ, Saitama) es el protagonista principal de One Punch-Man y el héroe más poderoso de todos. 
                      Debido a su condición sobrehumana, Saitama se enfrenta a una crisis existencial, ya que ahora es demasiado fuerte, siendo capaz de derrotar a sus oponentes de un solo golpe, por lo que sus batallas las encuentra aburridas y sin emoción.
                    </p>
                  </IonCol>
                  <IonCol>
                    <p>
                      Se registró en la Asociación de Héroes, donde se le da el nombre de Calvo con Capa (ハゲマント, Hagemanto). 
                      Habiendo comenzado en lo más bajo de la Clase-C, actualmente se encuentra en Clase-A, ocupando el rango 39. 
                      Tiene la tarea de defender Ciudad-Z contra los kaijin. 
                    </p>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </div>
          </div>
          <div>
            <div className='tema-info'>
              <h3>Apariencia</h3>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <p>
                      Es un hombre calvo, de aspecto ordinario, con un físico delgado pero bien construido, y es de estatura y peso promedio. 
                      Inicialmente, Saitama tenía el pelo negro y puntiagudo, pero afirma haber perdido todo su cabello de manera repentina y prematura como resultado de la carga que su cuerpo de héroe había cobrado en su cuerpo. 
                      Saitama también tiene ojos marrones que se representan como puntos.
                    </p>
                    <p>
                      Saitama usualmente se dibuja deliberadamente en un estilo más simple que todos los demás personajes, con una cabeza con forma elíptica y solo una boca y ojos básicos. 
                      Cuando se dibuja en un estilo más serio con más detalle, se revela que Saitama tiene rasgos afilados, ojos temibles y una musculatura cincelada. 
                      Incluso su postura sufre una metamorfosis, con una postura relajada y codos inclinados cuando está relajada, mientras que posee una postura estirada y hombros cuadrados cuando está grave. 
                      Su traje es un mono amarillo liso con una cremallera corta en el cuello, junto con un cinturón negro con una hebilla dorada redonda en el centro. 
                      Lleva guantes rojos que le suben 3/4 al antebrazo y botas rojas que le suben 3/4 de las espinillas. 
                      Su traje se remata con una capa blanca, que se sujeta a sus hombros con sujetadores circulares negros.
                    </p>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </div>
          </div>
          <div>
            <div className='tema-info'>
              <h3>Personalidad</h3>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <p>
                      Saitama es una persona indiferente. Incluso los enemigos más poderosos no le plantean ningún desafío, por lo que no toma en serio el trabajo de héroe y anhela un oponente que pueda proporcionarle un desafío. 
                      La falta de tales oponentes lo ha llevado a sufrir una crisis existencial autoimpuesta, y afirma que su capacidad para sentir todas y cada una de las emociones ha disminuido considerablemente. 
                      La combinación de su actitud, su fuerza inconmensurable y su apariencia "poco impresionante" a menudo hace que sus batallas se vuelvan anti-climáticas. 
                      Saitama generalmente permitirá que sus oponentes alardeen sobre sus motivos y entren en sus formas más fuertes, antes de eliminarlos con un golpe.
                    </p>
                  </IonCol>
                  <IonCol>
                    <p>
                      Sin embargo, Saitama tiene poca paciencia para las explicaciones largas y con frecuencia interrumpe al orador. 
                      Según sus estándares, el monólogo o explicación ideal debe de constar de 20 palabras o menos. 
                    </p>
                    <p>
                      Una característica peculiar sobre Saitama es su incapacidad para recordar los rostros y los nombres de las personas, como se vio cuando olvidó el nombre de Sonic Velocidad del Sonido, o cuando no pudo recordar quién era Tanktop Tiger. 
                      Debido a esto, a veces termina pronunciando incorrectamente los nombres de las personas. 
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

export default Saitama;
