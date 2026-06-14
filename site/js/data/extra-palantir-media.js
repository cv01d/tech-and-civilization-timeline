// THREE INTERLOCKING THREADS on private power in the 21st century, all verified
// against public reporting:
//
//   1. PALANTIR — the surveillance-analytics company that embedded private
//      software inside the sovereign functions of intelligence, the military,
//      immigration enforcement, and pandemic logistics (2003 -> 2026).
//   2. THE POWELL MEMO & PARTISAN MEDIA — the 1971 corporate counter-strategy
//      and the deregulatory + judicial cascade (Buckley, Bellotti, the Fairness
//      Doctrine's repeal, the Telecom Act, Citizens United) that built the cable
//      partisan-news ecosystem, with Fox News as its exemplar.
//   3. THE FABLE 5 EXPORT BAN — June 2026, the first time the U.S. government
//      used national-security authority to pull a frontier AI model from the
//      market for foreign nationals.
//
// Cross-linked to existing exhibits: prism, snowden, patriotact, projectmaven,
// cambridgeanalytica, fairnessdoctrine, citizensunited, chatgpt.

// ===================================================================
//  THREAD 1 — PALANTIR  (Galleries VI & VII)
// ===================================================================
window.ATLAS_EVENTS.push(

{ id:"palantirfounding", year:2003, date:"2003", era:6, cat:"computing",
  title:"Palantir Is Founded",
  wiki:"Palantir Technologies",
  gallery:["Peter Thiel","Alex Karp"],
  summary:"Peter Thiel, Alex Karp, Joe Lonsdale, Stephen Cohen, and Nathan Gettings found Palantir Technologies to turn fraud-detection methods born at PayPal into analytical tools for the post-9/11 intelligence state.",
  importance:"Palantir began with a thesis carried over from PayPal, where Thiel and his engineers had fought online fraud by letting human analysts hunt through linked data rather than relying on automated rules alone. After September 11, that approach — software that helps an analyst see the connections hidden in vast, messy databases — found a far larger customer in the American national-security apparatus. Named for the seeing-stones of Tolkien, the company spent its early years almost entirely dependent on government work, and built its reputation by making intelligence and defense agencies dependent in turn. It is the clearest case in this atlas of Silicon Valley methods migrating directly into the machinery of state surveillance.",
  impact:{
    technology:"Human-driven link analysis over integrated data is productized for intelligence use.",
    government:"A private startup positions itself as core infrastructure for the post-9/11 security state.",
    surveillance:"Commercial software is built expressly to fuse and search the government's data holdings." },
  causes:["patriotact"],
  effects:["palantirinqtel","palantirgotham","palantirice","palantirprism"] },

{ id:"palantirinqtel", year:2004, date:"2004", era:6, cat:"computing",
  title:"In-Q-Tel Funds Palantir",
  wiki:"In-Q-Tel",
  gallery:["Central Intelligence Agency"],
  summary:"The CIA's venture arm, In-Q-Tel, becomes an early backer of Palantir — formalizing a public-private intelligence partnership in which the spy agency both funds and guides the tools it will later buy.",
  importance:"In-Q-Tel, the CIA's not-for-profit investment vehicle, put early money into Palantir and, more valuably, told the company what intelligence analysts actually needed. The arrangement is a model of how the modern security state acquires technology: rather than build in-house or buy off the shelf, it invests at arm's length in startups, shaping their products through the requirements of the eventual government customer. For Palantir the relationship supplied not only capital but credibility and a direct line into the agencies that would become its foundational clients.",
  impact:{
    government:"The intelligence community invests in and steers the development of its own future vendors.",
    technology:"Spy-agency requirements shape a commercial product from its earliest days.",
    surveillance:"The state outsources tool-building to a private firm while keeping a guiding hand." },
  causes:["palantirfounding"],
  effects:["palantirgotham"] },

{ id:"palantirgotham", year:2008, date:"2008", era:6, cat:"computing",
  title:"Palantir Gotham Goes to War",
  wiki:"Palantir Technologies",
  gallery:["Iraq War","Improvised explosive device"],
  summary:"Palantir's Gotham platform is deployed in Iraq and Afghanistan to map insurgent networks and IED threats — turning counterinsurgency into a data-science problem of pattern-of-life and link analysis.",
  importance:"In the theaters of Iraq and Afghanistan, Gotham let analysts pull together signals intelligence, informant reports, biometric records, and the locations of past attacks into a single searchable picture, surfacing the networks behind roadside bombs. It made warfare legible as a web of relationships — who met whom, who moved where, which connections predicted the next attack. The military adoption proved the commercial thesis at the most consequential possible scale, and it normalized the idea that targeting and 'pattern-of-life' analysis could be run through Silicon Valley software.",
  impact:{
    government:"Counterinsurgency is reorganized around network mapping and predictive targeting.",
    technology:"Disparate intelligence streams are fused into one analyst-facing picture of a battlespace.",
    surveillance:"Pattern-of-life analysis on whole populations becomes a routine military practice." },
  causes:["palantirinqtel"],
  effects:["palantirukraine","palantirtitan"] },

{ id:"palantirthemis", year:2011, date:"2011", era:6, cat:"computing",
  title:"Team Themis & 'The WikiLeaks Threat'",
  wiki:"HBGary",
  gallery:["WikiLeaks","Anonymous (hacker group)"],
  summary:"Leaked HBGary Federal emails expose 'Team Themis' — a proposal by HBGary, Berico, and a Palantir engineer to sabotage WikiLeaks and intimidate its supporters on behalf of Bank of America and the U.S. Chamber of Commerce.",
  importance:"When the hacker collective Anonymous dumped tens of thousands of internal emails from the security firm HBGary Federal in early 2011, they revealed a pitch called 'The WikiLeaks Threat,' drawn up under the name Team Themis. The plan — proposed by HBGary, Berico Technologies, and a Palantir engineer — sketched tactics to discredit WikiLeaks and pressure sympathetic journalists, with a reported budget reaching toward two million dollars a month at full tilt. Palantir's leadership cut ties with HBGary and publicly apologized once the documents surfaced. The episode exposed the dual-use edge of the same analytic tools sold to the government: capabilities built to map insurgent networks could as easily be aimed at activists and the press.",
  impact:{
    society:"Tools built for the security state are shown to be turnable against journalists and activists.",
    government:"Corporate clients are revealed seeking to privatize intelligence-style operations against critics.",
    surveillance:"Network-analysis capabilities are exposed as inherently dual-use." },
  causes:["palantirgotham"] },

{ id:"palantirprism", year:2013, date:"2013", era:7, cat:"computing",
  title:"Snowden Names Palantir",
  wiki:"PRISM",
  gallery:["Edward Snowden","National Security Agency"],
  summary:"Documents leaked by Edward Snowden show the intelligence community using Palantir-branded tools to integrate and visualize bulk data gathered through surveillance programs such as PRISM.",
  importance:"Among the NSA materials Edward Snowden disclosed in 2013 were references to Palantir software used to make sense of bulk-collected data — the back-end analysis layer sitting atop programs like PRISM. The revelation pulled a secretive contractor into public view and tied its name directly to mass surveillance, even as the company maintained it operated within legal frameworks and built privacy controls into its products. For the public, it crystallized how the architecture of bulk collection actually worked: the gathering was one system; the seeing was another, and the seeing ran on commercial software.",
  impact:{
    surveillance:"Commercial analytics are shown to be the lens through which bulk-collected data is read.",
    government:"A secretive contractor is publicly tied to mass-surveillance infrastructure.",
    society:"The hidden back end of the surveillance state briefly becomes visible." },
  causes:["palantirfounding","prism","snowden"] },

{ id:"palantirice", year:2014, date:"2014", era:7, cat:"computing",
  title:"Palantir Powers ICE",
  wiki:"U.S. Immigration and Customs Enforcement",
  gallery:["Palantir Technologies"],
  summary:"Palantir builds the FALCON system for Immigration and Customs Enforcement, applying network analysis to identify, track, and target immigrants — and drawing sustained protest over its role in deportations.",
  importance:"Palantir's case-management and analysis tools, including the FALCON system, became core infrastructure for ICE, letting the agency integrate records and map relationships in service of enforcement operations at large scale. The contracts turned the company into a focus of organized protest: employees, students, and immigrant-rights groups argued that the same link-analysis methods sold for counterterrorism were now powering family separations and workplace raids. It is the sharpest domestic instance in this atlas of surveillance analytics built for foreign battlefields being turned on people inside the country's own borders.",
  impact:{
    government:"Immigration enforcement is reorganized around integrated data and network analysis.",
    society:"The deportation apparatus becomes a flashpoint over the ethics of selling surveillance tools.",
    surveillance:"Battlefield-grade analytics are applied to a civilian population at scale." },
  causes:["palantirgotham"] },

{ id:"palantircambridge", year:2018, date:"2018", era:7, cat:["computing","social"],
  title:"A Palantir Engineer & Cambridge Analytica",
  wiki:"Facebook–Cambridge Analytica data scandal",
  gallery:["Cambridge Analytica"],
  summary:"Testimony reveals that a Palantir employee, acting in a personal capacity, helped Cambridge Analytica build psychographic voter profiles — a link Palantir says it never sanctioned and investigated internally once exposed.",
  importance:"As the Cambridge Analytica scandal unfolded, whistleblower Christopher Wylie told investigators that a Palantir staffer had, on his own initiative, helped the political-consulting firm develop methods for profiling and microtargeting voters. Palantir maintained it never held a contract with Cambridge Analytica and opened an internal inquiry when the connection surfaced. The episode matters less as a corporate deal than as a demonstration of leakage: the techniques of intelligence-grade profiling do not stay neatly inside their intended institutions, and a single practitioner can carry them into electoral politics.",
  impact:{
    society:"Intelligence-style profiling is shown migrating into democratic elections.",
    government:"The boundary between national-security analytics and campaign targeting blurs.",
    technology:"Psychographic methods prove portable across institutions and individuals." },
  causes:["palantirgotham","cambridgeanalytica"] },

{ id:"palantirmaven", year:2019, date:"2019", era:7, cat:"computing",
  title:"Palantir Embraces Defense AI",
  wiki:"Project Maven",
  gallery:["Palantir Technologies"],
  summary:"After Google's workers force it to abandon the Pentagon's Project Maven, Palantir moves in — building its brand on a willingness to take the military AI contracts that other tech firms now shun.",
  importance:"When Google employees revolted in 2018 over Project Maven, the Pentagon program applying AI to drone-surveillance footage, Google declined to renew. Palantir took the opposite stance, leaning into defense work and absorbing parts of the effort, and Karp turned the company's appetite for military contracts into a public identity. The split marked a fork in Silicon Valley's relationship with the state: some firms treated weapons work as a reputational liability to be managed by their own staff, while Palantir treated it as a mission. The choice positioned the company for the wave of defense-AI procurement that followed.",
  impact:{
    labor:"A tech-worker revolt at one firm becomes a market opening for another.",
    government:"The Pentagon finds in Palantir a contractor eager for the AI work others refuse.",
    technology:"Battlefield AI consolidates around firms willing to own it publicly." },
  causes:["projectmaven","palantirgotham"],
  effects:["palantirtitan"] },

{ id:"palantircovid", year:2020, date:"2020", era:7, cat:"computing",
  title:"Palantir Runs the Pandemic's Data",
  wiki:"Palantir Technologies",
  gallery:["COVID-19 pandemic"],
  summary:"Governments deploy Palantir's Foundry to manage COVID-19 data and vaccine logistics — Tiberius in the U.S., a data platform for Britain's NHS — extending the company from war and policing into public health.",
  importance:"During the pandemic, Palantir's Foundry platform became the backbone for managing infection data and coordinating vaccine distribution: the U.S. used a system called Tiberius, and the company won a contract to handle data for Britain's National Health Service. The deals showed how readily the surveillance-analytics stack generalizes — the same software that fused battlefield intelligence could allocate doses and track caseloads. They also raised durable questions about emergency procurement and privacy, as health data flowed into a private platform under crisis conditions with limited public scrutiny.",
  impact:{
    government:"Pandemic response is run through a private data platform under emergency conditions.",
    society:"Public-health logistics and sensitive health data move onto surveillance-era infrastructure.",
    technology:"The same analytics stack proves equally at home in war, policing, and medicine." },
  causes:["palantirgotham","covid"],
  effects:["palantirlisting"] },

{ id:"palantirlisting", year:2020, date:"Sept 2020", era:7, cat:"computing",
  title:"Palantir Goes Public",
  wiki:"Palantir Technologies",
  gallery:["New York Stock Exchange"],
  summary:"Palantir lists directly on the NYSE at roughly a $21 billion valuation, turning a secretive government contractor into a publicly traded company whose filings reveal how heavily it depends on government revenue.",
  importance:"In September 2020 Palantir went public through a direct listing rather than a conventional IPO, reaching a valuation around twenty-one billion dollars as shares settled near nine and a half dollars on the first day. Going public forced disclosure on a company built for secrecy: its filings laid bare a concentration of revenue in government contracts and a long history of losses. The listing completed an arc from black-box intelligence vendor to a corporation answerable, at least quarterly, to public shareholders — even as the substance of its work remained largely classified.",
  impact:{
    government:"Public filings expose the depth of a contractor's dependence on government money.",
    society:"A firm built on secrecy becomes subject to the disclosures of public markets.",
    technology:"Surveillance-as-a-service is validated as a fundable, public-market business." },
  causes:["palantircovid"] },

{ id:"palantirukraine", year:2022, date:"2022", era:7, cat:"computing",
  title:"Palantir on the Ukrainian Front",
  wiki:"Palantir Technologies",
  gallery:["Russian invasion of Ukraine"],
  summary:"Palantir's software fuses commercial and military satellite imagery into real-time targeting for Ukrainian forces — blurring the line between a commercial software vendor and a participant in active combat.",
  importance:"In Ukraine, Palantir's platforms integrated commercial satellite imagery, sensor feeds, and open-source data to deliver targeting telemetry to Ukrainian units in something close to real time. The company's chief executive described its software as central to the war effort, and analysts noted how thoroughly a private firm's product had woven itself into the kill chain. It raised a question international law is poorly equipped to answer: when a corporation's software materially shapes who gets struck and when, where does the commercial service end and combatant participation begin?",
  impact:{
    government:"A private vendor's software becomes integral to a nation's wartime targeting.",
    technology:"Commercial and military imagery are fused into near-real-time battlefield decisions.",
    society:"The line between selling software and participating in combat erodes." },
  causes:["palantirgotham"],
  effects:["palantiraip"] },

{ id:"palantiraip", year:2023, date:"2023", era:7, cat:"computing",
  title:"Palantir's AIP",
  wiki:"Palantir Technologies",
  gallery:["Large language model"],
  summary:"Palantir launches its Artificial Intelligence Platform (AIP), wiring large language models securely into its data ontology so that corporate and military users can drive decisions through a chat interface over their own operational data.",
  importance:"AIP, launched in 2023, attached the new generation of large language models to Palantir's long-standing data backbone, letting users query and act on their operational data through natural language while keeping the model bounded by the organization's permissions and ontology. For the military it promised commanders a conversational interface to a live operating picture; for corporations it promised the same battlefield-tested machinery applied to supply chains and logistics. AIP marks the moment the surveillance-analytics company became an AI company, carrying its government pedigree into the commercial generative-AI market.",
  impact:{
    technology:"Large language models are bound to a governed enterprise data layer for real decisions.",
    government:"Commanders gain a conversational interface over a live operational picture.",
    society:"Battlefield-tested AI tooling is marketed to ordinary corporate buyers." },
  causes:["palantirukraine","chatgpt"],
  effects:["palantirtitan"] },

{ id:"palantirtitan", year:2024, date:"2024", era:7, cat:"computing",
  title:"Palantir Wins the Army's TITAN",
  wiki:"Palantir Technologies",
  gallery:["United States Army"],
  summary:"The U.S. Army awards Palantir the prime contract for TITAN — a $178.4 million prototype agreement to build ten AI-enabled ground stations — choosing a software firm over a traditional defense giant for a next-generation targeting system.",
  importance:"In March 2024 the Army selected Palantir to build the Tactical Intelligence Targeting Access Node, or TITAN, under a $178.4 million Other Transaction Agreement covering ten prototype ground stations. The win was notable for who lost: Palantir beat the defense incumbent RTX (formerly Raytheon) for a system meant to fuse data from space, air, and ground sensors into targeting information for long-range fires. It signaled that the Pentagon would entrust frontline targeting infrastructure to a Silicon Valley software company over a legacy hardware prime — a shift in who builds the nervous system of American warfare.",
  impact:{
    government:"The Army hands frontline targeting infrastructure to a software firm over a legacy prime.",
    technology:"Multi-domain sensor fusion is delivered as a commercial-style software product.",
    society:"The defense-industrial base reorganizes around Silicon Valley contractors." },
  causes:["palantirgotham","palantirmaven","palantiraip"],
  effects:["palantirglobal"] },

{ id:"palantirglobal", year:2025, date:"2025", era:7, cat:"computing",
  title:"Foundry as Government OS",
  wiki:"Palantir Technologies",
  gallery:["Mass surveillance"],
  summary:"Palantir's Foundry and AIP spread across dozens of allied governments, functioning as a de facto operating system for national data logistics — and drawing European scrutiny over cross-border data transfers under the GDPR.",
  importance:"By the mid-2020s Palantir's platforms had become standing infrastructure inside governments across the democratic world, integrating health, defense, border, and administrative data into a common analytic layer. The spread amounted to a quiet standardization: the same private operating system increasingly underpinning how states see and manage their own populations. In Europe, where comprehensive privacy law exists, regulators opened scrutiny of how data moved through these systems under the GDPR — even as the United States, lacking an equivalent omnibus privacy statute, imposed far fewer constraints on the same vendor.",
  impact:{
    government:"A single private platform becomes shared infrastructure for state data across many nations.",
    surveillance:"Governments of varied character converge on the same analytic operating system.",
    society:"Europe and the U.S. diverge sharply on how, and whether, to regulate it." },
  causes:["palantirtitan"] }

);

