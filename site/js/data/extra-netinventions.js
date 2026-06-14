// SUPPLEMENT — the key inventions without which the internet could not exist, filling the
// gaps the atlas's existing cards (transistor, telstar, arpanet, tcpip, dns, ethernet,
// alohanet, wwwproposal, mosaic, cookie, iphone, aws, appstore, linux, googlefounding)
// leave open: the microchip, the intercontinental cable, fiber optics, Engelbart's demo,
// public-key cryptography, RSA, AES, the Signal Protocol, the first search tools, and
// Bitcoin. These are the substrate of the network, gathered into the internet thread.
// cat:"internet" (+ a second facet each). Round one: data only — images to follow.
window.ATLAS_EVENTS.push(

{ id:"transatlanticcable", year:1858, date:"1858 / 1866", era:3, cat:"radio",
  title:"The Transatlantic Telegraph Cable",
  wiki:"Transatlantic telegraph cable",
  summary:"Cyrus Field's expeditions lay the first telegraph cable across the Atlantic floor — the 1858 line fails in weeks, but the durable 1866 cable establishes permanent intercontinental communication. The undersea cable that carries the vast majority of intercontinental internet traffic in 2026 is its direct descendant.",
  importance:"The transatlantic cable proved that continents could be wired together beneath the ocean, collapsing the weeks-long Atlantic crossing of a message into minutes and inventing the practice of submarine intercontinental communication. That practice never stopped: the fiber cables threading the seabed today, carrying nearly all the world's intercontinental internet traffic, are the lineal heirs of Field's copper line. The physical internet between continents still runs, as it did in 1866, along cables on the ocean floor.",
  impact:{
    communications:"Permanent intercontinental communication is established beneath the ocean.",
    technology:"The practice of submarine cabling — still the internet's intercontinental spine — begins.",
    society:"The weeks-long Atlantic message crossing collapses to minutes." },
  causes:["telegraph"], effects:["fiberoptic","arpanet"] },

{ id:"integratedcircuit", year:1958, date:"1958–1959", era:5, cat:["internet","computing"],
  title:"The Integrated Circuit",
  wiki:"Integrated circuit",
  summary:"Jack Kilby at Texas Instruments and Robert Noyce at Fairchild independently put multiple transistors on a single chip — the microchip. It is the invention that makes every internet-connected device, from server to smartphone, economically possible.",
  importance:"The integrated circuit took the transistor's promise and made it scalable, packing first dozens and eventually billions of switches onto a sliver of silicon and driving the relentless cost collapse that put computing everywhere. Without it there is no cheap computer, no router, no phone — no economic basis for a network of billions of devices. It is the hardware foundation beneath the entire digital world, the thing that turned the transistor from a component into a civilization.",
  impact:{
    technology:"Many transistors on one chip launch the cost collapse of computing.",
    computing:"Cheap, mass-produced processors and memory become possible.",
    communications:"Every internet-connected device gains an economically viable brain." },
  causes:["transistor"], effects:["fiberoptic","arpanet"] },

{ id:"motherofalldemos", year:1968, date:"December 9, 1968", era:5, cat:["internet","computing"],
  title:"The Mother of All Demos",
  wiki:"The Mother of All Demos",
  summary:"Douglas Engelbart, at SRI, demonstrates the mouse, on-screen windows, hypertext links, real-time collaborative editing, and video conferencing — in a single 90-minute presentation, years before any of it was commercial. The interface paradigm the web would eventually inherit is shown whole.",
  importance:"Engelbart's 1968 demo compressed the next half-century of human–computer interaction into ninety minutes, showing a room full of engineers the mouse, hyperlinks, windowed screens, and networked collaboration as if they already existed. Nearly everything about how people would later use the web — clicking links, editing together at a distance, seeing each other on screen — was present in embryo. It is the conceptual origin of the graphical, linked, collaborative internet, decades before the technology caught up to the vision.",
  impact:{
    computing:"The mouse, windows, and hypertext are demonstrated decades before they ship.",
    communications:"Networked collaboration and video conferencing are shown working in 1968.",
    society:"The interface paradigm the web later inherits is revealed whole." },
  causes:["arpanet"], effects:["wwwproposal","mosaic"] },

{ id:"fiberoptic", year:1970, date:"1970 / 1977", era:5, cat:["internet","radio"],
  title:"Fiber Optic Cable",
  wiki:"Optical fiber",
  summary:"Corning's Robert Maurer, Donald Keck, and Peter Schultz produce glass fiber pure enough to carry light over long distances; by 1977 it is deployed commercially in Long Beach, California. Hair-thin strands carrying light pulses replace copper, with capacity millions of times greater — the physical medium of the internet backbone.",
  importance:"Fiber optics solved the bandwidth problem that copper never could, sending light down threads of ultrapure glass to carry data in volumes electrical wires cannot approach. It is the physical substance of the modern internet: the backbone between cities and the cables across oceans are glass, not metal, and every leap in internet capacity ultimately rides on it. The shift from electrons in copper to photons in glass is the quiet material revolution beneath the entire connected age.",
  impact:{
    technology:"Light in ultrapure glass replaces electricity in copper, with vastly greater capacity.",
    communications:"The high-capacity backbone of the global internet is made possible.",
    society:"The bandwidth ceiling that copper imposed is lifted for good." },
  causes:["transatlanticcable","integratedcircuit"], effects:["arpanet","nsfnet"] },

{ id:"publickeycrypto", year:1976, date:"1976", era:5, cat:["internet","computing","encryption"],
  title:"Public-Key Cryptography",
  wiki:"Public-key cryptography",
  summary:"Whitfield Diffie and Martin Hellman publish the revolutionary idea that two parties can establish a shared secret over an open, insecure channel without ever having met — solving the key-distribution problem that had limited cryptography for millennia. It is the mathematical foundation of every secure internet connection.",
  importance:"For all of history, secret communication required the parties to share a key in advance; Diffie and Hellman showed that two strangers could derive a shared secret in full public view, an idea so counterintuitive it reshaped cryptography overnight. That breakthrough is what makes the secure internet possible — every padlock, every encrypted login, every protected transaction rests on being able to set up encryption with someone you've never met. It is among the most consequential ideas in the history of computing, the precondition for trust at internet scale.",
  impact:{
    technology:"Two strangers can establish a shared secret over an open channel.",
    computing:"The key-distribution problem that limited cryptography for millennia is solved.",
    communications:"The mathematical basis of every secure internet connection is created." },
  causes:["integratedcircuit"], effects:["rsa","netscapessl","aes2001"] },

{ id:"rsa", year:1977, date:"1977", era:5, cat:["internet","computing","encryption"],
  title:"RSA: Public-Key Cryptography Made Practical",
  wiki:"RSA (cryptosystem)",
  summary:"Ron Rivest, Adi Shamir, and Leonard Adleman turn the public-key idea into a working algorithm — RSA — that can both encrypt messages and produce digital signatures. It secures internet transactions for nearly fifty years, and is only now being phased out under the threat of quantum computing.",
  importance:"RSA made public-key cryptography real, supplying the concrete algorithm that browsers, servers, and certificate authorities would use to encrypt traffic and verify identity for half a century. Its blend of encryption and digital signatures became the workhorse of internet security, quietly authenticating the padlock in billions of connections. That long reign is ending only because quantum computers threaten the math beneath it — making RSA both a pillar of the internet and the first casualty of the next computing era.",
  impact:{
    technology:"The first practical public-key cryptosystem enables encryption and digital signatures.",
    communications:"Internet transactions are secured and identities verified for nearly 50 years.",
    computing:"The looming quantum threat now drives RSA's gradual replacement." },
  causes:["publickeycrypto"], effects:["netscapessl","aes2001"] },

{ id:"aes2001", year:2001, date:"2001", era:6, cat:["internet","computing","encryption"],
  title:"AES: The Standard Cipher",
  wiki:"Advanced Encryption Standard",
  summary:"NIST adopts the Advanced Encryption Standard — chosen through an open international competition — as the symmetric cipher securing the content of internet communications. With no practical attack known, it remains the global standard a quarter-century later.",
  importance:"AES is the algorithm that actually scrambles the bulk of the world's encrypted data, from secure web traffic to disk encryption to messaging — the fast symmetric cipher that public-key cryptography sets up but AES carries. Its selection through a transparent public competition, rather than government fiat, was itself a landmark, a deliberate repudiation of the Clipper-era model of secret, escrowed crypto. Unbroken after twenty-five years, AES is the rare piece of digital infrastructure that simply works and endures.",
  impact:{
    technology:"An open competition selects the symmetric cipher protecting most encrypted data.",
    communications:"The content of internet communications is secured by a single global standard.",
    society:"Public, transparent cryptography supplants the secret, escrowed model of Clipper." },
  causes:["publickeycrypto","rsa","cryptoexport1999"], effects:["signalprotocol"] },

{ id:"archie", year:1990, date:"1990–1993", era:5, cat:["internet","computing"],
  title:"Archie, Gopher, and the First Search",
  wiki:"Archie (search engine)",
  summary:"Alan Emtage's Archie indexes FTP file archives in 1990 — the first internet search tool — and is soon joined by Gopher and WAIS, menu-and-search systems for navigating the pre-web internet. They establish that a network of resources needs tools to discover them, not just addresses to reach them.",
  importance:"Before the web had a search engine it had Archie, a humble index of downloadable files that proved a basic truth of networked information: as soon as there is too much to remember, you need a way to find things, not just to address them. Gopher and WAIS extended the idea into menued, searchable navigation, briefly rivaling the early web before it eclipsed them. They are the ancestors of every search engine, the first recognition that discovery is as fundamental to the internet as connection.",
  impact:{
    technology:"The first tools for searching and discovering internet resources are built.",
    communications:"Navigating the network becomes a matter of discovery, not just addressing.",
    society:"The ancestor lineage of every later search engine begins." },
  causes:["arpanet"], effects:["googlefounding","webpublic"] },

{ id:"bitcoin", year:2009, date:"January 2009", era:7, cat:["internet","computing"],
  title:"Bitcoin and the Blockchain",
  wiki:"Bitcoin",
  summary:"The pseudonymous Satoshi Nakamoto launches Bitcoin — a decentralized digital ledger proving that cryptographic protocols can transfer value with no central authority and no trusted intermediary. It becomes the foundation of cryptocurrency and of every later 'decentralized' system.",
  importance:"Bitcoin answered a problem long thought unsolvable — how to move value over a network without a bank or clearinghouse to prevent double-spending — by combining public-key cryptography with a shared, tamper-evident ledger maintained by no one in particular. Whatever one makes of its speculative excesses, the underlying demonstration was real: trustless coordination at internet scale, the same decentralizing impulse that animated TCP/IP applied to money and record-keeping. It revived, in a new domain, the founding internet dream of systems with no center to control.",
  impact:{
    technology:"A decentralized ledger transfers value with no central authority.",
    computing:"Trustless coordination at internet scale is demonstrated for the first time.",
    society:"The internet's no-central-control ethos is applied to money and records." },
  causes:["publickeycrypto","rsa"], effects:["signalprotocol"] },

{ id:"signalprotocol", year:2016, date:"2013–2016", era:7, cat:["internet","computing","encryption"],
  title:"The Signal Protocol",
  wiki:"Signal Protocol",
  summary:"Open Whisper Systems develops the Signal Protocol for end-to-end encrypted messaging — adopted by WhatsApp, Messenger, and Google Messages — securing billions of messages a day so that not even the platform carrying them can read their contents.",
  importance:"The Signal Protocol carried the Crypto Wars to their logical conclusion: strong, end-to-end encryption not as a specialist tool but as the silent default beneath the world's most-used messaging apps, putting unbreakable privacy in billions of hands. It is the mature fruit of the 1999 liberalization — the encryption the government once fought to suppress, now ordinary infrastructure. And it is precisely what the second Crypto War, fought through liability bills like EARN IT, seeks to pry back open: the protocol at the center of the modern fight over whether private communication can survive.",
  impact:{
    technology:"End-to-end encryption becomes the silent default in mass-market messaging.",
    communications:"Billions of messages a day are secured against the platforms carrying them.",
    society:"The encryption the state once fought to suppress becomes ordinary infrastructure." },
  causes:["aes2001","cryptoexport1999"], effects:["earnit"] }

);
