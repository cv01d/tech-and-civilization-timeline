// SUPPLEMENT — closed-circuit television, from a rocket-observation camera in a Nazi
// research bunker to the AI-driven, billion-camera surveillance of the present. The
// regulatory response — European data-protection law, scattered municipal facial-
// recognition bans, the EU AI Act — has been real but consistently delayed and narrow.
// The homeless-displacement thread runs through it as its most honest expression:
// cameras were never neutral observers but instruments for deciding who belongs in a
// public space and who does not. (The EU AI Act and GDPR live elsewhere; cross-linked.)
// Round one: data only — images to follow.
window.ATLAS_EVENTS.push(

{ id:"theremintv", year:1927, date:"1927", era:4, cat:"surveillance",
  title:"Theremin's Television Eye",
  wiki:"Léon Theremin",
  summary:"The Russian physicist Léon Theremin reportedly demonstrates an early television-surveillance system to the Soviet leadership — among the first known uses of live video to watch people for the state.",
  importance:"Best known for his eponymous instrument, Theremin also built mechanical-television apparatus that, by some accounts, was shown to Soviet officials as a means of live observation. Whether or not the demonstration was as described, it marks the conceptual origin of the surveillance camera: live video repurposed from broadcast novelty to an instrument of state watching. The lineage from that idea to the billion-camera networks at the end of this gallery is direct.",
  impact:{
    surveillance:"Live video is conceived from the start as a tool for the state to watch individuals.",
    technology:"Early television is bent from broadcast toward observation.",
    power:"The watching eye is imagined as an instrument of political control." },
  effects:["cctvpeenemunde"] },

{ id:"cctvpeenemunde", year:1942, date:"1942", era:4, cat:"surveillance",
  title:"The First CCTV: Watching a Rocket",
  wiki:"Closed-circuit television",
  summary:"Siemens engineer Walter Bruch installs the first documented closed-circuit television at Peenemünde, so personnel can watch V-2 rocket launches from a bunker — live only, recording nothing.",
  importance:"The technology that would one day watch billions in public was born as a tool of war: a camera letting Nazi engineers observe a rocket too dangerous to stand near, the footage live and unrecorded. CCTV began purely as remote observation, with no capacity to store what it saw — a memory it would not acquire for another quarter-century. That origin matters: surveillance video entered the world as a safety instrument for watching a machine, and only gradually turned its lens on people.",
  impact:{
    surveillance:"The foundational surveillance-camera architecture is born as live-only military observation.",
    technology:"Closed-circuit video is engineered for remote, real-time watching.",
    power:"The state's first CCTV serves the apparatus of war." },
  causes:["theremintv"], effects:["vericon","cctvcoronation"] },

{ id:"vericon", year:1949, date:"1949", era:5, cat:"surveillance",
  title:"CCTV Goes Commercial",
  wiki:"Closed-circuit television",
  summary:"Vericon markets the first commercial CCTV in the United States — still unable to record, still demanding constant human monitoring — sold to banks and industrial sites as a niche product.",
  importance:"With Vericon, CCTV left the military bunker for the bank lobby and the factory floor, but it remained a live-only system requiring a person to watch the monitor at all times. It was an industrial tool, not a public one, and entirely unregulated — there was as yet nothing to regulate, since nothing was stored. The commercialization established the private-sector ownership model that would later make CCTV's spread so hard to govern: cameras were property, deployed at the owner's discretion.",
  impact:{
    surveillance:"CCTV becomes a private industrial product, owned and run at the owner's discretion.",
    technology:"Live monitoring without recording defines the early commercial camera.",
    law:"An unregulated private surveillance market takes root before any rules exist." },
  causes:["cctvpeenemunde"], effects:["olean1968","ipcamera"] },

{ id:"cctvcoronation", year:1953, date:"1953", era:5, cat:"surveillance",
  title:"Cameras at the Coronation",
  wiki:"Coronation of Elizabeth II",
  summary:"London installs cameras to monitor the crowds at Elizabeth II's coronation — the first recorded use of surveillance cameras at a mass public event.",
  importance:"The 1953 coronation drew cameras not to broadcast the ceremony but to watch the throngs lining the route — the first time CCTV was turned on a public crowd. It was a quiet but decisive threshold: the lens that had observed a rocket now observed people gathered in the street. From the coronation it was a short step to the permanent municipal cameras that would make Britain the most surveilled society in the democratic world.",
  impact:{
    surveillance:"CCTV is first aimed at a public crowd rather than a machine or a vault.",
    power:"Watching the public gathers becomes a function of policing the event.",
    technology:"The camera proves its use for crowd observation at scale." },
  causes:["cctvpeenemunde"], effects:["trafalgarcctv","kingslynn"] },

{ id:"trafalgarcctv", year:1960, date:"1960", era:5, cat:"surveillance",
  title:"Trafalgar Square: Watching the Protest",
  wiki:"Trafalgar Square",
  summary:"The Metropolitan Police mount cameras in Trafalgar Square to monitor political demonstrations — the first police use of public street surveillance in a Western democracy.",
  importance:"When London police trained cameras on the demonstrators in Trafalgar Square, public CCTV crossed from crowd management into the surveillance of political assembly — watching not a celebration but a protest. It set an early, consequential precedent: that the camera in public space is, among other things, an instrument for observing dissent. The tension it opened, between security and the freedom to gather unwatched, runs through every entry that follows.",
  impact:{
    surveillance:"Police aim public cameras squarely at political demonstration.",
    power:"Surveillance of assembly becomes a tool of public order.",
    law:"The watching of protest proceeds with no law to constrain it." },
  causes:["cctvcoronation"], effects:["kingslynn","ringofsteel"] },

{ id:"olean1968", year:1968, date:"1968", era:5, cat:"surveillance",
  title:"Olean: The First Wired Main Street",
  wiki:"Olean, New York",
  summary:"Olean, New York becomes the first city in the world to line its main commercial street with CCTV for crime deterrence — the model cities everywhere will copy. The arrival of VCRs the same era lets cameras finally record.",
  importance:"Olean's downtown camera network was the first municipal deployment aimed at deterring street crime, the prototype for the town-center surveillance that would spread across the U.S. and Britain. It coincided with the technology that transformed CCTV's meaning: video recording, which turned the camera from a live-monitored eye into a machine that produced evidence — and a permanent record that could be retained, searched, and shared. From this point CCTV was no longer just watching; it was remembering.",
  impact:{
    surveillance:"The municipal crime-deterrence camera network is born and exported.",
    technology:"Recording turns CCTV from live observation into an evidence and memory system.",
    law:"Footage that can be stored and shared outruns any rule on retention." },
  causes:["vericon"], effects:["kingslynn","chicagocameras"] },

{ id:"kingslynn", year:1987, date:"1987", era:5, cat:"surveillance",
  title:"King's Lynn: The Municipal Floodgates",
  wiki:"King's Lynn",
  summary:"King's Lynn runs the first local-government-operated public CCTV network in Britain; its claimed success in deterring crime opens the floodgates for municipal surveillance across the country.",
  importance:"The King's Lynn system, owned and operated by the council, reported dramatic crime reductions and became the proof-of-concept British towns had wanted: a town-center camera network as standard civic infrastructure. Within a decade Britain would have millions of cameras and the densest public surveillance in the democratic world, justified again and again by King's Lynn's numbers. Academic scrutiny would later question both the crime-reduction claims and who, exactly, the operators chose to watch.",
  impact:{
    surveillance:"Council-run town-center CCTV becomes standard British civic infrastructure.",
    power:"Local government takes ownership of mass public surveillance.",
    law:"Cameras proliferate years ahead of any data-protection rule to govern them." },
  causes:["cctvcoronation","trafalgarcctv","olean1968"], effects:["ringofsteel","maxsurveillance"] },

{ id:"ringofsteel", year:1993, date:"1992–1993", era:6, cat:"surveillance",
  title:"London's Ring of Steel",
  wiki:"Ring of steel (London)",
  summary:"After IRA bombings in the City of London, a cordon of cameras and checkpoints rings the financial district — a counter-terror measure that becomes permanent infrastructure and the template for justifying urban surveillance in the name of security.",
  importance:"The Ring of Steel wrapped the City in cameras, including early automatic number-plate recognition, in response to IRA bombings — and like so much emergency surveillance, it never came down. It established the durable pattern by which a temporary security measure becomes permanent civic infrastructure, and by which 'terrorism' supplies the justification for watching everyone. The architecture pioneered around the City would be generalized across London and exported as a model for urban surveillance worldwide.",
  impact:{
    surveillance:"A counter-terror cordon becomes permanent, generalized urban surveillance.",
    power:"Security provides the standing rationale for watching an entire district.",
    technology:"Automatic number-plate recognition enters routine city surveillance." },
  causes:["trafalgarcctv","kingslynn"], effects:["london77","chinasurveillance"] },

{ id:"ipcamera", year:1996, date:"1996", era:6, cat:"surveillance",
  title:"The IP Camera",
  wiki:"IP camera",
  summary:"Axis Communications builds the first network camera — able to connect to the internet, stream footage anywhere, and store it digitally rather than on tape — laying the architecture of modern networked surveillance.",
  importance:"Putting the camera on the internet changed everything: footage no longer lived on a tape in a back room but could be streamed, centralized, stored cheaply, and accessed from anywhere. The IP camera is the bridge from isolated CCTV to the networked, searchable, integrable surveillance that AI would later make legible at scale. Every city-wide system and every cloud-stored doorbell camera in this museum runs on the architecture Axis introduced in 1996.",
  impact:{
    surveillance:"Cameras become networked nodes, their footage centralized and remotely accessible.",
    technology:"Digital, IP-based capture replaces the analog tape.",
    computing:"Networked storage makes footage searchable and ready for later AI analysis." },
  causes:["vericon"], effects:["chicagocameras","chinasurveillance","ring"] },

{ id:"maxsurveillance", year:1999, date:"1999", era:6, cat:"surveillance",
  title:"The Maximum Surveillance Society",
  wiki:"Mass surveillance in the United Kingdom",
  summary:"Clive Norris and Gary Armstrong's study of CCTV control rooms documents that operators disproportionately target Black men, the young, and the visibly poor — the first hard evidence of discriminatory surveillance patterns.",
  importance:"By watching the watchers, Norris and Armstrong's *The Maximum Surveillance Society* showed that CCTV was never the neutral, objective eye its proponents claimed: operators chose whom to follow, and they chose by race, age, and apparent poverty, tracking people for who they were rather than anything they had done. It was the first rigorous documentation of surveillance's built-in discrimination, and it named the dynamic that runs to this gallery's end — including the routine targeting of homeless people for the offense of being visibly unhoused in public space.",
  impact:{
    surveillance:"Empirical proof that CCTV operators target by race, age, and poverty.",
    power:"The camera is shown to encode and enforce social bias, not transcend it.",
    law:"Discriminatory targeting is documented years before any rule addresses it." },
  causes:["kingslynn"], effects:["gendershades","hostilearchitecture"] },

{ id:"chicagocameras", year:2003, date:"2003", era:6, cat:"surveillance",
  title:"Chicago Builds the Integrated Network",
  wiki:"Mass surveillance in the United States",
  summary:"Chicago links its cameras into a single citywide system — growing to some 15,000 by 2009 — the first major American city to build integrated mass surveillance, funded in the post-9/11 homeland-security boom.",
  importance:"Where American CCTV had been a scatter of private and local cameras, Chicago fused thousands into one centralized network feeding a unified command center, much of it underwritten by Department of Homeland Security grants flowing after 2001. It was the U.S. proof-of-concept for integrated municipal surveillance, the architecture other cities would adopt. The same post-9/11 money and logic that built it would later fund the camera networks used to monitor and clear homeless encampments.",
  impact:{
    surveillance:"Thousands of cameras are fused into one centralized American surveillance system.",
    power:"Federal homeland-security funding builds municipal surveillance at scale.",
    technology:"A unified command center integrates a city's cameras into a single view." },
  causes:["ipcamera","olean1968","patriotact"], effects:["hostilearchitecture","metlfr"] },

{ id:"london77", year:2005, date:"July 7, 2005", era:6, cat:"surveillance",
  title:"7/7 and the Vindication of CCTV",
  wiki:"7 July 2005 London bombings",
  summary:"CCTV footage identifies the London bombers within hours, becoming the most-cited proof of the camera's counter-terror value — by which point Britain has an estimated 4.2 million cameras, one for every fourteen people.",
  importance:"The speed with which CCTV identified the 7/7 attackers became the definitive argument for mass surveillance: proof, supporters said, that the cameras saved lives and caught killers. It accelerated deployment in a country already saturated — roughly 4.2 million cameras, making it impossible to cross central London unwatched. The bombing also sharpened the gallery's central tension: the same footage that identifies a terrorist also tracks every ordinary and vulnerable person who passes beneath the lens.",
  impact:{
    surveillance:"CCTV's role in solving 7/7 becomes the canonical case for mass deployment.",
    power:"A successful identification entrenches surveillance as proven public good.",
    law:"Saturation surveillance expands faster than the oversight meant to check it." },
  causes:["ringofsteel"], effects:["chinasurveillance","metlfr"] },

{ id:"chinasurveillance", year:2014, date:"2010s", era:7, cat:"surveillance",
  title:"China's Surveillance State and the Social Credit System",
  wiki:"Social Credit System",
  summary:"China fuses CCTV with facial recognition, phone tracking, and financial data into the Social Credit System — the most comprehensive AI-enabled surveillance ever built, designed to shape behavior through visibility — and grows toward an estimated 700 million cameras.",
  importance:"Pursuing a stated goal of surveillance that is 'omnipresent, fully networked, always working, and fully controllable,' China combined the era's camera, facial-recognition, and data-fusion technologies into a system that scores and steers citizens' access to transport, housing, and services. Real-time face matching against national databases of hundreds of millions made the camera not just an eye but a gate. It is the fullest realization of the idea latent in CCTV since 1942 — visibility as control — at a scale no other society has approached.",
  impact:{
    surveillance:"CCTV, facial recognition, and financial data fuse into behavioral control at national scale.",
    computing:"Real-time face matching against hundreds of millions makes the camera a gate.",
    power:"Visibility itself is wielded as the instrument of governance." },
  causes:["ringofsteel","ipcamera","london77"], effects:["chinaexport","gendershades","euaiactfr"] },

{ id:"chinaexport", year:2018, date:"2018", era:7, cat:"surveillance",
  title:"Exporting the Safe City",
  wiki:"Hikvision",
  summary:"Chinese firms — Huawei, Hikvision, Dahua — begin supplying camera systems and AI surveillance software to governments in dozens of countries, packaging the surveillance state as the fastest-growing product on the global market.",
  importance:"China's surveillance model did not stay in China: its 'safe city' packages — cameras, facial recognition, analytics — were sold to governments across Africa, the Middle East, and Central Asia, many of them authoritarian, in some 63 countries. Surveillance became an export industry, and the architecture of control became a commodity any state could buy off the shelf. The spread put AI-driven CCTV into the hands of regimes far beyond the reach of European data law or American municipal bans.",
  impact:{
    surveillance:"The turnkey surveillance state becomes a globally traded product.",
    power:"Authoritarian governments acquire AI surveillance without building it.",
    technology:"Facial-recognition CCTV proliferates faster than any framework to constrain it." },
  causes:["chinasurveillance"], effects:["euaiactfr"] },

{ id:"gendershades", year:2018, date:"2018", era:7, cat:"surveillance",
  title:"Gender Shades: The Bias in the Machine",
  wiki:"Joy Buolamwini",
  summary:"An MIT Media Lab study finds leading facial-recognition systems misidentify dark-skinned women up to a third of the time while achieving near-perfect accuracy on white men — the most influential evidence of racial bias in AI surveillance.",
  importance:"Joy Buolamwini's 'Gender Shades' audit put numbers to a danger civil-liberties advocates had warned of: facial recognition was dramatically less accurate on darker skin and on women, misidentifying dark-skinned women at rates up to 35% while barely erring on white men. Layered onto a surveillance apparatus already documented to target by race, the finding meant the technology would both watch the marginalized more and misidentify them more. It became the empirical backbone of the facial-recognition bans and the EU restrictions that followed.",
  impact:{
    surveillance:"Facial recognition is proven to misidentify dark-skinned women at alarming rates.",
    computing:"Algorithmic bias is quantified and made undeniable in a flagship audit.",
    law:"The study becomes the evidentiary basis for bans and restrictions worldwide." },
  causes:["chinasurveillance","maxsurveillance"], effects:["sfbanfr","techfrpause","euaiactfr"] },

{ id:"sfbanfr", year:2019, date:"May 2019", era:7, cat:"law",
  title:"San Francisco Bans Facial Recognition",
  wiki:"Facial recognition system",
  summary:"San Francisco becomes the first city in the world to bar its agencies from using facial-recognition technology — a deliberate rebuke from the city that houses Silicon Valley — with Oakland, Berkeley, and Boston following within months.",
  importance:"In a striking inversion, the city at the heart of the technology industry became the first government anywhere to forbid its own agencies from using facial recognition, citing its bias and its threat to civil liberties. The ban — quickly echoed by neighboring cities and Boston — opened the American front of municipal resistance to AI surveillance, a patchwork of local prohibitions standing in for the federal law that never came. It established that the regulatory answer in the U.S. would be scattered and city-by-city, not national.",
  impact:{
    law:"The first government ban on agency use of facial recognition is enacted.",
    surveillance:"American resistance to AI surveillance takes the form of municipal prohibition.",
    power:"The city housing the industry moves to constrain its core technology." },
  causes:["gendershades"], effects:["techfrpause","euaiactfr"] },

{ id:"techfrpause", year:2020, date:"June 2020", era:7, cat:"law",
  title:"The Vendors Pull Back",
  wiki:"Amazon Rekognition",
  summary:"Amid the George Floyd protests and mounting evidence of biased misidentification, IBM, Amazon, and Microsoft announce they will pause or end sales of facial recognition to U.S. police.",
  importance:"In the weeks after George Floyd's killing, three of the largest technology companies stepped back from selling facial recognition to police — IBM exiting the business, Amazon and Microsoft pausing — a rare case of industry self-restraint under public pressure rather than law. It signaled how toxic the bias evidence and the accountability moment had made the technology, at least in the American policing market. Yet, as with the companion-AI reckoning elsewhere in this museum, voluntary restraint substituted for the binding rules that legislators did not pass.",
  impact:{
    law:"Major vendors halt facial-recognition sales to police under public pressure, not statute.",
    surveillance:"The U.S. police market for facial recognition partially freezes.",
    power:"A protest movement, not a legislature, forces the industry's hand." },
  causes:["gendershades","sfbanfr","ferguson"], effects:["euaiactfr"] },

{ id:"euaiactfr", year:2023, date:"2023", era:7, cat:"law",
  title:"The EU Restricts Biometric Surveillance",
  wiki:"Facial recognition system",
  summary:"The EU AI Act bans real-time biometric surveillance in public spaces, with narrow exceptions — the world's first binding regulation of AI-powered CCTV — while GDPR is wielded at maximum scale, including a €1.2 billion Meta fine.",
  importance:"Where the U.S. produced municipal bans and voluntary pauses, the EU produced binding law: the AI Act prohibited real-time public biometric identification except in narrowly defined cases, the first international rule to constrain AI-driven CCTV outright. Alongside it, GDPR gave Europe genuine enforcement teeth, applied at scale in record fines. Together they made the EU the only jurisdiction with meaningful, enforceable limits on the surveillance technologies the rest of this gallery describes — even as those technologies spread everywhere else unchecked.",
  impact:{
    law:"The first binding regulation of AI-powered public surveillance is enacted.",
    surveillance:"Real-time public face-matching is prohibited in the EU but for narrow exceptions.",
    power:"Europe becomes the sole jurisdiction with enforceable limits on AI surveillance." },
  causes:["gendershades","chinasurveillance","chinaexport","sfbanfr","techfrpause"], effects:["metlfr"] },

{ id:"metlfr", year:2024, date:"2024–2025", era:7, cat:"surveillance",
  title:"Permanent Live Facial Recognition in London",
  wiki:"Facial recognition system",
  summary:"The Metropolitan Police install permanent live facial-recognition cameras in South London — the only European force using ongoing live LFR in public — even as the EU bans the practice next door, drawing concern from the UN Human Rights Committee.",
  importance:"As the EU moved to prohibit real-time public face-matching, the Met went the other way, installing permanent live facial-recognition cameras in Croydon and deploying the technology at sporting events and on officers' smartphones — the only police force in Europe to use ongoing live LFR in public space. It crystallized the gallery's split: binding restriction on one side of the Channel, accelerating deployment on the other, with the UN raising human-rights concerns. The watching eye of 1942 had become, in one of the world's oldest democracies, a permanent and recognizing fixture of the street.",
  impact:{
    surveillance:"Permanent live facial recognition is normalized on a major democratic city's streets.",
    law:"A force expands LFR even as a neighboring bloc bans it — divergence made concrete.",
    power:"Continuous real-time identification becomes routine public infrastructure." },
  causes:["euaiactfr","london77","chicagocameras"], effects:[] },

{ id:"hostilearchitecture", year:2015, date:"1980s–present", era:7, cat:"power",
  title:"Hostile Architecture and the Surveilled Poor",
  wiki:"Hostile architecture",
  summary:"CCTV joins anti-sleeping spikes, dividing benches, and boulders under bridges as a companion technology of exclusion — cameras and hostile design together deciding whose body is unwelcome in public space, with homeless people the group most directly managed.",
  importance:"Surveillance never only recorded public space; it helped manage it, and no group felt that management more than the unhoused. As CCTV spread through city centers, transit hubs, and business-improvement districts, operators were documented disproportionately tracking homeless people — not for crimes but for the 'antisocial' fact of their visible presence — while hostile architecture made the same spaces physically unlivable. The cameras built for terrorism and crime became, in practice, instruments of poverty management, pushing the most powerless people further out of sight and further from help.",
  impact:{
    power:"Surveillance and hostile design together police who may exist in public space.",
    surveillance:"Homeless people are tracked for their presence, the museum's clearest case of targeting the powerless.",
    law:"Business-improvement districts run private camera networks with no public accountability." },
  causes:["maxsurveillance","chicagocameras"], effects:["martinboise","grantspass"] },

{ id:"martinboise", year:2018, date:"2018", era:7, cat:"law",
  title:"Martin v. Boise",
  wiki:"Martin v. City of Boise",
  summary:"The Ninth Circuit rules that cities cannot enforce anti-camping ordinances against homeless people when no shelter is available — the first constitutional limit on encampment sweeps, against which CCTV-documented sweep evidence is challenged for five years across nine western states.",
  importance:"Martin held that punishing people for sleeping outside when they have nowhere else to go is cruel and unusual, the first constitutional brake on encampment clearances. For five years it constrained the western states, where surveillance footage used to document encampment 'conditions' and justify sweeps now had to answer to a constitutional standard. The ruling made explicit what the surveillance of the homeless was for — building the enforcement record for displacement — and briefly subjected it to law.",
  impact:{
    law:"The Constitution is held to limit punishing homelessness where no shelter exists.",
    power:"Encampment sweeps are constitutionally constrained for the first time.",
    surveillance:"Footage gathered to justify sweeps is forced to meet a legal standard." },
  causes:["hostilearchitecture"], effects:["grantspass"] },

{ id:"grantspass", year:2024, date:"June 28, 2024", era:7, cat:"law",
  title:"Grants Pass v. Johnson",
  wiki:"City of Grants Pass v. Johnson",
  summary:"The Supreme Court rules 6–3 that enforcing camping bans against homeless people is not cruel and unusual punishment, overturning Martin v. Boise; sweeps resume within weeks, and cities rapidly expand camera and AI tools to monitor encampments and document 'repeat occupiers.'",
  importance:"Grants Pass erased the constitutional protection Martin had established, restoring cities' full authority to punish sleeping in public regardless of whether any shelter exists — and within weeks California's governor ordered agencies to begin clearing encampments, with dozens of cities following. Freed of the Martin standard, cities expanded surveillance-assisted encampment management: camera networks and AI to locate camps, estimate populations, document repeat occupiers, and generate enforcement records. The infrastructure built for counter-terrorism became, openly, a tool of housing enforcement against the unhoused, with no privacy-impact rule and no accountability for what became of the people it helped displace.",
  impact:{
    law:"The Supreme Court restores full authority to criminalize public sleeping.",
    surveillance:"Counter-terror camera and AI infrastructure is repurposed for encampment enforcement.",
    power:"The least politically powerful are subjected to surveillance's consequences with the least recourse." },
  causes:["martinboise","hostilearchitecture","chicagocameras"], effects:[] },

{ id:"frcctv1998", year:1998, date:"1998", era:6, cat:"surveillance",
  title:"The First Face-Reading Cameras",
  wiki:"Facial recognition system",
  summary:"London authorities wire automated facial recognition into public CCTV — among the first deployments anywhere to try matching passers-by against a database in real time, turning the camera from a witness into an identifier.",
  importance:"In the late 1990s the London borough of Newham and the Metropolitan Police bolted early facial-recognition software onto street CCTV, attempting to flag known offenders automatically as they walked past — among the first public deployments of the technology in the world. The systems barely worked, but the threshold they crossed was conceptual and permanent: the camera was no longer a passive eye to be reviewed after the fact but an active identifier, reaching for a name in real time. Every later facial-recognition debate, from Gender Shades to the EU AI Act, traces back to this turn.",
  impact:{
    surveillance:"Public CCTV is first asked to recognize individuals automatically, not merely record them.",
    computing:"Early, unreliable face-matching is grafted onto the street camera.",
    law:"The leap from recording to identifying outruns any rule built for mere recording." },
  causes:["trafalgarcctv","ipcamera"], effects:["gendershades","bridges2019","metlfr"] },

{ id:"camcommissioner2016", year:2016, date:"2016", era:7, cat:"law",
  title:"Britain's Toothless Camera Watchdog",
  wiki:"Mass surveillance in the United Kingdom",
  summary:"The UK establishes a Surveillance Camera Commissioner — its first statutory oversight body for public CCTV — but with limited enforcement power and no authority to compel a camera's removal.",
  importance:"After decades in which Britain became the democratic world's most surveilled society with essentially no dedicated oversight, the Surveillance Camera Commissioner arrived as the first statutory check — and a notably weak one, able to issue guidance but not to force any camera down. It captured the recurring shape of British surveillance regulation: real on paper, slight in effect, always trailing the deployment it was meant to govern. The watchdog could watch the watchers, but it could not switch them off.",
  impact:{
    law:"The UK gains its first dedicated CCTV oversight body — without enforcement teeth.",
    surveillance:"Saturation surveillance is acknowledged in law yet left materially unconstrained.",
    power:"Oversight is granted in form while the cameras stay exactly where they are." },
  causes:["maxsurveillance","kingslynn"], effects:["bridges2019","euaiactfr"] },

{ id:"bridges2019", year:2019, date:"2019–2020", era:7, cat:"law",
  title:"Bridges v. South Wales Police",
  wiki:"R (Bridges) v Chief Constable of South Wales Police",
  summary:"The first European court ruling on public live facial recognition: a UK court finds South Wales Police's use lawful in 2019, but the Court of Appeal overturns it in 2020, holding the deployment unlawful for breaching privacy and equality duties.",
  importance:"Civil-liberties campaigner Ed Bridges challenged South Wales Police's live facial-recognition trials, and the case became the first time a court anywhere in Europe ruled on automated face-matching in public space. The High Court sided with the police in 2019; the Court of Appeal reversed in 2020, finding the deployment unlawful for inadequate safeguards and for failing to assess whether the system was racially or gender-biased — making Gender Shades, in effect, a legal duty. The split rulings framed the European fight that the EU AI Act would later try to settle.",
  impact:{
    law:"Europe's first judicial test of public live facial recognition ends in its being ruled unlawful.",
    surveillance:"A court demands proof that face-matching is not racially or gender-biased before use.",
    computing:"Algorithmic bias becomes a legal liability, not merely an academic finding." },
  causes:["frcctv1998","gendershades","camcommissioner2016"], effects:["euaiactfr","metlfr"] },

{ id:"courtspushback", year:2022, date:"2022–2023", era:7, cat:"law",
  title:"The Courts Push Back",
  wiki:"Homelessness in the United States",
  summary:"In the interregnum under Martin v. Boise, state courts halt encampment sweeps: a San Francisco judge enjoins clearances in 2022 (relying partly on the city's own surveillance data as evidence), and a Seattle court strikes down displacement rules in 2023 as unconstitutionally broad.",
  importance:"Between Martin and Grants Pass, the surveillance built to justify sweeps was turned against them: a San Francisco Superior Court emergency injunction in December 2022 barred the city from clearing encampments, citing the Martin standard and, pointedly, the city's own camera and enforcement data as evidence of what it had done. A Seattle court followed in 2023, finding the city's 'obstruction' definition unconstitutionally broad. For a brief window the footage gathered to displace the unhoused became the record that protected them.",
  impact:{
    law:"State courts use the Martin standard to halt encampment sweeps.",
    surveillance:"A city's own enforcement and camera data become evidence against its sweeps.",
    power:"For a brief window, surveillance is turned to the protection of the displaced." },
  causes:["martinboise","hostilearchitecture"], effects:["grantspass"] },

{ id:"camerasafety", year:2025, date:"2025", era:7, cat:"surveillance",
  title:"The Camera as Refuge",
  wiki:"Closed-circuit television",
  summary:"A BBC report documents a homeless man who deliberately sleeps where CCTV can see him because the cameras make him feel safer — a striking inversion of the surveillance logic, where being watched means protection from violence rather than displacement.",
  importance:"For most of this gallery the camera is an instrument of exclusion, but for some of the most exposed people it is the opposite: a 2025 BBC account followed a rough sleeper named Rich who sought out CCTV-covered spots precisely because the lens implied witnesses, and witnesses implied safety from the assaults the unhoused so often suffer. It is the museum's sharpest reminder that surveillance is never one thing — the same camera that documents an encampment for clearance can be the only thing standing between a vulnerable person and a beating. Watching can mean control, and it can mean care; who is watched, and why, decides which.",
  impact:{
    surveillance:"The watched, for once, seek the camera — visibility as protection, not threat.",
    power:"For the most exposed, being seen can mean safety the state otherwise fails to provide.",
    society:"The meaning of the lens is shown to depend entirely on who controls it and why." },
  causes:["hostilearchitecture","grantspass"], effects:[] }

);
