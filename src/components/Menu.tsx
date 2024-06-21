import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { homeSharp, homeOutline, peopleSharp, peopleOutline, filmSharp, filmOutline, informationCircleSharp, informationCircleOutline, imageSharp, imageOutline, readerSharp, readerOutline } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Portada',
    url: '/portada',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'Personajes',
    url: '/personajes',
    iosIcon: peopleOutline,
    mdIcon: peopleSharp
  },
  {
    title: 'Momentos',
    url: '/momentos',
    iosIcon: filmOutline,
    mdIcon: filmSharp
  },
  {
    title: 'Acerda de',
    url: '/acerca',
    iosIcon: informationCircleOutline,
    mdIcon: informationCircleSharp
  },
  {
    title: 'Influencia en mi vida',
    url: '/vida',
    iosIcon: imageOutline,
    mdIcon: imageSharp
  },
  {
    title: 'Contrátame',
    url: '/contratame',
    iosIcon: readerOutline,
    mdIcon: readerSharp
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>One Punch Man</IonListHeader>
          <IonNote>Mini Wiki</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
