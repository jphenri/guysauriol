# Guy Sauriol | Site hommage GitHub Pages

Site statique, mobile-first et prêt à déployer sur GitHub Pages pour présenter l'héritage de Guy Sauriol avec une approche documentaire, visuelle et facile à maintenir.

## Structure du projet

```text
.
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── images/
│   │   ├── action-ring-guy-sauriol.jpg
│   │   ├── favicon.png
│   │   ├── legacy-guy-sauriol.jpg
│   │   ├── logo-guy-sauriol.png
│   │   ├── og-guy-sauriol.jpg
│   │   ├── portrait-guy-sauriol.jpg
│   │   └── poster-guy-sauriol.jpg
│   └── js/
│       └── main.js
├── .nojekyll
├── docs/
│   ├── Guy_Sauriol_Dossier.md
│   └── guy-sauriol-matchs-galas.md
├── index.html
├── robots.txt
├── sitemap.xml
└── source-material/
    ├── affiche-gpw-thurso-2025-guy-sauriol.jpg
    ├── cpw-international-ceinture-championnat-source.png
    ├── guy-sauriol-affiche-hommage-source.png
    ├── guy-sauriol-banner.png
    ├── guy-sauriol-legende-lutte-outaouais-source.png
    ├── guy-sauriol-portrait-ceinture-source.png
    └── guy-sauriol-the-legend-logo-source.png
```

## Renommer le site

Si vous souhaitez changer le nom du site ou le repositionner:

1. Modifiez le nom visible dans `index.html`:
   - le logo texte dans l'en-tête
   - le `h1`
   - le titre du pied de page
2. Mettez à jour les champs SEO:
   - la balise `<title>`
   - la `meta description`
   - les balises Open Graph et Twitter
   - le JSON-LD
3. Ajustez les URLs absolues dans:
   - `index.html`
   - `robots.txt`
   - `sitemap.xml`

## Modifier les textes et les sections

Les commentaires `<!-- CONTENU: ... -->` et `<!-- CONTACT: ... -->` dans [index.html](/Users/jean-philippehenri/Documents/GitHub/guysauriol/index.html) indiquent les zones à remplacer en priorité.

Sections principales à éditer:

- `Hero`: titre principal, sous-titre et boutons
- `Biographie`: présentation et ton documentaire
- `Parcours`: dates, rivalités, promotions, galas
- `Archives`: cartes d'archives et priorités de numérisation
- `Héritage`: impact en Outaouais et au Québec
- `Contribution`: courriel, liens sociaux et consignes de collecte

## Remplacer ou ajouter des images

Les images utilisées par le site se trouvent dans [assets/images](/Users/jean-philippehenri/Documents/GitHub/guysauriol/assets/images).

Pour remplacer une image:

1. Déposez votre nouveau fichier dans `assets/images/`
2. Donnez-lui un nom simple, par exemple `gala-1991-hull.jpg`
3. Mettez à jour le `src`, le `width`, le `height` et le `alt` dans `index.html`

Pour garder de bonnes performances:

- privilégiez des fichiers `.jpg` ou `.png` optimisés
- gardez les images de galerie autour de `900px` de large
- gardez l'image Open Graph autour de `1200px` de large

## Ajouter d'autres entrées d'archives

Pour ajouter une nouvelle carte d'archive:

1. Ouvrez [index.html](/Users/jean-philippehenri/Documents/GitHub/guysauriol/index.html)
2. Repérez la section `Archives`
3. Dupliquez un bloc `<article class="archive-card">...</article>`
4. Remplacez:
   - le type (`VHS`, `Affiches`, `Photos`, etc.)
   - le titre
   - la description
   - la ligne de métadonnées

Pour ajouter une nouvelle image dans la galerie:

1. Dupliquez un bloc `<a class="gallery-card" ...>`
2. Remplacez le `href`, le `src`, le `alt` et `data-caption`
3. Si l'image est très large, ajoutez la classe `gallery-card-wide`

## Déployer sur GitHub Pages

### Option recommandée

1. Créez un dépôt GitHub
2. Poussez tout le contenu de ce dossier dans la branche `main`
3. Sur GitHub, ouvrez `Settings` → `Pages`
4. Sous `Build and deployment`, choisissez:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - `Folder`: `/ (root)`
5. Enregistrez puis attendez la publication

### Avant la mise en ligne

Mettez à jour les URLs absolues de production dans:

- [index.html](/Users/jean-philippehenri/Documents/GitHub/guysauriol/index.html)
- [robots.txt](/Users/jean-philippehenri/Documents/GitHub/guysauriol/robots.txt)
- [sitemap.xml](/Users/jean-philippehenri/Documents/GitHub/guysauriol/sitemap.xml)

Si votre URL finale est `https://votrenom.github.io/guy-sauriol/`, utilisez cette base partout.

## Mettre à jour le SEO

Champs à vérifier à chaque itération éditoriale:

- `<title>` unique et clair
- `meta description` fidèle au contenu
- `canonical` correct
- balises `og:*` et `twitter:*`
- `schema` JSON-LD
- `robots.txt`
- `sitemap.xml`
- textes `alt` des images

## Remplacer les liens de contact et les réseaux

Repérez le commentaire `<!-- CONTACT: ... -->` dans `index.html` pour ajuster ou enrichir les coordonnées actuelles:

- `guysauriolthelegend@gmail.com`
- `https://www.youtube.com/@GuyTheLegendSauriol`

## Notes sur les sources

Le dossier [source-material](/Users/jean-philippehenri/Documents/GitHub/guysauriol/source-material) contient les éléments d'origine importés pour bâtir le site. Vous pouvez le conserver comme dossier de travail, ou le retirer plus tard si vous préférez un dépôt plus minimal. 
