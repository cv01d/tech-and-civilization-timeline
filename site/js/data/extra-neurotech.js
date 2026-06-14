// SUPPLEMENT — neurotechnology and immersive reality: two frontiers that both begin with
// a 19th/20th-century insight (the brain emits measurable electricity; two offset images
// make depth) and run through military and academic labs toward a present in which devices
// read from and write to the nervous system and wrap the senses in synthetic worlds — far
// ahead of any law written for them. BCI (Berger → BrainGate → Neuralink) and VR/AR
// (Wheatstone → Sutherland → Oculus → Vision Pro) share the through-line: invention first,
// reckoning after. cat:"neurotech" (+ law for the rights/regulation cards). Data only.
window.ATLAS_EVENTS.push(

// ===== I. READING THE BRAIN =====
{ id:"bergereeg", year:1924, date:"1924", era:4, cat:"neurotech",
  title:"The First Human EEG",
  wiki:"Electroencephalography", gallery:["Hans Berger"],
  summary:"German psychiatrist Hans Berger records the first human electroencephalogram, proving that the living brain produces measurable electrical rhythms through the intact skull — the foundation of all non-invasive neurotechnology.",
  importance:"Berger's recordings established the startling fact on which every brain-computer interface rests: thought has an electrical signature that can be measured from outside the head. Long doubted by his peers, the EEG became the basic instrument of neuroscience and the first window onto the brain's activity in real time. Every later effort to read intention from neural signals — to move a cursor or a robotic arm by thought — descends from the alpha waves Berger first traced in 1924.",
  impact:{
    technology:"Brain activity is shown to be measurable as electrical rhythm through the skull.",
    society:"The instrument that makes non-invasive neurotech possible is born.",
    surveillance:"For the first time, an internal mental state leaves a recordable external trace." },
  causes:[], effects:["walterbci","vidalbci","dobellevision"] },

{ id:"walterbci", year:1964, date:"1960s", era:5, cat:"neurotech",
  title:"Brain Signals Move a Machine",
  wiki:"William Grey Walter", gallery:["Electroencephalography","Contingent negative variation"],
  summary:"Neurophysiologist Grey Walter demonstrates that EEG signals recorded from a human subject can operate an external device — advancing a slide projector by anticipatory brain activity — the first hint that brain signals might directly control machines.",
  importance:"Walter's experiments crossed a conceptual threshold: the brain's electrical output was not merely an object of measurement but a possible source of control. By showing that a subject's anticipatory neural activity could trigger a machine before any muscle moved, he prefigured the entire premise of the brain-computer interface — action issued from intention alone. It was a fragile, almost theatrical demonstration, but it pointed directly at the thought-controlled devices to come.",
  impact:{
    technology:"Brain signals are first used to operate an external device.",
    society:"The premise of thought-driven control of machines is demonstrated.",
    computing:"Neural activity becomes a candidate input channel for computers." },
  causes:["bergereeg"], effects:["vidalbci","braingate"] },

{ id:"vidalbci", year:1973, date:"1971–1973", era:5, cat:"neurotech",
  title:"The Term 'Brain-Computer Interface'",
  wiki:"Brain–computer interface", gallery:["Jacques Vidal","DARPA"],
  summary:"UCLA researcher Jacques Vidal coins the term 'brain-computer interface' and, in a landmark 1973 paper, introduces the concept formally into the scientific literature — as DARPA begins funding neural-interface research that will seed most 21st-century BCI work.",
  importance:"Vidal gave the field its name and its founding research program, framing the brain-computer interface as a concrete engineering goal rather than a speculation. Crucially, DARPA's involvement from the outset set the pattern that recurs across this atlas's frontier technologies: the military funds the basic science of reading and writing to the nervous system decades before any clinic or consumer sees it. The research ecosystem Vidal helped launch produced the implants and algorithms behind today's BCI companies.",
  impact:{
    technology:"The brain-computer interface is named and defined as an engineering goal.",
    government:"DARPA funding seeds the BCI research ecosystem from the start.",
    society:"Reading intention from neural signals becomes a formal scientific program." },
  causes:["bergereeg","walterbci"], effects:["braingate","neuralink"] },

{ id:"dobellevision", year:1978, date:"1978", era:5, cat:"neurotech",
  title:"The First Visual Neuroprosthetic",
  wiki:"Visual prosthesis", gallery:["William H. Dobelle","Visual cortex"],
  summary:"William Dobelle implants an electrode array on the visual cortex of a blind patient, who perceives crude points of light — 'phosphenes' — arranged into rough patterns: the first functional sensory neuroprosthetic in a human, writing signals into the brain rather than reading them out.",
  importance:"Dobelle's implant reversed the direction of the interface: instead of reading the brain, it wrote to it, stimulating the visual cortex directly to produce sensation in a person with no working eyes. The 'vision' was primitive — a sparse grid of glowing dots — but it proved that the brain could be addressed as well as observed, the principle behind every later neuroprosthetic from the cochlear implant to deep brain stimulation. It marked the moment neurotech became a two-way channel.",
  impact:{
    technology:"Electrical stimulation of the cortex produces artificial sensation in a human.",
    society:"The first sensory neuroprosthetic shows the brain can be written to, not just read.",
    biotech:"Direct cortical stimulation opens the path to neuroprosthetics broadly." },
  causes:["bergereeg"], effects:["cochlearimplant","dbs"] },

{ id:"cochlearimplant", year:1984, date:"1984–1990", era:5, cat:["neurotech","biotech"],
  title:"The Cochlear Implant",
  wiki:"Cochlear implant", gallery:["Graeme Clark (doctor)"],
  summary:"The multichannel cochlear implant — bypassing damaged hair cells to stimulate the auditory nerve directly — wins regulatory approval and becomes the first widely deployed commercial neurotechnology, restoring a sense of hearing to hundreds of thousands of deaf people.",
  importance:"The cochlear implant was the first neuroprosthetic to move from laboratory to mass medicine, putting a device that speaks directly to the nervous system into hundreds of thousands of bodies. It also became the field's first deep ethical controversy, as parts of the Deaf community argued that 'curing' deafness pathologized a culture and a language rather than healing a defect. The implant is thus a double landmark: proof that neurotech could scale, and an early warning that altering the senses is never only a medical act.",
  impact:{
    technology:"The first neuroprosthetic to reach mass clinical deployment.",
    society:"Restoring a sense raises the field's first deep cultural and ethical conflict.",
    biotech:"A device that stimulates the nervous system becomes routine medicine." },
  causes:["dobellevision"], effects:["dbs","braingate"] },

{ id:"dbs", year:2002, date:"1997–2006", era:6, cat:["neurotech","biotech"],
  title:"Deep Brain Stimulation",
  wiki:"Deep brain stimulation", gallery:["Parkinson's disease","Subthalamic nucleus"],
  summary:"Deep brain stimulation — electrodes implanted deep in the brain delivering continuous pulses — wins approval for Parkinson's disease and spreads widely, dramatically reducing tremors; by the 2020s some hundreds of thousands of people worldwide carry a permanent electrical implant in their brain.",
  importance:"DBS normalized the once-unthinkable: a chronic, implanted device wired into deep brain structures, switched on for years to modulate the nervous system's misfiring. Its success against Parkinson's tremor made brain implants an accepted therapy and opened experimental use for depression, OCD, and more — raising the prospect of electrically tuning mood and behavior. It is the bridge between the early neuroprosthetics and the modern BCI: routine, permanent, and writing continuously to the living brain.",
  impact:{
    technology:"Chronic implanted brain stimulation becomes an accepted medical therapy.",
    society:"Hundreds of thousands carry permanent electrical implants in the brain.",
    biotech:"Electrically modulating mood and movement moves from theory to clinic." },
  causes:["dobellevision","cochlearimplant"], effects:["neuralink","precisionneuro"] },

{ id:"braingate", year:2006, date:"1998–2012", era:6, cat:"neurotech",
  title:"BrainGate: Cursors and Robot Arms by Thought",
  wiki:"BrainGate", gallery:["Tetraplegia","Motor cortex"],
  summary:"The BrainGate program implants intracortical electrode arrays in paralyzed patients who move a computer cursor — and later a robotic arm — by thought alone; in a 2012 Nature study, a woman with tetraplegia uses a thought-controlled arm to lift a bottle and drink coffee unaided for the first time in nearly fifteen years.",
  importance:"BrainGate turned the brain-computer interface from demonstration into restored agency, decoding motor-cortex signals finely enough to let paralyzed people act on the world by intention. The image of a woman serving herself coffee with a thought-driven robotic arm made the field's promise concrete and human. It established the intracortical implant — a sensor array pressed into the cortex — as the high-bandwidth approach to reading the brain, the lineage Neuralink would later try to productize.",
  impact:{
    technology:"Intracortical implants decode motor intention to control cursors and robot arms.",
    society:"Paralyzed people regain the ability to act on the world through thought.",
    biotech:"High-bandwidth brain reading is established as a clinical reality." },
  causes:["walterbci","vidalbci","cochlearimplant"], effects:["neuralink","stentrode","braingatewireless"] },

// ===== II. THE BCI INDUSTRY =====
{ id:"neuralink", year:2024, date:"2016–2024", era:7, cat:"neurotech",
  title:"Neuralink",
  wiki:"Neuralink", gallery:["Elon Musk","Brain implant"],
  summary:"Elon Musk founds Neuralink in 2016 to build a high-bandwidth implanted brain-computer interface, with a stated long-term aim of cognitive enhancement beyond medicine. After a monkey plays Pong by thought (2021) and FDA approval for human trials (2023), the first patient — paralyzed from the shoulders down — controls a cursor, chess, and games by thought in 2024.",
  importance:"Neuralink took the decades of academic BCI work and wrapped it in Silicon Valley ambition and publicity, promising not just to restore function but eventually to enhance the healthy brain and merge human cognition with AI. Its robot-implanted thread electrodes and wireless design pushed the engineering forward, while its showmanship — Pong-playing monkeys, livestreamed patients — made BCIs a mainstream conversation. It crystallized the field's central tension: the same device that lets a paralyzed person move a cursor is pitched as the on-ramp to elective human enhancement.",
  impact:{
    technology:"A high-bandwidth wireless brain implant is engineered and put in humans.",
    society:"BCIs enter mainstream culture, framed around enhancement as well as therapy.",
    computing:"Direct brain-to-computer control is pursued as a consumer-scale ambition." },
  causes:["braingate","dbs","vidalbci"], effects:["stentrode","precisionneuro","neurorights"] },

{ id:"stentrode", year:2020, date:"2020", era:7, cat:["neurotech","biotech"],
  title:"The Stentrode: A BCI Through the Bloodstream",
  wiki:"Synchron", gallery:["Stent","Brain–computer interface"],
  summary:"Synchron's Stentrode — a mesh electrode threaded into a brain blood vessel like a stent, with no open-skull surgery — lets paralyzed patients wirelessly text, email, shop, and bank by thought, the first brain-computer interface implanted via the vasculature.",
  importance:"The Stentrode attacked the BCI's biggest barrier — the need to open the skull and penetrate brain tissue — by reaching the cortex through the bloodstream instead, delivering useful control with a far less invasive procedure. By trading some signal fidelity for a vastly safer implantation, it offered a different path to scale than Neuralink's penetrating threads. It showed that the route into the brain, not just the electronics, would shape which BCIs reach patients first.",
  impact:{
    technology:"A brain-computer interface is implanted through a blood vessel, no open-brain surgery.",
    society:"Paralyzed users gain digital control with a far less invasive procedure.",
    biotech:"The vasculature becomes a route to the cortex, reshaping BCI safety trade-offs." },
  causes:["braingate","neuralink"], effects:["precisionneuro","neurorights"] },

{ id:"braingatewireless", year:2021, date:"April 2021", era:7, cat:"neurotech",
  title:"The First Wireless BCI in Humans",
  wiki:"BrainGate", gallery:["Brain–computer interface"],
  summary:"BrainGate achieves the first wireless intracortical brain-computer interface in humans — cursor control and typing matching its earlier wired systems, with no cable running out through the skull — a key step toward implants people can use continuously at home.",
  importance:"Cutting the cable mattered more than it sounds: a wire through the skull is an infection risk and tethers the user to lab equipment, so going wireless was a precondition for BCIs that work in everyday life. BrainGate's demonstration that performance held without the cable removed a major obstacle between the research implant and a livable device. It is the unglamorous engineering milestone that makes the headline-grabbing implants practical.",
  impact:{
    technology:"Intracortical BCI performance is matched with no transcranial cable.",
    society:"Continuous at-home use of brain implants moves within reach.",
    biotech:"Removing the through-skull wire cuts a major infection and tethering risk." },
  causes:["braingate"], effects:["neuralink","precisionneuro"] },

{ id:"precisionneuro", year:2024, date:"2024", era:7, cat:["neurotech","biotech"],
  title:"Precision Neuroscience: The Surface Array",
  wiki:"Brain–computer interface", gallery:["Electrocorticography"],
  summary:"Precision Neuroscience wins regulatory clearance for a thin-film electrode array laid on the brain's surface without penetrating tissue — a less invasive approach than penetrating implants — and begins extended-duration studies across several medical centers.",
  importance:"Precision's surface array stakes out a third design point between penetrating threads and vascular stents: a flexible film that reads the cortex from its surface, trading some depth of signal for reversibility and reduced tissue damage. The proliferation of approaches — penetrating, vascular, surface — shows a field maturing into competing engineering bets rather than one dominant design. Together they mark the BCI's transition from singular research feat to a nascent industry with rival products seeking the clinic.",
  impact:{
    technology:"A non-penetrating thin-film cortical array reaches the clinic.",
    society:"Competing BCI designs signal a maturing neurotech industry.",
    biotech:"Reversible, surface-level brain reading offers a lower-damage approach." },
  causes:["braingate","neuralink","stentrode"], effects:["neurorights"] },

{ id:"neurorights", year:2021, date:"2021–2026", era:7, cat:["neurotech","law"],
  title:"Neurorights: Chile Writes the First Law",
  wiki:"Neurorights", gallery:["Constitution of Chile"],
  summary:"As brain-computer interfaces read and write neural data, Chile becomes the first country to enshrine 'neurorights' — protections for mental privacy and cognitive liberty — in its constitution in 2021. No other jurisdiction follows at the constitutional level, and no federal framework governs cognitive privacy, mental-data ownership, or enhancement versus therapy.",
  importance:"Neurotech opened a category of data more intimate than any before — the activity of the brain itself — and the law has almost nothing to say about who owns it, who may read it, or whether the healthy may be enhanced. Chile's constitutional neurorights stand as the lone serious legal response, a model widely admired and, so far, uncopied, while elsewhere BCIs are governed only by ordinary medical-device rules and the incidental reach of biometric-data law. It is this atlas's defining pattern at its sharpest: a technology touching the seat of the self, racing decades ahead of any rights regime built to protect it.",
  impact:{
    law:"Chile enshrines mental privacy and cognitive liberty in its constitution; others do not follow.",
    society:"Neural data — the most intimate category yet — is left largely ungoverned.",
    government:"No federal framework addresses cognitive privacy, mental-data ownership, or enhancement." },
  causes:["neuralink","stentrode","precisionneuro"], effects:[] },

// ===== III. THE SYNTHETIC SENSES: VR & AR =====
{ id:"stereoscope", year:1838, date:"1838", era:3, cat:"neurotech",
  title:"The Stereoscope",
  wiki:"Stereoscope", gallery:["Charles Wheatstone","Stereoscopy"],
  summary:"Charles Wheatstone invents the stereoscope, presenting a slightly different image to each eye to manufacture the perception of depth — the optical trick of binocular disparity that underlies every virtual-reality headset built since.",
  importance:"Wheatstone isolated the brain's depth cue — that the two eyes see slightly offset views and the mind fuses them into three dimensions — and turned it into a device, proving that depth could be synthesized rather than seen. Every VR headset is a direct descendant, feeding each eye its own image to place the viewer inside a fabricated space. The whole project of immersive reality begins with this Victorian parlor instrument and its insight into how seeing works.",
  impact:{
    technology:"Binocular disparity is harnessed to manufacture the perception of depth.",
    society:"The optical foundation of all later virtual reality is laid.",
    communications:"Depth becomes something a device can synthesize, not merely capture." },
  causes:[], effects:["sensorama","sutherlandhmd"] },

{ id:"sensorama", year:1962, date:"1956–1962", era:5, cat:"neurotech",
  title:"Sensorama: The Multi-Sensory Machine",
  wiki:"Sensorama", gallery:["Morton Heilig","Head-mounted display"],
  summary:"Filmmaker Morton Heilig builds Sensorama, an arcade cabinet delivering stereoscopic film, stereo sound, vibration, wind, and even smell together — the first multi-sensory immersive experience machine — and patents a head-mounted stereoscopic display, the first HMD concept. Neither is commercialized.",
  importance:"Heilig grasped that immersion meant engaging all the senses at once, not just the eyes, and his Sensorama prototyped the full sensory envelope — motion, wind, scent — that VR designers still chase. His head-mounted-display patent anticipated the headset form factor by decades. Commercially premature and largely forgotten in its day, Heilig's work was the imaginative blueprint for everything from the Oculus to the Vision Pro.",
  impact:{
    technology:"The first machine to combine sight, sound, motion, wind, and smell into one experience.",
    society:"Immersion is conceived as a multi-sensory envelope, not just stereo vision.",
    communications:"The head-mounted-display form factor is patented decades early." },
  causes:["stereoscope"], effects:["sutherlandhmd","vplresearch"] },

{ id:"sutherlandhmd", year:1968, date:"1963–1968", era:5, cat:["neurotech","computing"],
  title:"The Sword of Damocles",
  wiki:"The Sword of Damocles (virtual reality)", gallery:["Ivan Sutherland","Augmented reality"],
  summary:"Ivan Sutherland — after inventing interactive computer graphics with Sketchpad (1963) — and student Bob Sproull build the first head-mounted computer display: wireframe graphics that update as the wearer moves their head, so heavy it hangs from the ceiling. It is widely considered the first augmented-reality system.",
  importance:"Sutherland fused two of his own breakthroughs — computers that draw interactive graphics, and a display worn on the head — into the first device that rendered a computer-generated world locked to the user's viewpoint. Because its optics were see-through, the wireframe scene overlaid the real room, making it the ancestor of augmented reality as much as virtual reality. The ceiling-mounted rig was absurdly impractical, but it defined the entire paradigm: a head-tracked display generating a responsive synthetic world.",
  impact:{
    technology:"The first head-tracked, computer-generated head-mounted display is built.",
    computing:"Real-time interactive 3D graphics are rendered to a worn display.",
    society:"The paradigm of both virtual and augmented reality is established." },
  causes:["stereoscope","sensorama"], effects:["vplresearch","oculusrift"] },

{ id:"vplresearch", year:1987, date:"1985–1987", era:5, cat:"neurotech",
  title:"VPL Research Coins 'Virtual Reality'",
  wiki:"VPL Research", gallery:["Jaron Lanier","Data glove"],
  summary:"Jaron Lanier and Thomas Zimmerman found VPL Research; Lanier coins the term 'virtual reality' and the company sells the first commercial VR goggles and datagloves — to researchers and the military, the only buyers who can afford them.",
  importance:"VPL gave the field its name and its first products, turning Sutherland's laboratory paradigm into goggles and gloves you could actually buy, however expensively. Lanier's 'virtual reality' became the banner under which the whole enterprise marched, and the dataglove introduced the idea of reaching into and manipulating a synthetic world with your hands. It was the first commercial VR moment — confined to labs and the defense world, but real.",
  impact:{
    technology:"The first commercial VR goggles and datagloves are sold.",
    society:"The term 'virtual reality' enters the language.",
    communications:"Hand-tracking gloves let users manipulate synthetic worlds directly." },
  causes:["sensorama","sutherlandhmd"], effects:["virtualboy","oculusrift"] },

{ id:"virtualboy", year:1995, date:"1995", era:6, cat:"neurotech",
  title:"Virtual Boy: VR's False Start",
  wiki:"Virtual Boy", gallery:["Nintendo","Gunpei Yokoi"],
  summary:"Nintendo's Virtual Boy — the first mass-market VR gaming device — is a commercial catastrophe: a red monochrome stereoscopic display that causes headaches and nausea, it sells well under a million units before discontinuation and sets back consumer VR for nearly twenty years.",
  importance:"The Virtual Boy is the cautionary tale that haunts every VR launch since: technology pushed to market before it was ready, delivering eye strain and nausea instead of immersion and souring the public on the whole idea. Its failure helped freeze consumer VR for two decades, a reminder that the gap between the dream and a comfortable, usable product is where the category repeatedly dies. When VR finally returned, solving exactly the motion-sickness problem the Virtual Boy embodied was the whole challenge.",
  impact:{
    technology:"A premature mass-market VR device delivers nausea instead of immersion.",
    society:"The flop sets back consumer VR for nearly twenty years.",
    communications:"The unsolved comfort problem becomes the field's defining obstacle." },
  causes:["vplresearch"], effects:["oculusrift"] },

{ id:"oculusrift", year:2012, date:"2012–2014", era:7, cat:"neurotech",
  title:"Oculus Restarts Consumer VR",
  wiki:"Oculus Rift", gallery:["Palmer Luckey","Oculus VR"],
  summary:"Palmer Luckey's Oculus Rift Kickstarter raises $2.4 million in 2012, restarting consumer VR after twenty dormant years by finally achieving the low-latency head tracking that solves motion sickness. Facebook buys Oculus for $2 billion in 2014, turning VR into a platform war.",
  importance:"Oculus cracked the problem that had killed VR since the Virtual Boy: latency low enough that the synthetic view keeps up with the head, so the inner ear and the eyes agree and the nausea lifts. That single engineering win reopened the entire category, and Facebook's $2 billion acquisition signaled that the tech giants now saw immersive reality as the next computing platform to own. The modern VR era — and the metaverse ambitions that follow — starts here.",
  impact:{
    technology:"Low-latency head tracking finally solves VR's motion-sickness problem.",
    society:"Consumer VR reopens after two decades and becomes a platform war.",
    computing:"Tech giants begin betting on immersive reality as the next computing platform." },
  causes:["sutherlandhmd","vplresearch","virtualboy"], effects:["pokemongo","metametaverse","visionpro"] },

{ id:"googleglass", year:2013, date:"2012–2015", era:7, cat:["neurotech","cctv"],
  title:"Google Glass and the Privacy Backlash",
  wiki:"Google Glass", gallery:["Augmented reality","Wearable computer"],
  summary:"Google Glass — face-worn AR glasses with a camera and heads-up display — reaches 'Explorers' in 2013 and fails as a consumer product: people object to being filmed without consent ('Glassholes'), battery life is poor, and wearing a camera on your face proves socially intolerable. Google pivots Glass to enterprise use.",
  importance:"Glass collided with a boundary the technology could not engineer away: a camera worn on the face turns its wearer into a walking surveillance device, and society recoiled. The backlash was not about features but about consent — the discomfort of never knowing if you were being recorded — and it killed the consumer product. Glass became the canonical lesson that augmented reality's hardest problems are social, not technical, a warning every later AR headset has had to answer.",
  impact:{
    cctv:"Face-worn cameras turn the wearer into an unconsented surveillance device.",
    society:"A privacy backlash, not a technical failure, kills the consumer product.",
    technology:"AR's hardest problems are revealed as social rather than engineering ones." },
  causes:["sutherlandhmd"], effects:["visionpro","metametaverse"] },

{ id:"pokemongo", year:2016, date:"2016", era:7, cat:"neurotech",
  title:"Pokémon GO: AR Goes Mass-Market",
  wiki:"Pokémon Go", gallery:["Niantic","Augmented reality"],
  summary:"Pokémon GO reaches 500 million downloads in two months, overlaying game characters onto the real world through the smartphone camera and sending crowds into the streets — proof that augmented reality has genuine mass-market appeal when it rides hardware everyone already owns.",
  importance:"Where Google Glass showed AR failing on dedicated hardware, Pokémon GO showed it succeeding on the phone in every pocket, reaching hundreds of millions by demanding no new device at all. It made location-based augmented reality a real consumer category and demonstrated AR's power to move physical crowds and reshape public space. The lesson was that AR's first mass medium would be the smartphone, not the headset.",
  impact:{
    society:"Location-based AR reaches hundreds of millions and moves crowds through public space.",
    technology:"Smartphone AR proves the phone, not the headset, is AR's first mass platform.",
    communications:"Digital overlays on the physical world become an everyday experience." },
  causes:["oculusrift"], effects:["visionpro"] },

{ id:"metametaverse", year:2021, date:"2021", era:7, cat:["neurotech","computing"],
  title:"Facebook Becomes Meta",
  wiki:"Meta Platforms", gallery:["Metaverse","Mark Zuckerberg"],
  summary:"Facebook rebrands to Meta and commits over $10 billion a year to building the 'metaverse,' staking the company's future on immersive virtual worlds as the next computing platform — a trillion-dollar corporate bet that VR will become the successor to the smartphone.",
  importance:"Meta's rebrand turned a research-and-gaming category into a defining corporate strategy, with one of the world's largest companies wagering tens of billions annually that people would live, work, and socialize in headsets. It was the high-water mark of VR hype, lifting and then weighing on the field as the promised metaverse failed to materialize on schedule. Whatever its outcome, it committed enormous resources to immersive reality and tied a tech giant's fortunes to the headset.",
  impact:{
    computing:"Immersive virtual worlds are bet on as the successor to the smartphone platform.",
    society:"A trillion-dollar company stakes its future on the metaverse.",
    technology:"Tens of billions a year flow into VR/AR research and hardware." },
  causes:["oculusrift","googleglass"], effects:["visionpro","questadoption"] },

{ id:"visionpro", year:2024, date:"2023–2024", era:7, cat:"neurotech",
  title:"Apple Vision Pro: 'Spatial Computing'",
  wiki:"Apple Vision Pro", gallery:["Apple Inc.","Mixed reality"],
  summary:"Apple announces the Vision Pro as a $3,499 'spatial computer' in 2023 and ships it in 2024 — the most significant VR/AR product since the original Oculus. Reviews praise its quality and eye- and hand-tracking while criticizing its weight, isolation, and price; it sells a few hundred thousand units in year one.",
  importance:"Apple reframed the headset as a 'spatial computer' rather than a games console, betting that mixed reality — digital objects placed in your real room — was the next general-purpose computing interface. Its eye- and hand-tracking set a new bar for the technology even as its price and isolating bulk kept it from the mass market. The Vision Pro represents the most serious attempt yet to make the headset an everyday computer, and a test of whether immersive hardware can escape the niche.",
  impact:{
    technology:"Eye- and hand-tracking 'spatial computing' raises the bar for mixed-reality hardware.",
    society:"The headset is reframed as a general-purpose computer, not a game device.",
    computing:"Apple bets that mixed reality is the next general computing interface." },
  causes:["oculusrift","googleglass","metametaverse"], effects:["questadoption","vrunregulated"] },

{ id:"questadoption", year:2025, date:"2023–2025", era:7, cat:"neurotech",
  title:"Quest 3 and Mass-Market VR",
  wiki:"Meta Quest 3", gallery:["Meta Quest","Virtual reality headset"],
  summary:"Meta's sub-$500 standalone Quest 3 passes 10 million units — the best consumer adoption in VR history — establishing the affordable, no-PC-required headset as the form that finally reaches a broad audience, with gaming and fitness as the primary uses.",
  importance:"While the Vision Pro chased the high end, the Quest line quietly won the volume game: cheap, wireless, and standalone, it put VR into millions of homes and proved the category could reach ordinary consumers when the price and friction dropped. Its success located VR's actual mass market — gaming and fitness — rather than the productivity and metaverse visions the industry kept promising. The affordable standalone headset, not the luxury spatial computer, is what broke through.",
  impact:{
    society:"An affordable standalone headset achieves the best consumer VR adoption yet.",
    technology:"No-PC, wireless VR reaches millions of homes.",
    communications:"VR's real mass market is located in gaming and fitness." },
  causes:["oculusrift","metametaverse","visionpro"], effects:["vrunregulated"] },

{ id:"vrunregulated", year:2026, date:"2026", era:7, cat:["neurotech","law"],
  title:"Immersive Reality, Unregulated",
  wiki:"Virtual reality", gallery:["Eye tracking","Privacy"],
  summary:"No jurisdiction has a specific regulatory framework for VR or AR. Conduct in virtual spaces is governed only by platform terms of service, while eye-tracking and biometric sensors harvest uniquely revealing data and headset cameras continuously map users' homes — virtual harassment, biometric inference, and spatial surveillance all essentially ungoverned.",
  importance:"Immersive hardware quietly became one of the most invasive sensor platforms ever sold: eye-tracking reveals attention and arousal, body movement betrays identity and health, and the cameras that place digital objects in your room also record it in detail. Yet the only rules are each platform's terms of service, leaving virtual harassment, biometric profiling, and the mapping of private homes to corporate discretion. It is the through-line of this tab and the atlas entire — a technology reading the body and reshaping the senses, arriving long before the law that should govern it.",
  impact:{
    law:"No jurisdiction has VR/AR-specific rules; platform terms of service are the only governance.",
    surveillance:"Eye-tracking and headset cameras harvest uniquely revealing biometric and spatial data.",
    society:"Virtual harassment and biometric profiling in immersive spaces go essentially unregulated." },
  causes:["visionpro","questadoption","googleglass"], effects:[] }

);
