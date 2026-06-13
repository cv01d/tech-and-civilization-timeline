// SUPPLEMENT — WiFi, ISPs, and broadband. Two counterpointed stories: the FCC's single
// brilliant move (opening unlicensed spectrum in 1985, then staying out of the way) gave
// the world WiFi; while the FCC's reclassification of broadband out of common-carrier
// rules (2002–2005) dismantled ISP competition and rebuilt the monopoly the internet was
// meant to replace. Cross-links the existing arpanet, mosaic, aol, telecomact, section230,
// netneutrality, dotcom cards. cat:"radio" (Radio & Telecom tab). Round one: data only.
window.ATLAS_EVENTS.push(

{ id:"alohanet", year:1971, date:"1971", era:5, cat:"radio",
  title:"ALOHAnet: Sharing the Airwaves",
  wiki:"ALOHAnet",
  summary:"The University of Hawaii's ALOHAnet — the first packet-radio network, linking computers across islands by UHF radio — discovers that many devices can share one channel by simply retransmitting when two signals collide. The random-access method WiFi will later use is born.",
  importance:"ALOHAnet solved the fundamental problem of wireless data: how to let many uncoordinated devices share a single channel without a central traffic cop. Its answer — transmit, and if you collide, back off and try again — is the conceptual core of WiFi's access method and of Ethernet's too. A research network strung between Hawaiian islands quietly invented the way billions of devices would one day share the air.",
  impact:{
    radio:"Random-access channel sharing — the basis of WiFi — is invented.",
    technology:"Packet radio proves many devices can share one wireless channel.",
    communications:"The access method beneath modern wireless networking is established." },
  causes:["arpanet"], effects:["ethernet","ismband","wifi80211"] },

{ id:"ethernet", year:1973, date:"1973", era:5, cat:"radio",
  title:"Ethernet",
  wiki:"Ethernet",
  summary:"Robert Metcalfe invents Ethernet at Xerox PARC — a wired local-area-network standard adapting ALOHAnet's shared-channel idea to a cable. Ethernet and WiFi will spend the next half-century as complements: Ethernet in walls and data centers, WiFi through the air for the last few feet.",
  importance:"Ethernet became the universal way computers in a building talk to each other, and its collision-handling logic descends straight from ALOHAnet. Rather than competing with the wireless networking to come, it paired with it: the wired backbone and the wireless edge together form the architecture of essentially every network on earth. Metcalfe's standard is the unglamorous, indispensable counterpart to WiFi.",
  impact:{
    technology:"The dominant wired local-area-network standard is created.",
    radio:"Ethernet and WiFi become the complementary halves of modern networking.",
    communications:"The local network gains a universal, vendor-neutral standard." },
  causes:["alohanet"], effects:["wifi80211"] },

{ id:"computerinquiry2", year:1981, date:"1981", era:5, cat:"radio",
  title:"Basic vs. Enhanced: The Fateful Line",
  wiki:"Communications Act of 1934",
  summary:"The FCC's Second Computer Inquiry distinguishes 'basic services' (regulated telephone networks) from 'enhanced services' (information services running on top of them), exempting early online services from Title II common-carrier rules — the classification that will govern broadband for forty years and trigger endless legal war.",
  importance:"Long before the web, the FCC drew the line that would define internet regulation: the underlying network was a regulated common carrier, but the 'enhanced' services running over it were not. The distinction freed early online services to innovate, but it also became the lever by which broadband would later be pulled out of common-carrier oversight entirely. Nearly every net-neutrality and broadband fight traces back to this 1981 taxonomy of basic versus enhanced.",
  impact:{
    law:"The basic/enhanced split that governs broadband for 40 years is established.",
    radio:"Information services are exempted from common-carrier obligations.",
    power:"The lever for later broadband deregulation is set in place." },
  causes:["communicationsact"], effects:["ismband","titleone","netneutrality"] },

{ id:"ismband", year:1985, date:"1985", era:5, cat:"radio",
  title:"The 1985 Decision That Made WiFi",
  wiki:"ISM radio band",
  summary:"The FCC opens the 2.4 GHz Industrial, Scientific and Medical band for unlicensed use — no license required, provided devices share cooperatively using spread-spectrum techniques. Meant to enable microwave ovens and medical gear, it accidentally creates the spectrum on which all consumer WiFi will be built.",
  importance:"This is the FCC's single most consequential decision for consumers: by opening a band where anyone could transmit without a license, it made cheap, permissionless wireless devices economically possible — there would be no consumer WiFi if every router needed a spectrum license. The agency did it to accommodate microwave ovens and scientific equipment; the wireless-internet revolution that followed was entirely unintended. It stands as this tab's proof that the right light-touch intervention can unleash more value than any managed monopoly.",
  impact:{
    radio:"Unlicensed 2.4 GHz spectrum — the foundation of all WiFi — is opened.",
    law:"Permissionless spectrum access enables cheap consumer wireless devices.",
    power:"An accidental decision unleashes the most widespread wireless tech in history." },
  causes:["computerinquiry2","cbradio"], effects:["wavelan","wifi80211","sixghz"] },

{ id:"wavelan", year:1991, date:"1991–1992", era:6, cat:"radio",
  title:"WaveLAN and the CSIRO Patent",
  wiki:"Wireless LAN",
  summary:"NCR and AT&T build WaveLAN, the first practical wireless LAN (for retail point-of-sale), the direct precursor to 802.11; NCR's Vic Hayes begins leading the IEEE standardization effort. In 1992 Australia's CSIRO patents the signal-processing method for 'unsmearing' indoor reflections that makes fast indoor WiFi possible — later worth $430 million in royalties.",
  importance:"WaveLAN proved wireless networking could work commercially and seeded the standards effort that became WiFi, while CSIRO's patent solved the hard physics of indoor radio — the multipath echoes off walls that smear a signal — that makes WiFi usably fast inside buildings. Together they supplied the engineering foundation beneath the standard to come. The CSIRO royalties would become one of the most lucrative patent victories in Australian history.",
  impact:{
    radio:"The first practical wireless LAN and the indoor-signal breakthrough arrive.",
    technology:"Multipath 'unsmearing' makes fast indoor WiFi physically possible.",
    law:"The CSIRO patent later yields $430M, a landmark technology-patent victory." },
  causes:["ismband"], effects:["wifi80211","wifialliance"] },

{ id:"wifi80211", year:1997, date:"1997", era:6, cat:"radio",
  title:"802.11: The WiFi Standard",
  wiki:"IEEE 802.11",
  summary:"The IEEE ratifies 802.11, the first official WiFi specification — 2 Mbps at 2.4 GHz, its spread-spectrum design shaped directly by the FCC's unlicensed-band rules. It is technically sound but practically limited: one vendor's gear is not guaranteed to work with another's.",
  importance:"802.11 turned the unlicensed band and the WaveLAN groundwork into an open, public standard any manufacturer could build to — the moment WiFi became a thing rather than a collection of proprietary systems. Its spread-spectrum air interface was a direct consequence of the FCC's fair-sharing requirements for the ISM band. Slow and not yet interoperable, it was nonetheless the foundation; the next two years would make it fast and universal.",
  impact:{
    radio:"WiFi becomes an open, public standard any manufacturer can build to.",
    law:"FCC unlicensed-band rules directly shape the standard's spread-spectrum design.",
    technology:"The foundation of all later WiFi is laid, if slow and not yet interoperable." },
  causes:["alohanet","ethernet","ismband","wavelan"], effects:["wifialliance","wifi5"] },

{ id:"wifialliance", year:1999, date:"1999", era:6, cat:"radio",
  title:"'Wi-Fi' and the Consumer Revolution",
  wiki:"Wi-Fi Alliance",
  summary:"802.11b (11 Mbps) solves interoperability; the Wi-Fi Alliance forms to certify cross-vendor compatibility and coins the brand 'Wi-Fi' (chosen purely for its sound — it stands for nothing). Apple's AirPort router and the WiFi-equipped iBook — demoed surfing the web while swung from a hula hoop — make wireless networking a consumer phenomenon overnight.",
  importance:"1999 is the year WiFi became consumer reality: a fast, interoperable standard, a catchy brand guaranteeing any certified device would work with any other, and Apple's theatrical proof that a laptop could reach the internet with no wires at all. Within months every laptop maker built WiFi in. The same year's 802.11a opened the 5 GHz band, beginning the 2.4-versus-5 GHz trade-off that still defines WiFi configuration. The wireless last mile had arrived in the home.",
  impact:{
    radio:"Interoperable, branded WiFi becomes a mass-market consumer technology.",
    technology:"Every laptop maker builds in wireless networking within months.",
    society:"Untethered internet access in the home becomes ordinary." },
  causes:["wifi80211","wavelan"], effects:["wepwpa","wifi5","iphone"] },

{ id:"wepwpa", year:2001, date:"1999–2004", era:6, cat:"radio",
  title:"WiFi Security: WEP to WPA2",
  wiki:"Wi-Fi Protected Access",
  summary:"WiFi's first security protocol, WEP, is shown by 2001 to be crackable in minutes, leaving millions of networks exposed for years; the Alliance rushes WPA (2003) as a stopgap, then WPA2 (2004) with AES encryption — the first genuinely secure WiFi protocol, which reigns for fourteen years.",
  importance:"WiFi broadcast data into the open air, making security existential, and its first attempt was a fiasco: WEP was broken almost immediately, exposing home and business networks to anyone with free software. The scramble to replace it — WPA as emergency patch, then the solid WPA2 — established the rhythm that would define WiFi security: every standard eventually broken, every fix a new arms race. WPA2's long reign made encrypted wireless the default, until it too fell in 2017.",
  impact:{
    radio:"WiFi gains real encryption after a catastrophic first attempt.",
    surveillance:"Millions of WEP networks are exposed for years before users understand the risk.",
    technology:"Wireless security becomes a permanent arms race, not a solved problem." },
  causes:["wifialliance"], effects:["krack"] },

{ id:"dialupisp", year:1994, date:"1993–1996", era:6, cat:"radio",
  title:"The Brief Age of ISP Competition",
  wiki:"Internet service provider",
  summary:"Mosaic makes the web usable and demand explodes; hundreds of small ISPs spring up offering dial-up over the regulated telephone network, AOL blankets America with free trial discs, and the 1996 Telecom Act forces phone companies to rent their lines to competing ISPs — briefly creating a market of over 7,000 providers, the most competitive internet access will ever be.",
  importance:"For a few years the internet ran on the telephone network's common-carrier bones, and the 1996 Act's open-access mandate — requiring incumbents to lease their copper to rivals — produced genuine competition, thousands of ISPs underselling each other for dial-up and early DSL. It was the most competitive American broadband would ever be. That competition existed because the underlying network was a regulated common carrier obliged to share — exactly the obligation the FCC would soon dismantle.",
  impact:{
    radio:"Open access to telephone lines creates a market of 7,000+ competing ISPs.",
    law:"The 1996 Act's common-carrier sharing rules briefly make broadband competitive.",
    power:"Internet access is, for a moment, a genuinely competitive market." },
  causes:["mosaic","telecomact","aol"], effects:["aoltw","titleone"] },

{ id:"aoltw", year:2000, date:"2000", era:6, cat:"radio",
  title:"AOL–Time Warner",
  wiki:"AOL",
  summary:"AOL, valued at $350 billion at the dot-com peak, buys Time Warner for $165 billion — the largest merger in American history, approved with conditions to open its cable systems to competing ISPs. It becomes one of the great corporate disasters, destroying some $200 billion in value before the companies split by 2009.",
  importance:"The merger fused the dominant dial-up gateway with a media-and-cable empire on the theory that controlling both content and access was the future — and instead it cratered as the dot-com bubble burst and dial-up gave way to broadband AOL did not control. Its spectacular failure marked the end of the walled-garden online era and previewed the content-plus-access integration that ISPs would keep pursuing. The open-access conditions imposed on its cable systems foreshadowed the broadband fight to come.",
  impact:{
    power:"The largest merger in U.S. history becomes one of its costliest failures.",
    radio:"The walled-garden online era ends as broadband eclipses dial-up.",
    law:"Cable open-access conditions foreshadow the coming broadband classification fight." },
  causes:["dialupisp","dotcom"], effects:["titleone"] },

{ id:"titleone", year:2002, date:"2002–2005", era:6, cat:"radio",
  title:"Reclassification: Rebuilding the Monopoly",
  wiki:"Brand X",
  summary:"The FCC's 2002 Cable Modem Order classifies cable broadband as a Title I 'information service,' not a common carrier — ending the duty to share infrastructure with competing ISPs; the Supreme Court upholds it in Brand X (2005), and DSL is reclassified the same way. The 7,000 competing ISPs are squeezed out, and the AT&T/Verizon and Comcast/Charter duopoly forms.",
  importance:"In two strokes the FCC removed broadband from the common-carrier regime that had created ISP competition: once cable and then DSL were 'information services,' the incumbents no longer had to lease their lines, and the independent ISPs collapsed. Consolidation followed inevitably — Comcast absorbing AT&T Broadband, the market hardening into a cable-and-telephone duopoly that persists to this day, with a third of Americans left a single provider. It is the mirror image of the WiFi story: the wrong regulatory choice rebuilding the monopoly the internet was meant to dissolve.",
  impact:{
    law:"Broadband is reclassified out of common-carrier rules; the sharing duty ends.",
    power:"ISP competition collapses into a cable-and-telephone duopoly.",
    radio:"A third of Americans are left with a single adequate broadband provider." },
  causes:["computerinquiry2","dialupisp","aoltw"], effects:["netneutrality","digitaldivide","starlink"] },

{ id:"wifi5", year:2009, date:"2009–2013", era:7, cat:"radio",
  title:"WiFi Grows Up: 802.11n and ac",
  wiki:"IEEE 802.11n-2009",
  summary:"802.11n (2009) uses MIMO multiple-antenna streams to reach 600 Mbps and make video streaming over WiFi practical; 802.11ac (WiFi 5, 2013) brings multi-gigabit speeds and beamforming. With the iPhone (2007) offloading cellular data onto WiFi, wireless networking becomes essential infrastructure, not a convenience.",
  importance:"As smartphones multiplied, WiFi stopped being a luxury and became load-bearing: carriers route enormous volumes of phone data over customers' WiFi to relieve their cellular networks, making the home router part of the mobile internet's core economics. 802.11n and ac delivered the speed and reliability — MIMO, beamforming — to carry streaming video and dozens of devices. WiFi quietly became the network most of the world's internet traffic actually travels over.",
  impact:{
    radio:"MIMO and beamforming make WiFi fast enough for video and dense device use.",
    technology:"Cellular data offloads onto WiFi, making it core mobile infrastructure.",
    society:"Most internet traffic comes to travel its last leg over WiFi." },
  causes:["wifialliance","wifi80211","iphone"], effects:["krack","sixghz"] },

{ id:"cbrs", year:2015, date:"2015", era:7, cat:"radio",
  title:"CBRS: Sharing as a Third Way",
  wiki:"Citizens Broadband Radio Service",
  summary:"The FCC opens the 3.5 GHz Citizens Broadband Radio Service band with a novel three-tier sharing system — incumbents (military radar), priority licensees, and general access users coexisting via dynamic frequency coordination. It is the first major experiment in spectrum sharing as an alternative to exclusive licensing.",
  importance:"CBRS proposed a middle path between the two poles of spectrum policy — exclusive licensed bands (cellular) and open unlicensed bands (WiFi) — letting incumbents, paying licensees, and free users share the same frequencies through automated coordination. It created a new category of spectrum and a model for getting more use out of a finite resource without simply auctioning it to the highest bidder. CBRS is the regulatory frontier where the licensed and unlicensed worlds of this tab meet.",
  impact:{
    law:"Dynamic spectrum sharing emerges as an alternative to exclusive licensing.",
    radio:"Incumbents, licensees, and free users coexist in one band by coordination.",
    technology:"A new middle category between licensed cellular and unlicensed WiFi is created." },
  causes:["ismband","spectrumauctions"], effects:["sixghz"] },

{ id:"krack", year:2017, date:"2017–2019", era:7, cat:"radio",
  title:"KRACK Breaks WPA2",
  wiki:"KRACK",
  summary:"Researcher Mathy Vanhoef discloses KRACK, a flaw in WPA2's handshake affecting every WPA2 device on earth simultaneously — every router, phone, laptop, and IoT gadget. Emergency patches roll out fast, but millions of unpatchable devices stay vulnerable forever; WPA3 follows in 2018, and is itself found flawed (Dragonblood) in 2019.",
  importance:"KRACK ended WPA2's fourteen-year reign by breaking the encryption protecting essentially every WiFi network in the world at once, and exposed the deeper problem of the connected age: the vast population of cheap IoT devices with no way to receive a patch, left permanently exposed. WPA3 arrived as the successor and was promptly found to have its own holes. The episode confirmed WiFi security as a process, never a destination — each standard secure only until the next attack.",
  impact:{
    surveillance:"Every WPA2 WiFi network on earth is rendered vulnerable at once.",
    radio:"WPA2 falls after 14 years; WPA3 succeeds it and is itself soon flawed.",
    technology:"Unpatchable IoT devices reveal the security debt of the connected home." },
  causes:["wepwpa","wifi5"], effects:["sixghz"] },

{ id:"sixghz", year:2020, date:"2020–2024", era:7, cat:"radio",
  title:"6 GHz and WiFi 6E/7",
  wiki:"Wi-Fi 6E",
  summary:"The FCC opens the 6 GHz band for unlicensed use in 2020 — 1,200 MHz of new spectrum, nearly tripling what WiFi can use overnight — enabling WiFi 6E and then WiFi 7 (2024), whose multi-gigabit, multi-band speeds exceed most home broadband connections. WiFi is no longer the bottleneck.",
  importance:"With 2.4 and 5 GHz choked by smart-home gadgets and streaming, the 6 GHz opening was the most consequential consumer spectrum action since the original 1985 ISM decision — a clean, uncongested expanse that gave WiFi room to grow. WiFi 6E and WiFi 7 pushed wireless speeds past what most people's internet connections can deliver, flipping the old constraint: the air is now faster than the wire feeding it. It is the 1985 lesson restated — open spectrum, then get out of the way.",
  impact:{
    radio:"The 6 GHz opening nearly triples WiFi spectrum and relieves congestion.",
    technology:"WiFi 7's speeds exceed most home broadband — the wire is now the bottleneck.",
    law:"The light-touch unlicensed model delivers again, 35 years after the ISM band." },
  causes:["ismband","wifi5","krack","cbrs"], effects:[] },

{ id:"digitaldivide", year:2019, date:"1996–2024", era:7, cat:"radio",
  title:"The Digital Divide and the Map That Lied",
  wiki:"Digital divide in the United States",
  summary:"Federal broadband policy chases a gap it can't even measure: the FCC long counts an entire census block as 'served' if one address has access, lets ISPs self-report, and finds (2019) they systematically overstated coverage to claim subsidies. Definitions creep up (25/3 in 2019, 100/20 in 2022) and each rise reveals millions more unserved.",
  importance:"For a quarter-century the United States measured broadband with methods that flattered the incumbents — counting a whole block as covered if a single address was, trusting ISPs' own coverage claims, and allocating billions in subsidies on data that proved fraudulent when researchers actually tried to order service. Raising the official definition of 'broadband' repeatedly exposed how far short reality fell. The maps were a paper record of a failure: a market-based broadband policy that left tens of millions, disproportionately rural, behind.",
  impact:{
    law:"Flawed maps and ISP self-reporting misallocate billions in broadband subsidies.",
    power:"Coverage is systematically overstated to claim federal money.",
    society:"Tens of millions, mostly rural, are left without adequate broadband." },
  causes:["titleone","telecomact"], effects:["broadbandinvest"] },

{ id:"broadbandinvest", year:2021, date:"2009–2025", era:7, cat:"radio",
  title:"The Broadband Reckoning",
  wiki:"Broadband Equity, Access, and Deployment Program",
  summary:"After 25 years of failed market policy, money pours in: stimulus broadband (2009), the RDOF auction (2020), and the 2021 Infrastructure law's $65 billion — including $42.45B for state-run deployment (BEAD) and $14.2B to subsidize low-income subscriptions (ACP). But ACP runs out and ends in 2024, cutting off 23 million households, and BEAD fiber won't be built until 2028–2030.",
  importance:"The Infrastructure law was a generational admission that leaving rural broadband to the market had failed, committing the largest federal broadband investment in history. Yet the execution restaged the old dysfunction: mapping disputes delayed BEAD for years, the affordability program (ACP) that served 23 million households was abruptly defunded by Congress in 2024, and the fiber it promised won't reach homes until the end of the decade. Money at last met the problem — and bureaucracy, mapping fights, and lapsed funding blunted it.",
  impact:{
    law:"The largest-ever federal broadband investment confronts 25 years of market failure.",
    society:"ACP's 2024 cutoff strips a $30 subsidy from 23 million households.",
    power:"Mapping fights and lapsed funding delay relief to the end of the decade." },
  causes:["digitaldivide"], effects:["starlink"] },

{ id:"starlink", year:2024, date:"2020–2026", era:7, cat:"radio",
  title:"Starlink and the Regulatory Asymmetry",
  wiki:"Starlink",
  summary:"Starlink's low-earth-orbit constellation brings genuine broadband (100+ Mbps) to rural areas no terrestrial ISP serves — over 4 million subscribers by 2026 — and in 2024 the FCC authorizes its direct satellite-to-phone link with T-Mobile. But Starlink is not a common carrier, pays nothing into the Universal Service Fund, and sits outside the consumer rules built for terrestrial broadband, even as Charter–Cox (2025) hardens the cable duopoly.",
  importance:"Satellite broadband finally reaches where wires never will, a real alternative for rural users abandoned by terrestrial ISPs — and it arrives almost entirely outside the regulatory framework that governs everyone else, contributing nothing to universal-service subsidies and bound by no state utility rules. As it becomes a genuine competitor, that asymmetry grows consequential: the rules built for the wired monopoly do not reach the satellite that may replace it. The tab's two themes converge — spectrum-enabled innovation racing ahead of a regulatory system still built for the last technology.",
  impact:{
    radio:"LEO satellite broadband reaches rural users no terrestrial ISP serves.",
    law:"Starlink operates outside the common-carrier and universal-service rules binding rivals.",
    power:"A new access technology escapes the framework built for the wired monopoly." },
  causes:["broadbandinvest","titleone","fiveg"], effects:[] }

);
