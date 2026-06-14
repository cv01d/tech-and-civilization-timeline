// SUPPLEMENT — public-safety communications, from beacon fires and the night watch
// to AI dispatch. The through-line is brutally consistent: each leap (telegraph →
// telephone → radio → digital → broadband) arrives well ahead of its regulation, and
// the regulation arrives only after a catastrophe — the 1906 San Francisco fire, 9/11,
// the killing of George Floyd — forces what experts had long urged and governments long
// deferred. (The telegraph itself and CALEA live elsewhere; this file cross-links.)
// Round one: data only — images to follow.
window.ATLAS_EVENTS.push(

{ id:"vigiles", year:6, date:"6 CE", era:1, cat:"general",
  title:"The Vigiles of Rome",
  wiki:"Vigiles",
  summary:"Augustus founds Rome's vigiles — a force of some 7,000 who patrol the city at night as combined firewatch and police, the first organized public-safety service of the ancient world.",
  importance:"After a series of devastating fires, Augustus established the vigiles in 6 CE: cohorts patrolling the streets by night with buckets, pumps, and the authority to break down doors, doubling as the city's nocturnal police. They relayed alarms by horn and runner, and their stations anchored a citywide system of fire watch and order. Every later arrangement in this timeline — the night watch, the firehouse bell, the dispatch center — descends from the vigiles' fusion of detection, communication, and response.",
  impact:{
    power:"The state takes responsibility for fire and order in public space.",
    communications:"Horns and runners form the first organized emergency alert network.",
    labor:"Firefighting and policing become a salaried public occupation." },
  effects:["rattlewatch","unionfire"] },

{ id:"rattlewatch", year:1658, date:"1658", era:2, cat:"general",
  title:"The Rattle Watch of New Amsterdam",
  wiki:"Watchman (law enforcement)",
  summary:"Eight paid men patrol the streets of New Amsterdam at night, shaking wooden rattles to summon help — among the first organized urban public-safety patrols in the Americas.",
  importance:"New Amsterdam's Rattle Watch carried wooden noisemakers whose clatter both signaled the watchmen's presence and called citizens to aid against fire or crime. It was a communications technology as much as a patrol: a sound that meant emergency, audible down a dark street. The watch is a direct ancestor of American policing and of the idea that a public signal — later a bell, a box, a siren, a number — should be able to summon collective help.",
  impact:{
    power:"Organized night patrol arrives in the American colonies.",
    communications:"The rattle is a portable alarm — emergency rendered as a recognizable sound.",
    labor:"A paid municipal watch precedes the professional police force." },
  causes:["vigiles"], effects:["unionfire","policeboxchicago"] },

{ id:"unionfire", year:1736, date:"1736", era:2, cat:"general",
  title:"Franklin's Union Fire Company",
  wiki:"Union Fire Company",
  summary:"Benjamin Franklin founds Philadelphia's Union Fire Company — America's first organized volunteer fire company — coordinated by runners, bells, and shouted alarms.",
  importance:"Franklin's company of volunteers, equipped with leather buckets and hooks and summoned by bell and runner, set the template for American firefighting for the next century and a half. Detection still depended on a watchman in a tower ringing coded patterns to signal which ward was burning, and response on neighbors relaying word by mouth. The whole apparatus was a communications problem waiting for a technology adequate to it — which the telegraph would supply.",
  impact:{
    power:"Civic volunteer firefighting becomes an American institution.",
    communications:"Coded tower bells encode location before any wire exists.",
    labor:"Mutual-aid fire companies organize urban labor around public safety." },
  causes:["rattlewatch"], effects:["firealarmtelegraph"] },

{ id:"firealarmtelegraph", year:1852, date:"1852", era:3, cat:"radio",
  title:"The Fire Alarm Telegraph",
  wiki:"Fire alarm system",
  summary:"Boston installs the first electric fire-alarm telegraph — street-corner pull boxes that send a coded location to a central station, which dispatches the apparatus. This is the architecture of all emergency dispatch.",
  importance:"Designed by William Channing and Moses Farmer, Boston's system let any citizen pull a box to send a coded signal over telegraph wire to a central office, where an operator decoded the location and dispatched horse-drawn engines. Response times collapsed, insurance rates followed, and within two decades New York, Chicago, and most major cities had copied it. Strip away the technology and the structure is exactly today's 911: a public can signal an emergency, a center localizes it, and a unit is sent — the foundational pattern of organized dispatch.",
  impact:{
    communications:"The first electric emergency-reporting network ties the public to a dispatch center.",
    technology:"The telegraph is adapted from message-carrying to instant alarm.",
    power:"The city gains a nervous system for sensing fire in real time." },
  causes:["unionfire","telegraph"], effects:["policeboxchicago","policeradio"] },

{ id:"policeboxchicago", year:1880, date:"1880", era:4, cat:"radio",
  title:"The Police Call Box",
  wiki:"Police box",
  summary:"Chicago installs the first police call box; beat officers can signal headquarters — 'wagon required,' 'accident,' 'murder' — via coded dials without leaving their post.",
  importance:"Borrowing the fire-alarm telegraph's architecture, police call boxes spread through the 1880s to Washington, Boston, and Detroit, some with rotary dials that sent specific coded messages back to headquarters. For the first time the patrolling officer was a node in a network rather than a lone figure on a beat, able to call for a wagon or report a crime in seconds. The boxes also surfaced the first interoperability headaches, as neighboring jurisdictions bought incompatible equipment — a problem that would haunt public safety for the next 140 years.",
  impact:{
    communications:"The beat officer becomes a connected endpoint of a citywide system.",
    power:"Headquarters can coordinate patrol across a city in near-real time.",
    technology:"Coded dials compress speech into machine-readable categories before radio." },
  causes:["firealarmtelegraph","rattlewatch"], effects:["policeradio","apcotencodes"] },

{ id:"sfquake1906comms", year:1906, date:"1906", era:4, cat:"radio",
  title:"San Francisco Burns: Communications Collapse",
  wiki:"1906 San Francisco earthquake",
  summary:"The earthquake severs the city's alarm and telegraph lines; fire companies cannot coordinate and the city burns for three days — an early lesson that emergency communications must be redundant or they fail when needed most.",
  importance:"The 1906 quake destroyed not only buildings but the very infrastructure meant to fight the fires that followed: alarm circuits, telegraph lines, and water mains all failed together, leaving fire companies unable to coordinate while the city burned for three days. The catastrophe became one of the first arguments for redundancy and hardening in emergency communications — the recognition that a single-path system is no system in a disaster. It established the pattern this whole timeline repeats: a communications failure of catastrophic scale forcing reform that had been deferred.",
  impact:{
    communications:"Single-path alarm networks are exposed as fatally fragile in disaster.",
    power:"Civic reconstruction is forced to treat communications as critical infrastructure.",
    technology:"Redundancy enters the design vocabulary of public-safety systems." },
  causes:["firealarmtelegraph","policeboxchicago"], effects:["policeradio","sept11comms"] },

{ id:"policeradio", year:1928, date:"1928", era:4, cat:"radio",
  title:"Police Radio: From Reactive to Proactive",
  wiki:"Police radio",
  summary:"Detroit puts a one-way radio system into patrol cars; headquarters can now push a dispatch to every car at once — inverting the model from the officer who calls in to the center that reaches out.",
  importance:"Detroit's 1928 one-way system let headquarters broadcast to all patrol cars simultaneously, and within a decade most major departments followed, Indianapolis and Chicago among the first to equip cars. The shift was conceptual as much as technical: policing moved from reactive (an officer finds a box and calls in) to proactive (the center pushes information out to mobile units). The patrol car ceased to be an isolated unit and became a receiver in a citywide broadcast network.",
  impact:{
    communications:"One-way radio makes the dispatch center a broadcaster to mobile units.",
    power:"Command can direct an entire patrol force in real time.",
    technology:"The patrol car becomes a node in a wireless network." },
  causes:["policeboxchicago","sfquake1906comms"], effects:["twowayradio","apcotencodes"] },

{ id:"twowayradio", year:1933, date:"1933", era:4, cat:"radio",
  title:"Two-Way Police Radio",
  wiki:"Two-way radio",
  summary:"Two-way radio lets officers both receive and transmit, turning the patrol car from a broadcast endpoint into an interactive node — and World War II perfects the technology at scale.",
  importance:"With two-way radio, the patrol car could answer back: officers could report, request, and coordinate, not merely listen. World War II then industrialized the technology, producing rugged mobile sets and walkie-talkies and a generation of veterans who carried the expertise into civilian departments. The interactive radio link — center and unit in continuous dialogue — became the central nervous system of modern policing and the medium onto which dispatch, codes, and eventually data would all be layered.",
  impact:{
    communications:"Bidirectional radio makes command and patrol a continuous conversation.",
    technology:"Wartime electronics deliver rugged, portable two-way sets at scale.",
    labor:"The dispatcher and the radio-equipped officer become a coordinated pair." },
  causes:["policeradio"], effects:["apcotencodes","emergency911"] },

{ id:"apcotencodes", year:1937, date:"1937", era:4, cat:"radio",
  title:"The Ten-Codes",
  wiki:"Ten-code",
  summary:"APCO standardizes radio brevity codes — '10-4,' '10-20' — to compress speech and spare scarce channels, giving American policing a structured, near-machine-readable language decades before machines.",
  importance:"With radio channels few and crowded, the Association of Public-Safety Communications Officials codified a set of numeric brevity codes so a status, a location, or a request could be sent in a syllable or two. '10-4' and '10-20' became the dialect of American policing, prizing compression and standardization. The ten-codes prefigure the digital era's logic — structured, unambiguous, parseable signals — imposed on human speech long before any computer was on the channel to read them.",
  impact:{
    communications:"Speech is compressed into a standardized code to conserve bandwidth.",
    technology:"A structured, machine-readable signaling scheme arrives ahead of the machines.",
    labor:"A shared professional language binds dispatchers and officers nationwide." },
  causes:["twowayradio","policeradio"], effects:["emergency911","cad1980"] },

{ id:"britain999", year:1937, date:"1937", era:4, cat:"radio",
  title:"Britain's 999",
  wiki:"999 (emergency telephone number)",
  summary:"London introduces 999, the world's first universal three-digit emergency number, proving the concept that one short number could summon any emergency service.",
  importance:"Prompted by a fatal house fire whose neighbors could not reach help quickly, Britain launched 999 in London in 1937 — a single number, easy to dial even in the dark or by feel, that reached a switchboard able to route the call to police, fire, or ambulance. It demonstrated that emergency access could be universal and memorized rather than local and looked-up. Three decades later the United States would adopt the same idea as 911.",
  impact:{
    communications:"A single memorized number replaces a patchwork of local lines.",
    power:"Universal emergency access becomes a baseline public service.",
    technology:"The telephone network is engineered to prioritize an emergency code." },
  causes:["twowayradio"], effects:["emergency911"] },

{ id:"emergency911", year:1968, date:"February 16, 1968", era:5, cat:"radio",
  title:"The First 911 Call",
  wiki:"9-1-1",
  summary:"The first U.S. 911 call is placed in Haleyville, Alabama; chosen for its brevity on a rotary dial, 911 becomes the nation's universal emergency number — though the infrastructure to support it will take decades to build.",
  importance:"After a presidential commission urged a single emergency number, the FCC and AT&T settled on 911 for its speed and simplicity on a rotary phone, and the first call was placed in Haleyville in February 1968 — the red telephone now sits in a museum. The number was instantly national in principle and stubbornly local in practice: building the answering centers, trunk lines, and protocols to honor it would occupy the next half-century. 911 also created a new profession, the trained dispatcher staffing a Public Safety Answering Point.",
  impact:{
    communications:"The U.S. gains one universal number to summon any emergency service.",
    labor:"The dispatcher and the PSAP become a recognized, trained profession.",
    power:"The state guarantees a single point of access to emergency help." },
  causes:["britain999","twowayradio","apcotencodes"], effects:["cad1980","enhanced911","sept11comms"] },

{ id:"cad1980", year:1980, date:"1980", era:5, cat:"radio",
  title:"Computer-Aided Dispatch",
  wiki:"Computer-aided dispatch",
  summary:"Large answering centers adopt Computer-Aided Dispatch: call-takers enter incidents that the system routes to the nearest available unit, and paper dispatch logs become digital records.",
  importance:"CAD moved dispatch off the paper card and onto the screen, letting a call-taker enter an incident that software could classify, prioritize, and route to the closest free unit while creating a permanent digital record. It is the computational layer the ten-codes had anticipated — structured incident data, now actually processed by a machine. CAD systems became the operational heart of the modern PSAP and the substrate onto which location data, mapping, and eventually AI would later attach.",
  impact:{
    communications:"Dispatch becomes a data system, routing units algorithmically.",
    technology:"Incidents are captured as structured, queryable digital records.",
    labor:"The call-taker's work is reorganized around the terminal." },
  causes:["emergency911","apcotencodes"], effects:["enhanced911","aidispatch"] },

{ id:"enhanced911", year:1996, date:"1981–1996", era:6, cat:"radio",
  title:"Enhanced 911: The Call Locates Itself",
  wiki:"Enhanced 9-1-1",
  summary:"Enhanced 911 adds automatic number and location identification, so the dispatcher sees the caller's number and address automatically — even when the caller cannot speak.",
  importance:"In stages through the 1980s and 1990s, E-911 attached automatic number identification and then automatic location identification to the call, so the screen showed who was calling and from where without anyone having to say it. The transformation was profound for the silent, the injured, and the terrified: a call that could not be spoken could still be found. It also set the technical stage for the harder problem of locating mobile callers, who carried no fixed address at all.",
  impact:{
    communications:"The emergency call carries its own number and location automatically.",
    technology:"Telephone signaling is extended to deliver caller identity and address.",
    power:"Help can reach a caller who cannot describe where they are." },
  causes:["emergency911","cad1980"], effects:["wirelesse911","ng911"] },

{ id:"project25", year:1989, date:"late 1980s", era:5, cat:"radio",
  title:"Project 25: The Interoperability Standard",
  wiki:"Project 25",
  summary:"APCO and industry begin Project 25, an open digital-radio standard so police, fire, and EMS can talk across jurisdictions regardless of manufacturer — because every major disaster had exposed incompatible radios as a lethal failure.",
  importance:"P25 was born of a recurring nightmare: agencies arriving at the same emergency on radios that could not talk to each other, because they bought different brands on different bands. The standard aimed to make digital radios interoperable by design, an open specification any manufacturer could meet. Its development through the 1990s, and its slow deployment after 2001, is the technical spine of the entire interoperability story — the attempt to engineer away a failure that kept killing first responders.",
  impact:{
    communications:"An open standard targets cross-agency radio interoperability directly.",
    technology:"Digital radio is specified to be vendor-neutral by design.",
    power:"Disaster-driven failures are reframed as a solvable standards problem." },
  causes:["twowayradio"], effects:["sept11comms","firstnet"] },

{ id:"sept11comms", year:2001, date:"September 11, 2001", era:6, cat:"radio",
  title:"9/11: The Radios That Could Not Talk",
  wiki:"September 11 attacks",
  summary:"At the World Trade Center, NYPD and FDNY operate incompatible radio systems; police aviators broadcast evacuation warnings that fire commanders never hear, and cellular networks collapse under load — the defining communications failure in American public safety.",
  importance:"The 9/11 Commission devoted sustained attention to a communications catastrophe: police and fire on systems that could not interoperate, evacuation warnings from NYPD helicopters that FDNY commanders in the towers never received, and civilian cellular networks failing under the surge. It became the single most powerful case study for interoperability reform in the nation's history, the proof that incompatible radios cost responders' lives. Everything after — accelerated P25 deployment, federal interoperability mandates, and ultimately FirstNet — descends from that morning.",
  impact:{
    communications:"Incompatible radios are shown, at lethal scale, to be a structural failure.",
    power:"The federal government is forced to treat interoperability as a national priority.",
    technology:"Cellular collapse under load motivates a dedicated responder network." },
  causes:["project25","emergency911","sfquake1906comms"], effects:["firstnet","ng911"] },

{ id:"wirelesse911", year:1999, date:"1999", era:6, cat:"radio",
  title:"Locating the Cell Phone",
  wiki:"Enhanced 9-1-1",
  summary:"The Wireless Communications and Public Safety Act makes 911 the universal number for mobile phones and requires carriers to deliver caller location — first by cell tower, then to GPS precision.",
  importance:"As calls migrated to mobile phones that carried no fixed address, a 911 system built around wired location was suddenly blind to most callers; the 1999 Act and the FCC's phased mandates forced carriers to deliver first approximate (tower-based) and then precise (handset GPS) location. It dragged emergency location into the wireless age and asserted a regulatory principle that recurs through this atlas: that the network owes the public safety the ability to be found. The mandate's slow, contested rollout also previewed how far implementation can lag a law.",
  impact:{
    law:"Carriers are legally compelled to make mobile emergency callers locatable.",
    communications:"911 is extended to the mobile network that was eclipsing the landline.",
    surveillance:"Precise handset location, mandated for rescue, becomes infrastructure with broader uses." },
  causes:["enhanced911"], effects:["ng911","firstnet"] },

{ id:"firstnet", year:2012, date:"2012", era:7, cat:"radio",
  title:"FirstNet: A Network for First Responders",
  wiki:"FirstNet",
  summary:"Congress creates FirstNet — a nationwide public-safety broadband network with dedicated spectrum and priority access — the direct legislative descendant of the 9/11 communications failure.",
  importance:"With $7 billion in seed funding and 10 MHz of dedicated spectrum, Congress authorized FirstNet in 2012 to build the network 9/11 had proven necessary: one where a responder's data and calls cannot be bumped by civilian traffic at the worst moment. AT&T was selected in 2017 to construct it under a 25-year partnership. FirstNet is the broadband generation of public-safety communications — the lineage running telegraph to radio to digital to broadband, each step forced by a disaster, reaching its current form.",
  impact:{
    communications:"First responders gain a dedicated broadband network with priority access.",
    power:"The state builds critical communications infrastructure as a public mandate.",
    technology:"Public safety moves from voice radio to data-rich broadband." },
  causes:["sept11comms","project25","wirelesse911"], effects:["aidispatch","ng911"] },

{ id:"textto911", year:2014, date:"2013–2016", era:7, cat:"radio",
  title:"Text-to-911",
  wiki:"9-1-1",
  summary:"Carriers begin supporting text messages to 911, letting people reach help silently — vital for domestic-violence and active-shooter situations and for deaf and hard-of-hearing callers.",
  importance:"For the first time the emergency network admitted a channel other than voice: a text to 911 could summon help when speaking aloud was dangerous or impossible. The FCC pushed carrier support through the mid-2010s, opening emergency access to the deaf and hard-of-hearing community and to anyone hiding from a threat in the same room. It was also the first crack in the voice-only architecture that 911 had carried since 1968, pointing toward the multimedia, IP-based future of Next Generation 911.",
  impact:{
    communications:"Silent, text-based access to 911 reaches those who cannot safely speak.",
    power:"Emergency access is extended to the deaf and hard-of-hearing as a right.",
    technology:"The voice-only 911 architecture admits its first data channel." },
  causes:["enhanced911","firstnet"], effects:["ng911"] },

{ id:"bodycameras", year:2015, date:"2014–2016", era:7, cat:"cctv",
  title:"Body-Worn Cameras at Scale",
  wiki:"Body worn video (police equipment)",
  summary:"After Ferguson, the Justice Department funds body cameras for hundreds of departments; within two years nearly half of U.S. agencies have them — but no uniform rule governs when they record, who sees the footage, or how long it is kept.",
  importance:"The killing of Michael Brown and the absence of any recording of it made body-worn cameras the central instrument of the police-accountability debate, and federal funding pushed them into nearly 500 departments across 47 states. But the cameras arrived as hardware without a governing framework: no uniform policy on activation, footage access, or retention, leaving each department to write its own rules. The technology of accountability had outrun the law of accountability — and studies would later find the transparency it promised was often unfulfilled.",
  impact:{
    surveillance:"Half of U.S. policing is recorded, with no uniform rules of access or retention.",
    law:"Cameras spread far faster than any statute to govern their footage.",
    power:"The promise of accountability is made material — and only partly kept." },
  causes:["ferguson"], effects:["policecameraact","aibodycam"] },

{ id:"ng911", year:2024, date:"July 2024", era:7, cat:"law",
  title:"Next Generation 911 Becomes a Mandate",
  wiki:"9-1-1",
  summary:"The FCC adopts binding rules compelling carriers to begin the move to IP-based Next Generation 911 — text, data, and multimedia alongside voice — more than 15 years after the concept was first written into law.",
  importance:"NG911 had been a stated goal since 2007, yet most of the country's 6,000-plus answering points still ran on protocols little changed since 1968, hobbled by funding gaps and infrastructure debt. The FCC's 2024 rules were the first binding federal mandate forcing the analog-to-IP transition that would let 911 carry text, images, and data, not just voice. The fifteen-year gap between codifying the idea and compelling it is this atlas's recurring lesson in miniature: the mandate is slow, and implementation slower still.",
  impact:{
    law:"A binding rule finally compels the IP overhaul long urged and long deferred.",
    communications:"911 moves toward carrying multimedia and data, not voice alone.",
    technology:"Decades of analog infrastructure debt are forced toward modernization." },
  causes:["enhanced911","sept11comms","textto911","wirelesse911"], effects:["aidispatch"] },

{ id:"aidispatch", year:2024, date:"2024", era:7, cat:"computing",
  title:"AI Enters 911 Dispatch",
  wiki:"Public-safety answering point",
  summary:"Vendors begin deploying AI that analyzes 911 calls in real time to help dispatchers prioritize, classify, and route incidents — with no federal or state framework yet governing the use of AI in emergency dispatch.",
  importance:"As call volumes strained understaffed answering points, companies began layering AI onto the CAD systems built in 1980 — transcribing and triaging calls, suggesting classifications, flagging severity — with early adopters across Texas, Arizona, and California. The capability arrived, as ever, ahead of any rule: no federal or state framework governs how AI may shape a dispatch decision that can determine who is sent, how fast, and whether someone lives. It is the newest iteration of the oldest pattern in public safety, the telegraph-alarm logic of 1852 now mediated by a model.",
  impact:{
    computing:"Real-time AI triage is inserted into the life-or-death dispatch loop.",
    law:"AI shapes emergency response with no governing framework in place.",
    communications:"The CAD system gains an algorithmic layer between caller and responder." },
  causes:["cad1980","ng911","firstnet"], effects:["aibodycam"] },

{ id:"aibodycam", year:2024, date:"2024", era:7, cat:"cctv",
  title:"AI Reads the Body-Camera Archive",
  wiki:"Body worn video (police equipment)",
  summary:"Departments turn to AI to sift the millions of unreviewed hours of body-camera footage that human reviewers could never watch — flagging misconduct, finding patterns, and surfacing training cases.",
  importance:"Body cameras created an archive too vast to review: most footage was never watched by anyone, the evidence of accountability piling up unexamined. Departments began deploying AI to mine it — flagging possible misconduct, identifying patterns, surfacing teachable moments — and, with 'smart holsters' that auto-activate a camera when a weapon is drawn, to close the gaps in what gets recorded in the first place. The surveillance that began as a check on power now requires its own machine intelligence to be legible, with little law governing what that intelligence is allowed to do.",
  impact:{
    surveillance:"AI makes a previously unwatchable archive searchable at scale.",
    computing:"Footage analysis becomes a machine-learning problem of pattern detection.",
    law:"The use of AI on body-camera footage proceeds with scant oversight." },
  causes:["bodycameras","aidispatch"], effects:["policecameraact"] },

{ id:"policecameraact", year:2025, date:"February 2025", era:7, cat:"law",
  title:"The Police CAMERA Act",
  wiki:"Body worn video (police equipment)",
  summary:"A bill proposing federal minimum standards for body-camera use and footage transparency is introduced in Congress — and, as of mid-2026, has not passed, leaving the patchwork of state rules intact.",
  importance:"A decade after Ferguson made cameras ubiquitous, no federal law set when they must record, who may access the footage, or how long it must be kept; the Police CAMERA Act proposed exactly those minimum standards. Its stalling left more than half the states mandating cameras under their own varied rules and the rest without — the same uneven, crisis-driven, implementation-lagging pattern that defines every chapter of this story. The technology was nationwide; the governing law was not.",
  impact:{
    law:"Proposed federal minimum standards for body cameras stall in Congress.",
    surveillance:"Footage access and retention remain governed by a state-by-state patchwork.",
    power:"The accountability promised in 2014 is left only partly secured in law." },
  causes:["bodycameras","aibodycam"], effects:[] },

{ id:"policetelephone1877", year:1877, date:"1877", era:4, cat:"radio",
  title:"The First Police Telephone",
  wiki:"Police box",
  summary:"Albany, New York installs the first police telephone, beginning the transition from coded telegraph signals to actual speech between the beat and headquarters.",
  importance:"For a generation the patrol officer's only link to headquarters was the telegraph and its terse coded pulses; the 1877 Albany installation put a telephone on the street, letting an officer speak plainly to the station for the first time. It was the opening of a long migration — telegraph to telephone to radio — that would steadily widen the channel between the field and the center. The coded call box would persist for decades, but the principle that a responder should be able to talk, not just signal, was established here.",
  impact:{
    communications:"Speech replaces coded pulses on the link between officer and headquarters.",
    technology:"The new telephone is pressed almost immediately into public-safety service.",
    labor:"The beat officer gains a richer, faster way to summon aid and report." },
  causes:["firealarmtelegraph","telegraph"], effects:["policeboxchicago","policeradio"] },

{ id:"wtcbombing93", year:1993, date:"February 1993", era:6, cat:"radio",
  title:"The 1993 Warning Ignored",
  wiki:"1993 World Trade Center bombing",
  summary:"During the World Trade Center bombing, New York police and fire crews struggle to coordinate on incompatible systems — a clear interoperability failure that is noted and then left unaddressed, eight years before 9/11.",
  importance:"The 1993 truck-bombing of the World Trade Center forced NYPD and FDNY to respond together, and exposed exactly the communications incompatibility that would prove catastrophic in the same towers in 2001: radios that could not talk across agencies, command structures that could not share a picture. The problem was documented and then deferred — no structural reform followed. It stands as the atlas's sharpest example of a warning delivered, understood, and ignored until the disaster it predicted arrived.",
  impact:{
    communications:"Cross-agency radio incompatibility is exposed at the WTC — and not fixed.",
    power:"A documented interoperability failure is deferred for eight years.",
    technology:"The case for an open digital standard is made and shelved." },
  causes:["project25"], effects:["sept11comms","calea"] },

{ id:"intelreform2004", year:2004, date:"2004", era:7, cat:"law",
  title:"The Office of Emergency Communications",
  wiki:"Intelligence Reform and Terrorism Prevention Act of 2004",
  summary:"The Intelligence Reform and Terrorism Prevention Act mandates interoperability planning for all DHS-funded public-safety agencies and creates an Office of Emergency Communications — the first federal machinery built directly from the 9/11 communications failure.",
  importance:"Acting on the 9/11 Commission's findings, Congress required that any agency taking homeland-security funds plan for interoperable communications, and stood up a federal office to coordinate it. It converted the morning's lesson — that incompatible radios kill responders — into a standing bureaucratic mandate, the institutional bridge between the catastrophe and FirstNet. Like every reform in this story, it arrived only after the disaster and would take years more to translate into working systems on the ground.",
  impact:{
    law:"Federal funding is conditioned on interoperability planning for the first time.",
    power:"A dedicated federal office is created to coordinate emergency communications.",
    communications:"The institutional path from 9/11 to a national responder network is laid." },
  causes:["sept11comms"], effects:["firstnet","ng911"] },

{ id:"georgefloyd", year:2020, date:"May 2020", era:7, cat:"cctv",
  title:"George Floyd: Video as Witness",
  wiki:"Murder of George Floyd",
  summary:"The killing of George Floyd is captured on bystander phone video and police body cameras and seen by hundreds of millions — the most consequential single use of video evidence in American policing, driving a new wave of body-camera and transparency law.",
  importance:"Where Ferguson had no footage, Floyd's death was recorded from multiple angles — a bystander's phone and officers' body cameras — and that record, viewed worldwide, made the camera's role in accountability undeniable and central. It drove renewed legislative pushes for body-camera mandates and footage-transparency rules at state and federal level, and it accelerated the corporate retreat from selling facial recognition to police. It is the moment the surveillance built to watch the public became, decisively, a record the public used to watch power back.",
  impact:{
    surveillance:"Bystander and body-camera video become the decisive instruments of police accountability.",
    law:"A wave of state and federal body-camera and transparency proposals follows.",
    power:"Footage viewed by hundreds of millions turns the camera against the institution that holds it." },
  causes:["ferguson","bodycameras"], effects:["policecameraact","techfrpause"] },

{ id:"shotspotter", year:2021, date:"2020–2022", era:7, cat:"cctv",
  title:"ShotSpotter: Automated Suspicion",
  wiki:"ShotSpotter",
  summary:"The acoustic gunshot-detection system, deployed in dozens of cities to dispatch police automatically, is found to generate heavy false positives and to disproportionately target Black and Latino neighborhoods; Chicago drops it in 2022 and others follow.",
  importance:"ShotSpotter placed microphones across cities to detect gunfire and send police automatically — and investigations found it routinely dispatched officers to places with no evidence of a shooting, concentrated in Black and Latino neighborhoods that thereby drew more armed police attention. Chicago dropped its contract in 2022 and other cities followed, making it a landmark case in the risks of automated systems steering police response with inadequate oversight. It is the direct precursor to the AI-dispatch question: a machine deciding where suspicion falls, its errors borne unequally.",
  impact:{
    surveillance:"Acoustic sensors automate suspicion and concentrate it by race and place.",
    computing:"An automated dispatch trigger is shown to produce systematic false positives.",
    law:"Cities cancel contracts faster than any framework to govern automated policing emerges." },
  causes:["bodycameras"], effects:["aidispatch","aibodycam"] }

);
