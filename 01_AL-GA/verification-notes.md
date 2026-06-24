# Verification Notes — AL-GA Student Transportation Contract Rules (as of 2026-06-23)

Per-state verification notes, current-law checks, unresolved issues, and conflict checks, followed by orchestration provenance for this run.

## Alabama

**FINAL SOURCE-VALIDATION REVISIT (2026-06-23):** For each load-bearing primary citation behind the Max-Term, Rebid, and Renewal answers, I re-opened the official Justia 2025 Code text via firecrawl scrape and confirmed verbatim that each section says what the pack claims.

(1) Ala. Code § 16-13B-7(f) re-opened — verbatim text confirms: "Contracts for the purchase of personal property or contractual services shall be let for periods not greater than five years. Lease-purchase contracts for capital improvements and repairs to real property shall be let for periods not greater than 10 years and all other lease-purchase contracts shall be let for periods not greater than 10 years." VERDICT: verified.
(2) Ala. Code § 16-13B-1(a)(1) re-opened — "$40,000" threshold and "made by or on behalf of any city or county board of education...shall be made under contractual agreement entered into by free and open competitive bidding, on sealed bids, to the lowest responsible bidder" confirmed. VERDICT: verified.
(3) Ala. Code § 16-13B-2(a)(9) re-opened — "Existing contracts up for renewal for sanitation or solid waste collection, recycling, or disposal and those providing the service." VERDICT: verified.
(4) Department of Examiners of Public Accounts 2025 County/Local Manual URL on alison.legislature.state.al.us confirmed reachable; manual independently quotes § 16-13B-7(f) verbatim. VERDICT: verified.

No load-bearing citation came back "not verified" or "unreachable" after the workaround. The "alisondb" subdomain remains DNS-unreachable, but the workaround (alison subdomain + EPA manual + firecrawl-to-Justia for the official codified text) provides primary-source confirmation. WebFetch HTTP 403 on Justia was bypassed via firecrawl.

**CODE CURRENCY:** 2025 Code of Alabama. Most recent statutory amendments touching the relevant sections: Act 2023-203 ($40,000 threshold; CPI begins Oct. 1, 2027); Act 2016-298 (5-year service cap; sole-source definition). Ala. Admin. Code ch. 290-2-4 most recently amended through 2007. **SESSION-LAW CHECK:** no 2025 or 2026 enactment amends § 16-13B-1, -2, or -7 in a way that alters the 5-year cap, $40,000 threshold, or exception list (verified via ASBA 2025 Enactments, Alabama Daily News 2026 recap, LegiScan AL 2025/2026 indexes).

**NEUTRALITY:** Every field value states what the law is. No favorability, ranking, evaluative or cross-state comparative framing.

**ADVERSARIAL RESULTS:** 4 of 5 fields confirmed at High confidence (Max Term, Rebid Required, Renewal Mechanics, Special-Education differentiation). 1 field unresolved (District Variance — neither uniform application nor variance affirmatively documented). Final overall confidence: High.

## Alaska

**SOURCE-VALIDATION REVISIT (2026-06-23):** Re-opened the three load-bearing primary citations for Max-Term / Rebid / Renewal — 4 AAC 27.086, AS 14.09.010(b), and 4 AAC 03.091 — via firecrawl scrape, and confirmed each verbatim. The 4 AAC 27.086 page (current through Alaska Administrative Register, May 30, 2025) returned the exact text recorded for (a)(2), (c), and (e); the AS 14.09.010(b) page (2025 Alaska Statutes) returned the regulatory-mandate sentence verbatim; the 4 AAC 03.091 page returned the innovation/student-achievement waiver framing and the (e) carve-out for state/federal law or health-and-safety regulations.

**CURRENT-LAW CHECK:** HB 57 (Ch. 5 SLA 2025) Sec. 9 amended AS 14.09.010(a) only (per-district funding amounts effective July 1, 2025); subsection (b) is unchanged. No 2025 or 2026 session law amending 4 AAC 27, AS 14.08.101, AS 14.14.060, or AS 14.30.347 in any way that affects findings was located. The 4 AAC 27 chapter as currently structured was last comprehensively re-filed in 2014.

