SMART START - GITHUB PAGES DEPLOYMENT
======================================

This package is a complete, self-contained static website. It needs no
build step, no server-side code and no database. Every page is plain
HTML, CSS and vanilla JavaScript.

1. CREATE A GITHUB REPOSITORY
------------------------------
Create a new repository on GitHub (public or private, either works
with GitHub Pages on a paid plan; public is required on a free plan).

2. UPLOAD THE PACKAGE WITHOUT CHANGING THE FOLDER STRUCTURE
-------------------------------------------------------------
Upload every file and folder in this package to the ROOT of the
repository, keeping the structure exactly as it is:

    index.html
    smart-start-bottleneck-finder.html
    smart-start-priority-filter.html
    smart-start-decision-tree.html
    smart-start-3-box-role-builder.html
    smart-start-jd-person-spec-template.html
    smart-start-job-advert-template.html
    smart-start-interview-scorecard.html
    smart-start-30-day-success-checklist.html
    smart-start-task-decision-audit.html
    smart-start-delegation-brief.html
    smart-start-process-audit.html
    smart-start-roles-responsibilities-map.html
    smart-start-capability-filter.html
    smart-start-freelancer-contractor-checklist.html
    smart-start-4-areas-review-before-hire.html
    assets/
        smart-start-logo.png
        support-call-photo.jpg
        smart-start-fonts.css
        fonts/      (Manrope and DM Serif Display, self-hosted)
        vendor/     (jszip.min.js, used for Word downloads)
    README.txt

Do not move index.html into a subfolder, and do not rename any of the
smart-start-*.html files unless you also update the matching constant
inside every page's <script> block (see "Renaming files" below).

3. KEEP THE ASSETS FOLDER INTACT
-----------------------------------
Every page loads its fonts from assets/smart-start-fonts.css and the
logo from assets/smart-start-logo.png. The Support view uses
assets/support-call-photo.jpg (compressed to about 115KB). The Word
download buttons load assets/vendor/jszip.min.js. If the assets folder
is renamed, moved or not uploaded in full, fonts, images or Word
downloads will break.

SMART Start makes no requests to third-party servers. The only
outbound link is the booking page, opened when a visitor clicks
Talk with us on the Support view.

4. ENABLE GITHUB PAGES
-------------------------
In the repository: Settings > Pages > Build and deployment > Source,
choose "Deploy from a branch", pick the branch you uploaded to
(usually "main") and the root folder ("/"), then save.

5. OPEN THE PUBLISHED SITE
-----------------------------
GitHub will publish the site at a URL in the form:

    https://<your-username>.github.io/<repository-name>/

It can take a minute or two after enabling Pages for the first
deployment to go live. Open that URL - it should load index.html,
the SMART Start resource hub, automatically.

6. RENAMING FILES
--------------------
GitHub Pages filenames are case-sensitive. If you rename any of the
smart-start-*.html files, you must also update the matching constant
near the top of the <script> block in EVERY page (they are kept
identical across all pages for exactly this reason):

    const SMART_START_HOME_URL = "index.html";
    const BOTTLENECK_FINDER_URL = "smart-start-bottleneck-finder.html";
    const PRIORITY_FILTER_URL = "smart-start-priority-filter.html";
    const DECISION_TREE_URL = "smart-start-decision-tree.html";
    const ROLE_BUILDER_URL = "smart-start-3-box-role-builder.html";
    const SUCCESS_CHECKLIST_URL = "smart-start-30-day-success-checklist.html";
    const JD_TEMPLATE_URL = "smart-start-jd-person-spec-template.html";
    const JOB_ADVERT_URL = "smart-start-job-advert-template.html";
    const INTERVIEW_SCORECARD_URL = "smart-start-interview-scorecard.html";

The hub (index.html) also has its own list of the same URLs, in a
constant called TOOL_URLS, which drives every resource button on the
hub. Update that too if you rename a file. The questionnaire
(smart-start-bottleneck-finder.html) has its own URL constants for
the pages it recommends.

7. LOCALSTORAGE AND SAME-ORIGIN HOSTING
-------------------------------------------
Every tool ("Where is your business getting stuck?", "What should you
focus on first?", "What's the smartest way to get the work done?",
"What does this role need to achieve?", the Job Description + Person
Specification Template, Job Advert Template, Interview Scorecard and
30-Day Success Checklist) saves the visitor's in-progress work to
their own browser's localStorage, so it is still there if they come
back later. "What does this role need to achieve?" also uses
localStorage to hand its answers across to the JD + Person
Specification Template when someone clicks "Turn this into a job
description".

This only works reliably if every page is hosted on the SAME origin
(the same domain, e.g. all under https://<username>.github.io/<repo>/).
Hosting some pages elsewhere, or opening pages directly from a local
disk with file:// URLs instead of through the published site, will
break the saved-progress and role-to-JD handoff features.

What visitors enter into the tools is not submitted to Smart Resource
Solutions. It stays in their own browser unless they choose to print,
save or download it.

8. LAUNCH SETTINGS
---------------------
index.html
    const BOOKING_URL       the live Microsoft Bookings link (set)
    const LEGAL_URLS        Privacy & Cookie Statement and Terms of Use (set)

terms-of-use.html
    Holds a placeholder. Insert the final approved Terms of Use copy
    before publication.

assets/smart-start-analytics.js
    GA_MEASUREMENT_ID       empty. Paste the real GA4 ID (starts "G-").
    hasAnalyticsConsent()   returns false. Connect it to a consent tool.
    Analytics stays completely off until BOTH are done. Events are
    prepared for: questionnaire_start, questionnaire_complete,
    shortcut_click, browse_area_click, resource_open, talk_with_us_click,
    booking_click. No answers, results or typed text are ever sent.

9. SEARCH INDEXING
---------------------
index.html, terms-of-use.html and every smart-start-*.html page carry
<meta name="robots" content="noindex, follow">. This keeps them out of
search results without blocking access. It is not access control.
The public landing page is the only page meant to be indexed. Its
robots.txt and sitemap.xml belong at the root of the site that hosts it.
