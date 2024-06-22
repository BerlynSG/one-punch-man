import { IonButtons, IonContent, IonHeader, IonImg, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import './style.css';
import { A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Portada: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className='oscuro'></div>
        <div className='portada'>
          <video className='video' loop autoPlay muted>
            <source src="src/img/video1.mp4" type="video/mp4" />
            Tu navegador no soporta el formato de video.
          </video>
          <div className='cabezal'>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
          </div>
          <div className="info">
            <h1>one punch man</h1>
          </div>
          <div className='titulo-slider'>
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
                <IonImg src='src/img/momentos/genos vs saitama/1.png'></IonImg>
              </SwiperSlide>
              <SwiperSlide>
                <IonImg src='src/img/momentos/saitama vs bakuzan/1.png'></IonImg>
              </SwiperSlide>
              <SwiperSlide>
                <IonImg src='src/img/personajes/genos/1.png'></IonImg>
              </SwiperSlide>
              <SwiperSlide>
                <IonImg src='src/img/momentos/saitama vs boros/1.png'></IonImg>
              </SwiperSlide>
              <SwiperSlide>
                <IonImg src='src/img/personajes/satoru/1.png'></IonImg>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Portada;