**UNREACHABLE SOURCES:** Touchngo.com mirror of AS 14.08.101 (502); Justia URL pattern for AS 14.08.101 (404). Substituted Findlaw mirror, which returned verbatim matching text current as of January 1, 2025. Dead links surfaced, not silently retained.

**NEGATIVE SEARCH PATHS:** Searched 4 AAC 27 (full chapter), AS 14.09, 4 AAC 03.091, DEED, akleg.gov, and Online Public Notices for any rollover/evergreen/auto-renewal/board-extension provision or any published 4 AAC 03.091 waiver extending a pupil-transportation contract — none located.

**NEUTRALITY:** Findings state what Alaska law requires; no comparative or evaluative framing.

## Arizona

**STAGE-3 SOURCE-VALIDATION REVISIT (2026-06-23):** Three load-bearing primary citations re-opened on official sources. (1) A.R.S. 15-213(L) re-fetched from azleg.gov/ars/15/00213.htm; the verbatim five-year-cap sentence and the appropriation-availability sentence were extracted and match the value/citation pair recorded in fields.maxContractTerm and fields.renewalMechanics. (2) A.R.S. 15-923(A) re-fetched from azleg.gov/ars/15/00923.htm; the "contract for vehicles and other transportation services. Contracts may be with another political subdivision, a common or contract carrier or a private party" clause re-confirmed, and the section's silence on term/rebid/renewal re-confirmed — supporting the conclusion that 15-213(L)/R7-2-1093 (not 15-923) governs those parameters. (3) A.A.C. R7-2-1093 page identity re-confirmed on the Cornell LII mirror (the substantive (A)-(F) subsection text was verbatim-confirmed in Stage 2 against TUSD Policy DJE and ASBA model DJE adoption); the AZ SOS title PDF remained HTTP 403 (surfaced in sourcesUnreachable, not silently retained). No "not verified" verdict triggered; nothing struck or re-derived.

**STAGE-1 / STAGE-2 PRIOR WORK (preserved):** Queries that mattered — "15-213 L multiterm five years school district 2025 2026 amendment"; "Arizona school district transportation contract renewal exception sole source cooperative purchasing 15-213"; "Arizona special education transportation contract procurement 15-213 OR R7-2 IEP separate rule"; "Arizona auditor general school district procurement compliance pupil transportation 15-213 multiterm"; "Arizona AG opinion school district transportation contract term renewal procurement"; "Arizona R7-2-1054 OR R7-2-1055 emergency sole source school district transportation"; "Arizona 2025/2026 session bill 15-213 OR 15-923 amendment".

**SESSION-LAW CHECK:** 57th Legislature 1st (2025) and 2nd Regular (2026) Sessions reviewed; no enacted amendment changing the multiterm cap, rebid requirement, or renewal mechanics for student-transportation contracts; SB 1246 / Laws 2025 Ch. 242 added 15-923(B) electric-school-bus preapproved carrier subsection (does not affect term/rebid/renewal).

**SCHOOL-SPECIFIC vs GENERAL PROCUREMENT:** 15-213 is the school-specific controlling authority and adopts a rule set consistent with — but distinct from — Title 41 Ch. 23.

**SPECIAL-EDUCATION NEGATIVE-SEARCH PATH:** only carve-outs located are 15-213(A)(1) and R7-2-1002(D)(8), both for private-school placement, not transportation contracts.

**DISTRICT-VARIANCE NEGATIVE-SEARCH PATH:** azag.gov opinion index (only Op. I18-012-R18-017 on vendor conflicts of interest), azauditor.gov reports/FAQs (no documented interpretive split), ADE bulletins, ASBA library — bounded one re-research pass exhausted; verdict held "unresolved" / "Unknown".

**NEUTRALITY:** Deliverable cells state what the law is; no favorability, ranking, or cross-state framing.

## Arkansas

**CURRENT-LAW CHECK (re-verified 2026-06-23):** Justia "2024 Arkansas Code" banner confirmed on every cited section. Last-amendment dates re-verified: § 19-11-238 (Act 2019, No. 418); § 19-11-249 (Act 2024, No. 167 §§ 19–22, eff. 7/1/2024); § 19-11-203 (Act 2023, No. 660, eff. 8/1/2023); § 19-11-206 (Act 2024, No. 167 § 18, eff. 7/1/2024); § 6-13-620 (Act 2023, No. 781, eff. 8/1/2023); § 6-19-102 (Act 2019, No. 910, eff. 7/1/2019); § 6-21-304 (Act 2021, No. 262, eff. 7/28/2021). Session-law check 2024–2025: Arkansas House "2025 Transportation Legislation" summary (Acts 16, 17, 117, 209, 322, 327, 528, 604) — none amend school-district transportation contracting. Administrative-code currency: all four current transportation rules (6 CAR pts. 334, 335, 336, 337; most recent 1/7/2025) re-verified via DPSAFT "Rules — Transportation".

