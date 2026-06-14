// SUPPLEMENT — two-way, cellular, and mobile communications, and the regulation that
// trailed them. The recurring shape: the U.S. invents a technology it is too slow to
// regulate, uses regulation to shield incumbents from disruption, then abandons
// regulation once the incumbents become the disruptors. Cross-links the existing
// marconi, fessenden, radioact1912, twowayradio, policeradio, mobilephone (1973 call),
// iphone, attbreakup, telecomact, wirelesse911, riley, carpenter, snowden cards.
// cat:"radio" (Radio & Telecom tab). Round one: data only — images to follow.
window.ATLAS_EVENTS.push(

{ id:"victoriapolice", year:1923, date:"1923", era:4, cat:"radio",
  title:"The First Mobile Two-Way Radio",
  wiki:"Two-way radio",
  summary:"Constable Frederick Downie of Victoria Police in Australia installs the first true two-way radio in a patrol car — a set that fills the entire back seat — making the Victorian Police the first force in the world to talk both ways between a moving vehicle and headquarters.",
  importance:"Early police radio was one-way: a dispatcher could reach a car, but the car could not answer. Downie's 1923 installation closed the loop, letting an officer in a moving vehicle both receive and transmit, and ending the era of patrols phoning in status reports from public call boxes. The set was enormous, but the principle — continuous two-way contact with a mobile unit — is the foundation of all the dispatch, cellular, and mobile communication that follows.",
  impact:{
    radio:"Two-way contact between a moving vehicle and a fixed station becomes possible.",
    power:"Police gain continuous command and coordination of mobile units.",
    technology:"The mobile transceiver, however bulky, proves the concept of two-way mobile radio." },
  causes:["marconi","fessenden"], effects:["fccradioban","walkietalkie","policeradio"] },

{ id:"fccradioban", year:1933, date:"1933–1935", era:4, cat:["radio","law"],
  title:"The FCC Slows Police Radio",
  wiki:"Federal Communications Commission",
  summary:"The FCC first bans interdepartmental radio communication, insisting agencies use telephone and telegraph instead — protecting the wireline carriers — then reverses in 1935, finally making the modern public-safety radio system legally possible.",
  importance:"In one of the earliest instances of a regulator shielding existing infrastructure from a new technology, the FCC initially forbade agencies from talking to each other by radio, steering them back to the telephone companies' wires. The two-year ban actively slowed police-radio adoption before the FCC relented in 1935 and allowed cross-department radio. It set an early template for the recurring pattern in this tab: regulation deployed to protect incumbents until the pressure to modernize becomes irresistible.",
  impact:{
    radio:"Cross-department public-safety radio is banned, then legalized.",
    law:"A regulator protects wireline carriers by restricting a competing technology.",
    power:"Police and fire radio coordination is delayed by two years of policy." },
  causes:["victoriapolice","communicationsact"], effects:["walkietalkie"] },

{ id:"walkietalkie", year:1940, date:"1937–1944", era:4, cat:"radio",
  title:"The Walkie-Talkie",
  wiki:"Walkie-talkie",
  summary:"Donald Hings and Alfred Gross independently build handheld field radios (1937); Motorola's Galvin Manufacturing follows with the first commercial AM (1940) and FM (1941) mobile two-way sets, then the 35-pound SCR-300 backpack 'walkie-talkie' that coordinates infantry across WWII — and puts two-way radio into taxis by 1944.",
  importance:"The handheld and backpack radios of the late 1930s and the war made mobile wireless rugged, portable, and proven under the most demanding conditions imaginable. Motorola's FM sets gave public safety static-free communication, and the SCR-300 — the original 'walkie-talkie' — let infantry coordinate movement across Europe and the Pacific. When the war ended, surplus equipment and trained operators flooded civilian life, accelerating police, commercial, and taxi radio by decades.",
  impact:{
    radio:"Portable two-way radio is perfected and mass-produced for war and then peace.",
    technology:"FM delivers clear, static-free mobile communication for public safety.",
    labor:"Two-way radio enters commercial work — taxis, utilities, dispatch fleets." },
  causes:["fccradioban","twowayradio"], effects:["cellularconcept","htbrick","cbradio"] },

{ id:"cellularconcept", year:1947, date:"1947–1948", era:5, cat:"radio",
  title:"The Cellular Concept",
  wiki:"Cellular network",
  summary:"Bell Labs engineers W. Rae Young and Douglas Ring propose the cellular idea — divide an area into small 'cells,' each with a low-power transmitter, and 'hand off' a call from cell to cell as the user moves — solving mobile telephony in principle decades before the electronics exist to build it. The FCC allocates land-mobile-radio spectrum in 1948.",
  importance:"The cellular concept is the conceptual blueprint of the cell phone: instead of one giant transmitter serving a whole city on a handful of channels, many small cells reuse the same frequencies, multiplying capacity enormously. Bell Labs had the idea fully formed in 1947, but the cheap, fast electronics to track a moving phone and hand off its call would not arrive for a quarter-century. The 1948 land-mobile spectrum allocation set the framework public safety and commercial radio would use for sixty years.",
  impact:{
    radio:"The architecture of all cellular telephony is conceived at Bell Labs.",
    technology:"Frequency reuse across small cells solves mobile capacity in principle.",
    law:"The FCC allocates the land-mobile spectrum the next sixty years will run on." },
  causes:["walkietalkie","bell"], effects:["firstg","mobilephone"] },

{ id:"htbrick", year:1962, date:"1962", era:5, cat:"radio",
  title:"The Transistor 'Brick'",
  wiki:"Handheld two-way radio",
  summary:"Motorola's transistorized HT200 — nicknamed 'the brick' for its shape and durability — ends the vacuum-tube era for portable radio, making a rugged handheld two-way set practical for everyday professional use.",
  importance:"Vacuum-tube portables were heavy, fragile, and power-hungry; the transistor made the handheld radio light and reliable enough for daily work in the field. The HT200 became an icon of professional two-way radio and a direct ancestor, in form and function, of the handheld cellular phone to come. It marks the point where mobile wireless became genuinely personal and portable rather than vehicle-bound.",
  impact:{
    radio:"Transistors make the rugged handheld two-way radio an everyday tool.",
    technology:"The portable transceiver shrinks toward the size of a phone.",
    labor:"Field workers, security, and public safety gain practical handheld comms." },
  causes:["walkietalkie","transistor"], effects:["cbradio","mobilephone"] },

{ id:"cbradio", year:1967, date:"1967–1977", era:5, cat:"radio",
  title:"CB Radio: The First Mass Wireless",
  wiki:"Citizens band radio",
  summary:"The FCC creates the Citizens Band Radio Service — unlicensed two-way radio for the general public. It becomes a cultural phenomenon, especially among truckers sharing traffic and speed-trap warnings; by 1977 the FCC processes 500,000 license applications a month and eventually abandons CB licensing entirely.",
  importance:"CB was the first mass-market personal wireless technology, and the first proof that ordinary people would adopt two-way radio enthusiastically if simply given access to a band. Its explosive, ungovernable popularity overwhelmed the FCC's licensing machinery until the agency gave up requiring licenses at all — an early lesson that unlicensed, permissionless access could unleash demand no administrative process could manage. The same appetite would later drive cellular and WiFi.",
  impact:{
    radio:"Personal two-way wireless reaches the mass public for the first time.",
    society:"A trucker-led subculture turns CB into a national phenomenon.",
    law:"Demand overwhelms licensing; the FCC abandons CB licenses entirely." },
  causes:["htbrick"], effects:["firstg","ismband"] },

{ id:"firstg", year:1979, date:"1979–1983", era:5, cat:"radio",
  title:"1G: The First Cellular Networks",
  wiki:"1G",
  summary:"Japan's NTT launches the world's first commercial cellular network (1G analog) in Tokyo in 1979 — four years before the U.S., where the technology was invented, due to FCC delay. The FCC approves U.S. cellular in 1982; in 1983 the Motorola DynaTAC 8000X (a $3,995 'brick' with 30 minutes of talk time) and Ameritech's Chicago network launch the AMPS standard.",
  importance:"After the 1973 first cell phone call, commercial cellular stalled in the U.S. for a decade of FCC proceedings while Japan launched first in 1979 — the country that invented cellular losing the lead to regulatory delay. When U.S. service finally arrived in 1983, the DynaTAC made the mobile phone real, if absurdly expensive, and the AMPS analog standard governed American cellular for a decade. It is the museum's case study in invention outrunning the regulator's ability to bring it to market.",
  impact:{
    radio:"Commercial cellular telephony launches — Japan first, the U.S. four years behind.",
    law:"A decade of FCC delay costs the inventing country its head start.",
    society:"The mobile phone becomes a real, if elite, consumer product." },
  causes:["cellularconcept","mobilephone"], effects:["gsm2g","attbreakup","handsetwars"] },

{ id:"handsetwars", year:1987, date:"1987–1994", era:6, cat:"radio",
  title:"The Handset Wars",
  wiki:"Nokia",
  summary:"Nokia releases its first mobile phone in 1987, opening a Motorola–Nokia rivalry that defines handset competition for twenty years; the 1994 Nokia 2110 — the first phone with a melodic ringtone and a recognizably modern shape — makes Nokia the world's largest phone maker.",
  importance:"As networks spread, the phone itself became a consumer product to be designed, branded, and fought over, and the Motorola–Nokia duel set the terms of mobile hardware for two decades. The Nokia 2110 established the template most people would recognize as a cell phone and vaulted Finland's Nokia to global dominance. The handset wars are the prelude to the smartphone era, when the device, not the network, would become the locus of value.",
  impact:{
    radio:"The mobile handset becomes a designed, branded consumer product.",
    technology:"Nokia's designs set the template for the modern cell phone.",
    power:"Hardware competition shifts value from the carrier toward the device maker." },
  causes:["firstg"], effects:["gsm2g","iphone"] },

{ id:"gsm2g", year:1990, date:"1990–1991", era:6, cat:"radio",
  title:"2G and the GSM Standard",
  wiki:"GSM",
  summary:"Europe defines GSM, the first digital cellular standard, and Finland's Radiolinja launches the world's first 2G network in 1991 — digital transmission sharply improving voice quality, security, and capacity. Europe unifies on one standard; the U.S. deliberately allows competing standards (GSM, CDMA, TDMA), creating compatibility headaches for decades.",
  importance:"The move from analog 1G to digital 2G transformed cellular from a niche luxury into a mass medium, and the choice of standard shaped continents. Europe's single GSM standard let any phone roam across borders and drove explosive adoption; the FCC's technology-neutral, let-the-market-decide approach left American carriers on incompatible networks. It is a sharp illustration of how a regulatory philosophy — unify versus compete — can help or hobble a technology for a generation.",
  impact:{
    radio:"Digital 2G multiplies capacity, quality, and security over analog cellular.",
    law:"Europe's single standard outpaces America's fragmented multi-standard market.",
    society:"The cell phone becomes a true mass-market device." },
  causes:["firstg","handsetwars"], effects:["sms","spectrumauctions","threeg"] },

{ id:"sms", year:1992, date:"1992–1999", era:6, cat:"radio",
  title:"SMS: The Accidental Medium",
  wiki:"SMS",
  summary:"Built into GSM almost as an afterthought, the Short Message Service carries its first text — 'Merry Christmas,' sent by engineer Neil Papworth in December 1992 — that engineers assumed would only handle network notifications. By 1999 some 40 billion messages a year reveal a multibillion-dollar business no one planned.",
  importance:"SMS was an engineering throwaway — a 160-character side channel for system messages — that users turned into one of the primary communication methods of billions of people. Teenagers adopted it as a private, cheap, parent-invisible channel, and carriers discovered they had accidentally built a colossal revenue stream. It is the museum's clearest case of users, not designers, deciding what a technology is for.",
  impact:{
    radio:"A throwaway side channel becomes a primary mode of human communication.",
    society:"Texting reshapes how billions of people, especially the young, communicate.",
    power:"Carriers reap a vast, unplanned revenue stream from per-message charges." },
  causes:["gsm2g"], effects:["threeg","iphone"] },

{ id:"spectrumauctions", year:1994, date:"1993–1994", era:6, cat:"radio",
  title:"Spectrum Auctions",
  wiki:"Spectrum auction",
  summary:"Congress authorizes the FCC to auction spectrum rights in 1993 — selling them rather than awarding them administratively — and the 1994 PCS auctions become the first large-scale competitive sale of public airwaves, raising billions and setting the template for all later spectrum management. Licenses are made technology-neutral.",
  importance:"Auctions converted spectrum from a resource handed out by regulators to one sold to the highest bidder, a fundamental shift from administrative to market allocation that reshaped the wireless industry and filled federal coffers. The 1994 PCS auctions were a global model of efficient spectrum policy. But tying a carrier's fortunes to multibillion-dollar license purchases also entrenched the well-capitalized incumbents and made spectrum a financial as much as a technical asset — a double edge the rest of this tab keeps meeting.",
  impact:{
    law:"Spectrum shifts from administrative grant to market-based auction.",
    radio:"Technology-neutral licenses let carriers choose their own standards.",
    power:"Spectrum becomes a financial asset favoring well-capitalized incumbents." },
  causes:["gsm2g","communicationsact"], effects:["fourg","fiveg"] },

{ id:"cpni", year:1996, date:"1996", era:6, cat:["radio","law"],
  title:"CPNI: The First Carrier Privacy Rule",
  wiki:"Customer proprietary network information",
  summary:"The Telecommunications Act of 1996 creates Customer Proprietary Network Information protections — the first federal privacy law specifically covering telephone customer data, including call records and the location information generated during calls.",
  importance:"CPNI was the world's first carrier data-privacy regime, recognizing that the records of who you call, when, and from where are sensitive and limiting what carriers may do with them. It was genuinely ahead of its time. But it was written for the call records of a telephone, and would prove unable to reach the vast data ecosystem — app location, advertising IDs, browsing history — that smartphones would later generate outside the carrier's pipe, the gap that defines mobile privacy to this day.",
  impact:{
    law:"The first federal rule governs the privacy of telephone customer data.",
    radio:"Call records and call-time location gain legal protection.",
    surveillance:"A privacy floor is set — but only for data that flows through the carrier." },
  causes:["telecomact"], effects:["wirelesse911","carrierlocation","cpnigap"] },

{ id:"threeg", year:2001, date:"2001", era:6, cat:"radio",
  title:"3G: The Mobile Internet",
  wiki:"3G",
  summary:"Third-generation networks launch, making true mobile internet — web browsing, email, even video calls — possible on a handset for the first time. Japan and South Korea lead; U.S. rollout lags, hampered by spectrum fragmentation.",
  importance:"3G turned the phone from a voice-and-text device into an internet terminal, the necessary substrate for everything the smartphone would become. Once again Asia led and the U.S. trailed, its fragmented standards and spectrum slowing deployment. 3G is the bridge between the cellular era and the smartphone era — the moment the network became fast enough that the device's possibilities, not the network's, became the constraint.",
  impact:{
    radio:"Mobile data fast enough for the web arrives on the handset.",
    technology:"The phone becomes an internet terminal, not just a telephone.",
    society:"Always-on mobile internet begins reshaping daily life." },
  causes:["gsm2g","sms"], effects:["iphone","fourg"] },

{ id:"fourg", year:2008, date:"2008–2010", era:7, cat:"radio",
  title:"4G LTE and the 700 MHz Auction",
  wiki:"LTE (telecommunication)",
  summary:"The FCC's 2008 auction of 700 MHz 'beachfront' spectrum raises $19.6 billion; Google's push forces 'open access' rules on part of it, and Verizon builds 4G LTE there. By 2010 LTE brings near-home-broadband speeds to phones — and the smartphone ceases to be primarily a phone.",
  importance:"The low-frequency 700 MHz band travels far and penetrates buildings, making it the most valuable spectrum for mobile data, and Google's intervention attached open-device, open-application conditions to part of it. The LTE networks built on it gave phones the speed of home broadband, completing the smartphone's transformation into a pocket computer that happens to make calls. From here the network was rarely the bottleneck; the device and its apps were the whole game.",
  impact:{
    radio:"4G LTE brings broadband-class data to the mobile phone.",
    law:"Open-access auction conditions push carriers toward open devices and apps.",
    technology:"The smartphone becomes a pocket computer, the call an afterthought." },
  causes:["threeg","spectrumauctions","iphone"], effects:["stingray","fiveg"] },

{ id:"stingray", year:2014, date:"2014", era:7, cat:"radio",
  title:"StingRay: The Fake Cell Tower",
  wiki:"Stingray phone tracker",
  summary:"Reporting reveals that dozens of federal and local agencies secretly use 'cell-site simulators' — devices that impersonate cell towers to force nearby phones to connect, tracking users (even idle ones) and sweeping up every phone in an area. The FBI's policy bars agents from disclosing their use even to judges, claiming the technology is a trade secret.",
  importance:"The StingRay revelations exposed a hidden surveillance infrastructure riding on the cellular network itself: by mimicking a tower, the device could locate and track anyone nearby, suspect or not, without their knowledge. The secrecy was extraordinary — agencies hid the technology from courts and defendants, undermining the warrant process. It opened a wave of Fourth Amendment litigation and made the cell network's own architecture a tool of dragnet surveillance.",
  impact:{
    surveillance:"Fake cell towers track phones, idle or active, across whole areas.",
    radio:"The cellular network's architecture is turned into a surveillance tool.",
    law:"Secrecy from courts over cell-site simulators triggers Fourth Amendment fights." },
  causes:["fourg"], effects:["carrierlocation","carpenter"] },

{ id:"carrierlocation", year:2019, date:"2018–2024", era:7, cat:"radio",
  title:"Carriers Sell Your Location",
  wiki:"Customer proprietary network information",
  summary:"Reporting reveals AT&T, Verizon, T-Mobile, and Sprint had been selling real-time subscriber location data to brokers who resold it to bounty hunters, bail bondsmen, and stalkers — in violation of CPNI rules. After years of inaction, the FCC in 2024 fines the carriers over $200 million combined, its largest privacy enforcement ever; the carriers appeal.",
  importance:"The location scandal showed the carriers themselves monetizing exactly the data CPNI was meant to protect, selling the real-time whereabouts of their customers to anyone who would pay, with a Missouri sheriff reportedly tracking people without warrants. The FCC's eventual $200-million-plus fines were a landmark privacy enforcement, but they arrived years after the harm and only after a change of administration. It is the recurring pattern: the rule existed, the violation was flagrant, and accountability came late and contested.",
  impact:{
    surveillance:"Carriers sell customers' real-time location to brokers and bounty hunters.",
    law:"The FCC's largest-ever privacy fines arrive years after the violations.",
    power:"The data CPNI was meant to protect is monetized by the carriers themselves." },
  causes:["cpni","stingray"], effects:["cpnigap"] },

{ id:"huawei", year:2019, date:"2019–2024", era:7, cat:["radio","law"],
  title:"The Huawei Ban and 'Rip and Replace'",
  wiki:"Huawei",
  summary:"The FCC designates Huawei and ZTE national-security risks and bars them from networks receiving federal funds; a 'rip and replace' program begins removing Chinese equipment from rural U.S. carriers. The $1.9 billion reimbursement is underfunded from the start — carriers need $5.6 billion — and Chinese gear remains in parts of rural networks past the 2024 deadline.",
  importance:"The Huawei ban turned telecom equipment into a front line of great-power rivalry, treating the routers and radios inside the network as potential instruments of espionage. But the rip-and-replace program revealed the limits of security policy without adequate funding: Congress mandated removal and then appropriated a fraction of the cost, leaving small rural carriers unable to comply and Chinese equipment in the ground. Security ambition outran the money, and the networks stayed mixed.",
  impact:{
    law:"Telecom equipment is treated as a national-security matter for the first time at scale.",
    power:"The network's hardware becomes a theater of U.S.–China rivalry.",
    radio:"Underfunded 'rip and replace' leaves rural networks only partly cleared." },
  causes:["fourg"], effects:["fiveg"] },

{ id:"fiveg", year:2020, date:"2019–2026", era:7, cat:"radio",
  title:"5G and the Spectrum Dysfunction",
  wiki:"5G",
  summary:"5G rolls out from 2019; the FCC leads in auctioning millimeter-wave spectrum, though useful mid-band 5G takes years. Then the system jams: the FCC's spectrum-auction authority lapses for 27 months (2021–2023), an FAA–FCC fight over C-band near airports erupts in 2022, and by 2025 mid-band reaches 80% of the population as the FCC begins eyeing 6G.",
  importance:"5G promised a generational leap, but its rollout exposed structural dysfunction in U.S. spectrum governance: Congress let the FCC's auction authority expire for over two years during the most critical phase of competition with China, costing an estimated $100 billion-plus in forgone revenue, while the FAA and FCC clashed dangerously over whether C-band signals would interfere with aircraft altimeters. The technology advanced; the institutions meant to manage the airwaves it needs did not. The urban–rural 5G gap persists.",
  impact:{
    radio:"5G deploys unevenly amid a 27-month lapse in FCC auction authority.",
    law:"Spectrum governance fractures — expired auction power, FAA–FCC conflict.",
    power:"The U.S. stumbles in the spectrum competition with China it set out to lead." },
  causes:["spectrumauctions","fourg","huawei"], effects:["cpnigap"] },

{ id:"cpnigap", year:2026, date:"2026", era:7, cat:"radio",
  title:"The Privacy Gap the Phone Outgrew",
  wiki:"Information privacy law",
  summary:"The U.S. still has no comprehensive federal privacy law for the data phones generate. The 1996 CPNI rules cover call records and some location data — but not the app-level tracking, advertising identifiers, browsing history, and biometric data that flow through apps and platforms rather than the carrier. The most sensitive record of where you go and what you do is largely unregulated.",
  importance:"Every privacy protection in this tab was built for the carrier's pipe — CPNI for call records, Carpenter for cell-site data the government seeks — and the smartphone simply outgrew them. The data that now most precisely reveals a person's life is generated by apps and sold through ad networks, outside the carrier and outside CPNI, and no federal law reaches it. The through-line of mobile communications holds to the end: the regulation reflects the technology of the moment it was written, and that moment always passes faster than the law can follow.",
  impact:{
    law:"No federal privacy law reaches the app-and-platform data the phone generates.",
    surveillance:"The most sensitive location and behavior data flows past the carrier, unregulated.",
    society:"Mobile privacy is governed by rules built for a phone that no longer exists." },
  causes:["cpni","carrierlocation","carpenter","fiveg"], effects:[] }

);
