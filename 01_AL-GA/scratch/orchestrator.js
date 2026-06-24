export const meta = {
  name: 'al-ga-student-transport-contract-rules',
  description: 'Fan-out research: student-transportation contract rules for AL-GA (10 states) -> research -> adversarial validation -> source-validation revisit -> synthesis writes 4 deliverables',
  whenToUse: 'Documenting current state law on public-school student-transportation contracts across 5 fields for the 10 AL-GA states.',
  phases: [
    { title: 'Research' },
    { title: 'Validate' },
    { title: 'Source revisit' },
    { title: 'Synthesis' },
  ],
}

const ASOF = '2026-06-23'
const FOLDER = '/Users/zabrisket/Documents/Summit_School_Services_MASTER/State-Level Research/01_AL-GA'
const STATES = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia']

// ---------- Schemas ----------
const FIELD = (extra) => ({ type:'object', additionalProperties:true, required:['value','citation'], properties:{ value:{type:'string'}, citation:{type:'string'} } })
const LEDGER_ITEM = {
  type:'object', additionalProperties:true,
  required:['sourceTier','citation','url','fieldsSupported','relevantText','accessedDate'],
  properties:{
    sourceTier:{type:'string'}, citation:{type:'string'}, url:{type:'string'},
    codeCurrency:{type:'string'}, fieldsSupported:{type:'string'},
    relevantText:{type:'string'}, accessedDate:{type:'string'}
  }
}
const FIELDS_OBJ = {
  type:'object', additionalProperties:true,
  required:['maxContractTerm','rebidRequired','renewalMechanics','statutoryCitation','districtVariance'],
  properties:{
    maxContractTerm: FIELD(),
    rebidRequired: FIELD(),
    renewalMechanics: FIELD(),
    statutoryCitation: { type:'object', additionalProperties:true, required:['value','url'], properties:{ value:{type:'string'}, url:{type:'string'} } },
    districtVariance: FIELD(),
  }
}
const VERDICTS_OBJ = {
  type:'object', additionalProperties:true,
  required:['maxContractTerm','rebidRequired','renewalMechanics','specialEducation','districtVariance'],
  properties:{
    maxContractTerm:{type:'string', enum:['confirmed','refuted','unresolved']},
    rebidRequired:{type:'string', enum:['confirmed','refuted','unresolved']},
    renewalMechanics:{type:'string', enum:['confirmed','refuted','unresolved']},
    specialEducation:{type:'string', enum:['confirmed','refuted','unresolved']},
    districtVariance:{type:'string', enum:['confirmed','refuted','unresolved']},
  }
}
const CHALLENGE_ITEM = {
  type:'object', additionalProperties:true,
  required:['findingChallenged','disconfirmingHypothesis','challengeSearches','result','confidenceImpact'],
  properties:{
    findingChallenged:{type:'string'}, disconfirmingHypothesis:{type:'string'},
    challengeSearches:{type:'string'}, result:{type:'string'}, confidenceImpact:{type:'string'}
  }
}

const STAGE1_SCHEMA = {
  type:'object', additionalProperties:true,
  required:['state','fields','specialEducation','sourceLedger','verificationNotes','confidence','unresolvedFields'],
  properties:{
    state:{type:'string'},
    fields: FIELDS_OBJ,
    specialEducation:{type:'string'},
    sourceLedger:{type:'array', items: LEDGER_ITEM},
    verificationNotes:{type:'string'},
    confidence:{type:'string', enum:['High','Medium','Low']},
    unresolvedFields:{type:'array', items:{type:'string'}},
  }
}

const STAGE2_SCHEMA = {
  type:'object', additionalProperties:true,
  required:['state','fields','specialEducation','fieldVerdicts','challengeMatrix','sourceLedger','verificationNotes','confidence','unresolvedFields'],
  properties:{
    state:{type:'string'},
    fields: FIELDS_OBJ,
    specialEducation:{type:'string'},
    fieldVerdicts: VERDICTS_OBJ,
    challengeMatrix:{type:'array', items: CHALLENGE_ITEM},
    sourcesReVerified:{type:'array', items:{type:'string'}},
    sourcesUnreachable:{type:'array', items:{type:'string'}},
    sourceLedger:{type:'array', items: LEDGER_ITEM},
    verificationNotes:{type:'string'},
    confidence:{type:'string', enum:['High','Medium','Low']},
    unresolvedFields:{type:'array', items:{type:'string'}},
  }
}

