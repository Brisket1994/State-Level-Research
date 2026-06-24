#!/usr/bin/env python3
import os, glob, sys

FOLDER = "/Users/zabrisket/Documents/Summit_School_Services_MASTER/State-Level Research/01_AL-GA"

AL = "https://alison.legislature.state.al.us/code-of-alabama?section="
AK_T14 = "https://www.akleg.gov/statutesPDF/Title-14.pdf"
AK_DEED = "https://education.alaska.gov/regs/filed/4AAC_06-120(a)(2)_final.pdf"
AK_AAC = "https://www.akleg.gov/basis/aac.asp#4.03.091"
AZ = "https://apps.azsos.gov/public_services/title_07/7-02.pdf"
AR = "https://www.lexisnexis.com/hottopics/arcode/"
CO22 = "https://content.leg.colorado.gov/sites/default/files/images/olls/crs2024-title-22.pdf"
CO24 = "https://content.leg.colorado.gov/sites/default/files/images/olls/crs2024-title-24.pdf"
CT = "https://www.cga.ct.gov/current/pub/chap_164.htm#sec_10-76d"
GA = "https://www.lexisnexis.com/hottopics/gacode/Default.asp"

MAP = [
    # Alabama
    ("https://law.justia.com/codes/alabama/title-16/chapter-13b/section-16-13b-1/", AL+"16-13B-1"),
    ("https://law.justia.com/codes/alabama/title-16/chapter-13b/section-16-13b-2-1/", AL+"16-13B-2.1"),
    ("https://law.justia.com/codes/alabama/title-16/chapter-13b/section-16-13b-2/", AL+"16-13B-2"),
    ("https://law.justia.com/codes/alabama/title-16/chapter-13b/section-16-13b-3/", AL+"16-13B-3"),
    ("https://law.justia.com/codes/alabama/title-16/chapter-13b/section-16-13b-7/", AL+"16-13B-7"),
    ("https://law.justia.com/codes/alabama/title-41/chapter-16/article-3/section-41-16-50/", AL+"41-16-50"),
    ("https://law.justia.com/codes/alabama/title-41/chapter-16/article-3/section-41-16-57/", AL+"41-16-57"),
    ("https://law.justia.com/codes/alabama/title-16/chapter-27a/", AL+"16-27A-1"),
    ("https://law.justia.com/codes/alabama/title-16/chapter-27/", AL+"16-27-1"),
    # Alaska
    ("https://law.justia.com/codes/alaska/title-14/chapter-09/section-14-09-010/", AK_T14),
    ("https://codes.findlaw.com/ak/title-14-education-libraries-and-museums/ak-st-sect-14-08-101/", AK_T14),
    ("https://law.justia.com/codes/alaska/title-14/chapter-14/article-1/section-14-14-060/", AK_T14),
    ("https://regulations.justia.com/states/alaska/title-4/chapter-27/section-4-aac-27-086/", AK_DEED),
    ("https://regulations.justia.com/states/alaska/title-4/chapter-27/section-4-aac-27-006/", AK_DEED),
    ("https://regulations.justia.com/states/alaska/title-4/chapter-27/section-4-aac-27-021/", AK_DEED),
    ("https://regulations.justia.com/states/alaska/title-4/chapter-27/section-4-aac-27-990/", AK_DEED),
    ("https://regulations.justia.com/states/alaska/title-4/chapter-03/section-4-aac-03-091/", AK_AAC),
    # Arizona
    ("https://regulations.justia.com/states/arizona/title-7/chapter-2/article-10/", AZ),
    # Arkansas (all -> official Lexis AR code portal)
    ("https://law.justia.com/codes/arkansas/title-6/subtitle-2/chapter-19/section-6-19-101/", AR),
    ("https://law.justia.com/codes/arkansas/title-6/subtitle-2/chapter-19/section-6-19-102/", AR),
    ("https://law.justia.com/codes/arkansas/title-6/subtitle-2/chapter-19/section-6-19-114/", AR),
    ("https://law.justia.com/codes/arkansas/title-6/subtitle-2/chapter-13/subchapter-6/section-6-13-620/", AR),
    ("https://law.justia.com/codes/arkansas/title-6/subtitle-2/chapter-21/subchapter-3/section-6-21-301/", AR),
    ("https://law.justia.com/codes/arkansas/title-6/subtitle-2/chapter-21/subchapter-3/section-6-21-303/", AR),
    ("https://law.justia.com/codes/arkansas/title-6/subtitle-2/chapter-21/subchapter-3/section-6-21-304/", AR),
    ("https://law.justia.com/codes/arkansas/title-6/subtitle-2/chapter-21/subchapter-3/section-6-21-305/", AR),
    ("https://law.justia.com/codes/arkansas/title-6/subtitle-2/chapter-21/subchapter-3/section-6-21-306/", AR),
    ("https://law.justia.com/codes/arkansas/title-19/chapter-11/subchapter-2/section-19-11-202/", AR),
    ("https://law.justia.com/codes/arkansas/title-19/chapter-11/subchapter-2/section-19-11-203/", AR),
    ("https://law.justia.com/codes/arkansas/title-19/chapter-11/subchapter-2/section-19-11-206/", AR),
    ("https://law.justia.com/codes/arkansas/title-19/chapter-11/subchapter-2/section-19-11-238/", AR),
    ("https://law.justia.com/codes/arkansas/title-19/chapter-11/subchapter-2/section-19-11-249/", AR),
    # Colorado
    ("https://colorado.public.law/statutes/crs_22-32-122", CO22),
    ("https://colorado.public.law/statutes/crs_22-32-110", CO22),
    ("https://colorado.public.law/statutes/crs_22-32-109", CO22),
    ("https://colorado.public.law/statutes/crs_22-32-113", CO22),
    ("https://colorado.public.law/statutes/crs_22-32-127", CO22),
    ("https://colorado.public.law/statutes/crs_22-1-135", CO22),
    ("https://colorado.public.law/statutes/crs_24-101-105", CO24),
    # Connecticut
    ("https://law.justia.com/codes/connecticut/title-10/chapter-164/section-10-76d/", CT),
    # Georgia (all -> official Lexis GA code portal)
    ("https://codes.findlaw.com/ga/title-20-education/ga-code-sect-20-2-504.html", GA),
    ("https://codes.findlaw.com/ga/title-20-education/ga-code-sect-20-2-506.html", GA),
    ("https://codes.findlaw.com/ga/title-20-education/ga-code-sect-20-2-500.html", GA),
    ("https://codes.findlaw.com/ga/title-36-local-government/ga-code-sect-36-91-2.html", GA),
    ("https://codes.findlaw.com/ga/title-50-state-government/ga-code-sect-50-5-69.html", GA),
    ("https://codes.findlaw.com/ga/title-20-education/ga-code-sect-20-2-152.html", GA),
    ("https://codes.findlaw.com/ga/title-20-education/ga-code-sect-20-2-188.html", GA),
]

