
# Projet WordReact - Wordpress + react

## Description
Ce projet est une installation WordPress personnalisée avec des configurations spécifiques et des exclusions de fichiers pour un développement et un déploiement optimisés.

## Structure du Projet
- `/wp-admin/` : Administration WordPress (ignoré par Git)
- `/wp-includes/` : Fichiers core de WordPress (ignoré par Git)
- `/wp-content/` : Contenu personnalisé
  - `themes/` : Thèmes personnalisés
  - `plugins/` : Plugins personnalisés (les plugins core sont ignorés)
  - `uploads/` : Fichiers uploadés (ignoré par Git)

## Configuration
- Le fichier `wp-config.php` est ignoré pour des raisons de sécurité.
- Un fichier `.env` est utilisé pour les variables d'environnement (ignoré par Git).

## Développement
- Les dépendances sont gérées via Composer et npm (dossiers `vendor/` et `node_modules/` ignorés).
- Les fichiers de build et de distribution sont ignorés (`/build/`, `/dist/`).

## Déploiement
- Assurez-vous de configurer correctement votre environnement de production.
- N'oubliez pas de créer et configurer le fichier `wp-config.php` sur le serveur.

## Contribution
1. Forkez le projet
2. Créez votre branche de fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Poussez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## Licence
Ce projet est sous licence GPL.

