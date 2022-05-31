import { Redirect, Route, Switch } from 'react-router-dom';
import { IonApp, IonContent, IonHeader, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import CamoPage from "./pages/CamoPage";
import Header from "./components/Header";

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

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>

    <IonHeader >
      <Header />
    </IonHeader>

    <IonContent >
      <IonReactRouter>
        <IonRouterOutlet>
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/camopage/:section">
              <CamoPage />
            </Route>
          </Switch>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonContent>
    
  </IonApp>
);

export default App;
