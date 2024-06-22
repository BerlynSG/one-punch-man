import { IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y } from 'swiper/modules';
import "swiper/css";
import '../style.css';

const SvsBakuzan: React.FC = () => {

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
          <h1>saitama vs bakuzan</h1>
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
              <IonImg src='src/img/momentos/saitama vs bakuzan/1.png'></IonImg>
            </SwiperSlide>
            <SwiperSlide>
              <IonImg src='src/img/momentos/saitama vs bakuzan/2.png'></IonImg>
            </SwiperSlide>
            <SwiperSlide>
              <IonImg src='src/img/momentos/saitama vs bakuzan/3.png'></IonImg>
            </SwiperSlide>
            <SwiperSlide>
              <IonImg src='src/img/momentos/saitama vs bakuzan/4.png'></IonImg>
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
                      Luego de que Gouketsu se vaya, un gravemente herido Suiryu queda a merced de Bakuzan, quien intenta asesinarlo de un pisotón. 
                      Para fortuna de Suiryu, Saitama llega y lo salva de una muerte segura. 
                      Bakuzan le pregunta quién es, a lo que Saitama responde que es simplemente un héroe. 
                      Tras reconocer el esfuerzo de Suiryu por resistir todo este tiempo, Saitama se dirige hacia el kaijin y comienzan a luchar.
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
                      Bakuzan se ríe de Saitama y dice que no podrá ser derrotado. 
                      Sin embargo, lo reconoce como el oponente que lo derrotó en el torneo, por lo que entra en pánico. 
                      Enfurecido, el monstruo declara que Saitama caerá ante sus técnicas secretas, atacándolo con su Patada Baja del Grito del Diablo. 
                      Saitama es golpeado y enviado hacia donde están los derrotados Sourface, Ring-Ring y Zakos. 
                      Bakuzan se coloca junto a él y confiesa su asombro al ver que sigue de pie. 
                      A continuación, vuelve a arremeter contra Saitama, esta vez con la Patada Media del Oso Asesino. 
                      Saitama recibe el ataque sin daño alguno, haciendo Suiryu piense que está tratando de proteger a los demás, gritándole que primero debe cubrirse a sí mismo, entonces Bakuzan lo embiste nuevamente con el Golpe Derecho del Demonio, aunque sigue siendo incapaz de lastimarlo. 
                      Bakuzan comenta que este es el momento oportuno de disculparse por lo ocurrido en la Súper Lucha, pero el héroe sigue sin reconocerlo. 
                      Harto de su insolencia, el kaijin se dispone a acabarlo utilizando el Corte Despachador del Infierno, solo para que Saitama destruya la mitad de su cuerpo de un golpe y lo mate.
                    </p>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </div>
          </div>
          <div>
            <div className='video-info-container'>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/3rdbFJZiMLA?si=gMbOs6hBdYEDpArJ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SvsBakuzan;
