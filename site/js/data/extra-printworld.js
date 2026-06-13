// SUPPLEMENT — the global press: newspaper houses, wire services, and press law across
// the UK, France, the German-speaking world, Italy & Spain, Russia/USSR, Asia, Latin
// America, the Middle East & Africa. Each is its own exhibit — founding, political/
// regulatory role, and modern fate. Cross-links the existing frenchdeclaration, udhr,
// covenants1966, licensinglapse cards. cat:"print" (press-law entries also "law").
// Round one: data only — images to follow.
window.ATLAS_EVENTS.push(

// ===== UNITED KINGDOM & IRELAND =====
{ id:"londongazette", year:1665, date:"1665", era:2, cat:"print",
  title:"The London Gazette",
  wiki:"The London Gazette",
  summary:"Founded 1665 as the Oxford Gazette, the official journal of the British state — and one of the oldest continuously published periodicals in the world, still appearing, now online-first.",
  importance:"The Gazette is the voice of the state in print, the official record of appointments, honours, bankruptcies, and proclamations for over three centuries. It embodies the original relationship between print and authority: the press as the government's own instrument before it became its adversary.",
  impact:{
    print:"The state's official journal becomes one of the world's oldest periodicals.",
    power:"Print begins, here, as the instrument of government rather than its check." } },

{ id:"dailycourant", year:1702, date:"1702", era:2, cat:"print",
  title:"The Daily Courant",
  wiki:"The Daily Courant",
  summary:"Launched in 1702, the first English-language daily newspaper — a single sheet of foreign news with no comment, on the premise that readers could form their own opinions. It ceased in 1735.",
  importance:"The Daily Courant invented the daily newspaper in English, and its founding promise — to report and let readers judge — anticipated the objectivity ideal by two centuries. It appeared in the brief window after the Licensing Act lapsed in 1695, when English printing was suddenly free of pre-publication control.",
  impact:{
    print:"The first English daily newspaper is established.",
    society:"Daily news for a general readership begins in English." },
  causes:["licensinglapse"], effects:["stampact1712"] },

{ id:"stampact1712", year:1712, date:"1712", era:2, cat:["print","law"],
  title:"The Stamp Act and 'Taxes on Knowledge'",
  wiki:"Stamp Act 1712",
  summary:"Britain taxes newspapers, pamphlets, and advertisements — the start of the 'taxes on knowledge' that for 150 years deliberately raised the price of print to limit its reach among the poor. The duties are repealed only in the 1850s–60s (advertisement 1853, stamp 1855, paper 1861).",
  importance:"Where England had abandoned pre-publication licensing, the Stamp Act substituted economic censorship: tax the press until only the comfortable could afford it. The long campaign to repeal the 'taxes on knowledge' was a defining nineteenth-century fight for a free and affordable press, and a reminder that the state can throttle print through its price as effectively as through its content.",
  impact:{
    law:"Taxation replaces licensing as the state's tool against a cheap press.",
    print:"For 150 years, duties deliberately keep newspapers beyond the poor's reach.",
    power:"Economic censorship proves as effective as pre-publication control." },
  causes:["dailycourant"], effects:["pennypress"] },

{ id:"thetimesuk", year:1785, date:"1785", era:2, cat:"print",
  title:"The Times of London",
  wiki:"The Times",
  summary:"Founded 1785 (as the Daily Universal Register; renamed 1788), 'The Thunderer' became the world's most influential newspaper in the nineteenth century. Rupert Murdoch's News International acquires it in 1981 — the moment British press ownership and political alignment became explicitly entangled.",
  importance:"For a century The Times set the standard for the serious newspaper and a paper of record for the Empire. Murdoch's 1981 acquisition folded it into a global media empire whose proprietor wielded open political influence across continents, making The Times a flagship of the concentrated, politically engaged ownership that defines the modern British press.",
  impact:{
    print:"The nineteenth century's most influential newspaper is established.",
    power:"Murdoch's 1981 takeover fuses British press ownership with political power." } },

{ id:"observeruk", year:1791, date:"1791", era:2, cat:"print",
  title:"The Observer",
  wiki:"The Observer",
  summary:"Founded 1791, the world's oldest surviving Sunday newspaper; long part of Guardian Media Group, it is sold to the digital start-up Tortoise Media in 2024 — a storied title passing to a new-media owner.",
  importance:"The Observer pioneered the Sunday paper as a distinct form of weekend journalism and survived for over two centuries. Its 2024 sale out of the Guardian's stable to a venture-backed digital outlet marked the pressures even prestige titles face, and the blurring of old houses into the new digital-media economy.",
  impact:{
    print:"The world's oldest Sunday newspaper is founded.",
    power:"A 230-year title passes to a digital-native owner." } },

{ id:"guardian", year:1821, date:"1821", era:3, cat:"print",
  title:"The Guardian",
  wiki:"The Guardian",
  summary:"Founded 1821 as the Manchester Guardian; held since 1936 by the Scott Trust, a structure designed to insulate its editorial independence from commercial owners. It broke the Snowden NSA disclosures (2013) and the Cambridge Analytica story (2018), and runs a digital-first, reader-funded model.",
  importance:"The Guardian solved the ownership problem differently from every other major paper: the Scott Trust holds it to guarantee independence rather than profit, freeing it for the kind of adversarial reporting — Snowden, Cambridge Analytica — that defines accountability journalism. Its reader-contribution funding model is one of the few credible answers to the collapse of advertising.",
  impact:{
    print:"A trust ownership structure secures editorial independence from commercial pressure.",
    surveillance:"The paper breaks the Snowden and Cambridge Analytica revelations.",
    power:"Reader funding offers a model for journalism after advertising." },
  effects:["snowden","cambridgeanalytica"] },

{ id:"newsoftheworld", year:1843, date:"1843", era:3, cat:"print",
  title:"News of the World",
  wiki:"News of the World",
  summary:"Founded 1843, a mass-circulation Sunday tabloid; under Murdoch it became Britain's best-selling paper — until a phone-hacking scandal, in which its journalists illegally intercepted the voicemails of celebrities, politicians, and a murdered schoolgirl, forced its abrupt closure in July 2011.",
  importance:"The News of the World's destruction by its own criminality is the great modern scandal of the British press: industrialized phone hacking exposed how far a tabloid would go for stories, and how cozy press, police, and politicians had become. Its closure triggered the Leveson Inquiry and a national reckoning with tabloid power.",
  impact:{
    print:"Britain's best-selling paper is closed by its own phone-hacking scandal.",
    law:"The scandal triggers the Leveson Inquiry into press conduct.",
    power:"The cozy nexus of press, police, and politicians is exposed." },
  effects:["levesonipso"] },

{ id:"reuters", year:1851, date:"1851", era:3, cat:"print",
  title:"Reuters",
  wiki:"Reuters",
  summary:"Paul Julius Reuter founds his news agency in London in 1851, using the telegraph (and at first carrier pigeons) to move financial and general news across borders faster than rivals. It merges with Canada's Thomson Corporation in 2008 to form Thomson Reuters.",
  importance:"Reuters built global news into a business by being first with the facts that markets and governments needed, becoming one of the three great agencies that wired the nineteenth-century world. Its 2008 merger with Thomson married its newsgathering to financial-data terminals, reflecting how the modern wire's value lies as much in data for traders as in journalism for the public.",
  impact:{
    print:"A global news agency is built on the speed of the telegraph.",
    power:"News becomes a cross-border business serving markets and states.",
    communications:"Reuters helps wire the world's financial and political news." },
  causes:["telegraph"], effects:["thomsonreuters"] },

{ id:"telegraphuk", year:1855, date:"1855", era:3, cat:"print",
  title:"The Daily Telegraph",
  wiki:"The Daily Telegraph",
  summary:"Founded 1855; long a conservative broadsheet owned by the Barclay family. A 2023 sale process to RedBird IMI — backed by Abu Dhabi state capital — prompted new UK legislation in 2023–24 restricting foreign-state ownership of British newspapers, freezing the deal.",
  importance:"The Telegraph's contested sale forced Britain to confront a new question: whether a foreign government should be allowed to own a national newspaper. Parliament's swift move to bar foreign-state ownership was a rare instance of press-specific regulation in a country with no written constitution, treating control of the press as a matter of sovereignty.",
  impact:{
    print:"A national broadsheet's sale triggers a sovereignty fight over press ownership.",
    law:"The UK legislates to bar foreign-state ownership of newspapers.",
    power:"Who may own the press becomes a question of national security." } },

{ id:"ftimes", year:1888, date:"1888", era:4, cat:"print",
  title:"The Financial Times",
  wiki:"Financial Times",
  summary:"Founded 1888; the salmon-pink global business daily, owned by Pearson for decades, is sold to Japan's Nikkei for about £844M in 2015 — one of the era's notable cross-border media acquisitions.",
  importance:"The FT built authority in global business and finance into a subscription-driven franchise that weathered the digital transition better than most general papers, precisely because its specialized readers would pay. Its sale to Nikkei joined two of the world's leading financial papers and underlined that durable journalism now anchors itself to readers who must have it.",
  impact:{
    print:"A global business daily thrives on paying specialist readers.",
    power:"Cross-border ownership joins the world's leading financial papers." },
  effects:["nikkei"] },

{ id:"dailymail", year:1896, date:"1896", era:4, cat:"print",
  title:"The Daily Mail",
  wiki:"Daily Mail",
  summary:"Founded 1896 by Lord Northcliffe, the prototype of the modern popular tabloid — cheap, punchy, mass-circulation — and a template for populist press power. Its MailOnline becomes one of the most-read news websites in the world.",
  importance:"Northcliffe's Mail invented the mass popular daily in Britain, aimed at a new literate working and middle class and unembarrassed about its political clout. More than a century on, its successful conversion into a global digital-traffic giant (MailOnline) made it one of the few legacy papers to win the internet on scale, even as the medium hollowed out its peers.",
  impact:{
    print:"The modern popular tabloid is invented for a mass literate audience.",
    power:"Populist press power is templated by Northcliffe.",
    society:"MailOnline becomes one of the world's most-read news sites." } },

{ id:"dailymirror", year:1903, date:"1903", era:4, cat:"print",
  title:"The Daily Mirror / Reach plc",
  wiki:"Daily Mirror",
  summary:"Founded 1903; a mass-circulation, traditionally Labour-leaning tabloid. Its parent, now Reach plc, has become the UK's largest commercial publisher of national and regional titles by sheer count — consolidation as a survival strategy.",
  importance:"The Mirror was the great left-of-centre counterweight to the Mail and the Sun in Britain's fiercely partisan tabloid press. Its corporate parent's growth into Reach plc — amassing scores of national and local titles under one owner — shows the British answer to the advertising collapse: consolidate enough mastheads to survive on scale.",
  impact:{
    print:"A mass Labour-leaning tabloid anchors Britain's partisan press.",
    power:"Its parent consolidates into the UK's largest title-count publisher." } },

{ id:"thesun", year:1969, date:"1969", era:5, cat:"print",
  title:"The Sun",
  wiki:"The Sun (United Kingdom)",
  summary:"Relaunched in 1969 by Rupert Murdoch, it became Britain's best-selling daily and the loudest voice in its tabloid politics; its 1992 front page 'It's The Sun Wot Won It' is the canonical claim of tabloid influence over a general election.",
  importance:"The Sun made tabloid political power explicit: brash, populist, and unabashed about swinging elections, it became the instrument through which Murdoch's preferences reached millions of voters. 'The Sun Wot Won It' crystallized the belief — fiercely debated but politically potent — that a tabloid could decide who governs Britain.",
  impact:{
    print:"The dominant British tabloid claims the power to decide elections.",
    power:"Murdoch's populist press becomes an open force in British politics." } },

{ id:"levesonipso", year:2012, date:"2011–2014", era:7, cat:["print","law"],
  title:"Leveson and IPSO",
  wiki:"Leveson Inquiry",
  summary:"The phone-hacking scandal triggers the Leveson Inquiry (2011–12) into press conduct; its recommendations lead to the Independent Press Standards Organisation (IPSO, 2014) as the main UK press regulator — though some titles, including the Guardian and FT, refuse to join.",
  importance:"Leveson forced Britain to confront whether a press that had hacked phones and colluded with police could be trusted to regulate itself. The outcome — an industry-funded regulator that the most independent papers declined to join, and statutory underpinning largely abandoned — left British press self-regulation in an uneasy compromise, neither fully free nor genuinely accountable.",
  impact:{
    law:"A public inquiry into press abuses produces a new self-regulator, IPSO.",
    print:"British press self-regulation is remade after the hacking scandal.",
    power:"The limits of an industry policing itself are exposed." },
  causes:["newsoftheworld"], effects:[] },

// ===== FRANCE =====
{ id:"lefigaro", year:1826, date:"1826", era:3, cat:"print",
  title:"Le Figaro",
  wiki:"Le Figaro",
  summary:"Founded 1826, France's oldest national daily still publishing — a conservative paper of record, now owned by the Dassault aviation-and-defense group.",
  importance:"Le Figaro has carried French conservative opinion for nearly two centuries and remains a pillar of the national press. Its ownership by an aerospace-and-arms conglomerate is characteristic of the French model, in which major newspapers are held by industrial groups with interests far beyond journalism.",
  impact:{
    print:"France's oldest surviving national daily anchors the conservative press.",
    power:"An industrial-defense group owns a paper of record — the French pattern." } },

{ id:"havasafp", year:1835, date:"1835", era:3, cat:"print",
  title:"Havas and the Birth of AFP",
  wiki:"Agence France-Presse",
  summary:"Charles-Louis Havas founds the world's first news agency in Paris in 1835; with Reuters and Wolff it carves up global news territory in the late-nineteenth-century 'cartel.' Its news operations become Agence France-Presse (AFP) at the Liberation in 1944.",
  importance:"Havas was the original wire service, the model Reuters and Wolff followed, and the three agencies' territorial cartel shaped what news reached which parts of the world for decades — an early architecture of global information flow. Reborn as AFP after the Nazi occupation that had captured its predecessor, it remains one of the major world agencies.",
  impact:{
    print:"The world's first news agency is founded, ancestor of AFP.",
    power:"Three agencies carve up global news territory in a cartel.",
    communications:"The architecture of worldwide news distribution is first drawn here." },
  effects:["reuters","wolffbureau"] },

{ id:"frenchpresslaw1881", year:1881, date:"1881", era:4, cat:["print","law"],
  title:"France's 1881 Press-Freedom Law",
  wiki:"Law on the Freedom of the Press of 29 July 1881",
  summary:"The Law on the Freedom of the Press of 29 July 1881 sweeps away prior authorization, deposits, and stamp taxes, establishing freedom of the press as the foundational principle of the French Republic. It remains the basis of French press law to this day.",
  importance:"Building on Article 11 of the 1789 Declaration of the Rights of Man, the 1881 law made press freedom a durable statutory reality after a century of censorship, empire, and revolution. Unlike the American First Amendment's terse absolute, it is a detailed code balancing liberty against defined offenses — the continental model of press freedom defined by statute rather than constitutional silence.",
  impact:{
    law:"Press freedom is established as France's foundational, still-governing statute.",
    print:"Prior authorization, deposits, and stamp taxes are abolished.",
    power:"The continental, statute-based model of press freedom is codified." },
  causes:["frenchdeclaration"], effects:[] },

{ id:"lemonde", year:1944, date:"1944", era:5, cat:"print",
  title:"Le Monde",
  wiki:"Le Monde",
  summary:"Founded in 1944 at the Liberation as the new France's 'paper of record,' deliberately serious and independent; in 2010 control passes to a consortium of businessmen — Xavier Niel, Matthieu Pigasse, and Daniel Křetínský.",
  importance:"Le Monde was created to give liberated France an authoritative, independent daily, and it became the reference point of French public life. Its 2010 acquisition by wealthy investors raised the same questions of independence that recur across the global press, even as it remained the country's leading serious newspaper.",
  impact:{
    print:"Liberated France gains its serious, independent paper of record.",
    power:"Control passes to a billionaire consortium, testing its independence." } },

{ id:"liberation", year:1973, date:"1973", era:5, cat:"print",
  title:"Libération",
  wiki:"Libération",
  summary:"Founded in 1973, co-founded by Jean-Paul Sartre out of the radical energy of May 1968 — a left-wing daily that became a fixture of French intellectual and political life, repeatedly restructured under financial pressure since the 2000s.",
  importance:"Libération embodied the engaged, militant press born of 1968, pairing radical politics with serious journalism. Its recurring financial crises and rescues since the 2000s typify the precariousness of the ideologically committed newspaper in the age of collapsing advertising, dependent on patrons to survive.",
  impact:{
    print:"The engaged left-wing daily of post-1968 France is founded.",
    power:"Ideological journalism survives only through repeated rescue." } },

// ===== GERMANY, AUSTRIA & SWITZERLAND =====
{ id:"wienerzeitung", year:1703, date:"1703", era:2, cat:"print",
  title:"Wiener Zeitung",
  wiki:"Wiener Zeitung",
  summary:"Founded 1703, the Austrian state's official gazette and long the world's oldest continuously published newspaper. After a law stripped its mandatory commercial-registry notices, the Austrian parliament ended its daily print edition on 30 June 2023, after 320 years.",
  importance:"The Wiener Zeitung's death-by-statute is a singular event: a 320-year-old paper ended not by the market or a censor but by an act of parliament removing the legal-notice revenue that sustained it. It is a stark illustration of how a paper tied to the state lives and dies by the state's decisions.",
  impact:{
    print:"The world's oldest newspaper ends daily print after 320 years.",
    law:"An act of parliament, removing legal-notice revenue, kills the paper.",
    power:"A state-owned paper's fate rests entirely on the state's choices." } },

{ id:"vossische", year:1705, date:"1705", era:2, cat:"print",
  title:"Vossische Zeitung",
  wiki:"Vossische Zeitung",
  summary:"A Berlin paper dating to 1705, long Germany's most respected liberal newspaper — until it was suppressed by the Nazi regime in 1934, an early casualty of the destruction of the free German press.",
  importance:"For over two centuries the Vossische Zeitung was the voice of educated liberal Berlin, the German paper of record. Its forced closure in 1934 marked the Nazi state's swift extinction of an independent press, a reminder of how quickly a free press can be eliminated by an authoritarian regime determined to control information.",
  impact:{
    print:"Germany's leading liberal paper of 200 years is killed by the Nazis.",
    power:"An authoritarian regime extinguishes the free press within months of power." } },

{ id:"carlsbad1819", year:1819, date:"1819", era:3, cat:["print","law"],
  title:"The Carlsbad Decrees",
  wiki:"Carlsbad Decrees",
  summary:"In 1819 the German Confederation imposes the Carlsbad Decrees — sweeping press censorship and surveillance of universities — to crush liberal and nationalist agitation after the Napoleonic era.",
  importance:"The Carlsbad Decrees were the reactionary order's answer to the printed word: pre-publication censorship across the German states, designed to suppress the liberal and national movements that print was spreading. They are the German chapter of the same nineteenth-century struggle over the press that played out in Britain's stamp taxes and France's revolutions.",
  impact:{
    law:"Sweeping pre-publication censorship is imposed across the German states.",
    print:"Liberal and nationalist newspapers are suppressed by the reactionary order.",
    power:"The printed word is met with coordinated state censorship." } },

{ id:"frankfurterzeitung", year:1856, date:"1856", era:3, cat:"print",
  title:"Frankfurter Zeitung",
  wiki:"Frankfurter Zeitung",
  summary:"Founded 1856, a leading liberal-democratic German daily of high journalistic repute, suppressed by the Nazi regime in 1943 — its former journalists later helping to found the postwar Frankfurter Allgemeine Zeitung.",
  importance:"The Frankfurter Zeitung was among the most distinguished German papers, internationally respected for its reporting and feuilleton. Its suppression in 1943 completed the Nazi destruction of the independent press, but its tradition survived: its alumni rebuilt a free German daily after the war, a thread of continuity through the catastrophe.",
  impact:{
    print:"A distinguished liberal daily is suppressed by the Nazis in 1943.",
    power:"Its tradition survives to seed the postwar free press." },
  effects:["faz"] },

{ id:"reichspresse1874", year:1874, date:"1874", era:3, cat:["print","law"],
  title:"The Imperial Press Law",
  wiki:"Press in Germany",
  summary:"The 1874 Reichspressegesetz establishes a unified press law for the new German Empire — abolishing pre-publication censorship while imposing registration, liability, and right-of-reply rules that govern German newspapers into the twentieth century.",
  importance:"The Imperial Press Law represented the liberal compromise of Bismarck's Germany: no prior censorship, but a framework of registration and after-the-fact liability that kept the state's hand on the press. It is the continental pattern — freedom defined and bounded by detailed statute — and the legal order the Nazis would later overturn entirely.",
  impact:{
    law:"A unified imperial press law ends censorship but imposes registration and liability.",
    print:"German newspapers gain a bounded, statute-defined freedom.",
    power:"The state keeps a regulatory hand on a formally free press." } },

{ id:"schriftleiter1933", year:1933, date:"1933", era:4, cat:["print","law"],
  title:"The Editors Law",
  wiki:"Editors Law",
  summary:"The 1933 Schriftleitergesetz ('Editors Law') places German journalists under direct Nazi state control — making editors personally responsible to the regime, purging Jews and dissidents from the profession, and turning the press into an instrument of the state.",
  importance:"The Editors Law completed the Nazification of the German press not by censoring papers from outside but by capturing the journalists within: every editor became a state-licensed servant of the regime, legally bound to its line. It is the totalitarian inversion of press freedom — the journalist made an organ of the state — and the endpoint the carlsbad-to-empire arc of German press law could not prevent.",
  impact:{
    law:"Journalists are made personally answerable to the Nazi state.",
    print:"The press is converted from a profession into an instrument of the regime.",
    power:"Press control is achieved by capturing the journalists, not just the papers." },
  causes:["reichspresse1874"], effects:["faz","alliedlicensing"] },

{ id:"nzz", year:1780, date:"1780", era:2, cat:"print",
  title:"Neue Zürcher Zeitung",
  wiki:"Neue Zürcher Zeitung",
  summary:"Founded 1780 in Zurich, one of the oldest and most respected German-language newspapers — a Swiss daily of international reputation, still published, that escaped the censorship and destruction visited on the German press by virtue of Swiss neutrality.",
  importance:"The NZZ's long, unbroken life is itself instructive: protected by Switzerland's neutrality and stability, it carried liberal German-language journalism continuously through the eras that destroyed its German counterparts. It stands as the survivor against which the suppressed Vossische and Frankfurter Zeitungen can be measured.",
  impact:{
    print:"A 240-year German-language daily of international standing endures.",
    power:"Swiss neutrality preserves a free press where Germany's was destroyed." } },

{ id:"alliedlicensing", year:1945, date:"1945–1949", era:5, cat:["print","law"],
  title:"Allied Licensing of the German Press",
  wiki:"Lizenzzeitung",
  summary:"After 1945 the Allied occupiers rebuild the German press by licensing new newspapers to vetted, untainted publishers — the system that creates the Süddeutsche Zeitung (1945) and the Frankfurter Allgemeine Zeitung (1949) and founds the free press of West Germany.",
  importance:"Allied licensing was a deliberate act of democratic reconstruction: rather than revive Nazi-era papers, the occupiers chartered new ones under trustworthy hands, building a pluralist press from the ruins. It is the rare case of foreign powers regulating a press into freedom, and the foundation of postwar German journalism.",
  impact:{
    law:"The occupiers license a new, vetted German press from the ruins of the old.",
    print:"The Süddeutsche Zeitung and the FAZ are founded under the licensing system.",
    power:"A free press is deliberately reconstructed after totalitarian capture." },
  causes:["schriftleiter1933"], effects:["faz","sueddeutsche"] },

{ id:"sueddeutsche", year:1945, date:"1945", era:5, cat:"print",
  title:"Süddeutsche Zeitung",
  wiki:"Süddeutsche Zeitung",
  summary:"Founded in Munich in 1945 under the Allied licensing system, it grows into one of Germany's largest and most influential national dailies, later central to international investigations such as the Panama Papers.",
  importance:"The Süddeutsche embodied the successful rebirth of the German press: a serious, liberal national daily born of the postwar order that became a leader of investigative journalism, including the cross-border Panama Papers. It is proof that the licensing reconstruction worked, producing durable, independent institutions.",
  impact:{
    print:"A leading postwar national daily rises under Allied licensing.",
    power:"The reconstructed German press produces world-class investigative journalism." },
  causes:["alliedlicensing"] },

{ id:"faz", year:1949, date:"1949", era:5, cat:"print",
  title:"Frankfurter Allgemeine Zeitung",
  wiki:"Frankfurter Allgemeine Zeitung",
  summary:"Founded 1949 by former Frankfurter Zeitung journalists under the Allied licensing system, the FAZ becomes a conservative-liberal paper of record for the Federal Republic — a deliberate revival of the destroyed liberal tradition.",
  importance:"The FAZ knit the broken thread of German liberal journalism back together: staffed by veterans of the Nazi-suppressed Frankfurter Zeitung, it became postwar Germany's paper of record. Its founding is the continuity that survived the catastrophe, the free press rebuilt by the people the regime had silenced.",
  impact:{
    print:"The destroyed liberal tradition is revived as the Federal Republic's paper of record.",
    power:"The free German press is rebuilt by the journalists the Nazis had purged." },
  causes:["frankfurterzeitung","alliedlicensing"] },

{ id:"axelspringer", year:1946, date:"1946–2020", era:5, cat:"print",
  title:"Axel Springer (Bild, Die Welt)",
  wiki:"Axel Springer SE",
  summary:"Axel Springer founds his publishing company in 1946 and launches the tabloid Bild in 1952; it becomes Germany's dominant tabloid-and-political press group. In 2019–20 a KKR-led consortium takes a majority of the news business, with the Springer family retaining the lucrative digital-classifieds operations.",
  importance:"Springer's Bild is the German equivalent of the Sun — a populist tabloid of enormous political weight — and the group became a conservative force in German media. The 2019–20 KKR investment, which prized the digital-classifieds business over the journalism, captured the modern truth that the platforms' real value is in the marketplaces around the news, not the news itself.",
  impact:{
    print:"Germany's dominant tabloid-and-political press group is built.",
    power:"Private equity values the digital classifieds above the journalism.",
    society:"Bild wields populist political influence comparable to the British tabloids." } },

{ id:"derspiegel", year:1947, date:"1947", era:5, cat:"print",
  title:"Der Spiegel and the Spiegel Affair",
  wiki:"Der Spiegel",
  summary:"Founded 1947, Germany's leading investigative newsweekly; the 1962 'Spiegel Affair' — a government raid on its offices and the arrest of its journalists over an article on military weakness — becomes a landmark test of West German press freedom that the magazine wins.",
  importance:"Der Spiegel made investigative journalism central to postwar German democracy, and the Spiegel Affair was its constitutional moment: the public backlash against the government's heavy-handed raid forced a defense minister's resignation and established press freedom as a load-bearing principle of the Federal Republic. It is Germany's Pentagon Papers, a decade early.",
  impact:{
    print:"Investigative journalism is established at the center of German democracy.",
    law:"The Spiegel Affair makes press freedom a tested constitutional principle.",
    power:"A government's raid on a magazine backfires into a press-freedom victory." } },

// ===== ITALY & SPAIN =====
{ id:"lastampa", year:1867, date:"1867", era:3, cat:"print",
  title:"La Stampa",
  wiki:"La Stampa",
  summary:"Founded 1867 in Turin, one of Italy's oldest and most influential dailies, long associated with the Agnelli (Fiat) industrial dynasty — the Italian pattern of newspapers held by industrial families.",
  importance:"La Stampa is a pillar of the Italian press and a classic case of the industrial-family newspaper, its fortunes tied to the Agnellis and Fiat. Italian journalism's entanglement with industrial and political power, rather than an independent advertising market, has long shaped the character of its press.",
  impact:{
    print:"One of Italy's oldest national dailies anchors the northern press.",
    power:"The industrial-family ownership pattern of the Italian press is exemplified." } },

{ id:"corriere", year:1876, date:"1876", era:3, cat:"print",
  title:"Corriere della Sera",
  wiki:"Corriere della Sera",
  summary:"Founded 1876 in Milan, Italy's largest-circulation daily and its paper of record — held through the RCS MediaGroup at the center of Italy's intertwined media, banking, and political establishment.",
  importance:"The Corriere is the authoritative voice of the Italian press, and its ownership through shifting consortia of banks and industrialists reflects the close weave of media and power in Italy. It has carried the nation's serious journalism through fascism, republic, and the Berlusconi era's collisions of media and politics.",
  impact:{
    print:"Italy's paper of record and largest daily is founded.",
    power:"Its ownership reflects the weave of media, banking, and politics in Italy." } },

{ id:"abcspain", year:1903, date:"1903", era:4, cat:"print",
  title:"ABC",
  wiki:"ABC (newspaper)",
  summary:"Founded 1903 in Madrid, a conservative, monarchist Spanish daily that survived the Civil War, the Franco dictatorship's censorship, and the transition to democracy — one of Spain's enduring papers of record.",
  importance:"ABC carried Spanish conservative and monarchist opinion through the upheavals of the twentieth century, including decades under Franco's press censorship. Its survival across dictatorship and democracy makes it a thread of continuity in a national press repeatedly reshaped by political rupture.",
  impact:{
    print:"A conservative Spanish daily endures across dictatorship and democracy.",
    power:"The paper survives Franco-era censorship to anchor the modern press." } },

{ id:"elpais", year:1976, date:"1976", era:6, cat:"print",
  title:"El País",
  wiki:"El País",
  summary:"Founded in Madrid in 1976, months after Franco's death, El País became the flagship of Spain's democratic transition — a serious, liberal paper of record born of the country's emergence from dictatorship.",
  importance:"El País is inseparable from Spain's transition to democracy: launched into the brief, fragile opening after Franco, it gave the new democracy an authoritative independent voice and helped define its public sphere. It is the clearest case of a newspaper founded as, and as an instrument of, a nation's passage from dictatorship to freedom.",
  impact:{
    print:"The flagship paper of Spain's democratic transition is founded.",
    power:"A free press emerges as Spain emerges from dictatorship.",
    society:"The new democracy gains an authoritative independent daily." } },

// ===== RUSSIA / USSR =====
{ id:"pravda", year:1912, date:"1912", era:4, cat:"print",
  title:"Pravda",
  wiki:"Pravda",
  summary:"Founded 1912 as a Bolshevik party organ, Pravda ('Truth') became the official newspaper of the Soviet Communist Party until 1991 — the very model of the party press, where the newspaper is an instrument of the state's ideology.",
  importance:"Pravda is the archetype of the totalitarian party newspaper: not a check on power but its mouthpiece, its 'truth' the line of the Party. For seven decades it defined what a press wholly captured by the state looks like, the polar opposite of the adversarial Western model, and a warning written across the twentieth century.",
  impact:{
    print:"The party newspaper as instrument of state ideology is perfected.",
    power:"For 70 years the press is the voice of the Party, not a check on it.",
    society:"'Truth' becomes whatever the state declares it to be." } },

{ id:"izvestia", year:1917, date:"1917", era:4, cat:"print",
  title:"Izvestia",
  wiki:"Izvestia",
  summary:"Founded 1917, the official organ of the Soviet government (as distinct from Pravda, the Party's) — the two together speaking for the two faces of Soviet power. Privatized and resold repeatedly after 1991.",
  importance:"Izvestia completed the Soviet press architecture: Pravda for the Party, Izvestia for the state, a controlled duopoly of official voices. Its post-Soviet passage through a series of owners traces Russia's turbulent, ultimately curtailed experiment with a free press after 1991.",
  impact:{
    print:"The Soviet state gains its official organ alongside the Party's.",
    power:"A controlled duopoly of official papers speaks for Soviet power." } },

{ id:"glavlit", year:1922, date:"1922–1991", era:4, cat:["print","surveillance"],
  title:"Glavlit: The Soviet Censor",
  wiki:"Glavlit",
  summary:"Established in 1922, Glavlit was the central Soviet censorship apparatus, vetting every printed work — newspapers, books, labels — for ideological and security compliance, until it was abolished with the USSR in 1991.",
  importance:"Glavlit was prior restraint as a permanent state institution: nothing could be printed in the Soviet Union without its approval, an industrialized censorship that controlled the entire printed output of a superpower for seventy years. It is the most complete realization of the censor's dream, the system the whole Western struggle against prior restraint was fighting to prevent.",
  impact:{
    surveillance:"Every printed work in the USSR is vetted by a central censor for 70 years.",
    print:"Prior restraint is institutionalized as a permanent organ of the state.",
    power:"Total control of the printed word is achieved and sustained." } },

{ id:"tass", year:1925, date:"1925", era:4, cat:"print",
  title:"TASS",
  wiki:"TASS",
  summary:"Founded 1925, the central news agency of the Soviet Union and now of Russia — the official wire through which the state's version of events reaches the domestic and foreign press, still the central state agency today.",
  importance:"TASS was the Soviet state's monopoly source of news, and its dispatches the authorized account of reality that every Soviet paper reproduced. Its continuation as Russia's central state agency shows the durability of the state-wire model, the apparatus of official information surviving the system that created it.",
  impact:{
    print:"The state's monopoly news agency supplies the authorized version of events.",
    power:"Official reality is centralized and distributed through a single state wire." } },

{ id:"ntvrussia", year:2001, date:"1993–2001", era:6, cat:"print",
  title:"NTV's Takeover",
  wiki:"NTV (Russia)",
  summary:"Founded in 1993 as Russia's first major independent national television network, NTV's critical journalism made it a pillar of the post-Soviet free press — until the state-controlled gas giant Gazprom took it over in 2001, an event widely regarded as the end of independent national broadcasting in Russia.",
  importance:"NTV's capture is the hinge of the Russian media story: a genuinely independent outlet, critical of the Kremlin and of the Chechen war, brought to heel through corporate takeover by a state proxy. It marked the reassertion of state control over the press that the Soviet collapse had briefly loosened, the template for the managed media of the Putin era.",
  impact:{
    print:"Russia's first major independent broadcaster is captured by a state proxy.",
    power:"The brief post-Soviet free press is rolled back through corporate takeover.",
    society:"Independent national journalism in Russia effectively ends." } },

{ id:"novayagazeta", year:2021, date:"1993–2022", era:7, cat:"print",
  title:"Novaya Gazeta",
  wiki:"Novaya Gazeta",
  summary:"Founded 1993, Russia's most prominent investigative newspaper, whose journalists — several murdered for their work — pursued corruption and abuses; its editor Dmitry Muratov shares the 2021 Nobel Peace Prize. It suspends Russian operations in March 2022 under wartime censorship and relaunches in exile as Novaya Gazeta Europe.",
  importance:"Novaya Gazeta was the bravest survivor of Russia's free press, paying for its independence with the lives of reporters including Anna Politkovskaya, and its editor's Nobel honored that courage. Its 2022 silencing and flight into exile marked the near-total extinction of independent journalism inside Russia under the wartime laws.",
  impact:{
    print:"Russia's bravest investigative paper is silenced and forced into exile.",
    power:"Wartime censorship completes the destruction of the independent Russian press.",
    society:"A Nobel-honored newsroom is driven out of its own country." },
  effects:["russiawar2022"] },

{ id:"russiawar2022", year:2022, date:"2022", era:7, cat:["print","law"],
  title:"Russia's Wartime Censorship Laws",
  wiki:"Censorship in Russia",
  summary:"Days into the 2022 invasion of Ukraine, Russia criminalizes 'discrediting' the armed forces and spreading 'fake news' about the war — driving the closure or exile of nearly every remaining independent outlet (TV Rain, Echo of Moscow), with Meduza and others branded 'foreign agents' or 'undesirable organizations.'",
  importance:"The 2022 laws completed in weeks what the previous two decades had advanced gradually: the elimination of independent journalism inside Russia. By making accurate reporting on the war a crime, the state forced newsrooms to choose between silence, exile, and prison, restoring something close to the total information control of the Soviet era.",
  impact:{
    law:"Accurate war reporting is criminalized as 'discrediting' the military.",
    print:"Nearly every remaining independent Russian outlet is closed or exiled.",
    power:"Near-total state control of information is re-established in weeks." },
  causes:["ntvrussia","novayagazeta"], effects:[] },

// ===== ASIA =====
{ id:"mainichi", year:1872, date:"1872", era:3, cat:"print",
  title:"Mainichi Shimbun",
  wiki:"Mainichi Shimbun",
  summary:"Tracing to 1872, one of Japan's oldest and largest national dailies, part of the trio of mass-circulation papers that give Japan among the highest newspaper readerships in the world.",
  importance:"The Mainichi is one of the pillars of Japan's distinctive press: enormous, disciplined national dailies with circulations in the millions, sustained by home delivery and a culture of newspaper reading unmatched in the West. It represents a model of the mass newspaper that endured into the digital era far better than its American counterparts.",
  impact:{
    print:"One of Japan's giant national dailies anchors the world's largest readership.",
    society:"The Japanese mass-newspaper model endures where the Western one collapsed." } },

{ id:"yomiuri", year:1874, date:"1874", era:3, cat:"print",
  title:"Yomiuri Shimbun",
  wiki:"Yomiuri Shimbun",
  summary:"Founded 1874, for decades the highest-circulation newspaper in the world, with a daily readership in the millions — the flagship of Japan's uniquely robust newspaper culture.",
  importance:"The Yomiuri's staggering circulation — long the largest on earth — embodies the Japanese exception: a mass print press that retained tens of millions of loyal, home-delivered readers deep into the internet age. It is the living counterexample to the assumption that the daily newspaper was everywhere doomed by digital.",
  impact:{
    print:"The world's highest-circulation newspaper exemplifies Japan's press culture.",
    society:"A mass daily retains tens of millions of readers into the digital age." } },

{ id:"nikkei", year:1876, date:"1876", era:3, cat:"print",
  title:"Nikkei",
  wiki:"The Nikkei",
  summary:"Tracing to 1876, Japan's leading business daily and publisher of the Nikkei stock index; in 2015 it acquires the Financial Times Group from Pearson for about £844M, joining two of the world's foremost financial papers.",
  importance:"The Nikkei is Asia's premier business newspaper, and its purchase of the FT was a landmark of cross-border media ownership and of Asian capital acquiring a Western institution. The deal reflected the durable value of specialized financial journalism and the globalization of the press at the top end.",
  impact:{
    print:"Japan's leading business daily acquires the Financial Times.",
    power:"Asian capital takes ownership of a foremost Western financial paper." },
  causes:["ftimes"] },

{ id:"asahi", year:1879, date:"1879", era:4, cat:"print",
  title:"Asahi Shimbun",
  wiki:"Asahi Shimbun",
  summary:"Founded 1879, one of Japan's largest and most influential national dailies, traditionally liberal in orientation — completing, with the Yomiuri and Mainichi, the trio that dominates Japanese print.",
  importance:"The Asahi is the liberal pole of Japan's big three dailies, an agenda-setting paper of record with a mass national circulation. Together the three embody a press model — vast, disciplined, home-delivered — that made Japan the great holdout of the print newspaper's twentieth-century form.",
  impact:{
    print:"Japan's leading liberal national daily anchors the press establishment.",
    power:"The big-three dailies dominate the agenda of Japanese public life." } },

{ id:"timesofindia", year:1838, date:"1838", era:3, cat:"print",
  title:"The Times of India",
  wiki:"The Times of India",
  summary:"Founded 1838 as the Bombay Times under colonial rule, it grew into India's largest-circulation English-language daily and the flagship of a vast modern media group — a colonial-era paper that became a pillar of the world's largest democracy.",
  importance:"The Times of India spans the whole arc of the Indian press: born to serve the British colonial community, it became, after independence, the leading English daily of a democratic nation of a billion-plus people. Its scale reflects the Indian newspaper boom that ran counter to Western decline, as literacy and a growing middle class expanded readership.",
  impact:{
    print:"A colonial-era paper becomes the largest English daily of democratic India.",
    society:"The Indian press grows as Western print declines, on rising literacy." } },

{ id:"prbact1867", year:1867, date:"1867", era:3, cat:["print","law"],
  title:"India's Press and Registration of Books Act",
  wiki:"Press and Registration of Books Act, 1867",
  summary:"The colonial Press and Registration of Books Act (1867) requires every printer and publisher in British India to register and to record details on each publication — a regime of state oversight of print that, remarkably, remains the basis of Indian newspaper registration to this day.",
  importance:"The 1867 Act established colonial control over the Indian press through compulsory registration, a softer instrument than censorship but a lasting one. Its survival into independent India — the registration regime outliving the empire that imposed it — shows how the legal architecture of colonial information control can persist long after decolonization.",
  impact:{
    law:"Colonial India imposes compulsory registration of all printers and publishers.",
    print:"A 19th-century oversight regime still governs Indian press registration.",
    power:"Colonial information-control law outlives the empire that wrote it." } },

{ id:"thehindu", year:1878, date:"1878", era:3, cat:"print",
  title:"The Hindu",
  wiki:"The Hindu",
  summary:"Founded 1878 in Madras, an English-language daily that became a respected national paper of record in India, known for sober reporting and a tradition of editorial independence.",
  importance:"The Hindu built a reputation for seriousness and integrity that made it one of India's most trusted papers, a southern counterweight to the northern giants. It represents the strand of the Indian press committed to the paper-of-record ideal, sustaining quality journalism in the world's largest democracy.",
  impact:{
    print:"A respected English-language paper of record is founded in southern India.",
    society:"The serious-journalism tradition takes root in the Indian press." } },

{ id:"vernacularpress1878", year:1878, date:"1878", era:3, cat:["print","law"],
  title:"India's Vernacular Press Act",
  wiki:"Vernacular Press Act",
  summary:"The colonial Vernacular Press Act (1878) targets newspapers in Indian languages specifically — empowering authorities to censor and shut them — to suppress the growing nationalist press that the English-language papers, read by the rulers, escaped.",
  importance:"The Vernacular Press Act laid bare colonial censorship's logic: it muzzled the Indian-language press that reached the masses and stirred nationalism, while leaving the English papers the rulers could monitor untouched. Its blatant discrimination provoked outrage and helped galvanize the very nationalist sentiment it sought to suppress — censorship breeding the resistance it feared.",
  impact:{
    law:"Colonial law censors the Indian-language press while sparing the English papers.",
    print:"The nationalist vernacular press is singled out for suppression.",
    power:"Discriminatory censorship inflames the nationalism it meant to silence." } },

{ id:"xinhua", year:1931, date:"1931", era:4, cat:"print",
  title:"Xinhua News Agency",
  wiki:"Xinhua News Agency",
  summary:"Founded 1931 as the Red China News Agency, Xinhua became the official state news agency of the People's Republic — the central source of authorized news for China's press and a powerful instrument of state messaging at home and abroad.",
  importance:"Xinhua is the nerve center of the Chinese party-state's media system: it supplies the authorized version of events that the domestic press must follow and projects China's narrative globally through a vast international network. It is the Chinese counterpart to TASS, the state wire as the spine of a controlled information order.",
  impact:{
    print:"The party-state's central news agency supplies authorized news to all media.",
    power:"State messaging is centralized and projected at home and abroad.",
    society:"The press operates within the version of events Xinhua defines." } },

{ id:"scmp", year:1903, date:"1903", era:4, cat:"print",
  title:"South China Morning Post",
  wiki:"South China Morning Post",
  summary:"Founded 1903 in Hong Kong, the territory's leading English-language daily and long a respected independent voice in Asia; acquired by the Chinese e-commerce giant Alibaba in 2015–16, raising questions about its independence as Beijing's grip on Hong Kong tightened.",
  importance:"The SCMP was Hong Kong's window between China and the world, an independent English paper of record in a uniquely positioned city. Its purchase by Alibaba, amid the erosion of Hong Kong's autonomy, made it a test case of whether editorial independence can survive mainland-linked ownership and a closing political space.",
  impact:{
    print:"Hong Kong's leading English daily passes to mainland-linked ownership.",
    power:"Press independence is tested as Hong Kong's autonomy erodes.",
    society:"A bridge between China and the world comes under new pressures." } },

{ id:"straitstimes", year:1845, date:"1845", era:3, cat:"print",
  title:"The Straits Times",
  wiki:"The Straits Times",
  summary:"Founded 1845, Singapore's English-language paper of record — an enduring institution operating within Singapore's tightly managed media environment, where a free-market economy coexists with significant state influence over the press.",
  importance:"The Straits Times exemplifies the Singapore model: a professional, high-quality newspaper that nonetheless operates within firm political constraints, its independence bounded by a state that treats the press as a partner in nation-building rather than an adversary. It is the most prominent case of the 'managed' press that characterizes much of Asia's developmental states.",
  impact:{
    print:"Singapore's enduring English paper of record operates under firm constraints.",
    power:"The 'managed press' of the developmental state is exemplified." } },

// ===== LATIN AMERICA =====
{ id:"lanacion", year:1870, date:"1870", era:3, cat:"print",
  title:"La Nación",
  wiki:"La Nación",
  summary:"Founded 1870 in Buenos Aires by former president Bartolomé Mitre, one of Argentina's oldest and most influential dailies — a conservative paper of record that has chronicled the nation's turbulent political history for over 150 years.",
  importance:"La Nación is a foundational institution of the Argentine press, established by a statesman and woven into the country's political life through coups, Perón, dictatorship, and democracy. It represents the long-established broadsheet tradition in Latin America, a paper of record surviving repeated political rupture.",
  impact:{
    print:"A founding Argentine daily chronicles 150 years of national upheaval.",
    power:"The established broadsheet survives coups, dictatorship, and democracy." } },

{ id:"oestado", year:1875, date:"1875", era:3, cat:"print",
  title:"O Estado de S. Paulo",
  wiki:"O Estado de S. Paulo",
  summary:"Founded 1875, one of Brazil's most influential newspapers, which endured censorship under both the Vargas dictatorship and the 1964–85 military regime — at times publishing recipes and poems in place of censored articles to signal the gaps to readers.",
  importance:"O Estado de S. Paulo carried serious Brazilian journalism through successive authoritarian periods, and its famous protest against military censorship — filling censored columns with cooking recipes and verse — became an iconic act of press defiance. It embodies the Latin American press's long contest with the censor under recurring dictatorship.",
  impact:{
    print:"A leading Brazilian daily endures censorship under successive dictatorships.",
    power:"Its recipe-filled censored columns become an icon of press defiance." } },

{ id:"excelsior", year:1917, date:"1917", era:4, cat:"print",
  title:"Excélsior",
  wiki:"Excélsior",
  summary:"Founded 1917 in Mexico City, a major national daily whose 1976 editorial purge — engineered under President Echeverría against its independent editor — became a notorious case of indirect government control of the Mexican press.",
  importance:"Excélsior's 1976 crisis exposed the subtle machinery of Mexican press control under the long PRI rule: not crude censorship but the manipulation of ownership, newsprint supply, and government advertising to discipline an independent paper. It is the Latin American case study in soft, deniable state control of a nominally free press.",
  impact:{
    print:"A major Mexican daily is brought to heel by an engineered editorial purge.",
    power:"Soft state control — ownership, newsprint, ad spending — disciplines the press." } },

{ id:"clarin", year:1945, date:"1945", era:5, cat:"print",
  title:"Clarín and the Media Law",
  wiki:"Clarín (Argentine newspaper)",
  summary:"Founded 1945 in Buenos Aires, Clarín grew into Argentina's largest newspaper and media conglomerate; it became the target of the Kirchner government's 2009 'Ley de Medios' (Media Law), aimed at breaking up its market dominance — a law the courts partly struck down and the Macri government substantially repealed in 2015–16.",
  importance:"The battle over Clarín was Latin America's defining modern media-and-state conflict: a populist government framing an antitrust-style media law as democratization, and the conglomerate framing it as retaliation against critical journalism. It posed the hard question of whether breaking up concentrated media power serves press freedom or merely lets the state punish its critics.",
  impact:{
    print:"Argentina's largest media group is targeted by a government media law.",
    law:"The Ley de Medios pits media antitrust against press-freedom concerns.",
    power:"Breaking up media power and punishing critics become hard to tell apart." } },

// ===== MIDDLE EAST & AFRICA =====
{ id:"alahram", year:1875, date:"1875", era:3, cat:"print",
  title:"Al-Ahram",
  wiki:"Al-Ahram",
  summary:"Founded 1875 in Cairo, the Arab world's most influential newspaper for much of the twentieth century — and, after nationalization, the flagship of the Egyptian state-aligned press, its editorial line closely tracking the government's.",
  importance:"Al-Ahram was long the paper of record for the entire Arab world, shaping opinion across the region, but its nationalization tied it to the Egyptian state, making it an organ of official perspective. It exemplifies the dominant Middle Eastern pattern of the state-aligned national daily, authoritative in reach yet bounded by its relationship to power.",
  impact:{
    print:"The Arab world's most influential paper becomes a state-aligned organ.",
    power:"The state-aligned national daily defines much of the regional press." } },

{ id:"dailynation", year:1960, date:"1960", era:5, cat:"print",
  title:"Daily Nation",
  wiki:"Daily Nation",
  summary:"Founded 1960 in Kenya, East Africa's largest independent newspaper, established on the eve of independence; it became a relatively robust independent voice in a region where much of the press is state-controlled.",
  importance:"The Daily Nation represents the independent African press: founded as Kenya approached independence, it built a tradition of journalism more autonomous than the state media common across the continent, navigating the pressures of post-colonial governments. It is a leading example of the press as an institution of African civil society.",
  impact:{
    print:"East Africa's largest independent newspaper is founded at independence.",
    power:"An autonomous press takes root amid largely state-controlled neighbors." } },

{ id:"aljazeera", year:1996, date:"1996", era:6, cat:"print",
  title:"Al Jazeera",
  wiki:"Al Jazeera",
  summary:"Launched 1996 in Qatar, the satellite network transformed the Arab media landscape by broadcasting news and debate beyond the control of any single Arab government — so threatening to the region's rulers that its closure was a named condition in the 2017 Saudi-led blockade of Qatar.",
  importance:"Al Jazeera broke the monopoly of state-controlled Arab media, giving the region its first cross-border, relatively uncensored news and a platform for dissident voices — a genuine shock to authoritarian information control. That neighboring governments demanded its closure to end a blockade is the measure of its power: a news outlet treated as a strategic threat by states.",
  impact:{
    print:"Satellite news breaks the Arab states' monopoly on information.",
    power:"A news network becomes so threatening its closure is a diplomatic demand.",
    society:"Cross-border, less-censored news reshapes the Arab public sphere." } },

// ===== GLOBAL WIRE STRUCTURE =====
{ id:"wolffbureau", year:1849, date:"1849", era:3, cat:"print",
  title:"Wolff's Telegraphic Bureau",
  wiki:"Wolffs Telegraphisches Bureau",
  summary:"Founded 1849 in Berlin, the German member of the great nineteenth-century news cartel that divided the world with Havas and Reuters; absorbed into the Nazi-era state agency DNB, its lineage feeds into the postwar German agency dpa.",
  importance:"Wolff completed the triumvirate — Havas, Reuters, Wolff — that carved up global news territory and built the first international information order. Its capture by the Nazi state and dissolution, and the rebuilding of a German agency afterward, traces in one institution the arc from the liberal nineteenth-century press to totalitarian control to postwar reconstruction.",
  impact:{
    print:"The German member of the world news cartel is founded.",
    power:"Three agencies build the first global information order, then one is seized.",
    communications:"Wolff helps wire the nineteenth-century world's news." },
  causes:["havasafp"], effects:["dpa"] },

{ id:"dpa", year:1949, date:"1949", era:5, cat:"print",
  title:"Deutsche Presse-Agentur",
  wiki:"Deutsche Presse-Agentur",
  summary:"Founded 1949, the German Press Agency (dpa) was created under the postwar order as an independent cooperative wire service for the new West German press — replacing the Nazi-era state agency with a structure designed to resist state control.",
  importance:"The dpa was built to be the opposite of its predecessor: a cooperatively owned agency deliberately structured so no government could capture it, supplying the rebuilt German press with independent news. Its founding is part of the same democratic reconstruction as the Allied newspaper licensing, rebuilding the information infrastructure of a free society.",
  impact:{
    print:"An independent cooperative wire replaces the Nazi-era state agency.",
    power:"The news infrastructure is rebuilt to resist state capture.",
    communications:"West Germany gains a free, cooperatively owned news agency." },
  causes:["wolffbureau","alliedlicensing"] },

{ id:"thomsonreuters", year:2008, date:"2008", era:7, cat:"print",
  title:"Thomson Reuters",
  wiki:"Thomson Reuters",
  summary:"In 2008 Canada's Thomson Corporation merges with Reuters Group for about $16.6B, joining Thomson's North American business-information operations with Reuters' global news and financial data — one of the largest media-and-data mergers of the era.",
  importance:"The Thomson Reuters merger captured the modern truth about the great wire services: their commercial value lies overwhelmingly in financial data and information services for professionals, with journalism as one prized but minor part. It is the endpoint of the wire agency's evolution from telegraph-news cooperative to global data company.",
  impact:{
    print:"A founding news agency is absorbed into a global information-and-data company.",
    power:"The wire service's value migrates from journalism to financial data.",
    communications:"News and market data are joined in a single global business." },
  causes:["reuters"], effects:[] },

// ===== ADDENDA (US + Asia entries) =====
{ id:"usatoday", year:1982, date:"1982", era:5, cat:"print",
  title:"USA Today",
  wiki:"USA Today",
  summary:"Launched by Al Neuharth and Gannett in 1982, the first national general-interest daily, printed simultaneously across the country by satellite with color graphics and short, accessible stories — designed for the syndication era and once the nation's circulation leader.",
  importance:"USA Today reinvented the American newspaper for a national, television-paced audience: brief, colorful, satellite-distributed, and aimed everywhere rather than at one city. Derided as shallow but widely imitated, it pointed toward the reader-friendly, visual formats the web would later demand, and became the flagship of Gannett's vast chain.",
  impact:{
    print:"The first national general-interest daily is built for satellite distribution.",
    society:"Color, brevity, and accessibility reshape newspaper format nationwide.",
    power:"It becomes the flagship of the country's largest newspaper chain." },
  causes:["gannett1906"], effects:["consolidation20c"] },

{ id:"knightridder", year:1974, date:"1974–2006", era:5, cat:"print",
  title:"Knight Ridder",
  wiki:"Knight Ridder",
  summary:"Formed by the 1974 merger of Knight Newspapers and Ridder Publications, Knight Ridder became one of the great American metro-daily chains, twice winning clusters of Pulitzers — before shareholder pressure forced its sale and dissolution in 2006, its papers largely absorbed by McClatchy.",
  importance:"Knight Ridder was, for a generation, the quality end of chain ownership, proof that a public company could still fund serious journalism. Its forced breakup in 2006 — dismantled by impatient investors just as the digital storm hit — was an early signal that the shareholder model would not sustain great newspapers through the collapse to come.",
  impact:{
    print:"A great quality newspaper chain is dismantled by shareholder pressure.",
    power:"The public-company model is shown unable to sustain serious journalism.",
    labor:"Its papers scatter into other chains as the digital collapse begins." },
  causes:["consolidation20c"], effects:["mcclatchy","newspapercollapse"] },

{ id:"pti", year:1947, date:"1947", era:5, cat:"print",
  title:"Press Trust of India",
  wiki:"Press Trust of India",
  summary:"Founded in 1947 at independence, the Press Trust of India is the national news agency of India — a non-profit cooperative of newspapers supplying wire news across the world's largest democracy.",
  importance:"The PTI gave independent India its own national wire, replacing reliance on colonial-era and foreign agencies with a domestically owned cooperative. As the shared newsgathering backbone for a vast, multilingual press, it is a foundational institution of the Indian information order, the AP of the subcontinent.",
  impact:{
    print:"Independent India establishes its own national wire cooperative.",
    society:"A shared newsgathering backbone serves the world's largest democracy." },
  causes:["apwire"], effects:[] },

{ id:"presscouncilindia", year:1966, date:"1966", era:5, cat:["print","law"],
  title:"The Press Council of India",
  wiki:"Press Council of India",
  summary:"Established by statute in 1966, the Press Council of India is the country's official press-ethics body — empowered to adjudicate complaints and uphold standards, though with limited enforcement power, a state-chartered self-regulator for a free press.",
  importance:"The Press Council represents the Indian approach to press accountability: a statutory body, rather than the purely industry-run regulators of Britain, tasked with maintaining standards while preserving freedom. Its weak enforcement powers reflect the tension at the heart of all press regulation — how to hold the press to account without licensing it.",
  impact:{
    law:"India creates a statutory body to uphold press ethics and adjudicate complaints.",
    print:"A state-chartered self-regulator tries to balance accountability and freedom.",
    power:"The limits of toothless regulation of a free press are built in from the start." },
  causes:[], effects:[] },

{ id:"kyodo", year:1945, date:"1945", era:5, cat:"print",
  title:"Kyodo News",
  wiki:"Kyodo News",
  summary:"Founded in 1945, Kyodo News is Japan's leading non-profit news agency — a cooperative of newspapers and broadcasters supplying wire news domestically and abroad, established as the postwar Japanese press was rebuilt.",
  importance:"Kyodo became the shared newsgathering backbone of Japan's powerful press, a cooperative wire underpinning the giant national dailies and regional papers alike. Founded in the year of defeat and occupation, it is part of the postwar reconstruction of Japanese media institutions on a cooperative, non-state model.",
  impact:{
    print:"Japan's leading cooperative news agency is founded in 1945.",
    society:"A shared wire underpins the world's largest newspaper readership.",
    communications:"Postwar Japan rebuilds its news infrastructure on a cooperative model." },
  causes:[], effects:[] },

{ id:"peoplesdaily", year:1948, date:"1948", era:5, cat:"print",
  title:"People's Daily",
  wiki:"People's Daily",
  summary:"Founded 1948, the People's Daily is the central organ of the Chinese Communist Party — the authoritative voice of the party-state, its front page and editorials read worldwide as signals of official policy and the line every other Chinese outlet must follow.",
  importance:"The People's Daily is the Chinese counterpart to Pravda: not a newspaper that reports on power but one that speaks for it, its contents the authorized policy line of the ruling party. For over seventy years it has defined the boundaries of permissible discourse in China, the apex of a press wholly integrated into the party-state.",
  impact:{
    print:"The Communist Party's central organ defines the official line for all media.",
    power:"The newspaper is the authoritative voice of the party-state.",
    society:"Its pages set the boundaries of permissible public discourse in China." },
  causes:[], effects:["xinhua"] }

);
