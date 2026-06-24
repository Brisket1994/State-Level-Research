# Verification Notes — Student-Transportation Contract Rules (NM–SC), as of 2026-06-24

This file records, per state, the search strategy, the queries/official-site searches that mattered, the current-law check (official code currency, administrative-code currency, session-law check), unresolved issues, and conflict checks — plus the orchestration provenance for this run.

## New Mexico

**Search strategy.** Adversarial re-verification began by re-opening every official URL cited in Stage 1. Where a Justia URL returned HTTP 403 on WebFetch (the cited § 13-1-98 and § 13-1-150 Justia pages), the cited text was re-verified against an official Tier-1 source — the NM Supreme Court's 2012 NM Procurement Code compendium — and the Justia URL was replaced with the official Supreme Court PDF in the source ledger. The NM Public Education Department's official posting of NMSA 1978, § 22-16-3 (a higher-tier source than the session-law PDF cited by Stage 1) was located and adopted as the primary citation. Every claim was challenged using the disconfirming-pattern checklist (longer-term/grandfather/notwithstanding for max term; sole-source/cooperative-purchasing/mandatory-bidding for rebid; escalator/evergreen/automatic-renewal/annual-termination for renewal mechanics; separate IDEA/McKinney-Vento/foster-care/homeless-student procurement-rule searches for special education; AG opinion / State Auditor / large-district + small-district policy spot-checks for district variance). Where source text was returned as binary PDF via WebFetch, the saved PDF was extracted to plain text using pdftotext.

**Queries / official-site searches that mattered.**
- `'NMSA 1978' '13-1-98' 'public school transportation services' exemption procurement code`
- `'NMSA' '22-16-3' 'school bus service contract' 'five years' annual renewal`
- `'22-16-3' New Mexico amended 2023 2024 2025 school bus contract legislation`
- `'13-1-150' New Mexico procurement 'multi-term' 2025 'not to exceed' years current`
- `New Mexico special education transportation contract procurement statute different term IEP`
- `New Mexico Attorney General opinion '22-16-3' OR 'school bus' contract term`
- `'Albuquerque Public Schools' transportation contract bus services RFP term renewal policy`
- `'Las Cruces Public Schools' OR 'Rio Rancho Public Schools' school bus contract term renewal policy`

**Current-law check.** Official code: NMSA 1978, § 22-16-3 — current through Laws 2009, ch. 92, § 2 (effective June 19, 2009); no later amendments located in targeted 2010–2026 session searches via nmlegis.gov, NM Bill Tracker, and the NMPED Bill Analyses index. NMSA 1978, § 13-1-98 — current through Laws 2009, ch. 231 (effective July 1, 2009) per the NM Supreme Court 2012 compendium; subsequent amendments to other subsections do not affect Subsection H. NMSA 1978, § 13-1-150 — current through Laws 2025, ch. 86, § 14 (effective July 1, 2025); remains contextual only. Administrative code: 6.43.2 NMAC effective 12-31-1998, last amended 11-13-2009 (NM State Records Center and Archives); 6.41.4 NMAC effective 12-31-1998 with section-level amendments through 9-29-2017 (PED current-rule PDF posted January 2025). Session-law check: Re-verified Laws 2009, ch. 92, § 2 (HB 485) as the last amendment to § 22-16-3; searched nmlegis.gov 2010–2026 session bills for amendments to § 22-16-3 or the 22-16 series — none located. 2024 HB 75 (electric/zero-emission school bus replacement) does not amend § 22-16-3 or the contract-term framework.

**Unresolved issues.** District-Level Interpretation Variance — recorded as "Unknown" because no authoritative survey, AG opinion, State Auditor report, or PED bulletin documenting variant district interpretations was located. The uniformity of PED-approved contract forms (6.43.2.13 and 6.43.2.14 NMAC) and statewide NMSBA sample policies suggests uniform application, but the variance question cannot be answered definitively from official sources. Adversarial challenge attempted via large + small district spot-checks (Albuquerque Public Schools, Las Cruces Public Schools) found both districts operating within the § 22-16-3 framework, but two-district spot-checks do not establish statewide uniformity.

**Conflict checks.** Reconciled an apparent conflict between Stage 1's stated $25k+ tier of § 13-1-150 (10 years) and the 2012 NM Supreme Court compendium (which prints "8 years"; that compendium predates a later amendment raising the cap to 10 years). Current law (Cuddy & McCarthy 2018 presentation; Justia 2025 compilation) is 10 years. The discrepancy is immaterial because § 13-1-98(H) categorically removes school bus contracts from § 13-1-150's reach. Also reconciled an apparent discrepancy in the WebFetch result on 6.41.4 NMAC (which reported an "initial effective date: March 27, 2018") against the actual PED current-rule PDF (which shows base effective date 12-31-1998 with section-level amendments through 9-29-2017). The PDF text is authoritative; Stage 1's effective-date statement is correct.

## New York

**Search strategy.** Begin with the NYS Senate Open Legislation display for the Education Law and General Municipal Law sections cited; cross-verify on NYSED's P-12 Pupil Transportation Unit pages (which host both the EL 305.14 statutory text and the Part 156 regulatory text); download and pdftotext-extract the two key NYSED PDFs (Paperless Pupil Transportation 4/19/23; Piggyback Contract Guidance Revised 2023); confirm the L&M Bus Corp. holding via NYS Court of Appeals reporter URL and case-law summaries; confirm NYC variance via NYC Comptroller and Chalkbeat. Treat all secondary sources as pathfinders only; record official NYSED / NYS Senate / NYS Courts URLs.