// ===================================================================
//  THREAD 2 — THE POWELL MEMO & PARTISAN MEDIA  (Galleries V & VI)
// ===================================================================
window.ATLAS_EVENTS.push(

{ id:"powellmemo", year:1971, date:"Aug 23, 1971", era:5, cat:"general",
  title:"The Powell Memorandum",
  wiki:"Powell Memorandum",
  gallery:["Lewis F. Powell Jr.","United States Chamber of Commerce"],
  summary:"Corporate attorney Lewis Powell writes a confidential memo for the U.S. Chamber of Commerce urging business to mount a coordinated, multi-decade counteroffensive across universities, media, the courts, and politics.",
  importance:"Two months before Nixon nominated him to the Supreme Court, Lewis Powell drafted a confidential memorandum titled 'Attack on American Free Enterprise System' for the U.S. Chamber of Commerce. It argued that business was losing a war for American institutions and laid out a systematic response: fund university chairs and vet textbooks, build sympathetic media, cultivate business-friendly judges, and lobby aggressively and continuously. The memo was less a regulation than a blueprint for changing who writes the regulations — a call to reshape the legal and cultural environment in business's favor. Studied for decades afterward, it reads as the founding strategy document of the modern corporate political project.",
  impact:{
    government:"Business is urged to shift from reactive lobbying to long-term, systemic institution-building.",
    society:"A coordinated corporate strategy to influence universities, media, and courts is set out.",
    regulation:"The aim is explicitly to reshape the environment in which law and policy are made." },
  effects:["powellinstitutions","bellotti"] },

{ id:"powellinstitutions", year:1973, date:"1972–1973", era:5, cat:"general",
  title:"The Roundtable & the Heritage Foundation",
  wiki:"Heritage Foundation",
  gallery:["Business Roundtable"],
  summary:"In the memo's immediate wake, the Business Roundtable (1972) and the Heritage Foundation (1973) are founded — durable institutions built to execute the coordinated corporate strategy Powell had urged.",
  importance:"The Powell Memo did not act on its own, but it crystallized a moment. The Business Roundtable, founded in 1972, organized chief executives into a direct lobbying force; the Heritage Foundation, founded in 1973, built a permanent conservative policy shop to generate legislation, talking points, and a pipeline of personnel. Together they embodied Powell's central insight: that lasting influence comes not from winning a given fight but from building institutions that fight continuously, outlasting any single administration or news cycle. These bodies became the connective tissue of the deregulatory decades that followed.",
  impact:{
    government:"CEOs and a permanent policy apparatus are organized into continuous political force.",
    society:"Think tanks and lobbying bodies become durable engines of long-term influence.",
    regulation:"An institutional pipeline is built to shape legislation and staff agencies." },
  causes:["powellmemo"] },

{ id:"bellotti", year:1978, date:"1978", era:5, cat:"law",
  title:"Bellotti: Corporate Political Speech",
  wiki:"First National Bank of Boston v. Bellotti",
  gallery:["Lewis F. Powell Jr.","Supreme Court of the United States"],
  summary:"In First National Bank of Boston v. Bellotti, the Supreme Court strikes down state limits on corporate spending in ballot campaigns — with Lewis Powell himself writing the majority opinion that codifies his memo's judicial vision.",
  importance:"Seven years after his memorandum, Justice Lewis Powell wrote the majority opinion in First National Bank of Boston v. Bellotti, striking down a Massachusetts ban on corporate spending to influence ballot referendums. The ruling held that corporate political speech enjoyed First Amendment protection, advancing the logic — already seeded by Buckley v. Valeo's 1976 equation of money with speech — that spending to influence elections is itself protected expression. Powell had urged business to cultivate the courts; here he sat on the highest one and wrote his strategy into constitutional law. Bellotti is the doctrinal bridge from the memo to Citizens United three decades later.",
  impact:{
    regulation:"State limits on corporate spending in ballot campaigns are struck down.",
    government:"Corporate political speech is given First Amendment protection.",
    society:"The author of the corporate strategy memo writes it into constitutional doctrine." },
  causes:["powellmemo"],
  effects:["citizensunited"] },

{ id:"limbaugh", year:1988, date:"1988", era:5, cat:"radio",
  title:"Rush Limbaugh Goes National",
  wiki:"The Rush Limbaugh Show",
  gallery:["Rush Limbaugh"],
  summary:"With the Fairness Doctrine gone, Rush Limbaugh's nationally syndicated show proves that highly partisan, single-viewpoint talk radio is wildly profitable — building the audience and business model the cable partisan-news era will inherit.",
  importance:"The FCC's 1987 repeal of the Fairness Doctrine removed the requirement that broadcasters present contrasting views on controversial issues. Within a year, Rush Limbaugh's nationally syndicated program demonstrated what the new environment made possible: a frankly partisan, single-perspective show that was enormously popular and enormously lucrative. Limbaugh revived AM radio as a political medium and proved out a model — ideological consistency as a business strategy — that Fox News and the wider conservative media ecosystem would later scale to television and cable. The format that the Fairness Doctrine had effectively prohibited became, almost overnight, a dominant commercial form.",
  impact:{
    communications:"Partisan single-viewpoint broadcasting is shown to be hugely profitable.",
    society:"A consistent ideological perspective becomes a mass-market commercial product.",
    regulation:"The repeal of balance rules directly enables a new broadcast form." },
  causes:["fairnessdoctrine"],
  effects:["foxnews"] },

{ id:"foxnews", year:1996, date:"Oct 7, 1996", era:6, cat:["tv","law"],
  title:"Fox News Launches",
  wiki:"Fox News",
  gallery:["Roger Ailes","Rupert Murdoch"],
  summary:"Roger Ailes and Rupert Murdoch launch the Fox News Channel as a cable network — exploiting the fact that cable, unlike over-the-air broadcast, was never bound by the public-interest rules that once governed the airwaves.",
  importance:"Fox News debuted on October 7, 1996, built by Roger Ailes for Rupert Murdoch's News Corporation. Its decisive advantage was structural as much as editorial: as a cable channel, it stood outside the public-interest obligations historically imposed on broadcasters who used the public airwaves. This regulatory asymmetry — cable's editorial freedom versus broadcast's lingering duties — let Fox pursue a consistent point of view without the constraints that would have applied to an over-the-air network. It became the exemplar of the partisan cable-news model, the television heir to the talk-radio formula and the most visible product of the deregulated media landscape the Powell strategy had helped build.",
  impact:{
    communications:"A cable channel adopts a consistent editorial perspective without broadcast-era constraints.",
    regulation:"The cable/broadcast distinction becomes a route around public-interest rules.",
    society:"Partisan television news is established as a dominant, durable form." },
  causes:["limbaugh","fairnessdoctrine","telecomact1996"],
  effects:["bushvgore","foxdominion"] },

{ id:"telecomact1996", year:1996, date:"1996", era:6, cat:["tv","law"],
  title:"The Telecommunications Act of 1996",
  wiki:"Telecommunications Act of 1996",
  gallery:["Bill Clinton"],
  summary:"Signed by Bill Clinton, the Act sweeps away media-ownership caps, triggering a wave of consolidation — Clear Channel alone grows past 1,200 radio stations — that builds the distribution backbone for nationalized partisan media.",
  importance:"The Telecommunications Act of 1996 was the first major overhaul of U.S. communications law in over sixty years, and among its effects was the loosening and removal of limits on how many stations a single company could own. The result was rapid consolidation: Clear Channel, later iHeartMedia, swept up well over a thousand radio stations, and television ownership concentrated as well. These consolidated chains created the structural pipes through which syndicated talk and nationalized news could flow to local markets everywhere at once — the distribution layer that made a coast-to-coast partisan media ecosystem mechanically possible.",
  impact:{
    communications:"Ownership caps fall and a few firms assemble nationwide station chains.",
    regulation:"A landmark deregulation reverses decades of limits on media concentration.",
    society:"Consolidated distribution networks enable nationalized partisan programming." },
  effects:["foxnews"] },

{ id:"bushvgore", year:2000, date:"2000", era:6, cat:["tv","law"],
  title:"Fox Calls Florida",
  wiki:"Bush v. Gore",
  gallery:["2000 United States presidential election","Fox News"],
  summary:"On election night 2000, Fox News is first to call Florida — and the presidency — for George W. Bush, helping set the narrative before other networks followed, retracted, or held back.",
  importance:"In the chaos of the 2000 election night, Fox News called Florida for George W. Bush ahead of its rivals, a decision made on a desk run by a Bush family relative. Other networks scrambled to match, retract, or wait, but the early call helped frame Bush as the presumptive winner during the weeks of recount that followed. The moment captured how a single network's editorial choices could shape a contested political reality in real time — and it sharpened Fox's identification, in the public mind, with the Republican side of the dispute it was covering.",
  impact:{
    communications:"A network's early call shapes the narrative of a contested election in real time.",
    society:"Fox's identification with one political side is cemented in public perception.",
    government:"Media framing becomes a factor in the legitimacy contest over a disputed result." },
  causes:["foxnews"] },

{ id:"foxdominion", year:2023, date:"Apr 2023", era:7, cat:["tv","law"],
  title:"Fox Settles with Dominion",
  wiki:"Dominion Voting Systems",
  gallery:["Fox News","2020 United States presidential election"],
  summary:"Fox News pays $787.5 million to settle Dominion Voting Systems' defamation suit after discovery shows hosts and executives privately dismissed the election-fraud claims they amplified on air — accountability through litigation, not regulation.",
  importance:"After the 2020 election, Fox News amplified false claims that Dominion Voting Systems had rigged the vote. Dominion sued for defamation, and pretrial discovery surfaced internal messages in which Fox hosts and executives privately called the fraud allegations absurd even as the network broadcast them. In April 2023 Fox settled for $787.5 million, one of the largest defamation payments in American media history. No regulator acted; the FCC took no license action. The consequence came instead through the courts — a recurring pattern in this atlas, where, when regulation is absent or gridlocked, civil litigation becomes the de facto instrument of accountability.",
  impact:{
    regulation:"With no FCC action, a defamation suit becomes the only accountability mechanism.",
    communications:"Internal records expose a network knowingly broadcasting claims it privately doubted.",
    society:"Litigation, not regulation, sets the limit on false political broadcasting." },
  causes:["foxnews","citizensunited"] }

);