# Apply longest oldUrl first to avoid any partial-substring collisions.
MAP.sort(key=lambda p: len(p[0]), reverse=True)

targets = [
    os.path.join(FOLDER, "research-findings.md"),
    os.path.join(FOLDER, "source-ledger.md"),
    os.path.join(FOLDER, "verification-notes.md"),
    os.path.join(FOLDER, "challenge-matrix.md"),
] + sorted(glob.glob(os.path.join(FOLDER, "scratch", "*.json")))

grand = 0
for fp in targets:
    if not os.path.exists(fp):
        print("MISSING:", fp); continue
    with open(fp, "r", encoding="utf-8") as f:
        text = f.read()
    n = 0
    for old, new in MAP:
        c = text.count(old)
        if c:
            text = text.replace(old, new)
            n += c
    if n:
        with open(fp, "w", encoding="utf-8") as f:
            f.write(text)
    grand += n
    print(f"{os.path.basename(fp):28s} {n:4d} replacements")

print(f"\nTOTAL replacements: {grand}")

# Residual check
import re
pat = re.compile(r'justia|findlaw|nolo|public\.law|wikipedia', re.I)
print("\n=== RESIDUAL secondary-source references ===")
residual = 0
for fp in targets:
    if not os.path.exists(fp): continue
    with open(fp, "r", encoding="utf-8") as f:
        for i, line in enumerate(f, 1):
            for m in pat.finditer(line):
                residual += 1
                print(f"{os.path.basename(fp)}:{i}: ...{line[max(0,m.start()-30):m.start()+40].strip()}...")
print(f"RESIDUAL COUNT: {residual}")
