# EACHRights SRHR Advocacy Portal — User Guide

## How to Open
Double-click `index.html` in your browser — no internet server required.

## File Structure
```
srhr-dashboard/
├── index.html        ← Landing page (open this first)
├── county.html       ← County detail pages
├── data/
│   └── counties.js  ← ALL DATA LIVES HERE — edit this to update content
├── css/
│   └── base.css     ← Styling (no need to edit)
└── docs/            ← Place county policy PDFs here
```

## How to Update Data (non-developer guide)

### Update a policy status
1. Open `data/counties.js` in Notepad or any text editor
2. Find your county (search for `"id": "homa-bay"` etc.)
3. Find the policy by name
4. Change `"status"` to: `"Adopted"`, `"In Progress"`, `"Draft"`, `"Stalled"`, or `"Enacted"`
5. Change `"impl_pct"` (implementation percentage, 0–100)
6. Save the file and refresh your browser

### Add an advocacy update
1. Go to the county page in your browser
2. Click **"+ Add New Update"** at the bottom
3. Fill in the form and click **Save Update**
4. The update appears immediately on the page
5. To make it permanent: copy the JSON shown and paste it into `data/counties.js` under the county's `"updates": [...]` array

### Attach a policy document
1. Place the PDF in the `docs/` folder (e.g. `docs/homa-bay-rh-bill.pdf`)
2. In `data/counties.js`, find the policy and update `"doc_url"` to `"docs/homa-bay-rh-bill.pdf"`
3. A download button will appear on the county page

## How to Print / Export PDF
On any county page, click the **⎙ Print / PDF** button in the top navigation.
In the print dialog, choose "Save as PDF" as the destination.

## Colors & Status Meanings
- 🟢 Green pill = **Adopted / Enacted** (policy exists and is operational)
- 🟡 Amber pill = **In Progress / Partially Implemented**
- 🔴 Red pill = **Stalled / Not Operational**
- ⬜ Grey pill = **Draft / Not Started**

## County Quick Links
- Homa Bay: `county.html?id=homa-bay`
- Migori: `county.html?id=migori`
- Kilifi: `county.html?id=kilifi`
- Kwale: `county.html?id=kwale`

## For Developers
Future upgrade: replace the static `counties.js` with a Supabase REST call.
The data model schema is in `FRAMEWORK.md`.