const STAGE3_SCHEMA = {
  type:'object', additionalProperties:true,
  required:['state','tableRow','fields','specialEducation','fieldVerdicts','challengeMatrix','sourceValidationRevisit','sourceLedger','verificationNotes','notesSpecialProvisions','exceptionsUnresolved','confidence'],
  properties:{
    state:{type:'string'},
    tableRow:{
      type:'object', additionalProperties:true,
      required:['maxContractTerm','rebidRequired','renewalMechanics','statutoryCitation','districtVariance','confidence'],
      properties:{
        maxContractTerm:{type:'string'}, rebidRequired:{type:'string'},
        renewalMechanics:{type:'string'}, statutoryCitation:{type:'string'},
        districtVariance:{type:'string'}, confidence:{type:'string'}
      }
    },
    fields: FIELDS_OBJ,
    specialEducation:{type:'string'},
    fieldVerdicts: VERDICTS_OBJ,
    challengeMatrix:{type:'array', items: CHALLENGE_ITEM},
    sourceValidationRevisit:{type:'array', items:{
      type:'object', additionalProperties:true,
      required:['citation','url','verdict','note'],
      properties:{ citation:{type:'string'}, url:{type:'string'}, verdict:{type:'string'}, note:{type:'string'} }
    }},
    sourcesReVerified:{type:'array', items:{type:'string'}},
    sourcesUnreachable:{type:'array', items:{type:'string'}},
    sourceLedger:{type:'array', items: LEDGER_ITEM},
    verificationNotes:{type:'string'},
    notesSpecialProvisions:{type:'string'},
    exceptionsUnresolved:{type:'string'},
    confidence:{type:'string', enum:['High','Medium','Low']},
  }
}

