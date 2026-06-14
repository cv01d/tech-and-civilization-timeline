// SUPPLEMENT — the open-source & creative-commons thread: the long contest between
// enclosure and re-commoning, from Justinian's "things common to all" through the
// Statute of Anne and the public domain, free software and copyleft, Git and GitHub,
// Creative Commons and Wikipedia, and into the AI era where the commons becomes
// training data. Cards cross into computing, law, and print; the cat array reflects
// that so they appear under those chips too. Many neighboring cards already exist
// (statuteofanne, copyright1790/1976, sonnybono, googlebooks, wikipedia, dmca,
// kadreymeta, bartzanthropic); this thread cross-links to them rather than duplicate.
// Round one: data only, no images.
window.ATLAS_EVENTS.push(

// ===== I. THE COMMONS IN CONCEPT =====
{ id:"alexandria", year:-283, date:"c. 295–283 BCE", era:1, cat:["opensource","print"],
  title:"The Library of Alexandria",
  wiki:"Library of Alexandria", gallery:["Ptolemy I Soter","Mouseion"],
  summary:"Under the early Ptolemies, Alexandria assembles the ancient world's most ambitious attempt at a universal knowledge commons — collecting, copying, and gathering scrolls from across the Mediterranean into a single shared repository.",
  importance:"The Library was the first state project to treat the totality of recorded knowledge as something to be pooled and made available rather than locked in private or temple hands. Its method — acquire every text, copy it, retain the copy — and its ambition to be universal make it the conceptual ancestor of every later knowledge commons, from the public library to the Internet Archive. Its eventual loss became the founding cautionary tale of how fragile a centralized commons can be.",
  impact:{
    society:"Knowledge is treated, for the first time at scale, as a shared resource to be collected rather than hoarded.",
    print:"Systematic copying and collection establish the library as an institution of the commons.",
    government:"A state stakes its prestige on assembling and curating the world's recorded knowledge." },
  causes:["writing"], effects:["justinian","projectgutenberg"] },

{ id:"justinian", year:533, date:"533 CE", era:1, cat:["opensource","law"],
  title:"Res Communes Omnium: Justinian Codifies the Commons",
  wiki:"Corpus Juris Civilis", gallery:["Justinian I","Roman law"],
  summary:"Justinian's Institutes codify res communes omnium — things common to all by natural law: the air, running water, the sea, and the shores — categories no one may own because they belong to everyone.",
  importance:"Roman law's res communes is the legal taproot of both 'the commons' and 'the public domain': the recognition that some resources are, by their nature, owned by no one and available to all. For fourteen centuries jurists would reach back to this category to argue what cannot be enclosed — whether the sea, the airwaves, or, eventually, ideas and expression once their copyright term expires. It is the doctrinal seed of the idea that enclosure has limits.",
  impact:{
    law:"Establishes a legal category of things owned by no one because they belong to all.",
    society:"The commons acquires a name and a defense in the foundational text of Western law.",
    government:"The state is held to recognize resources it may not grant away as private property." },
  causes:[], effects:["charterofforest","statuteofanne"] },

{ id:"charterofforest", year:1217, date:"1217", era:1, cat:["opensource","law"],
  title:"The Charter of the Forest",
  wiki:"Charter of the Forest", gallery:["Magna Carta","Estovers"],
  summary:"Companion to Magna Carta, the Charter of the Forest re-establishes commoners' rights of access to the royal forests — estovers (firewood), pannage (grazing pigs), turbary (cutting turf) — the first major re-commoning document in English law.",
  importance:"Where Magna Carta bound the king to the barons, the Charter of the Forest restored to ordinary people the practical rights of subsistence in lands the Crown had enclosed. It is the first great document of re-commoning: not the granting of a new freedom but the reversal of an enclosure, the reclaiming of shared resources that power had fenced off. The pattern it set — enclosure, resistance, partial restoration — recurs through every commons fight that follows.",
  impact:{
    law:"Common rights of access and subsistence are restored against royal enclosure.",
    society:"Ordinary people's claim on shared land is written into fundamental law.",
    labor:"The means of subsistence — fuel, grazing, turf — are protected as common rights." },
  causes:["magnacarta","justinian"], effects:["inclosureacts"] },

{ id:"olmstedcommons", year:1858, date:"1857–1858", era:3, cat:["opensource"],
  title:"Olmsted Designs the Social Commons",
  wiki:"Central Park", gallery:["Frederick Law Olmsted","Greensward Plan"],
  summary:"Frederick Law Olmsted designs New York's Central Park explicitly as an un-fenced, unmonetized public space where the poorest factory worker and the wealthiest elite could meet on equal ground — pioneering the deliberately designed 'public commons.'",
  importance:"Olmsted's park was a conscious counter-enclosure: as the industrial city fenced, paved, and privatized everything around it, he carved out a large shared space owned by no one and open to all, on the principle that a democracy needs a commons its citizens hold in common. The structural philosophy — a deliberately designed, freely accessible, collectively owned resource that resists the surrounding logic of private profit — is the same idea that would later animate free software and the open-content web.",
  impact:{
    society:"A designed public commons is created as a deliberate counter to industrial enclosure.",
    law:"Land is held collectively, open to all, and shielded from private monetization.",
    labor:"The factory worker gains an un-priced shared space alongside the elite." },
  causes:["inclosureacts"], effects:["seldenpatent"] },

// ===== II. PRINTING AND THE FIRST ENCLOSURES =====
{ id:"inclosureacts", year:1773, date:"1604 – 19th c.", era:2, cat:["opensource","law"],
  title:"The Inclosure Acts",
  wiki:"Inclosure Acts", gallery:["Enclosure","Common land"],
  summary:"Across two centuries, peaking between 1750 and 1850, thousands of parliamentary Inclosure Acts privatize England's common land — fencing fields, pastures, and woods that villagers had shared for generations into individually owned parcels.",
  importance:"The Inclosure Acts are the literal destruction of the physical commons, and the historical referent every later 'tragedy of the commons' argument implicitly invokes. They converted shared, customary land into private property by law, dispossessing commoners of subsistence rights and driving the rural poor toward the factories of the industrial revolution. Whenever a valuable shared resource is later fenced for profit — a song, an operating system, a body of training data — this is the precedent being re-enacted.",
  impact:{
    law:"Common land is converted by statute into private property at national scale.",
    labor:"Dispossessed commoners are driven toward wage labor in the new factories.",
    society:"The destruction of the physical commons becomes the template for every later enclosure." },
  causes:["charterofforest"], effects:["hardin","ostrom"] },

{ id:"donaldsonbecket", year:1774, date:"1774", era:2, cat:["opensource","law","print"],
  title:"Donaldson v. Becket: The Public Domain Becomes Real",
  wiki:"Donaldson v Becket", gallery:["Statute of Anne","Public domain"],
  summary:"The House of Lords rejects the booksellers' claim to a perpetual common-law copyright, ruling that once the Statute of Anne's limited term expires, a work passes irrevocably into the public domain — making the public domain a practical reality rather than a statutory afterthought.",
  importance:"Donaldson v. Becket is one of the most underappreciated events in the whole history of the commons. The London booksellers had argued that copyright was a perpetual natural-law property right, with the statutory term merely supplementing it; the Lords disagreed, holding that the term was the whole of the right. That ruling killed perpetual copyright in the English-speaking world and gave the public domain real legal force — the guarantee that every work eventually returns to the commons.",
  impact:{
    law:"Perpetual copyright is rejected; the statutory term defines the whole of the right.",
    print:"Out-of-term works pass irrevocably into the public domain, freeing the reprint trade.",
    society:"The public domain becomes an enforceable reality, not merely a statutory promise." },
  causes:["statuteofanne"], effects:["copyright1790","bridgemancorel"] },

{ id:"seldenpatent", year:1911, date:"1911", era:4, cat:["opensource","law"],
  title:"The Automobile Cross-Licensing Precedent",
  wiki:"George B. Selden", gallery:["Selden patent","Henry Ford"],
  summary:"George Selden held a sweeping patent on the gasoline automobile that monopolized the early auto industry; Henry Ford fought and broke it in court in 1911, after which automakers formed an association to cross-license their patents freely with one another — an early industrial open-source framework.",
  importance:"The Selden fight is the open-source pattern rendered in steel: a single broad patent fenced off an entire industry, the monopoly was broken in court, and the makers responded not with new monopolies but with a pact to share. The cross-licensing agreement that followed — patents pooled and made freely available among members — let the whole industry build on shared advances rather than litigate each one, prefiguring the patent pledges and shared licenses that open-source software would later formalize.",
  impact:{
    law:"A broad patent monopoly is broken, and the industry adopts free cross-licensing.",
    technology:"Shared access to patents lets the whole auto industry build on common advances.",
    power:"Pooling rather than fencing innovation becomes an early industrial open framework." },
  causes:["olmstedcommons"], effects:["contu1980"] },

// ===== III. THE MODERN COPYRIGHT SYSTEM =====
{ id:"burrowgiles", year:1884, date:"1884", era:4, cat:["opensource","law","print"],
  title:"Burrow-Giles v. Sarony: Authorship as Human Intent",
  wiki:"Burrow-Giles Lithographic Co. v. Sarony", gallery:["Napoleon Sarony","Oscar Wilde No. 18"],
  summary:"The U.S. Supreme Court holds that a photograph of Oscar Wilde is copyrightable because it embodies its maker's creative choices — pose, lighting, arrangement — rejecting the argument that a mere mechanical recording of reality cannot be a work of authorship.",
  importance:"Burrow-Giles is the case that defined authorship as the expression of human creative intent, settling that a machine-made image can still be a human's work if a person made the creative decisions behind it. That doctrine — authorship requires a human mind making choices — is the direct ancestor of every AI-authorship ruling 140 years later, when courts confronting machine-generated images would reach back to ask the same question: where is the human creative choice?",
  impact:{
    law:"Copyright authorship is defined as the expression of human creative choices.",
    print:"Photography, a machine-made medium, is admitted to the domain of authorship.",
    computing:"The human-authorship test is set that AI-generated works will later be measured against." },
  causes:["donaldsonbecket"], effects:["berne","thalerperlmutter"] },

{ id:"berne", year:1886, date:"1886", era:4, cat:["opensource","law","print"],
  title:"The Berne Convention",
  wiki:"Berne Convention", gallery:["Victor Hugo","World Intellectual Property Organization"],
  summary:"Eleven nations sign the Berne Convention, establishing international copyright reciprocity — each country agreeing to protect foreign authors as it protects its own, with copyright arising automatically on creation rather than through registration.",
  importance:"Berne built the framework most of the world's copyright still runs on: automatic protection, national treatment of foreign works, and a floor of minimum rights. By making copyright borderless and registration-free, it both protected authors globally and made the public domain harder to map, since a work's status now depended on the laws of many nations at once. Every later international fight over copyright terms and the commons is conducted within Berne's architecture.",
  impact:{
    law:"International copyright reciprocity and automatic protection become the global standard.",
    print:"Authors are protected across borders without registering in each country.",
    power:"Copyright becomes a borderless regime, complicating where the public domain begins." },
  causes:["burrowgiles","chaceact"], effects:["copyright1909"] },

{ id:"soundrecording1972", year:1972, date:"1972", era:5, cat:["opensource","law"],
  title:"Sound Recordings Enter Federal Copyright",
  wiki:"Sound Recording Amendment of 1971", gallery:["Phonograph record","Bootleg recording"],
  summary:"The Sound Recording Amendment brings sound recordings under federal U.S. copyright for the first time, responding to a wave of tape and record piracy — and creating a new layer of rights distinct from the underlying musical composition.",
  importance:"Until 1972 the recording itself — as opposed to the song written down — had no federal protection, leaving a patchwork of state laws and a thriving bootleg trade. Federalizing it answered the piracy of a new copying technology, the cheap cassette, exactly as the 1909 Act had answered the player piano: not by banning the machine but by drawing a new property line around what it copied. The split it created, between composition and recording, still shapes who gets paid when music is streamed or sampled.",
  impact:{
    law:"Sound recordings gain federal copyright, distinct from the underlying composition.",
    society:"A new copying technology — the cassette — provokes a new enclosure of rights.",
    power:"The composition-versus-recording divide that governs music royalties is set." },
  causes:["copyright1909"], effects:["copyright1976"] },

// ===== IV. FREE SOFTWARE AND THE OPEN SOURCE MOVEMENT =====
{ id:"academiccommons", year:1958, date:"1950s–1960s", era:5, cat:["opensource","computing"],
  title:"The Academic Software Commons",
  wiki:"IBM 704", gallery:["SHARE (computing)","Mainframe computer"],
  summary:"Early mainframes are sold primarily to universities and labs, where software is treated as a mere utility to make the expensive hardware work — so source code is routinely printed out, modified, and traded among researchers with no copyright friction at all.",
  importance:"Before software was property, it was a commons by default. The value lay in the costly hardware, so the code that ran it was shared freely — mailed on tape, printed in manuals, improved by whoever had the machine, pooled through user groups like IBM's SHARE. This informal, frictionless sharing was the native culture of computing's first decades, and it is the state of affairs that copyright and proprietary licensing would later have to actively dismantle.",
  impact:{
    computing:"Software circulates as a freely shared utility, not a guarded product.",
    society:"A collaborative, code-sharing culture forms as computing's original norm.",
    labor:"Researchers build on one another's code without permission or payment." },
  causes:[], effects:["unixfracturing","contu1980"] },

{ id:"hardin", year:1968, date:"1968", era:5, cat:["opensource"],
  title:"'The Tragedy of the Commons'",
  wiki:"Tragedy of the commons", gallery:["Garrett Hardin","Overgrazing"],
  summary:"Ecologist Garrett Hardin publishes 'The Tragedy of the Commons' in Science, arguing that shared resources like an open pasture are inevitably ruined by individual overexploitation — and that the only remedies are private property or strict state control.",
  importance:"Hardin's parable became the most influential — and most contested — framing in all of commons discourse. Its claim that sharing must end in ruin was widely read as a justification for enclosure, and the tech and policy elite reached for it to argue that valuable resources, from fisheries to ideas, must be fenced or seized to survive. The thesis would be empirically dismantled by Elinor Ostrom two decades later, but its grip on the popular imagination of what a 'commons' is has never loosened.",
  impact:{
    society:"A parable of inevitable ruin becomes the dominant — and distorting — image of the commons.",
    law:"Enclosure and state control are cast as the only rational responses to shared resources.",
    power:"The argument for fencing off valuable resources gains its most cited justification." },
  causes:["inclosureacts"], effects:["ostrom","stallmangnu"] },

{ id:"unixfracturing", year:1973, date:"1970s", era:5, cat:["opensource","computing"],
  title:"The UNIX Fracturing",
  wiki:"Unix", gallery:["Berkeley Software Distribution","Ken Thompson","Bell Labs"],
  summary:"AT&T's Bell Labs develops UNIX, but a federal antitrust consent decree forbids AT&T from selling computers commercially — so it licenses UNIX to universities for little more than the cost of the tape, seeding a global community that builds its own variants, most famously Berkeley's BSD.",
  importance:"UNIX spread because a regulatory accident kept it cheap and open to the academy: barred from the computer business, AT&T treated its operating system as something to license away rather than guard, and a generation of computer scientists learned, modified, and redistributed it. The Berkeley Software Distribution that grew out of this became the template for a community-stewarded operating system — and when AT&T was finally freed to commercialize UNIX, the fight over who owned the shared work it had spawned helped provoke the free-software movement.",
  impact:{
    computing:"A shared, modifiable operating system spreads through the academy and seeds BSD.",
    law:"An antitrust decree, not a license philosophy, keeps UNIX open and cheap.",
    society:"A global community of UNIX hackers forms the seedbed of free software." },
  causes:["academiccommons"], effects:["stallmangnu","linux"] },

{ id:"contu1980", year:1980, date:"1974–1980", era:5, cat:["opensource","law","computing"],
  title:"Software Becomes Property: The 1980 Act",
  wiki:"Computer Software Copyright Act of 1980", gallery:["CONTU","Software copyright"],
  summary:"Following the recommendations of the CONTU commission, which classified software as a 'literary work,' the U.S. Computer Software Copyright Act of 1980 brings program code squarely under copyright — and almost overnight, companies pull their source out of the open and lock it behind proprietary licenses.",
  importance:"This is the enclosure of code. For three decades software had circulated as a shared utility; the 1980 Act made it ownable, and the industry rushed to fence it. Source code that had been printed, traded, and improved was now a closed asset, and the binary-only proprietary product became the norm. The act of enclosure provoked its own resistance: within three years, Richard Stallman would set out to build a free operating system precisely to keep code in the commons.",
  impact:{
    law:"Software code is brought under copyright as a 'literary work.'",
    computing:"Source code is pulled from the open and locked behind proprietary licenses.",
    society:"The enclosure of code provokes the free-software movement in direct response." },
  causes:["academiccommons","copyright1976"], effects:["stallmangnu"] },

{ id:"stallmangnu", year:1983, date:"September 1983", era:5, cat:["opensource","computing"],
  title:"Richard Stallman Launches GNU",
  wiki:"GNU", gallery:["Richard Stallman","GNU Project"],
  summary:"Infuriated by a proprietary printer driver he was forbidden to fix, MIT researcher Richard Stallman announces the GNU Project — a plan to build a complete, free operating system, 'GNU's Not Unix,' so that no one would again be locked out of the software they relied on.",
  importance:"GNU was the founding act of the free-software movement: a deliberate, ideological refusal of the enclosure the 1980 Act had set in motion. Stallman's insight was that freedom had to be built into the software itself — its source open, its modification permitted, its redistribution guaranteed — rather than depended on the goodwill of vendors. The project supplied the compiler, editor, and tools (the entire userland) that a free operating system would need; it lacked only a kernel, which a Finnish student would supply eight years later.",
  impact:{
    computing:"A complete free operating system is set as an explicit goal, tools first.",
    society:"Software freedom is framed as a moral cause, not merely a technical preference.",
    law:"The stage is set for a license that uses copyright to guarantee openness." },
  causes:["contu1980","unixfracturing","hardin"], effects:["gplcopyleft","linux"] },

{ id:"gplcopyleft", year:1989, date:"1985–1991", era:5, cat:["opensource","law","computing"],
  title:"Copyleft and the GPL",
  wiki:"GNU General Public License", gallery:["Copyleft","Free Software Foundation"],
  summary:"Stallman founds the Free Software Foundation (1985) and writes the GNU General Public License (GPLv1 in 1989, the widely adopted GPLv2 in 1991) — introducing 'copyleft,' a legal hack that turns copyright against enclosure by requiring that anyone who modifies and redistributes the code keep the source open.",
  importance:"Copyleft is the movement's masterstroke: rather than abandon copyright, it weaponizes it. Because the author holds copyright, the author can attach conditions — and the GPL's condition is that derivatives must themselves be free, so that openness propagates virally through every fork and modification. It converted a tool of enclosure into a tool of re-commoning, and it gave free software a legal spine strong enough that even the largest corporations would later have to respect it.",
  impact:{
    law:"Copyright is turned against itself to mandate that derivatives stay free.",
    computing:"The viral copyleft license guarantees source code remains open downstream.",
    society:"Free software gains an enforceable legal foundation, not just an ethic." },
  causes:["stallmangnu"], effects:["linux","cathedralbazaar","opensourceinitiative","gplv3"] },

{ id:"ostrom", year:1990, date:"1990", era:5, cat:["opensource","law"],
  title:"Ostrom's Governing the Commons",
  wiki:"Elinor Ostrom", gallery:["Governing the Commons","Common-pool resource"],
  summary:"Political economist Elinor Ostrom publishes Governing the Commons, the empirical rebuttal to Hardin: drawing on fisheries, forests, and irrigation systems worldwide, she shows that communities routinely govern shared resources sustainably for centuries — without privatization and without the state.",
  importance:"Ostrom dismantled the inevitability at the heart of the 'tragedy' thesis by showing it was empirically false: real commons survive, governed by their users through evolved rules, monitoring, and graduated sanctions. Her design principles for durable self-governance describe, almost exactly, how successful open-source and Wikipedia communities would later organize themselves. She is the intellectual counterweight to the enclosure narrative — proof that the commons is a viable third path, not a doomed waystation between private property and state control. The work earned her the 2009 Nobel in economics.",
  impact:{
    law:"Self-governed commons are shown to be durable, refuting the case for enclosure.",
    society:"A third path between market and state is established empirically.",
    computing:"Her principles for commons governance prefigure how open-source communities self-organize." },
  causes:["hardin","inclosureacts"], effects:["wikipedia","creativecommons"] },

{ id:"linux", year:1991, date:"1991", era:5, cat:["opensource","computing"],
  title:"Linux Fills the Void",
  wiki:"Linux kernel", gallery:["Linus Torvalds","Tux (mascot)"],
  summary:"Frustrated by the licensing limits of Minix, Finnish student Linus Torvalds writes a hobby operating-system kernel and releases it under the GPL — and it fuses perfectly with Stallman's GNU tools to form a complete, entirely free operating system.",
  importance:"Linux supplied the one piece GNU lacked, the kernel, and by releasing it under the GPL Torvalds plugged it directly into the free-software commons. More than the code, Linux proved the method: thousands of volunteers, scattered across the world and coordinating by email, could outbuild the proprietary teams of the largest companies. It became the most consequential demonstration that distributed, open collaboration was not just ethically appealing but practically superior — and it now runs most of the servers, phones, and supercomputers on Earth.",
  impact:{
    computing:"A free kernel completes a free operating system, now dominant across computing.",
    society:"Distributed volunteer collaboration is shown to outbuild proprietary teams.",
    labor:"Software is built by a global, unpaid, self-organizing community at industrial scale." },
  causes:["gplcopyleft","unixfracturing","stallmangnu"], effects:["cathedralbazaar","git","android"] },

{ id:"debianapache", year:1995, date:"1993–1995", era:6, cat:["opensource","computing"],
  title:"Debian and Apache: The Commons Builds Institutions",
  wiki:"Debian", gallery:["Apache HTTP Server","Ian Murdock"],
  summary:"The Debian project (1993) organizes volunteers into a structured free operating-system distribution with its own social contract, and the Apache HTTP Server (1995) — 'a patchy server' assembled from shared fixes — grows to run the majority of the early web's sites.",
  importance:"Debian and Apache marked free software's transition from individual hacks to durable, self-governing institutions — exactly the kind of commons stewardship Ostrom described. Debian's social contract and its community of maintainers showed that a volunteer commons could sustain a vast, coherent system over decades; Apache showed that such a project could quietly become critical infrastructure, powering most of the World Wide Web. The commons was no longer a fringe ideal but the substrate the internet ran on.",
  impact:{
    computing:"Free software powers the early web's servers and a self-governing distribution.",
    society:"Volunteer projects mature into durable, rule-governed institutions.",
    labor:"Community maintainership becomes a sustainable model for building infrastructure." },
  causes:["linux"], effects:["opensourceinitiative","awslicensing"] },

{ id:"cathedralbazaar", year:1997, date:"1997", era:6, cat:["opensource","computing"],
  title:"The Cathedral and the Bazaar",
  wiki:"The Cathedral and the Bazaar", gallery:["Eric S. Raymond","Linus's law"],
  summary:"Eric S. Raymond publishes a seminal essay contrasting the closed, top-down 'cathedral' of corporate software development with the open, chaotic 'bazaar' of Linux — distilling the case for open development into a slogan: 'Given enough eyeballs, all bugs are shallow.'",
  importance:"Raymond's essay translated the free-software movement's practice into a pragmatic argument that businesspeople could accept: open, distributed development simply produces better, more reliable software, because more people inspecting the code find more flaws. By reframing openness as an engineering advantage rather than a moral demand, it built the intellectual bridge to the 'open source' rebrand a year later — and it directly influenced Netscape's decision to release its browser's source code.",
  impact:{
    computing:"Open, distributed development is argued to produce better software than closed teams.",
    society:"Openness is reframed as a practical engineering method, not only an ethic.",
    power:"The pragmatic case prepares industry to embrace open development." },
  causes:["linux","gplcopyleft"], effects:["opensourceinitiative"] },

{ id:"opensourceinitiative", year:1998, date:"1998", era:6, cat:["opensource","computing","law"],
  title:"'Open Source' Is Born",
  wiki:"Open Source Initiative", gallery:["Christine Peterson","Netscape (web browser)","Mozilla"],
  summary:"In a pivotal year, the term 'open source' is coined (by Christine Peterson), the Open Source Initiative is founded to promote it as a business-friendly strategy, and Netscape releases its browser's source code as Mozilla — the same twelve months in which the Sonny Bono Act and the DMCA tighten copyright's grip.",
  importance:"1998 is the hinge of the whole story, and it cuts both ways. To win over Wall Street, the movement rebranded: 'free software,' which sounded anti-capitalist, became 'open source,' which sounded like a development methodology — and the OSI's certified licenses gave companies a vocabulary for participating. Netscape's source release seeded Firefox and proved a major commercial product could go open. Yet the very same year produced the Sonny Bono term extension and the DMCA, enclosure and re-commoning advancing in lockstep — the pattern that defines the era.",
  impact:{
    computing:"Open development is recast as a pragmatic business strategy, not a moral crusade.",
    law:"A certified set of open-source licenses gives industry a shared legal vocabulary.",
    society:"The same year tightens copyright (Bono, DMCA) and frees code (Mozilla)." },
  causes:["cathedralbazaar","debianapache","gplcopyleft"], effects:["eldredashcroft","git","creativecommons","stablediffusion"] },

{ id:"eldredashcroft", year:2003, date:"2003", era:6, cat:["opensource","law"],
  title:"Eldred v. Ashcroft",
  wiki:"Eldred v. Ashcroft", gallery:["Lawrence Lessig","Eric Eldred"],
  summary:"Lawrence Lessig argues before the Supreme Court that the Sonny Bono term extension violates the Constitution's 'limited times' clause by perpetually freezing the public domain; the Court upholds the extension — a defeat that, more than any victory, galvanizes the digital-commons movement.",
  importance:"Eldred was the public domain's day in court, and it lost. The ruling that 'limited times' permits Congress to extend copyright again and again confirmed that the legislative path to protecting the commons was closed. Lessig drew the lesson that if the law would not keep works in the commons, creators would have to do it themselves, voluntarily — a conviction that led him directly to found Creative Commons. The defeat births the next phase.",
  impact:{
    law:"The Court holds that repeated copyright extensions satisfy 'limited times.'",
    society:"The legislative route to defending the public domain is shown to be closed.",
    computing:"The loss redirects the commons movement toward private, voluntary licensing." },
  causes:["sonnybono"], effects:["creativecommons"] },

{ id:"gplv3", year:2007, date:"2007", era:6, cat:["opensource","law","computing"],
  title:"GPLv3",
  wiki:"GNU General Public License", gallery:["Tivoization","Software patent"],
  summary:"The Free Software Foundation releases GPLv3, modernizing copyleft to close loopholes that had let companies comply with the letter of the license while denying its freedoms — barring 'tivoization' (locked-down hardware) and tightening defenses against software patents.",
  importance:"GPLv3 was the commons defending itself against a decade of new enclosure tactics. Vendors had learned to ship GPL code on hardware that refused to run modified versions, satisfying the license while gutting the freedom to tinker; patents had become a fresh weapon against open projects. GPLv3 answered both, reaffirming that copyleft protects not just access to source but the practical ability to use and change it — a reminder that a license, like any commons rule, must evolve as enclosure does.",
  impact:{
    law:"Copyleft is updated to bar locked hardware and strengthen patent defenses.",
    computing:"The freedom to run modified code is protected against tivoization.",
    society:"The commons adapts its rules to counter a new generation of enclosure tactics." },
  causes:["gplcopyleft"], effects:["awslicensing"] },

// ===== V. THE DIGITAL COMMONS REVIVAL =====
{ id:"projectgutenberg", year:1971, date:"1971", era:5, cat:["opensource","print"],
  title:"Project Gutenberg",
  wiki:"Project Gutenberg", gallery:["Michael S. Hart","E-text"],
  summary:"Michael Hart types the U.S. Declaration of Independence into a mainframe and offers it for anyone to download, founding Project Gutenberg — the first effort to build a digital library of public-domain texts, decades before the web.",
  importance:"Hart grasped, in 1971, what the network would eventually make obvious: that the marginal cost of copying a digitized public-domain text is essentially zero, so such texts could be given to everyone, everywhere, forever. Project Gutenberg turned the abstract legal category of the public domain into a concrete, growing, freely downloadable collection — the first digital knowledge commons, and the direct ancestor of every later effort to put humanity's out-of-copyright heritage online.",
  impact:{
    print:"Public-domain books become freely downloadable digital texts for the first time.",
    society:"The near-zero cost of copying digital text is recognized and acted on early.",
    computing:"The first digital library establishes the model the web would scale up." },
  causes:["alexandria","donaldsonbecket"], effects:["internetarchivefounded","wikipedia"] },

{ id:"internetarchivefounded", year:1996, date:"1996", era:6, cat:["opensource","internet"],
  title:"The Internet Archive Is Founded",
  wiki:"Internet Archive", gallery:["Brewster Kahle","Wayback Machine"],
  summary:"Brewster Kahle founds the Internet Archive with the mission of 'universal access to all knowledge' — beginning to crawl and preserve the web itself, the ephemeral medium no one else was saving, and growing into a vast library of books, audio, software, and the Wayback Machine.",
  importance:"The Archive set out to be the Library of Alexandria of the digital age, with one crucial difference learned from that library's fate: redundancy and openness over centralization. By preserving the web — pages that would otherwise vanish — it created a commons of the record itself, a memory of the internet. Its later collision with publishers over digital lending would expose the limits the law places on even a non-profit library, but its core achievement, an open archive of human knowledge, stands as the era's great re-commoning institution.",
  impact:{
    internet:"The ephemeral web is crawled and preserved as a public archive.",
    society:"A non-profit takes on the role of universal library for the digital age.",
    print:"Books, audio, and software are gathered into an openly accessible commons." },
  causes:["projectgutenberg"], effects:["wikipedia","internetarchive"] },

{ id:"bridgemancorel", year:1999, date:"1999", era:6, cat:["opensource","law"],
  title:"Bridgeman v. Corel: The Public Domain Stays Public",
  wiki:"Bridgeman Art Library v. Corel Corp.", gallery:["Public domain","Slavish copy"],
  summary:"A U.S. court rules that faithful photographic reproductions of public-domain artworks lack the originality required for copyright — so a museum cannot claim a new copyright over a straightforward photograph of an out-of-copyright painting, keeping the public domain in the public domain.",
  importance:"Bridgeman closed a loophole through which the commons was quietly being re-enclosed: institutions had claimed fresh copyrights on photographs of public-domain art, effectively privatizing works that should have been free to all. The ruling that a slavish copy adds no original authorship — and so earns no new copyright — protected the public domain from this 'copyfraud,' and underpinned the later willingness of museums and Wikimedia Commons to release high-resolution images of historic works freely.",
  impact:{
    law:"A faithful copy of a public-domain work earns no new copyright.",
    society:"The re-enclosure of public-domain art via reproduction rights is blocked.",
    print:"Free access to images of historic works is legally secured." },
  causes:["donaldsonbecket"], effects:["creativecommons","wikimediacommons"] },

{ id:"creativecommons", year:2001, date:"2001–2002", era:6, cat:["opensource","law"],
  title:"Creative Commons",
  wiki:"Creative Commons", gallery:["Lawrence Lessig","Creative Commons license","Hal Abelson"],
  summary:"Founded by Lawrence Lessig, Hal Abelson, and Eric Eldred in 2001, with its first licenses released in 2002, Creative Commons offers creators a modular toolkit — attribution, share-alike, non-commercial, no-derivatives — for voluntarily granting the public rights that copyright would otherwise withhold.",
  importance:"Creative Commons applied the copyleft idea beyond software to all of culture, and answered the defeat in Eldred with a private remedy: if the law would not enlarge the commons, creators could do it themselves, one work at a time. Its standardized, machine-readable licenses became the legal infrastructure of the open-content web — powering Wikipedia, open-access scholarship, Flickr photography, and open educational resources — and proved that a vast voluntary commons could be built atop, rather than against, the copyright system.",
  impact:{
    law:"A modular licensing toolkit lets creators grant rights copyright withholds.",
    society:"A voluntary cultural commons is built atop the existing copyright system.",
    computing:"Standard, machine-readable licenses become infrastructure for open content." },
  causes:["gplcopyleft","eldredashcroft","ostrom","bridgemancorel"], effects:["wikipedia","wikimediacommons","laion"] },

{ id:"wikimediacommons", year:2004, date:"2004", era:6, cat:["opensource","internet"],
  title:"Free Culture and Wikimedia Commons",
  wiki:"Wikimedia Commons", gallery:["Free Culture (book)","Lawrence Lessig","Media repository"],
  summary:"Lessig publishes Free Culture, arguing that an overreaching copyright regime is strangling creativity, and the Wikimedia Foundation launches Wikimedia Commons — a shared repository of freely licensed images, sound, and video that any project can draw on.",
  importance:"Wikimedia Commons operationalized the free-culture argument: a single, openly licensed media pool, contributed to by anyone and reusable by everyone, governed by the same volunteer-commons principles as Wikipedia itself. It became the world's largest repository of freely usable media, and the practical reason that an encyclopedia, a textbook, or — much later — an atlas like this one can illustrate itself entirely from a shared visual commons rather than from anyone's private holdings.",
  impact:{
    internet:"A vast pool of freely licensed media is built for anyone to reuse.",
    society:"The free-culture argument is turned into working shared infrastructure.",
    law:"Open licensing is applied at scale to images, audio, and video." },
  causes:["creativecommons","bridgemancorel"], effects:["laion"] },

// ===== VI. GIT AND DISTRIBUTED VERSION CONTROL =====
{ id:"git", year:2005, date:"2005", era:6, cat:["opensource","computing"],
  title:"The Invention of Git",
  wiki:"Git", gallery:["Linus Torvalds","Distributed version control","BitKeeper"],
  summary:"When a licensing dispute strips the Linux kernel of the proprietary BitKeeper tool it had used for version control, Linus Torvalds builds Git in a matter of days — a radically decentralized system in which every developer holds the full history, eliminating the central bottleneck of software collaboration.",
  importance:"Git's origin is a perfect miniature of the whole enclosure-and-re-commoning pattern: a free-software project loses access to a proprietary tool, and answers by building a free one so good it remakes the field. By distributing the entire project history to every participant, Git removed the central server as a point of control and let millions collaborate, branch, and merge without permission. It became the substrate of modern software development and the technical foundation on which GitHub would build a social commons of code.",
  impact:{
    computing:"Decentralized version control removes the central bottleneck of collaboration.",
    society:"Losing a proprietary tool spurs a free replacement that remakes the field.",
    labor:"Millions of developers can branch, merge, and collaborate without central permission." },
  causes:["linux","opensourceinitiative"], effects:["github"] },

{ id:"github", year:2008, date:"2008", era:6, cat:["opensource","computing"],
  title:"GitHub Launches",
  wiki:"GitHub", gallery:["Tom Preston-Werner","Chris Wanstrath","Pull request"],
  summary:"Tom Preston-Werner, Chris Wanstrath, and PJ Hyett launch GitHub, wrapping Git in a social-network interface — profiles, followers, and the pull request — that transforms open-source development from an isolated mailing-list subculture into a global, centralized town square for code.",
  importance:"GitHub made contributing to the commons social and easy: forking a project, proposing a change, and discussing it became a few clicks rather than an arcane email ritual, and a public profile turned open-source work into a visible portfolio. It became the default home of open source, host to tens of millions of projects — and in doing so it re-centralized a deliberately decentralized tool, concentrating the world's code on a single platform. That tension between an open commons and a private landlord would sharpen when Microsoft bought it.",
  impact:{
    computing:"A social interface over Git makes open-source contribution easy and visible.",
    society:"Open development becomes a global town square and a public portfolio.",
    power:"The world's code re-centralizes onto one private platform." },
  causes:["git"], effects:["microsoftgithub"] },

{ id:"microsoftgithub", year:2018, date:"2018", era:7, cat:["opensource","computing"],
  title:"Microsoft Buys GitHub",
  wiki:"GitHub", gallery:["Microsoft","Satya Nadella","Azure"],
  summary:"In a stunning reversal for the company that once called Linux a 'cancer,' Microsoft acquires GitHub for $7.5 billion — repositioning itself as a champion of open development, even as the commons of code acquires a corporate landlord.",
  importance:"Microsoft's purchase capped the great inversion: the giants that had fought open source, unable to beat it, bought into it instead, running their cloud businesses overwhelmingly on Linux and courting the developers they once disparaged. For open source it was vindication and unease in equal measure — the movement had won so completely that its central commons was now owned by a trillion-dollar firm, which would later train the Copilot AI on that public code. The episode poses the era's defining open question: can a commons stay a commons under a corporate landlord?",
  impact:{
    computing:"The home of open source is owned by a company that once opposed it.",
    power:"The world's code commons acquires a trillion-dollar corporate landlord.",
    society:"Open source's total victory and its dependence on a corporate platform arrive together." },
  causes:["github","microsoftcase"], effects:["awslicensing"] },

// ===== AWS / CLOUD CONSOLIDATION =====
{ id:"awslicensing", year:2018, date:"2010s", era:7, cat:["opensource","computing","law"],
  title:"The Cloud and the Licensing Crisis",
  wiki:"Business models for open-source software", gallery:["Amazon Web Services","Server Side Public License","MongoDB"],
  summary:"Amazon Web Services builds a vast cloud business by taking popular open-source databases — MongoDB, Redis, Elasticsearch — running them as paid managed services, and returning little to the creators; the makers respond with defensive 'source-available' licenses that pull their code out of the open-source commons.",
  importance:"The cloud exposed a structural tension copyleft never anticipated: a license can require sharing modified code, but offering software as a remote service triggers no such obligation, so a hyperscaler could profit enormously from a commons it barely sustained. The creators' answer — restrictive licenses like the SSPL that the Open Source Initiative refused to certify as open — marked a wave of defensive re-enclosure by the very projects that had been open. It reframed the central question of the era: who pays to maintain a commons that trillion-dollar platforms harvest?",
  impact:{
    computing:"Cloud providers monetize open-source software without sustaining it.",
    law:"Creators adopt restrictive 'source-available' licenses, exiting the open-source commons.",
    power:"Hyperscalers' capture of the commons provokes a wave of defensive re-enclosure." },
  causes:["debianapache","gplv3","microsoftgithub"], effects:["kubernetes"] },

{ id:"kubernetes", year:2014, date:"2014", era:7, cat:["opensource","computing"],
  title:"Kubernetes Democratizes Infrastructure",
  wiki:"Kubernetes", gallery:["Google","Cloud Native Computing Foundation","Container (virtualization)"],
  summary:"Google open-sources Kubernetes, a system for orchestrating containerized applications across data centers, and hands its stewardship to a neutral foundation — breaking the proprietary lock-in of early cloud platforms and becoming the de facto operating system of the modern cloud.",
  importance:"Kubernetes showed open source's new strategic role for the giants: by releasing its container-orchestration system freely and donating it to a vendor-neutral foundation, Google turned a potential proprietary battleground into a shared standard it could shape but not own — denying any single rival a lock-in advantage. The result was a commons that runs much of the world's cloud infrastructure, governed collectively, and a model for how even the largest firms now compete by giving foundational software away.",
  impact:{
    computing:"A shared standard for cloud orchestration breaks proprietary lock-in.",
    power:"Giving away foundational software becomes a strategy to deny rivals lock-in.",
    society:"Critical cloud infrastructure is governed as a vendor-neutral commons." },
  causes:["awslicensing","linux"], effects:[] },

{ id:"android", year:2008, date:"2008", era:6, cat:["opensource","computing"],
  title:"Android: Open Infrastructure at Planetary Scale",
  wiki:"Android (operating system)", gallery:["Open Handset Alliance","Android Open Source Project"],
  summary:"Google releases Android, built on the open Linux kernel and published as the Android Open Source Project — bypassing Apple's walled-garden model and quickly scaling to become the most widely deployed operating system on Earth.",
  importance:"Android proved that an open foundation could scale further and faster than any closed one: by giving handset makers a free, modifiable base, Google seeded an ecosystem that now runs on billions of devices. It is the clearest demonstration that open infrastructure wins on reach — though Android also became the textbook case of its limits, as Google layered proprietary services and controls atop the open core, showing how an open base can be steered toward a single company's ends.",
  impact:{
    computing:"An open Linux-based platform becomes the world's most deployed operating system.",
    power:"Open infrastructure scales past the walled garden — then is steered by proprietary layers.",
    society:"Billions of devices run on a publicly shared software base." },
  causes:["linux"], effects:[] },

// ===== VII. THE AI ENCLOSURE =====
{ id:"commoncrawl", year:2009, date:"2009", era:6, cat:["opensource","computing"],
  title:"Common Crawl",
  wiki:"Common Crawl", gallery:["Web crawler","Web archiving"],
  summary:"The non-profit Common Crawl begins publishing a free, openly accessible archive of the web — petabytes of crawled pages released for anyone to use — intended as a commons for research, and destined to become foundational training data for nearly every large language model.",
  importance:"Common Crawl was built as an open commons of the web's text, so that studying the internet at scale would not be the exclusive privilege of those who could afford to crawl it themselves. A decade later it became the raw material of the AI revolution: the open corpus on which GPT, LLaMA, and most major models were trained. In that turn lies the era's central irony — a commons created for open research became the unpriced input to closed, proprietary models worth hundreds of billions, raising the question of what is owed back to a commons that powers them.",
  impact:{
    computing:"An open archive of the web becomes the foundational corpus for language models.",
    society:"A commons built for open research becomes the unpriced input to closed AI.",
    law:"The legality of training on this scraped commons becomes a central dispute." },
  causes:["internetarchivefounded"], effects:["laion","stablediffusion","bartzanthropic"] },

{ id:"laion", year:2022, date:"2021–2022", era:7, cat:["opensource","computing","law"],
  title:"The LAION Datasets",
  wiki:"LAION", gallery:["Text-to-image model","Dataset (machine learning)"],
  summary:"The non-profit LAION releases LAION-400M and then LAION-5B — billions of image-and-caption pairs scraped from the open web and published openly — the raw material that makes open text-to-image AI possible, and the subject of later litigation over the copyrighted and private images swept up in it.",
  importance:"LAION extended the open-data ethic to images, assembling a commons of billions of picture-caption pairs that anyone could use to train a model — and that is exactly what made open generative AI possible outside the big labs. But because the dataset indexed the open web indiscriminately, it pulled in copyrighted art, watermarked stock photos, and even private medical images, turning an open-data project into the front line of the AI-copyright fight. It crystallized the era's hardest question: when the commons is scraped wholesale into a model, whose rights travel with it?",
  impact:{
    computing:"An open image-text dataset makes open text-to-image AI possible outside big labs.",
    law:"Copyrighted and private images swept into the dataset become litigation's focus.",
    society:"Open data's promise collides with the rights of those whose work it indexed." },
  causes:["commoncrawl","creativecommons","wikimediacommons"], effects:["stablediffusion","aicopyright"] },

{ id:"stablediffusion", year:2022, date:"August 2022", era:7, cat:["opensource","computing"],
  title:"The Stable Diffusion Shockwave",
  wiki:"Stable Diffusion", gallery:["Stability AI","Latent diffusion model"],
  summary:"While OpenAI keeps DALL-E behind an API, Stability AI releases Stable Diffusion with fully open weights, trained on the LAION data — letting anyone run a capable image generator on consumer hardware and igniting an explosion of local, uncontrolled generative-AI innovation.",
  importance:"Stable Diffusion did to AI what Linux had done to operating systems: it put a state-of-the-art capability into the commons, where thousands of people could inspect, fine-tune, and build on it without asking permission. Releasing the weights — not just the code — proved that open AI could compete with the closed labs and triggered a wave of consumer tools overnight. It also opened the era's defining fault line, since those open weights, trained on scraped images, made the copyright and consent questions impossible to contain.",
  impact:{
    computing:"Open model weights put state-of-the-art image generation on consumer hardware.",
    society:"An explosion of local, permissionless generative-AI tools follows immediately.",
    law:"Open weights trained on scraped images make the consent question impossible to contain." },
  causes:["laion","commoncrawl","opensourceinitiative"], effects:["llamaleak","osiaidefinition","localsovereign"] },

{ id:"llamaleak", year:2023, date:"2023", era:7, cat:["opensource","computing"],
  title:"The LLaMA Leak and the 'No Moat' Memo",
  wiki:"Llama (language model)", gallery:["Meta AI","Foundation model"],
  summary:"Meta's foundational model LLaMA leaks onto the internet in early 2023; weeks later an internal Google memo leaks declaring 'We have no moat, and neither does OpenAI… open-source models are faster, more customizable, and more capable' — and Meta leans in, releasing LLaMA 2 and 3 as open-weight models.",
  importance:"The leak and the memo together marked open weights' arrival as a strategic force in language models, not just images. Once LLaMA escaped, a global community fine-tuned and shrank it within weeks, validating the 'no moat' thesis that an open ecosystem can out-iterate any single closed lab. Meta's decision to embrace open weights — partly to commoditize a capability its rivals were trying to sell — showed open source being wielded as competitive strategy at the frontier, and seeded the wave of capable open models that followed.",
  impact:{
    computing:"Open-weight language models prove they can out-iterate closed labs.",
    power:"A giant releases open weights as strategy, to commoditize rivals' advantage.",
    society:"A global community fine-tunes and shrinks frontier models within weeks." },
  causes:["stablediffusion"], effects:["osiaidefinition","localsovereign","deepseek"] },

{ id:"osiaidefinition", year:2024, date:"2024", era:7, cat:["opensource","law","computing"],
  title:"The OSI Redefines 'Open Source AI'",
  wiki:"Open Source Initiative", gallery:["Open-source artificial intelligence","Open weights"],
  summary:"Facing models whose code is public but whose multibillion-dollar training data is hidden, the Open Source Initiative drafts an Open Source AI Definition — pushing for disclosure of training-data parameters to earn the label, and challenging 'open-weight' models that withhold the data behind them.",
  importance:"AI broke the OSI's original definition, which assumed that releasing source code meant releasing everything needed to study and rebuild a program. With models, the code is trivial and the value lies in the weights, the compute, and above all the data — much of it secret. The OSI's attempt to require data transparency for the 'open source' label confronted the industry's preferred 'open weights' compromise, in which a model is freely runnable but its training corpus stays hidden. The fight is over what 'open' can even mean when the most important input is invisible.",
  impact:{
    law:"A new definition tries to require training-data disclosure to earn the 'open source' label.",
    computing:"'Open weights' and 'open source' are distinguished as the data stays hidden.",
    society:"Openness is redefined for a technology whose key input is secret." },
  causes:["stablediffusion","llamaleak","opensourceinitiative"], effects:["localsovereign"] },

{ id:"thalerperlmutter", year:2025, date:"2025–2026", era:7, cat:["opensource","law","computing"],
  title:"Thaler v. Perlmutter: Human Authorship Holds",
  wiki:"Thaler v. Perlmutter", gallery:["United States Copyright Office","Stephen Thaler"],
  summary:"After the U.S. Copyright Office refuses to register an image generated solely by an AI, the D.C. Circuit affirms in March 2025 that copyright law requires a human author, so a wholly machine-made work cannot be registered; in March 2026 the Supreme Court denies certiorari, leaving the human-authorship requirement standing.",
  importance:"Thaler answered, for now, the question Burrow-Giles first raised in 1884: copyright protects human creative choices, and a work generated entirely by a machine has no human author to protect. The practical effect is that purely AI-generated output falls outside copyright — it enters the public domain by default, ownable by no one — even as the Copyright Office's 2025 guidance preserves protection for human-arranged works that merely use AI as a tool. The boundary between human and machine creation becomes the new frontier of what the commons contains.",
  impact:{
    law:"Copyright requires a human author; purely AI-generated works cannot be registered.",
    computing:"Wholly machine-made output falls outside copyright and into the public domain by default.",
    society:"The 1884 human-authorship test is reaffirmed against the machine." },
  causes:["burrowgiles","aicopyright"], effects:[] },

{ id:"deepseek2025", year:2025, date:"January 2025", era:7, cat:["opensource","computing"],
  title:"DeepSeek and the Open-Weight Frontier",
  wiki:"DeepSeek", gallery:["DeepSeek (chatbot)","Mixture of experts"],
  summary:"The Chinese lab DeepSeek releases open-weight reasoning models that rival the best closed systems at a fraction of the training cost — and publishes the weights freely, demonstrating that frontier-class AI need not be a proprietary American monopoly.",
  importance:"DeepSeek was the 'no moat' thesis vindicated at the frontier: an openly released model, cheap to train, matching the closed labs and wiping out the assumption that only a few well-capitalized firms could reach the frontier. By giving the weights away, it turned a national and corporate advantage into a global commons overnight and rattled markets built on the premise of proprietary AI supremacy. It is the clearest sign that, as with operating systems before, the open path may set the pace even at the cutting edge.",
  impact:{
    computing:"An openly released model rivals closed frontier systems at a fraction of the cost.",
    power:"Frontier AI is shown not to require a proprietary, well-capitalized monopoly.",
    society:"Open weights turn a national and corporate advantage into a global commons." },
  causes:["llamaleak","stablediffusion"], effects:["localsovereign"] },

{ id:"localsovereign", year:2026, date:"2025–2026", era:7, cat:["opensource","computing"],
  title:"The Rise of the Local Compute Sovereign",
  wiki:"Local AI", gallery:["Ollama","Mistral AI","Llama (language model)"],
  summary:"Tools like Ollama and a generation of small, capable open-weight models — DeepSeek, Llama, Mistral — let developers run frontier-adjacent AI entirely on their own hardware, bypassing closed corporate APIs and turning 'open source' from a development method into a stance on digital sovereignty.",
  importance:"The closing move of the thread returns to where it began: control. Running a capable model locally, with no API key and no remote provider watching, makes open weights a practical defense of autonomy — against surveillance, against platform dependence, against a future in which intelligence is rented from a handful of firms. 'Open source' here completes its evolution from a code-sharing ethic into a political stance: the insistence that the most powerful technology of the age remain something individuals can hold, inspect, and run for themselves.",
  impact:{
    computing:"Capable open-weight models run locally, bypassing closed corporate APIs.",
    society:"Open source becomes a stance on digital sovereignty and independence.",
    surveillance:"Running models locally removes the remote provider's view of every query." },
  causes:["stablediffusion","llamaleak","osiaidefinition","deepseek2025"], effects:[] }

);
