# El-Rapha-Api

l’objectif du système est de digitaliser et centraliser la gestion des rendez-vous médicaux,

---

## Prérequis

Assurez-vous d’avoir :

- [Git](https://git-scm.com/downloads) installé
- Un accès au dépôt GitHub privé (vous serez invité par le propriétaire)
- [Node.js](https://nodejs.org/) installé
- **pnpm** installé localement dans le projet avant de commmencé:

```bash
npm install pnpm --save-dev
npx pnpm install
```

---

## Configuration initiale

1. **Cloner le dépôt**

   ```bash
   git clone https://github.com/sancty007/el-rapha-api.git
   cd el-rapha-api
   code .  # ou cursor . selon l’éditeur que vous utilisez
   ```

2. **Installer les dépendances**

   ```bash
   pnpm install
   ```

---

## Workflow Git de collaboration

### Branche principale

Par défaut, vous êtes sur la branche `main`. **Ne travaillez jamais directement sur `main` ou `develop`.**

---

### 1. Synchroniser votre dépôt

Avant toute modification :

```bash
git checkout -b develop origin/develop
git pull origin develop
```

---

### 2. Créer une branche pour votre fonctionnalité

Créez une branche dédiée :

```bash
git checkout -b feature/nom-fonctionnalité
```

Exemple : `feature/login-form`, `feature/refactor-header`

---

### 3. Conventions de nommage

#### Branches

- `feature/nom-fonctionnalité` → nouvelle fonctionnalité
- `fix/nom-du-bug` → correction de bug
- `hotfix/urgence` → correction urgente
- `refactor/nom` → refactorisation

#### Commits

```bash
{type}({scope}): {description} [Ticket Number]
```

Exemple :

```bash
 git add .
 git commit -m "feat(auth): ajout du système d’authentification avec JWT #SCRUM-5"
```

---

## Développement et tests locaux

Lancer le serveur :

```bash
pnpm run dev
```

Ajouter un fichier spécifique :

```bash
git add src/components/PatientForm.jsx
git commit -m "feat(patient): ajout de la méthode d'envoi du formulaire"
```

---

## Pousser vos changements

```bash
git push origin feature/nom-fonctionnalité
```

Exemple :

```bash
git push origin feature/refactoring
```

---

## Créer une Pull Request (PR)

1. Allez sur GitHub
2. Cliquez sur l'onglet **Pull Requests > New Pull Request**
3. Sélectionnez votre branche en base `develop` ou `main` selon le contexte
4. Rédigez une description claire
5. Mentionnez les changements, les fichiers impactés, et les raisons
6. Assignez un reviewer (@collaborateur)
7. Créez la PR

---

## Revue & Fusion

- Au moins **une validation** d’un autre membre est requise
- Fusionnez uniquement après approbation
- Supprimez la branche après fusion depuis GitHub ou en ligne de commande

---

## Communication entre collaborateurs

- Communiquez régulièrement dans le groupe ou repo
- Mentionnez les collègues avec `@pseudo` pour demander des retours
- Discutez **des changements majeurs** avant de les lancer
- Créez des issues GitHub pour discuter de bugs ou idées

---

## Règles de codage

- Suivre l’organisation du projet
- Créer des **composants réutilisables**
- Commenter le code si nécessaire
- Respecter les conventions (nommage, indentation, bonnes pratiques)
- Ne jamais pousser de code avec des erreurs ou des warnings visibles

---

## Contact

Pour toute question ou problème d'accès, contactez un des collaborateurs via GitHub ou en message privé.