// ---------- Briefs ----------
function researchBrief(state){
  return `You are a NEUTRAL legislative research analyst with live web search (WebSearch), web fetch (WebFetch), and firecrawl scrape/search skills and filesystem read access. You are assigned to ${state} ONLY. As-of date for every "current law" claim: ${ASOF}.

MISSION: Identify and accurately record the content of ${state}'s statutes, education code, procurement code, local-government contracting statutes, and administrative regulations governing CONTRACTS for STUDENT TRANSPORTATION SERVICES (including school-bus contracts) between PUBLIC SCHOOL DISTRICTS and PRIVATE CONTRACTORS. You are a recorder of law, NOT an advocate. Do NOT evaluate whether the framework is favorable or unfavorable to any party. Do NOT research or compare any other state. Record EXACTLY what the governing authority says — do not infer, assume, extrapolate, or fill gaps based on what "most states" do. If the statute/regulation is silent, SAY SO and record what you searched.

FIELDS TO DOCUMENT FOR ${state}:
1. Max Contract Term (years): the longest single award term a public school district may contractually agree to with a private student-transportation/school-bus contractor. Note multi-phase structures (e.g., "5 years + 5-year renewal option"). If a hard cap, state it. If silent on a maximum, state "No statutory maximum found". If a multi-year term is allowed but either party may terminate with annual notice, state explicitly "X years with annual termination permitted".
2. Rebid Required at Term-End?: at expiration of the awarded term, must the district run a competitive process (sealed bidding, RFP, RFQ, competitive negotiation, or any statutorily mandated competitive selection) to retain or re-award? BEGIN the value with one label — "Required", "Not required", or "Conditional" — then state the statutory rule briefly.
3. Renewal Mechanics: if renewal without a full competitive rebid is permitted, describe the mechanism precisely. Look explicitly for one-year extensions, CPI/index adjustments, fuel escalators, automatic rollover/evergreen renewal, mutual written agreement, agency approval, and board approval. If none exists, state "N/A".
4. Statutory Citation: cite the EXACT primary legal source establishing Fields 1-3. Acceptable: official state statutes, education code, procurement code, local-government contracting statutes, administrative code, official education-department regulations, official state register/session laws, attorney-general opinions, and official state-education-department guidance that cites binding authority. If a transportation-specific provision AND a general procurement provision both apply, cite both. If a general procurement statute applies only because school districts fall within a definition, cite the definition section too. DO NOT cite a secondary legal summary as authority. Put the primary official URL in fields.statutoryCitation.url.
5. District-Level Interpretation Variance?: "Yes" + concise explanation if credible evidence shows the same statute is interpreted differently across districts; "No" only if official statewide guidance or other reliable evidence indicates uniform application; "Unknown" if no evidence either way was found after searching. Search education-department bulletins, state-auditor reports, AG opinions, school-boards-association guidance, procurement manuals, and district policy manuals that cite the relevant statute.

SPECIAL-EDUCATION DIFFERENTIATION: Check whether ${state} law sets DIFFERENT term limits, rebid requirements, procurement rules, or renewal mechanics for special-education transportation, IEP-mandated transportation, McKinney-Vento transportation, foster-care transportation, alternative student transportation, or vendors serving students with disabilities. DO NOT assume special-ed transportation follows the regular-route rule. If federal law (IDEA/McKinney-Vento) is relevant only to the DUTY to transport and does not change state contract/procurement rules, say so in the notes rather than treating it as a contracting rule. Put findings in specialEducation.

SOURCE HIERARCHY (prefer the highest available tier for every substantive answer):
1. Codified state statute (state legislature or official code publisher).
2. State administrative code / education-department regulation.
3. State attorney-general opinion interpreting the relevant statute.
4. Official state-education-department guidance or procurement manual citing a specific statute/regulation.
5. State school-boards-association guidance or district policy manual citing a specific statute/regulation.
If no authoritative source is locatable, state "Not located" and explain what was searched.

MINIMUM RESEARCH FLOOR & CURRENT-LAW CHECK (complete before finalizing any answer):
1. Identify the official code source and record its currency/effective/"current through" date (in the relevant ledger row's codeCurrency). If none visible, record "Official code currency not visible".
2. Check the official session-law/bill/act source for amendments AFTER the code-currency date, using terms such as: school bus, pupil transportation, student transportation, transportation contract, procurement, public contract, competitive bidding, school district.
3. Check the official administrative code/register for transportation and procurement regulations; record currency.
4. Check BOTH school-specific transportation authority AND generally applicable procurement/local-government contracting authority. Document why any general procurement authority does or does not apply to school districts.
5. Check definitions sections that control applicability (school district, board of education, local education agency, public agency, political subdivision, procurement unit, supplies, services, professional services, public works).
6. Check at least one official education-agency, procurement-agency, attorney-general, auditor, or school-boards-association source for implementation guidance or variance clues.
7. For any field left "No statutory maximum found", "Statute silent", "Not found", or "Unknown", record the NEGATIVE SEARCH PATH in verificationNotes: the official databases searched and the exact concepts searched.

RESEARCH METHOD: Start broad, then narrow to OFFICIAL sources. Adapt these queries to ${state}: "school bus contract term limit", "pupil transportation contract renewal", "student transportation services contract competitive bidding", "school district transportation contract procurement", "education code transportation contract", "public school transportation private contractor", "school bus RFP renewal term", "school district piggyback cooperative purchasing transportation", "special education transportation contract procurement". OPEN AND READ the actual authority (use WebFetch/firecrawl on the official .gov/official-code URL) before recording any rule; locate the official version of any referenced section. DO NOT rely on snippets, AI summaries, FindLaw, Justia, Nolo, Wikipedia, blogs, news, vendor pages, or RFP examples AS AUTHORITY (you may use them only as pathfinders to official law). Do not conflate general municipal procurement with school-bus contracting unless the statute explicitly reaches school districts, boards of education, local education agencies, or the specific transportation contract. If only district RFPs (not a statute) support a term/renewal practice, record it as DISTRICT PRACTICE or variance, NOT as state law. Preserve evidence as you go (official URLs, access dates "${ASOF}", short quoted text). On conflict between authoritative sources, report both and flag low confidence. On silence, write "Statute silent — no explicit provision found" or "No statutory maximum found" and list what was searched.

CONFIDENCE (assign one provisional value; validation finalizes it): High = you read the exact official statute/regulation text, it directly answers the main fields, the current-law check is documented; Medium = authoritative agency guidance/official manual found, or codified text ambiguous/unavailable/partly responsive; Low = sources conflict, applicability unclear, or search incomplete.

RETURN: a schema-validated pack for ${state} only. Each of the five fields gets a value + supporting citation (statutoryCitation also gets the primary official url). Populate specialEducation, the sourceLedger array (one row per source you actually opened, with sourceTier 1-5, citation, official url, codeCurrency, fieldsSupported, a short relevantText quote/paraphrase, accessedDate=${ASOF}), verificationNotes (queries that mattered, code/admin-code currency, session-law check result, negative search paths), a provisional confidence, and unresolvedFields (any field not definitively answered). Do NOT write any files.`
}

