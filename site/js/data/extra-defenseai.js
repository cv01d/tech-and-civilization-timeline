// SUPPLEMENT — the military and AI, from DARPA to the first lawsuit between an AI
// company and its own government. The story runs in four repeating acts: a quiet
// defense contract, a revelation and worker revolt, a corporate response (capitulate,
// hold firm, or rewrite the principles), and a precedent that moves the line toward
// more military AI, not less — until the Anthropic standoff breaks the pattern by going
// to court. Cross-links the existing arpanet, darpachallenge, aws, openai,
// anthropicfounded, claude, constitutionalai, dronewarfare, killerrobots, militaryai,
// prism, snowden cards. cat:"computing". Round one: data only — images to follow.
window.ATLAS_EVENTS.push(

{ id:"darpa1958", year:1958, date:"1958", era:5, cat:"computing",
  title:"DARPA: The Pentagon's Innovation Arm",
  wiki:"DARPA",
  summary:"Stung by Sputnik, the Pentagon creates ARPA (later DARPA) to fund high-risk research; over six decades it produces the internet, GPS, stealth, and the institutional pathway from lab to battlefield that all defense AI later follows.",
  importance:"DARPA was founded to ensure the United States would never again be technologically surprised, and its model — bet on far-out research, tolerate failure, move winners toward deployment — produced the foundational technologies of the modern age, the internet among them. It also built the pipeline by which research becomes weaponry, the conduit through which artificial intelligence would eventually be pulled into the military. Every later defense-AI episode runs along the path DARPA laid.",
  impact:{
    computing:"A high-risk research agency seeds the internet, GPS, and the defense-tech pipeline.",
    power:"The institutional pathway from laboratory to battlefield is established.",
    technology:"Government research funding becomes the engine of American technological lead." },
  causes:["arpanet"], effects:["darpachallenge","ciacloud","projectmaven"] },

{ id:"ciacloud", year:2013, date:"2013", era:7, cat:"computing",
  title:"Commercial Cloud Gets a Clearance",
  wiki:"Amazon Web Services",
  summary:"Amazon Web Services wins a $600 million CIA cloud contract — the first time a major commercial tech company runs classified government workloads — establishing the 'commercial cloud for clearance' model that will define Pentagon AI procurement for a decade.",
  importance:"The CIA's decision to run secret workloads on Amazon's commercial cloud rather than build its own was a quiet turning point: it married Silicon Valley's infrastructure to the intelligence community's most sensitive data, and proved the model that the Pentagon would chase through JEDI and JWCC. It made the great cloud companies essential defense contractors and set up the dependency — and the leverage — at the heart of every later government-AI fight. The state had decided its future ran on commercial silicon.",
  impact:{
    computing:"Classified government workloads move onto commercial cloud infrastructure.",
    power:"The tech giants become indispensable contractors to the intelligence community.",
    surveillance:"The agencies' data and the cloud companies' platforms are bound together." },
  causes:["aws","darpa1958"], effects:["jedi","projectmaven"] },

{ id:"projectmaven", year:2017, date:"2017–2019", era:7, cat:"computing",
  title:"Project Maven and the Google Revolt",
  wiki:"Project Maven",
  summary:"The Pentagon engages Google to apply machine learning to drone-surveillance footage; when employees discover it in 2018, over 3,100 sign a letter — 'Google should not be in the business of war' — and the company declines to renew. It is the first time worker organizing reversed a major military tech contract.",
  importance:"Maven was meant to solve the drone era's bottleneck — more surveillance video than humans could ever watch — by training AI to detect and track people and vehicles automatically, with Google quietly supplying the tools. The internal revolt that followed was unprecedented: thousands signed an open letter, about a dozen resigned, and Google both let the contract lapse and published AI Principles forswearing weapons work — a template every rival was then measured against. Maven proved workers could veto military AI, even as Amazon and Microsoft simply took Google's place.",
  impact:{
    computing:"AI is turned on the drone era's flood of surveillance video.",
    labor:"Worker organizing reverses a major military contract for the first time.",
    power:"Google's AI Principles set the ethics template rivals are measured against." },
  causes:["ciacloud","darpa1958"], effects:["jedi","openaimilitary","projectnimbus"] },

{ id:"jedi", year:2019, date:"2017–2022", era:7, cat:"computing",
  title:"JEDI: The War Cloud That Collapsed",
  wiki:"Joint Enterprise Defense Infrastructure",
  summary:"The Pentagon's $10 billion single-vendor JEDI cloud — awarded to Microsoft over presumed favorite Amazon in 2019 — dissolves into a lawsuit alleging Trump's animus toward Jeff Bezos corrupted the process; canceled in 2021 with no work done, then replaced by the four-vendor JWCC in 2022.",
  importance:"JEDI was meant to put all of the military's data, from unclassified to Top Secret, in one vendor's cloud — and became a textbook of how not to procure technology: single-vendor lock-in, a politically contaminated award, and years of litigation that delivered nothing before the Pentagon canceled it outright. The lesson was written into its successor, JWCC, which split the work among Amazon, Google, Microsoft, and Oracle. The saga exposed how thoroughly defense technology had become entangled with corporate rivalry and presidential grievance.",
  impact:{
    computing:"A $10B single-vendor military cloud collapses and is replaced by a multi-vendor model.",
    power:"Procurement is shown to be contaminated by corporate rivalry and presidential animus.",
    law:"Years of litigation over the award deliver no work and the costliest tech-procurement cancellation yet." },
  causes:["ciacloud","projectmaven"], effects:["dodaiethics","pentagonaicontracts"] },

{ id:"dodaiethics", year:2020, date:"2019–2022", era:7, cat:"computing",
  title:"The Pentagon's AI Ethics — Without Enforcement",
  wiki:"Ethics of artificial intelligence",
  summary:"The DoD adopts five Ethical Principles for AI (responsible, equitable, traceable, reliable, governable), NATO follows in 2021, and a Responsible AI Strategy and the new CDAO arrive in 2022 — yet the bar to field a 'fully autonomous weapon' under Directive 3000.09 is so high it has never once been attempted.",
  importance:"Stung by Maven, the Pentagon wrote the first formal articulation of responsible military AI from inside the building — five principles, a NATO echo, a strategy, and a Chief Digital and AI Office to implement them. But the principles were explicitly non-binding, and the one hard gate, the senior review required to deploy a fully autonomous lethal weapon, set the sign-off bar so high that no program has ever tried to clear it. The policy exists; its central enforcement mechanism has never been tested — ethics as aspiration, not constraint.",
  impact:{
    computing:"The military adopts formal but non-binding ethical principles for AI.",
    law:"The review gate for fully autonomous weapons is so high it is never invoked.",
    power:"Responsible-AI policy is articulated without a tested mechanism to enforce it." },
  causes:["jedi","projectmaven"], effects:["openaimilitary","unautonomousweapons","anthropicstandoff"] },

{ id:"openaimilitary", year:2024, date:"January 2024", era:7, cat:"computing",
  title:"OpenAI Drops Its Military Ban",
  wiki:"OpenAI",
  summary:"OpenAI quietly deletes the explicit prohibition on military and warfare use from its policy, replacing it with a vague 'applicable law' standard, and announces a DARPA cybersecurity partnership — a reversal that draws sharp criticism once noticed.",
  importance:"For its first years OpenAI's terms flatly barred weapons, attacks on infrastructure, and military use; in January 2024 that explicit ban simply disappeared, swapped for a general appeal to 'applicable law,' as the company moved toward defense work. The quiet edit, discovered after the fact, became a marker of how fast the industry's ethical lines were shifting under the pull of lucrative government contracts. It was Act Three in a new key: not capitulation to workers but a rewriting of principles before anyone could object.",
  impact:{
    computing:"A frontier lab removes its explicit prohibition on military use of its models.",
    power:"The pull of defense contracts is shown to bend the industry's ethical commitments.",
    law:"An unambiguous ban is replaced by a vague 'applicable law' standard." },
  causes:["projectmaven","dodaiethics"], effects:["pentagonaicontracts","projectnimbus"] },

{ id:"projectnimbus", year:2024, date:"2024–2025", era:7, cat:"computing",
  title:"Project Nimbus and the End of the Worker Veto",
  wiki:"Project Nimbus",
  summary:"Google's $1.2B cloud-and-AI contract with the Israeli government triggers the largest worker action since Maven — sit-ins, arrests, and roughly 50 firings — but this time the company holds firm; in 2025 it deletes its post-Maven pledge against weapons and surveillance AI entirely.",
  importance:"Where Maven ended in management's retreat, Nimbus ended in management's resolve: protesters occupied offices, nine were arrested, and Google fired some fifty employees rather than yield, the demands citing the Israeli military's AI targeting. The contrast measured a shift — an industry now so capital-intensive and defense contracts so lucrative that employee leverage had collapsed. In February 2025 Google formally deleted the AI Principles its workers had won in 2018, quietly erasing the pledge against weapons and surveillance seven years on. The era of the worker veto appeared to be over.",
  impact:{
    labor:"The largest tech worker action since Maven fails to move the company.",
    computing:"Google deletes its 2018 pledge against weapons and surveillance AI.",
    power:"Capital intensity and lucrative contracts hollow out employee leverage." },
  causes:["projectmaven","openaimilitary"], effects:["lavender","pentagonaicontracts","googledroneswarm"] },

{ id:"pentagonaicontracts", year:2025, date:"July 2025", era:7, cat:"computing",
  title:"Claude on Classified Networks",
  wiki:"Anthropic",
  summary:"The Pentagon awards four $200 million AI contracts — to Anthropic, Google, OpenAI, and xAI — and Claude becomes the first frontier AI model approved for use on classified military networks, used for intelligence analysis, planning, and cyber operations.",
  importance:"In a single round of awards the Pentagon brought the frontier labs inside the wire, and Claude crossed a historic threshold as the first such model cleared for classified networks — soon described as the department's most widely deployed frontier AI, spanning intelligence analysis, modeling, operational planning, and cyber. As a condition, the Pentagon agreed to abide by Anthropic's acceptable-use policy, which barred mass domestic surveillance and fully autonomous weapons. That clause — a private company's ethics binding the world's most powerful military — set up the confrontation to come.",
  impact:{
    computing:"A frontier AI model is approved for classified military networks for the first time.",
    power:"The leading AI labs are brought inside the defense establishment at scale.",
    law:"A contractor's acceptable-use policy is written into the terms binding the Pentagon." },
  causes:["jedi","openaimilitary","projectnimbus","anthropicfounded","claude","constitutionalai"], effects:["anthropicstandoff","maduroai"] },

{ id:"anthropicstandoff", year:2026, date:"2025–2026", era:7, cat:"computing",
  title:"Anthropic v. the Pentagon",
  wiki:"Anthropic",
  summary:"When the Pentagon demands its AI be usable for 'all lawful purposes' — stripping limits on surveillance and autonomous weapons — Anthropic refuses; the administration designates it a 'supply chain risk to national security' (a first for an American company) and Anthropic sues. A federal court grants a preliminary injunction.",
  importance:"The Pentagon's January 2026 strategy required contracted models be deployable for 'all lawful purposes,' which Anthropic read as erasing its bans on mass domestic surveillance and fully autonomous weapons; when talks collapsed, the administration ordered agencies to drop Anthropic and labeled it a supply-chain risk — a designation historically reserved for foreign adversaries like Huawei and DJI, never an American firm. Anthropic sued, won a preliminary injunction, and framed the fight as a constitutional limit on government power rather than an internal ethics matter. With Google, OpenAI, and xAI accepting the 'any lawful purpose' terms and only Anthropic refusing, the case poses the decade's defining AI-governance question: can a company hold ethical limits against the demands of the state?",
  impact:{
    computing:"The first federal litigation between an AI company and its government over military use.",
    law:"An American firm is branded a national-security supply-chain risk for the first time.",
    power:"The industry splits — three frontier labs accept the Pentagon's terms; one goes to court." },
  causes:["pentagonaicontracts","dodaiethics"], effects:["maduroai","googledroneswarm"] },

{ id:"lavender", year:2024, date:"2024", era:7, cat:"computing",
  title:"Lavender: AI-Assisted Targeting in Gaza",
  wiki:"AI-assisted targeting in the Gaza Strip",
  summary:"Reporting reveals the Israeli military used an AI system, 'Lavender,' to generate airstrike-targeting recommendations with minimal human review, reportedly marking some 37,000 Palestinians as potential targets — among the most contested AI-ethics issues in the world, and a stated grievance of the Nimbus protests.",
  importance:"Lavender brought the abstract debate over machine targeting into the open: an AI reportedly nominating tens of thousands of human targets, with human review compressed to seconds, in an active war. Disclosed by Israeli-Palestinian and international reporting, it became a global flashpoint over whether algorithmic targeting can be reconciled with the laws of war and meaningful human control. It also concretized what Google's Nimbus protesters feared their employer was enabling, fusing the corporate and battlefield strands of the story.",
  impact:{
    computing:"AI is used to generate human-targeting recommendations at scale in active war.",
    power:"Algorithmic targeting with minimal human review becomes a global ethics flashpoint.",
    law:"The compatibility of machine targeting with the laws of war is thrown into doubt." },
  causes:["projectnimbus","dronewarfare"], effects:["unautonomousweapons"] },

{ id:"unautonomousweapons", year:2024, date:"2024–2025", era:7, cat:"computing",
  title:"The World Votes on Killer Robots",
  wiki:"Lethal autonomous weapon",
  summary:"The UN General Assembly passes a resolution on lethal autonomous weapons 166–3 (only Russia, North Korea, and Belarus opposed), calling for meaningful human control; the Secretary-General calls such weapons 'morally repugnant' — yet no binding treaty results, as the U.S. and Russia both resist.",
  importance:"The 166–3 vote was the clearest signal yet that nearly the entire world regards weapons that select and kill without human control as unacceptable, and the Secretary-General's plea for binding rules by 2026 raised the pressure further. But the resolution was non-binding, and the major military powers — the U.S. and Russia alike — blocked any enforceable treaty, leaving a vast gap between near-universal moral consensus and the absence of law. It is the museum's recurring shape in its gravest form: the technology deployed, the norm overwhelming, the binding rule still missing.",
  impact:{
    computing:"The world overwhelmingly rejects autonomous weapons that kill without human control.",
    law:"A near-unanimous moral consensus fails to become a binding treaty.",
    power:"The major military powers block enforceable limits on lethal autonomy." },
  causes:["lavender","dodaiethics","killerrobots","militaryai"], effects:["googledroneswarm"] },

{ id:"maduroai", year:2026, date:"January 2026", era:7, cat:"computing",
  title:"AI in the Maduro Operation",
  wiki:"Claude (language model)",
  summary:"Congressional Research Service reporting indicates Claude was used in the operation that captured Venezuelan president Nicolás Maduro — the first public acknowledgment of a specific frontier AI model's role in a named military or intelligence operation.",
  importance:"The reported use of Claude in the operation to capture Maduro marked a threshold: not a procurement announcement or a policy debate but a frontier model named in a specific, consequential operation. It made concrete what the contracts had only implied — that these systems were now woven into the conduct of real military and intelligence action, not merely its back-office analysis. Coming amid Anthropic's own litigation over the limits of military use, it sharpened every question the standoff had raised about control, accountability, and the role of AI in the use of force.",
  impact:{
    computing:"A named frontier model is publicly tied to a specific military-intelligence operation.",
    power:"AI moves from analysis into the conduct of consequential operations.",
    law:"The episode intensifies the unresolved fight over limits on military AI use." },
  causes:["pentagonaicontracts","anthropicstandoff"], effects:[] },

{ id:"googledroneswarm", year:2026, date:"April 2026", era:7, cat:"computing",
  title:"Maven Repeats: Google Walks From Drone Swarms",
  wiki:"Project Maven",
  summary:"Google declines to compete for a $100 million Pentagon contract to build voice-controlled drone-swarm technology, citing internal ethics review and employee concerns — an exact echo of Maven eight years later, even as xAI competes openly in the DoD's autonomous-drone-swarm contest.",
  importance:"Google's withdrawal from the drone-swarm contract repeated the Maven dynamic almost beat for beat — ethics review, employee pressure, a step back from the most lethal edge of military AI — showing the worker conscience was bruised but not wholly gone. Yet the contrast with xAI, openly competing to build autonomous drone swarms, and with Anthropic, fighting the Pentagon in court, mapped the industry's fracture: some labs advancing toward autonomous lethality, others retreating, one litigating the limits. Eight years after Maven, the same question — should this company be in the business of war? — was being answered four different ways at once.",
  impact:{
    computing:"A frontier company again steps back from the most lethal edge of military AI.",
    labor:"The worker-conscience dynamic of Maven recurs, weakened but alive.",
    power:"The industry fractures between labs advancing, retreating, and litigating autonomy." },
  causes:["projectnimbus","anthropicstandoff","unautonomousweapons"], effects:[] }

);
