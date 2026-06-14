// SUPPLEMENT — the international history of networked information: a deliberately
// global, non-US-centric thread running from wartime wireless through Minitel,
// FidoNet, and the sovereign-internet era. (Pre-1904 entries removed for now.) It
// decentres Silicon Valley — Minitel, JUNET, RNP, KII, Alibaba, M-Pesa, BATX,
// Aadhaar, Marco Civil, Falcon — and tracks how states and regions built, bent, and
// fenced the network on their own terms. Cross-links to existing cards (writing,
// chappe, telegraph, marconi, arpanet, webpublic, greatfirewall, snowden, gdpr,
// arabspring, sovereigninternet2019, starlinkukraine2022, tiktokban, aiact) rather
// than duplicating them. Factual corrections applied per review: de Landa was a
// Franciscan friar (not yet bishop) and burned 27 codices + ~5,000 images, opposed by
// the sitting bishop Toral; WorkNet was founded 1987 (SANGONeT name came later);
// FidoNet (founded 1984) had *spread* behind the Iron Curtain by 1988; POPIA predates
// and did not derive from GDPR. Round one: data only, no images.
window.ATLAS_EVENTS.push(

// ===== I. WIRED EMPIRES =====
{ id:"russojapanesewireless", year:1904, date:"1904–1905", era:4, cat:"radio",
  title:"Wireless Goes to War: The Russo-Japanese War",
  wiki:"Russo-Japanese War", gallery:["Wireless telegraphy","Battle of Tsushima","Marconi Company"],
  summary:"During the Russo-Japanese War, naval operators on both sides use shipborne wireless telegraphy to relay fleet positions and war dispatches in real time — and at Tsushima in 1905, Japanese scouts wireless the sighting of the Russian fleet, helping deliver one of history's most decisive naval victories.",
  importance:"This was the first war in which radio shaped the outcome at sea: wireless turned scattered ships into a coordinated network and a scouting cruiser's signal into a fleet's advantage. It also birthed signals intelligence and electronic warfare in embryo, as commanders grasped that an enemy's transmissions could be intercepted and his receivers jammed. The conflict announced that control of the spectrum was now a dimension of military power — the maritime prelude to the wireless century and to the SIGINT states that would follow.",
  impact:{
    communications:"Wireless networks the fleet, turning real-time coordination into decisive advantage.",
    surveillance:"Interception and jamming of enemy signals begin — the seed of signals intelligence.",
    government:"Control of the radio spectrum becomes a recognized dimension of military power." },
  causes:["marconi"], effects:["arpanet"] },

// ===== III. COLD WAR CODE & GRASSROOTS NETWORKS =====
{ id:"minitel", year:1982, date:"1982", era:5, cat:["internet","radio"],
  title:"Minitel: France's Pre-Web Network",
  wiki:"Minitel", gallery:["France Télécom","Videotex"],
  summary:"France Télécom launches Minitel nationwide, distributing free terminals to millions of households and creating Europe's first mass-scale online utility — letting citizens look up phone numbers, book trains, bank, and chat a full decade before the World Wide Web reached the public.",
  importance:"Minitel proved that an entire nation could be put online years before the web, and that a state telecom could bootstrap mass digital life by simply giving the hardware away. At its height millions of terminals carried thousands of services, complete with a thriving paid-messaging economy (the notorious 'Minitel rose'), making France the most connected society on Earth in the 1980s. Its very success became a trap — a closed, centralized, French system that the country clung to even as the open internet arrived, a cautionary tale about how a successful national network can delay adoption of the global one.",
  impact:{
    communications:"An entire nation goes online a decade before the web, on free state-issued terminals.",
    society:"Mass digital life — banking, booking, messaging, commerce — arrives in 1980s France.",
    government:"A state telecom demonstrates that public investment can build a national network from scratch." },
  causes:["webpublic"], effects:["alibaba"] },

{ id:"junet", year:1984, date:"1984", era:5, cat:["internet"],
  title:"JUNET: Networking Japan",
  wiki:"JUNET", gallery:["Jun Murai","Japanese language and computers"],
  summary:"Dr. Jun Murai establishes JUNET, connecting Japanese research universities through decentralized dial-up nodes — and pioneering the handling of multi-byte Japanese characters on a network built for the Latin alphabet, the first serious step toward a non-English internet.",
  importance:"JUNET, and the WIDE Project that grew from it, made Jun Murai the 'father of the Japanese internet' and addressed a problem Western networks had ignored entirely: how to carry a writing system of thousands of characters across infrastructure designed for ASCII. Solving multi-language networking was a precondition for the internet to become genuinely global rather than an Anglophone enclave, and the work done in Japan fed directly into the internationalization of email and the web. It marks the moment the network began, technically, to speak languages other than English.",
  impact:{
    communications:"Japan's universities are networked, pioneering multi-byte non-Latin character handling.",
    society:"The internet takes its first serious step toward carrying non-English languages.",
    technology:"Internationalization of network protocols begins, a precondition for a global web." },
  causes:["arpanet"], effects:["alibaba"] },

{ id:"fidonet", year:1988, date:"1984–1988", era:5, cat:["internet"],
  title:"FidoNet Crosses the Iron Curtain",
  wiki:"FidoNet", gallery:["Bulletin board system","Tom Jennings"],
  summary:"FidoNet — a grassroots, dial-up network of hobbyist bulletin-board systems founded by Tom Jennings in 1984 — spreads worldwide by 1988, letting amateurs inside Eastern Europe, the USSR, and Asia exchange messages across borders that official networks could not, or would not, cross.",
  importance:"FidoNet was the people's internet before the internet: no central authority, no commercial backbone, just volunteers whose home computers phoned each other at night to relay mail across a global mesh. Its decentralized, leaderless design made it nearly impossible to shut down, and by the late 1980s it had become a genuine channel of communication into and out of the Soviet bloc, carrying messages over an Iron Curtain built to stop exactly that. It demonstrated, years before the web, that a network grown from the bottom up could route around state information control.",
  impact:{
    communications:"A leaderless, dial-up volunteer network spans the globe, including the Soviet bloc.",
    society:"Hobbyists route messages across the Iron Curtain that official channels would not carry.",
    government:"A decentralized network proves resistant to the information controls of closed states." },
  causes:["arpanet"], effects:["worknet","webpublic"] },

{ id:"worknet", year:1987, date:"1987", era:5, cat:["internet","law"],
  title:"WorkNet: Networking the Anti-Apartheid Struggle",
  wiki:"SANGONeT", gallery:["Association for Progressive Communications","Apartheid"],
  summary:"South Africa's WorkNet — later renamed SANGONeT — launches dial-up email and networking for trade unions and civil-society groups, giving the anti-apartheid movement a digital tool to organize and communicate beneath the state's information controls.",
  importance:"WorkNet put modems in the hands of the unions and activists fighting apartheid, at a moment when the regime tightly policed the press and the post. Email and bulletin boards let organizers coordinate and pass information internationally without passing through channels the state could easily monitor or block, linking the South African struggle into the emerging global network of progressive communications. It is an early, concrete case of grassroots networking as a civil-rights instrument — the network as a tool of liberation rather than control.",
  impact:{
    communications:"Unions and activists gain dial-up email beneath apartheid's information controls.",
    society:"Grassroots networking becomes a civil-rights tool in the anti-apartheid struggle.",
    government:"A repressive state's monopoly on information is quietly circumvented by modems." },
  causes:["fidonet"], effects:["rnp"] },

{ id:"rnp", year:1989, date:"1989", era:5, cat:["internet"],
  title:"Brazil Builds a Sovereign Backbone: RNP",
  wiki:"Rede Nacional de Ensino e Pesquisa", gallery:["Brazilian Ministry of Science and Technology","National research and education network"],
  summary:"Brazil's Ministry of Science and Technology establishes the Rede Nacional de Pesquisa (RNP), building a national academic network backbone that becomes the foundation of the country's sovereign internet — Brazilian infrastructure, governed by Brazil.",
  importance:"RNP was a deliberate act of digital sovereignty by a major nation of the global South: rather than depend wholly on foreign carriers, Brazil built and governed its own research-and-education backbone, the spine from which its public internet later grew. That early insistence on owning the infrastructure is of a piece with Brazil's later leadership on internet governance — the Marco Civil bill of rights, the multistakeholder model — making the country a recurring counterweight to the assumption that the internet must be run on, and by, others' terms. The backbone laid in 1989 is why Brazil could later set rules rather than merely follow them.",
  impact:{
    communications:"Brazil builds and governs its own national academic internet backbone.",
    government:"Digital sovereignty is asserted by a major global-South nation from the network's start.",
    society:"The infrastructure underpinning Brazil's later internet-governance leadership is laid." },
  causes:["worknet"], effects:["marcocivil2014"] },

// ===== IV. THE CONNECTED WORLD & PLATFORM MONOPOLIES =====
{ id:"koreakii", year:1995, date:"1995–2005", era:6, cat:["internet","radio"],
  title:"Korea's Broadband Master Plan",
  wiki:"Internet in South Korea", gallery:["Korea Information Infrastructure","Broadband"],
  summary:"South Korea launches the Korea Information Infrastructure master plan, pouring aggressive state capital into fibre and broadband — and by 2005 achieves the highest household broadband penetration on Earth, turning a war-ravaged economy into the world's most wired society.",
  importance:"Korea's KII is the clearest proof that broadband leadership is a policy choice, not an accident of wealth: the state planned, financed, and drove a national fibre rollout, and the result was a society where ultra-fast internet became a near-universal utility a decade ahead of richer nations. The dense connectivity it created seeded distinctive online cultures — PC bangs, professional gaming, early social platforms — and made Korea a living preview of a fully broadband society. It stands against the American model of leaving build-out to the market, and the contrast in outcomes is stark.",
  impact:{
    communications:"State-driven investment delivers the world's highest broadband penetration by 2005.",
    society:"A fully wired society emerges a decade early, seeding gaming and online cultures.",
    government:"Broadband leadership is shown to be a deliberate policy choice, not a market accident." },
  causes:["webpublic"], effects:["mpesa"] },

{ id:"alibaba", year:1999, date:"1999", era:6, cat:["internet"],
  title:"Alibaba and a Chinese E-Commerce Ecosystem",
  wiki:"Alibaba Group", gallery:["Jack Ma","Taobao"],
  summary:"Jack Ma founds Alibaba in Hangzhou in 1999; it survives the dot-com crash and builds a vast Chinese e-commerce and data ecosystem — Taobao, Alipay, cloud — largely independent of Silicon Valley's platforms and infrastructure.",
  importance:"Alibaba is the cornerstone of the parallel digital economy that grew inside China, proof that a major internet power could be built outside the American platform order. By creating its own marketplaces, payment rails, and cloud, it helped ensure that the world's largest online population would transact on homegrown infrastructure rather than on Amazon, eBay, or PayPal. Together with Tencent and Baidu, it made China not a branch office of Silicon Valley but a rival center of gravity — a second internet, with its own giants, its own logic, and its own state relationship.",
  impact:{
    communications:"China builds a vast e-commerce and payments ecosystem independent of Silicon Valley.",
    society:"The world's largest online population transacts on homegrown platforms.",
    government:"A parallel, sovereign digital economy emerges as a rival to the American platform order." },
  causes:["minitel","junet"], effects:["batx"] },

{ id:"indiaitact2000", year:2000, date:"2000", era:6, cat:["internet","law"],
  title:"India's Information Technology Act",
  wiki:"Information Technology Act, 2000", gallery:["Digital signature","Cybercrime"],
  summary:"India passes the Information Technology Act, 2000 — recognizing digital signatures and electronic contracts to enable e-commerce, while also writing broad powers of state web monitoring and data interception into law from the outset.",
  importance:"The IT Act is the foundational statute of digital India, and it captures the double face of internet law in the global South: the same act that legitimized online commerce also granted the state expansive authority to monitor, intercept, and later (under Section 69) block content and order takedowns. As India's online population grew into the world's largest, this framework became the lever for everything from the world's most frequent internet shutdowns to sweeping content removals — enablement and control written into the network's legal DNA together.",
  impact:{
    communications:"E-commerce and digital contracts gain legal recognition in India.",
    surveillance:"Broad state powers of web monitoring and interception are written into law from the start.",
    society:"The legal framework for both digital India and its later shutdowns and takedowns is set." },
  causes:["webpublic"], effects:["indianetneutrality","freebasics"] },

{ id:"woredanet", year:2005, date:"2005", era:6, cat:["internet","social"],
  title:"WoredaNet: Wiring the Ethiopian State",
  wiki:"Internet in Ethiopia", gallery:["VSAT","E-government"],
  summary:"Ethiopia deploys WoredaNet, a satellite (VSAT) and fibre grid linking remote district administrations directly to the central government for video conferencing, e-government, and the delivery of services across one of Africa's largest and least-connected countries.",
  importance:"WoredaNet shows the network built first as an instrument of the state rather than the citizen: its purpose was to bind the districts to the center, projecting administrative reach across difficult terrain via satellite. Routed through the state telecom monopoly, the same infrastructure that delivered services also concentrated control of connectivity in government hands — a model that made nationwide internet shutdowns straightforward to execute. It is a clear case of how the architecture of a national network encodes a political choice about who the network is ultimately for.",
  impact:{
    government:"A satellite-and-fibre grid binds remote districts directly to the central state.",
    communications:"E-government and services reach across one of Africa's least-connected nations.",
    surveillance:"Connectivity concentrated in state hands makes nationwide shutdowns simple to execute." },
  causes:["webpublic"], effects:["nigeriatwitterban"] },

{ id:"orkutbrazil", year:2006, date:"2004–2008", era:6, cat:["internet","social"],
  title:"Orkut and the Localization of Social Media",
  wiki:"Orkut", gallery:["Social networking service","Internet in Brazil"],
  summary:"Google's Orkut, a global also-ran elsewhere, becomes the dominant social network in Brazil — so thoroughly that it was reshaped by Brazilian users into a distinctly local cultural space, demonstrating that even a single worldwide platform fragments along language and national lines.",
  importance:"Orkut's Brazilian dominance is an early, vivid lesson that 'global' platforms are never culturally uniform: the same software became something specifically Brazilian in tone, slang, and use, while withering in the United States. It foreshadowed the pattern by which national audiences capture and remake imported platforms — VKontakte in Russia, Mixi in Japan, Orkut in Brazil and India — and it showed Silicon Valley that local network effects and language could decide a platform's fate more than its features. The map of social media was never flat.",
  impact:{
    society:"A 'global' platform becomes a distinctly Brazilian cultural space, fragmenting by nation.",
    communications:"Local language and network effects decide a platform's fate more than its features.",
    technology:"The myth of a culturally uniform global platform is dispelled early." },
  causes:["webpublic"], effects:["tiktokseasia"] },

{ id:"mpesa", year:2007, date:"2007", era:6, cat:["internet","radio"],
  title:"M-Pesa: Banking by SMS",
  wiki:"M-Pesa", gallery:["Safaricom","Mobile payment","Financial inclusion"],
  summary:"Safaricom launches M-Pesa in Kenya, letting people store and send money over plain SMS on basic feature phones — building, in a country with few bank branches, a mass mobile-money system that bypasses brick-and-mortar banking entirely.",
  importance:"M-Pesa is the global South's great leapfrog: a nation that lacked banking infrastructure skipped it altogether, turning the cellphone into a wallet and bringing tens of millions into the financial system over a network as simple as text messages. It proved that the most consequential internet-era innovations need not come from Silicon Valley or require smartphones, and it inverted the usual direction of technology transfer — a Kenyan model studied and copied across Africa, South Asia, and beyond. Connectivity, not bank branches, became the path to financial inclusion.",
  impact:{
    communications:"Money moves over plain SMS, turning the basic phone into a bank for millions.",
    society:"A nation leapfrogs brick-and-mortar banking into mobile money via financial inclusion.",
    technology:"A global-South innovation is studied and copied worldwide, inverting technology transfer." },
  causes:["koreakii"], effects:["batx"] },

{ id:"batx", year:2007, date:"2007", era:6, cat:["internet","social"],
  title:"The Great Firewall Hardens and BATX Rises",
  wiki:"Great Firewall", gallery:["Baidu","Tencent","Internet censorship in China"],
  summary:"As China hardens the Golden Shield Project into a comprehensive Great Firewall, blocking foreign platforms, it creates a sealed domestic market in which a parallel ecosystem of national champions — Baidu, Alibaba, Tencent, and later Xiaomi, the 'BATX' — grows to fill the space their walled-out rivals cannot.",
  importance:"The Great Firewall was not only censorship but industrial policy: by walling out Google, Facebook, and the rest, China cleared a protected market in which homegrown giants could capture a billion users and mature into world-class firms. The result is the clearest existing alternative to the American internet — a second, sovereign digital sphere with its own search, social, payments, and super-apps, tightly bound to the state. BATX is what enclosure built, and it stands as both a model and a warning for every other nation weighing digital sovereignty against the open web.",
  impact:{
    government:"Censorship doubles as industrial policy, clearing a market for national champions.",
    communications:"A second, sovereign digital sphere with its own search, social, and payments matures.",
    society:"China's walled internet becomes the world's leading alternative to the American one." },
  causes:["greatfirewall","alibaba","mpesa"], effects:["sovereigninternet2019","tiktokseasia"] },

{ id:"moscow2011", year:2011, date:"2011", era:6, cat:["internet","law"],
  title:"Moscow 2011 and the Birth of Russia's Sovereign Internet",
  wiki:"2011–2013 Russian protests", gallery:["Bolotnaya Square case","RuNet"],
  summary:"Massive anti-government rallies in Moscow, organized partly online after disputed elections, alarm the Kremlin about the open web's power to mobilize — becoming the historical catalyst for Russia's decade-long drive to build a controllable, sovereign 'RuNet' that the state can monitor and, if needed, cut off.",
  importance:"The 2011–12 protests were Russia's Arab Spring scare: the spectacle of social media summoning tens of thousands into the streets convinced the Kremlin that an uncontrolled internet was a regime threat. Everything that followed — blocklists, data-localization laws, pressure on platforms, and ultimately the 2019 'sovereign internet' law to wall off and control RuNet — descends from that moment. It is a textbook case of how a single episode of networked protest can flip a state's posture from tolerance to a long, deliberate project of digital enclosure.",
  impact:{
    government:"Networked protest convinces the Kremlin to build a controllable, sovereign internet.",
    communications:"Russia begins a decade-long project to wall off, monitor, and throttle RuNet.",
    surveillance:"Data-localization and blocking laws follow, encoding state control into the network." },
  causes:["arabspring"], effects:["sovereigninternet2019","marcocivil2014"] },

// ===== V. THE ALGORITHMIC STATE =====
{ id:"marcocivil2014", year:2014, date:"2014", era:7, cat:["internet","law"],
  title:"Brazil's Marco Civil da Internet",
  wiki:"Marco Civil da Internet", gallery:["Net neutrality","Edward Snowden"],
  summary:"Spurred by the 2013 Snowden revelations of U.S. espionage on Brazilian communications — including President Rousseff's own — Brazil passes the Marco Civil da Internet, a landmark 'digital bill of rights' enshrining net neutrality, privacy, and freedom of expression as principles of the network.",
  importance:"Marco Civil was the constructive answer to surveillance: rather than merely protest U.S. spying, Brazil legislated a rights-based framework for the internet, written through an open, participatory process that became a global model for democratic internet governance. It enshrined net neutrality and data protection years before many wealthier nations, and positioned Brazil as a leader of the view that the network should be governed by enforceable user rights, not left to platforms or great powers. It is the global South writing rules for the internet rather than receiving them.",
  impact:{
    law:"A rights-based 'digital bill of rights' enshrines net neutrality, privacy, and free expression.",
    government:"Brazil answers surveillance with participatory, democratic internet governance.",
    society:"The global South sets internet-governance norms rather than merely inheriting them." },
  causes:["snowden","rnp","moscow2011"], effects:["lgpd"] },

{ id:"freebasics", year:2016, date:"2015–2016", era:7, cat:["internet","law","social"],
  title:"India Blocks Free Basics",
  wiki:"Net neutrality in India", gallery:["Internet.org","Telecom Regulatory Authority of India","Zero-rating"],
  summary:"India's telecom regulator, TRAI, blocks Facebook's Free Basics — a 'zero-rated' app offering free access to a walled set of services chosen by Facebook — ruling that differential pricing of data violates net neutrality, a landmark stand against what critics called digital neocolonialism.",
  importance:"Free Basics offered the poor 'free internet' that was really free access to Facebook and its partners, and India's rejection of it established a powerful principle: that bringing people online must not mean handing a foreign platform the role of gatekeeper to the whole network. The mass public campaign behind the ban, and TRAI's ruling, made India a global reference point for net-neutrality enforcement in the developing world and reframed zero-rating as a sovereignty issue. It was a decisive answer to the idea that connectivity and corporate capture must come bundled.",
  impact:{
    law:"Differential data pricing is banned as a net-neutrality violation, blocking a walled 'free internet.'",
    government:"A developing nation refuses to let a foreign platform become gatekeeper to the network.",
    society:"Zero-rating is reframed as digital neocolonialism and rejected on sovereignty grounds." },
  causes:["indiaitact2000","indianetneutrality"], effects:["lgpd"] },

{ id:"lgpd", year:2020, date:"2018–2020", era:7, cat:["internet","law"],
  title:"GDPR's Global Echo: LGPD and POPIA",
  wiki:"General Data Protection Regulation", gallery:["Lei Geral de Proteção de Dados","Protection of Personal Information Act, 2013"],
  summary:"The EU's GDPR (2018) ripples outward: Brazil models its Lei Geral de Proteção de Dados (LGPD) directly on the European framework, while South Africa's POPIA — signed in 2013, before GDPR existed — shares the same older European data-protection lineage rather than deriving from GDPR itself.",
  importance:"GDPR became the world's de facto privacy standard through the 'Brussels effect': to trade with Europe, the rest of the world adopted European-style rules, and Brazil's LGPD is a near-direct descendant. The story is often overstated — South Africa's POPIA predates GDPR and descends from the same 1990s European tradition, not from GDPR — but the larger truth holds: Europe, lacking the platforms, exported the regulation instead, and much of the global South built its privacy regimes on a European template. The EU writes the rules that American firms and other nations' laws must answer to.",
  impact:{
    law:"GDPR becomes a de facto global standard, copied directly by Brazil's LGPD.",
    government:"The 'Brussels effect' exports European privacy rules across the global South.",
    society:"Privacy regimes worldwide are built on a European template Europe could not match in platforms." },
  causes:["gdpr","marcocivil2014","freebasics"], effects:["aigovernancepillars"] },

{ id:"tiktokseasia", year:2020, date:"2020", era:7, cat:["internet","social"],
  title:"TikTok and the Shift of Algorithmic Power",
  wiki:"TikTok", gallery:["ByteDance","Recommender system"],
  summary:"ByteDance's TikTok achieves dominance across Southeast Asian and global mobile markets, marking the first time a Chinese-built platform, powered by a uniquely effective recommendation algorithm, displaces Silicon Valley at the center of a generation's attention.",
  importance:"TikTok shifted the locus of algorithmic recommendation power away from the American giants for the first time: a Chinese company's feed became the model that Instagram, YouTube, and the rest scrambled to copy. Its rise meant that the system shaping what billions of people watch — and the data trail they leave — was no longer purely a Silicon Valley product, which is precisely why it became the focal point of bans, forced-sale demands, and sovereignty panics from Washington to Delhi to Jakarta. The platform era's center of gravity had moved, and states noticed.",
  impact:{
    society:"A Chinese platform's algorithm captures a generation's attention worldwide.",
    communications:"The model for algorithmic recommendation shifts away from Silicon Valley for the first time.",
    government:"Control of the feed becomes a sovereignty issue, triggering bans and forced-sale demands." },
  causes:["batx","orkutbrazil"], effects:["tiktokban","indonesiatiktokshop"] },

{ id:"nigeriatwitterban", year:2021, date:"2021–2022", era:7, cat:["internet","law","social"],
  title:"Nigeria Bans Twitter",
  wiki:"2021 Twitter ban in Nigeria", gallery:["End SARS","Muhammadu Buhari"],
  summary:"In the wake of the #EndSARS protests against police abuse, and after Twitter deleted a tweet by President Buhari, the Nigerian government imposes a seven-month nationwide suspension of Twitter (June 2021–January 2022) — a high-profile instance of the expanding wave of state platform bans across Africa.",
  importance:"Nigeria's ban illustrated how readily states now reach for the platform shutdown as a tool of control: the proximate trigger was Twitter deleting the president's own post, but the deeper climate was a government rattled by the #EndSARS movement's networked organizing months earlier. For seven months Africa's most populous nation was cut off from a major platform, businesses and activists alike scrambling to VPNs. It is one node in a broadening pattern — Ethiopia, India, and others — of governments treating access to global platforms as a tap they can turn off at will.",
  impact:{
    government:"A major state suspends a global platform for seven months as an instrument of control.",
    communications:"Africa's most populous nation is cut off from a major platform; users flee to VPNs.",
    society:"The platform shutdown joins the standard toolkit of state power over the network." },
  causes:["woredanet","arabspring"], effects:["indonesiatiktokshop"] },

{ id:"chatgptitalyban", year:2023, date:"March 2023", era:7, cat:["internet","law","computing"],
  title:"Italy Temporarily Bans ChatGPT",
  wiki:"Garante per la protezione dei dati personali", gallery:["ChatGPT","General Data Protection Regulation"],
  summary:"Italy's data-protection authority, the Garante, temporarily bans ChatGPT in March 2023 over GDPR concerns — the lawful basis for processing personal data, the absence of age verification, and the accuracy of information about individuals — the first time a Western democracy halted a frontier AI system.",
  importance:"The Garante's action was the opening shot in applying existing data-protection law to generative AI, and it forced OpenAI to add age checks, disclosures, and user controls before resuming service in Italy. It demonstrated that Europe's privacy regime gave regulators real leverage over AI systems built largely without regard to whose personal data they ingested, and it previewed the central legal question of the era: what happens when a model trained on the open web meets laws written to govern personal data. The ban was about GDPR compliance, not training languages — and it showed the rules already on the books had teeth.",
  impact:{
    law:"Existing privacy law is wielded against a frontier AI system for the first time in the West.",
    computing:"OpenAI must add age verification, disclosures, and controls to resume service.",
    government:"Europe's data-protection regime proves it has leverage over generative AI." },
  causes:["gdpr","chatgpt"], effects:["aigovernancepillars"] },

{ id:"indonesiatiktokshop", year:2023, date:"2023", era:7, cat:["internet","law","social"],
  title:"Indonesia Breaks Up TikTok Shop",
  wiki:"TikTok", gallery:["E-commerce","Social commerce"],
  summary:"Indonesia bans e-commerce transactions inside social-media apps in 2023, deliberately severing TikTok Shop's vertical integration of feed-and-checkout — a move framed as protecting the country's millions of small brick-and-mortar vendors from a foreign platform's all-in-one dominance.",
  importance:"Indonesia's intervention is a sharp case of a state regulating platform architecture itself, not just its content: by forbidding social apps to host shopping, it forced TikTok to separate its addictive feed from its marketplace, blunting the seamless social-commerce model that was hollowing out local markets. It reflects a global-South assertion that the structure of a foreign platform's business can be a legitimate target of sovereign economic policy, protecting domestic vendors and homegrown commerce against vertically integrated giants. The feed and the checkout, the state ruled, must not be one.",
  impact:{
    law:"A state bans in-app commerce, forcibly separating a platform's feed from its marketplace.",
    government:"Platform architecture itself becomes a target of sovereign economic policy.",
    society:"Local vendors are shielded from a foreign platform's vertically integrated dominance." },
  causes:["tiktokseasia","nigeriatwitterban"], effects:["aigovernancepillars"] },

{ id:"aigovernancepillars", year:2025, date:"2024–2026", era:7, cat:["internet","law","computing","social"],
  title:"AI Governance Splits into Geopolitical Pillars",
  wiki:"Regulation of artificial intelligence", gallery:["Artificial Intelligence Act","Falcon (language model)"],
  summary:"AI governance fragments into rival geopolitical blocs: the EU enforces its comprehensive, risk-tiered AI Act; China mandates algorithmic transparency and content rules; and states like the UAE pursue sovereign capability, funding open-weight systems such as the Falcon large language models to avoid dependence on either pole.",
  importance:"By the mid-2020s the question was no longer whether AI would be governed but by whose rules, and the answer split the world: Brussels regulating by risk category, Beijing regulating by control and alignment to the state, Washington leaning on the market, and a tier of ambitious middle powers — the UAE, India, others — building sovereign models to avoid choosing a master. The UAE's release of Falcon as open-weight technology is emblematic, an attempt to buy strategic autonomy in intelligence itself. The splinternet, long visible in censorship and data law, now extends to the governance of intelligence — the oldest pattern in this atlas fracturing along the fault lines of a multipolar world.",
  impact:{
    law:"AI governance fragments into rival blocs — EU risk-tiering, Chinese control, US market-led.",
    government:"Middle powers fund sovereign open-weight models to avoid dependence on either pole.",
    computing:"The governance of intelligence itself splinters along geopolitical lines." },
  causes:["aiact","lgpd","chatgptitalyban","indonesiatiktokshop"], effects:[] },

{ id:"marcocivil", year:2014, date:"April 2014", era:7, cat:["internet","law"],
  title:"Brazil's Marco Civil da Internet",
  wiki:"Marco Civil da Internet", gallery:["Dilma Rousseff"],
  summary:"Spurred by Snowden's revelation that the U.S. had spied on Brazilian communications — including President Dilma Rousseff's own phone — Brazil passes the Marco Civil, a landmark 'digital bill of rights' enshrining net neutrality, privacy, and freedom of expression as founding principles of the network.",
  importance:"The Marco Civil was the global South's most influential answer to the surveillance age: rather than fence off its internet, Brazil wrote openness, privacy, and net neutrality into law as civil rights, a rights-based model held up against both the American market approach and authoritarian control. That it grew directly out of Snowden's disclosures — and out of the indignity of a president learning her phone had been tapped — made it a statement of digital sovereignty as much as a statute. It proved a democracy could respond to mass surveillance by strengthening rights rather than borders.",
  impact:{
    law:"A 'digital bill of rights' enshrines net neutrality, privacy, and free expression.",
    government:"Snowden's spying on Brazil prompts a rights-based, not walled-off, response.",
    society:"A major democracy answers mass surveillance by codifying digital civil rights." },
  causes:["snowden"], effects:["lgpd","splinternet"] }

);