function validateBrief(state, draft){
  return `You receive Stage-1's research pack for ${state}. As-of date: ${ASOF}. Your job is to try to DISPROVE it, re-verify every citation, and return the reconciled FINAL pack for ${state} only. You have WebSearch, WebFetch, firecrawl scrape/search, and filesystem read. Do NOT research any other state. EMPIRICAL WARNING: general-purpose models reproduce state-statute citations correctly only ~36% of the time and hallucinate legal answers in a large share of cases — so RE-OPEN EVERY SOURCE; never trust a remembered or paraphrased citation.

STAGE-1 PACK (JSON):
${JSON.stringify(draft)}

DO THIS:
1. RE-OPEN EVERY CITED SOURCE. Fetch each official URL/citation in the pack (WebFetch/firecrawl) and confirm the text EXISTS and SAYS what Stage 1 claimed. If a citation cannot be located in an official source, treat it as a RED FLAG (not a glitch): mark it unverified and require replacement with a real official source or removal of the claim. Track which sources re-verified (sourcesReVerified) vs. unreachable (sourcesUnreachable).
2. CHALLENGE EVERY FIELD. Produce challengeMatrix rows. Include AT LEAST ONE challenge row for EACH of: max term, rebid requirement, renewal mechanics, special-education differentiation, district variance. Apply the disconfirming patterns:
   - Found a max term -> search for longer-term/renewal-option authority, grandfathering, exceptions, and "notwithstanding", "may renew", "extension", "option", "successive", "multi-year", "not exceed", "annual termination".
   - Found no max term -> search education/procurement/local-government/administrative codes and official guidance for "term","duration","years","not exceed","contract period","renewal","extension","transportation services","pupil transportation".
   - Concluded rebidding required -> search for exceptions: renewal without bidding, sole source, emergency procurement, cooperative purchasing, interlocal/piggyback contracts, board waiver, state-agency approval, negotiated procurement, small-purchase thresholds.
   - Concluded not required/conditional -> search for mandatory bidding language in school, procurement, public-contract, and district-purchasing laws.
   - Found renewal mechanics -> search for limits/conditions: CPI caps, fuel adjustments, board/state approval, annual appropriations, termination notice, public-hearing requirements, max number of renewals.
   - School-specific statute appears to control -> challenge whether a general procurement statute ALSO applies (and vice versa: challenge whether school transportation has a specific carve-out).
   - Special-education appears to follow the same rule -> search specifically for separate special-education, IEP, McKinney-Vento, foster-care, homeless-student, alternative, and disability transportation provisions.
   - District variance -> consult at least two district policy/procurement manuals where available (ideally one large and one small/rural), using district materials only to assess variance, not to establish statewide law.
   - Currentness -> check whether the cited section was amended, repealed, renumbered, or superseded after the code-currency date.
3. ONE BOUNDED RE-RESEARCH PASS ON REJECTION. If a challenge REJECTS a finding (citation won't re-open, text doesn't support the claim, or credible disconfirming authority surfaces), make EXACTLY ONE targeted re-research attempt (re-search the official code, administrative code, and session laws) to resolve it. If still unresolved after that single pass, mark the finding challenged, downgrade confidence, and record the negative search path. Do not loop further.
4. FINALIZE CONFIDENCE (verdict ladder) per field in fieldVerdicts: "confirmed" (no credible counter-evidence), "refuted" (counter-evidence strong enough that the original finding does not hold -> ADOPT the corrected finding in fields), or "unresolved" (a SOURCED, credible counterweight stands alongside the finding). "unresolved" fires ONLY when the counter-evidence would itself survive as an official/authoritative source — not for speculation, blogs, or "some say"; default to "confirmed" when nothing meets that bar. Do NOT assign final High confidence unless the current-law check is documented and the adversarial pass leaves no unresolved authoritative conflict.
5. PRESERVE EVERY UNCERTAINTY VERBATIM — a "could not verify" is a NEGATIVE RESULT, never relayed downstream as a confirmed fact.

RETURN (schema-validated, ${state} only): the reconciled five fields (corrected where refuted) + specialEducation, the per-field fieldVerdicts, the challengeMatrix rows, sourcesReVerified vs sourcesUnreachable, an updated sourceLedger, updated verificationNotes (include the current-law check + negative paths), final confidence, and unresolvedFields. Do NOT write files.`
}

