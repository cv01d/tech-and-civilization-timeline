// SUPPLEMENT — radio, the atlas's clearest regulatory arc: a medium invented by
// physicists, commercialized by engineers, regulated because it created physical chaos
// (spectrum interference, maritime disaster), shaped by two world wars, wielded as
// democracy's greatest tool and totalitarianism's sharpest weapon at once, corrupted by
// payola, polarized by talk radio after the Fairness Doctrine fell, consolidated into
// oligopoly by the 1996 Act, and now in structural decline before a superior technology
// that carries none of radio's public obligations. New cat:"radio" groups these with the
// re-tagged hertz, marconi, titanic, kdka, radioact1927, waroftheworlds cards; cross-links
// the existing audion, communicationsact, fairnessdoctrine, fairnessrepeal, telecomact,
// publicbroadcasting, streamingwars cards. Round one: data only — images to follow.
window.ATLAS_EVENTS.push(

{ id:"maxwell", year:1864, date:"1864", era:3, cat:"radio",
  title:"Maxwell Predicts the Radio Wave",
  wiki:"Maxwell's equations",
  summary:"James Clerk Maxwell publishes his equations for electromagnetism, mathematically predicting electromagnetic waves that travel at the speed of light — describing the physics of radio thirty years before anyone builds it.",
  importance:"Maxwell never built a transmitter; he wrote down the mathematics, and the mathematics said that electric and magnetic fields could ripple through empty space at light-speed. It was one of the great feats of theoretical physics — predicting an entire technology from pure equations — and every wireless device since rides on the waves he described. Radio begins not in a workshop but on a page of mathematics, the deepest root of the whole medium.",
  impact:{
    radio:"The existence of electromagnetic waves is predicted mathematically, before any exist.",
    technology:"Theory describes a technology decades ahead of its invention.",
    communications:"The physical basis of all wireless communication is established on paper." },
  causes:[], effects:["hertz","marconi"] },

{ id:"fessenden", year:1906, date:"December 24, 1906", era:4, cat:"radio",
  title:"The First Voice on the Air",
  wiki:"Reginald Fessenden",
  summary:"Reginald Fessenden broadcasts the first human voice and music — a violin and a Bible reading — to ships at sea from Brant Rock, Massachusetts, proving radio can carry the full richness of sound, not just Morse dots and dashes. The first international radio convention is signed the same year.",
  importance:"Until Fessenden, radio meant code — dots and dashes tapped out by operators; on Christmas Eve 1906 he sent a human voice and music through the air, establishing amplitude modulation (AM) and the very idea of broadcasting. The demonstration passed almost unnoticed, but it opened the path from point-to-point telegraphy to the mass medium radio would become. That same year, 29 nations signed the first international radiotelegraph convention — radio was regulated internationally before any country regulated it at home.",
  impact:{
    radio:"AM broadcasting is born — radio can carry voice and music, not just code.",
    communications:"Point-to-point wireless gives way to the idea of broadcasting to all.",
    law:"The first international radio regulation precedes any national framework." },
  causes:["marconi"], effects:["radioact1912","kdka"] },

{ id:"radioact1912", year:1912, date:"1910–1912", era:4, cat:"radio",
  title:"The Radio Act of 1912",
  wiki:"Radio Act of 1912",
  summary:"After the Wireless Ship Act of 1910 and the Titanic disaster, Congress asserts authority over all U.S. radio — requiring licenses, assigning wavelengths, and banishing amateurs to the short wavelengths that, it turns out, travel farthest of all.",
  importance:"The first comprehensive American radio law put the Secretary of Commerce in charge of licensing and frequency assignment, a direct response to maritime catastrophe and the chaos of the airwaves. Its most famous miscalculation was exiling amateur operators to the 'useless' short wavelengths, which proved capable of spanning the globe. Its deeper flaw was that it gave the Secretary no power to deny a license or truly enforce assignments — a gap that would let the airwaves descend into cacophony by the mid-1920s.",
  impact:{
    radio:"The U.S. asserts licensing authority over all radio transmission.",
    law:"Maritime disaster drives the first comprehensive national radio regulation.",
    communications:"Amateurs are pushed to shortwave — which proves to travel farthest of all." },
  causes:["fessenden","titanic"], effects:["kdka","radioact1927"] },

{ id:"tollbroadcasting", year:1922, date:"1922", era:4, cat:"radio",
  title:"Toll Broadcasting: Radio Sells Airtime",
  wiki:"WEAF (AM)",
  summary:"AT&T's WEAF in New York sells its first airtime to advertisers — the 'toll broadcasting' model — establishing the advertiser-supported business model that becomes the permanent financial foundation of commercial radio and, later, television.",
  importance:"In radio's first years no one knew how broadcasting would pay for itself; AT&T's answer in 1922 was to rent airtime to advertisers, as it rented telephone lines, and the 'toll' model stuck. Advertiser-supported, free-to-listener broadcasting became the economic engine of American radio and the template television would inherit. The decision shaped the medium's whole character — content built to gather audiences for advertisers, the bargain that still underlies commercial broadcasting a century later.",
  impact:{
    radio:"The advertiser-supported, free-to-listener business model of radio is born.",
    communications:"Broadcasting's permanent commercial foundation is established.",
    power:"Content is reorganized to assemble audiences for advertisers." },
  causes:["kdka"], effects:["nbc1926","payola"] },

{ id:"nbc1926", year:1926, date:"1926–1927", era:4, cat:"radio",
  title:"The Networks: NBC and CBS",
  wiki:"NBC",
  summary:"RCA, AT&T, GE, and Westinghouse form NBC, the first radio network linking stations coast-to-coast by telephone line; CBS follows in 1927. The two-network duopoly that will define American broadcasting for decades begins.",
  importance:"Networking — interconnecting local stations by leased telephone lines so all could carry the same program — turned radio from a scatter of local broadcasters into a national medium with a shared culture, and NBC, soon joined by CBS, dominated it. The duopoly concentrated unprecedented power over what the whole country heard, and it built the institutional structure that television would directly inherit. National broadcasting, with its reach and its concentration, begins here.",
  impact:{
    radio:"Coast-to-coast networks create a national broadcast medium and a shared culture.",
    power:"Two networks gain unprecedented concentrated control over what a nation hears.",
    communications:"The network structure later inherited by television is established." },
  causes:["tollbroadcasting"], effects:["chainbroadcasting","firesidechats"] },

{ id:"fmradio", year:1928, date:"1928–1934", era:4, cat:"radio",
  title:"Armstrong's FM — and Its Suppression",
  wiki:"Edwin Howard Armstrong",
  summary:"Edwin Howard Armstrong demonstrates wideband FM, eliminating the static of AM with dramatically superior sound — but RCA, whose AM empire it threatens, buries the technology and litigates Armstrong into ruin; he dies by suicide in 1954, his widow later winning the patent suits.",
  importance:"FM was plainly better — clear, static-free, high-fidelity — yet because it threatened RCA's AM dominance, the company suppressed rather than adopted it, and tied Armstrong up in twenty years of patent litigation that destroyed him financially and personally. RCA's refusal delayed FM's adoption by some thirty years, one of the most consequential corporate decisions in broadcast history. Armstrong's tragedy is the atlas's starkest case of a superior technology buried by the incumbent it threatened.",
  impact:{
    radio:"Static-free, high-fidelity FM is invented — then suppressed for a generation.",
    power:"An incumbent buries a superior technology to protect its existing empire.",
    technology:"FM's thirty-year delay shows how patent power can stall better engineering." },
  causes:["nbc1926"], effects:["fmrock"] },

{ id:"firesidechats", year:1933, date:"1933–1945", era:4, cat:"radio",
  title:"The Fireside Chats — and the Propaganda Weapon",
  wiki:"Fireside chats",
  summary:"Franklin Roosevelt's radio addresses bring the president's voice directly into American living rooms through Depression and war; Churchill does the same in Britain — while Hitler makes radio his primary propaganda instrument. The same medium serves democracy and totalitarianism at once.",
  importance:"Radio's intimacy — a trusted voice in the home — gave Roosevelt a bond with citizens that no newspaper could match, steadying a frightened nation across the Depression and the war in some thirty 'fireside chats.' The very same power served Hitler, who made radio the central instrument of Nazi propaganda, and Churchill, who rallied Britain by it. Radio revealed the double edge of mass media: the most effective tool of democratic leadership and of totalitarian control were one and the same technology.",
  impact:{
    radio:"The leader's voice in the living room becomes a new instrument of governing.",
    power:"The same medium serves democratic leadership and totalitarian propaganda alike.",
    communications:"Mass media's double edge — to inform and to manipulate — is laid bare." },
  causes:["nbc1926"], effects:["waroftheworlds"] },

{ id:"chainbroadcasting", year:1941, date:"1941–1943", era:4, cat:"radio",
  title:"Breaking Up the Networks",
  wiki:"American Broadcasting Company",
  summary:"The FCC's Report on Chain Broadcasting forces RCA to divest one of NBC's two networks; the NBC Blue Network is sold and becomes ABC in 1943 — the first major antitrust action against broadcasting, proving the FCC would restructure ownership, not just manage spectrum.",
  importance:"The FCC's 1941 ruling that no company should operate two competing national networks forced RCA to sell NBC's Blue Network, which became ABC — establishing that the public-interest standard gave the agency power over industry structure itself, not merely frequencies. It was the first great demonstration that a broadcast license could be wielded to break up concentrated media ownership. The principle — that the FCC could reshape who owns the airwaves — would echo through every later consolidation fight.",
  impact:{
    radio:"The FCC forces the breakup of a network, creating ABC.",
    power:"The public-interest standard is used to restructure media ownership.",
    law:"Antitrust enters broadcasting — the license becomes a tool against concentration." },
  causes:["nbc1926"], effects:["clearchannel"] },

{ id:"top40dj", year:1950, date:"1950s", era:5, cat:"radio",
  title:"The Disc Jockey and Top 40",
  wiki:"Top 40",
  summary:"As television steals radio's dramas, radio reinvents itself around recorded music and the personality DJ; the number of disc jockeys explodes from ~250 in 1950 to over 5,000 by 1957, and the DJ who 'breaks' a record becomes a cultural kingmaker.",
  importance:"Hollowed out by television, radio rebuilt itself around the cheapest content imaginable — playing records — and the disc jockey became its star, the gatekeeper whose airplay could make or break a song and a career. As rock 'n' roll broke nationally, DJs like Alan Freed wielded enormous cultural power over what a generation heard. That power, and the money chasing it, set up radio's defining corruption: the temptation to sell the playlist.",
  impact:{
    radio:"Radio reinvents itself around recorded music and the personality DJ.",
    society:"The disc jockey becomes a cultural kingmaker for a generation's music.",
    power:"Control of airplay becomes immensely valuable — and corruptible." },
  causes:["nbc1926"], effects:["payola","fmrock"] },

{ id:"payola", year:1959, date:"1959–2022", era:5, cat:"radio",
  title:"Payola: Buying the Playlist",
  wiki:"Payola",
  summary:"The 1959 congressional hearings expose record companies secretly paying DJs for airplay — 335 DJs admit to $263,000 in 'fees'; Alan Freed is ruined. Congress makes undisclosed pay-for-play a federal crime in 1960. The practice never dies: it resurfaces in Spitzer's 2005 Sony BMG case and a 2022 iHeartMedia settlement.",
  importance:"Payola laid bare the rot beneath the playlist: labels buying airplay with cash, gifts, and royalties while listeners believed they were hearing the best new music on merit. The 1959 hearings destroyed Alan Freed and prompted a 1960 law requiring disclosure of paid airplay — the principle that listeners must know when content is bought. Yet the practice simply mutated, routed through 'independent promoters' in Spitzer's 2005 case and reappearing as disguised promotional content in a 2022 iHeartMedia settlement, 63 years on. The corruption proved structural, not incidental.",
  impact:{
    radio:"Secret pay-for-play is exposed and made a federal crime requiring disclosure.",
    law:"Listeners gain the right to know when airplay is commercially bought.",
    power:"The corruption proves structural — recurring across six decades despite the law." },
  causes:["top40dj","tollbroadcasting"], effects:["clearchannel"] },

{ id:"fmrock", year:1965, date:"1961–1971", era:5, cat:"radio",
  title:"FM Rises and the Album-Rock Revolution",
  wiki:"FM broadcasting",
  summary:"The FCC finally forces FM stations to stop simulcasting their AM siblings and originate their own programming; FM's superior sound becomes the home of album-oriented rock and the counterculture, surpassing AM by the 1970s as AM shifts toward news and talk.",
  importance:"After languishing for a quarter-century under RCA's suppression, FM was rehabilitated by regulation: FCC rules in the 1960s forced FM stations to develop distinct programming, and young listeners discovered that FM's fidelity was perfect for the album rock of the counterculture. FM overtook AM in the 1970s, pushing AM toward the news-and-talk formats that would define its later life. The same period saw public radio born (NPR, 1970) and the FCC's brief, absurd attempt to police 'drug lyrics' — a foretaste of the content-regulation fights to come.",
  impact:{
    radio:"FM is rehabilitated by regulation and becomes the home of album rock.",
    society:"FM's fidelity makes it the sound of the counterculture; AM turns to talk.",
    communications:"Public radio is born and the formats of modern radio take shape." },
  causes:["fmradio","top40dj"], effects:["howardstern"] },

{ id:"howardstern", year:1988, date:"1988–2006", era:5, cat:"radio",
  title:"Howard Stern and the Indecency Wars",
  wiki:"Howard Stern",
  summary:"Howard Stern's explicit content triggers the first major wave of FCC indecency enforcement; repeated fines through the 1980s–90s define the limits of broadcast speech in a running battle that ends only when Stern flees to satellite radio in 2006, beyond the FCC's reach.",
  importance:"Stern became the test case for how far broadcast speech could go, drawing record indecency fines that mapped the boundaries of the FCC's authority over the public airwaves through years of conflict. His eventual escape to satellite radio — a subscription service the FCC could not touch — exposed the central fault line of broadcast regulation: rules grounded in the public ownership of spectrum simply do not reach media delivered by other means. Stern's flight previewed the regulatory asymmetry that streaming would later make total.",
  impact:{
    radio:"FCC indecency enforcement is defined through a running battle over Stern's content.",
    law:"The limits of broadcast speech regulation are mapped case by case.",
    communications:"Stern's escape to satellite exposes that spectrum-based rules don't reach new media." },
  causes:["fmrock","fairnessrepeal"], effects:["satelliteradio","janetjackson"] },

{ id:"clearchannel", year:1996, date:"1996–2006", era:6, cat:"radio",
  title:"Clear Channel and the Homogenization of Radio",
  wiki:"IHeartMedia",
  summary:"The 1996 Telecommunications Act lifts radio ownership caps; Clear Channel explodes from 40 to over 1,240 stations, replacing local DJs with syndicated national voices, gutting local news, and standardizing formats across hundreds of markets. The local station as community institution all but disappears.",
  importance:"By eliminating national ownership caps, the 1996 Act unleashed the fastest consolidation in radio history: Clear Channel (later iHeartMedia) grew thirtyfold, centralizing programming and piping syndicated voices into hundreds of markets while local DJs and local news vanished. The community institution radio had been since the 1920s gave way to homogenized national formats delivered from distant headquarters. It is the atlas's clearest case of deregulation converting a local medium into a consolidated oligopoly.",
  impact:{
    radio:"Ownership deregulation triggers mass consolidation and the loss of local radio.",
    power:"One company comes to dominate American radio across nearly every market.",
    society:"The local station as community institution is replaced by syndicated national formats." },
  causes:["chainbroadcasting","payola","telecomact"], effects:["satelliteradio","iheartbankruptcy"] },

{ id:"satelliteradio", year:1997, date:"1997–2008", era:6, cat:"radio",
  title:"Satellite Radio: A Refuge From Regulation",
  wiki:"Satellite radio",
  summary:"XM and Sirius launch national subscription satellite radio — hundreds of ad-free channels, beyond FCC content rules — positioned as what FM was meant to be before consolidation degraded it; in 2006 Howard Stern's move validates it, and in 2008 the two merge into a regulator-approved monopoly.",
  importance:"Satellite radio offered what consolidated broadcast no longer did — variety, fidelity, and freedom from the FCC's indecency rules — and Stern's 2006 defection proved it a genuine refuge from broadcast regulation. When XM and Sirius merged in 2008, regulators approved the monopoly on the theory that satellite competed with broadcast and the emerging streaming services. It was an early sign that the audio market the FCC had governed since 1927 was fragmenting into media it could barely reach.",
  impact:{
    radio:"Subscription satellite radio offers an ad-free refuge beyond FCC content rules.",
    law:"A satellite monopoly is approved on the logic that it competes with broadcast and streaming.",
    communications:"The audio market begins fragmenting into media the FCC cannot govern." },
  causes:["howardstern","clearchannel"], effects:["pandora","radiodecline"] },

{ id:"janetjackson", year:2004, date:"February 1, 2004", era:6, cat:"radio",
  title:"The Wardrobe Malfunction and the Indecency Crackdown",
  wiki:"Super Bowl XXXVIII halftime show controversy",
  summary:"A half-second of nudity during the Super Bowl halftime show — seen by some 100 million — triggers the largest broadcast-indecency enforcement campaign in FCC history; Congress raises maximum fines from $27,500 to $500,000 per violation, accelerating Howard Stern's flight to satellite.",
  importance:"The fleeting image during the 2004 halftime show set off a moral panic and the most aggressive indecency crackdown the FCC had ever mounted, with Congress multiplying the fines nearly twentyfold. It made broadcast a riskier place for edgy content and pushed figures like Stern toward satellite and, later, the whole audience toward platforms the FCC could not police. The episode crystallized the paradox: the most heavily policed medium was the one rapidly losing its audience to unregulated alternatives.",
  impact:{
    radio:"The largest broadcast-indecency enforcement campaign in FCC history is launched.",
    law:"Congress raises indecency fines nearly twentyfold per violation.",
    communications:"Tightening broadcast rules push content and audiences toward unregulated media." },
  causes:["howardstern"], effects:["satelliteradio"] },

{ id:"pandora", year:2008, date:"2008", era:6, cat:"radio",
  title:"Pandora and the Algorithmic Station",
  wiki:"Pandora (service)",
  summary:"Pandora launches the first algorithmically personalized internet radio, building each listener a custom station from their tastes — and fights the Copyright Royalty Board over per-stream royalty rates it argues are unsustainable. The music-discovery function of radio begins migrating to algorithms.",
  importance:"Pandora replaced the DJ's curation with a recommendation engine, building a unique station for each listener and pioneering the personalized streaming model — while exposing the brutal economics of internet radio in its fights over royalty rates set by the Copyright Royalty Board. It moved radio's core function, music discovery, from human gatekeepers to algorithms, and from the public airwaves to private servers. The medium the FCC had governed for eighty years was being replaced by one it did not govern at all.",
  impact:{
    radio:"Algorithmic personalization begins replacing the DJ's curation of music.",
    law:"Streaming royalty rates set by the Copyright Royalty Board become a defining battle.",
    communications:"Music discovery migrates from public airwaves to private algorithms." },
  causes:["satelliteradio"], effects:["spotify","radiodecline"] },

{ id:"spotify", year:2011, date:"2011", era:6, cat:"radio",
  title:"Spotify and the End of Radio's Bargain",
  wiki:"Spotify",
  summary:"Spotify launches in the U.S.: on-demand, ad-free music for about $10 a month, offering radio's core promise — free or cheap music — without commercials, schedules, or DJs. For listeners under 40, the algorithm replaces the radio dial.",
  importance:"Spotify dissolved radio's century-old bargain — endure the ads and the schedule in exchange for free music — by offering everything, on demand, for a small fee, with a recommendation engine that did the discovering. It captured the under-40 audience that radio depended on, and it carried none of broadcast's public-interest obligations: no indecency rules, no equal time, no children's programming, no license to renew. The superior technology that would hollow out radio had arrived, governed by nothing the FCC administered.",
  impact:{
    radio:"On-demand streaming offers radio's core promise without ads, schedule, or DJ.",
    society:"The under-40 audience abandons the dial for the algorithm.",
    law:"Radio's regulatory obligations have no counterpart on the streaming services replacing it." },
  causes:["pandora"], effects:["radiodecline","streamingwars"] },

{ id:"iheartbankruptcy", year:2018, date:"2015–2019", era:7, cat:"radio",
  title:"The Collapse of the Consolidation Bet",
  wiki:"IHeartMedia",
  summary:"iHeartMedia — Clear Channel renamed — buckles under the ~$16 billion in debt from its 2006 leveraged buyout and the streaming era's pressures, filing Chapter 11 in 2018 and emerging with roughly 850 stations, hundreds fewer than at its peak. The 1996 consolidation experiment ends in bankruptcy court.",
  importance:"The largest radio company in American history could not survive the collision of private-equity debt and digital disruption: the empire built by buying 1,200 stations after 1996 collapsed into bankruptcy, shedding hundreds of properties. The consequence of the deregulation gamble was now written into the court record — markets left with fewer owners than before consolidation began, and a medium too indebted and too disrupted to reinvent itself. The bet that bigger meant stronger had failed.",
  impact:{
    radio:"The largest U.S. radio company collapses into bankruptcy, shedding hundreds of stations.",
    power:"The 1996 consolidation experiment ends in the court record as a failure.",
    society:"Local markets are left with fewer owners than before consolidation began." },
  causes:["clearchannel","spotify"], effects:["radiodecline"] },

{ id:"radiodecline", year:2024, date:"2024–2026", era:7, cat:"radio",
  title:"Radio's Long Decline",
  wiki:"Radio broadcasting",
  summary:"U.S. broadcast radio ad revenue falls below $10 billion — down 44% from 2005 — as podcasting replaces talk radio and streaming replaces music radio. SiriusXM and iHeartMedia explore merging the last large satellite and terrestrial operators, while the 1927-era regulatory framework governs an aging, shrinking audience.",
  importance:"By the mid-2020s radio's cultural centrality was gone: ad revenue had nearly halved, podcasting had absorbed talk radio's function and streaming had absorbed music radio's — neither carrying any of broadcast's public obligations. The FCC still licenses every station, enforces indecency, and demands operation in the public interest, but it governs an audience that averages 65 and older and keeps shrinking. The medium that once made whole nations listen together has become background noise, eroded even there by apps that answer to no public-interest standard at all — the atlas's clearest portrait of a regulated medium outlived by an unregulated one.",
  impact:{
    radio:"Broadcast radio enters structural decline as podcasts and streaming take its functions.",
    law:"A 1927-era framework governs a shrinking, aging audience while its successors go unregulated.",
    society:"The medium that once united nations becomes background noise for an older few." },
  causes:["spotify","iheartbankruptcy","satelliteradio"], effects:[] }

);