**ADVERSARIAL CHALLENGES RUN (seven challenges):** all findings held; no field refuted. Adversarial review identified two adjacent Procurement Law sections (§ 19-11-238 multiyear cap; § 19-11-249 cooperative purchasing) and confirmed each inapplicable to school-district transportation services contracts by operation of § 19-11-203(19), (30).

**SOURCE-VALIDATION REVISIT (final pass, 2026-06-23):** The eight load-bearing primary citations (§§ 6-19-101, 6-19-102, 6-13-620, 6-21-301, 6-21-304, 19-11-203, 19-11-238, 19-11-249) were each re-opened one final time and all returned "verified." No "not verified," "partially verified," or "unreachable" verdicts among load-bearing citations; no claim required striking or re-derivation.

**NEUTRALITY:** All cells state what the law is. No evaluative framing.

**NEGATIVE SEARCH PATHS confirmed:** Max Term — full re-fetch of Ch. 19 TOC, §§ 6-21-301–6-21-307, § 6-13-620, § 19-11-238. Rebid — §§ 6-21-304, 6-21-305, 19-11-249; Title 25 Ch. 20 Interlocal Cooperation Act. Renewal — § 19-11-238(c); LEARNS Act Transportation Modernization Grant Program. District Variance — DPSAFT indices, AG-opinion searches, attempted ASBA and Little Rock District procurement manual retrieval.

**UNREACHABLE/UNVERIFIED preserved verbatim:** ASBA model-policies index (CAPTCHA); Little Rock School District procurement manual PDF (binary not parsed); AG Opinion 98-207 full text (Stage 1 relay only). None would change the load-bearing statutory findings.

## California

**SOURCE-VALIDATION REVISIT (final). All load-bearing official sources re-opened 2026-06-23 on leginfo.legislature.ca.gov:** §§39800, 39802, 39803, 39803.5, PCC §20111, §17450, PCC §20118, EDC §39875. Each statute's text matches the pack's quoted relevant text. §39803 full subdivisions (a)-(d) re-confirmed (5-year services cap; 5/10-year lease cap with annual purchase/cancel option; in-term annual renegotiation by mutual approval; §17450 cross-reference). §39803.5 full subdivisions (a)-(g) re-confirmed (15-year zero-emission services cap; 15/20-year zero-emission lease cap; same renewal mechanics; §17450 cross-reference; LEA definition; effective 1/1/2024). §39802 re-confirmed verbatim ($10,000 transportation-specific bid threshold; PCC §§20111-20112 procedural incorporation; common-carrier/municipal-transit/parent-guardian exemptions; board may award to other than lowest bidder).

Session-law check via leginfo 2025-2026 Regular Session bill database returned no amendments to §§39800/39802/39803/39803.5. Administrative code — CCR Title 5 and Title 13 govern driver/vehicle safety, not contract term or procurement. Both school-specific (Educ. Code Part 23.5) and general procurement (PCC §§20111-20112) authority re-checked; §39802 is lex specialis with a fixed $10,000 figure not subject to the §20111 inflation index ($119,100 effective 1/1/2026). Definitions — §39800(b) defines "municipally owned transit system"; §39803.5(f) defines "local educational agency." CDE Special Education Transportation Guidelines re-verified silent on procurement.

**CONFLICT/AMBIGUITY:** §39802 references PCC §§20111-20112 (which currently use a $119,100/2026 services threshold), but the controlling threshold for transportation contracts is §39802's transportation-specific $10,000 figure; the PCC cross-reference governs procedure (notice, bid opening, security), not the dollar threshold. No conflict in authority.

## Colorado

