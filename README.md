
Single Web App basique qui affiche une liste de vidéos en fonction du genre choisi par l'utilisateur.

Ce projet a été créé à partir de [Create React App](https://github.com/facebookincubator/create-react-app).


## Table of Contents

- [Installation](#installation)
- [Choix techniques](#choix-techniques)
- [Améliorations](#améliorations)

## Installation

Pour lancer le projet en mode développement, se placer dans le répertoire du projet et lancer :

```
npm install
npm start
```

Ouvrir http://localhost:3000 pour le visualiser dans le navigateur.

## Choix techniques

3 composants ont été créés dans le but de pouvoir être réutilisés :

* **Movie** : card affichant la vignette et le titre de la vidéo. Au clic, la Modal contenant les détails s'affiche
* **ModalInfo** : card s'affichant dans la Modal et contenant les détails de la vidéo (titre, synopsis, note)
* **GenreSelector** : Select Input permettant de sélectionner un genre parmi ceux listés en base de données

## Améliorations

Par souci d'économie de temps, ce projet a été réalisé de manière très simple mais de nombreuses améliorations pourraient l'enrichir :

* afficher la vidéo dans un player pour pouvoir la jouer;
* afficher toutes les vidéos (et pas seulement la 1ère page);
* afficher plus de détails sur la vidéo (cast, genres etc.);
* et biens d'autres encore !
