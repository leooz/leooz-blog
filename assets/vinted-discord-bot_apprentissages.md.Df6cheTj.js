import{_ as i,c as a,a0 as e,o as n}from"./chunks/framework.XulkbXWZ.js";const c=JSON.parse('{"title":"Apprentissages","description":"Leçons et compétences acquises tout au long du projet","frontmatter":{"title":"Apprentissages","description":"Leçons et compétences acquises tout au long du projet"},"headers":[],"relativePath":"vinted-discord-bot/apprentissages.md","filePath":"vinted-discord-bot/apprentissages.md"}'),t={name:"vinted-discord-bot/apprentissages.md"};function l(p,s,h,r,o,k){return n(),a("div",null,s[0]||(s[0]=[e(`<h1 id="apprentissages" tabindex="-1">Apprentissages <a class="header-anchor" href="#apprentissages" aria-label="Permalink to &quot;Apprentissages&quot;">​</a></h1><p>Au cours du développement de ce projet, plusieurs compétences techniques et non techniques ont été acquises et perfectionnées. Voici un aperçu des principaux apprentissages tirés de cette expérience.</p><h2 id="amelioration-de-la-conception-d-architectures-scalables" tabindex="-1">Amélioration de la Conception d&#39;Architectures Scalables <a class="header-anchor" href="#amelioration-de-la-conception-d-architectures-scalables" aria-label="Permalink to &quot;Amélioration de la Conception d&#39;Architectures Scalables&quot;">​</a></h2><h3 id="lecon" tabindex="-1">Leçon <a class="header-anchor" href="#lecon" aria-label="Permalink to &quot;Leçon&quot;">​</a></h3><p>La création d&#39;une architecture logicielle capable de supporter la scalabilité a été un défi clé. Grâce à ce projet, j&#39;ai acquis une compréhension plus approfondie de la manière de concevoir des systèmes qui peuvent évoluer horizontalement et verticalement pour répondre aux besoins croissants des utilisateurs.</p><h3 id="application-pratique" tabindex="-1">Application Pratique <a class="header-anchor" href="#application-pratique" aria-label="Permalink to &quot;Application Pratique&quot;">​</a></h3><ul><li><strong>Utilisation de Kubernetes</strong> : Apprentissage de l&#39;orchestration de conteneurs et de la mise en place de <strong>Kubernetes</strong> pour gérer le scaling automatique des services.</li></ul><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Configuration de scaling automatique avec Kubernetes</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">apiVersion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">autoscaling/v1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">kind</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">HorizontalPodAutoscaler</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">metadata</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">app-hpa</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">spec</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  scaleTargetRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    apiVersion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">apps/v1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    kind</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Deployment</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">app</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  minReplicas</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  maxReplicas</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  targetCPUUtilizationPercentage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span></span></code></pre></div><h2 id="securisation-des-applications-web" tabindex="-1">Sécurisation des Applications Web <a class="header-anchor" href="#securisation-des-applications-web" aria-label="Permalink to &quot;Sécurisation des Applications Web&quot;">​</a></h2><h3 id="lecon-1" tabindex="-1">Leçon <a class="header-anchor" href="#lecon-1" aria-label="Permalink to &quot;Leçon&quot;">​</a></h3><p>Ce projet m&#39;a permis d&#39;approfondir mes connaissances sur les meilleures pratiques en matière de sécurité des applications web, notamment sur la protection contre les attaques courantes comme les injections SQL, XSS, et CSRF.</p><h3 id="application-pratique-1" tabindex="-1">Application Pratique <a class="header-anchor" href="#application-pratique-1" aria-label="Permalink to &quot;Application Pratique&quot;">​</a></h3><ul><li><strong>Mise en œuvre de mesures de sécurité</strong> : Utilisation de <strong>bcrypt</strong> pour le hachage des mots de passe et de <strong>Helmet</strong> pour sécuriser les en-têtes HTTP.</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Exemple de sécurisation des mots de passe avec bcrypt</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> bcrypt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bcrypt&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> saltRounds</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> hashedPassword</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bcrypt.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hash</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;password123&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, saltRounds);</span></span></code></pre></div><h2 id="optimisation-des-performances" tabindex="-1">Optimisation des Performances <a class="header-anchor" href="#optimisation-des-performances" aria-label="Permalink to &quot;Optimisation des Performances&quot;">​</a></h2><h3 id="lecon-2" tabindex="-1">Leçon <a class="header-anchor" href="#lecon-2" aria-label="Permalink to &quot;Leçon&quot;">​</a></h3><p>L&#39;optimisation des performances, tant au niveau du frontend que du backend, était essentielle pour offrir une expérience utilisateur fluide. J&#39;ai appris à implémenter des stratégies de mise en cache et à optimiser le chargement des pages et des assets.</p><h3 id="application-pratique-2" tabindex="-1">Application Pratique <a class="header-anchor" href="#application-pratique-2" aria-label="Permalink to &quot;Application Pratique&quot;">​</a></h3><ul><li><strong>Mise en cache avec Redis</strong> : Réduction des appels à la base de données en utilisant Redis pour stocker les données fréquemment demandées.</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Mise en cache avec Redis pour améliorer les performances</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">client.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;key&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">err</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (data) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">send</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Récupérer les données et les mettre en cache</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h2 id="gestion-de-projet-et-collaboration" tabindex="-1">Gestion de Projet et Collaboration <a class="header-anchor" href="#gestion-de-projet-et-collaboration" aria-label="Permalink to &quot;Gestion de Projet et Collaboration&quot;">​</a></h2><h3 id="lecon-3" tabindex="-1">Leçon <a class="header-anchor" href="#lecon-3" aria-label="Permalink to &quot;Leçon&quot;">​</a></h3><p>La gestion d&#39;un projet à grande échelle nécessite une planification rigoureuse et une bonne communication entre les membres de l&#39;équipe. J&#39;ai appris à utiliser des outils de gestion comme <strong>Jira</strong> et à suivre des méthodologies <strong>Agile</strong> pour organiser le travail efficacement.</p><h3 id="application-pratique-3" tabindex="-1">Application Pratique <a class="header-anchor" href="#application-pratique-3" aria-label="Permalink to &quot;Application Pratique&quot;">​</a></h3><ul><li><strong>Mise en place de sprints</strong> : Chaque tâche du projet a été divisée en sprints, avec des réunions de suivi hebdomadaires pour ajuster les priorités.</li></ul><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Exemple de suivi de tâches avec Jira et Agile</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Sprint 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Implémentation du backend</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Sprint 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Création de l&#39;interface utilisateur</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Sprint 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Tests et optimisation</span></span></code></pre></div><h2 id="automatisation-des-tests-et-deploiement-ci-cd" tabindex="-1">Automatisation des Tests et Déploiement CI/CD <a class="header-anchor" href="#automatisation-des-tests-et-deploiement-ci-cd" aria-label="Permalink to &quot;Automatisation des Tests et Déploiement CI/CD&quot;">​</a></h2><h3 id="lecon-4" tabindex="-1">Leçon <a class="header-anchor" href="#lecon-4" aria-label="Permalink to &quot;Leçon&quot;">​</a></h3><p>Le développement de pipelines CI/CD robustes m&#39;a permis de mieux comprendre l&#39;automatisation des processus de test, de build et de déploiement. Cela a réduit les erreurs humaines et accéléré les mises en production.</p><h3 id="application-pratique-4" tabindex="-1">Application Pratique <a class="header-anchor" href="#application-pratique-4" aria-label="Permalink to &quot;Application Pratique&quot;">​</a></h3><ul><li><strong>GitLab CI/CD</strong> : Utilisation de GitLab CI pour automatiser les tests et les déploiements sur <strong>AWS</strong>.</li></ul><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Exemple de pipeline CI/CD avec GitLab</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">stages</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">test</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">build</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">deploy</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npm install</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npm run test</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">deploy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">aws deploy update --application-name MyApp</span></span></code></pre></div><h2 id="maitrise-des-services-cloud" tabindex="-1">Maîtrise des Services Cloud <a class="header-anchor" href="#maitrise-des-services-cloud" aria-label="Permalink to &quot;Maîtrise des Services Cloud&quot;">​</a></h2><h3 id="lecon-5" tabindex="-1">Leçon <a class="header-anchor" href="#lecon-5" aria-label="Permalink to &quot;Leçon&quot;">​</a></h3><p>L&#39;utilisation de <strong>AWS</strong> pour héberger et gérer les services du projet m&#39;a permis d&#39;acquérir une meilleure compréhension des services cloud, notamment <strong>EC2</strong>, <strong>S3</strong>, et <strong>Lambda</strong>.</p><h3 id="application-pratique-5" tabindex="-1">Application Pratique <a class="header-anchor" href="#application-pratique-5" aria-label="Permalink to &quot;Application Pratique&quot;">​</a></h3><ul><li><strong>Déploiement sur AWS EC2</strong> : Utilisation d&#39;instances EC2 pour héberger le backend, avec une configuration sécurisée et scalable.</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Commande pour déployer sur une instance EC2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ssh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;key.pem&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ec2-user@ec2-xx-xxx-xx-xx.compute.amazonaws.com</span></span></code></pre></div><h2 id="developpement-d-interfaces-utilisateurs-reactives" tabindex="-1">Développement d&#39;Interfaces Utilisateurs Réactives <a class="header-anchor" href="#developpement-d-interfaces-utilisateurs-reactives" aria-label="Permalink to &quot;Développement d&#39;Interfaces Utilisateurs Réactives&quot;">​</a></h2><h3 id="lecon-6" tabindex="-1">Leçon <a class="header-anchor" href="#lecon-6" aria-label="Permalink to &quot;Leçon&quot;">​</a></h3><p>L&#39;optimisation de l&#39;interface utilisateur (UI) pour garantir une expérience fluide et réactive m&#39;a permis de renforcer mes compétences en <strong>React</strong> et <strong>Next.js</strong>, notamment en implémentant des <strong>hooks</strong> et des techniques de <strong>lazy loading</strong>.</p><h3 id="application-pratique-6" tabindex="-1">Application Pratique <a class="header-anchor" href="#application-pratique-6" aria-label="Permalink to &quot;Application Pratique&quot;">​</a></h3><ul><li><strong>Lazy loading avec Next.js</strong> : Amélioration du chargement des pages et réduction du temps de réponse grâce à des techniques de chargement différé.</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Exemple de lazy loading avec Next.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dynamic </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;next/dynamic&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DynamicComponent</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dynamic</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./HeavyComponent&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  loading</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Chargement...&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Page</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DynamicComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="gestion-et-analyse-des-donnees" tabindex="-1">Gestion et Analyse des Données <a class="header-anchor" href="#gestion-et-analyse-des-donnees" aria-label="Permalink to &quot;Gestion et Analyse des Données&quot;">​</a></h2><h3 id="lecon-7" tabindex="-1">Leçon <a class="header-anchor" href="#lecon-7" aria-label="Permalink to &quot;Leçon&quot;">​</a></h3><p>Ce projet m&#39;a également permis de perfectionner mes compétences en gestion et analyse de données, en mettant en œuvre des outils comme <strong>MongoDB</strong> pour le stockage des données et <strong>Chart.js</strong> pour la visualisation des statistiques.</p><h3 id="application-pratique-7" tabindex="-1">Application Pratique <a class="header-anchor" href="#application-pratique-7" aria-label="Permalink to &quot;Application Pratique&quot;">​</a></h3><ul><li><strong>Visualisation des données avec Chart.js</strong> : Création de graphiques interactifs pour afficher les données en temps réel.</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Exemple de graphique en barres avec Chart.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Bar } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;react-chartjs-2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  labels: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Janvier&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Février&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Mars&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  datasets: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Nombre d’utilisateurs&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      backgroundColor: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;rgba(75,192,192,0.6)&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      borderColor: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;rgba(75,192,192,1)&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      data: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">65</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">59</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UserStats</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Bar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{data} /&gt;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="conclusion" tabindex="-1">Conclusion <a class="header-anchor" href="#conclusion" aria-label="Permalink to &quot;Conclusion&quot;">​</a></h2><p>Grâce à ce projet, j&#39;ai acquis de nouvelles compétences dans la gestion de systèmes complexes et l&#39;optimisation des performances. L&#39;utilisation d&#39;outils modernes comme Kubernetes, Redis, et AWS a renforcé mes compétences en <strong>DevOps</strong> et <strong>développement fullstack</strong>. Ces apprentissages seront très utiles pour mes futurs projets.</p><h3 id="explication" tabindex="-1">Explication : <a class="header-anchor" href="#explication" aria-label="Permalink to &quot;Explication :&quot;">​</a></h3><ol><li><strong>Conception d&#39;Architectures Scalables</strong> : Utilisation de Kubernetes pour assurer la scalabilité du projet.</li><li><strong>Sécurisation des Applications Web</strong> : Mise en œuvre des bonnes pratiques de sécurité avec bcrypt et Helmet.</li><li><strong>Optimisation des Performances</strong> : Utilisation de Redis pour la mise en cache et optimiser les temps de réponse.</li><li><strong>Gestion de Projet</strong> : Apprentissage des méthodologies Agile et des outils comme Jira.</li><li><strong>Automatisation CI/CD</strong> : Automatisation des tests et déploiement avec GitLab CI/CD.</li><li><strong>Services Cloud</strong> : Utilisation d&#39;AWS pour l&#39;hébergement et la gestion des services.</li><li><strong>Interfaces Utilisateurs Réactives</strong> : Optimisation de l&#39;UI avec React et Next.js.</li><li><strong>Analyse des Données</strong> : Gestion et visualisation des données avec MongoDB et Chart.js.</li></ol>`,54)]))}const E=i(t,[["render",l]]);export{c as __pageData,E as default};