**Source-validation revisit performed 2026-06-23.** Each load-bearing primary statutory citation behind the Max-Term, Rebid, and Renewal answers was re-opened on the colorado.public.law official mirror (which reproduces leg.colorado.gov source PDFs, currency: Fall 2025): CRS 22-32-122 (verified — service contract authority with no term/rebid/renewal limits; (2) makes professional-services bidding optional; (4) requires background checks); CRS 22-32-110(1)(w) (verified — pupil-transportation contracting power with insurance requirement; no term/rebid/renewal language); CRS 22-32-109(1)(b) (verified — board must adopt competitive-bidding procedures for goods/services other than professional services); CRS 22-1-135(2)(d)(I) (verified — deemed non-appropriation clause); CRS 24-101-105(1)(a),(2) (verified — Procurement Code reaches executive-branch agencies; political subdivisions including school districts merely authorized to adopt). CRS 22-32-113 and 22-32-127 (re-verified — duty context and lease/installment scope, not contract-term/renewal of services). CASB Sample Policy DJE re-verified (Feb. 2023; local fill-ins). CDE School Transportation page and 1 CCR 301-8 (ECEA) re-verified.

**Current-law check:** no 2025-2026 amendment affecting pupil-transportation contracting authority located; CRS 22-32-110 was amended in 2024 on unrelated grounds. Justia mirrors for §§ 22-32-122 and 22-32-110 returned HTTP 403; primary citation links re-anchored to the substantively identical colorado.public.law mirror — no claim altered. Two district illustrative documents (DPS RFP BD1216; Montrose STA contract) unreachable on re-fetch (404/403) and downgraded to illustrative; district-variance finding now rests entirely on the statutory delegation in CRS 22-32-109(1)(b) and the CASB DJE local-fill-in policy.

**Negative search paths logged for:** (a) max term (Title 22/24/29, Colo. Const. Art. XI); (b) statewide mandatory rebid; (c) statutory renewal mechanics / evergreen-clause prohibitions; (d) separate SPED contracting regime; (e) Colorado AG opinion interpreting the load-bearing sections in the pupil-transportation context — none located. No finding was rejected on the adversarial pass; no field required a bounded re-research pass.

**Neutrality strip applied** — all values state what the law is; no comparative or evaluative framing. Final confidence: High.

## Connecticut

**FINAL SOURCE-VALIDATION REVISIT (2026-06-23):** Re-opened the three load-bearing primary statutory citations via direct HTTP fetch (after WebFetch SSL failure) and confirmed each verbatim. (1) CGS Sec. 10-220(a) at https://www.cga.ct.gov/current/pub/chap_170.htm — verbatim "make contracts covering periods of not more than (A) five years, or (B) ten years if such contract includes transportation provided by at least one zero-emission school bus, as defined in 42 USC 16091(a)(8), as amended from time to time" present. History line confirmed including P.A. 22-25 Sec. 12 amendment. (2) CGS Sec. 10-220 in the 2026 Supplement at https://www.cga.ct.gov/2026/sup/chap_170.htm — same operative sentence verbatim; History line adds "P.A. 25-174, S. 148, 219" with explanatory note that P.A. 25-174 amended Subsec. (d)(3)(A) only. (3) CGS Sec. 7-148v at https://www.cga.ct.gov/current/pub/chap_098.htm — "Sec. 7-148v. Requirements for competitive bidding" header confirmed; permissive "any municipality may, by ordinance, establish requirements for competitive bidding" and "$25,000" sealed-bid threshold confirmed.

**CURRENT-LAW CHECK:** Sec. 10-220(a) operative text is current through January 1, 2026 (2025 session captured); no 2023-2025 PA amends Subsec. (a).

**NEGATIVE PATHS confirmed empty:** (i) no longer-term carve-out or annual-termination override in Title 10; (ii) no school-transportation-specific bidding mandate in Title 4a, Title 7 Ch. 98, or Title 10 (Sec. 10-287(b) limited to construction); (iii) no statutory/regulatory automatic-renewal/evergreen/CPI-cap mechanism; (iv) no different special-ed contract-term/rebid/renewal rule (PA 25-67 Sec. 4 and PA 25-93 Sec. 23 are billing/template measures, not procurement mandates); (v) no AG opinion, auditor finding, SDE bulletin, or court decision documenting interpretive split.

**CONFLICTS:** None located. **NEUTRALITY:** No evaluative or comparative framing; no cross-state inference.

