// SUPPLEMENT — the worldwide story of radio and telecommunications regulation that
// extra-radio.js (US-centric) and extra-televisionworld.js (broadcasting) don't cover:
// the telegraph's first private monopoly and its nationalization, the international
// bodies built to govern wires and then spectrum before any nation finished regulating
// them domestically, the imperial cable network and its seizure in WWI, state radio's
// birth in the USSR, Japan, Germany, and Britain's empire, Cold War radio warfare,
// liberation and counter-revolutionary uses of the transmitter, "small media" beating
// state broadcasting with cassette tapes, Africa's mobile leapfrog, the legal right to
// connectivity, and the shutdown/app-ban/sovereign-internet toolkit of the 2010s-2020s.
// cat:"radio" (Radio & Telecom tab), several cross-tagged power/law/surveillance.
// Cross-links extra-radio.js (telegraph, marconi, fessenden, radioact1912, firesidechats),
// extra-televisionworld.js (statetv1935, nhkjapan, itvuk, soviettv, iranrevolutiontv),
// extra-mobile.js (cellularconcept), extra-wifi.js (starlink, digitaldivide,
// broadbandinvest), extra-socialmedia.js (tiktokban). No images for now — data only.
window.ATLAS_EVENTS.push(

{ id:"uktelegraphmonopoly", year:1850, date:"1846–1870", era:3, cat:["radio","law"],
  title:"Britain's First Communications Monopoly",
  wiki:"Electric Telegraph Company",
  gallery:["Telegraph Act 1868","General Post Office"],
  summary:"Founded in 1846 by William Fothergill Cooke and John Lewis Ricardo, the Electric Telegraph Company absorbs its British rivals and becomes the world's first private communications monopoly — until the Telegraph Act 1868 nationalizes the entire industry into the Post Office.",
  importance:"Cooke and Wheatstone's telegraph patents gave the Electric Telegraph Company a head start it used to buy out or out-compete every domestic rival, building lines along the railway rights-of-way that had carried the first wires. By the 1860s it controlled most of Britain's telegraph traffic, and critics attacked it on the same grounds every communications monopoly since has faced: high rates, poor rural coverage, and unaccountable control of a service the public increasingly depended on. Parliament's answer was not to regulate the monopoly but to buy it: the Telegraph Acts of 1868–69 nationalized all domestic telegraphs into the Post Office, compensating the company's shareholders. Within twenty-five years of the technology's commercial introduction, Britain had run the full cycle — from competition, to private monopoly, to state monopoly — a sequence the telephone and broadcasting would each repeat in their own time.",
  impact:{
    radio:"A private company becomes the world's first communications monopoly — then is nationalized outright.",
    law:"Britain answers a private telecommunications monopoly by replacing it with a state one.",
    power:"The choice between private and state control of a network is made explicitly, then reversed within a generation." },
  causes:["telegraph"], effects:["itu1865","cablewars"] },

{ id:"itu1865", year:1865, date:"1865", era:3, cat:["radio","law"],
  title:"The World's First Communications Treaty Body",
  wiki:"International Telecommunication Union",
  summary:"Twenty European states sign the International Telegraph Convention in Paris and found the International Telegraph Union — the first permanent international body created for any communications technology, four decades before radio exists to test it.",
  importance:"A telegraph message crossed borders the moment two countries' wires met, and every crossing raised questions — tariffs, character sets, priority for government and press traffic — that no single nation could settle alone. The 1865 Paris convention answered with something new: a standing international body with its own rules and secretariat, rather than a patchwork of bilateral treaties renegotiated as needed. When radio arrived, the same institution absorbed it, eventually renaming itself the International Telecommunication Union in the 1930s. The pattern set here — a new communications technology gets a permanent international regulator before most countries finish regulating it at home — would repeat for radio spectrum in 1906 and echo, two centuries later, in arguments over who should govern the internet.",
  impact:{
    law:"The first permanent international regulatory body for any communications technology is created.",
    power:"International coordination of communications precedes most nations' domestic regulation of it.",
    radio:"The institutional framework that will later govern radio spectrum exists before radio is invented." },
  causes:["uktelegraphmonopoly"], effects:["radioconvention1906"] },

{ id:"japanmeijitelegraph", year:1869, date:"1869–1890s", era:3, cat:"radio",
  title:"Japan Wires Itself, State-First",
  wiki:"Telecommunications in Japan",
  summary:"The new Meiji government completes Japan's first telegraph line, between Tokyo and Yokohama, in 1869 — built, owned, and operated by the state from the outset, a deliberate break from the private-monopoly-then-nationalization sequence Britain and the United States had each just lived through.",
  importance:"The Meiji Restoration of 1868 launched a crash program of modernization, and a telegraph line completed within a year announced its urgency. Where Britain's telegraphs began as competing private companies later bought out by the state, and America's grew into the Western Union monopoly that regulation would spend decades trying to tame, Japan's Ministry of Industry built and ran its telegraph network directly from the first wire — no private phase, no nationalization debate, because there was nothing to nationalize. By the 1880s a state-owned telegraph network spanned the country. The pattern — infrastructure built by the state as state infrastructure, never privately owned at all — would recur exactly when Japan organized its first radio broadcaster six decades later.",
  impact:{
    power:"A modernizing state builds its communications network as a government enterprise from the first wire.",
    radio:"State ownership of communications infrastructure precedes private enterprise rather than replacing it.",
    law:"Telecommunications ownership and regulation are unified in the state from the technology's introduction." },
  causes:[], effects:["nhkradio1925"] },

{ id:"cablewars", year:1872, date:"1858–1902", era:3, cat:["radio","law"],
  title:"The Cable Empire",
  wiki:"Eastern Telegraph Company",
  gallery:["All Red Line","Submarine communications cable"],
  summary:"John Pender's Eastern Telegraph Company and its sister companies link Britain to India, Australia, and the rest of empire by submarine cable through the second half of the nineteenth century, culminating in 1902 in the all-British 'All Red Line' — a telegraph network spanning the globe without ever touching foreign soil.",
  importance:"After the first lasting transatlantic cable succeeded in 1866, Pender consolidated a tangle of cable ventures into the Eastern Telegraph Company and its affiliates, building a near-monopoly on the routes connecting Britain to India and the Far East — the empire's most valuable possessions, now linked to London in hours rather than weeks. The 1902 completion of the trans-Pacific cable closed the final gap: the 'All Red Line,' so named because British imperial territory was conventionally colored red on maps, let a message travel from London to any major outpost of empire and back using only British-controlled cable stations and British soil for relays — immune to interception or interruption by any rival power, in peacetime. The network was privately owned and commercially run, but its strategic value to the state was never in doubt, which was exactly why it became a military target the instant a general war began.",
  impact:{
    power:"A privately owned cable network functions as the nervous system of a global empire.",
    radio:"Control of submarine cable routes becomes a form of geopolitical power in its own right.",
    law:"A communications network is built explicitly to avoid foreign jurisdiction at every relay point." },
  causes:["uktelegraphmonopoly"], effects:["wwitelecomseizure"] },

{ id:"radioconvention1906", year:1906, date:"1906–1912", era:4, cat:["radio","law"],
  title:"The First Spectrum Treaty",
  wiki:"International Radiotelegraph Convention",
  summary:"Delegates from across the industrialized world meet in Berlin in 1906 for the first International Radiotelegraph Convention, mandating that ship and shore stations communicate regardless of manufacturer, allocating wavelengths for distress traffic, and adopting the call sign that within two years becomes SOS — global coordination of the radio spectrum before most countries had begun regulating it at home.",
  importance:"Radio's first commercial years were marred by manufacturers' rivalries: Marconi's company had at times refused to let its shipboard operators communicate with vessels carrying competitors' equipment, a commercial tactic that was also, at sea, a safety hazard. The 1906 Berlin convention forced interoperability — any ship's radio had to be able to reach any shore station and any other ship regardless of who built the set — reserved specific wavelengths for distress and ship traffic, and introduced the three-letter distress signal that the 1908 follow-up convention fixed as SOS. Six years before the Titanic disaster made the case for domestic enforcement undeniable in the United States, the international community had already agreed, on paper, that the airwaves needed traffic rules that no single company or nation could set unilaterally.",
  impact:{
    law:"International agreement on radio spectrum use precedes most nations' domestic radio law.",
    radio:"Interoperability between manufacturers' equipment is mandated for ship radio for the first time.",
    power:"No single company or nation can claim ownership of the wavelengths used at sea." },
  causes:["marconi","fessenden","itu1865"], effects:["radioact1912","wwitelecomseizure"] },

{ id:"wwitelecomseizure", year:1914, date:"1914–1918", era:4, cat:["radio","law"],
  title:"War Claims the Wires",
  wiki:"Defence of the Realm Act 1914",
  gallery:["Submarine communications cable"],
  summary:"Within hours of declaring war in August 1914, Britain cuts Germany's transatlantic cables and, under the Defence of the Realm Act, asserts government control over the country's telegraphs, telephones, and wireless stations; every other belligerent follows within days, establishing that communications networks are a war resource subject to seizure, not protected private property.",
  importance:"On the first night of the war the cable ship Telconia grappled and cut Germany's five transatlantic cables, severing its direct link to the Americas and forcing German traffic onto wireless and neutral relays that British intelligence could intercept — the cable empire built for commerce repurposed in hours as a weapon. The Defence of the Realm Act, rushed through Parliament days later, gave the British government sweeping powers to requisition telegraph, telephone, and wireless apparatus and to censor all messages passing through them; Germany, France, and eventually the United States — which placed its telegraph and telephone systems under the Postmaster General for the war's duration after 1917 — each asserted equivalent control over their own networks. The precedent that a national emergency justifies the state's seizure of privately built communications infrastructure would be invoked again in the Second World War and would shape Cold War continuity-of-government planning for decades after.",
  impact:{
    power:"Communications networks are treated as a strategic war resource subject to immediate state seizure.",
    law:"A wartime emergency law gives government sweeping control over telegraph, telephone, and wireless.",
    radio:"Cutting an enemy's cables becomes one of the first acts of a world war." },
  causes:["cablewars","radioconvention1906"], effects:["radiomoscow1922","bbcempireservice1932"] },

{ id:"radiomoscow1922", year:1922, date:"1922–1991", era:4, cat:"radio",
  title:"Radio Moscow and the State Voice",
  wiki:"Radio Moscow",
  summary:"The young Soviet state begins regular shortwave broadcasts from Moscow in 1922 over what was then the world's most powerful transmitter — the first sustained case of a government building radio, from its first broadcast, as the permanent ideological voice of the state to both its own citizens and the world.",
  importance:"Where Britain's BBC and America's NBC emerged from private or quasi-private origins that regulation later shaped, Soviet radio had no such phase: the Comintern station built in Moscow in the early 1920s was state property carrying state messaging from the day it switched on, aimed at a population spread across eleven time zones with high illiteracy and at a world the new regime hoped to win over or unsettle. The scale of investment — the most powerful transmitter on earth, dedicated to propaganda — signaled that the Soviet leadership understood radio's reach before most Western broadcasters had found a business model for it. It is the direct ancestor of Soviet Central Television decades later, and precisely the model of state-voice broadcasting that the West would spend the Cold War trying to counter with its own transmitters.",
  impact:{
    radio:"State-owned radio broadcasts ideology to domestic and foreign audiences from its first transmission.",
    power:"A government builds the world's most powerful transmitter specifically for ideological broadcasting.",
    communications:"Radio's reach is deployed to overcome both illiteracy and the vast distances of a continental state." },
  causes:["wwitelecomseizure"], effects:["radiofreeeurope1956","soviettv"] },

{ id:"nhkradio1925", year:1925, date:"1925–1926", era:4, cat:"radio",
  title:"Japan's Radio, State-Licensed From Day One",
  wiki:"NHK",
  summary:"Tokyo Broadcasting Station opens Japan's first radio service in March 1925; within a year it merges with the new Osaka and Nagoya stations into Nippon Hoso Kyokai (NHK), a single nationwide broadcaster operating under Ministry of Communications license and a mandatory receiver fee — radio arrives in Japan already organized as a supervised monopoly.",
  importance:"The United States let competing stations multiply until the airwaves became unusable, a chaos the Radio Act of 1927 was written to fix; Japan's Ministry of Communications instead licensed one broadcaster per region and merged them into a single national entity within a year of radio's introduction, funded — like the BBC — by a fee on every receiver. The arrangement extended the state-first pattern set by the 1869 telegraph line into the new medium without debate. NHK's wartime role broadcasting Imperial General Headquarters communiqués, including Emperor Hirohito's 1945 surrender announcement, cemented a relationship between broadcaster and state that carried forward, structurally intact, into NHK's postwar and television era.",
  impact:{
    radio:"A single, licensed, fee-funded national broadcaster is created within a year of radio's introduction.",
    power:"State supervision of broadcasting is settled as policy before broadcasting has found an audience.",
    law:"A receiver-fee funding model fixed at radio's birth carries unchanged into the television era." },
  causes:["japanmeijitelegraph"], effects:["nhkjapan"] },

{ id:"bbcempireservice1932", year:1932, date:"1932–1939", era:4, cat:"radio",
  title:"The BBC Goes Imperial",
  wiki:"BBC World Service",
  gallery:["BBC Empire Service"],
  summary:"The BBC launches the Empire Service in December 1932 — shortwave programming for Britain's colonies and dominions, funded like domestic broadcasting by the license fee — and by 1938, with fascist shortwave propaganda spreading across Europe and the Middle East, the government begins funding new foreign-language BBC services directly through the Foreign Office, splitting British international broadcasting between two different funding logics.",
  importance:"The Empire Service began as an extension outward of the BBC's domestic public-service model: license-fee-funded programming, in English, to keep British communities and administrators across the empire connected — King George V's first Christmas broadcast went out on the new service within days of its launch. But alarm at Italian and German shortwave stations aimed at the Middle East and Latin America pushed the government, from 1938, to fund new BBC foreign-language services — Arabic first, more during the war — directly through the Foreign Office, for explicitly political ends rather than the 'impartial public service' the license fee was meant to fund. The split between an editorially independent, license-funded service and a state-funded one aimed at foreign audiences persisted for decades and became the template other countries reached for when they built their own international broadcasting.",
  impact:{
    power:"Radio becomes Britain's chosen instrument for projecting influence across an empire and contested neutral ground.",
    radio:"A single broadcaster operates under two different funding models for two different audiences at once.",
    communications:"International broadcasting splits between an editorially independent service and an explicitly state-funded one." },
  causes:["radiomoscow1922","wwitelecomseizure"], effects:["allindiaradio1950"] },

{ id:"volksempfanger1933", year:1933, date:"1933–1945", era:4, cat:"radio",
  title:"The Volksempfänger and the Ministry of Propaganda",
  wiki:"Volksempfänger",
  gallery:["Reich Ministry of Public Enlightenment and Propaganda","Joseph Goebbels"],
  summary:"Weeks after taking power, the Nazi government creates the Reich Ministry of Public Enlightenment and Propaganda; by August 1933 it has launched the Volksempfänger ('people's receiver'), a deliberately cheap, mass-produced radio set engineered to make every German household a potential audience for the regime's broadcasts.",
  importance:"Hitler's use of radio as a central propaganda instrument is described elsewhere in general terms; the Volksempfänger was the concrete mechanism: a radio stripped to the minimum needed to receive German stations, sold near cost and on credit, with the explicit goal of radio ownership in every home — by the late 1930s, Germany had among the highest radio-penetration rates in the world, and almost all of it tuned, by design, to one source. Loudspeakers were installed in factories, streets, and schools for broadcasts citizens could not opt out of hearing even without a set of their own. The set's cheapness was the policy: a propaganda ministry that controlled both the only legal content and the affordability of the receiving equipment had engineered near-total reach years before the same regime turned to television for the 1936 Olympics.",
  impact:{
    radio:"A government subsidizes mass radio ownership specifically to maximize the reach of state broadcasting.",
    surveillance:"Public loudspeakers ensure broadcasts reach citizens who own no receiver of their own.",
    power:"Engineering the affordability of receiving equipment becomes as important to a propaganda strategy as the content itself." },
  causes:["firesidechats","radiomoscow1922"], effects:["statetv1935"] },

{ id:"allindiaradio1950", year:1950, date:"1936–1990s", era:5, cat:"radio",
  title:"All India Radio and the Nation-Building Voice",
  wiki:"All India Radio",
  summary:"Renamed from the Indian State Broadcasting Service in 1936, All India Radio becomes independent India's primary instrument of nation-building after 1947 — broadcasting in dozens of languages to a vast, largely rural and multilingual population — and remains a government broadcasting monopoly on news for seventy years, until private FM stations are finally permitted to air news in 2017.",
  importance:"AIR inherited the BBC's license-fee funding and organizational shape but took on a different mission after independence: unifying a country of hundreds of languages and a population for whom radio, not print, would be the first mass medium most people ever experienced. Regional-language programming, agricultural and educational broadcasts, and national news bulletins — required listening for government employees in some states — made AIR a direct instrument of the developmental state, the same role state radio played across the decolonizing world from Indonesia to Bangladesh. The monopoly outlasted the Cold War that shaped it: private FM licensing began only in 2000, and even then private broadcasters were barred from airing news of any kind until 2017, AIR alone permitted to deliver news over the airwaves for seven decades after independence.",
  impact:{
    power:"State radio becomes the primary instrument for building a shared national identity across a multilingual population.",
    radio:"A government broadcasting monopoly on news persists for seventy years after independence.",
    law:"Private broadcasters are licensed for entertainment for years before being permitted to broadcast news at all." },
  causes:["bbcempireservice1932"], effects:[] },

{ id:"radiofreeeurope1956", year:1956, date:"1950–1989", era:5, cat:"radio",
  title:"Radio Free Europe and the Jammed Airwaves",
  wiki:"Radio Free Europe/Radio Liberty",
  gallery:["Hungarian Revolution of 1956","Jamming (broadcasting)"],
  summary:"American-funded Radio Free Europe and Radio Liberty broadcast uncensored news into the Soviet bloc from 1950 onward; during the 1956 Hungarian Revolution their Hungarian-language broadcasts are later judged to have implied Western military support that never came, while Eastern Bloc governments spend decades and enormous sums jamming the signals — a war fought entirely on the radio spectrum.",
  importance:"RFE (aimed at Eastern Europe) and RL (aimed at the USSR itself) were covertly funded by the CIA until the arrangement was exposed in 1971, after which Congress took over open funding — broadcasting as an avowed instrument of foreign policy, the mirror image of the state-voice model the Soviet Union had pioneered decades earlier. The 1956 Hungarian Revolution became their defining crisis: internal RFE reviews later concluded that some broadcasts had gone beyond approved policy in ways Hungarians could reasonably read as a promise of intervention, a promise the West did not keep once Soviet tanks moved in. Meanwhile the Soviet Union and its allies built dedicated jamming networks — banks of transmitters broadcasting noise on RFE's frequencies, consuming, in some Eastern Bloc cities, more power than the legitimate broadcasting they drowned out. The USSR did not stop jamming until 1988, three years before it ceased to exist.",
  impact:{
    radio:"A broadcaster funded by a foreign intelligence agency becomes a primary news source for a closed society.",
    surveillance:"National jamming infrastructures are built and run for decades to block a single broadcaster.",
    power:"A broadcast is blamed for encouraging an uprising the broadcaster's own government would not back militarily." },
  causes:["radiomoscow1922"], effects:[] },

{ id:"hotline1963", year:1963, date:"1962–1963", era:5, cat:["radio","law"],
  title:"The Hotline That Wasn't a Phone",
  wiki:"Moscow–Washington hotline",
  gallery:["Cuban Missile Crisis"],
  summary:"Shaken by the 1962 Cuban Missile Crisis — thirteen days during which messages between Washington and Moscow sometimes traveled faster by public radio broadcast than by diplomatic cable — the two superpowers sign an agreement in June 1963 establishing a direct teletype link between the Kremlin and the Pentagon, a dedicated crisis channel built to bypass normal diplomacy and broadcast infrastructure alike.",
  importance:"During the missile crisis, encoding and relaying messages through embassy channels sometimes took so long that a key Soviet communication reportedly reached Washington faster as a public radio broadcast than through diplomatic cable — a near-miss that alarmed planners on both sides about how a misunderstanding, not a decision, could trigger a nuclear exchange. The hotline (popularly the 'red telephone,' though originally a duplex telegraph circuit, not a voice line) institutionalized something genuinely new: a communications channel whose sole purpose was crisis avoidance, built and maintained jointly by adversaries, deliberately separate from the cable networks either side might cut in wartime or use for propaganda. It became the template for the India–Pakistan hotline, the inter-Korean line, and the wider family of military 'deconfliction' channels that followed.",
  impact:{
    power:"Adversary governments jointly build a communications channel whose sole purpose is avoiding war by accident.",
    law:"A direct-communication agreement is negotiated and maintained between nuclear rivals outside normal diplomacy.",
    radio:"A near-miss in which a crisis message travels by public broadcast prompts a dedicated private channel instead." },
  causes:[], effects:[] },

{ id:"swadhinbanglabetar1971", year:1971, date:"1971", era:5, cat:"radio",
  title:"A Radio Station Declares a Country",
  wiki:"Shadhin Bangla Betar Kendro",
  gallery:["Bangladesh Liberation War"],
  summary:"On the night of March 25–26, 1971, as the Pakistani army moves against East Pakistan's independence movement, a makeshift transmitter near Chittagong broadcasts a declaration of independence — Shadhin Bangla Betar Kendro, 'Free Bengal Radio,' becomes the voice of a state that does not yet have a government, an army, or recognized borders.",
  importance:"The station began with a commandeered transmitter and relocated repeatedly through the nine-month Liberation War to avoid capture, broadcasting news, patriotic songs, and appeals that were often the only source of information for Bengalis cut off from Pakistani state media — and for the diaspora and international observers trying to follow events from outside. It stands in this atlas as a striking counter-case to the state broadcasters elsewhere in this gallery, whose monopolies existed to control a population already under one government's authority: proof that a broadcast signal can carry a claim to national legitimacy before any territory, army, or recognized government exists to back it, and that a movement holding even one improvised transmitter holds a kind of statehood that armies on the ground cannot immediately erase.",
  impact:{
    power:"A broadcast signal carries a claim to national legitimacy before any territory or government exists to back it.",
    radio:"A clandestine, mobile transmitter becomes a nascent state's only reliable channel to its own population.",
    communications:"Radio substitutes for every institution of a state that has not yet been born." },
  causes:[], effects:[] },

{ id:"indonesiaradio1965", year:1965, date:"1965–1966", era:5, cat:"radio",
  title:"State Radio and Mass Violence",
  wiki:"Radio Republik Indonesia",
  gallery:["Indonesian killings of 1965–1966"],
  summary:"After the failed coup attempt of September 30, 1965, General Suharto's forces seize Radio Republik Indonesia's Jakarta headquarters within hours and broadcast the army's account of events nationwide — the opening act of a campaign whose narrative helped trigger mass violence against the Indonesian Communist Party and its alleged sympathizers, with death tolls estimated in the hundreds of thousands.",
  importance:"RRI, the state broadcaster inherited in structure from Dutch colonial radio, had no existence independent of whichever government controlled it — whoever held the Jakarta transmitter held the only nationwide account of events. Within hours of the coup attempt, army units seized that transmitter and broadcast Suharto's version, blaming the PKI and calling for its elimination; relayed through regional stations and the press, that broadcast became the foundational narrative used to organize and justify the killings that followed over the next several months. It is the atlas's starkest case of a broadcasting monopoly — built for control, on the same state-first model as other national broadcasters founded earlier in this gallery — being turned not merely to propaganda but to mass violence: the same kind of unified national voice that elsewhere in this period helped bring a state into being, used here to turn a state against part of itself.",
  impact:{
    power:"Control of the national broadcaster's transmitter determines whose account of a coup becomes official history.",
    surveillance:"A state broadcasting monopoly, built for control, is repurposed to help organize mass violence.",
    radio:"The infrastructure that unifies a nation under one broadcast voice can be turned against part of that nation." },
  causes:[], effects:[] },

{ id:"khomeinicassettes1979", year:1979, date:"1970s–1979", era:5, cat:"radio",
  title:"Revolution by Cassette Tape",
  wiki:"Iranian Revolution",
  gallery:["Cassette tape","Ruhollah Khomeini"],
  summary:"Through the 1970s, sermons recorded by the exiled Ayatollah Khomeini — first from Iraq, then from France — are duplicated onto cassette tapes and smuggled into Iran by the thousands, copied and recopied in mosques and bazaars; by the time the Shah's government falls in February 1979, this informal cassette network has out-reached a state broadcasting monopoly built with the resources of an oil state.",
  importance:"Iranian state radio and television were well-funded and tightly controlled, but cassette tapes — cheap, copyable, untraceable, playable in any car, shop, or home — created a parallel media system the state had no mechanism to monitor or shut down the way it could a transmitter. Researchers later called this 'small media': low-cost, decentralized formats that route around the high-cost, easily-controlled infrastructure of broadcasting. By the time state television was seized and repurposed by the new government within days of the Shah's departure, Khomeini's voice was already familiar to millions of Iranians who had never seen his face — the broadcast infrastructure changed hands only after the cassette network had already changed minds.",
  impact:{
    power:"A decentralized, low-cost medium spreads a revolutionary message faster than a state can monitor it.",
    radio:"An informal cassette-tape network out-reaches a state broadcasting monopoly for influence over public opinion.",
    communications:"'Small media' — cheap, copyable formats — prove that broadcast infrastructure is not the only path to mass reach." },
  causes:[], effects:["iranrevolutiontv"] },

{ id:"mobileleapfrogafrica", year:1994, date:"1994–2010", era:6, cat:["radio","law"],
  title:"The Mobile Leapfrog",
  wiki:"M-Pesa",
  gallery:["Vodacom"],
  summary:"South Africa's first cellular networks launch in 1994, the year apartheid ends, in a country where most Black households had never had a landline; thirteen years later Kenya's M-Pesa (2007) turns the mobile phone itself into a bank account — across much of Africa, mobile technology doesn't follow fixed-line infrastructure, it replaces the need for it.",
  importance:"In most of the world, telephony followed a sequence: copper wires first, cellular as a later supplement. Decades of underinvestment meant much of Africa never built that fixed-line base, so when cellular networks arrived — Vodacom and MTN both launched in South Africa in 1994, the country's first full year of democratic government — they reached populations with no prior telephone access at all, skipping the wired stage entirely. M-Pesa pushed the leapfrog further: Safaricom's mobile-money service let Kenyans with a basic handset and no bank account send money, pay bills, and save, turning telecom infrastructure into financial infrastructure where bank branches were scarce but mobile signal was not. Regulators in Kenya largely let M-Pesa grow ahead of banking law rather than blocking it pending new rules — a light-touch approach credited with its explosive adoption, and later studied, with mixed results, by regulators elsewhere who tried to write the rules first.",
  impact:{
    radio:"Mobile networks become primary telecommunications infrastructure without a preceding fixed-line stage.",
    power:"A telecom company becomes a financial institution for a population banks never reached.",
    law:"Regulation follows a financial-services innovation rather than preceding it, inverting the usual order." },
  causes:["cellularconcept","digitaldivide"], effects:[] },

{ id:"myanmarsaffron2007", year:2007, date:"2007", era:6, cat:"radio",
  title:"The Saffron Revolution, Filmed on Phones",
  wiki:"2007 Burmese anti-government protests",
  summary:"When Buddhist monks lead mass protests against Myanmar's military government in September 2007, citizens with mobile phone cameras smuggle footage of the crackdown out of the country within hours — and the junta responds by shutting down the country's internet access entirely for nearly a week, one of the first national-scale internet shutdowns used explicitly as a crackdown tool.",
  importance:"Myanmar in 2007 had one of the lowest rates of mobile and internet penetration in Asia, but it was enough: images and video of monks being beaten, recorded on phones and uploaded through the country's handful of internet connections, reached international newsrooms within hours — a sharp break from the regime's usual ability to seal events off from outside scrutiny. The government's response, severing the country's internet gateways for nearly a week, was crude but effective enough that the tactic would recur and refine for the next two decades, from Egypt in 2011 to the more than one hundred shutdowns counted globally in a single year by the 2020s, including Ethiopia's.",
  impact:{
    surveillance:"A government discovers that cutting national internet access can blunt citizen journalism in real time.",
    radio:"Mobile phone cameras, not professional broadcasters, become the primary source of footage from inside a crackdown.",
    power:"A national internet shutdown is used as a crackdown tool at scale for one of the first times." },
  causes:["mobileleapfrogafrica"], effects:["ethiopiashutdowns2018"] },

{ id:"righttointernet2010", year:2010, date:"2000–2010", era:6, cat:["radio","law"],
  title:"Connectivity as a Legal Right",
  wiki:"Right to Internet access",
  summary:"Estonia treats internet access as a basic right from around 2000 as part of rebuilding its institutions after Soviet rule; France's Constitutional Council rules in 2009 that internet access is so bound up with free expression that it cannot be cut off without judicial process; and in July 2010 Finland becomes the first country to make a guaranteed minimum broadband speed — initially 1 Mbit/s — an enforceable legal entitlement for every household.",
  importance:"Each reached a similar destination by a different legal route. Estonia, building its institutions from near-zero, made connectivity and e-government priorities early, well ahead of most Western peers. France's Conseil constitutionnel struck down the part of the HADOPI anti-piracy law that would have let an administrative body, rather than a judge, disconnect households accused of piracy — reasoning that internet access was now so essential to exercising free expression that removing it required full judicial protection. Finland went furthest in concrete terms: its telecoms ministry decree gave every permanent residence and business a legal right to a 1 Mbit/s connection at a reasonable price, with operators obligated to provide it — a regulatory floor, not an aspiration. Together they marked the moment connectivity began shifting, in law if not yet everywhere in fact, from a commercial product toward a utility entitlement — a question every country still wrestling with a digital divide was now implicitly being asked to answer.",
  impact:{
    law:"Internet access moves from a commercial product to a legally guaranteed entitlement in several jurisdictions.",
    radio:"A minimum broadband speed becomes an enforceable right rather than a market outcome.",
    power:"Courts and regulators, not only markets, are made responsible for guaranteeing connectivity." },
  causes:[], effects:[] },

{ id:"dutertedrugwar2016", year:2016, date:"2016–2022", era:7, cat:"radio",
  title:"The Drug War on the Airwaves",
  wiki:"Philippine Drug War",
  gallery:["Rodrigo Duterte"],
  summary:"Rodrigo Duterte, elected Philippine president in 2016 on a promise to wage war on drugs, uses regular addresses broadcast live on radio and television to name suspected dealers, praise extrajudicial killings, and threaten judges and journalists — turning the open broadcast media that decades of post-Marcos press-freedom advocacy had protected into a direct platform for a head of state's own incitements.",
  importance:"Since Marcos's fall in 1986, the Philippines has had one of Southeast Asia's freer broadcast environments — independent stations, a robust press, constitutional guarantees. Duterte's drug war, launched in June 2016, used that openness differently than the censorship this gallery usually tracks: rather than suppressing media, his government used ordinary, unrestricted broadcast access as a direct channel for the president's own rhetoric, normalizing language about killing drug suspects that human rights organizations linked to thousands of deaths in the years that followed. It is a different failure mode than the state-monopoly propaganda this gallery tracks elsewhere: not control of the airwaves, but a democratically elected leader's unfiltered access to them — proof that the oldest power of broadcast media, a leader's voice in every home, carries the same risk regardless of how free the underlying system is.",
  impact:{
    power:"An elected leader uses unrestricted broadcast access to incite violence rather than to circumvent censorship.",
    radio:"A free broadcast media environment proves no guarantee against a head of state's own incitements.",
    society:"Years of recorded, broadcast rhetoric become evidence in international accountability proceedings." },
  causes:["firesidechats"], effects:[] },

{ id:"ethiopiashutdowns2018", year:2018, date:"2016–2023", era:7, cat:["radio","law"],
  title:"The Shutdown Becomes a Toolkit",
  wiki:"Internet censorship in Ethiopia",
  summary:"Ethiopia declares states of emergency in 2016 and 2018, each time cutting mobile internet and social media nationwide, and during the 2020–2022 Tigray war imposes one of the longest regional internet blackouts on record; by 2023, monitoring groups count more than one hundred government-ordered internet shutdowns worldwide that year alone — a tactic Ethiopia helped normalize at scale.",
  importance:"Ethiopia's shutdowns extended the pattern Myanmar previewed in 2007 to a far greater scale and frequency: mobile internet across Oromia, the country's most populous region, was cut for months during the 2016–2018 unrest, and Tigray was disconnected almost entirely for nearly two years during the civil war, severing not just protest organizing but banking, journalism, and contact between separated families. What began as emergency measures became, through repetition, an administrative default — by the early 2020s the #KeepItOn coalition was tracking shutdowns as a routine tool across dozens of countries, deployed during exams, elections, protests, and wars alike, with Ethiopia among a handful of states accounting for a large share of the global total. The same mobile infrastructure that elsewhere delivered banking and connectivity to populations with nothing else can, by the same logic, be switched off entirely by the government that licensed it.",
  impact:{
    power:"A national internet shutdown becomes a routine administrative tool rather than an emergency exception.",
    law:"No binding international framework constrains a government's ability to disconnect its own population.",
    radio:"Telecommunications infrastructure built to connect a population becomes the mechanism for isolating it." },
  causes:["myanmarsaffron2007"], effects:["sovereigninternet2019"] },

{ id:"indiaappban2020", year:2020, date:"2020", era:7, cat:["radio","law"],
  title:"India Bans the Apps",
  wiki:"2020 China–India skirmishes",
  gallery:["TikTok"],
  summary:"Days after a deadly clash between Indian and Chinese soldiers in the Galwan Valley in June 2020, India's government bans TikTok and dozens of other Chinese-owned mobile apps, citing national security and data sovereignty — a major democracy using app-store bans as an immediate response to a border conflict.",
  importance:"The initial order covered 59 apps including TikTok, UC Browser, and WeChat, and was extended over the following months to well over 200; the government's stated justification was that the apps' data practices threatened national security and sovereignty, but the timing — days after the first deadly India–China border clash in decades — made the geopolitical signal unmistakable. India had been one of TikTok's largest markets outside China; the ban, made permanent in 2021, eliminated it overnight and was widely studied elsewhere, including during the US ban debates that followed, as a template for using control over app distribution as foreign policy independent of any specific proven breach. Alongside internet shutdowns elsewhere and Russia's sovereign-internet law, it became part of a broader pattern of states asserting direct control over what digital infrastructure operates within their borders.",
  impact:{
    power:"App-store access becomes an instrument of foreign policy, deployed within days of a border clash.",
    law:"A government bans dozens of foreign-owned applications citing data sovereignty rather than a specific proven harm.",
    radio:"Control over a population's mobile app ecosystem is asserted as a sovereign prerogative." },
  causes:[], effects:["sovereigninternet2019"] },

{ id:"starlinkukraine2022", year:2022, date:"2022–2023", era:7, cat:"radio",
  title:"A Satellite Network Goes to War",
  wiki:"Starlink",
  gallery:["2022 Russian invasion of Ukraine"],
  summary:"Within days of Russia's February 2022 invasion, SpaceX ships Starlink terminals to Ukraine and activates service nationwide; the constellation becomes critical to Ukraine's military communications, drone operations, and civilian connectivity where cellular and fiber networks have been destroyed — placing a private company's commercial decisions at the center of a war between states.",
  importance:"Ukraine's terrestrial telecom infrastructure was a deliberate target from the invasion's first days, and Starlink's terminals — small, satellite-based, needing no local infrastructure beyond power — filled the gap for military units, hospitals, and civilians alike, reportedly becoming integral to Ukrainian drone-targeting systems. But the service was never a neutral utility: its founder publicly discussed, and at times acted on, decisions about where coverage would and would not be available, decisions with direct battlefield consequences that no government — Ukrainian, American, or otherwise — could fully compel or override. It is the starkest illustration yet of the asymmetry the atlas's domestic Starlink entry describes from a regulatory angle: a privately owned satellite network, accountable to no telecom regulator and bound by no common-carrier obligation, became as consequential to a war's outcome as any government's own communications systems.",
  impact:{
    power:"A private company's infrastructure decisions directly affect the conduct of a war between states.",
    radio:"Satellite connectivity requiring no local infrastructure becomes critical military and civilian communications during conflict.",
    law:"No government can fully compel or override a foreign private company's control of communications infrastructure on its own soil." },
  causes:[], effects:["starlink"] },

{ id:"sovereigninternet2019", year:2019, date:"2019–2025", era:7, cat:["radio","law"],
  title:"The Sovereign Internet",
  wiki:"Sovereign Internet Law",
  gallery:["Runet","BRICS"],
  summary:"Russia's 2019 Sovereign Internet Law requires domestic traffic to be capable of routing entirely within the country and gives the state the technical means to disconnect Russia from the global internet if needed; by the mid-2020s, similar 'digital sovereignty' logic — data localization, app bans, and recurring BRICS discussions of alternatives to Western-controlled internet infrastructure — has become a recognizable policy family rather than one country's idiosyncrasy.",
  importance:"The Russian law required ISPs to install government-controlled equipment capable of filtering and rerouting traffic, and mandated periodic tests of the country's ability to operate 'Runet' as an isolated network — preparing for a scenario in which Russia chooses, or is forced, to cut itself off from infrastructure built largely on American and European foundations. The same anxiety — that a country's communications depend on infrastructure, standards, and companies it does not control — had already driven India's app bans and would recur in BRICS discussions of reducing reliance on Western-dominated payment networks, cable routes, and platform ecosystems. None of these efforts produced anything resembling a working alternative internet by the mid-2020s, but together they marked a shift in the era's central telecom-policy question: from the 'digital divide' of who has access to 'digital sovereignty' — who controls the infrastructure that those with access depend on — the direct descendant of the cable-route anxieties that built the All Red Line over a century earlier.",
  impact:{
    law:"A government legislates the technical capability to disconnect itself from the global internet.",
    power:"Control over communications infrastructure, not just content, becomes the explicit object of state policy.",
    radio:"The 'digital divide' question of who has access gives way to a 'digital sovereignty' question of who controls the infrastructure." },
  causes:["ethiopiashutdowns2018","indiaappban2020"], effects:[] }

);
