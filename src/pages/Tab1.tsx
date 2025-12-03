import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import RepoItem from '../components/RepoItem';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lista de repositorios</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <RepoItem
            name="android-project"
            imageUrl="https://www.liderlogo.es/wp-content/uploads/2022/12/Logo-Android-1024x640.png"
          />
          <RepoItem
            name="ios-project"
            imageUrl="https://cdn.vectorstock.com/i/1000v/21/41/ios-icon-logo-software-phone-apple-symbol-design-vector-46322141.jpg"
          />
          <RepoItem
            name="ionic-project"
            imageUrl="https://images-cdn.openxcell.com/wp-content/uploads/2024/07/25072610/ionic-inner.svg"
          />  
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;