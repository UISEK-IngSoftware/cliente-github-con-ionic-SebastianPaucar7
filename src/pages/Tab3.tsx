import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil de usuarios</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <img alt="User Image" src="https://pi.udistrital.edu.co/LIDER/themes/RITA/images/investigadores.png" />
          <IonCardHeader>
            <IonCardTitle>Sebastian Paucar</IonCardTitle>
            <IonCardSubtitle>sebastianpaucar7</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            Estudio Informática voy por 5to semestre en la UISEK.
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;