function revisitBrief(state, validated){
  return `You receive the adversarially-validated pack for ${state}. As-of date: ${ASOF}. This is the SOURCE-VALIDATION REVISIT for the load-bearing citations, plus final per-state assembly for the deliverables. ${state} ONLY. You have WebSearch, WebFetch, firecrawl, filesystem read.

VALIDATED PACK (JSON):
${JSON.stringify(validated)}

DO THIS:
1. SOURCE-VALIDATION REVISIT (load-bearing citations): For the PRIMARY statutory citation(s) behind every substantive Max-Term / Rebid / Renewal answer, RE-OPEN the official source one final time and confirm it still says what the pack claims. For each, add a sourceValidationRevisit entry with verdict one of: "verified", "partially verified", "not verified", or "unreachable", plus a short note (and the official url). On "not verified" -> strike or re-derive the claim and update fields/tableRow accordingly. On "unreachable" -> substitute a primary source if possible, else downgrade confidence and surface the dead link (do NOT silently retain it).
2. NEUTRALITY: Ensure every value states WHAT THE LAW IS — never whether the state is favorable, better, or worse, and never any cross-state comparison. Strip any evaluative/comparative framing.
3. BUILD tableRow (the row that will appear in the deliverable table) with CONCISE cell text for: maxContractTerm, rebidRequired (begins with Required/Not required/Conditional), renewalMechanics, statutoryCitation (primary citation + official url), districtVariance (Yes/No/Unknown + brief), and confidence (High/Medium/Low). Every cell must be populated — no blanks; a documented "silent/not found/unknown" counts as populated.
4. WRITE notesSpecialProvisions: a prose subsection for ${state} covering small-purchase/dollar-threshold exemptions, sole-source/emergency procurement, cooperative-purchasing/piggyback authority, charter-school rules, special-education differences, state-approval requirements, and any rule affecting practical application of the five fields (with citations).
5. WRITE exceptionsUnresolved: every ${state} field NOT definitively answered, what was searched, what disconfirming searches were attempted, and why it remains open — or an explicit statement that all fields resolved.

RETURN (schema-validated, ${state} only): state, tableRow, fields (final/corrected), specialEducation, fieldVerdicts, challengeMatrix, sourceValidationRevisit, sourcesReVerified, sourcesUnreachable, sourceLedger, verificationNotes, notesSpecialProvisions, exceptionsUnresolved, confidence. Do NOT write files.`
}

