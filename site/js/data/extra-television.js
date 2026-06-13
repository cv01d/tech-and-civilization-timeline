// SUPPLEMENT — television and cable, from selenium and the spinning disk to the
// retransmission blackouts and the streaming regulatory void. The American story rests
// on one premise: broadcast spectrum is scarce and publicly owned, so those who use it
// must serve the public interest — the rationale for ninety years of content rules,
// equal-time law, and children's mandates. Streaming dissolves the premise: no scarcity,
// no public-interest hook, and so the most-watched content faces the fewest rules.
// Cable's history is a three-act oscillation of ignore / over-regulate / deregulate /
// re-regulate, driven each time by whoever held the most lobbying power. Cross-links the
// existing communicationsact (1934 FCC), fairnessdoctrine, telecomact, ecpa, youtube,
// sonybetamax cards. Round one: data only — images to follow.
window.ATLAS_EVENTS.push(

{ id:"tvprecursors", year:1884, date:"1873–1908", era:4, cat:"tv",
  title:"Seeing at a Distance",
  wiki:"Nipkow disk",
  summary:"Willoughby Smith finds selenium's resistance changes with light (1873); Paul Nipkow patents a spinning disk that scans an image line by line (1884); and Campbell-Swinton describes all-electronic television (1908) — nineteen years before anyone builds it.",
  importance:"Television was articulated in theory decades before the electronics existed to realize it. Selenium's photoconductivity meant light could become an electrical signal; Nipkow's perforated disk supplied the scanning principle that would rule early TV for forty years; and Boris Rosing's cathode-ray receiver and Campbell-Swinton's complete all-electronic proposal sketched modern TV in 1907–08. The word itself was coined in Paris in 1900. The idea was fully formed and merely waiting for the hardware.",
  impact:{
    technology:"Light is shown convertible to signal, and image scanning is given a mechanism.",
    communications:"The transmission of moving images is described in full, ahead of the means to build it.",
    society:"'Television' is named before it exists — a concept awaiting its engineering." },
  causes:["telegraph"], effects:["baird1925","farnsworth"] },

{ id:"baird1925", year:1925, date:"March 25, 1925", era:4, cat:"tv",
  title:"Baird's Mechanical Television",
  wiki:"John Logie Baird",
  summary:"John Logie Baird gives the world's first public demonstration of working television at Selfridge's in London — crude silhouettes at first, recognizable moving faces within a year — and by 1929 the BBC begins the first regular public TV service on his system.",
  importance:"Baird made the spinning-disk dream visible: silhouettes in 1925, moving faces in 1926, a transatlantic transmission and a color demonstration in 1928, and 10,000 sets sold in Britain by 1932. The BBC adopted his mechanical system for the world's first regular broadcasts in 1929. It was a genuine first — and a technological dead end, soon eclipsed by the all-electronic approach being built in America, which the BBC itself would switch to within a decade.",
  impact:{
    communications:"The world's first public television, and first regular broadcast service, arrive.",
    technology:"Mechanical scanning reaches its commercial peak — and its ceiling.",
    society:"Audiences see, for the first time, moving images pulled from the air." },
  causes:["tvprecursors"], effects:["ntsc1941"] },

{ id:"farnsworth", year:1927, date:"1927", era:4, cat:"tv",
  title:"Farnsworth Invents Electronic TV",
  wiki:"Philo Farnsworth",
  summary:"Philo Farnsworth, a 21-year-old self-taught inventor who conceived the idea as a farm boy watching furrowed fields, transmits the first fully electronic television picture; Zworykin's iconoscope camera tube follows, and a long patent war with RCA's David Sarnoff begins.",
  importance:"Farnsworth realized an electron beam could scan an image in back-and-forth lines like furrows in a field — and in 1927 he transmitted the first all-electronic TV picture, the principle behind every television set since. The same year Vladimir Zworykin demonstrated the iconoscope camera tube for Westinghouse and then RCA, whose powerful chief David Sarnoff backed him in years of patent battles. RCA finally paid Farnsworth royalties in 1939, but the war suspended TV sales before he could profit — the lone inventor outmaneuvered by the corporation.",
  impact:{
    communications:"The fundamental invention of modern, all-electronic television is achieved.",
    power:"A lone inventor's core patent is ground down by RCA's corporate and legal might.",
    technology:"The electron beam replaces the spinning disk as television's engine." },
  causes:["tvprecursors","baird1925"], effects:["ntsc1941","colortv"] },

{ id:"ntsc1941", year:1941, date:"1939–1941", era:4, cat:"tv",
  title:"The Broadcast Standard Is Set",
  wiki:"NTSC",
  summary:"RCA televises FDR opening the 1939 World's Fair — the first president on television — and in 1941 the FCC sets the NTSC black-and-white standard (525 lines, 30 frames per second) that U.S. sets will use for sixty years. Then World War II halts civilian TV entirely.",
  importance:"RCA's 1939 World's Fair broadcast, with Roosevelt the first president to appear on screen, announced television as a consumer product, and the FCC's 1941 NTSC standard fixed the technical format American TV would keep until the digital transition. Then the war intervened: set sales were suspended, factories converted, and the radar and radio advances perfected for combat returned to dramatically improve postwar television. The standard and the industry were poised; the war merely delayed the explosion.",
  impact:{
    communications:"A single national broadcast standard is fixed for the next sixty years.",
    technology:"Wartime radar and radio research return to supercharge television.",
    power:"The president on screen previews television's coming political centrality." },
  causes:["farnsworth","baird1925"], effects:["licensefreeze","colortv"] },

{ id:"licensefreeze", year:1948, date:"1948–1952", era:5, cat:"tv",
  title:"The Freeze That Made the Networks",
  wiki:"FCC freeze of 1948",
  summary:"The FCC freezes new broadcast licenses for four years to sort out interference and spectrum — and in doing so cements the dominance of NBC, CBS, and ABC, the New York stations that became the de facto national networks while no new entrant could form.",
  importance:"Meant as a technical pause to study interference, the 1948–52 license freeze became one of the most consequential regulatory acts in media history: with no new stations permitted, the networks that already held New York licenses locked in national dominance, and the three-network system was effectively set by administrative inaction. It is an early, vivid case of regulation shaping market structure permanently. When the freeze lifted in 1952, the Sixth Report and Order allocated the full spectrum and reserved 242 channels for education — the seed of public broadcasting.",
  impact:{
    law:"A technical freeze permanently entrenches the three-network oligopoly.",
    communications:"American broadcasting's geography and power structure are set for decades.",
    power:"Regulatory inaction, not competition, decides who controls the airwaves." },
  causes:["ntsc1941","communicationsact"], effects:["colortv","cableorigin","publicbroadcasting"] },

{ id:"colortv", year:1953, date:"1953", era:5, cat:"tv",
  title:"The Color Standard War",
  wiki:"Color television",
  summary:"The FCC approves RCA's color standard over CBS's incompatible system — because RCA's color works on the 12 million black-and-white sets already in homes while CBS's does not. National color broadcasting begins; by 1955 nearly every U.S. household has a TV.",
  importance:"The 1953 color decision turned on backward compatibility: CBS had a technically elegant system that would have orphaned every existing set, while RCA's worked with the installed base, and the FCC chose continuity. It was a defining lesson in how installed bases, not pure merit, decide standards — one that would echo through every later format war. By mid-decade television was nearly universal in American homes, watched hours a day, the dominant medium of national life.",
  impact:{
    communications:"A compatible color standard reaches the existing installed base of sets.",
    technology:"Backward compatibility, not elegance, wins the standards war.",
    society:"Television completes its conquest of the American household." },
  causes:["ntsc1941","farnsworth"], effects:["nixonkennedy"] },

{ id:"nixonkennedy", year:1960, date:"1960", era:5, cat:"tv",
  title:"The First Televised Debate",
  wiki:"Kennedy–Nixon debates",
  summary:"The Kennedy–Nixon debate is the first televised presidential debate — and radio listeners think Nixon won while TV viewers think Kennedy did, launching sixty years of argument about television's power to decide elections.",
  importance:"The split verdict — radio for Nixon, television for Kennedy — became the founding myth of the TV age in politics: that appearance, comfort, and image on screen could outweigh argument, and perhaps swing an election. Whether or not it decided 1960, it permanently changed how candidates campaigned, forcing every politician to master the medium. Television had become not just a witness to power but an arbiter of it.",
  impact:{
    power:"Television is credited with the power to shape, even decide, an election.",
    communications:"Political performance is reorganized around the demands of the camera.",
    society:"Image and appearance enter the center of democratic choice." },
  causes:["colortv"], effects:["vastwasteland","tvcollective"] },

{ id:"vastwasteland", year:1961, date:"May 9, 1961", era:5, cat:"tv",
  title:"The 'Vast Wasteland' Speech",
  wiki:"Newton Minow",
  summary:"New FCC chairman Newton Minow tells broadcasters that if they watch their own programming they will see 'a vast wasteland' of game shows, violence, and screaming commercials — the most famous statement about television ever made, sparking a decade of public-broadcasting activism.",
  importance:"Minow's challenge to the National Association of Broadcasters — to sit and watch a full day of their own output — crystallized the gap between television's public-interest obligation and its commercial reality, and named it unforgettably. The 'vast wasteland' became the rallying cry for those who believed scarce public airwaves should serve more than advertisers, and it led directly to the public-broadcasting movement and the creation of PBS. It is the high-water mark of the public-interest ideal in American television.",
  impact:{
    communications:"The public-interest standard is wielded as a moral indictment of programming.",
    power:"A regulator reframes commercial television as a betrayal of the public trust.",
    society:"The phrase galvanizes the movement that produces public broadcasting." },
  causes:["nixonkennedy","communicationsact"], effects:["publicbroadcasting"] },

{ id:"tvcollective", year:1963, date:"1963–1969", era:5, cat:"tv",
  title:"Television as Collective Reality",
  wiki:"Assassination of John F. Kennedy",
  summary:"Four days of continuous coverage of the Kennedy assassination — including Oswald's murder live on air — and then the 1969 moon landing watched by 600 million prove television's unmatched power to make a nation, and a planet, experience the same moment at once.",
  importance:"In November 1963 a nation grieved together in real time, watching the assassination's aftermath and even a killing broadcast live — the first collective trauma experienced through the screen. Six years later 600 million people watched the moon landing simultaneously, the largest shared audience in history to that point. Together they established television's defining power: to define collective reality, to unite or to traumatize a whole society in a single instant, across every political line.",
  impact:{
    power:"Television proves it can make a nation share one experience in real time.",
    communications:"Live coverage becomes the medium through which a society processes events.",
    society:"Collective reality is, for the first time, broadcast and simultaneous." },
  causes:["nixonkennedy"], effects:["cnn"] },

{ id:"publicbroadcasting", year:1967, date:"1967–1969", era:5, cat:"tv",
  title:"Public Broadcasting and Sesame Street",
  wiki:"Public Broadcasting Act of 1967",
  summary:"The Public Broadcasting Act creates the Corporation for Public Broadcasting and what becomes PBS — a direct answer to Minow's challenge — and in 1969 Sesame Street premieres, the most research-based children's program ever made, built to close the gap between rich and poor children.",
  importance:"Acting on the conviction that commercial television could not serve every public need, Congress built a noncommercial system, and PBS became its centerpiece. Sesame Street, launched in 1969, embodied the ideal: rigorously researched, explicitly designed to give poorer children the early learning their wealthier peers received, it became the most-watched children's program on earth. Public broadcasting was the institutional realization of the public-interest premise that justified all broadcast regulation.",
  impact:{
    communications:"A noncommercial public broadcasting system is created by federal law.",
    society:"Children's television is made an instrument of educational equity.",
    power:"The state affirms that some media needs cannot be left to the market." },
  causes:["vastwasteland","licensefreeze"], effects:["childrenstvact"] },

{ id:"redlion", year:1969, date:"1969", era:5, cat:"tv",
  title:"Red Lion: Why Broadcast Is Different",
  wiki:"Red Lion Broadcasting Co. v. FCC",
  summary:"The Supreme Court upholds the Fairness Doctrine, ruling that the scarcity of broadcast spectrum justifies content regulation that would be unconstitutional for any other medium — the constitutional foundation on which all broadcast regulation rests.",
  importance:"Red Lion answered the question beneath all broadcast law: how can the government impose balance and content duties on broadcasters without violating the First Amendment? Because spectrum is scarce and publicly owned, the Court held, those licensed to use it can be required to serve the whole public — a rationale that applies to broadcast alone and to no newspaper, cable channel, or website. That single premise authorized the Fairness Doctrine, equal-time rules, and children's mandates — and it is exactly the premise streaming would later dissolve.",
  impact:{
    law:"Spectrum scarcity is held to justify content regulation unique to broadcasting.",
    communications:"Broadcast is constitutionally distinguished from every other medium.",
    power:"The legal foundation for ninety years of public-interest obligation is set." },
  causes:["fairnessdoctrine"], effects:["fairnessrepeal","cableact1984","streamingvoid"] },

{ id:"cableorigin", year:1948, date:"1948", era:5, cat:"tv",
  title:"Cable Is Born in the Mountains",
  wiki:"Cable television",
  summary:"Where the Appalachians and Rockies block the broadcast signal, John Walson runs a wire from a mountaintop antenna to his Pennsylvania store and customers' homes — the first cable system. Cable begins not as a business idea but as a fix for invisible television.",
  importance:"Cable's origin is geography, not ambition: in valleys and behind ridges, people simply could not receive the broadcasts city dwellers took for granted, and the license freeze made it worse. Walson's 1948 community antenna — and similar systems by Ed Parsons in Oregon and Robert Tarlton's coaxial build in Lansford — were essentially very long, sophisticated antennas serving whole towns. For years cable carried only what it could pull from the air; the question of whether a wire that carries television is 'broadcasting' would soon decide whether the FCC could touch it at all.",
  impact:{
    communications:"The first cable systems extend broadcast reach into blocked terrain.",
    technology:"Coaxial cable lets one wire carry many channels into the home.",
    law:"Whether a signal-carrying wire is 'broadcasting' becomes the foundational question." },
  causes:["licensefreeze"], effects:["catvregulation","hbo"] },

{ id:"catvregulation", year:1965, date:"1959–1972", era:5, cat:"tv",
  title:"The FCC Claims the Wire",
  wiki:"Must-carry",
  summary:"The FCC first says it has no jurisdiction over cable (1959), then reverses: by 1965 it imposes 'must-carry' (cable must include local stations) and program-duplication limits, and by 1972 a full federal cable regime — explicitly protecting the broadcasters it licenses over the cable it does not.",
  importance:"As microwave relays let cable import distant cities' signals and undercut local affiliates, the FCC abandoned its hands-off stance and asserted authority over the wire. The 1965 rules created must-carry — forcing cable to carry local broadcasters — and barred same-day duplication, and the 1972 framework made cable comprehensively federal. The thrust was unmistakable: the agency protected the broadcast industry it licensed against the cable industry it did not, the recurring pattern of incumbent capture in this story.",
  impact:{
    law:"The FCC asserts comprehensive jurisdiction over cable television.",
    communications:"Must-carry forces cable to protect the local broadcasters it competes with.",
    power:"Regulation is shaped to shield the licensed incumbent from the unlicensed rival." },
  causes:["cableorigin"], effects:["copyrightact1976","cable1992"] },

{ id:"hbo", year:1972, date:"1972–1975", era:5, cat:"tv",
  title:"HBO and the Satellite That Made Cable National",
  wiki:"HBO",
  summary:"HBO launches in 1972 as the first premium pay-cable channel — the first time Americans pay specifically for content — and in 1975 transmits the 'Thrilla in Manila' by satellite, turning cable from a local reception utility into a national distribution system overnight.",
  importance:"HBO invented the business model that would sustain the entire cable industry: viewers paying directly for programming unavailable on advertiser-supported broadcast. Then its 1975 satellite transmission of the Ali–Frazier fight removed cable's geographic limit at a stroke — any system in the country could now receive the same feed simultaneously. Satellite distribution converted cable from a long antenna into a national medium, and the channels that followed — ESPN, CNN, MTV — were built on the architecture HBO proved.",
  impact:{
    communications:"Pay-per-content television is invented, breaking the free-to-viewer model.",
    technology:"Satellite distribution turns local cable into a national network overnight.",
    power:"A new programming economy emerges outside broadcast's advertiser model." },
  causes:["cableorigin"], effects:["cnn","mtv","backyarddish","copyrightact1976"] },

{ id:"copyrightact1976", year:1976, date:"1976", era:5, cat:"tv",
  title:"Cable Must Pay for the Signal",
  wiki:"Copyright Act of 1976",
  summary:"The Copyright Act of 1976 ends cable's free ride: for the first time, cable systems must pay royalties for the broadcast signals they retransmit, through a compulsory license at statutory rates administered by the Copyright Office.",
  importance:"For decades cable had retransmitted broadcasters' programming without paying a cent, a free ride the broadcasters bitterly resented. The 1976 Act resolved it with a compulsory license — cable pays statutory rates rather than negotiating each signal individually — establishing the principle that carrying someone's content has a price. That principle, refined into the retransmission-consent system of 1992, would eventually become the engine of the carriage blackouts that black out millions of homes today.",
  impact:{
    law:"Cable is required to pay royalties for retransmitting broadcast signals.",
    communications:"A statutory licensing system replaces decades of free retransmission.",
    power:"The price of carrying content is established — seed of the later carriage wars." },
  causes:["catvregulation","hbo"], effects:["cable1992"] },

{ id:"cnn", year:1980, date:"1980", era:5, cat:"tv",
  title:"CNN and the Birth of Breaking News",
  wiki:"CNN",
  summary:"Ted Turner launches CNN, the first 24-hour news network — satellite-distributed and cable-exclusive — transforming news from scheduled daily programs into a constant stream and making 'breaking news' a permanent mode. Turner's WTBS superstation and ESPN had already proven cable-native channels could work.",
  importance:"CNN abolished the news cycle: where networks had delivered news in fixed evening blocks, CNN ran it continuously, inventing the perpetual live feed and the idea that news is always breaking somewhere. Built on the satellite architecture HBO pioneered and following Turner's WTBS superstation and the cable-only ESPN, it proved cable could be a complete alternative to broadcast, not a mere relay. The always-on news stream it created would shape politics, crisis, and attention for the next half-century.",
  impact:{
    communications:"News becomes a continuous 24-hour stream rather than scheduled programs.",
    power:"The permanent live-news feed reshapes politics and crisis response.",
    society:"'Breaking news' becomes a constant condition of public life." },
  causes:["hbo","tvcollective"], effects:["streamingwars"] },

{ id:"mtv", year:1981, date:"1981", era:5, cat:"tv",
  title:"MTV: The Single-Format Channel",
  wiki:"MTV",
  summary:"MTV launches as the first channel built entirely around one content format — music videos — and in doing so reshapes popular music, youth culture, and advertising at once, proving cable could be a cultural force, not just a distribution pipe.",
  importance:"MTV demonstrated that a cable channel could organize itself around a single format and a single demographic, and become a cultural engine in the process — remaking how music was made, marketed, and consumed, and how brands reached the young. It was proof that cable's abundance of channels enabled narrowcasting: programming aimed not at the mass audience broadcast needed but at a specific slice of it. The targeted, format-defined channel became the template for the hundreds that followed.",
  impact:{
    communications:"The single-format, demographically-targeted channel is born.",
    society:"Music, youth identity, and advertising are reshaped by the video format.",
    power:"Narrowcasting to a slice of the audience displaces broadcast's mass model." },
  causes:["hbo"], effects:["streamingwars"] },

{ id:"backyarddish", year:1984, date:"1981–1985", era:5, cat:"tv",
  title:"The Free Satellite Era Ends",
  wiki:"Satellite television",
  summary:"Hundreds of thousands of Americans buy 10-foot backyard dishes and pull HBO, ESPN, and CNN out of the sky for free — until 1984, when HBO moves to scramble its satellite feed with VideoCipher encryption, forcing dish owners to subscribe or go dark.",
  importance:"The satellite signals beamed to cable headends were unencrypted, and entrepreneurs realized anyone with a dish could receive them — so a vast gray market of backyard TVRO dishes bloomed, receiving premium cable for nothing. HBO's 1984 decision to scramble with VideoCipher II ended the free era and enraged the dish community, setting off a cat-and-mouse war of encryption and piracy that ran for years and cost the industry hundreds of millions. It was an early, pure instance of the signal-security battles that all of digital media would inherit.",
  impact:{
    communications:"Open satellite feeds create, then lose, a vast free-television gray market.",
    technology:"Signal encryption and piracy begin their decades-long arms race.",
    law:"Unauthorized reception of scrambled signals becomes a legal battleground." },
  causes:["hbo"], effects:["captainmidnight","cableact1984"] },

{ id:"captainmidnight", year:1986, date:"April 27, 1986", era:5, cat:"tv",
  title:"Captain Midnight Hijacks HBO",
  wiki:"Captain Midnight (HBO)",
  summary:"A Florida satellite dealer ruined by HBO's scrambling hijacks HBO's uplink mid-movie to post 'Good evening HBO from Captain Midnight. $12.95/month? No way!' Congress responds by making satellite hijacking a felony under the 1986 Electronic Communications Privacy Act.",
  importance:"John MacDougall's 90-second on-air protest — broadcast to HBO's entire audience from his transmitter station — dramatized the fury of the dish owners cut off by scrambling, and exposed how vulnerable satellite signals were to interception. Congress answered by criminalizing satellite hijacking through the same Electronic Communications Privacy Act that reshaped wiretap and email law, and the industry built transmitter-identification systems to trace intruders. The unsolved 1987 'Max Headroom' broadcast intrusion in Chicago soon showed the vulnerability was far from closed.",
  impact:{
    law:"Satellite signal hijacking is made a felony under the 1986 ECPA.",
    communications:"The vulnerability of broadcast and satellite signals is laid bare on air.",
    surveillance:"Transmitter-identification systems are built to police the airwaves." },
  causes:["backyarddish"], effects:["ecpa"] },

{ id:"cableact1984", year:1984, date:"1984", era:5, cat:"tv",
  title:"Deregulating Cable",
  wiki:"Cable Communications Policy Act of 1984",
  summary:"The Cable Communications Policy Act deregulates basic cable rates and strengthens operators' franchise rights, while banning phone companies from offering cable in their own areas. With no competitive check, cable prices begin rising sharply.",
  importance:"The Reagan-era deregulation freed cable operators from rate regulation and weakened local franchising authorities' power over channel lineups, on the theory that the market would discipline prices. It did the opposite: barred from telephone-company competition and unconstrained by regulation, cable rates rose 56% between 1986 and 1991 against 18% inflation, with the GAO attributing much of it to raw market power. The 1984 experiment was a demonstrable failure for consumers — and the direct cause of the re-regulation that followed eight years later.",
  impact:{
    law:"Cable rates are deregulated and operators' franchise rights strengthened.",
    power:"Barring phone-company competition leaves cable a local monopoly.",
    society:"Unchecked, cable prices rise far faster than inflation." },
  causes:["redlion","backyarddish"], effects:["cable1992"] },

{ id:"fairnessrepeal", year:1987, date:"1987", era:5, cat:"tv",
  title:"The Fairness Doctrine Falls",
  wiki:"FCC fairness doctrine",
  summary:"Reagan's FCC abolishes the Fairness Doctrine, arguing it chilled speech by making broadcasters avoid controversy. Talk radio explodes as stations, no longer required to balance political content, choose not to — and the polarization of American media begins.",
  importance:"For decades the Fairness Doctrine had required broadcasters to present controversial issues in a balanced way; the FCC repealed it on the argument that the duty to offer balance actually deterred broadcasters from covering controversy at all. The immediate effect was the rise of unbalanced, opinionated talk radio; the long-term effect was the steady polarization of American political media, as outlets discovered that one-sided content drew larger, more loyal audiences. The repeal is a foundational moment in the fracturing of the shared media reality television had once created.",
  impact:{
    law:"The balance requirement on broadcasters is eliminated.",
    communications:"Opinionated talk radio explodes once balance is no longer required.",
    power:"The polarization of American political media accelerates from this point." },
  causes:["redlion","fairnessdoctrine"], effects:["streamingvoid"] },

{ id:"childrenstvact", year:1990, date:"1990", era:6, cat:"tv",
  title:"The Children's Television Act",
  wiki:"Children's Television Act",
  summary:"The first federal law requiring broadcasters to serve the educational needs of children; the FCC must weigh children's programming in license renewals, and by 1997 stations must air at least three hours a week of educational children's content.",
  importance:"Building on the public-interest premise and the public-broadcasting movement, the Children's Television Act made serving children a condition of holding a broadcast license, and the FCC's later three-hours-a-week rule put a concrete floor under it. It was among the most specific applications of the idea that those using public airwaves owe the public something in return. And it would become a centerpiece of the regulatory asymmetry to come: children watching broadcast are protected by it, while children watching streaming are protected by nothing.",
  impact:{
    law:"Broadcasters are required by federal law to serve children's educational needs.",
    society:"A weekly minimum of educational children's programming is mandated.",
    communications:"The public-interest obligation is made concrete for child audiences." },
  causes:["publicbroadcasting"], effects:["vchip","streamingvoid"] },

{ id:"cable1992", year:1992, date:"1992", era:6, cat:"tv",
  title:"Re-Regulation and Retransmission Consent",
  wiki:"Cable Television Consumer Protection and Competition Act of 1992",
  summary:"Over a presidential veto, Congress re-regulates cable: rate regulation is restored, must-carry is revived as economic regulation, and retransmission consent is created — letting each broadcaster choose every three years between guaranteed carriage or negotiated payment. This binary defines broadcast-cable economics for thirty years.",
  importance:"The 1984 deregulation's price explosion drove Congress to reverse course in 1992, overriding President Bush's veto to restore rate caps and revive must-carry — recast as economic rather than content regulation to survive First Amendment challenge (which the Supreme Court upheld in Turner v. FCC, 1997). Its most consequential invention was retransmission consent: a broadcaster could demand payment to be carried instead of taking guaranteed must-carry. That free-or-paid choice created the fee structure — and the leverage — behind every carriage blackout since.",
  impact:{
    law:"Cable is re-regulated; must-carry and retransmission consent are established.",
    communications:"Broadcasters gain the right to demand payment for cable carriage.",
    power:"The retransmission-consent system that drives future blackouts is born." },
  causes:["cableact1984","catvregulation","copyrightact1976"], effects:["telecomact","retranswars","aereo"] },

{ id:"vchip", year:1996, date:"1996", era:6, cat:"tv",
  title:"The V-Chip and TV Ratings",
  wiki:"V-chip",
  summary:"The Telecommunications Act of 1996 mandates V-chip technology in all new TV sets and prompts the TV Parental Guidelines (TV-Y through TV-MA) — the first systematic content rating for television, letting parents block rated programming.",
  importance:"Amid the sweeping deregulation of the 1996 Telecom Act came a rare new content-control mandate: every new television had to include a V-chip that could read program ratings and block content, and the industry created the TV Parental Guidelines to supply those ratings. It was the broadcast-and-cable era's answer to anxieties about violence and sex on screen — a technical, parent-controlled filter rather than a ban. Like the children's mandates, the V-chip would become an artifact of regulatory asymmetry: it governs the television set, but nothing about how a child streams the same content on a phone.",
  impact:{
    law:"Content-blocking V-chip hardware is mandated in all new televisions.",
    society:"The first systematic television content-rating system is created.",
    communications:"Parental control is built into the set, even as deregulation sweeps elsewhere." },
  causes:["childrenstvact","telecomact"], effects:["streamingvoid"] },

{ id:"digitaltransition", year:2009, date:"2006–2009", era:6, cat:"tv",
  title:"The Digital Switch",
  wiki:"Digital television transition in the United States",
  summary:"Congress mandates the end of analog broadcasting; by June 2009 all full-power stations transmit digital only, and the freed analog spectrum is auctioned for $19 billion — the first change to the technical standard of American television since 1941.",
  importance:"The digital transition retired the NTSC standard that had defined American television for nearly seventy years, sharpening pictures, multiplying channels, and — crucially — freeing a swath of valuable spectrum that the government auctioned for $19 billion, much of it to the mobile-data carriers whose networks would soon deliver video themselves. It was the moment broadcast's foundational resource, spectrum, was partly reallocated to the internet era that would eclipse it. The standard changed for the first time in a lifetime, just as the medium began its decline.",
  impact:{
    technology:"American television's technical standard changes for the first time since 1941.",
    law:"Freed analog spectrum is auctioned for $19 billion to the wireless era.",
    communications:"Broadcast sharpens and multiplies just as streaming begins to rise." },
  causes:["ntsc1941"], effects:["netflixstreaming","cordcutting"] },

{ id:"netflixstreaming", year:2007, date:"2007", era:6, cat:"tv",
  title:"Netflix Starts Streaming",
  wiki:"Netflix",
  summary:"Netflix launches streaming as a supplement to its DVD-by-mail business; within a few years it becomes the primary business, reaching 20 million subscribers by 2010 and beginning to invest in original content. Hulu launches in 2008 as the networks' defensive answer.",
  importance:"Streaming began modestly — a few thousand titles bundled with a DVD subscription — but it carried the seed of television's reinvention: content delivered over the internet, on demand, untethered from spectrum, schedule, or cable box. As it grew, the broadcast networks launched Hulu to avoid ceding digital distribution entirely. The shift to internet delivery would, within a decade, dissolve the very distinction between 'television' and 'internet video,' and with it the spectrum-scarcity premise on which all television regulation rested.",
  impact:{
    communications:"Television begins migrating from spectrum and cable to internet delivery.",
    technology:"On-demand, any-device viewing replaces the schedule and the channel.",
    power:"The shift to the internet erodes the legal premise underpinning broadcast rules." },
  causes:["digitaltransition","sonybetamax"], effects:["houseofcards","cordcutting","streamingwars"] },

{ id:"houseofcards", year:2013, date:"2013", era:7, cat:"tv",
  title:"The Streamer Becomes a Studio",
  wiki:"House of Cards (American TV series)",
  summary:"Netflix debuts House of Cards, the first major original series from a streaming service, and wins an Emmy — becoming studio and broadcaster at once, yet subject to none of the regulatory obligations of either. The same year, the FCC rules that online video distributors fall outside its rules entirely.",
  importance:"With House of Cards, Netflix stopped licensing television and started making it, collapsing the roles of studio and network into one company — and in 2013 the FCC confirmed that such online video distributors were not 'multichannel video programming distributors' under the law, with no public-interest duties, no children's mandates, no indecency rules, no fairness obligations. A new kind of dominant broadcaster had emerged that the entire regulatory apparatus, built between 1934 and 1996, simply did not reach. The regulatory void of streaming opens here.",
  impact:{
    communications:"A streaming service becomes studio and broadcaster in a single entity.",
    law:"The FCC confirms streaming falls outside all broadcast-era obligations.",
    power:"The dominant new form of television is born entirely unregulated." },
  causes:["netflixstreaming"], effects:["euquota","streamingvoid"] },

{ id:"aereo", year:2014, date:"2014", era:7, cat:"tv",
  title:"ABC v. Aereo",
  wiki:"American Broadcasting Cos., Inc. v. Aereo, Inc.",
  summary:"Aereo rents subscribers tiny individual antennas in data centers to stream over-the-air TV without paying retransmission fees; the Supreme Court rules this a 'public performance' requiring copyright permission, and Aereo shuts down within weeks.",
  importance:"Aereo found a clever seam in the law — if each subscriber 'rented' their own antenna, was the company retransmitting at all? — and built a service streaming free broadcast signals without the retransmission fees cable pays. The Supreme Court closed the seam, holding the service a public performance that must pay like any cable operator, and Aereo collapsed almost immediately. The ruling affirmed that internet-delivered broadcast television must play by the same retransmission-consent rules as cable, even as wholly original streaming services escaped regulation entirely — a telling line between old content delivered new and new content delivered new.",
  impact:{
    law:"Internet retransmission of broadcast TV is held subject to copyright and carriage rules.",
    communications:"A loophole for free broadcast streaming is closed by the Court.",
    power:"Retransmitting broadcast is bound by old rules even as pure streaming is not." },
  causes:["cable1992"], effects:["retranswars"] },

{ id:"cordcutting", year:2015, date:"2015", era:7, cat:"tv",
  title:"Cord-Cutting Accelerates",
  wiki:"Cord-cutting",
  summary:"American households cancel cable at historic rates — 385,000 lost in a single quarter in 2015, then below 70% of TV homes by 2020 — as streaming alternatives proliferate. The trend is irreversible.",
  importance:"The cord-cutting wave marked the structural decline of the cable bundle that had organized television economics for forty years: subscribers fled to cheaper, on-demand streaming, and the losses compounded quarter after quarter into the irreversible erosion of the cable subscriber base. By 2020 cable and satellite together fell below 70% of TV households for the first time since the 1980s, and below 60 million subscribers soon after. The regulatory machinery built for a cable-and-broadcast world now governed a medium in steep decline while the platforms inheriting its audience answered to almost no one.",
  impact:{
    communications:"The cable bundle that organized television economics begins collapsing.",
    power:"Audiences migrate to streaming faster than regulation can follow.",
    society:"The shared cable-and-broadcast media world fragments into subscriptions." },
  causes:["netflixstreaming","digitaltransition"], effects:["streamingwars","streamingvoid"] },

{ id:"euquota", year:2016, date:"2016", era:7, cat:"tv",
  title:"Europe Regulates Streaming First",
  wiki:"Audiovisual Media Services Directive",
  summary:"The EU begins requiring streaming services to carry at least 30% European content — the first major binding content regulation of streaming platforms in any major market, as a single global platform now operates under the laws of every nation at once.",
  importance:"As Netflix expanded to 130 countries in 2016, becoming the first truly global television network, content regulation became a jurisdictional thicket — and the EU moved first, mandating that streaming catalogues be at least 30% European and that platforms invest in local production. As with GDPR and the DSA, Europe set the binding rule the United States would not, treating streaming as something to be governed rather than left alone. It was the opening of the global, fragmented effort to subject borderless platforms to national content law.",
  impact:{
    law:"The first binding content quota on streaming platforms is imposed by the EU.",
    communications:"A single global platform is forced to obey divergent national content rules.",
    power:"Europe again sets the regulatory standard the U.S. declines to write." },
  causes:["houseofcards"], effects:["streamingvoid"] },

{ id:"netneutrality", year:2017, date:"2017", era:7, cat:"tv",
  title:"Net Neutrality Repealed",
  wiki:"Net neutrality in the United States",
  summary:"The Trump FCC repeals net neutrality rules that had barred internet providers from throttling traffic — creating the legal possibility that an ISP could degrade a rival's streaming video while prioritizing its own.",
  importance:"Streaming depends on an open pipe: the rules requiring ISPs to treat all traffic equally were what stopped a cable company that also sold internet from quietly throttling Netflix while speeding its own service. The 2017 repeal removed that guarantee, raising the prospect that the owners of the network could tilt the playing field for the video traveling across it. It exposed a deeper vulnerability of the streaming era — that the platforms displacing cable still ride on infrastructure owned, in many cases, by the very cable companies they are displacing.",
  impact:{
    law:"The rule barring ISPs from throttling internet traffic is repealed.",
    communications:"Network owners gain the legal ability to favor their own video.",
    power:"Control of the pipe becomes a lever over the streaming services riding it." },
  causes:["cordcutting"], effects:["streamingwars"] },

{ id:"streamingwars", year:2019, date:"2019–2020", era:7, cat:"tv",
  title:"The Streaming Wars",
  wiki:"Streaming wars",
  summary:"Disney+, Apple TV+, and HBO Max launch within months of one another; every major entertainment company now runs its own direct-to-consumer platform, bypassing broadcast and cable. By 2020 Netflix breaks the all-time Emmy-nomination record.",
  importance:"In 2019 the entire entertainment industry pivoted to direct-to-consumer streaming, each studio pulling its content into its own walled service and competing for subscribers rather than licensing to others — and Netflix, which had not existed as a content producer eight years earlier, set the record for Emmy nominations by any network or studio in 2020. Television's center of gravity had fully shifted to platforms governed by none of the medium's traditional rules. The most prestigious and most watched television was now made by companies the public-interest framework could not touch.",
  impact:{
    communications:"Every major studio becomes a direct-to-consumer streaming platform.",
    power:"Television's prestige and audience shift to entirely unregulated platforms.",
    society:"The bundled, scheduled television experience fragments into subscriptions." },
  causes:["netflixstreaming","cnn","mtv","cordcutting","netneutrality"], effects:["streamingvoid"] },

{ id:"retranswars", year:2017, date:"2009–2026", era:7, cat:"tv",
  title:"The Carriage Blackout Wars",
  wiki:"Retransmission consent",
  summary:"The 1992 retransmission-consent system becomes commercial warfare: fees explode from under $0.5 billion to over $13 billion a year, blackouts hit a record 336 in 2020, and in 2026 a month-long Scripps–Comcast blackout strips local news from dozens of markets — the system meant to protect local broadcasting now routinely blocks it.",
  importance:"The free-or-paid choice Congress created in 1992 to give local broadcasters value turned into a weapon: every three years broadcasters and cable operators play brinkmanship over fees, and when talks fail, the channels simply go dark for viewers who have no say and no remedy. Retransmission fees ballooned thirty-fold, blackouts hit hundreds per year, and disputes like the 1,057-day Viacom–Suddenlink standoff and the 2026 Scripps–Comcast blackout deprived millions of local news, weather, and emergency information. Congress has not revised the framework in over thirty years, and the system designed to preserve local broadcasting now frequently prevents people from watching it.",
  impact:{
    law:"The retransmission-consent system becomes a tool of recurring commercial warfare.",
    communications:"Carriage blackouts routinely cut viewers off from local news and emergency info.",
    power:"Viewers have no representation in disputes that black out their channels." },
  causes:["cable1992","aereo"], effects:["streamingvoid"] },

{ id:"streamingvoid", year:2025, date:"2022–2026", era:7, cat:"tv",
  title:"The Regulatory Void of Streaming",
  wiki:"Over-the-top media service",
  summary:"Broadcast faces strict content, children's, and public-interest rules; cable faces lighter ones; streaming faces essentially none — even as streaming passes broadcast and cable in viewing time. In 2025 the FCC probes CBS over a broadcast interview it would have had zero jurisdiction over had it aired on Paramount+.",
  importance:"By 2024 streaming had overtaken broadcast and cable in total viewing time, yet the regulatory pyramid stood upside down: the most-watched content faced the fewest rules, while over-the-air broadcast — oldest, smallest, and shrinking — bore the heaviest obligations. The FCC's own chair conceded it lacks authority to extend broadcast rules to streaming without Congress, which has not acted. The 2025 CBS probe captured the absurdity precisely — the same interview would have been wholly beyond FCC reach on CBS's own streaming service. The premise that justified ninety years of television regulation, spectrum scarcity, has evaporated, and the law has not been rebuilt to replace it.",
  impact:{
    law:"The dominant form of television operates with essentially no content regulation.",
    communications:"Children streaming face none of the protections children watching broadcast have.",
    power:"Regulation governs the declining medium while the dominant one answers to no one." },
  causes:["houseofcards","cordcutting","streamingwars","euquota","redlion","fairnessrepeal","childrenstvact","vchip","retranswars"], effects:[] }

);