## Delaware

**CURRENT-LAW CHECK (executed 2026-06-23):** Delaware Code Title 14 Chapter 29 was re-fetched at delcode.delaware.gov/title14/c029/. The source-law citation trail at the foot of § 2908 is 62 Del. Laws c. 292; 63 Del. Laws c. 184; 66 Del. Laws c. 303; 67 Del. Laws c. 47; 68 Del. Laws c. 74; 70 Del. Laws c. 59; 71 Del. Laws c. 180 — most recent direct amendment to § 2908 is 71 Del. Laws c. 180 (1998). Chapter 29 more broadly amended through 82 Del. Laws c. 188 (2019), affecting §§ 2901, 2910, 2911 (not § 2908). § 2901 source-law trail through 82 Del. Laws c. 188 (2019). Title 29 Ch. 69 amendments visible through 85 Del. Laws c. 93, § 1; no session law amending § 6904(c)'s school-transportation exemption located. Title 14 Ch. 5 § 508 amendments visible through 84 Del. Laws c. 29, § 1.

**SESSION-LAW CHECK (153rd GA, 2025-2026):** Searched LegiScan and legis.delaware.gov for 152nd and 153rd GA bills with keywords "pupil transportation," "school bus contract," "school transportation," "transportation contract." No bill amending 14 Del. C. § 2908, § 2901, § 2907, or 29 Del. C. § 6904(c) located.

**FINAL SOURCE-VALIDATION REVISIT (2026-06-23):** Load-bearing primary citations 14 Del. C. § 2908 and 29 Del. C. § 6904(c) were re-opened a final time at delcode.delaware.gov; verbatim text confirmed for the subsections quoted in each field. Both verdicts: verified. Supporting citations (14 Del. C. §§ 2901(b), 2906, 2907, 508(b); 14 Del. Admin. Code §§ 1150-4.0, 1150-21.0, 1150-23.0) all verified via the same delcode.delaware.gov fetches and Cornell LII mirror.

**CHALLENGE OUTCOMES:** All five required field-level challenges plus the currency challenge ran. All substantive findings held; only the precise Del. Laws session-law list for § 2908 was corrected.

## Florida

**SOURCE-VALIDATION REVISIT (2026-06-23):** All four load-bearing primary citations re-opened a final time and verified verbatim against official sources. (1) § 1010.04(4)(a), Fla. Stat. — re-fetched from flsenate.gov; SBE rulemaking-authority text confirmed. (2) § 1006.27(1)-(2), Fla. Stat. — re-fetched from flsenate.gov; voluntary bid-pooling and bus-resale provisions confirmed; statute explicitly silent on term/renewal/bidding. (3) Fla. Admin. Code R. 6A-1.012(7) — re-fetched from flrules.elaws.us (the flrules.org official gateway page returned metadata only on this pass; the elaws.us mirror substituted as a primary-text verification source rather than retaining a dead text-retrieval URL); $50,000 threshold, piggyback, sole-source, and emergency provisions confirmed; rule silent on term/renewal cap. (4) Fla. AGO Informal Op. Apr. 25, 2001 (Duval County) — re-fetched from myfloridalegal.com; competitive-bidding conclusion confirmed verbatim. No load-bearing citation required striking or re-derivation.

**CURRENT-LAW CHECK:** Code currency confirmed against 2024 Florida Statutes (official Florida Senate publication); no 2025-2026 session-law amendments to Chapter 1006 Subpart E, Chapter 1010 Part I, or Chapter 287 affect transportation-contract terms/renewal/bidding. Rule 6A-1.012 last amended Feb. 25, 2009; Rule 6A-3.0171 last amended Dec. 21, 2025 (bus inspection manual/frequency only).

**ADVERSARIAL-VALIDATION PROVENANCE:** Florida lane only; no cross-state inference. Six challenge rows authored covering max term, rebid, renewal, special-education, district variance, and currentness; zero rejected findings; no bounded re-research pass required. Lane status: closed. Final confidence: High.

## Georgia

Final source-validation revisit performed 2026-06-23 via firecrawl scrape against codes.findlaw.com (Thomson Reuters/Westlaw republication of O.C.G.A.) and the Georgia Secretary of State official rules portal (rules.sos.ga.gov). WebFetch returned 403 on the Findlaw URLs in this final revisit; firecrawl scrape succeeded. Justia continues to be Cloudflare-blocked; codes.findlaw.com substitutes as the parallel Westlaw republication and was the actual verbatim source consulted.

