import { IonItem, IonImg } from "@ionic/react"


type Logo = {
    src: string;
    text: string;
};

const items: Logo[] = [{ src: "assets/CamoProjectPictures/CamoIndexLogo.PNG", text: 'Logo' }];

const Header = () => {

    return (
        <>
            {items.map((Logo, i) => (
                <IonItem key={i}>
                    <IonImg onClick={() => window.location.href = '/home'} src={Logo.src} />
                </IonItem>
            ))}
        </>)
}

export default Header;