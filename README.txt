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
    assets/
        smart-start-logo.png
    README.txt

Do not move index.html into a subfolder, and do not rename any of the
smart-start-*.html files unless you also update the matching constant
inside every page's <script> block (see "Renaming files" below).

3. KEEP THE ASSETS FOLDER INTACT
-----------------------------------
The SMART Start logo lives at:

    assets/smart-start-logo.png

Every page references it with the relative path "assets/smart-start-logo.png".
If the assets folder is renamed, moved, or not uploaded, the logo will
show as a broken image on every page.

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
constant called TOOL_URLS, which drives every "Open resource" button
on the hub - update that too if you rename a file.

7. LOCALSTORAGE AND SAME-ORIGIN HOSTING
-------------------------------------------
Every tool (the Bottleneck Finder, Priority Filter, Decision Tree,
3-Box Role Builder, JD + Person Specification Template, Job Advert
Template, Interview Scorecard and 30-Day Success Checklist) saves the
visitor's in-progress work to their own browser's localStorage, so it
is still there if they come back later. The 3-Box Role Builder also
uses localStorage to hand its answers across to the JD + Person
Specification Template when someone clicks "Turn this into a job
description".

This only works reliably if every page is hosted on the SAME origin
(the same domain, e.g. all under https://<username>.github.io/<repo>/).
Hosting some pages elsewhere, or opening pages directly from a local
disk with file:// URLs instead of through the published site, will
break the saved-progress and Role Builder to JD handoff features.

No visitor data is ever sent anywhere externally - everything stays in
that visitor's own browser.
