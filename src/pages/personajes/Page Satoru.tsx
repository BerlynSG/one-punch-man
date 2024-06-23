import { IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y } from 'swiper/modules';
import "swiper/css";
import '../style.css';

const Satoru: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Satoru</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Satoru</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='titulo-info'>
          <h1>satoru</h1>
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
              <IonImg src='./src/img/personajes/satoru/1.png'></IonImg>
            </SwiperSlide>
            <SwiperSlide>
              <IonImg src='./src/img/personajes/satoru/2.png'></IonImg>
            </SwiperSlide>
            <SwiperSlide>
              <IonImg src='./src/img/personajes/satoru/3.png'></IonImg>
            </SwiperSlide>
            <SwiperSlide>
              <IonImg src='./src/img/personajes/satoru/4.png'></IonImg>
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
                    Satoru (サトル, Satoru), también conocido como Ciclista sin Licencia (無免ライダー, Mumen Raidā), es el héroe profesional de Clase-C, rango 1 de la Asociación de Héroes a cargo de cuidar Ciudad-Z. 
                    Ciclista es también una de las pocas personas que sabe de la verdadera fuerza de Saitama.
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
                      Satoru es un joven de estatura y peso promedio. 
                      Lleva un traje blindado, con una armadura marrón que cubre su torso y hombros. 
                      Tiene un traje de cuero negro debajo de la armadura y guanteletes y rodilleras negras. 
                      También tiene un casco de bicicleta verde y gafas oscuras. 
                      Debajo de su casco y sus sombras, tiene el pelo corto y castaño y lentes de forma ovalada que oscurecen sus ojos.
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
                      Satoru es un héroe valiente que se niega a pasar por alto cualquier crimen o retroceder en cualquier pelea, sin importar la fuerza del oponente. 
                      Está increíblemente decidido y nunca retrocede, incluso a costa de su propia vida. 
                      Está perfectamente dispuesto a dar su propia vida si eso significa proteger a personas inocentes del mal, incluso cuando está claro que no tiene ninguna posibilidad de éxito.
                    </p>
                    <p>
                      Parece consciente de que es débil en comparación con otros héroes, y no siente que sea digno de ascender en clase debido a eso, pero aún está más que dispuesto a enfrentarse a los oponentes de la Asociación de Héroes, aun si estos tienen la fuerza para superar a héroes de Clase A y S. 
                      Esto muestra su concepto desinteresado de auto-sacrificio, y cómo está dispuesto a hacer un esfuerzo adicional, como se ve cuando otros héroes de la Clase-C fueron vistos huyendo del Rey del Mar Profundo.
                    </p>
                    <p>
                      Él es muy apasionado por la justicia. 
                      Se le muestra que respeta mucho a las personas que lo salvan, como se ve cuando le envía a Saitama una carta que inicialmente trata de redactar, pero rápidamente tacha y termina con un rápido "¡Gracias!", Luego le pregunta al propietario en el bar oden donde estaba comiendo para darle a Saitama su mejor servicio. 
                      De manera similar a Saitama, los hechos heroicos de Satoru son muy puros, especialmente teniendo cierta simpatía hacia los villanos que parecen tener un corazón humano en ellos y parecen estar equivocados hacia un camino equivocado, como el antiguo discípulo de Bang, Garou.
                    </p>
                  </IonCol>
                  <IonCol>
                    <p>
                      A pesar de que ha sido insultado por los miembros del Ejército Tank Tropper y varios otros héroes de rango superior, a Satoru no le importa. 
                      También es lo suficientemente perceptivo para ver cuáles son las verdaderas habilidades de Saitama en realidad durante su primer encuentro.
                    </p>
                    <p>
                      En muchos sentidos, Satoru es un paralelismo de Saitama, Satoru no tiene la fuerza requerida para ser un héroe y, sin embargo, tiene el inmenso impulso y la fuerza de voluntad para serlo, mientras que Saitama tiene toda la fuerza que podría necesitar un héroe, pero nada del entusiasmo que tiene Satoru.
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

export default Satoru;
