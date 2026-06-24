#!/usr/bin/env python3
import os

BASE = "/Users/zabrisket/Documents/Summit_School_Services_MASTER/State-Level Research"
ANCHOR = "## Reference orchestration shape (illustrative — author the real script at run time)"

TEMPLATE = """## Execution efficiency (operational notes — do NOT change Scope, Fields, or Deliverables)

The notes below lower token and wall-clock cost without altering what is researched or written. They were learned by running batch `01_AL-GA`, and they affect only *how* sources are fetched and *which URL is recorded as the citation* — never the substantive findings, the required table, or the four deliverables. Their effect is to make the recorded citation URLs official from the first pass — the same standard batch `01_AL-GA` reached only after a separate, costly correction pass.

1. **Capture the official-source URL on the first pass.** The required citation target is always the official source (legislature / official code site, official administrative-code publisher, official register, AG opinion, official agency manual). Many official sites return **HTTP 403 / Cloudflare challenges / DNS failures to `WebFetch`**; when that happens, read the page with **firecrawl** (scrape/search) instead of dropping down to a secondary mirror. Treat Justia, FindLaw, Public.Law, and Cornell LII as **pathfinders only** — use them to locate the official text, then record the **official** URL as the citation. Doing this on the first pass avoids a post-hoc citation-correction pass (in batch `01_AL-GA` that correction cost roughly an extra ~300k tokens plus manual cleanup).

2. **Confirm each {U}'s publication regime once, then stop hunting.** Some {UP} publish their official code **only** through a paid, state-sanctioned portal (e.g., LexisNexis) with **no free section-level deep link** (in batch `01_AL-GA`: Arkansas and Georgia). When that is the case, cite the **official portal landing page** plus the exact section in the citation text, add a one-line note in the source ledger, and read the verbatim text via a republication used only as a pathfinder — do not burn repeated tool calls searching for a free official deep link that does not exist.

3. **Fetch each official document once and read every needed section from it.** Several {UP} publish the code or administrative code as **title-level PDFs** (one PDF holds many sections) or as a single consolidated regulation filing (in batch `01_AL-GA`: Alaska's Title-14 statutes PDF and one DEED regulation PDF; Colorado's title-level CRS PDFs). When the sections you need share a containing document, fetch it **once** and extract every section from it, instead of one fetch per section.

4. **Minor.** In the reduce step, if lanes have written their `{SC}` packs (per the Resilience note), the final writer can **read those packs from disk** rather than receiving all {N} inline — trimming a large synthesis prompt with no loss of content. Match reasoning effort to stage as well: the research and adversarial-validation stages carry the hard reasoning and warrant full effort, while a narrow re-verification of an already-identified citation can run cheaper — but never lower effort on the research or validation stages.

"""

VARIANTS = {
    "02_HI-MD":     dict(U="state",        UP="states",        N="ten",    SC="scratch/<state>.json"),
    "03_MA-NJ":     dict(U="state",        UP="states",        N="ten",    SC="scratch/<state>.json"),
    "04_NM-SC":     dict(U="state",        UP="states",        N="ten",    SC="scratch/<state>.json"),
    "05_SD-WY-DC":  dict(U="jurisdiction", UP="jurisdictions", N="eleven", SC="scratch/<jurisdiction>.json"),
}

for folder, v in VARIANTS.items():
    fp = os.path.join(BASE, folder, "CLAUDE.md")
    with open(fp, "r", encoding="utf-8") as f:
        text = f.read()
    if "## Execution efficiency (operational notes" in text:
        print(f"{folder}: already present — skipped")
        continue
    if text.count(ANCHOR) != 1:
        print(f"{folder}: ANCHOR count = {text.count(ANCHOR)} — SKIPPED (manual check)")
        continue
    section = TEMPLATE.format(**v)
    text = text.replace(ANCHOR, section + ANCHOR, 1)
    with open(fp, "w", encoding="utf-8") as f:
        f.write(text)
    print(f"{folder}: inserted ({len(section.splitlines())} lines added before anchor)")

print("\n=== verification ===")
for folder in VARIANTS:
    fp = os.path.join(BASE, folder, "CLAUDE.md")
    with open(fp, "r", encoding="utf-8") as f:
        t = f.read()
    print(f"{folder:13s} exec-section={t.count('## Execution efficiency (operational notes')}  anchor={t.count(ANCHOR)}  scope-list-intact={'single point of change' in t}")