function synthesisBrief(packs){
  return `You are the SYNTHESIS / REDUCE writer for the AL-GA student-transportation contract-rules research. As-of date: ${ASOF}. You run AFTER all ten state lanes completed. You have the Write and Read tools and full filesystem access. Your job: fold the ten validated+revisited state packs into FOUR deliverable files, written to this exact folder:
${FOLDER}

You receive an array of ten state packs (JSON). INTEGRATE them — do not staple packs together. This step owns the deliverable's evidentiary chain.

THE TEN STATE PACKS (JSON array):
${JSON.stringify(packs)}

WRITE THESE FOUR FILES (absolute paths; OVERWRITE idempotently; do not append duplicates; never delete anything outside scratch/):

=== FILE 1: ${FOLDER}/research-findings.md ===
Begin with a compact "## Executive Summary" (2-4 sentences: documents current law as of ${ASOF} on student-transportation contract rules for the ten AL-GA states across the five fields; neutral-recorder posture; each state researched independently and adversarially validated; no cross-state legal inference; no favorability judgments).
Then "### Per-state findings index" — one descriptive line per state (NOT a comparison): "- **<State>** — Primary citation: <official URL> · Source-validation: <verified/partially/not/unreachable> · Adversarial verdict: <confirmed/refuted/unresolved overall> · Confidence: <High/Medium/Low>".
Then "### Coverage & verify-and-converge": fields fully resolved vs. documented-silent/not-found/unknown (descriptive QC tally); Mode: adversarial — every state's five fields challenged and every primary citation re-opened; states where the adversarial pass changed a finding (+ what changed); states where findings held.
Then the REQUIRED TABLE (fill EVERY cell from each pack's tableRow — no blanks), exact columns:
| State | Max Contract Term | Rebid Required at Term-End? | Renewal Mechanics | Statutory Citation | District Variance? | Confidence |
with one row per state in this order: Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware, Florida, Georgia.
Then "## Notes / Special Provisions" with one "### <State>" subsection per state from notesSpecialProvisions.
Then "## Exceptions / Unresolved Issues" — per state, the unresolved fields with negative search paths from exceptionsUnresolved (or a statement that all fields resolved).
Then "## Sources Consulted" — primary sources and official guidance by state with official URLs (may summarize source-ledger.md).

=== FILE 2: ${FOLDER}/source-ledger.md ===
One row per source reviewed, grouped by "## <State>". Columns:
| State | Source Tier | Citation | Official Source URL | Code Currency / Effective Date | Fields Supported | Relevant Text / Notes | Accessed Date |
Include official sources that did not answer a field where they materially explain a "Statute silent"/"Not found". Use each pack's sourceLedger.

=== FILE 3: ${FOLDER}/verification-notes.md ===
Per state ("## <State>"): the search strategy, queries/official-site searches that mattered, the current-law check (official code currency, administrative-code currency, whether recent session laws or pending effective-date amendments were checked), unresolved issues, and conflict checks (from each pack's verificationNotes). Then ORCHESTRATION PROVENANCE (this run only): per state, lane status (completed), the per-field validation verdict (confirmed/refuted/unresolved from fieldVerdicts), and which primary sources were re-verified vs. unreachable (sourcesReVerified / sourcesUnreachable). End with a final QC checklist.

=== FILE 4: ${FOLDER}/challenge-matrix.md ===
Adversarial review grouped by "## <State>". Columns:
| State | Finding Challenged | Disconfirming Hypothesis | Challenge Searches / Sources | Result | Confidence Impact |
At least one row per state for max term, rebid requirement, renewal mechanics, special-education differentiation, and district variance (from each pack's challengeMatrix).

AFTER WRITING: also write each state's pack to ${FOLDER}/scratch/<state-lowercase>.json for the record.

QUALITY GATES before finishing:
- Coverage check: every state has all five fields populated (documented silent/not-found/unknown counts as populated); every unresolved field appears in Exceptions with its negative search path.
- Bias/neutrality strip: deliverables state WHAT THE LAW IS — remove any favorability, ranking, "better/worse", or cross-state comparison. The only aggregate permitted is a descriptive QC tally.
- Cross-state consistency sweep (FORMAT ONLY): uniform schema, labels, and cell formats across all ten rows; flag outliers. This is a formatting check, NOT a legal comparison — do not infer any state's rule from another's.
- Completion verification: RE-READ each written file; confirm every table row has seven populated cells, every substantive Max-Term/Rebid/Renewal answer carries a citation, no secondary summary is cited as authority, and the three supporting files are complete.

RETURN a BRIEF text summary: the four file paths written, the per-state confidence + overall verdict (one line each), count of states fully resolved, and any state/field still unresolved. Do not paste the full report.`
}

// ---------- Run ----------
phase('Research')
log('AL-GA student-transportation contract rules: fanning out 10 state lanes (research -> validate -> source-revisit).')

const packs = await pipeline(
  STATES,
  (state) => agent(researchBrief(state), { agentType:'general-purpose', label:`research:${state}`, phase:'Research', schema: STAGE1_SCHEMA }),
  (draft, state) => agent(validateBrief(state, draft), { agentType:'general-purpose', label:`validate:${state}`, phase:'Validate', schema: STAGE2_SCHEMA }),
  (validated, state) => agent(revisitBrief(state, validated), { agentType:'general-purpose', label:`revisit:${state}`, phase:'Source revisit', effort:'medium', schema: STAGE3_SCHEMA }),
)

const good = packs.filter(Boolean)
const missing = STATES.filter((s, i) => !packs[i])
log(`Lanes complete: ${good.length}/${STATES.length} states closed.` + (missing.length ? ` Incomplete: ${missing.join(', ')}` : ''))

phase('Synthesis')
const summary = await agent(synthesisBrief(good), { agentType:'general-purpose', label:'synthesis-writer', phase:'Synthesis' })

return {
  statesCompleted: good.length,
  statesMissing: missing,
  files: [
    `${FOLDER}/research-findings.md`,
    `${FOLDER}/source-ledger.md`,
    `${FOLDER}/verification-notes.md`,
    `${FOLDER}/challenge-matrix.md`,
  ],
  summary,
}
