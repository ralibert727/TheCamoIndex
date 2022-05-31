import React, { useEffect, useState } from 'react';
import { IonPage, IonItem, IonImg, IonCard, IonLabel, IonTitle, IonButton } from "@ionic/react";
import { useParams } from 'react-router-dom';
import './CamoPage.css';
import "./Home.tsx";

const CamoPage: React.FC = () => {

  const woodCamo = [
    { "image": "assets/CamoProjectPictures/Woodland/M81Wood.jpg", "id": "0", "name": "M81 Woodland Battle Dress Uniform", "description": "In 1981 the US Army began full scale production of a modified version of the 2nd generation ERDL pattern known as Woodland Camouflage. Retaining essentially the same colorway of light green, dark green, brown and black, the pattern incorporates a 60% enlargement of the original ERDL design. The M81 Woodland Camouflage was initially adopted as standard combat and everyday dress by the US Army and USMC." },
    { "image": "assets/CamoProjectPictures/Woodland/DPM.jpg", "id": "1", "name": "DPM", "description": "In 1966 the British Ministry of Defense issued the Pattern 1960 DPM (P60), the first in a long line of Disruptive Pattern Material uniforms to be issued by the British Armed Forces. The cut of the standard uniform was based on the Pattern 60 olive green combat uniform, but made in the DPM material. Additional versions were produced in the style of the M1942 Windproof uniform, and worn by British Special Forces." },
    { "image": "assets/CamoProjectPictures/Woodland/FlecktarnCamoWood.jpg", "id": "2", "name": "Flecktarn", "description": "Officially known as Funf Farben Tarndruck der Bundeswehr (Five color camouflage of the Bundeswehr), Flecktarn remains the standard issue combat uniform pattern of the German Armed Forces, with a wide variety of uniform items and field equipment being produced in this camouflage scheme." },
    { "image": "assets/CamoProjectPictures/Woodland/M90Splinter.jpg", "id": "3", "name": "M90 Splinter", "description": "The M90 splinter pattern was introduced in 1989 for printing on a camouflage combat uniform worn by Swedish armed forces personnel. As the original FOA pattern was rather large in scale, being intended to obscure vehicles and installations from aerial identification), the design was reduced in scale to function adequately in heavy Swedish forests and obscure location of troops at distances up to one kilometer." },
    { "image": "assets/CamoProjectPictures/Woodland/MARPATWood.jpg", "id": "4", "name": "MARPAT Woodland", "description": "The concept of digital camouflage, designed using computer algorithms and incorporating pixelated shapes rather than more natural organic ones, was pioneered by the Canadian government in 1996. Impressed by statistical evidence indicating digital designs could more effectively camouflage a target than traditional organic types, and seeking a distinctive combat uniform of its own to set its Marines apart from the other US military services, the USMC sought to develop its own digital camouflage pattern. The result is the MARPAT (Marine Pattern) series of designs, adopted in 2001 (and 2005). This the Woodland variant."}
  ]

  const desertCamo = [
    { "image": "assets/CamoProjectPictures/Desert/3ColorDesert.jpg", "id": "0", "name": " Three Color Desert Camouflage Uniform", "description": "A three-color design, saw limited release in 1989 and was in full production by 1991, although a very small scattering of examples are known to have reached US forces during Desert Storm. Consisting of beige & earth brown horizontal waves on a sandy background, the US tricolor desert pattern (given the nickname coffee stain by some US personnel) was since copied & adopted by a great many nations in Western Asia and continues to serve adequately in many countries around the world." },
    { "image": "assets/CamoProjectPictures/Desert/ChocolateChipDesert.jpg", "id": "1", "name": "Six Color Desert Battle Dress Uniform", "description": "This six-color desert pattern has affectionately become known as chocolate chip pattern, owing to the resemblance of the black elements to this well-loved cookie ingredient. US military issue clothing produced in this pattern bears the nomenclature Desert Battle Dress Uniform, often shortened to DBDU by collectors. " },
    { "image": "assets/CamoProjectPictures/Desert/M90KSplinterCamo.jpg", "id": "2", "name": "M90K Splinter", "description": "Introduced in 2004, the M90K pattern is a variation of the standard M90 splinter pattern and the standard pattern worn by Swedish military contingents serving in desert regions." },
    { "image": "assets/CamoProjectPictures/Desert/MARPATDes.jpg", "id": "3", "name": "MARPAT Desert", "description": "The concept of digital camouflage, designed using computer algorithms and incorporating pixelated shapes rather than more natural organic ones, was pioneered by the Canadian government in 1996. Impressed by statistical evidence indicating digital designs could more effectively camouflage a target than traditional organic types, and seeking a distinctive combat uniform of its own to set its Marines apart from the other US military services, the USMC sought to develop its own digital camouflage pattern. The result is the MARPAT (Marine Pattern) series of designs, adopted in 2001 (and 2005). This the Desert variant." },
    { "image": "assets/CamoProjectPictures/Desert/TropentarnCamo.jpg", "id": "4", "name": "Tropentarn", "description": "Tropentarn, is a camouflage pattern used by the Bundeswehr in arid and semi arid regions. It is the desert variant of the Flecktarn 5-color temperate climate camouflage print of the Bundeswehr. " }
  ]

  const jungleCamo = [
    { "image": "assets/CamoProjectPictures/Jungle/ERDL.jpg", "id": "0", "name": "ERDL", "description": "The US Army Engineer Research and Development Laboratory (ERDL) designed a general purpose jungle camouflage consisting of mid-brown & grass green organic shapes with black branches on a lime green background in 1948.This pattern, often copied and still in usage today by other nations, is generally referred to as the ERDL camouflage pattern. Although initially shelved, the pattern was revived for testing in 1962, and several hundred ERDL tropical combat uniforms were sent to Vietnam for evaluation by USARV in 1966." },
    { "image": "assets/CamoProjectPictures/Jungle/FrogSkin.jpg", "id": "1", "name": "Frog Skin", "description": "Nicknamed Frogskin by many GIs, the pattern consists of a five color, green dominant “jungle” camouflage pattern printed on one side, with a three color, brown dominant “beach” pattern printed on the opposite side. Produced in a variety of uniform styles as well as some articles of field equipment, the pattern was most widely utilized by the USMC in the Pacific Theater (although it did see very limited usage by the US Army operating in the ETO).  " },
    { "image": "assets/CamoProjectPictures/Jungle/TigerStripeCamo.jpg", "id": "2", "name": "Tiger Stripe", "description": "South Vietnamese tiger stripe camouflage patterns were very popular with US military personnel during the war, both as operational clothing (employed primarily by elite units such as US Army Special Forces, Navy SEALs, and Marine Recon) and as status symbols or off-duty party garments worn by rear echelon personnel." },
    { "image": "assets/CamoProjectPictures/Jungle/VineLeaf.jpg", "id": "3", "name": "Vine Leaf", "description": "The USMC standard or vine leaf pattern consists of large overlapping dark green, lime green & ochre leaf shapes with brown twigs on a pale green background. This design was produced in at least two distinctive color variations (employing the same printing screens) - one version with a pale green background, darker green leaf shapes and highly contrasting bright yellow and russet features, and a second version with far less contrast between the colors." }
  ]

  const snowCamo = [
    { "image": "assets/CamoProjectPictures/SnowWinter/AlpineMulticam.jpg", "id": "0", "name": "Alpine Multicam", "description": "The commercial arctic variant of Multicam series." },
    { "image": "assets/CamoProjectPictures/SnowWinter/KryptekWraith.jpg", "id": "1", "name": "Kryptek Wraith", "description": "Kryptek™ L.E.A.F. camouflage features a bi-level layering design that incorporates background transitional shading and sharp random geometrical foregrounds to create a three dimensional effect that ensures concealment at both close and long ranges. Wraith is the variant for arctic environments." },
    { "image": "assets/CamoProjectPictures/SnowWinter/M05Finland.jpg", "id": "2", "name": "M05", "description": "Fourth in the series of current Finnish camouflage designs is the M05 Lumikuvio or snow pattern. Consisting of dark green variegated blotches on a white background, the uniform is in fact an oversuit (smock, trousers & helmet cover) designed to be worn over the standard combat clothing." },
    { "image": "assets/CamoProjectPictures/SnowWinter/M84Snow.jpg", "id": "3", "name": "M/84 Snow", "description": "The snow version of the Danish derivative of German Flecktarn, M/84." },
    { "image": "assets/CamoProjectPictures/SnowWinter/PenCottSnow.jpg", "id": "4", "name": "PenCott SnowDrift", "description": "PenCott Multi-Environment Camouflage was developed by UK-based Hyde Definition and has been available commercially since 2009. This the arctic variant, Snowdrift." }

  ]

  const multiCamo = [
    { "image": "assets/CamoProjectPictures/Multi/OCPUS.jpg", "id": "0", "name": "OCP", "description": "On official nomenclature, this MultiCam derived pattern is known as Operational Camouflage Pattern (OCP). Although the design does differ from Multicam, the differences are not easy to discern to the untrained eye. One notable difference is that the base or background color of OCP changes from light green to light brown in wide, horizontal bands. Another difference is the colors incorporated into the pattern; OCP uses eight colors, and the specific shades have been changed slightly in order to avoid copyright infringement. Lastly, OCP lacks vertical elements that were part of the original Multicam design." },
    { "image": "assets/CamoProjectPictures/Multi/MTPCamo.jpg", "id": "1", "name": "MTP", "description": "Lessons learned by British troops in Afghanistan led to the Multi Terrain Pattern - being introduced in the British Army from 2010. The pattern is a hybrid of the Crye Multicam and the traditional DPM. The pattern has been copyrighted by the British MoD." },
    { "image": "assets/CamoProjectPictures/Multi/HunCam2015M.jpg", "id": "2", "name": "HunCam", "description": "A Hungarian six-color design, incorporating reddish-brown, light tan, olive green, moss green, light brown, and sand-colors, the specific shapes appear to be a unique design and unrelated to any other commercial or military design. Some circles are referring to this design as HunCam but it is likely this is only a nickname." },
    { "image": "assets/CamoProjectPictures/Multi/PolandSuezCamo.jpg", "id": "3", "name": "Polish Suez", "description": "Polish Army Special Forces began using a Multicam-derivative design called Suez in 2008. This mottled camouflage pattern incorporates dark brown, olive green, light olive, beige & pinkish-tan shapes on a sandy background, but it is not a direct copy of the Crye Multicam design. It has seen service in Iraq and Afghanistan." }
  ]

  const data = {
    woodCamo, desertCamo, jungleCamo, snowCamo, multiCamo
  } as any



  const params = useParams() as any;
  const [currentItem, setCurrentItem] = useState(null as any);

  const getRandomItem = () => {
    const items = data[params.section];
    const randomIndex = Math.floor(Math.random() * items.length);
    setCurrentItem(items[randomIndex]);
  }


  useEffect(() => {
    getRandomItem();
  }, []);


  return (
    <IonPage>
      <IonButton onClick={getRandomItem}>Get new camo</IonButton>
      {currentItem && <IonCard>
          <IonTitle><strong>{currentItem.name}</strong></IonTitle>
        <IonLabel>{currentItem.description}</IonLabel>
        <IonItem class="CamoImg">
          <IonImg src={currentItem.image} />
        </IonItem>
      </IonCard>}
    </IonPage>
  );
};

export default CamoPage;