**Load-bearing primary citations re-opened and confirmed:** (1) § 20-2-504 — verbatim authority-to-contract language confirmed; (2) § 20-2-506 — verbatim (b)(1) calendar-year termination/renewal, (b)(2) automatic-renewal-unless-positive-action, (b)(4) 7.5% local M&O revenue cap "excluding guaranteed energy savings contracts," and (l) separate provision for "guaranteed energy savings performance contracts" (provider selection) all confirmed; (3) Rule 160-5-3-.02 — verbatim text confirmed silent on procurement method/term/rebid/renewal; currency confirmed "through Rules and Regulations filed through June 10, 2026."

**Wording fix applied at Stage 2 retained:** (b)(4) excludes "guaranteed energy savings contracts" — Stage 1 had written "guaranteed energy savings performance contracts," which is the wording of § 20-2-506(l) (provider selection), not (b)(4) (financial cap exclusion). **Special-education citation correction retained:** SBOE rulemaking quote for transportation of students with special needs is at § 20-2-188(g), not § 20-2-152.

**Current-law check:** § 20-2-506 most recently amended 2024 Ga. Laws 459, § 9, eff. 7/1/2024; no 2025 amendment identified; HB 1094 (2026 session) addressed transportation FUNDING only and died 4/2/2026 — would not have altered the term/rebid/renewal framework even if enacted. § 20-2-504 textually stable. Rule 160-5-3-.02 substantively unchanged since repeal/replace eff. Aug. 10, 2022.

**Dual-authority check carried forward:** Title 36 Ch. 91 reaches public-works construction only (§ 36-91-2(12)), not transportation services; § 20-2-500 reaches goods only, not services; § 50-5-69 GPR posting binds state agencies only, not local boards of education; Title 50 Ch. 5 Pt. 2 (§§ 50-5-100 to 50-5-103) is opt-in cooperative purchasing.

**Negative search paths recorded:** (1) Max term — searched Title 20 Ch. 2 Art. 10, Title 50 Ch. 5 Art. 3 Pt. 2, Title 36 Ch. 91, Subject 160-5-3 for any year-cap; none found. (2) Rebid mandate — searched the same plus § 50-5-69; none found. (3) District variance — searched GaDOE, GSBA, SCSC, GA AG opinion archive; no authoritative source either way; "Unknown" recorded as documented negative result. Final confidence: High.

---

## Orchestration Provenance (this run only)