// ===================================================================
//  THREAD 3 — THE FABLE 5 EXPORT BAN  (Gallery VII)
// ===================================================================
window.ATLAS_EVENTS.push(

{ id:"fable5ban", year:2026, date:"June 2026", era:7, cat:["computing","law"],
  title:"The Fable 5 Export Ban",
  wiki:"Anthropic",
  gallery:["Export Administration Regulations","Artificial intelligence"],
  summary:"The U.S. government orders Anthropic to cut off access to its Claude Fable 5 and Mythos 5 models for all foreign nationals; unable to isolate users instantly, Anthropic disables both models worldwide — the first time Washington pulls a frontier AI model from the market on national-security grounds.",
  importance:"On the evening of June 12, 2026, Anthropic received a U.S. government directive ordering it to strip access to its most capable models, Fable 5 and Mythos 5, from every foreign national, including the company's own foreign-national employees. Because the models could not be instantly walled off user by user, the company disabled them entirely for all customers worldwide to comply. The directive cited a national-security concern without detailing it; Anthropic's understanding was that the government had learned of a 'jailbreak' technique, and a demonstration it reviewed used the method to surface a small number of already-known, minor software vulnerabilities — with the broader worry that a model adept at finding such flaws could become a cyberweapon. Access to the company's other models was unaffected. Reported by TIME, Al Jazeera, Fortune and others and confirmed in Anthropic's own statement, the action marked the first time the United States used national-security authority to withdraw a frontier AI model from the market — the moment AI capability collided head-on with export-control power.",
  impact:{
    government:"For the first time, national-security authority is used to pull a frontier AI model from the market.",
    regulation:"Frontier models are treated as controlled, export-restricted technology rather than ordinary software.",
    technology:"A model's vulnerability-finding skill is reframed as a potential cyberweapon to be contained.",
    society:"Global users lose access overnight as a domestic security order ripples worldwide." },
  causes:["palantirtitan","snowden"] }

);
