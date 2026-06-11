# Deployment Guide — The Mahir Tech

Deploy the site to **Coolify** from a **private GitHub repository** using the
included `Dockerfile`.

---

## 1. Push to a private GitHub repo

```bash
# from the project root (already git-initialised)
git add .
git commit -m "Initial commit: The Mahir Tech website"

# create a PRIVATE repo on github.com first, then:
git remote add origin git@github.com:<your-account>/the-mahir-tech.git
git branch -M main
git push -u origin main
```

> Using the `gh` CLI? `gh repo create the-mahir-tech --private --source=. --push`

---

## 2. Connect Coolify to GitHub

1. In Coolify → **Sources** → add a **GitHub App** (recommended for private repos)
   and grant it access to the `the-mahir-tech` repository.
2. Coolify → **Projects** → **+ New** → **Application** → choose the GitHub source
   and select the repo + `main` branch.

---

## 3. Configure the build

- **Build Pack:** `Dockerfile` (Coolify auto-detects the `Dockerfile` in the root).
- **Port:** `3000` (the container listens on 3000).
- **Health check path:** `/` (optional but recommended).

### Environment variables (Coolify → Environment Variables)

Add these. `NEXT_PUBLIC_*` are needed at **build time** — Coolify passes them as
build args automatically when set before the build, which the `Dockerfile`
already wires up.

| Variable                         | Required | Example / Notes                                  |
| -------------------------------- | -------- | ------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL`           | ✅       | `https://themahirtech.com` (no trailing slash)   |
| `RESEND_API_KEY`                 | ▲        | From resend.com — enables lead emails            |
| `LEAD_TO_EMAIL`                  | ▲        | `sales@themahirtech.com`                         |
| `LEAD_FROM_EMAIL`                | ▲        | `leads@themahirtech.com` (verified Resend domain)|
| `NEXT_PUBLIC_SANITY_PROJECT_ID`  | ◯        | Enables the CMS + `/studio`                      |
| `NEXT_PUBLIC_SANITY_DATASET`     | ◯        | `production`                                      |
| `NEXT_PUBLIC_SANITY_API_VERSION` | ◯        | `2024-10-01`                                     |

✅ required · ▲ recommended (leads log to console without it) · ◯ optional (CMS)

---

## 4. Domain & HTTPS

1. Coolify → the app → **Domains** → add `https://themahirtech.com` (and `www`).
2. Point your DNS `A`/`CNAME` records at the Coolify server.
3. Coolify provisions Let's Encrypt SSL automatically.
4. Make sure `NEXT_PUBLIC_SITE_URL` matches the final domain (affects canonical
   URLs, sitemap, and Open Graph).

---

## 5. Deploy

Click **Deploy**. Every push to `main` triggers an automatic redeploy
(if "auto-deploy" is enabled on the GitHub source).

---

## 6. Lead emails (Resend)

1. Create an account at [resend.com](https://resend.com) and verify the
   `themahirtech.com` domain (add the DNS records Resend gives you).
2. Create an API key → set `RESEND_API_KEY` in Coolify.
3. Set `LEAD_FROM_EMAIL` to an address on the verified domain.

Until this is configured, the contact form still works — submissions are written
to the container logs and the user is offered a WhatsApp follow-up.

---

## 7. Sanity CMS (optional)

The site ships with seed content and works without Sanity. To enable editing:

1. Create a project at [sanity.io](https://sanity.io/manage); note the **Project ID**.
2. Set `NEXT_PUBLIC_SANITY_PROJECT_ID` (+ dataset/version) in Coolify and redeploy.
3. Visit `https://themahirtech.com/studio` to log in and manage **Projects**,
   **Testimonials**, and **Blog Posts**.
4. In Sanity → **API** → **CORS origins**, add your production URL and
   `http://localhost:3000`.

Once a content type has documents in Sanity, the site automatically serves them
(with ~60s revalidation) instead of the seed data.

---

## Post-launch checklist

- [ ] `NEXT_PUBLIC_SITE_URL` set to the live domain
- [ ] SSL active, `www` → apex redirect configured
- [ ] Resend domain verified, test lead received
- [ ] Submit `https://themahirtech.com/sitemap.xml` in Google Search Console
- [ ] Verify the floating WhatsApp button opens chat with `923320006282`
- [ ] Replace placeholder project metrics & testimonials with verified content
- [ ] (Optional) Replace the generated logo monogram with official artwork in
      `src/components/brand/logo.tsx`
