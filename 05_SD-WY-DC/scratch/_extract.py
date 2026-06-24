import json, glob, os, textwrap

ORDER = ["District of Columbia","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]
def slug(j): return j.lower().replace(" ","-")

# revisits from workflow output
revs = {}
outp = "/private/tmp/claude-501/-Users-zabrisket-Documents-Summit-School-Services-MASTER-State-Level-Research-05-SD-WY-DC/df5b3821-7b75-4e0e-93b3-dc1b3232888b/tasks/wgwhi1hc9.output"
try:
    with open(outp) as f:
        data = json.load(f)
    for r in data.get("revisits", []):
        revs[r["jurisdiction"]] = r
except Exception as e:
    print("OUTPUT PARSE ERR", e)

for j in ORDER:
    p = json.load(open(slug(j)+".json"))
    ff = p["finalFields"]
    print("="*100)
    print("JURISDICTION:", j, "| finalConfidence:", p.get("finalConfidence"))
    print("-"*100)
    print("[MAX TERM]:", ff["maxContractTerm"]["value"])
    print("[MAX TERM CITE]:", ff["maxContractTerm"]["citation"][:300])
    print("[REBID label]:", ff["rebidRequired"]["label"])
    print("[REBID rule]:", ff["rebidRequired"]["rule"])
    print("[RENEWAL]:", ff["renewalMechanics"]["value"])
    print("[PRIMARY CITATION]:", ff["statutoryCitation"][:600])
    print("[VARIANCE label]:", ff["districtVariance"]["label"])
    print("[VARIANCE expl]:", ff["districtVariance"]["explanation"])
    se = p.get("specialEducation",{})
    print("[SPED differentRules]:", se.get("differentRules"), "| detail:", se.get("detail","")[:400])
    print("[VERDICTS]:", "; ".join(f'{v["field"]}={v["verdict"]}' for v in p.get("perFieldVerdicts",[])))
    rv = revs.get(j,{})
    print("[REVISIT]:", rv.get("revisitVerdict","(no file)"), "|", rv.get("note","")[:200])
    print("[#ledger rows]:", len(p.get("sourceLedger",[])), "| [#challenge rows]:", len(p.get("challengeMatrix",[])))
