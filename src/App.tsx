import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Portada from './pages/Page portada';
import Personajes from './pages/Page personajes';
import Momentos from './pages/Page momentos';
import Acerca from './pages/Page acerca de';
import Vida from './pages/Page mi vida';
import Contratame from './pages/Page contratame';
import Saitama from './pages/personajes/Page Saitama';
import Genos from './pages/personajes/Page Genos';
import Satoru from './pages/personajes/Page Satoru';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import SvsGenos from './pages/momentos/Page Saitama Genos';
import SvsBoros from './pages/momentos/Page Saitama Boros';
import SvsBakuzan from './pages/momentos/Page Saitama Bakuzan';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/portada" />
            </Route>
            <Route path="/portada" exact={true}>
              <Portada />
            </Route>
            <Route path="/personajes" exact={true}>
              <Personajes />
            </Route>
            <Route path="/personajes/saitama" exact={true}>
              <Saitama />
            </Route>
            <Route path="/personajes/genos" exact={true}>
              <Genos />
            </Route>
            <Route path="/personajes/satoru" exact={true}>
              <Satoru />
            </Route>
            <Route path="/momentos" exact={true}>
              <Momentos />
            </Route>
            <Route path="/momentos/genos" exact={true}>
              <SvsGenos />
            </Route>
            <Route path="/momentos/boros" exact={true}>
              <SvsBoros />
            </Route>
            <Route path="/momentos/bakuzan" exact={true}>
              <SvsBakuzan />
            </Route>
            <Route path="/acerca" exact={true}>
              <Acerca />
            </Route>
            <Route path="/vida" exact={true}>
              <Vida />
            </Route>
            <Route path="/contratame" exact={true}>
              <Contratame />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
