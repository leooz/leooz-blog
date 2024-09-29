---
title: "Technologies Utilisées"
description: "Présentation des technologies utilisées dans le projet Diacter"
---

# Technologies Utilisées

Le projet **Diacter** est construit sur des technologies modernes pour garantir une application performante, scalable et agréable à utiliser. Voici un aperçu détaillé des principales technologies utilisées.

---

## 🚀 Next.js

[**Next.js 13**](https://nextjs.org/docs) est un framework React qui permet de gérer le frontend et le backend dans une seule architecture. Avec le **App Directory**, la gestion des routes et du rendu côté serveur est simplifiée, ce qui permet d'optimiser le SEO et les performances.

::: tip Pourquoi Next.js 13 ?
- **Rendu hybride** : Statique et dynamique selon les besoins, optimisé pour le SEO.
- **Routing simplifié** : Le nouveau système de gestion des pages avec App Directory.
- **API Routes** : Facile à intégrer avec un backend léger sans besoin d'une infrastructure dédiée.
:::

```js
// Exemple d'une page Next.js avec App Directory
export default function HomePage() {
  return (
    <div>
      <h1>Bienvenue sur Diacter</h1>
      <p>Améliorez votre niveau de français grâce à des dictées personnalisées.</p>
    </div>
  );
}
```

---

## 🎨 TailwindCSS

[**TailwindCSS**](https://tailwindcss.com/docs) est un framework CSS utilitaire qui permet de styliser rapidement les composants avec une syntaxe intuitive. Il a été utilisé dans **Diacter** pour garantir une interface utilisateur moderne et réactive.

::: info Avantages de TailwindCSS
- **Productivité** : Stylisation rapide directement dans les fichiers JSX.
- **Customisation** : Complètement personnalisable tout en respectant des conventions.
- **Responsive** : Facile à adapter pour les différentes tailles d’écran.
:::

```html
<!-- Exemple d'un bouton stylisé avec TailwindCSS -->
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Générer une dictée
</button>
```

---

## 💻 ShadCN UI

[**ShadCN UI**](https://ui.shadcn.com/docs) est une collection de composants d'interface utilisateur réactifs et stylés, conçue pour être flexible et facile à intégrer. Elle a été utilisée pour améliorer l’expérience utilisateur sur **Diacter** avec des composants prêts à l'emploi.

::: tip Pourquoi ShadCN UI ?
- **Composants modernes** : Prêt à l'emploi et très personnalisables.
- **Intégration avec TailwindCSS** : Parfait pour maintenir une cohérence dans le design.
- **Flexibilité** : Possibilité de surcharger les composants selon les besoins.
:::

```js
// Exemple d'intégration d'un composant de ShadCN UI
import { Button } from 'shadcn-ui';

export default function Example() {
  return <Button variant="outline">Se connecter</Button>;
}
```

---

## 🔧 LucideReact

[**LucideReact**](https://lucide.dev/icons) est une bibliothèque d'icônes qui offre une collection d'icônes modernes et légères. **LucideReact** a été utilisé pour enrichir l'interface utilisateur de **Diacter**.

::: info Avantages de LucideReact
- **Icônes légères et personnalisables** : Idéales pour les interfaces modernes.
- **Facilité d'intégration** : Utilisation avec React pour une personnalisation directe.
:::

```jsx
// Exemple d'icône Lucide dans un bouton
import { Download } from 'lucide-react';

export default function DownloadButton() {
  return (
    <button className="flex items-center bg-gray-800 text-white py-2 px-4 rounded">
      <Download className="mr-2" />
      Télécharger la dictée
    </button>
  );
}
```

---

## 🗣️ Azure TTS

[**Azure Text-to-Speech (TTS)**](https://azure.microsoft.com/en-us/services/cognitive-services/text-to-speech/) est utilisé pour convertir le texte des dictées en voix humaine de manière fluide. Cela permet à **Diacter** de lire les dictées aux utilisateurs avec des voix naturelles et variées.

::: tip Pourquoi Azure TTS ?
- **Voix naturelles** : Haute qualité des voix générées par IA.
- **Support multi-langues** : S'adapte parfaitement pour le français.
- **Facile à intégrer** : API simple et performante.
:::

```js
// Exemple d'appel à l'API Azure TTS pour générer un fichier audio
const ttsClient = new AzureTTSClient({ key: 'API_KEY', region: 'region' });

ttsClient.synthesizeSpeech({
  text: "Bienvenue sur Diacter",
  language: "fr-FR",
  voice: "fr-FR-HortenseNeural",
  format: "audio/mp3",
});
```

---

## 🏞️ Azure Blob Storage

[**Azure Blob Storage**](https://azure.microsoft.com/en-us/services/storage/blobs/) est utilisé pour stocker les fichiers audio des dictées générées. Il permet une gestion sécurisée et scalable du stockage de fichiers.

::: info Pourquoi Azure Blob ?
- **Stockage scalable** : Idéal pour stocker un grand volume de fichiers audio.
- **Sécurisé** : Intégration facile avec des politiques d'accès.
- **Rapidité** : Permet de servir les fichiers de manière rapide et efficace.
:::

```js
// Exemple d'upload d'un fichier vers Azure Blob Storage
const { BlobServiceClient } = require('@azure/storage-blob');

const blobServiceClient = BlobServiceClient.fromConnectionString('AZURE_STORAGE_CONNECTION_STRING');
const containerClient = blobServiceClient.getContainerClient('dictations');
await containerClient.uploadBlockBlob('dictée.mp3', audioBuffer, audioBuffer.length);
```

---

## 🤖 OpenAI

[**OpenAI**](https://openai.com/) est utilisé dans **Diacter** pour générer les dictées de manière dynamique et adaptée à chaque utilisateur. Grâce aux modèles GPT, les phrases sont générées avec ou sans erreurs pour personnaliser les exercices.

::: tip Pourquoi OpenAI ?
- **Personnalisation** : Génération de dictées adaptées au niveau de l'utilisateur.
- **Qualité des textes** : Modèles linguistiques avancés, idéaux pour créer des dictées avec des fautes complexes.
:::

```js
// Exemple d'utilisation d'OpenAI pour générer une dictée
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({ apiKey: 'API_KEY' });
const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "Génère une dictée de niveau B2 avec quelques erreurs",
  max_tokens: 500,
});
const dictationText = response.data.choices[0].text;
```

---

## 💾 Redis (Upstash)

[**Upstash Redis**](https://upstash.com/) est utilisé comme solution de cache pour améliorer les performances de l'application. Il permet de stocker temporairement des résultats fréquemment demandés (comme les dictées générées) pour accélérer les temps de réponse.

::: tip Pourquoi Upstash Redis ?
- **Performances** : Réduit la charge sur la base de données et améliore la rapidité.
- **Simplicité** : Une solution Redis serverless simple à mettre en place.
:::

```js
// Exemple de caching avec Redis (Upstash)
const redis = require('@upstash/redis');

const client = redis.createClient({ url: 'UPSTASH_URL', token: 'UPSTASH_TOKEN' });

await client.set('dictée:1', dictationText);
const cachedDictation = await client.get('dictée:1');
```

---

## 🗃️ MySQL

[**MySQL**](https://www.mysql.com/) est utilisé pour la gestion des données dans **Diacter**, notamment pour stocker les informations des utilisateurs, les dictées générées, les scores, et le système de crédits.

::: info Pourquoi MySQL ?
- **Fiabilité** : Base de données relationnelle robuste et éprouvée.
- **Scalabilité** : Parfait pour gérer un grand nombre d'utilisateurs et de requêtes.
:::

```sql
-- Exemple de requête SQL pour récupérer les crédits d'un utilisateur
SELECT credits FROM users WHERE user_id = 123;
```

---

## Conclusion

Ces technologies permettent à **Diacter** de proposer une expérience fluide, rapide et scalable, tout en s'appuyant sur des solutions robustes pour gérer le contenu, les utilisateurs, et les fonctionnalités avancées comme la génération de dictées par IA et la lecture audio.

> **Prochaines étapes** : Amélioration des performances et ajout de nouvelles fonctionnalités pour la gestion de groupe et d'abonnement.