| State | Lane status | Max Contract Term | Rebid Required | Renewal Mechanics | Special Education | District Variance | Sources Re-verified | Sources Unreachable |
|---|---|---|---|---|---|---|---|---|
| Alabama | completed | confirmed | confirmed | confirmed | confirmed | unresolved | §§ 16-13B-1, -2, -2.1, -3, -7; § 16-27-6; Title 16 Ch. 27 TOC; Title 16 Ch. 27A TOC; § 41-16-50; § 41-16-57(f); Admin. Code ch. 290-2-4; ALSDE Bid Laws Summary; AASBO; UA superintendent law manual; EPA 2025 Manual; ASBA 2025 Enactments; Alabama Daily News 2026 recap | alisondb.legislature.state.al.us (DNS); law.justia.com via WebFetch (403) — workarounds via alison subdomain + firecrawl |
| Alaska | completed | confirmed | confirmed | confirmed | confirmed | confirmed | 4 AAC 27.086; AS 14.09.010(b); 4 AAC 03.091; 4 AAC 27.006; 4 AAC 27.021; 4 AAC 27.990(11); AS 14.14.060(h); AS 14.08.101(3) (Findlaw mirror); HB 57 Ch. 5 SLA 2025 enrolled text; DEED Pupil Transportation Funding; press releases (KPBSD, Mat-Su, FNSB) | touchngo.com mirror of AS 14.08.101 (502); Justia URL pattern for AS 14.08.101 (404) — substituted Findlaw |
| Arizona | completed | confirmed | confirmed | confirmed | confirmed | unresolved | A.R.S. 15-213(L); A.R.S. 15-923(A); A.A.C. R7-2-1093 (Cornell LII); A.A.C. R7-2-1002(D)(8); ASBA model DJE; TUSD Policy DJE | AZ SOS Title 7 Ch. 2 official PDF (apps.azsos.gov, 403); Auditor General FAQ (headings only); OpenGov Nogales USD RFP (403) |
| Arkansas | completed | confirmed | confirmed | confirmed | confirmed | confirmed | §§ 6-19-101, 6-19-102, 6-19-114, 6-13-620, 6-21-301, 6-21-303, 6-21-304, 6-21-305, 6-21-306, 19-11-202, 19-11-203, 19-11-206, 19-11-238, 19-11-249; Title 6 Ch. 19 TOC; DPSAFT "Laws — Transportation" index; DPSAFT "Rules — Transportation" index; Arkansas House "2025 Transportation Legislation" summary | ASBA "Model Policies" index page (reCAPTCHA); Little Rock SD procurement manual PDF (binary); AG Opinion 98-207 full text (Stage 1 relay) |
| California | completed | confirmed | confirmed | confirmed | confirmed | unresolved | Cal. Educ. Code §§39800, 39802, 39803 (subdivisions (a)-(d)), 39803.5 (subdivisions (a)-(g)), 17450, 39875; Cal. Pub. Contract Code §§20111, 20118; CDE Special Education Transportation Guidelines; 2025-2026 leginfo bill database; 2026 PCC §20111 threshold ($119,100) cross-confirmed | California AG Opinion No. 11-504 (PDF binary, non-load-bearing); CDE Bid Threshold 2025 page (bot-protected, content cross-confirmed); F3 Law CASBO Guide PDF; CSBA BP 3540 PDF (cross-confirmed via snippets) |
| Colorado | completed | confirmed | confirmed | confirmed | confirmed | confirmed | CRS 22-32-122; CRS 22-32-110; CRS 22-32-109; CRS 22-1-135; CRS 24-101-105; CRS 22-32-113; CRS 22-32-127; CASB Sample Policy DJE; CDE School Transportation; 1 CCR 301-8 (ECEA); HB22-1252 | law.justia.com mirrors of §§ 22-32-122 and 22-32-110 (403 — re-anchored to colorado.public.law); DPS RFP BD1216 (404 — illustrative only); Montrose STA contract (403 — illustrative only) |
| Connecticut | completed | confirmed | confirmed | confirmed | confirmed | confirmed | CGS Sec. 10-220 (current main volume + 2026 Supplement); CGS Sec. 7-148v; CGS Sec. 10-76d; Conn. Agencies Regs. Sec. 10-76d-19; 2022 PA 22-25 Sec. 12; 2025 PA 25-93 Sec. 23; OLR Reports 2025-R-0108, 2022-R-0139, 2017-R-0360, 2016-R-0156, 2012-R-0085; SDE School Accommodations Workshop Package; Regional School District 14 Policy 3541; Guilford BOE Transportation Policy 3600(a) | (none load-bearing) |
| Delaware | completed | confirmed | confirmed | confirmed | confirmed | confirmed | 14 Del. C. § 2908; 29 Del. C. § 6904(c); 14 Del. C. § 2907; 14 Del. C. § 2901; 14 Del. C. § 2906; 14 Del. C. § 508(b); 29 Del. C. § 6902; 14 Del. Admin. Code §§ 1150-4.0, 1150-21.0, 1150-23.0; Brandywine RFP BSD22101-TRANSPORT | law.justia.com (403 — substituted with delcode.delaware.gov); regulations.delaware.gov (renders header only — verified via Cornell LII mirror); bidcondocs.delaware.gov DOE26002 PDF (binary, non-load-bearing) |
| Florida | completed | confirmed | confirmed | confirmed | confirmed | confirmed | § 1010.04, § 1006.21, § 1006.22, § 1006.27, § 287.057, § 287.012; Fla. Admin. Code R. 6A-1.012 (via flrules.elaws.us); Fla. Admin. Code R. 6A-3.0171; Fla. AGO Apr. 25, 2001 (Duval County); Fla. AGO on board contract terms exceeding members' terms; FLDOE Appendix A; FLDOE TAP FY 2001-13; School Board of Broward County contract documentation | flrules.org official gateway page (metadata-only, substituted with flrules.elaws.us); FLDOE "Appendix A" PDF (binary, treated as confirmatory only); Miami-Dade Policy 84 PDF (empty render, non-load-bearing) |
| Georgia | completed | confirmed | confirmed | confirmed | refuted-and-corrected (citation: § 20-2-152 → § 20-2-188(g); substantive finding holds) | unresolved | O.C.G.A. § 20-2-504; O.C.G.A. § 20-2-506 (subsections (b)(1)-(4), (c)(1), (g), (l)); Ga. Comp. R. & Regs. R. 160-5-3-.02; O.C.G.A. § 36-91-2 (Stage 2); O.C.G.A. § 20-2-500 (Stage 2); O.C.G.A. § 50-5-69 (Stage 2); O.C.G.A. § 20-2-152 (Stage 2); O.C.G.A. § 20-2-188 (Stage 2); GaDOE Division of Pupil Transportation | law.justia.com (Cloudflare bot protection — statutory text re-verified via codes.findlaw.com parallel Westlaw republication); scsc.georgia.gov Contracting Best Practices PDF (binary, non-load-bearing); doas.ga.gov § 50-5-69 PDF (binary, substituted) |

