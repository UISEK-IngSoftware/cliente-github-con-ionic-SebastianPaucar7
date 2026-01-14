import { IonItem, IonLabel, IonThumbnail, IonItemSliding, IonItemOptions, IonItemOption, IonIcon } from '@ionic/react';
import { trash, create } from 'ionicons/icons';
import './RepoItem.css';
import { RepositoryItem } from '../interfaces/RepositoryItem';

const RepoItem: React.FC<{ repo: RepositoryItem; onDelete: () => void; onEdit: () => void; }> = ({ repo, onDelete, onEdit }) => {
 return (
  <IonItemSliding>
    <IonItem>
      <IonThumbnail slot="start">
        <img
          src={
            repo.imageUrl ||
            "https://universoabierto.org/wp-content/uploads/2016/05/organization-1.png"
          }
          alt={repo.name}
        />
      </IonThumbnail>

      <IonLabel>
        <h2>{repo.name}</h2>
        <p>{repo.description}</p>
        <p>Propietario: {repo.owner}</p>
        <p>Lenguaje: {repo.language}</p>
      </IonLabel>
    </IonItem>

    <IonItemOptions side="end">
      <IonItemOption color="primary" onClick={onEdit}>
        <IonIcon slot="icon-only" icon={create} />
      </IonItemOption>

      <IonItemOption color="danger" onClick={onDelete}>
        <IonIcon slot="icon-only" icon={trash} />
      </IonItemOption>
    </IonItemOptions>
  </IonItemSliding>
);
};

export default RepoItem;