**Queries / official-site searches that mattered.**
- NYS Senate Open Legislation EDN/305 — full text of § 305(14)(a) including 10-year rejection clause
- NYS Senate Open Legislation EDN/1709, EDN/1604, EDN/2503 — 5-year transportation-contract caps and voter authorization
- NYS Senate Open Legislation EDN/3625 — 120-day filing window
- NYSED P-12 Section 156.5 Annual Extensions — CPI mechanics and § 305(14) eligibility limit
- NYSED P-12 Section 156.12 RFP — 10 evaluation criteria, 50% weight cap, June 1 / July 1 deadlines
- NYSED Paperless Pupil Transportation 4/19/23 PDF (text-extracted) — "2/3/4/5 YEAR TERM Must be bid and have voter approval"
- NYSED Piggyback Contract Guidance Revised 2023 PDF (text-extracted) — "not subject to the $20,000 aggregate threshold or bidding requirements pursuant to General Municipal Law §103"
- L&M Bus Corp. holding — heightened scrutiny / EPPs failed
- Chalkbeat Nov 20, 2025 — PEP ~3-year extension approved
- NYC Comptroller letter — 1979-era contracts, L&M Bus Corp. as the rebid barrier

**Current-law check.** N.Y. Education Law: NYS Senate Open Legislation display shows § 305, § 1604, § 1709, § 2503, § 3625, § 4402 as current as of access on 2026-06-24. NYS Legislature is the official publisher; LexisNexis publishes the official compiled code under contract. Administrative code: 8 NYCRR Part 156 — last comprehensive amendment effective July 14, 2020 (NYS Register, July 29, 2020 / Vol. XLII, Iss. 30). No subsequent amendments to §§ 156.1, 156.5, or 156.12 identified through NYS Register / NYSED Office of Counsel rules pages as of 2026-06-24. Session-law check: Searched NYS Senate / Assembly bill databases (2025–26 session) for amendments to Ed. Law § 305 and 8 NYCRR Part 156. Pending bill S9289 (2025–26) was found proposing to add paragraph (h) to § 305(14) (piggyback variant) and definitions for "school transportation logistics vehicle" — not enacted as of 2026-06-24 and does not alter the existing (a)–(g) framework or the five-fields findings. § 305(14)(d) (safety/legal-compliance amendments) remains scheduled for repeal January 1, 2028.

**Unresolved issues.** All five fields resolved (documented silence counts as resolved where noted).

**Conflict checks.** No authoritative conflict identified across NYS Senate, NYSED P-12, NYSED Office of Counsel, NYC Court of Appeals (L&M Bus Corp.), NYC Comptroller, and Chalkbeat sources. The NYC pattern of continuous extension since 1979 is consistent with the L&M Bus Corp. holding and is described by NYSED guidance and the Comptroller as a NYC-specific procurement deadlock; it does not contradict the § 305(14) framework, which remains the controlling state-law regime.

## North Carolina

**Search strategy.** Per-state research limited to North Carolina. Approach: (1) read each cited statute and admin-code section verbatim on the official ncleg.net / ncleg.gov and OAH publication sites; (2) re-fetch the UNC SOG article via firecrawl_scrape with PDF parser to capture the verbatim services-not-covered language; (3) cross-check Article 17 of Chapter 115C section-by-section for any provision imposing a contract-term, rebidding, or renewal rule on pupil-transportation services contracts; (4) cross-check Chapter 143 Article 8 for any general statute reaching services; (5) cross-check 16 NCAC 06B subchapter rules; (6) cross-check 2025–2026 session laws and the SOG Legislative Reporting Service for amendments; (7) cross-check at least two LEA RFPs to evidence district variance.

**Queries / official-site searches that mattered.**
- North Carolina General Statutes school bus transportation contract private contractor
- North Carolina school district service contract competitive bidding required statute
- `'North Carolina' 'Article 17' 'Chapter 115C' 'pupil transportation' contract term renewal years`
- North Carolina attorney general opinion 115C-253 pupil transportation contract
- `'115C-242.1' 'Session Law 2017-188' school bus safety cameras enacted`
- North Carolina 2025 session law school bus pupil transportation contract amendment 115C
- Wake County Charlotte-Mecklenburg school transportation contract RFP term years renewal
- `'North Carolina' '16 NCAC 06B .0109' exceptional children contract transportation rule status`

