export const meta = {
  name: 'al-ga-official-url-correction',
  description: 'Replace secondary-source citation URLs (Justia/FindLaw/Public.Law) with verified official state-government code/admin-code URLs across the AL-GA deliverables',
  phases: [ { title: 'Find official URLs' } ],
}

const ASOF = '2026-06-23'

// Per-state list of secondary URLs to replace, each tagged with the citation it represents.
const WORK = {
  Alabama: {
    officialHint: 'Code of Alabama official free access via the Alabama Legislature ALISON system (alison.legislature.state.al.us / arc-sos.state.al.us). Title 16 Ch 13B, Title 41 Ch 16, Title 16 Ch 27/27A.',
    items: [
      ['Ala. Code § 16-13B-1', 'https://law.justia.com/codes/alabama/title-16/chapter-13b/section-16-13b-1/'],
      ['Ala. Code § 16-13B-2', 'https://law.justia.com/codes/alabama/title-16/chapter-13b/section-16-13b-2/'],
      ['Ala. Code § 16-13B-2.1', 'https://law.justia.com/codes/alabama/title-16/chapter-13b/section-16-13b-2-1/'],
      ['Ala. Code § 16-13B-3', 'https://law.justia.com/codes/alabama/title-16/chapter-13b/section-16-13b-3/'],
      ['Ala. Code § 16-13B-7', 'https://law.justia.com/codes/alabama/title-16/chapter-13b/section-16-13b-7/'],
      ['Ala. Code § 41-16-50', 'https://law.justia.com/codes/alabama/title-41/chapter-16/article-3/section-41-16-50/'],
      ['Ala. Code § 41-16-57', 'https://law.justia.com/codes/alabama/title-41/chapter-16/article-3/section-41-16-57/'],
      ['Ala. Code Title 16 Ch. 27', 'https://law.justia.com/codes/alabama/title-16/chapter-27/'],
      ['Ala. Code Title 16 Ch. 27A', 'https://law.justia.com/codes/alabama/title-16/chapter-27a/'],
    ],
  },
  Alaska: {
    officialHint: 'Alaska Statutes official at akleg.gov (Basis statutes.asp); Alaska Administrative Code (4 AAC) official at akleg.gov (Basis aac.asp) or Alaska Dept of Law. AS 14.09.010, AS 14.08.101, AS 14.14.060; 4 AAC 27.006/.021/.086/.990; 4 AAC 03.091.',
    items: [
      ['AS 14.09.010', 'https://law.justia.com/codes/alaska/title-14/chapter-09/section-14-09-010/'],
      ['AS 14.08.101', 'https://codes.findlaw.com/ak/title-14-education-libraries-and-museums/ak-st-sect-14-08-101/'],
      ['AS 14.14.060', 'https://law.justia.com/codes/alaska/title-14/chapter-14/article-1/section-14-14-060/'],
      ['4 AAC 27.086', 'https://regulations.justia.com/states/alaska/title-4/chapter-27/section-4-aac-27-086/'],
      ['4 AAC 27.006', 'https://regulations.justia.com/states/alaska/title-4/chapter-27/section-4-aac-27-006/'],
      ['4 AAC 27.021', 'https://regulations.justia.com/states/alaska/title-4/chapter-27/section-4-aac-27-021/'],
      ['4 AAC 27.990', 'https://regulations.justia.com/states/alaska/title-4/chapter-27/section-4-aac-27-990/'],
      ['4 AAC 03.091', 'https://regulations.justia.com/states/alaska/title-4/chapter-03/section-4-aac-03-091/'],
    ],
  },
  Arizona: {
    officialHint: 'Arizona Administrative Code official at the Arizona Secretary of State (apps.azsos.gov / administrativerules.az.gov). Title 7 Ch 2 Art 10 = School District Procurement Rules (R7-2-1001 et seq., incl. R7-2-1053 sole source, R7-2-1055 emergency, R7-2-1093 multiterm).',
    items: [
      ['A.A.C. Title 7, Ch. 2, Art. 10 (School District Procurement Rules: R7-2-1053, R7-2-1055, R7-2-1093)', 'https://regulations.justia.com/states/arizona/title-7/chapter-2/article-10/'],
    ],
  },
  Arkansas: {
    officialHint: 'Arkansas Code official access via the Arkansas General Assembly (arkleg.state.ar.us). If a clean free official deep link is unavailable, use the official LexisNexis Arkansas Code portal and note it. Titles 6 (Education) and 19 (Public Finance).',
    items: [
      ['Ark. Code Ann. § 6-19-101', 'https://law.justia.com/codes/arkansas/title-6/subtitle-2/chapter-19/section-6-19-101/'],
      ['Ark. Code Ann. § 6-19-102', 'https://law.justia.com/codes/arkansas/title-6/subtitle-2/chapter-19/section-6-19-102/'],
      ['Ark. Code Ann. § 6-19-114', 'https://law.justia.com/codes/arkansas/title-6/subtitle-2/chapter-19/section-6-19-114/'],
      ['Ark. Code Ann. § 6-13-620', 'https://law.justia.com/codes/arkansas/title-6/subtitle-2/chapter-13/subchapter-6/section-6-13-620/'],
      ['Ark. Code Ann. § 6-21-301', 'https://law.justia.com/codes/arkansas/title-6/subtitle-2/chapter-21/subchapter-3/section-6-21-301/'],
      ['Ark. Code Ann. § 6-21-303', 'https://law.justia.com/codes/arkansas/title-6/subtitle-2/chapter-21/subchapter-3/section-6-21-303/'],
      ['Ark. Code Ann. § 6-21-304', 'https://law.justia.com/codes/arkansas/title-6/subtitle-2/chapter-21/subchapter-3/section-6-21-304/'],
      ['Ark. Code Ann. § 6-21-305', 'https://law.justia.com/codes/arkansas/title-6/subtitle-2/chapter-21/subchapter-3/section-6-21-305/'],
      ['Ark. Code Ann. § 6-21-306', 'https://law.justia.com/codes/arkansas/title-6/subtitle-2/chapter-21/subchapter-3/section-6-21-306/'],
      ['Ark. Code Ann. § 19-11-202', 'https://law.justia.com/codes/arkansas/title-19/chapter-11/subchapter-2/section-19-11-202/'],
      ['Ark. Code Ann. § 19-11-203', 'https://law.justia.com/codes/arkansas/title-19/chapter-11/subchapter-2/section-19-11-203/'],
      ['Ark. Code Ann. § 19-11-206', 'https://law.justia.com/codes/arkansas/title-19/chapter-11/subchapter-2/section-19-11-206/'],
      ['Ark. Code Ann. § 19-11-238', 'https://law.justia.com/codes/arkansas/title-19/chapter-11/subchapter-2/section-19-11-238/'],
      ['Ark. Code Ann. § 19-11-249', 'https://law.justia.com/codes/arkansas/title-19/chapter-11/subchapter-2/section-19-11-249/'],
    ],
  },
  Colorado: {
    officialHint: 'Colorado Revised Statutes official free access via the Colorado General Assembly (leg.colorado.gov/colorado-revised-statutes — official CRS PDFs by title). public.law is a secondary republisher. Titles 22 (Education) and 24 (Government).',
    items: [
      ['C.R.S. § 22-32-122', 'https://colorado.public.law/statutes/crs_22-32-122'],
      ['C.R.S. § 22-32-110', 'https://colorado.public.law/statutes/crs_22-32-110'],
      ['C.R.S. § 22-32-109', 'https://colorado.public.law/statutes/crs_22-32-109'],
      ['C.R.S. § 22-32-113', 'https://colorado.public.law/statutes/crs_22-32-113'],
      ['C.R.S. § 22-32-127', 'https://colorado.public.law/statutes/crs_22-32-127'],
      ['C.R.S. § 22-1-135', 'https://colorado.public.law/statutes/crs_22-1-135'],
      ['C.R.S. § 24-101-105', 'https://colorado.public.law/statutes/crs_24-101-105'],
    ],
  },
  Connecticut: {
    officialHint: 'Connecticut General Statutes official at the Connecticut General Assembly (cga.ct.gov/current/pub). § 10-76d is in Title 10, Chapter 164.',
    items: [
      ['Conn. Gen. Stat. § 10-76d', 'https://law.justia.com/codes/connecticut/title-10/chapter-164/section-10-76d/'],
    ],
  },
  Georgia: {
    officialHint: 'Official O.C.G.A. free public access is the state-sanctioned LexisNexis portal (law.lexisnexis.com/hottopics/gacode or advance.lexis.com/container open-access Georgia Code). FindLaw is secondary. Titles 20 (Education), 36 (Local Government), 50 (State Government). If a section-level deep link cannot be fetched, return the official portal URL and note "official publisher portal; section-level deep link not directly fetchable".',
    items: [
      ['O.C.G.A. § 20-2-504', 'https://codes.findlaw.com/ga/title-20-education/ga-code-sect-20-2-504.html'],
      ['O.C.G.A. § 20-2-506', 'https://codes.findlaw.com/ga/title-20-education/ga-code-sect-20-2-506.html'],
      ['O.C.G.A. § 20-2-500', 'https://codes.findlaw.com/ga/title-20-education/ga-code-sect-20-2-500.html'],
      ['O.C.G.A. § 36-91-2', 'https://codes.findlaw.com/ga/title-36-local-government/ga-code-sect-36-91-2.html'],
      ['O.C.G.A. § 50-5-69', 'https://codes.findlaw.com/ga/title-50-state-government/ga-code-sect-50-5-69.html'],
      ['O.C.G.A. § 20-2-152', 'https://codes.findlaw.com/ga/title-20-education/ga-code-sect-20-2-152.html'],
      ['O.C.G.A. § 20-2-188', 'https://codes.findlaw.com/ga/title-20-education/ga-code-sect-20-2-188.html'],
    ],
  },
}

