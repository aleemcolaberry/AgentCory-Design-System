# Updating the "In public" section (Home)

All copy lives in `i18n.js`, once under `en` and once under `ar` (same keys). The tiles read these keys; no markup changes are needed.

| Tile | Keys in `i18n.js` (`home.*`) | What to change |
| --- | --- | --- |
| Featured video (large tile) | `video.videoId`, `video.title`, `video.overline`, `video.playAria` | Put the YouTube ID (the part after `watch?v=`) in `videoId`. While it is `YOUR_VIDEO_ID` the tile shows "Recording coming soon". Drop a 16:9 thumbnail into the tile in the editor, or save it as `assets/media/video-thumb.webp`. |
| Latest LinkedIn post | `post.overline` (include the date), `post.body`, `post.href`, `post.stats` (optional) | Paste the post URL in `href`. |
| Latest reel | `reel.title`, `reel.href`, `reel.overline` | Paste the Instagram reel URL in `href` (currently `instagram.com/reels/Dd9F92tziej`). Drop a 9:16 thumbnail into the tile, or save it as `assets/media/reel-thumb.webp`. Instagram offers no public feed, so this stays a manual update. |
| LinkedIn articles (numbered list) | `read.articles[]` : `{ title, href }` | Add or replace entries; the list numbers itself. The Content page reads the same list. |
| Post series | `read.series[]` : `{ name, count }` | Update counts as you post. |
| Latest guide | `guide.*` | Points at `Guide.dc.html`. |

Header links: `youtube.com/@aiuxaleem` and `linkedin.com/in/aiuxaleem` are hard-coded in `AIUXAleem Home.dc.html` (section `id="content"`).

After editing, open `QA Sweep.dc.html` and `A11y Audit.dc.html` and wait for `Done · PASSED`.
