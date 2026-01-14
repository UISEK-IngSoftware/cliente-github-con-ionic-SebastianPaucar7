import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewDidEnter
} from '@ionic/react';

import './Tab1.css';
import RepoItem from '../components/RepoItem';
import { RepositoryItem } from '../interfaces/RepositoryItem';
import { useState } from 'react';
import { fetchRepositories, deleteRepository, updateRepository } from '../services/GithubService';

const Tab1: React.FC = () => {
  const [repos, setRepos] = useState<RepositoryItem[]>([]);

  // 🔹 Cargar repositorios
  const loadRepos = async () => {
    const reposData = await fetchRepositories();
    setRepos(reposData);
  };

  // 🔹 Eliminar repositorio
  const handleDelete = async (repo: RepositoryItem) => {
    if (!repo.owner) return;
    const success = await deleteRepository(repo.owner, repo.name);
    if (success) loadRepos();
  };

  // 🔹 Editar repositorio
  const handleEdit = async (repo: RepositoryItem) => {
    if (!repo.owner) return;
    // Ejemplo de edición: cambiar descripción
    const success = await updateRepository(repo.owner, repo.name, {
      description: "Repositorio editado desde Ionic"
    });
    if (success) loadRepos();
  };

  useIonViewDidEnter(() => {
    console.log("IonViewDidEnter - Cargando repositorios");
    loadRepos();
  });

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
          {repos.map((repo, index) => (
            <RepoItem
              key={index}
              repo={repo}
              onDelete={() => handleDelete(repo)}
              onEdit={() => handleEdit(repo)}
            />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
