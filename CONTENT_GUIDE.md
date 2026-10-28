# Adding to your scrapbook

The homepage and all seven spaces work without JavaScript. Search is added when a collection contains entries.

## Add an entry

Create a Markdown file in the matching folder:

| Space | Folder | Address |
| --- | --- | --- |
| Travel | `_travels/` | `/travel/` |
| Art and comics | `_artwork/` | `/art/` |
| Books | `_books/` | `/books/` |
| Recipes | `_recipes/` | `/recipes/` |
| Hobbies | `_hobbies/` | `/hobbies/` |

Start each file with metadata like this, then write the story below it:

```markdown
---
title: "A title of your own"
date: 2026-10-27
summary: "A short introduction for the collection card."
image: /assets/images/your-photo.jpg
image_alt: "Describe what is in the photo."
---

## A moment to remember

Your words here.

![Another photograph]({{ '/assets/images/another-photo.jpg' | relative_url }})
```

Upload pictures to `assets/images/`. `image` and `image_alt` are optional; an entry without a cover receives a simple decorative card. Use a filename such as `a-weekend-away.md` to make a readable URL. Date controls the order, newest first. Publish entries only when ready; keep drafts outside collection folders.

Suggested sections for a trip: highlights, the funny story, places I'd recommend, and practical notes. Add `place: "City, Country"` to show the destination on its card.

For books, add `author: "Author name"`. Write your review in the body. Ratings are optional text of your choosing.

For hobbies, add `status: "On a very long break"` (or your own wording). Tell the story without needing to mark anything complete.

For art, add images in the body in reading order. Comic panels and scanned art remain full-width within the readable page; use descriptive alternative text for each image. Include a text transcript below comic panels when possible.

For recipes, the following optional metadata produces an ingredient box:

```yaml
serves: 2
ingredients:
  - "200 g of your first ingredient"
  - "A pinch of something good"
```

Write the method as a numbered list in the body, followed by any personal notes.

## Edit the core pages

- `index.md`: homepage introduction and desk arrangement.
- `_data/spaces.yml`: desk labels and links.
- `about.md`: bio and contact links.
- `work.md`: project story and roadmap.
- `assets/css/site.css`: colours, spacing, and responsive layout.
- `_includes/object.html`: the seven SVG desk illustrations.

The portrait uses the existing `image-3.jpg`. No third-party fonts, trackers, or scripts are loaded.

## Local build

In the prepared cloud environment:

```bash
source /workspace/.cloud-setup/site/env.sh
cd /workspace/amritarayc.github.io
bundle exec jekyll build --destination /workspace/.cloud-setup/site/output
bundle exec jekyll serve --destination /workspace/.cloud-setup/site/output --host 0.0.0.0 --port 4000
```

Use the repository config directly; the original onboarding Cayman override is no longer needed. For GitHub Pages, the site uses supported Jekyll collections and Liquid templates with no custom plugins or build step.

## Recipe format

Recipes now use their own layout automatically. Add a file to `_recipes/` with the following fields. This is a structure example, not a real recipe:

```yaml
---
title: "Recipe name"
date: 2026-10-27
summary: "A brief description."
serves: 4
prep_minutes: 15
cook_minutes: 30
image: /assets/images/recipes/finished-dish.jpg
image_alt: "Describe the dish in the photo."
# Include photo credit if the image is not your own and you have permission to use it.
photo_credit: "Photographer name"
photo_credit_url: "https://example.com/original"
measurement_note: "Weights converted from volume are approximate."
ingredients:
  - "500 g ingredient, prepared as described"
  - "Salt, to taste"
steps:
  - "First step, in your own words."
  - "Next step, with oven temperature and timing."
source_tips: [] # Advice from the original recipe, shown separately
my_notes: []
my_tips: []
photos: []
source_name: "Original recipe author / website"
source_url: "https://example.com/original-recipe"
---
```

Ingredients get native, keyboard-accessible checkboxes. They reset on page reload. Use grams instead of cup measurements; conversions depend on the ingredient and should be marked approximate when the source gives no weight. Keep countable ingredients as counts, and oven temperatures in °C. Preserve whether weights refer to whole or prepared produce. Verify quantities and method against the original before adding an entry.

`my_notes` and `my_tips` are lists of your own observations; do not fill them with an author's advice as if it were yours. Empty notes show a space for future observations. Source attribution is shown at the end. Use your own photos or images you have permission to publish; linking a recipe does not grant rights to its photography.

To add your own pictures, upload files and replace `photos: []` with:

```yaml
photos:
  - src: /assets/images/recipes/my-dish.jpg
    alt: "My finished dish on a plate"
    caption: "A note about this attempt."
```

Replace the cover with your own picture any time. Optional photos and notes are omitted or left empty until supplied. Content updates are made through these files; the public site has no visitor upload or editing form.
