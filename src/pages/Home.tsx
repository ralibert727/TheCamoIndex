import { IonPage, IonItem, IonButton, IonLabel, IonThumbnail } from '@ionic/react';
import React, {useState } from 'react';
import { Geolocation } from '@awesome-cordova-plugins/geolocation';
import './Home.css';

const Home: React.FC = () => {

  const [lat, setLat] = useState<any>(null);
  const [long, setLong] = useState<any>(null);

  const printCoordinates = async () => {
    const coordinates = await Geolocation.getCurrentPosition();
    setLat(coordinates.coords.latitude);
    setLong(coordinates.coords.longitude);
    console.log(coordinates);

  }

  return (
    <IonPage>
      <p className="descText">Choose a biome/environment, and get a random camo pattern!</p>

      <IonItem class="checkbox1">
        <IonThumbnail>
          <img src="assets/CamoProjectPictures/ForestBack.jpg" alt="forest" />
        </IonThumbnail>
        <IonLabel> &nbsp; Woodland/Forest: Camo that works well in forests/woods.</IonLabel>
        <IonButton routerLink={"/camopage/woodCamo"} slot="end" color="primary">Go</IonButton>
      </IonItem>

      &nbsp;

      <IonItem class="checkbox2">
        <IonThumbnail>
          <img src="assets/CamoProjectPictures/DesertBack.jpg" alt="desert" />
        </IonThumbnail>
        <IonLabel>  &nbsp; Desert: Camo that works well in Desert/Arid environments.</IonLabel>
        <IonButton routerLink={"/camopage/desertCamo"} slot="end" color="primary">Go</IonButton>
      </IonItem>

      &nbsp;

      <IonItem class="checkbox3">
        <IonThumbnail>
          <img src="assets/CamoProjectPictures/SnowBack.jpg" alt="snow" />
        </IonThumbnail>
        <IonLabel>  &nbsp; Winter/Snow: Camo that helps you blend in with arctic/tundra envirnoments</IonLabel>
        <IonButton routerLink={"/camopage/snowCamo"} slot="end" color="primary">Go</IonButton>
      </IonItem>

      &nbsp;

      <IonItem class="checkbox4">
        <IonThumbnail>
          <img src="assets/CamoProjectPictures/JungleBack.jpg" alt="jungle" />
        </IonThumbnail>
        <IonLabel>  &nbsp; Jungle: Camo that helps you blend in jungle/tropical environments.</IonLabel>
        <IonButton routerLink={"/camopage/jungleCamo"} slot="end" color="primary">Go</IonButton>
      </IonItem>

      &nbsp;

      <IonItem class="checkbox5">
        <IonThumbnail>
          <img src="assets/CamoProjectPictures/MultiCamBack.jpg" alt="multi" />
        </IonThumbnail>
        <IonLabel>  &nbsp; Multi-environment: Camo that works well in multiple environmets.</IonLabel>
        <IonButton routerLink={"/camopage/multiCamo"} color="primary">Go</IonButton>
      </IonItem>
     
     &nbsp;
     <strong>Get your coordinates here, Soldier!</strong>
     <IonItem>
     <IonButton class = "locationButton" onClick = {printCoordinates} slot="start" size = "default">Get Coordinates</IonButton>
     </IonItem>
     <div>
       Latitude: {lat}
     </div>
     &nbsp;
     <div>
       Longitude: {long}
     </div>
    </IonPage>
  );
};

export default Home;
