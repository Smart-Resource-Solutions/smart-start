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
    README.txt

Do not move index.html into a subfolder, and do not rename any of the
smart-start-*.html files unless you also update the matching constant
inside every page's <script> block (see "Renaming files" below).

3. KEEP THE ASSETS FOLDER INTACT
-----------------------------------
Two images live in the assets folder:

    assets/smart-start-logo.png
    assets/support-call-photo.jpg

Every page references the logo with the relative path
"assets/smart-start-logo.png", and the homepage's Support page
references the photo the same way. If the assets folder is renamed,
moved, or not uploaded in full, those images will show as broken on
the site.

Note: support-call-photo.jpg is about 2.2MB. The site will work fine
as is, but it is worth compressing that file (any online JPEG
compressor, aiming for under 300-400KB, will do) before or after
going live, since it is by far the largest thing anyone visiting the
Support page has to download.

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

Note: smart-start-task-decision-audit.html is newer than the rest of
the package and does not yet share this same constants block or the
shared page header/footer the other nine pages use (it carries its
own, separately-styled header from a different layout). If you rename
it, the only place that needs updating right now is TASK_DECISION_AUDIT_URL
inside smart-start-bottleneck-finder.html.

The hub (index.html) also has its own list of the same URLs, in a
constant called TOOL_URLS, which drives every "Open resource" button
on the hub - update that too if you rename a file. It does not yet
include an entry for the Task and Decision Audit, since that page
isn't wired into the hub's routing or resource cards yet.

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

No visitor data is ever sent anywhere externally - everything stays in
that visitor's own browser.