const SCHEMA = {
  type:'object', additionalProperties:true,
  required:['state','mappings'],
  properties:{
    state:{type:'string'},
    mappings:{ type:'array', items:{
      type:'object', additionalProperties:true,
      required:['citation','oldUrl','newUrl','status','note'],
      properties:{
        citation:{type:'string'},
        oldUrl:{type:'string'},
        newUrl:{type:'string'},
        status:{type:'string', enum:['verified','portal-only','unverified']},
        note:{type:'string'},
      }
    }}
  }
}

function brief(state, work){
  return `You are a citation-grounding analyst. As-of date: ${ASOF}. For ${state}, the research deliverables currently cite statutory/regulatory sections using SECONDARY-SOURCE URLs (Justia, FindLaw, or Public.Law). The spec forbids citing those as authority. Your job: for each section below, find the OFFICIAL state-government (or official state-sanctioned code publisher) URL, OPEN it with WebFetch/firecrawl to CONFIRM the cited section actually exists there and is the correct section, and return a replacement mapping. Do NOT fabricate a URL you did not successfully open. Use only official sources.

OFFICIAL SOURCE GUIDANCE for ${state}: ${work.officialHint}

SECTIONS TO RE-POINT (citation | current secondary URL to replace):
${work.items.map(([c,u]) => `- ${c} | ${u}`).join('\n')}

For EACH item return one mapping object:
- citation: the citation text (verbatim as given).
- oldUrl: the current secondary URL (verbatim as given, so it can be string-matched for replacement).
- newUrl: the OFFICIAL URL you actually opened and confirmed contains this section. Prefer a section-level deep link on an official .gov / official code site. If only an official portal/landing page (not a deep link) is fetchable, use that portal URL.
- status: "verified" if you opened the new URL and confirmed the exact section text is present and matches; "portal-only" if the new URL is the official publisher/portal but you could not deep-link to or render the exact section (e.g., JS-gated official Lexis portal); "unverified" if you could not locate or open any official source (in that case set newUrl to the best official portal root you know to be correct and explain).
- note: 1-2 sentences: what official source you used, what you confirmed (quote a few words of the section if verified), and any caveat. If the official code is published only by a paid official publisher with no free deep link, say so.

Return {state, mappings:[...]} with exactly one mapping per section listed above. ${state} only. Do not write files.`
}

phase('Find official URLs')
log('Re-pointing secondary-source citation URLs to verified official sources for 7 states.')

const states = Object.keys(WORK)
const results = await parallel(states.map(s => () =>
  agent(brief(s, WORK[s]), { agentType:'general-purpose', label:`urlfix:${s}`, phase:'Find official URLs', effort:'medium', schema: SCHEMA })
))

return { results: results.filter(Boolean) }
