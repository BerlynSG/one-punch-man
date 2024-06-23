import { IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y } from 'swiper/modules';
import "swiper/css";
import '../style.css';

const Genos: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Genos</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Genos</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='titulo-info'>
          <h1>genos</h1>
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
              <IonImg src='./src/img/personajes/genos/1.png'></IonImg>
            </SwiperSlide>
            <SwiperSlide>
              <IonImg src='./src/img/personajes/genos/2.png'></IonImg>
            </SwiperSlide>
            <SwiperSlide>
              <IonImg src='./src/img/personajes/genos/3.png'></IonImg>
            </SwiperSlide>
            <SwiperSlide>
              <IonImg src='./src/img/personajes/genos/4.png'></IonImg>
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
                      Genos (ジェノス, Jenosu) es el deuteragonista de One Punch-Man. 
                      Es un cíborg de 19 años y discípulo de Saitama. 
                      Él siempre esta con el objetivo de ser el más fuerte y lucha por la justicia. 
                      Bajo la Asociación de Héroes, se le da el nombre de Cíborg Demoníaco (鬼サイボーグ, Oni Saibōgu) y actualmente se encuentra en la Clase-S, rango 14.
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
                      Genos tiene un cuerpo mecánico que es un modelo de un adolescente, un rostro pálido, cejas amarillas, ojos penetrantes de esclerótica negra e iris amarillo, y el pelo rubio en punta. 
                      Lleva pantalones negros y zapatos negros, y también tiende a llevar tops los cuales exponen sus extremidades superiores mecánicas. 
                      Genos ha demostrado tener muchos conjuntos distintos de los brazos, con diferentes habilidades y fortalezas. 
                      Ejemplos notables de sus varios "brazos" son los que él utilizó en el combate de entrenamiento contra Saitama y los brazos que uso para combatir el meteorito. 
                      El equipamiento que utilizó contra el meteorito tenía un efecto interesante en cambiar no sólo la apariencia de sus brazos, sino también la creación de un "encuadre" de metal alrededor de su rostro.
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
                      Genos es de un carácter extremadamente fuerte y serio. 
                      Constantemente se esfuerza por ser más poderoso pidiéndole a Saitama que lo entrene con frecuencia. 
                      Desde que se convirtió en discípulo de Saitama, Genos es muy reverente y protector hacia su "sensei", lo admira y respeta mucho y puede ser bastante complaciente con él; 
                      a pesar de que hay veces que expresa disgusto e incredulidad al régimen de entrenamiento mundano que Saitama utilizó para obtener su fuerza.
                    </p>
                    <p>
                      En la mayor�a de ocasiones, Genos act�a como una l�mina de c�mic a las payasadas despistadas de Saitama, usando una variedad de t�cnicas especiales, t�cticas de batalla y actualizaciones rob�ticas para luchar contra monstruos y villanos (recibiendo un da�o terrible en el proceso y en una ocasi�n apunto de morir), s�lo para ser superado por Saitama con un solo golpe. 
                      Debido a la incre�ble fuerza de Saitama, Genos se hace a la idea de que hay un secreto en el poder de Saitama.
                    </p>
                  </IonCol>
                  <IonCol>
                    <p>
                      A pesar de su disparidad en la fuerza, Genos gana un mayor reconocimiento que su mentor. 
                      Su perspicacia superior le concedió la condición de inmediato como un héroe Clase-S dentro de la Asociación de Héroes, frente a la designación de la Clase-C de Saitama. 
                      También posee aparentemente una cantidad alta de dinero, suficiente para reparar y mejorar su cuerpo cíborg cada vez que vuelve destruido de un combate y cubrir el alquiler de Saitama de forma regular.
                    </p>
                    <p>
                      Con el tiempo se suaviza y él reconoce que esto se debe a la influencia de Saitama. 
                      Finalmente, llega a respetar a Saitama no solo por su poder, sino también por su carácter. 
                      Esto se demostró cuando Genos comenta sobre lo similar que era en su pasado a Amai Mask, antes de conocer a Saitama, al no tener piedad en su corazón y aniquilar tantos monstruos como villanos a sangre fría. 
                      Genos lentamente se vuelve menos serio y se vuelve un poco curioso acerca de algunas cosas menores como el significado de la diversión.
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

export default Genos;
