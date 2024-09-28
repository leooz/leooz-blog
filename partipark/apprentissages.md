---
title: "Apprentissages"
description: "Leçons et compétences acquises tout au long du projet"
---

# Apprentissages

Au cours du développement de ce projet, plusieurs compétences techniques et non techniques ont été acquises et perfectionnées. Voici un aperçu des principaux apprentissages tirés de cette expérience.

## Amélioration de la Conception d'Architectures Scalables

### Leçon
La création d'une architecture logicielle capable de supporter la scalabilité a été un défi clé. Grâce à ce projet, j'ai acquis une compréhension plus approfondie de la manière de concevoir des systèmes qui peuvent évoluer horizontalement et verticalement pour répondre aux besoins croissants des utilisateurs.

### Application Pratique
- **Utilisation de Kubernetes** : Apprentissage de l'orchestration de conteneurs et de la mise en place de **Kubernetes** pour gérer le scaling automatique des services.

```yaml
# Configuration de scaling automatique avec Kubernetes
apiVersion: autoscaling/v1
kind: HorizontalPodAutoscaler
metadata:
  name: app-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: app
  minReplicas: 2
  maxReplicas: 10
  targetCPUUtilizationPercentage: 80
```

## Sécurisation des Applications Web

### Leçon
Ce projet m'a permis d'approfondir mes connaissances sur les meilleures pratiques en matière de sécurité des applications web, notamment sur la protection contre les attaques courantes comme les injections SQL, XSS, et CSRF.

### Application Pratique
- **Mise en œuvre de mesures de sécurité** : Utilisation de **bcrypt** pour le hachage des mots de passe et de **Helmet** pour sécuriser les en-têtes HTTP.

```js
// Exemple de sécurisation des mots de passe avec bcrypt
const bcrypt = require('bcrypt');
const saltRounds = 10;
const hashedPassword = await bcrypt.hash('password123', saltRounds);
```

## Optimisation des Performances

### Leçon
L'optimisation des performances, tant au niveau du frontend que du backend, était essentielle pour offrir une expérience utilisateur fluide. J'ai appris à implémenter des stratégies de mise en cache et à optimiser le chargement des pages et des assets.

### Application Pratique
- **Mise en cache avec Redis** : Réduction des appels à la base de données en utilisant Redis pour stocker les données fréquemment demandées.

```js
// Mise en cache avec Redis pour améliorer les performances
client.get('key', (err, data) => {
  if (data) {
    res.send(JSON.parse(data));
  } else {
    // Récupérer les données et les mettre en cache
  }
});
```

## Gestion de Projet et Collaboration

### Leçon
La gestion d'un projet à grande échelle nécessite une planification rigoureuse et une bonne communication entre les membres de l'équipe. J'ai appris à utiliser des outils de gestion comme **Jira** et à suivre des méthodologies **Agile** pour organiser le travail efficacement.

### Application Pratique
- **Mise en place de sprints** : Chaque tâche du projet a été divisée en sprints, avec des réunions de suivi hebdomadaires pour ajuster les priorités.

```yaml
# Exemple de suivi de tâches avec Jira et Agile
- Sprint 1: Implémentation du backend
- Sprint 2: Création de l'interface utilisateur
- Sprint 3: Tests et optimisation
```

## Automatisation des Tests et Déploiement CI/CD

### Leçon
Le développement de pipelines CI/CD robustes m'a permis de mieux comprendre l'automatisation des processus de test, de build et de déploiement. Cela a réduit les erreurs humaines et accéléré les mises en production.

### Application Pratique
- **GitLab CI/CD** : Utilisation de GitLab CI pour automatiser les tests et les déploiements sur **AWS**.

```yaml
# Exemple de pipeline CI/CD avec GitLab
stages:
  - test
  - build
  - deploy

test:
  script:
    - npm install
    - npm run test

deploy:
  script:
    - aws deploy update --application-name MyApp
```

## Maîtrise des Services Cloud

### Leçon
L'utilisation de **AWS** pour héberger et gérer les services du projet m'a permis d'acquérir une meilleure compréhension des services cloud, notamment **EC2**, **S3**, et **Lambda**.

### Application Pratique
- **Déploiement sur AWS EC2** : Utilisation d'instances EC2 pour héberger le backend, avec une configuration sécurisée et scalable.

```bash
# Commande pour déployer sur une instance EC2
ssh -i "key.pem" ec2-user@ec2-xx-xxx-xx-xx.compute.amazonaws.com
```

## Développement d'Interfaces Utilisateurs Réactives

### Leçon
L'optimisation de l'interface utilisateur (UI) pour garantir une expérience fluide et réactive m'a permis de renforcer mes compétences en **React** et **Next.js**, notamment en implémentant des **hooks** et des techniques de **lazy loading**.

### Application Pratique
- **Lazy loading avec Next.js** : Amélioration du chargement des pages et réduction du temps de réponse grâce à des techniques de chargement différé.

```js
// Exemple de lazy loading avec Next.js
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Chargement...</p>,
});

export default function Page() {
  return <DynamicComponent />;
}
```

## Gestion et Analyse des Données

### Leçon
Ce projet m'a également permis de perfectionner mes compétences en gestion et analyse de données, en mettant en œuvre des outils comme **MongoDB** pour le stockage des données et **Chart.js** pour la visualisation des statistiques.

### Application Pratique
- **Visualisation des données avec Chart.js** : Création de graphiques interactifs pour afficher les données en temps réel.

```js
// Exemple de graphique en barres avec Chart.js
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['Janvier', 'Février', 'Mars'],
  datasets: [
    {
      label: 'Nombre d’utilisateurs',
      backgroundColor: 'rgba(75,192,192,0.6)',
      borderColor: 'rgba(75,192,192,1)',
      data: [65, 59, 80],
    },
  ],
};

export default function UserStats() {
  return <Bar data={data} />;
}
```

## Conclusion

Grâce à ce projet, j'ai acquis de nouvelles compétences dans la gestion de systèmes complexes et l'optimisation des performances. L'utilisation d'outils modernes comme Kubernetes, Redis, et AWS a renforcé mes compétences en **DevOps** et **développement fullstack**. Ces apprentissages seront très utiles pour mes futurs projets.

### Explication :
1. **Conception d'Architectures Scalables** : Utilisation de Kubernetes pour assurer la scalabilité du projet.
2. **Sécurisation des Applications Web** : Mise en œuvre des bonnes pratiques de sécurité avec bcrypt et Helmet.
3. **Optimisation des Performances** : Utilisation de Redis pour la mise en cache et optimiser les temps de réponse.
4. **Gestion de Projet** : Apprentissage des méthodologies Agile et des outils comme Jira.
5. **Automatisation CI/CD** : Automatisation des tests et déploiement avec GitLab CI/CD.
6. **Services Cloud** : Utilisation d'AWS pour l'hébergement et la gestion des services.
7. **Interfaces Utilisateurs Réactives** : Optimisation de l'UI avec React et Next.js.
8. **Analyse des Données** : Gestion et visualisation des données avec MongoDB et Chart.js.