## Final QC Checklist

- [x] Every state has all five fields populated (documented silent/not-found/unknown counts as populated): 10/10.
- [x] Every unresolved District-Variance field appears in Exceptions / Unresolved Issues with its negative search path (Alabama, Arizona, California, Georgia; plus Arkansas, Connecticut, Delaware where also recorded as Unknown documented negative).
- [x] Every substantive Max-Term / Rebid / Renewal answer carries a citation.
- [x] No secondary summary cited as authority — primary statutes, regulations, AG opinions, and official agency manuals carry every load-bearing finding; tier-4 and tier-5 sources are corroborative only.
- [x] Mandatory bias / neutrality strip applied: deliverables state what the law is. No favorability, ranking, "better/worse", or cross-state comparison anywhere. Only aggregate permitted is the descriptive QC tally.
- [x] Cross-state consistency sweep (format only): uniform schema; ten rows in the required table each have seven populated cells; labels uniform.
- [x] Re-read of each written file confirmed completion.
- [x] No silent fallback fired during this run; no field required a bounded re-research pass in synthesis. Georgia's special-education citation refutation occurred at adversarial stage, was corrected within the same pack, and the substantive finding held.

## Post-Synthesis Citation-Grounding Correction Pass (2026-06-23)

After synthesis, a dedicated correction pass re-pointed every citation URL in the deliverables from secondary-source republications (Justia, FindLaw, Public.Law — used as text pathfinders during research when official sites returned 403/Cloudflare/DNS errors) to official sources, one agent per affected state (Alabama, Alaska, Arizona, Arkansas, Colorado, Connecticut, Georgia), each re-opening the official source to confirm the cited section text:

- **Re-opened and confirmed on the official source (section text rendered):** Alabama — Alabama Legislature ALISON Code of Alabama deep links; Alaska — official Alaska Legislature Title 14 statutes PDF (statutes) and Alaska DEED filed-regulation PDF (4 AAC 27 sections); Arizona — Arizona Secretary of State A.A.C. Title 7 Ch. 2 PDF; Colorado — Colorado General Assembly OLLS CRS 2024 Title 22 and Title 24 PDFs; Connecticut — Connecticut General Assembly chapter 164 (cga.ct.gov).
- **Official portal cited, no free section-level deep link available (verbatim text confirmed during research via secondary republication used only as a pathfinder):** Arkansas — official Arkansas Code Annotated is published exclusively via the state-sanctioned LexisNexis portal; Georgia — Official Code of Georgia Annotated (O.C.G.A.) is published exclusively via the state-sanctioned LexisNexis portal (Georgia Code Revision Commission). Alaska 4 AAC 03.091 likewise cites the official akleg.gov administrative-code portal (JS-gated, designated by DEED Administrative Order 360).

All 47 distinct citation URLs were re-pointed (110 occurrences across the four deliverables and the per-state scratch packs); a residual scan confirms zero secondary-source URLs remain in any deliverable. Prose references to Justia/FindLaw that remain in this file and in `challenge-matrix.md` are method documentation (recording access errors and pathfinder use), not citations relied upon as authority.
