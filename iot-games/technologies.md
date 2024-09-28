---
title: "Technologies Utilisées"
description: "Présentation des technologies utilisées dans ce projet"
---

# Technologies Utilisées

Dans ce projet, nous avons utilisé plusieurs technologies modernes pour développer une application robuste et scalable. Voici une présentation détaillée des outils et frameworks que nous avons employés.

## Backend

### Node.js
[Node.js](https://nodejs.org/) est une plateforme basée sur le moteur JavaScript V8 de Chrome permettant d’exécuter du code JavaScript côté serveur. C’est l’une des technologies principales de ce projet, utilisée pour construire un backend performant et non-bloquant.

```js
// Exemple de serveur Node.js basique
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});
```

### NestJS
[NestJS](https://nestjs.com/) est un framework progressif pour Node.js qui permet de construire des applications serveur robustes et évolutives. Nest fournit une architecture modulaire qui nous a permis de structurer proprement notre projet.

```ts
// Exemple de contrôleur NestJS
import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Get()
  findAll(): string {
    return 'This action returns all users';
  }
}
```

### MongoDB
[MongoDB](https://www.mongodb.com/) est une base de données NoSQL orientée document. Nous l’avons utilisé pour stocker nos données de manière flexible.

```js
// Connexion à MongoDB avec Mongoose
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'));
```

## Frontend

### React
[React](https://reactjs.org/) est une bibliothèque JavaScript développée par Facebook pour construire des interfaces utilisateur interactives. Elle est au cœur de la partie frontend du projet.

```jsx
// Exemple de composant React
function Welcome(props) {
  return <h1>Bonjour, {props.name}</h1>;
}

export default Welcome;
```

### Next.js
[Next.js](https://nextjs.org/) est un framework React permettant de gérer le rendu côté serveur et le pré-rendu statique pour les applications web. Nous avons utilisé Next.js pour optimiser le SEO et améliorer les performances.

```js
// Page basique dans Next.js
export default function Home() {
  return <div>Bienvenue sur ma page Next.js</div>;
}
```

## DevOps

### Docker
[Docker](https://www.docker.com/) est un outil qui permet de créer et de gérer des conteneurs, garantissant un environnement de développement et de production cohérent. Docker nous a permis de simplifier le déploiement de nos services.

```bash
# Exemple de Dockerfile
FROM node:16

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
CMD ["npm", "start"]
```

### Kubernetes
[Kubernetes](https://kubernetes.io/) est une plateforme d’orchestration de conteneurs open-source. Nous l’avons utilisé pour gérer et déployer nos conteneurs Docker dans un environnement de production.

### GitlabCI
[GitlabCI](https://docs.gitlab.com/ee/ci/) est un service d'intégration continue fourni par GitLab. Nous avons mis en place un pipeline CI/CD pour automatiser les tests, les builds et les déploiements.

```yaml
# Exemple de pipeline GitlabCI
stages:
  - build
  - test
  - deploy

build:
  stage: build
  script:
    - npm install
    - npm run build
  only:
    - main
```

## Cloud

### AWS (Amazon Web Services)
[AWS](https://aws.amazon.com/) est un fournisseur de services cloud qui nous a permis d’héberger l’application et de gérer le stockage des fichiers via S3.

### S3 (Simple Storage Service)
[S3](https://aws.amazon.com/s3/) est un service de stockage d’objets proposé par AWS. Nous l’avons utilisé pour stocker et servir des fichiers de manière scalable.

```js
// Exemple d'upload vers S3
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const uploadParams = {
  Bucket: 'my-bucket',
  Key: 'myfile.txt',
  Body: 'Contenu du fichier'
};

s3.upload(uploadParams, (err, data) => {
  if (err) {
    console.log('Erreur', err);
  }
  console.log('Upload réussi', data);
});
```

## Conclusion

L'utilisation de ces technologies a permis de construire une application moderne, performante et scalable. Elles assurent la robustesse et la facilité de maintenance du projet tout en garantissant une bonne expérience utilisateur.

### Explication :
1. **Backend** : Node.js, NestJS, MongoDB avec des exemples de code pour chaque technologie.
2. **Frontend** : React et Next.js avec des exemples de composants et de pages.
3. **DevOps** : Docker, Kubernetes et GitlabCI avec des exemples de fichiers Dockerfile et pipeline GitlabCI.
4. **Cloud** : AWS et S3 avec des exemples d’intégration.

