---
title: "Challenges"
description: "Les principaux défis rencontrés et les solutions apportées"
---

# Challenges

Lors du développement de ce projet, plusieurs défis techniques et organisationnels ont émergé. Cette section couvre les problèmes les plus significatifs que nous avons rencontrés et la manière dont nous les avons surmontés.

## Gestion des Performances

### Problème
L'application devait gérer un grand volume de requêtes simultanées, ce qui a entraîné des problèmes de performances, notamment des délais de réponse lents et des risques de surcharge du serveur.

### Solution
Nous avons mis en place une stratégie de mise en cache avec **Redis** pour stocker les réponses fréquentes en mémoire. Cela a permis de réduire considérablement la charge sur la base de données et d'améliorer les temps de réponse.

```js
// Exemple de mise en cache avec Redis
const redis = require('redis');
const client = redis.createClient();

app.get('/data', async (req, res) => {
  client.get('key', async (err, cachedData) => {
    if (cachedData) {
      return res.send(JSON.parse(cachedData));
    } else {
      const data = await fetchDataFromDb();
      client.setex('key', 3600, JSON.stringify(data));
      res.send(data);
    }
  });
});
```

## Sécurité des Données

### Problème
Le projet nécessitait une gestion sécurisée des données sensibles des utilisateurs (mots de passe, informations personnelles, etc.). La protection de ces données contre les attaques potentielles, comme le **Cross-Site Scripting (XSS)** ou le **Cross-Site Request Forgery (CSRF)**, était une priorité.

### Solution
Nous avons utilisé le chiffrement des mots de passe avec **bcrypt**, et mis en place des mécanismes pour protéger les requêtes avec des **tokens CSRF** et des en-têtes de sécurité.

```js
// Exemple de chiffrement de mot de passe avec bcrypt
const bcrypt = require('bcrypt');

const saltRounds = 10;
bcrypt.hash('monMotDePasse', saltRounds, function(err, hash) {
  // Enregistrer le hash dans la base de données
});
```

Nous avons aussi configuré des en-têtes HTTP sécurisés avec **Helmet** pour protéger contre des attaques comme XSS :

```js
const helmet = require('helmet');
app.use(helmet());
```

## Déploiement Continu

### Problème
Le projet impliquait des cycles de développement rapide avec des mises à jour fréquentes, ce qui nécessitait une pipeline de **CI/CD** fiable pour automatiser les tests, la construction et le déploiement.

### Solution
Nous avons mis en place **GitLabCI** pour automatiser le processus de build, de test et de déploiement. Chaque commit dans la branche principale déclenche un pipeline qui teste l'application, construit les images Docker et déploie automatiquement la nouvelle version sur **AWS**.

```yaml
# Exemple de pipeline CI/CD GitLab
stages:
  - test
  - build
  - deploy

test:
  stage: test
  script:
    - npm install
    - npm test

build:
  stage: build
  script:
    - docker build -t mon-app:latest .
    - docker push mon-registry/mon-app:latest

deploy:
  stage: deploy
  script:
    - aws ecs update-service --cluster my-cluster --service my-service --force-new-deployment
```

## Gestion des Erreurs et Disponibilité

### Problème
L'application devait être résiliente et capable de gérer les erreurs réseau, les pannes de services externes, et les erreurs inattendues sans impacter l'expérience utilisateur.

### Solution
Nous avons implémenté une gestion centralisée des erreurs avec des **middlewares** pour capturer et traiter les erreurs au niveau du serveur, et utilisé des solutions de **retry** pour les appels aux services externes.

```js
// Middleware de gestion des erreurs dans Express
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Quelque chose a mal tourné!');
});

// Exemple de retry pour appel externe
const axios = require('axios');
const retry = require('async-retry');

async function fetchData() {
  return await retry(async bail => {
    const res = await axios.get('https://api.exemple.com/data');
    return res.data;
  }, { retries: 3 });
}
```

## Scalabilité

### Problème
Le projet devait évoluer rapidement pour supporter une augmentation du nombre d'utilisateurs et de requêtes. Nous devions garantir la **scalabilité horizontale** et verticale.

### Solution
Nous avons utilisé **Kubernetes** pour orchestrer et gérer les conteneurs, ce qui permet de facilement faire évoluer les services en fonction de la charge. Kubernetes a également aidé à gérer les **load balancers** et à effectuer un scaling automatique.

```yaml
# Exemple de configuration de scaling automatique avec Kubernetes
apiVersion: autoscaling/v1
kind: HorizontalPodAutoscaler
metadata:
  name: my-app-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: my-app
  minReplicas: 1
  maxReplicas: 10
  targetCPUUtilizationPercentage: 80
```

## Optimisation du Frontend

### Problème
L'application devait charger rapidement même avec des connexions lentes. Nous devions optimiser les **performances front-end**, notamment en réduisant la taille des bundles JavaScript.

### Solution
Nous avons utilisé **Next.js** avec des techniques comme le **lazy loading** des composants et des images, et le pré-rendu des pages pour optimiser le chargement initial.

```js
// Exemple de lazy loading d'une image avec Next.js
import Image from 'next/image';

export default function MyPage() {
  return (
    <div>
      <h1>Mon Projet</h1>
      <Image
        src="/image-de-mon-projet.jpg"
        alt="Image"
        width={500}
        height={300}
        loading="lazy"
      />
    </div>
  );
}
```

## Conclusion

Les défis rencontrés tout au long du développement de ce projet ont renforcé l'architecture et les performances de l'application. Grâce à des solutions techniques adaptées, nous avons pu surmonter ces obstacles et livrer une application stable, performante et scalable.

### Explication :
1. **Gestion des Performances** : Utilisation de Redis pour la mise en cache et éviter la surcharge.
2. **Sécurité des Données** : Chiffrement des données sensibles avec bcrypt et sécurisation des requêtes avec des headers et tokens CSRF.
3. **Déploiement Continu** : Intégration de GitLabCI pour automatiser le déploiement et les tests.
4. **Gestion des Erreurs** : Utilisation de middleware pour capturer et traiter les erreurs côté serveur.
5. **Scalabilité** : Orchestration avec Kubernetes pour garantir la scalabilité.
6. **Optimisation du Frontend** : Optimisation du chargement des pages et des assets avec Next.js.