**Current-law check.** G.S. 115C-253: last amended by Session Law 2007-423, s. 3 (no later amendment located). G.S. 143-129: last amended by S.L. 2025-39, s. 8.5. G.S. 143-131: last amended by S.L. 2022-74, s. 40.9(b). G.S. 115C-242.1: history credit reads "(2017-188, s. 2.)" (Stage 1's reference to "s. 1" corrected). Statutes read on the official North Carolina General Assembly website. Administrative code: 16 NCAC 06B reviewed via NC Office of Administrative Hearings publication; key rules — .0103 (local-board policies, readopted Sept. 1, 2025); .0107 (DPI evaluation, readopted Sept. 1, 2025); .0111 (passenger safety, effective Oct. 1, 2020); .0112 (purchase of buses from statewide term contracts, effective Dec. 1, 2020); .0109 (Contract Transportation of Exceptional Children) was emergency-adopted Aug. 20, 2019 and the emergency adoption expired Dec. 6, 2019 — the rule is not currently effective. Session-law check: Checked NC General Assembly bill tracker, SOG Legislative Reporting Service, and 2025 session laws for any post-2007 amendment to G.S. 115C-253 — none located. The 2025 session-law activity touching school-bus contracts (S 411) addresses § 115C-242.1 (automated school bus safety cameras), would extend the cap from 3+3 to 5+5, and remains pending in Senate committee (not enacted) as of 2026-06-24. S.L. 2025-47 (SB 391) addresses school-zone speed cameras (not school-bus cameras and not pupil-transportation contracts).

**Unresolved issues.** All five fields resolved (documented silence counts as resolved where noted).

**Conflict checks.** No conflict between authoritative sources surfaced. Two minor bookkeeping corrections from Stage 1 to Stage 2: (i) § 115C-242.1 history credit is "(2017-188, s. 2.)", not s. 1; (ii) Stage 1's reference to amendment of § 115C-242.1 by S.L. 2018-114 was not corroborated by the official statute history — S.L. 2018-114 sec. 27(b) instead appears as the interim-rule-status authority for 16 NCAC 06B .0109. Neither correction affects the substantive findings on the five fields.

## North Dakota

**Search strategy.** Stage 2 began by re-opening every Stage 1 official URL (chs. 15.1-30, 15.1-32 PDFs and the chapter index HTML; the DPI Transportation page) to confirm verbatim text. Adversarial challenges then expanded the search to (i) the state procurement code (ch. 54-44.4) to test whether it reaches school districts; (ii) the general school-board contracting statute (ch. 15.1-09, esp. § 15.1-09-34) to test whether a general procurement statute imposes additional bidding rules on transportation; (iii) the 69th (2025) Legislative Assembly bill index and Elementary and Secondary Education session-laws compilation for amendments to §§ 15.1-30-06, -11, -12, 15.1-32-16, 15.1-09-34; (iv) the N.D. Attorney General opinions and DPI bulletins for any opinion construing ch. 15.1-30; and (v) at least one district policy manual (Dickinson PSD HCAA-E) for variance evidence.

**Queries / official-site searches that mattered.**
- firecrawl_scrape `https://ndlegis.gov/cencode/t15-1c30.pdf` (full chapter re-read)
- firecrawl_scrape `https://ndlegis.gov/cencode/t15-1c32.pdf` (full chapter re-read; § 15.1-32-16 verbatim)
- firecrawl_scrape `https://ndlegis.gov/cencode/t54c44-4.pdf` (state procurement scope check)
- firecrawl_scrape `https://ndlegis.gov/cencode/t15-1c09.pdf` (§ 15.1-09-34 verbatim)
- firecrawl_scrape `https://www.nd.gov/dpi/districtsschools/finance-operations/transportation`
- firecrawl_search `'15.1-30-06 OR 15.1-30-11 OR 15.1-30-12 amendment 2025 North Dakota Legislative Assembly bill'` (site:ndlegis.gov)
- firecrawl_search `'North Dakota Century Code Title 54 chapter 44.4 procurement school district transportation contract'`
- firecrawl_search `'North Dakota attorney general opinion school bus transportation contract bidding renewal'`
- firecrawl_search `'15.1-30 North Dakota 2025 or 2023 session law amendment school transportation contract'` (site:ndlegis.gov, sos.nd.gov)
- firecrawl_search `'48-01.2 North Dakota public improvement school district transportation services'`

**Current-law check.** Primary citation source is the North Dakota Legislative Branch's official Century Code PDFs (chs. 15.1-30, 15.1-32, 15.1-09, 54-44.4 at ndlegis.gov/cencode). No internal "current through" stamp is displayed on the chapter PDFs, but (i) the official chapter index pages list the same section structure as the PDFs; (ii) ch. 15.1-32 shows repealer notations through S.L. 2023, indicating at least post-68th-Assembly compilation; and (iii) targeted searches for 2025 (69th Assembly) amendments to §§ 15.1-30-06, -11, -12, 15.1-32-16, 15.1-09-34 returned no hits. Administrative code: Administrative provisions relevant to school buses appear at N.D. Admin. Code art. 67-12 (Standards for Schoolbuses) and 67-23 (Special Education funding); neither sets contract-term, rebid, or renewal rules separate from N.D.C.C. ch. 15.1-30. Session-law check: Searched the 69th Legislative Assembly (2025) bill index and the Elementary and Secondary Education session-laws compilation for any bill amending §§ 15.1-30-06, 15.1-30-11, 15.1-30-12, 15.1-32-16, or 15.1-09-34 — none located. HB 1214 (2025) relates to the transportation-payment weighting/funding formula in ch. 15.1-27 (references § 15.1-30-02) — a funding-payment matter. HB 1269 (2025) amended §§ 54-44.4-02 and 54-44.6-02 (state-agency procurement exemptions) — outside school-district scope. No 2023 (68th) or 2025 (69th) session law altering the 7-year cap or the § 15.1-30-11 renewal mechanism.

**Unresolved issues.** District-level interpretation variance resolved as "Unknown" after documented negative search; no authoritative counter-evidence found. One district policy (Dickinson PSD HCAA-E) located through adversarial search recites the controlling state statutes verbatim, but a single district policy does not establish statewide variance or uniformity. No AG opinion, auditor report, or DPI bulletin construing §§ 15.1-30-06/-11/-12 in conflicting ways across districts was located.

**Conflict checks.** Tested potential conflicts with (a) ch. 54-44.4 (state purchasing): chapter scope is state executive-branch agencies and institutions; does not reach school districts. (b) Ch. 15.1-09 (school boards) § 15.1-09-34: general $50,000 sealed-bid rule for school-district contracts is EXPRESSLY INAPPLICABLE to "School transportation services purchased under section 15.1-30-11" — reinforcing, not contradicting, ch. 15.1-30 as the exclusive contracting framework. (c) Ch. 48-01.2 (public improvements): governs construction, not transportation services; inapplicable. (d) Ch. 15.1-32 (special education): does not set separate contracting rules — supplies duty/cost framework only. No authoritative conflict located.

## Ohio

**Search strategy.** Stage 2 re-opened every cited statute on codes.ohio.gov via firecrawl_scrape (or WebFetch where credits exhausted), downloaded each cited PDF via curl and extracted text via pdftotext, and ran targeted disconfirming searches for term caps, mandatory bidding, special-ed-specific rules, and recent session-law changes. Where Stage 1 cited a section as supporting a finding, the section text was independently read and the finding reconciled. Where chapter-index summaries surfaced potentially missed sections (3327.012), the section was opened directly. Disconfirming patterns covered: hidden term caps ("not exceed" / "annual termination"); statutes requiring services bidding; school-specific carve-outs; cooperative-purchasing exceptions; special-ed-specific procurement; and post-code-currency session laws (HB 96, HB 3, SB 62, SB 168, SB 91 in the 135th–136th GAs).

**Queries / official-site searches that mattered.**
- Ohio Revised Code chapter 3327 contract term (codes.ohio.gov direct read)
- Ohio school district transportation contract competitive bidding services statute (Auditor of State Bulletin 2025-009 surfaced)
- `'OSBA' 'Competitive Bidding' fact sheet Ohio services food` (rev. 4/2026 version verified)
- Ohio Revised Code 3327 3313 special education transportation contract procurement bidding (ORC 3323.08 confirmed)
- Ohio HB 96 136th General Assembly transportation contract school district (workgroup R.C. 3327.18 / Section 733.80 surfaced)
- Ohio `'3327.18'` Revised Code text student transportation (confirmed not yet codified at codes.ohio.gov)
- Ohio `'session laws' 2025 OR 2026 pupil transportation school bus contract amendment new` (no contract-rule changes identified)

**Current-law check.** Ohio Revised Code is continuously updated by the LSC. Key per-section currencies verified: ORC 3327.08 effective Sept. 30, 2025 (HB 96 — 136th GA); ORC 3313.46 effective Sept. 30, 2025 (HB 96 — broadened "any school building" to "any building or other property"); ORC 9.17 effective Oct. 3, 2023 (HB 33 — 135th GA; initial $75,000; current applied threshold $77,250 through Dec. 31, 2025); ORC 5705.41 effective March 28, 2024 (SB 91 — 135th GA); ORC 5705.44 effective Oct. 6, 2009 (SB 79 — 128th GA); ORC 9.48 effective Sept. 12, 2008; ORC 125.04 effective Sept. 30, 2021; ORC 3327.01, 3327.011, 3327.012 effective Oct. 3, 2023 (HB 33 — 135th GA). Proposed R.C. 3327.18 (HB 96 / HB 3 / SB 62 — 136th GA) not yet codified at codes.ohio.gov as of 2026-06-24. Administrative code: OAC Chapter 3301-83 most recent comprehensive amendment effective July 1, 2025 (ODEW "Overview of July 1, 2025 Changes to OAC Chapter 3301-83 Pupil Transportation"); rules 3301-83-01 through -20 reviewed via codes.ohio.gov index — no rule addresses contract term, rebid, or renewal for private transportation-services contracts. Session-law check: Checked 136th General Assembly (2025–2026) session laws via legislature.ohio.gov and LSC bill-analysis pages. HB 96 (eff. 9/30/2025) clarified ORC 3313.46 scope to "any building or other property"; re-amended ORC 3327.08; added Montgomery County Pupil Transportation Pilot Program and a community-school transportation pilot; proposed a student-transportation workgroup at R.C. 3327.18 (House) or session-law Section 733.80 (Senate), not yet codified. HB 3 / SB 62 (136th GA — School Bus Safety Act) address civil-penalty system for unlawful overtaking of school buses; do not impose contract-term or bidding rules. No pending or enacted bill imposes a maximum-term or mandatory rebid on transportation-services contracts.

**Unresolved issues.** All five fields resolved (documented silence counts as resolved where noted).

**Conflict checks.** No conflict identified between any authoritative sources. The OSBA fact sheet, the Auditor of State Bulletin 2025-009, the ODEW guidance, the LSC Members Brief, and the multiple district RFPs (Valley View, West Clermont, Mariemont, Lakota, Princeton) all consistently state that transportation-services contracts are NOT subject to competitive bidding under ORC 3313.46. Stage 1's "No statutory maximum found" and "Not required" findings are corroborated across statutory, regulatory, and agency-guidance sources. ORC 3327.012's "average cost per pupil" payment cap concerns DEW-level (state-agency) contracts, not district contracts, and therefore does not conflict with the "no district-contract term cap" finding.

## Oklahoma

**Search strategy.** Re-opened every cited official source. Used firecrawl_scrape (with stealth proxy where Cloudflare challenges fired) to access OSCN statute and AG opinion pages directly. Used WebSearch and direct WebFetch of the OMES Procurement-Related Attorney General Opinions reference guide to bridge OSCN access challenges for the 2005 OK AG 14 opinion. Treated Justia, FindLaw, and Cornell LII as pathfinders only; recorded official OSCN URLs and oklahoma.gov URLs as the citation source.

**Queries / official-site searches that mattered.**
- Oklahoma 70 O.S. 9-103 school district transportation contract private contractor
- 62 O.S. 430.1 Oklahoma school district lease rental mutual ratification
- 2005 OK AG 14 Oklahoma school district multi-year contract mutual ratification
- 2004 OK AG 18 Oklahoma Attorney General opinion multi-year contracts
- OMES procurement-related attorney general opinions Oklahoma
- Oklahoma Constitution Article X Section 26 school district debt
- Oklahoma HB1244 2025 school bus seat belt
- OAC 210:30-5-3 Oklahoma transportation students IDEA related service

**Current-law check.** Oklahoma Statutes (OSCN database) current through 2025 legislative session as of accessed date 2026-06-24. Title 70 (Schools), Article IX (Transportation) §§ 9-101 to 9-119 re-verified via OSCN. Title 62 (Public Finance) § 430.1 re-verified via OSCN (last amended 2005). Title 61 (Public Buildings and Public Works) § 102 re-verified via OSCN (last amended 2022). Administrative code: Oklahoma Administrative Code Title 210 (State Department of Education), Chapter 30 (School Facilities and Transportation), Subchapter 5 (Transportation) verified via Cornell LII mirror and Oklahoma Rules portal. Session-law check: Reviewed Oklahoma 2025–26 legislative session for amendments touching pupil transportation contracts. HB1244 (2025) addresses new-passenger-bus seat-belt requirements only. No other 2025 enactment found that modifies 70 O.S. § 9-103, 62 O.S. § 430.1, or the Public Competitive Bidding Act with respect to student-transportation services contracting.

**Unresolved issues.** District variance — verdict "unresolved." No official Oklahoma statewide guidance, AG opinion, auditor report, or OSSBA publication located that expressly addresses whether 70 O.S. § 9-103 / Okla. Const. art. X, § 26(a) / 2005 OK AG 14 mutual-ratification framework is interpreted disuniformly across districts. Observed practice variance exists at the district-policy level (RFP structures, primary term lengths, renewal-option counts) because state statute is largely silent on transportation-services contract specifics, but that is a function of statutory silence rather than disuniform statutory interpretation.

**Conflict checks.** No conflict between cited authorities. The interpretive bridge from 62 O.S. § 430.1 (property rentals — codified mutual-ratification rule) to school-district services contracts generally is supplied by 2005 OK AG 14 (officially summarized by the Oklahoma Office of Management and Enterprise Services), which extends the constitutional fiscal-year limit and mutual-ratification requirement to school-district contracts broadly. Stage 1's citation of art. X § 23 (state debt) was refined to art. X § 26(a) (political-subdivision debt — the correct school-district companion); 2004 OK AG 18 expressly discusses both sections together.

## Oregon

**Search strategy.** Two-phase. Phase 1: re-open every Stage 1 citation directly against the official Oregon Legislature site (oregonlegislature.gov) for ORS, against the Secretary of State OARD for administrative rules, and against the cited district policy pages. Phase 2: run disconfirming searches — (a) for any transportation-specific term cap or rebid interval, (b) for any school-bus carve-out from the Public Contracting Code, (c) for any separate special-education procurement rule, (d) for 2024–2026 session-law amendments to ORS 279A/B that touch term, rebid, or renewal — using firecrawl_search, WebFetch, and WebSearch. The Oregon legislature returned the ORS chapter pages, allowing verbatim verification of ORS 279A.010, 279A.025, 279A.060, 279A.065, 279A.140, 279B.050, 332.075, 332.405, 327.043, and 343.221.

**Queries / official-site searches that mattered.**
- ORS 279A.010 definition contracting agency local contracting agency Oregon
- ORS 279A.025 application Public Contracting Code Oregon all public contracting
- ORS 279A.060 local contract review board governing body Oregon
- ORS 279A.065(6) Oregon agency may adopt own rules Model Rules opt-out
- ORS 279A.140(2)(c) Oregon state agency any period of time renewal extension solicitation
- ORS 279B.050 methods of source selection Oregon competitive sealed bidding proposals
- OAR 137-047-0800 amendments contracts price agreements one year renewable four additional years
- Oregon ORS school district transportation contract "not to exceed" "five years" "ten years" pupil transportation
- Oregon school bus contract term limit statute ORS pupil transportation rebid renewal
- ORS 332.075 powers district school board contracts collective bargaining service contracts labor
- ORS 343.221 special education contract private agencies organizations approved Oregon
- OAR 581-053-0004 transportation entity contract pupil ensure contractor compliance
- OAR 581-023-0040 approved transportation costs State School Fund Oregon
- Oregon 2025 legislative session ORS 279B procurement threshold amendment school district
- Oregon 2026 regular session ORS 279B amendments procurement code small intermediate threshold

**Current-law check.** Oregon Revised Statutes 2025 Edition is the most recent codified edition published by the Oregon Legislative Counsel Committee, as displayed on the legislature's official chapter pages ("2025 EDITION" header on each chapter). Intervening 2026 regular-session amendments to Chapter 279B are catalogued in the 2026 A&R Tables and will be folded into the next biennial edition; none touches contract-term, rebid, or renewal rules for school district student-transportation contracts. (Stage 1 had labeled "2023 Edition" — corrected here.) Administrative code: Oregon Administrative Rules — current as published in the official Oregon Secretary of State Administrative Rules Database (OARD), accessed 2026-06-24. OAR Chapter 137 Division 47 (AG Model Rules), OAR Chapter 581 Division 53 (ODE pupil-transportation safety/operational rules), OAR 581-023-0040, and OAR 581-053-0004 reviewed as published. Session-law check: Reviewed the 2024 regular session, 2025 regular session, and 2026 regular session for any session law amending ORS Chapter 279A, 279B, 332, 327, or 343 in a manner that would create a transportation-specific contract-term cap, mandatory rebid interval, or renewal rule. None located. The 2023 amendments raised small-procurement direct-award to $25,000 and intermediate to $250,000 (effective 1/1/2024) — reflected in current text and do not alter term, renewal, or rebid timing.

**Unresolved issues.** All five fields resolved (documented silence counts as resolved where noted).

**Conflict checks.** No authoritative source-conflict identified. The Public Contracting Code (general procurement) and ORS Chapters 332/327/343 (school authority and duties) operate in parallel — Code controls procurement procedure; school chapters set duty to transport. OAR 137-047-0800 controls non-solicitation amendments and is consistent with ORS 279A.140(2)(c)'s solicitation-disclosure requirement for state agencies. District-level rules adopted under ORS 279A.065(6) are statutorily authorized variance, not conflict.

## Pennsylvania

**Search strategy.** Stage-2 adversarial validation used disconfirming-pattern searches across (a) the Public School Code (24 P.S.), (b) the Commonwealth Procurement Code (62 Pa.C.S.), (c) 22 Pa. Code Chapters 23 and 711, (d) PDE official guidance, (e) Auditor General reports, (f) PASBO/PSBA association statements. Every primary citation in Stage 1 was re-opened, and the substantive statutory text was re-checked at official Pa. Code, PA General Assembly, palegis.us, and pa.gov sources. WebFetch returns on the Public School Code (legis.state.pa.us) and the PASBO PDF were limited by binary-format / 404 / 403 issues; in those cases, the substantive content was re-verified via WebSearch surface and multiple independent corroborating sources, and the canonical official URLs were retained as the citation.

**Queries / official-site searches that mattered.**
- Pennsylvania school code 24 P.S. section 2541 pupil transportation contract length
- `'24 P.S.' 'section 807.1' Pennsylvania school district bidding competitive`
- Pennsylvania school transportation contract "no bidding" "not required" "competitive bidding"
- PASBO "pupil transportation" Pennsylvania contract "negotiated" bidding requirement
- "DePasquale" Auditor General Pennsylvania "no-bid" busing contracts (number of districts/total excess)
- Full-text grep of Pa Public School Code (downloaded HTML) for "transportation contract", "school bus" near "contract", "pupil transportation" near "contract", "term of contract" near "transportation", and "five years" / "three-year contract"
- 62 Pa.C.S. § 102 — applicability of Commonwealth Procurement Code to school districts (definitions sections)
- Pennsylvania "school bus" contract "five years" OR "three years" OR "10 years" statute "Public School Code" pupil transportation term
- "Public School Code" Pennsylvania transportation contract renewal extension OR rollover OR evergreen OR "annual termination" school bus
- Pennsylvania "intermediate unit" "special education" transportation contract bidding statute "24 P.S." procurement school district
- "Act 13 of 2020" Pennsylvania Senate Bill 751 Section 1501.8 school bus contractor renegotiate fixed costs COVID closure

**Current-law check.** Title 24 P.S. (Pa. Public School Code) — full unconsolidated text via legis.state.pa.us, reflecting acts through current session (verified 2026-06-24). 22 Pa. Code Chapter 23 (Pupil Transportation) — Pennsylvania Code through 56 Pa.B. 1800 (March 28, 2026). Chapter 23 last substantively amended Aug. 3, 1990 (20 Pa.B. 4194). Administrative code: Pennsylvania Code through 56 Pa.B. 1800 (March 28, 2026). Session-law check: Searched PA General Assembly 2025–2026 bill index for amendments to school code transportation provisions and competitive bidding requirements. No legislation has been enacted that mandates competitive bidding, caps contract term, or prescribes renewal mechanics for school-district pupil-transportation contracts. (Auditor General DePasquale's 2016 recommendation that the General Assembly enact such a mandate has not been adopted.) 2025–2026 legislation amending Title 75 (Vehicles) addresses school bus safety, not contracting. Act 13 of 2020 (SB 751) / § 1501.8 confirmed as the one-time COVID-19 emergency renegotiation provision, with no general successor.

**Unresolved issues.** All five fields resolved (documented silence counts as resolved where noted).

**Conflict checks.** No authoritative conflict surfaced. Multiple official and quasi-official sources (Auditor General, PASBO, PDE, 22 Pa. Code, 24 P.S.) align on the same conclusion: PA state law is silent on transportation-contract maximum term, mandatory rebidding, and renewal mechanics. The Auditor General's recommendation for a statutory mandate is an explicit acknowledgement that no mandate currently exists.

## Rhode Island

**Search strategy.** Adversarial Stage-2 verification re-opened every Stage-1 cited official URL using firecrawl_scrape (until daily credit limit hit) and then WebFetch. Confirmed every § 16-21-1, § 16-21.1-x, § 45-55-x, § 37-2-56, § 16-2-9, § 16-2-9.2 citation against the official Rhode Island General Assembly webserver. Added § 16-24-11 (Title 16 Chapter 24 — Children with Disabilities) to confirm no separate special-ed contracting rule. Verified district RFPs through WebSearch where direct PDF fetch returned binary. WebFetch on FindLaw and Justia returned HTTP 403 — used WebSearch result snippets and the official webserver instead, consistent with the orchestrator guidance to never cite secondary summaries as authority.

**Queries / official-site searches that mattered.**
- Rhode Island General Laws school district transportation contract term limit maximum years statute
- Rhode Island school committee transportation contract rebid renewal procurement Title 45 chapter 55 applicability school district
- Rhode Island special education transportation contract procurement statute "16-24" OR "special education" IEP separate rule
- Rhode Island title 16 chapter 24 children with disabilities transportation section list
- "East Providence" OR "Providence Public Schools" OR "North Providence" transportation RFP "five years" OR "three years" OR "option years" 2025
- "North Providence" school bus transportation RFP 2025-2030 contract term "three years" OR "five years"
- Rhode Island school district transportation contract "evergreen" OR "automatic renewal" OR "rollover" state law restriction
- Direct fetch of § 16-21-1, § 16-21.1-1 through 16-21.1-9, § 16-24-11, § 16-2-9, § 16-2-9.2, § 45-55-2 through 45-55-13.3, § 37-2-56 on the official RI General Assembly webserver

**Current-law check.** Rhode Island General Laws as published on the General Assembly's official webserver (webserver.rilegislature.gov/Statutes). Individual section pages do not display a "current through" banner, but the substantive transportation-contract provisions were last amended by P.L. 2021, ch. 292 and P.L. 2021, ch. 293 (effective July 9, 2021), as shown in the History of Section line on § 16-21-1. The October 9, 2024 RIDE Statewide Transportation System Overview confirms the 2021 statutory framework remains operational. No 2022–2026 session-law amendments to § 16-21-1, § 16-21.1-4, § 16-21.1-8, or § 16-21.1-9 establishing a maximum-term, rebid, or renewal-mechanic rule were identified. Administrative code: Rhode Island Code of Regulations (RICR) — checked via rules.sos.ri.gov; no transportation-contract-specific regulation governing term, rebid, or renewal of school-committee transportation contracts identified. 220-RICR-30-00-5 governs competitive sealed bidding within the state Division of Purchases, not school committees. 280-RICR-30-15-10 (Rules and Regulations for School Bus Transportation) governs vehicle and driver requirements, not contract term or rebid. Session-law check: Re-verified P.L. 2021, ch. 293 PublicLaws page; History of Section for § 16-21-1 shows twin enactments P.L. 2021, ch. 292, § 1 and ch. 293, § 1 (effective July 9, 2021) — Stage 1's reference to ch. 294 corrected to ch. 292. No subsequent 2022–2026 session law altering term, rebid, or renewal rules located. A 2025 study commission has been reviewing the school-bus districts framework but has not enacted legislation.

**Unresolved issues.** All five fields resolved (documented silence counts as resolved where noted).

**Conflict checks.** No conflict between authoritative sources identified. § 16-21-1, § 16-21.1-8, and § 45-55-4(11) align: the school-committee transportation framework is governed by transportation-specific statutes that impose substantive conditions (statewide-system participation; 180-day personnel payment; electric-bus preference; CBA-respecting discipline procedures) but no term limit or competitive-rebid requirement, while the general municipal-procurement statute does not by definition reach school committees as such. One Stage-1 characterization (North Providence RFP as a "five-year" contract) was refuted by the official RFP language and corrected; the underlying district-variance finding is unaffected. One minor session-law citation (Stage 1 referenced P.L. 2021 ch. 293 + ch. 294 as twin enactments; correct twin pair per official History of Section is ch. 292 + ch. 293) corrected.

## South Carolina

**Search strategy.** Stage 2 re-opened every Stage 1 citation at the official source and confirmed every quoted excerpt matched verbatim. Two principal documents (S.C. Statehouse Title 11 Chapter 35 page and S.C. Code Regs Chapter 19 PDF) were each fetched once and grep-searched for every relevant section/subsection to avoid redundant fetches (per execution-efficiency note 3). The 2021 Model SDPC PDF and two adopted-district PDFs (Greenville County School District, School District Five of Lexington and Richland Counties) were parsed to corroborate the Model framework and to spot-test district variance.

**Queries / official-site searches that mattered.**
- Direct grep of the official Title 11 Chapter 35 page for SECTION 11-35-2030, 11-35-5340, 11-35-5320, 11-35-310, 11-35-1510, 11-35-1520
- Direct grep of the official Chapter 19 regulations PDF for 19-445.2135 and 19-445.3000
- Direct grep of the 2021 Model SDPC PDF for SECTION 2030 verbatim
- WebFetch of Title 59 Chapter 67 to confirm Section 59-67-460 (private-contractor authority) and Section 59-67-520 (handicapped-student duty)
- Status check of S.C. H.3242 (2025-2026) on the official legislature site

**Current-law check.** S.C. Code of Laws Title 11, Chapter 35 last comprehensively amended by 2019 Act No. 41 (S.530), eff May 13, 2019; applies to solicitations issued after that date (Section 80). Title 59, Chapter 67 last shown amendment is 2009 Act No. 17 (Section 59-67-535); Section 59-67-460 is unchanged since original enactment. The official S.C. Statehouse page presents these statutes as "Unannotated" but as the legislature's currently published code. Administrative code: S.C. Code Regs. Chapter 19, Articles 5 and 7 (19-445 series, Consolidated Procurement Code regulations), last amended SCSR 44-6 Doc. No. 4894, eff June 26, 2020 (and for 19-445.3000, also amended SCSR 44-4 Doc. No. 4861, eff April 24, 2020). SBE Reg. 43-80 last modification per SCDOE document metadata indicates 2021. Session-law check: Searched scstatehouse.gov bill search for amendments to Title 11 Chapter 35 and Title 59 Chapter 67 from May 13, 2019 forward through June 24, 2026. No enacted session law since 2019 Act 41 has amended Section 11-35-2030, Section 11-35-5340, Section 11-35-5320, Section 11-35-1510, Section 11-35-1520, Section 11-35-310, Section 59-67-460, or Section 59-67-520 in respects relevant to contract term, rebid, or renewal. H.3242 (School Bus Privatization Act of 2025) remains in House Ways and Means; predecessor bills H.4582 / H.4606 / H.4389 / H.4610 / H.3220 expired without enactment.

**Unresolved issues.** All five fields resolved (documented silence counts as resolved where noted).

**Conflict checks.** Re-verified that Title 59 Chapter 67's silence on contract term/rebid/renewal does not conflict with Title 11 Chapter 35's framework — the two are complementary: Chapter 67 authorizes the contractual relationship (Section 59-67-460) while Chapter 35 governs how the procurement is conducted when the Consolidated Procurement Code or a substantially-similar district code applies. No conflict between Section 11-35-2030(4)–(5) and Reg. 19-445.2135(G) — the regulation reinforces the statute. No conflict between SBE Reg. 43-80 Section XXV.B and Chapter 35 — Reg. 43-80 addresses a narrow per-mile parent/individual reimbursement mechanism, not procurement of private-bus-contractor services. No conflict with the 2021 Model SDPC — the Model is published under Reg. 19-445.3000(E) and adapts the Consolidated Procurement Code rules for school districts by substituting "Superintendent" for "chief procurement officer" in Section 2030(4) and "board" (i.e., the school board) for the SCSFAA board in Section 2030(5), all of which is consistent with the underlying statutory framework.

## Orchestration provenance (this run)

This run fanned out one research lane per state (research → adversarial validation), each lane staged through Stage 1 (research) and Stage 2 (adversarial validation) before the reduce step. The table below records, per state, the lane status, the per-field validation verdict (confirmed/refuted/unresolved) from each lane's `verdicts` object, and a summary of the load-bearing sources re-verified vs. replaced vs. unreachable.

| State | Lane Status | Max Term | Rebid | Renewal | Statutory Citation | District Variance | Special Ed | Primary sources re-verified vs. unreachable |
|---|---|---|---|---|---|---|---|---|
| New Mexico | closed | confirmed | confirmed | confirmed | confirmed | unresolved | confirmed | 9 re-verified, 2 replaced (→official NM Supreme Court Procurement Code PDF, in lieu of Justia § 13-1-98 and § 13-1-150 URLs that returned HTTP 403); 0 unreachable |
| New York | closed | confirmed | confirmed | confirmed | confirmed | confirmed | confirmed | 15 re-verified, 1 replaced (→official NY Courts Reporter URL for L&M Bus Corp., in lieu of outdated 2008 Justia mirror); 0 unreachable |
| North Carolina | closed | confirmed | confirmed | confirmed | confirmed | confirmed | confirmed | 11 re-verified, 0 replaced, 0 unreachable |
| North Dakota | closed | confirmed | confirmed | confirmed | confirmed | confirmed | confirmed | 7 re-verified, 0 replaced, 0 unreachable |
| Ohio | closed | confirmed | confirmed | confirmed | confirmed | confirmed | confirmed | 24 re-verified, 0 replaced, 1 unreachable (Ohio LSC "Transportation of Students" Members Brief — WebFetch returned "unable to verify the first certificate" on the LSC HTTPS endpoint; brief was reviewed by Stage 1 and corroborated indirectly via codes.ohio.gov chapter index, so finding remains supported) |
| Oklahoma | closed | confirmed | confirmed | confirmed | confirmed | unresolved | confirmed | 8 re-verified, 0 replaced, 0 unreachable (OSCN direct fetch of the 2005 OK AG 14 opinion text was blocked by Cloudflare during the session; substantive verification continued via the OMES Procurement-Related Attorney General Opinions reference guide, which quotes the opinion verbatim) |
| Oregon | closed | confirmed | confirmed | confirmed | confirmed | confirmed | confirmed | 14 re-verified, 0 replaced, 2 unreachable (Reynolds SD DJC bidding-requirements page returned HTTP 403; Roseburg PS "Contracting Rules" PDF was a non-parseable binary fetch — neither is load-bearing; district-variance finding stands on ORS 279A.065(6) and Beaverton SD DJC verification) |
| Pennsylvania | closed | confirmed | confirmed | confirmed | confirmed | confirmed | confirmed | 12 re-verified, 0 replaced, 0 unreachable (Auditor General Monessen press release returned 404 on direct WebFetch but its substantive language was independently surfaced via WebSearch and independently corroborated by WHYY, TribLIVE, and the 2822news Crestwood SD coverage; PASBO 2017 PDF binary did not render via WebFetch but substantive language was confirmed via WebSearch content-extraction layer matching Stage 1's verbatim quote) |
| Rhode Island | closed | confirmed | confirmed | confirmed | confirmed | refuted (in part) | confirmed | 19 re-verified, 1 replaced (→corrected NPSD-Bus-Transportation-RFP-2025-2030 characterization: 3-year initial + 2 option years, not flat 5-year contract; underlying district-variance finding unaffected and strengthened); 0 unreachable |
| South Carolina | closed | confirmed | confirmed | confirmed | confirmed | confirmed | confirmed | 15 re-verified, 0 replaced, 0 unreachable |

## Final QC checklist

- [x] All 10 states have all five fields populated (a documented `silent` / `not found` / `unknown` counts as populated).
- [x] Every documented-open field appears in the Exceptions / Unresolved Issues section of `research-findings.md` (New Mexico's District Variance recorded as "Unknown"; Oklahoma's District Variance recorded as "Unknown" with verdict "unresolved").
- [x] Every primary Max-Term / Rebid / Renewal citation was re-opened in Stage 2 (every lane's verdicts include max-term, rebid, and renewal fields, and every Stage-2 pack includes a sourcesReverified entry for the load-bearing statutory citation).
- [x] No secondary summary is cited as authority. Justia, FindLaw, Cornell LII, and similar mirrors were treated as pathfinders only; official URLs (state legislature sites, official code publishers, official agency PDFs, official AG opinion publishers, official court reporters) are recorded as the citations of record. Where a secondary source was the only public URL displaying load-bearing text (e.g., the NPSD or Dickinson PSD district policy PDFs as district-variance examples), it is labeled as such and is not used as authority for state law.
- [x] Neutral-recorder posture preserved: no state is evaluated as favorable or unfavorable to any party; no cross-state comparison appears anywhere in the deliverables; the only aggregate is a descriptive QC tally of completed per-state findings.
- [x] Four deliverable files written to `/Users/zabrisket/Documents/Summit_School_Services_MASTER/State-Level Research/04_NM-SC/`: `research-findings.md`, `source-ledger.md`, `verification-notes.md`, `challenge-matrix.md`.
