// SUPPLEMENT — the internet's own infrastructure and governance, from packet switching
// to the splinternet. The architecture was built by engineers around values — open
// protocols, decentralized routing, no single point of control — embedded in TCP/IP,
// DNS, and the Web before anyone thought to regulate them. Every battle since (net
// neutrality, Section 230, ICANN, SOPA, the splinternet) is a fight over whether those
// architectural values survive contact with commercial and political power. Cross-links
// the existing arpanet, firstspam, morrisworm, wwwproposal, webpublic, mosaic, napster,
// dotcom, patriotact, greatfirewall, snowden, prism, gdpr, dma, dsa, section230,
// gonzalez, netneutrality cards. Round one: data only — images to follow.
window.ATLAS_EVENTS.push(

{ id:"packetswitching", year:1962, date:"1958–1962", era:5, cat:"internet",
  title:"Packet Switching",
  wiki:"Packet switching",
  summary:"Responding to Sputnik, the U.S. creates ARPA and asks whether a network could survive a nuclear strike on any node; Paul Baran's answer — breaking data into packets that each find their own route — becomes the foundational architecture of the internet.",
  importance:"Baran's insight at RAND was that a network with no central control point has no single point of failure: chop a message into packets, let each find its own path, and reassemble them at the destination, and the network routes around damage automatically. It was conceived for survivability under nuclear attack, but its deeper consequence was political as much as technical — a decentralized architecture with no center to seize or censor. Every value the later governance battles fight over is already latent in this 1962 design.",
  impact:{
    technology:"Decentralized, route-around-damage packet routing is invented.",
    communications:"The architectural principle of the entire internet is established.",
    power:"A network with no center becomes the substrate of free communication — and a target for control." },
  effects:["email1971","tcpip","arpanet"] },

{ id:"email1971", year:1971, date:"1971", era:5, cat:"internet",
  title:"Email and the @ Sign",
  wiki:"Ray Tomlinson",
  summary:"Ray Tomlinson sends the first email between two networked computers, choosing the '@' symbol to separate user from machine — a convention still in use more than half a century later.",
  importance:"Almost as soon as machines were networked, their users wanted to write to each other, and Tomlinson's 1971 hack made it possible across the ARPANET — picking the otherwise-unused '@' to mean 'user at host,' a choice that became one of the most recognizable symbols on earth. Email was the network's first killer application, the proof that the value of connecting computers lay as much in connecting people. The social internet begins here, decades before the social network.",
  impact:{
    communications:"Person-to-person messaging across a network becomes possible.",
    technology:"The '@' addressing convention is established and never replaced.",
    society:"The network's primary value reveals itself as human communication, not computation." },
  causes:["packetswitching","arpanet"], effects:["usenet","firstspam"] },

{ id:"tcpip", year:1974, date:"1974", era:5, cat:"internet",
  title:"TCP/IP: The Language of the Internet",
  wiki:"Internet protocol suite",
  summary:"Vinton Cerf and Bob Kahn publish the protocol that lets any computer talk to any other — regardless of manufacturer, operating system, or physical connection — the conceptual foundation of the open, interoperable internet.",
  importance:"TCP/IP solved the problem of internetworking: not one network but a network of networks, any of them able to interconnect if they spoke a common protocol that made no assumptions about the hardware beneath. Its openness was a deliberate design value — no central authority, no proprietary gatekeeper, any machine welcome that followed the rules. That principle of universal interoperability is the technical embodiment of the open internet, and the thing every later enclosure erodes.",
  impact:{
    communications:"A universal protocol lets any computer interconnect with any other.",
    technology:"The network-of-networks architecture of the internet is defined.",
    power:"Openness and interoperability are written into the internet's foundational layer." },
  causes:["packetswitching"], effects:["flagday1983","dns"] },

{ id:"usenet", year:1979, date:"1979", era:5, cat:"internet",
  title:"Usenet",
  wiki:"Usenet",
  summary:"Usenet establishes distributed discussion boards organized by topic — the first large-scale public online community, decentralized with no central server or owner.",
  importance:"Usenet let anyone with a connection post to topical newsgroups that propagated from machine to machine across the network, with no central host to control them — a distributed public square years before the web. It incubated much of internet culture, from FAQs to flame wars to the norms of online discourse, and it was the natural home of the network's first conflicts over spam and speech. Its decentralized design made it both ungovernable and uncensorable, the early internet's character in miniature.",
  impact:{
    communications:"The first large-scale, decentralized public online community forms.",
    society:"Internet culture and the norms of online discussion are incubated.",
    power:"A discussion network with no central host proves hard to govern or silence." },
  causes:["email1971"], effects:["firstspam"] },

{ id:"flagday1983", year:1983, date:"January 1, 1983", era:5, cat:"internet",
  title:"Flag Day: The Internet Is Born",
  wiki:"History of the Internet",
  summary:"ARPANET completes its switch to TCP/IP — 'flag day,' the birthday most historians accept as the internet's founding. Every connected machine now speaks the same language, and a military experiment becomes the basis of a global civilian medium.",
  importance:"On January 1, 1983, the ARPANET abandoned its old protocols and adopted TCP/IP wholesale, an all-at-once cutover that unified every connected machine under one common language. It is the moment the internet, as an interoperable network of networks, truly began — the military experiment crossing over into the foundation of a worldwide civilian communications system. From flag day the network's growth became a matter of adoption, not invention.",
  impact:{
    communications:"All connected machines unify under a single common protocol.",
    technology:"The interoperable internet, as we know it, formally begins.",
    society:"A military project becomes the basis of a global civilian medium." },
  causes:["tcpip"], effects:["dns","nsfnet"] },

{ id:"dns", year:1983, date:"1983", era:5, cat:"internet",
  title:"The Domain Name System",
  wiki:"Domain Name System",
  summary:"DNS gives the internet human-readable names — .com, .edu, .gov, .org — in place of numeric addresses; researcher Jon Postel runs the entire naming system of the internet, for years, essentially as a trusted volunteer.",
  importance:"DNS made the internet usable by people, mapping memorable names onto the numbers machines actually route to, and its hierarchical structure (.com, .org, and the rest) still organizes the web today. Remarkably, the whole naming system was administered for years by one trusted researcher, Jon Postel, on the strength of community consensus rather than any legal authority — the early internet governed by reputation, not law. The eventual transfer of that quiet, volunteer function into a contested global institution is one of the central stories of internet governance.",
  impact:{
    communications:"The internet gains human-readable names atop its numeric addresses.",
    power:"A critical global function is run on trust and consensus, not legal authority.",
    law:"Control of the naming system becomes a governance question for decades to come." },
  causes:["tcpip","flagday1983"], effects:["icann","icanntransition"] },

{ id:"nsfnet", year:1986, date:"1986", era:5, cat:"internet",
  title:"NSFNET: A Public Backbone",
  wiki:"National Science Foundation Network",
  summary:"The National Science Foundation builds NSFNET, a fast public backbone connecting universities and supercomputer centers — the de facto U.S. internet, growing from ~2,000 computers to over 2 million by 1993. Its Acceptable Use Policy bans commercial traffic: the internet is a research tool, not a marketplace.",
  importance:"NSFNET, funded with public money, became the backbone of the American internet and the infrastructure on which commercial use would later be built — even as its Acceptable Use Policy explicitly forbade commercial traffic, defining the early internet as a public research commons. That restriction made the eventual opening to commerce a dramatic policy reversal, and it frames a recurring tension: a network built as a public good, handed to private markets. The internet's mass scale was incubated at public expense before being privatized almost overnight.",
  impact:{
    communications:"A public backbone scales the internet into the millions of machines.",
    power:"Core internet infrastructure is built with public money as a research commons.",
    law:"A no-commercial-traffic rule defines, then later inverts, the internet's purpose." },
  causes:["flagday1983"], effects:["nsfnetprivatized"] },

{ id:"nsfnetprivatized", year:1995, date:"1995", era:6, cat:"internet",
  title:"The Internet Is Privatized",
  wiki:"History of the Internet",
  summary:"NSFNET is decommissioned and Congress lifts the last restrictions on commercial use; the internet is handed entirely to commercial ISPs. The same year, Amazon and eBay launch — the public-goods internet becomes a private market almost overnight.",
  importance:"In 1995 the publicly funded backbone was shut down and the network it had nurtured was turned over wholesale to commercial providers, with the final bans on commercial traffic removed — a public good built over decades converted into a private marketplace in a single policy stroke. Amazon and eBay launched into the opening, and the commercial internet era began. It is the pivotal handoff of the whole story: infrastructure created at public expense, privatized at the threshold of its explosive value.",
  impact:{
    power:"The publicly built internet is transferred wholesale to private markets.",
    communications:"Commercial ISPs inherit the backbone and the commercial era begins.",
    law:"The last restrictions on commercial internet use are removed by Congress." },
  causes:["nsfnet","webpublic"], effects:["icann","renoaclu"] },

{ id:"renoaclu", year:1997, date:"1997", era:6, cat:"internet",
  title:"Reno v. ACLU: The Internet Is Not Television",
  wiki:"Reno v. American Civil Liberties Union",
  summary:"The Supreme Court strikes down the Communications Decency Act's speech provisions, holding the internet is not like broadcast — there is no spectrum-scarcity rationale for content regulation — and granting internet speech the highest First Amendment protection. Section 230 survives intact.",
  importance:"In its first major internet case, the Court refused to treat the net like television: with no scarce, publicly owned spectrum to justify content rules, online speech earned the full protection of the First Amendment, and the CDA's indecency provisions fell. The ruling settled that the internet would be the most speech-protective medium in American law — and, by leaving Section 230 standing, preserved the immunity that would shape every platform to come. It is the constitutional charter of the open internet, and the mirror image of the broadcast scarcity doctrine of Red Lion.",
  impact:{
    law:"Internet speech is granted the highest level of First Amendment protection.",
    communications:"The broadcast scarcity rationale is held not to apply online.",
    power:"The most speech-protective legal regime of any medium is established for the net." },
  causes:["nsfnetprivatized","section230"], effects:["sopa","fostasesta"] },

{ id:"icann", year:1998, date:"1998", era:6, cat:"internet",
  title:"ICANN and U.S. Control of the Net",
  wiki:"ICANN",
  summary:"ICANN is created under a U.S. Department of Commerce contract to manage the global Domain Name System; the U.S. government retains ultimate authority over DNS — making American control of the internet's naming system one of the most contested governance questions for two decades.",
  importance:"As the internet went global and commercial, the informal, volunteer administration of DNS was formalized into ICANN — a private nonprofit, but one operating under a U.S. government contract that left ultimate authority over the world's naming system in American hands. For a global network increasingly central to every nation, that single-country control became a standing grievance, especially among developing states. The struggle over who governs DNS would simmer for two decades before the U.S. finally let go.",
  impact:{
    law:"Global DNS governance is institutionalized under ultimate U.S. authority.",
    power:"One nation's control of the internet's naming system becomes a global grievance.",
    communications:"The naming layer of a worldwide network is administered from one country." },
  causes:["dns","nsfnetprivatized"], effects:["icanntransition","splinternet"] },

{ id:"dmca", year:1998, date:"1998", era:6, cat:"internet",
  title:"The Digital Millennium Copyright Act",
  wiki:"Digital Millennium Copyright Act",
  summary:"The DMCA criminalizes circumventing digital copy protection and creates a 'safe harbor' shielding platforms that remove infringing content when notified — shaping the relationship between copyright holders and internet platforms for decades.",
  importance:"The DMCA struck the bargain that governs online content to this day: platforms are not liable for users' copyright infringement so long as they take it down on notice, while breaking digital locks becomes a crime in itself. Its notice-and-takedown safe harbor enabled YouTube and the user-upload economy to exist, even as its anti-circumvention rules drew lasting criticism for restricting tinkering, research, and fair use. Alongside Section 230, it is one of the two legal pillars on which the entire platform internet stands.",
  impact:{
    law:"Notice-and-takedown safe harbor and an anti-circumvention crime are established.",
    communications:"The user-upload economy becomes legally viable under copyright law.",
    power:"Copyright holders and platforms strike the bargain that governs online content." },
  causes:["renoaclu"], effects:["napster","sopa"] },

{ id:"canspam", year:2003, date:"2003", era:6, cat:"internet",
  title:"CAN-SPAM",
  wiki:"CAN-SPAM Act of 2003",
  summary:"The first federal law against email spam establishes opt-out requirements for commercial email — and proves largely ineffective: spam accounts for over 80% of all email by 2007.",
  importance:"A quarter-century after the first spam message drew outrage on the ARPANET, Congress finally legislated against it — and the CAN-SPAM Act, with its opt-out rather than opt-in approach and weak enforcement, did little to stem the tide, as spam swelled past 80% of all email. It became a case study in the limits of law against a borderless, near-zero-cost behavior, ultimately curbed far more by filtering technology than by statute. The episode foreshadowed how poorly territorial law would fare against the frictionless dynamics of the network.",
  impact:{
    law:"The first federal anti-spam statute sets opt-out rules for commercial email.",
    communications:"Spam nonetheless balloons past 80% of email, curbed mainly by filters.",
    power:"Territorial law is shown to be feeble against borderless, zero-cost behavior." },
  causes:["firstspam"], effects:["splinternet"] },

{ id:"netneutralitywars", year:2010, date:"2010–2025", era:7, cat:"internet",
  title:"The Net Neutrality Wars",
  wiki:"Net neutrality in the United States",
  summary:"The most legally contested question in internet history: must ISPs treat all traffic equally? The FCC's answer flips with each administration — Title I rules struck down (2014), strong Title II rules imposed (2015), repealed (2017), reinstated (2024), struck down again (2025) after the end of Chevron deference.",
  importance:"Net neutrality's simple principle — no blocking, throttling, or paid prioritization — collided with a hard legal question: is broadband a lightly regulated 'information service' or a common-carrier 'telecommunications service'? The answer determined whether the FCC could regulate it at all, and the agency reversed itself repeatedly: courts voided its weak 2010 rules, Tom Wheeler's FCC imposed strong Title II rules in 2015 (after 4 million public comments and a rare presidential intervention), Ajit Pai repealed them in 2017, Rosenworcel restored them in 2024, and a court struck them down again in 2025, citing the Supreme Court's end of Chevron deference. Net neutrality has now died three times — the starkest example of policy whiplash where the law cannot settle who controls the pipes.",
  impact:{
    law:"Whether ISPs must treat all traffic equally swings with every administration.",
    communications:"The rules against blocking, throttling, and paid prioritization repeatedly rise and fall.",
    power:"The unresolved question of who controls the pipes defines a decade of internet law." },
  causes:["nsfnetprivatized"], effects:["netneutrality","splinternet"] },

{ id:"sopa", year:2012, date:"January 2012", era:7, cat:"internet",
  title:"SOPA and the Internet Blackout",
  wiki:"Stop Online Piracy Act",
  summary:"Facing SOPA and PIPA — entertainment-backed bills that would let accused sites be blocked at the DNS level — Wikipedia, Google, Reddit, and 100,000+ sites stage a coordinated blackout on January 18, 2012. Within 48 hours the bills collapse as co-sponsors flee.",
  importance:"SOPA and PIPA had broad bipartisan support and years of Hollywood lobbying behind them when the internet itself revolted: a one-day blackout darkened Wikipedia and thousands of sites, flooding Congress with millions of calls and messages, and within two days the bills were dead — the first serious legislative defeat for copyright interests in thirty years. It proved that internet users could constitute a political constituency capable of overriding entrenched lobbying power. But it happened only once, when sufficiently mobilized — a power exercised, so far, roughly once a generation.",
  impact:{
    power:"Internet users mobilize to kill major legislation, overriding entrenched lobbying.",
    law:"DNS-blocking anti-piracy bills are defeated and never revived.",
    society:"The internet demonstrates itself as a political constituency for the first time." },
  causes:["dmca","renoaclu"], effects:["splinternet"] },

{ id:"icanntransition", year:2016, date:"October 1, 2016", era:7, cat:"internet",
  title:"The U.S. Lets Go of DNS",
  wiki:"Internet Assigned Numbers Authority",
  summary:"The U.S. Department of Commerce relinquishes its oversight of IANA — the function managing DNS and IP-address allocation — transferring it to a global multi-stakeholder community after 18 years of de facto U.S. control. The Snowden revelations had made the change politically unavoidable.",
  importance:"For eighteen years the United States held ultimate authority over the internet's naming and numbering, and the Snowden disclosures of U.S. mass surveillance turned a long-simmering grievance into an untenable position — why should one nation control the infrastructure it was caught using to spy on the world? The 2016 IANA transition moved that authority to a multi-stakeholder community, the most contested governance decision in internet history. Critics argued the new structure still over-represented U.S. industry, but the principle of single-nation control was formally surrendered.",
  impact:{
    law:"Ultimate authority over DNS passes from the U.S. to a global multi-stakeholder body.",
    power:"Snowden's revelations make single-nation control of the internet untenable.",
    communications:"The internet's naming system is, formally, internationalized." },
  causes:["icann","dns","snowden"], effects:["splinternet"] },

{ id:"fostasesta", year:2018, date:"2018", era:7, cat:"internet",
  title:"FOSTA-SESTA: The First Crack in Section 230",
  wiki:"FOSTA-SESTA",
  summary:"FOSTA-SESTA amends Section 230 to create platform liability for facilitating sex trafficking — the first statutory carve-out from the immunity, establishing that Congress can restrict platform protection for specific categories of harm.",
  importance:"For over two decades Section 230's immunity had been effectively absolute; FOSTA-SESTA broke the seal, holding platforms liable where they facilitated sex trafficking and proving that Congress could carve exceptions into the law that built the platform internet. Its real-world effects were contested — sex workers and civil-liberties groups argued it endangered the vulnerable by pushing them off safer platforms — but its precedent was clear. Every later effort to reform Section 230, from both left and right, builds on the breach FOSTA-SESTA opened.",
  impact:{
    law:"The first statutory exception to Section 230 immunity is enacted.",
    communications:"Platforms gain liability for a specific category of user content.",
    power:"Congress proves it can carve into the foundational law of the platform internet." },
  causes:["renoaclu","section230"], effects:["gonzalez"] },

{ id:"splinternet", year:2018, date:"2016–2026", era:7, cat:"internet",
  title:"The Splinternet",
  wiki:"Splinternet",
  summary:"The dream of one global internet ends in practice: China's Great Firewall runs a separate, surveilled internet on its own platforms; Russia routes traffic domestically; India mandates data localization; the EU's GDPR/DSA/DMA form a distinct governance zone. What remains is interconnected but differently-governed national networks.",
  importance:"The internet's founding promise was a single, open, global network — and by the mid-2020s that promise was, as a practical matter, dead. China had built an entirely separate internet behind the Great Firewall, exported its model to dozens of authoritarian states, and Russia, India, and the EU each carved out their own governed zones through localization mandates and binding regulation. What exists now is a 'splinternet': networks that interconnect but answer to incompatible rules, surveillance regimes, and values. Whether the result is still 'the internet' in any meaningful sense — open, interoperable, decentralized — is the defining question of the moment, sharpened further as AI-generated content strains a framework built for human speech in the 1990s.",
  impact:{
    power:"The single global internet fractures into rival, differently-governed national networks.",
    law:"Incompatible national regimes — surveillance, localization, regulation — replace one open net.",
    communications:"Interoperability survives technically while the unified internet ends in practice." },
  causes:["greatfirewall","icanntransition","gdpr","dsa","dma","canspam","netneutralitywars","sopa"], effects:[] }

);
