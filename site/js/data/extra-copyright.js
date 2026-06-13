// SUPPLEMENT — copyright and royalties, from the first statutes to the AI-training fight:
// the long contest over who may copy a work and who gets paid. Joins the existing
// stationers, statuteofanne, dmca, napster, kindle, sopa, printing3d cards.
// cat:["print","law"] (music/art entries note their field). Round one: data only.
window.ATLAS_EVENTS.push(

{ id:"copyright1790", year:1790, date:"1790", era:2, cat:["print","law"],
  title:"The U.S. Copyright Act of 1790",
  wiki:"Copyright Act of 1790",
  summary:"The first federal U.S. copyright law grants authors of maps, charts, and books a 14-year term, renewable once — modeled directly on Britain's Statute of Anne and grounded in the Constitution's clause to 'promote the Progress of Science and useful Arts.'",
  importance:"The 1790 Act established the American bargain at the root of all later copyright: a limited monopoly to authors as an incentive, after which works enter the public domain for everyone. Its short, renewable term reflected the founders' wariness of perpetual monopoly — a balance the next two centuries of extensions would steadily tilt toward owners.",
  impact:{
    law:"Federal copyright is established as a limited monopoly to incentivize creation.",
    print:"Authors gain a 14-year, once-renewable right to their books." },
  causes:["statuteofanne"], effects:["copyright1831","chaceact"] },

{ id:"copyright1831", year:1831, date:"1831", era:3, cat:["print","law"],
  title:"The 1831 Term Extension",
  wiki:"Copyright Act of 1831",
  summary:"Congress extends the initial U.S. copyright term to 28 years (with a 14-year renewal), the first lengthening of the copyright monopoly — and the start of a 170-year pattern of ever-longer terms.",
  importance:"The 1831 extension began the slow, relentless growth of copyright duration that would culminate in 'life plus 70 years.' Each extension was justified as fairness to authors and their heirs, but cumulatively they shrank the public domain the original bargain was meant to feed, shifting the balance from access toward ownership.",
  impact:{
    law:"The copyright term is extended for the first time, beginning a long pattern.",
    print:"Authors and heirs gain a longer monopoly at the public domain's expense." },
  causes:["copyright1790"], effects:["chaceact","copyright1909","sonnybono"] },

{ id:"chaceact", year:1891, date:"1891", era:4, cat:["print","law"],
  title:"The Chace Act: Foreign Works Protected",
  wiki:"International Copyright Act of 1891",
  summary:"The International Copyright Act (Chace Act) extends U.S. copyright protection to foreign authors for the first time — ending an era in which American publishers freely pirated British and European books without paying their authors a cent.",
  importance:"Before 1891, American publishing was built partly on cheap, unauthorized reprints of foreign works, a piracy that scandalized authors like Dickens. The Chace Act brought the U.S. toward the international copyright order, recognizing that a nation now exporting its own literature had an interest in protecting authors across borders. It is the moment American copyright went international.",
  impact:{
    law:"U.S. copyright is extended to foreign authors, ending mass reprint piracy.",
    print:"American publishers must pay foreign authors they had freely pirated.",
    power:"A literature-exporting nation joins the international copyright order." },
  causes:["copyright1831"], effects:["copyright1976"] },

{ id:"copyright1909", year:1909, date:"1909", era:4, cat:["print","law"],
  title:"The 1909 Act and the Mechanical Royalty",
  wiki:"Copyright Act of 1909",
  summary:"The 1909 revision modernizes U.S. copyright for the machine age — and, confronting the player-piano roll, creates the 'mechanical' royalty: a compulsory license letting anyone record a published song while guaranteeing the composer a set per-copy payment.",
  importance:"The 1909 Act invented the template for every later collision between copyright and a new copying machine: rather than ban the technology or grant the owner a veto, it compelled a license at a fixed rate, balancing the recording industry's freedom to operate against the composer's right to be paid. The mechanical royalty it created still governs how songwriters earn from recordings a century later.",
  impact:{
    law:"The compulsory mechanical license balances new technology against creators' pay.",
    print:"Copyright is modernized for the age of mechanical reproduction.",
    society:"The template for paying creators when machines copy their work is set." },
  causes:["copyright1831"], effects:["ascap","copyright1976"] },

{ id:"ascap", year:1914, date:"1914", era:4, cat:["print","law"],
  title:"ASCAP and Performance Rights",
  wiki:"American Society of Composers, Authors and Publishers",
  summary:"Composers and publishers found ASCAP, the first U.S. performance-rights organization — collectively licensing the public performance of music (in venues, then on radio) and distributing royalties, so creators could be paid each time their work is played.",
  importance:"ASCAP solved an impossible problem: no songwriter could track or bill every bar, theater, and station that played their music, so a collective society licensed it all and shared the proceeds. It established the performance royalty as a pillar of creative income and the collecting society as the institution that makes mass licensing work — a model later copied across media and contested in every new medium.",
  impact:{
    law:"Collective licensing makes the performance royalty enforceable at scale.",
    society:"Creators are paid each time their work is publicly performed.",
    print:"The collecting-society model for mass licensing is established." },
  causes:["copyright1909"], effects:["aicopyright"] },

{ id:"copyright1976", year:1976, date:"1976", era:5, cat:["print","law"],
  title:"The 1976 Copyright Act and Fair Use",
  wiki:"Copyright Act of 1976",
  summary:"The sweeping 1976 revision extends U.S. copyright to life-plus-50-years and, crucially, codifies 'fair use' into statute for the first time — its four factors (purpose, nature, amount, market effect) becoming the law's central safety valve for criticism, scholarship, parody, and new technology.",
  importance:"The 1976 Act is the foundation of modern American copyright, and its codified fair use is the doctrine that keeps copyright from swallowing free expression and innovation whole. Every later fight — over photocopiers, VCRs, Google Books, and AI training — is litigated through its four factors. It made the balance between owners' rights and the public's uses a matter of statutory law.",
  impact:{
    law:"Fair use is codified, becoming copyright's central safety valve.",
    print:"The modern term (life-plus-50) and framework of U.S. copyright are set.",
    society:"Criticism, scholarship, parody, and new technology gain a statutory defense." },
  causes:["chaceact","copyright1909"], effects:["dmca","googlebooks","aicopyright"] },

{ id:"sonnybono", year:1998, date:"1998", era:6, cat:["print","law"],
  title:"The Sonny Bono Term Extension",
  wiki:"Copyright Term Extension Act",
  summary:"The Copyright Term Extension Act adds 20 years to U.S. copyright — to life-plus-70 — just as early Mickey Mouse cartoons neared the public domain, earning it the nickname the 'Mickey Mouse Protection Act.' The Supreme Court upholds it in Eldred v. Ashcroft (2003).",
  importance:"The 1998 extension was the apotheosis of copyright's century-long lengthening, widely seen as corporate-driven (Disney prominent among the lobbyists) and as a near-freeze of the public domain for two decades. Its survival in court — the Constitution's 'limited times' read to permit endless extension — confirmed that the original author-and-public bargain had tilted decisively toward perpetual ownership.",
  impact:{
    law:"Copyright is extended to life-plus-70, all but freezing the public domain.",
    print:"Works nearing the public domain are pulled back for another generation.",
    power:"Corporate lobbying tilts the author-and-public bargain toward perpetual ownership." },
  causes:["copyright1831","copyright1976"], effects:[] },

{ id:"grokster", year:2005, date:"2005", era:6, cat:["print","law"],
  title:"MGM v. Grokster",
  wiki:"MGM Studios, Inc. v. Grokster, Ltd.",
  summary:"The Supreme Court rules unanimously that peer-to-peer file-sharing services can be liable for 'inducing' copyright infringement when they actively promote illegal use — narrowing the protection the Betamax case had given technology makers and reshaping the law for the post-Napster era.",
  importance:"Grokster drew the line between building a tool that can be misused (protected) and encouraging its misuse (not), a distinction that would govern liability for platforms and software for years. It pushed file-sharing further underground and toward licensed streaming, and demonstrated copyright owners' power to hold the makers of copying technology accountable for their users' acts.",
  impact:{
    law:"Technology makers can be liable for inducing infringement, narrowing Betamax.",
    print:"The post-Napster file-sharing services are pushed toward shutdown or licensing.",
    society:"The line between a misusable tool and an encouraged one is drawn." },
  causes:["napster"], effects:[] },

// ===== ROYALTY & PAYMENT-RIGHTS BATTLES =====
{ id:"royaltystandards", year:1935, date:"1930s–1940s", era:4, cat:"print",
  title:"The Royalty Standard",
  wiki:"Royalty payment",
  summary:"Through the 1930s and 1940s the book trade settles into standardized author royalties — roughly 10–15% of a hardcover's price — and separate, lower scales for the new mass-market paperback, fixing the basic economics of the author-publisher relationship for decades.",
  importance:"The royalty conventions that hardened in this era defined what it meant to earn a living as an author: a percentage of each copy sold, advanced against future earnings, with cheaper formats paying less. These norms — and the recurring fights over them as new formats appeared — structure the writer's income to this day, and every later dispute (paperback, e-book, audio) is an argument over where the line falls.",
  impact:{
    print:"Standard author royalty rates and advance-against-royalties become the norm.",
    labor:"The economics of earning a living as an author are fixed for decades.",
    power:"Lower scales for cheaper formats set up every later royalty fight." },
  causes:["printingpress"], effects:["ebookroyalty","publishingpaidme"] },

{ id:"droitdesuite", year:1973, date:"1970s", era:5, cat:["print","law"],
  title:"Droit de Suite: The Resale Royalty",
  wiki:"Droit de suite",
  summary:"The 'droit de suite' — an artist's right to a share of the profit each time their work is resold — spreads across Europe in the postwar decades, recognizing that a creator should benefit when their work's value rises. The United States repeatedly rejects it.",
  importance:"The resale royalty embodies a continental view of authorship absent from American law: that the creator retains a moral and economic stake in a work even after selling it, sharing in its appreciation. Europe's adoption and America's rejection mark a deep divergence over what an artist is owed — the European droit moral versus the U.S. treatment of art as ordinary, alienable property.",
  impact:{
    law:"Europe grants artists a share of resale profits; the U.S. refuses.",
    print:"A continental conception of the creator's continuing stake is codified.",
    power:"The Euro-American divide over what authorship is owed is drawn." },
  causes:["copyright1976"], effects:[] },

{ id:"ebookroyalty", year:1999, date:"1990s–2010s", era:6, cat:["print","law"],
  title:"The E-Book Royalty Fight",
  wiki:"E-book",
  summary:"As e-books arrive, publishers set author royalties at about 25% of net receipts — far below the effective rate on print and far below what authors argue a near-costless digital copy should yield. The split becomes a defining grievance of the digital-publishing era.",
  importance:"The e-book royalty dispute is the latest chapter of the format-and-pay fight that began with the paperback: a new, cheaper-to-produce format, and a struggle over how the savings are divided between author and publisher. Authors argue that digital's near-zero marginal cost should mean higher rates; publishers counter that the rate sustains the whole enterprise. The standoff remains unresolved.",
  impact:{
    print:"E-book royalties are set far below print, sparking an enduring author grievance.",
    labor:"Authors fight over how digital's near-zero copying cost is divided.",
    law:"The format-and-royalty contest reaches the digital edition." },
  causes:["royaltystandards","kindle"], effects:["hachetteamazon"] },

{ id:"googlebooks", year:2005, date:"2004–2015", era:6, cat:["print","law"],
  title:"Google Books and Fair Use",
  wiki:"Authors Guild, Inc. v. Google, Inc.",
  summary:"Google begins scanning millions of library books without permission in 2004; a proposed class-action settlement is rejected by a court in 2011; and in 2015 the courts rule that Google's scanning to create a searchable index — showing only snippets — is transformative fair use, ending a decade of litigation.",
  importance:"Google Books was the largest copyright confrontation of the digital age, pitting mass digitization against authors' rights, and its resolution profoundly shaped the law: copying entire books to build a search tool could be fair use if the purpose was transformative and the market harm slight. That holding became a key precedent for everything from data-mining to, eventually, the AI-training fights.",
  impact:{
    law:"Mass scanning to build a searchable index is held transformative fair use.",
    print:"Authors' control over digitization yields to a broad reading of fair use.",
    society:"A precedent for data-mining and AI training is set." },
  causes:["copyright1976"], effects:["aicopyright","internetarchive"] },

{ id:"applebookprice", year:2012, date:"2012", era:7, cat:["print","law"],
  title:"The E-Book Price-Fixing Case",
  wiki:"United States v. Apple Inc.",
  summary:"The DOJ sues Apple and five major publishers for colluding to fix e-book prices under an 'agency' model meant to break Amazon's $9.99 dominance; the publishers settle and Apple is found liable. The outcome reinforces Amazon's grip on the e-book market.",
  importance:"The case captured the trap of the digital book trade: publishers' coordinated attempt to escape Amazon's pricing power was itself illegal price-fixing, and defeating it left Amazon stronger than ever. It showed how antitrust law, applied to the publishers' cartel rather than the platform's dominance, can entrench the very monopoly the publishers feared — a recurring paradox of platform-era competition policy.",
  impact:{
    law:"Publishers' collusion to set e-book prices is found illegal; Apple liable.",
    print:"The attempt to break Amazon's pricing power backfires, entrenching it.",
    power:"Antitrust against the cartel strengthens the platform monopoly." },
  causes:["kindle","ebookroyalty"], effects:["hachetteamazon"] },

{ id:"hachetteamazon", year:2014, date:"2014", era:7, cat:["print","law"],
  title:"The Hachette–Amazon Standoff",
  wiki:"Hachette Book Group",
  summary:"In a public dispute over e-book pricing and terms, Amazon delays shipments and removes pre-order buttons for Hachette titles; after months and a high-profile authors' revolt, Hachette wins some concessions — a rare check on Amazon's leverage over publishers.",
  importance:"The Hachette fight exposed the raw power Amazon held over publishing: by simply making a publisher's books harder to buy, the retailer could pressure terms, holding authors' livelihoods hostage to a corporate negotiation. The authors' public backlash forced a partial retreat, one of the few times a publisher pushed back successfully, but the episode underscored how completely the platform now controlled the marketplace for books.",
  impact:{
    print:"Amazon weaponizes its store against a publisher in a pricing dispute.",
    labor:"Authors' livelihoods become hostage to a platform negotiation.",
    power:"A rare partial check on Amazon's leverage over publishing is won." },
  causes:["applebookprice","ebookroyalty"], effects:[] },

{ id:"tasini", year:2001, date:"2001", era:6, cat:["print","law"],
  title:"NYT v. Tasini: Freelancers' Digital Rights",
  wiki:"New York Times Co. v. Tasini",
  summary:"The Supreme Court rules that newspapers and magazines may not republish freelancers' articles in electronic databases without separate permission and payment — the print license did not include digital rights. Publishers must compensate freelancers for database use.",
  importance:"Tasini established that selling an article for print did not silently hand over its digital future, protecting freelance writers as their work migrated to searchable databases. Publishers responded by demanding all-rights contracts going forward, and many simply purged freelance work from archives — an early, instructive case of how the move to digital reopened who owns what, and who gets paid.",
  impact:{
    law:"A print license does not include digital republication rights.",
    print:"Publishers must pay freelancers for database use — or purge their work.",
    labor:"Freelance writers' digital rights are protected as work moves online." },
  causes:["copyright1976"], effects:["aicopyright"] },

{ id:"cariouprince", year:2013, date:"2013", era:7, cat:["print","law"],
  title:"Cariou v. Prince: Appropriation Art",
  wiki:"Cariou v. Prince",
  summary:"An appeals court rules that appropriation artist Richard Prince's reworking of another photographer's images can be transformative fair use even without commenting on the original — broadening the transformative-use doctrine for visual art and unsettling the line between homage and theft.",
  importance:"Cariou pushed fair use further toward protecting works that recontextualize rather than critique their sources, a boon to appropriation and remix culture but a worry for the photographers and artists whose work is taken. It deepened the central modern copyright question — when does copying become creating? — that the AI era would soon make acute, as machines remix the entire corpus of human work.",
  impact:{
    law:"Transformative fair use is broadened to cover recontextualizing visual art.",
    print:"The line between appropriation and infringement is blurred further.",
    society:"The 'when does copying become creating?' question sharpens before the AI era." },
  causes:["copyright1976"], effects:["aicopyright"] },

{ id:"happybirthday", year:2015, date:"2015", era:7, cat:["print","law"],
  title:"'Happy Birthday' Freed",
  wiki:"Happy Birthday to You",
  summary:"After a lawsuit challenges the copyright that Warner/Chappell had claimed on 'Happy Birthday to You' — collecting some $2M a year in licensing — a court finds the claim invalid, and a 2016 settlement places the world's most famous song firmly in the public domain.",
  importance:"The 'Happy Birthday' case exposed the absurd reach of copyright claims: a song everyone knew, sung universally, locked behind a license of dubious validity for decades. Its liberation became a celebrated victory for the public domain and a vivid lesson in how aggressively, and sometimes baselessly, copyright can be asserted over shared culture.",
  impact:{
    law:"A dubious copyright over a universal song is struck down.",
    print:"The world's most famous song is freed into the public domain.",
    society:"The overreach of copyright claims over shared culture is exposed." },
  causes:["sonnybono"], effects:[] },

{ id:"internetarchive", year:2020, date:"2020–2024", era:7, cat:["print","law"],
  title:"The Internet Archive Lending Case",
  wiki:"Hachette v. Internet Archive",
  summary:"During the pandemic the Internet Archive launches an 'Emergency Library,' lending scanned books without the usual one-copy-one-loan limit; major publishers sue, and courts rule against the Archive's 'controlled digital lending,' finding it copyright infringement rather than fair use.",
  importance:"The case pitted the library ideal — universal access to knowledge — against publishers' digital-licensing revenue, and the courts sided firmly with the market. The defeat of controlled digital lending constrained how libraries can lend digital books, reinforcing that in the e-book era libraries license access on publishers' terms rather than owning copies, a quiet but profound shift in the public's relationship to books.",
  impact:{
    law:"Scanning and lending books beyond owned copies is held infringement, not fair use.",
    print:"Libraries are confined to licensing digital books on publishers' terms.",
    society:"The library's traditional ownership of books erodes in the digital age." },
  causes:["googlebooks","kindle"], effects:[] }

);
