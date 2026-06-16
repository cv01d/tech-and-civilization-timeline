// SUPPLEMENT — news, print, and the reproduction of knowledge, across 5,000 years. One
// arc recurs at every scale: a technology makes reproduction cheaper; the power that
// controlled the old reproduction is threatened; it reaches for prior restraint;
// prior restraint fails; after-the-fact law (libel, copyright, serialization) replaces
// prevention; the next technology restarts the cycle.
//
// SCOPING NOTE (American frame): the "regulation" of American print is mostly the story
// of its NON-regulation. Under near-total First Amendment protection, print never gets an
// FCC; the forces that actually shaped the newspaper houses were economic — the
// advertising model, consolidation, and antitrust — far more than statute. Where the law
// bit at all, it bit through antitrust (AP v. United States, the Newspaper Preservation
// Act), not content. The public sphere the press built wasn't dismantled by the state; it
// collapsed with the advertising model, the state largely absent. (The British/continental
// story — Licensing Acts, stamp taxes, Leveson/IPSO — runs differently and is not modeled
// here.) Cross-links the existing
// printingpress, reformation, statuteofanne, aliensedition, espionageact, standardoil,
// telegraph, section230, dmca, napster cards. cat:"print". Round one: data only.
window.ATLAS_EVENTS.push(

{ id:"cylinderseal", year:-3000, date:"c. 3000–2500 BCE", era:1, cat:"print",
  title:"The First Impressions: Seals",
  wiki:"Cylinder seal",
  summary:"Mesopotamian cylinder seals — carved stone rolled across wet clay — and the stamp seals of the Indus Valley establish the founding principle of printing: press a prepared surface against a receiving material to transfer an image, again and again.",
  importance:"Thousands of years before movable type, the seal already embodied printing's core idea — reproduce a mark many times without redrawing it — and its first use was authentication: to certify ownership, seal a container, validate a document. Every later printing technology is a variation on this one move, pressing a fixed pattern onto a surface to make identical copies. The seal is the first printing device, and it ties reproduction to authority from the very beginning.",
  impact:{
    print:"The principle of mechanical reproduction — press to transfer an image — is established.",
    law:"Reproduction begins as authentication: the seal certifies and authorizes.",
    power:"Control of the seal is control of what counts as official." },
  effects:["woodblock","movabletype"] },

{ id:"woodblock", year:800, date:"c. 220–868 CE", era:1, cat:"print",
  title:"Woodblock Printing",
  wiki:"Woodblock printing",
  summary:"In Han and Tang China, artisans carve text and images in reverse into wooden blocks to print hundreds of identical impressions; the Diamond Sutra (868) becomes the oldest precisely dated printed book — and, by its colophon, the first made for free distribution.",
  importance:"Woodblock printing was the first true technology for reproducing text at scale: carve a block once, print from it indefinitely. As with Gutenberg eight centuries later, the driving application was religious — Buddhist sutras reproduced for the faithful — and the Diamond Sutra survives as the earliest dated printed book, its dedication offering it 'for universal free distribution.' The first printed book is also the first openly shared one.",
  impact:{
    print:"Text reproduction at scale is achieved a thousand years before Europe.",
    society:"Religious texts drive the first mass reproduction of the written word.",
    communications:"Carve-once, print-many becomes the dominant East Asian method for centuries." },
  causes:["cylinderseal"], effects:["movabletype","printingpress"] },

{ id:"movabletype", year:1377, date:"1040–1377", era:1, cat:"print",
  title:"Movable Type in Asia",
  wiki:"Movable type",
  summary:"Bi Sheng invents movable type in Song China around 1040 — individual ceramic characters composed and recomposed for each page; metal type follows, and Korea's Jikji (1377) is the oldest surviving book printed with metal movable type, 78 years before Gutenberg.",
  importance:"Movable type was the conceptual leap: compose each page from reusable individual characters rather than carving a unique block. Bi Sheng's ceramic type was fragile and Korea's Goryeo printers cast it in metal, producing Jikji decades before Mainz. Yet movable type did not transform Asian society as it would Europe's, because Chinese and Korean scripts needed tens of thousands of characters — making carve-once woodblock more practical. The economics that would make European movable type revolutionary simply did not hold for a writing system of 200,000 pieces.",
  impact:{
    print:"Reusable individual characters — the idea Gutenberg would industrialize — is invented in Asia.",
    technology:"Metal casting solves the fragility of ceramic type centuries before Europe.",
    society:"Character-rich scripts blunt movable type's impact — the alphabet's economics differ entirely." },
  causes:["woodblock"], effects:["printingpress"] },

{ id:"printindex", year:1501, date:"1501–1564", era:2, cat:"print",
  title:"The Church Answers Print with Censorship",
  wiki:"Index Librorum Prohibitorum",
  summary:"Recognizing print as the most dangerous technology it has faced, the Church imposes pre-publication censorship across Catholic Europe (papal bull, 1501) and publishes the Index of Forbidden Books (1564) — a list, maintained until 1966, that would come to include Copernicus, Galileo, Descartes, Locke, and Voltaire.",
  importance:"Within a generation of Gutenberg, the institution that had controlled knowledge for a millennium through its monopoly on hand-copying moved to control the press by requiring approval before printing and listing what the faithful could not read. The Index institutionalized censorship as doctrine, and Henry VIII's England built a parallel royal system of prohibited-book lists and pre-authorization. It is the opening move of a 400-year war: every authority threatened by cheap reproduction reaches first for prior restraint.",
  impact:{
    print:"Pre-publication censorship becomes the Church's and the Crown's answer to the press.",
    law:"The Index codifies forbidden knowledge as official doctrine for four centuries.",
    power:"The information monopoly broken by print is defended by licensing and prohibition." },
  causes:["printingpress","reformation"], effects:["stationers","areopagitica"] },

{ id:"stationers", year:1557, date:"1557", era:2, cat:["print","opensource"],
  title:"The Stationers' Company",
  wiki:"Worshipful Company of Stationers and Newspaper Makers",
  summary:"England charters the Stationers' Company — a guild of London printers granted a monopoly on all printing in exchange for enforcing censorship. Every book must be registered with the guild; its members profit from policing what others may print.",
  importance:"The Stationers' Company fused private interest and state censorship into a single institution: the printers themselves became the censors, paid in monopoly for keeping rivals and forbidden books out. It is the museum's earliest clear case of regulatory capture — an industry enlisted to police a medium in exchange for control of it — a model that would recur in broadcasting, telecom, and the platforms. Control of who may reproduce was handed to those who profited from limiting it.",
  impact:{
    print:"A printers' guild is made the enforcer of censorship in exchange for monopoly.",
    law:"Registration with the Stationers becomes the gate every book must pass.",
    power:"Private profit and state control of the press are aligned in one body — regulatory capture." },
  causes:["printindex"], effects:["areopagitica","statuteofanne"] },

{ id:"areopagitica", year:1644, date:"1644", era:2, cat:"print",
  title:"Milton's Areopagitica",
  wiki:"Areopagitica",
  summary:"John Milton publishes Areopagitica against Parliament's licensing order — one of the most eloquent arguments for press freedom ever written: 'Give me the liberty to know, to utter, and to argue freely according to conscience, above all liberties.'",
  importance:"Milton argued that truth emerges from open contest and that pre-publication censorship is incompatible with a free society — that a licenser standing between the writer and the public is an affront to conscience and an obstacle to truth. The case he made would be remade in every generation facing every new medium, from the printing press to the internet to the 3D-printed file. Areopagitica is the founding text of the argument against prior restraint, written a half-century before England would, almost by accident, abandon it.",
  impact:{
    print:"The classic argument against pre-publication censorship is set down.",
    law:"Prior restraint is challenged as incompatible with a free society.",
    society:"The 'marketplace of ideas' — truth from open debate — gets its great statement." },
  causes:["printindex","stationers"], effects:["licensinglapse","firstamendment"] },

{ id:"licensinglapse", year:1695, date:"1662–1695", era:2, cat:["print","law"],
  title:"The Licensing Act Lapses",
  wiki:"Licensing of the Press Act 1662",
  summary:"England's 1662 Licensing Act made all printed matter subject to government approval before publication; in 1695 Parliament simply lets it lapse — not on principle but because the system had grown corrupt and unworkable — and never restores pre-publication licensing. Publication-then-consequences becomes the default.",
  importance:"The end of English press licensing was an accident of corruption and commerce, not a triumph of philosophy — yet its effect was permanent and profound. With no licenser to satisfy, the press could now publish first and face the law only afterward, establishing the principle that consequence follows publication rather than approval preceding it. That single shift — from prior restraint to after-the-fact liability — is the foundation on which Anglo-American press freedom is built.",
  impact:{
    print:"150 years of pre-publication licensing end, never to return in England.",
    law:"Publish-first, answer-later replaces approval-before-printing as the governing principle.",
    power:"Censorship's most powerful tool, prior restraint, is abandoned by default." },
  causes:["areopagitica"], effects:["zenger","firstamendment"] },

{ id:"zenger", year:1735, date:"1704–1735", era:2, cat:"print",
  title:"The Colonial Press and the Zenger Trial",
  wiki:"John Peter Zenger",
  summary:"America's first newspapers appear 'by authority' (Boston News-Letter, 1704) until James Franklin's New-England Courant (1721) defies the government and he is jailed; Benjamin Franklin's Pennsylvania Gazette (1729) builds the ad-funded model; and in 1735 a jury acquits John Peter Zenger of seditious libel, accepting that truth is a defense.",
  importance:"The colonial press began wholly subordinate — published only with government approval — and won its independence in stages: the Franklins' defiance, the advertising-funded paper answerable to readers rather than patrons, and the Zenger jury's refusal to convict a printer for telling the truth about a corrupt governor. Though not binding precedent, the Zenger acquittal shaped American thinking about press freedom for fifty years and seeded the constitutional protections to come. The idea that truth shields the press took root here.",
  impact:{
    print:"The American press moves from 'by authority' to defiant independence.",
    law:"A jury establishes, in practice, that truth is a defense against libel.",
    power:"The advertising-funded newspaper answers to readers, not to the state." },
  causes:["licensinglapse"], effects:["firstamendment","pennypress"] },

{ id:"firstamendment", year:1791, date:"1765–1798", era:2, cat:["print","law"],
  title:"The Revolutionary Press and the First Amendment",
  wiki:"Freedom of the press in the United States",
  summary:"The Stamp Act's tax on print (1765) fuses press and liberty in colonial minds; Revolutionary newspapers, openly partisan, spread Paine's Common Sense (100,000 copies); and the First Amendment (1791) forbids any law 'abridging the freedom… of the press' — absolute in form, contested from the first, and almost at once betrayed by the 1798 Sedition Act.",
  importance:"The American press was forged as a weapon of revolution — partisan, organizing, unembarrassed about taking sides — and out of that fight came the First Amendment's flat guarantee. Jefferson, its champion, said he would prefer newspapers without a government to a government without newspapers. Yet within seven years the Sedition Act criminalized criticism of the government, and the First Amendment's protection was vindicated not by a court but by Jefferson's election in 1800 — established, at first, by political victory rather than judicial ruling.",
  impact:{
    print:"Press freedom is written into the Constitution in absolute terms.",
    law:"The guarantee is contested immediately — and first defended by ballot, not bench.",
    power:"The press and political liberty are fused at the American founding." },
  causes:["zenger","areopagitica","licensinglapse"], effects:["aliensedition","pennypress","sullivan"] },

{ id:"lithography", year:1796, date:"1796–1837", era:2, cat:"print",
  title:"Lithography",
  wiki:"Lithography",
  summary:"Alois Senefelder invents lithography — printing from a flat stone using the principle that oil and water repel — the first fundamentally new printing method since Gutenberg; chromolithography (1837) then makes cheap color reproduction possible for the first time.",
  importance:"Lithography freed reproduction from the constraints of movable type, allowing curves, art, and eventually photographs and maps to be printed cheaply, and its color descendant put posters, illustrations, and advertising imagery into mass circulation. It was the first new printing principle in three and a half centuries, and it began the visual mass culture of the nineteenth century. Image, not just text, could now be reproduced at scale.",
  impact:{
    print:"The first new printing principle since Gutenberg enables art, maps, and color.",
    society:"Cheap color imagery — posters, advertising, illustration — enters mass culture.",
    technology:"Reproduction escapes the grid of movable type." },
  causes:["printingpress"], effects:["steampress","linotype"] },

{ id:"steampress", year:1814, date:"1811–1843", era:3, cat:"print",
  title:"The Steam Press",
  wiki:"Koenig & Bauer",
  summary:"Friedrich Koenig's steam-powered press, installed at the London Times in 1814, prints 1,100 sheets an hour against 250 by hand; Richard Hoe's rotary press (1843) reaches 8,000 by printing from a continuous roll. The Industrial Revolution reaches the press, making mass-circulation newspapers physically possible.",
  importance:"Industrializing the press multiplied output tenfold and then thirtyfold, turning printing from a craft into a factory operation and making the mass daily newspaper a physical possibility for the first time. The steam and rotary presses are the machinery beneath the penny press and the great circulation wars; without them, journalism for everyone could not exist. The same industrial logic that built the textile mill now built the newsroom.",
  impact:{
    print:"Printing industrializes — output leaps from hundreds to thousands of sheets an hour.",
    labor:"The press becomes a factory operation with an industrial workforce.",
    society:"Mass-circulation newspapers become physically possible." },
  causes:["lithography"], effects:["pennypress","rotarypress","linotype"] },

{ id:"pennypress", year:1833, date:"1833", era:3, cat:"print",
  title:"The Penny Press",
  wiki:"Penny press",
  summary:"Benjamin Day's New York Sun sells for a cent, not six — funded by advertising rather than subscription, priced for everyone, and filled with crime, courts, and human interest. Circulation hits 30,000 in three years, the world's largest. The mass-market, ad-supported newspaper — and the business model that defines journalism for 150 years — is born.",
  importance:"The penny press was a business-model revolution, not a technical one: instead of selling expensive papers to merchants and elites, Day gave the paper away cheap and sold the audience to advertisers. It created the mass newspaper, mass readership, and the advertising-funded news economy that would sustain American journalism for a century and a half — and whose collapse in the 2000s would devastate it. Everything from the Sun's crime blotter to today's clickbait descends from this 1833 bargain.",
  impact:{
    print:"The advertising-funded, mass-market newspaper is invented.",
    society:"News of ordinary life reaches a mass audience for the first time.",
    power:"The 150-year business model of American journalism — and its eventual undoing — is set." },
  causes:["steampress","firstamendment"], effects:["yellowjournalism","apwire","craigslist"] },

{ id:"apwire", year:1846, date:"1846", era:3, cat:"print",
  title:"The Wire Service and Objectivity",
  wiki:"Associated Press",
  summary:"As the telegraph lets news outrun the presses, newspapers found the Associated Press (1846) to share the cost of wired dispatches — the first news wire service. Serving papers of every politics, the wire rewards factual, non-partisan reporting, and unreliable telegraph lines breed the 'inverted pyramid': the most important facts first, in case the wire is cut.",
  importance:"The wire service quietly reshaped journalism's form and ethics: because the same dispatch had to serve Republican and Democratic papers alike, plain factual reporting sold better than editorializing, nudging the press toward the ideal of objectivity. The telegraph's fragility taught reporters to front-load the essential facts, inventing the inverted-pyramid structure still taught today. The norms we think of as 'real journalism' were born from the economics and unreliability of the wire.",
  impact:{
    print:"Shared-cost wired news creates the first wire service and the objectivity norm.",
    communications:"News detaches from the newspaper, traveling faster than print can follow.",
    society:"Factual, non-partisan reporting is rewarded by serving papers of all politics." },
  causes:["pennypress","telegraph"], effects:["linotype","muckrakers"] },

{ id:"rotarypress", year:1870, date:"1843–1886", era:3, cat:"print",
  title:"Mass Production: Rotary, Pulp, Halftone",
  wiki:"Rotary printing press",
  summary:"Hoe's rotary press feeds continuous rolls at thousands of sheets an hour; cheap wood-pulp paper (1870) replaces costly rag; and the halftone process (1886) lets photographs print alongside text as patterns of dots. Together they make the cheap, illustrated mass daily — and visual journalism — possible.",
  importance:"The late nineteenth century assembled the full apparatus of the mass newspaper: the speed of the rotary press, the cheapness of pulp paper, and the halftone that finally put photographs on the page beside the words. Visual journalism was born, and the daily paper became an affordable, image-rich fixture of urban life. (The same pulp paper that democratized news also self-destructs, yellowing and crumbling — which is why most of that era's archives are lost.)",
  impact:{
    print:"Rotary speed, pulp paper, and halftone enable the cheap illustrated daily.",
    society:"Photographs join text on the page — visual journalism begins.",
    technology:"Cheap pulp paper democratizes news and quietly destroys its own archive." },
  causes:["steampress","apwire"], effects:["yellowjournalism","linotype"] },

{ id:"linotype", year:1884, date:"1884", era:4, cat:"print",
  title:"The Linotype",
  wiki:"Linotype machine",
  summary:"Ottmar Mergenthaler's Linotype casts whole lines of type from a keyboard — 6,000 characters an hour against 1,000 set by hand — eliminating the last bottleneck in newspaper production. The New York Tribune's publisher, watching a line of metal emerge, exclaims: 'You have produced a line o' type.'",
  importance:"Hand-setting type, character by character, was the final constraint on how much a newspaper could print; the Linotype shattered it, mechanizing composition and letting papers grow fat with pages. It defined commercial typesetting for the next sixty years and made the great metropolitan dailies possible. It is also the first of the print trades to be automated away — by phototypesetting, then by software — a fate the typesetter shared with the compositor and the paste-up artist.",
  impact:{
    print:"Line-casting mechanizes typesetting and removes the last limit on newspaper size.",
    labor:"The hand compositor's craft begins its long automation toward extinction.",
    society:"The fat metropolitan daily, dense with pages, becomes possible." },
  causes:["rotarypress","lithography","apwire"], effects:["desktoppublishing"] },

{ id:"yellowjournalism", year:1895, date:"1883–1898", era:4, cat:"print",
  title:"Yellow Journalism",
  wiki:"Yellow journalism",
  summary:"Joseph Pulitzer's New York World (from 1883) and William Randolph Hearst's Journal (from 1895) wage a circulation war of sensation, scandal, and fabrication — 'yellow journalism' — that helps stampede the country into the Spanish-American War in 1898. Hearst is said to have told an artist: 'You furnish the pictures and I'll furnish the war.'",
  importance:"The Pulitzer–Hearst circulation war is the nineteenth century's misinformation crisis: emotionally manipulative, exaggerated, often invented content optimized to sell papers, with consequences up to and including war. It established that the same mass-market engine that informs the public can inflame it, and that engagement and truth pull in different directions — the exact tension that returns with cable news and the social feed. Pulitzer's World also funded real investigation (Nellie Bly's asylum exposé), showing both faces of the mass press at once.",
  impact:{
    print:"Sensation and fabrication are optimized for circulation — engagement over truth.",
    power:"Inflammatory coverage helps push the nation into war.",
    society:"The mass press is revealed to inflame as readily as it informs." },
  causes:["pennypress","rotarypress"], effects:["muckrakers","dominionfox"] },

{ id:"muckrakers", year:1906, date:"1902–1912", era:4, cat:"print",
  title:"The Muckrakers and the Fourth Estate",
  wiki:"Muckraker",
  summary:"Investigative journalists turn the mass press into an accountability machine: Upton Sinclair's The Jungle (1906) exposes the meatpacking trade, Ida Tarbell dissects Standard Oil, Lincoln Steffens maps municipal corruption — producing the Pure Food and Drug Act, the breakup of Standard Oil, and a wave of Progressive reform.",
  importance:"The muckrakers were the highest expression of the press as 'Fourth Estate' — a check on private and public power answerable to no election. Their investigations translated directly into law and antitrust action, proving that aggressive reporting could reform a country. It is the affirmative case for a free press that all the censorship fights were really about: not merely the right to print, but the public good of holding power to account, the function whose later collapse would become a crisis for democracy itself.",
  impact:{
    print:"Investigative journalism becomes a direct engine of law and reform.",
    law:"Reporting produces the Pure Food and Drug Act and the Standard Oil breakup.",
    power:"The press demonstrates its role as an unelected check on power." },
  causes:["apwire","yellowjournalism"], effects:["nearvmn","sullivan","localnewscrisis"] },

{ id:"nearvmn", year:1931, date:"1931", era:4, cat:["print","law"],
  title:"Near v. Minnesota: No Prior Restraint",
  wiki:"Near v. Minnesota",
  summary:"The Supreme Court strikes down a Minnesota law that let courts shut 'malicious, scandalous and defamatory' newspapers — the first major ruling protecting the American press from government censorship before publication. The government may not stop the presses except in the most extreme circumstances.",
  importance:"Near constitutionalized the principle England had stumbled into in 1695: that the state cannot prevent publication, only answer it afterward. It made prior restraint presumptively unconstitutional under the First Amendment, the bedrock protection that would shield the Pentagon Papers forty years later. After centuries of licensers, indexes, and Star Chambers, the highest court in America finally held that the censor's most powerful tool was off the table.",
  impact:{
    law:"Prior restraint of the press is held presumptively unconstitutional.",
    print:"The government may not stop a publication except in the gravest circumstances.",
    power:"The censor's strongest weapon is constitutionally disarmed." },
  causes:["muckrakers","firstamendment"], effects:["pentagonpapers","sullivan"] },

{ id:"sullivan", year:1964, date:"1964", era:5, cat:["print","law"],
  title:"NYT v. Sullivan: Actual Malice",
  wiki:"New York Times Co. v. Sullivan",
  summary:"As Alabama juries hand down ruinous libel verdicts to silence Northern coverage of the civil-rights movement, the Supreme Court unanimously rules that a public official cannot win a libel suit over their official conduct without proving 'actual malice' — knowing falsity or reckless disregard for the truth. It becomes the most important press-freedom case in American history.",
  importance:"Sullivan recognized that the threat to the press was no longer the censor but the libel suit, and that the chill of potential liability would silence legitimate reporting unless some false statements were protected. By demanding proof of actual malice, it made it extremely hard for officials and public figures to punish the press for honest error — deliberately, so that 'uninhibited, robust, and wide-open' debate could survive. For sixty years it has been the legal foundation of accountability journalism in the United States.",
  impact:{
    law:"Public officials must prove 'actual malice' to win a libel suit against the press.",
    print:"Honest error is shielded so robust public debate can survive.",
    power:"The libel suit, not the censor, is recognized as the modern threat to the press." },
  causes:["firstamendment","nearvmn","muckrakers"], effects:["pentagonpapers","sullivanthreat","dominionfox"] },

{ id:"pentagonpapers", year:1971, date:"1971", era:5, cat:["print","law"],
  title:"The Pentagon Papers",
  wiki:"New York Times Co. v. United States",
  summary:"The Nixon administration seeks to enjoin the New York Times and Washington Post from publishing a classified history of the Vietnam War — the first attempt since Near to gag a specific publication on national-security grounds. In fifteen days the Supreme Court rules 6–3 that the government has not met the 'heavy burden' for prior restraint. The papers publish.",
  importance:"The Pentagon Papers case tested Near against the most powerful argument for censorship — national security — and the press won: the Court held that even secrecy claims must clear a bar so high it has never since been met. It affirmed that the government must show grave, irreparable harm to stop a presses, and effectively took prior restraint off the table for good. It is the high-water mark of American press freedom, and the precedent invoked by every later fight over publishing secrets, down to the 3D-gun files.",
  impact:{
    law:"National-security prior restraint is held to a bar never since met.",
    print:"The press's right to publish even classified material is affirmed.",
    power:"Secrecy claims are subordinated to the public's right to know." },
  causes:["nearvmn","sullivan"], effects:["branzburg","ghostguns"] },

{ id:"branzburg", year:1972, date:"1972–2005", era:5, cat:["print","law"],
  title:"Branzburg and the Source Problem",
  wiki:"Branzburg v. Hayes",
  summary:"The Supreme Court rules 5–4 that journalists have no First Amendment privilege to refuse to name their sources to a grand jury. The ruling is narrow and lower courts carve out qualified protections, but with no federal shield law reporters can be subpoenaed and jailed — as Judith Miller is, serving 85 days in 2005 rather than reveal a source.",
  importance:"Branzburg exposed the limit of press freedom: the right to publish does not include a clear right to protect the confidential sources that make investigative reporting possible. Without a federal shield law, the promise of confidentiality a journalist makes to a whistleblower is legally fragile, enforceable only by the reporter's willingness to go to jail. Judith Miller's imprisonment dramatized the gap, and the failure of federal shield legislation across decades leaves it open to this day.",
  impact:{
    law:"Journalists are held to have no firm constitutional privilege to protect sources.",
    print:"Confidential sourcing — the basis of investigative reporting — is left legally exposed.",
    power:"The state retains the power to compel reporters to name whistleblowers." },
  causes:["pentagonpapers"], effects:["sullivanthreat"] },

{ id:"crossownership", year:1969, date:"1969–1996", era:5, cat:["print","law"],
  title:"Chains, Cross-Ownership, and the Public Company",
  wiki:"Concentration of media ownership",
  summary:"Newspaper chains go public (Gannett 1967, Knight Ridder 1969, the Washington Post 1971), shifting papers' first obligation from public service to shareholder returns; the FCC bars one company from owning a paper and a TV station in the same market (1969) — a rule steadily weakened and, by the 1996 Telecom Act, largely undone.",
  importance:"Two structural shifts set up the coming collapse: the conversion of family-owned papers into publicly traded corporations answerable to Wall Street, and the rise and fall of rules meant to stop any one company from dominating a market's media. As long as advertising flowed, the shareholder model produced fat profits; when revenue cratered, the same model demanded the cuts that hollowed newsrooms out. Consolidation concentrated ownership just as the ground was about to give way beneath it.",
  impact:{
    print:"Newspapers' first duty shifts from public service to shareholder returns.",
    law:"Cross-ownership limits rise to curb media monopoly, then are dismantled.",
    power:"Ownership concentrates just before the advertising base collapses." },
  causes:["muckrakers"], effects:["printpeak","aldencapital"] },

{ id:"printpeak", year:1984, date:"1982–1984", era:5, cat:"print",
  title:"Peak Print",
  wiki:"Newspaper",
  summary:"USA Today launches in 1982 — the first national daily printed simultaneously in many cities by satellite, with color and short stories. In 1984 U.S. newspaper circulation peaks near 63 million daily copies and ad revenue near $48 billion, with routine 20% profit margins. It is the summit from which everything after is descent.",
  importance:"The mid-1980s were the apex of the American newspaper: near-universal, locally monopolistic, fabulously profitable, and central to civic life. USA Today's satellite-printed national format and reader-friendly design pointed forward, but the peak itself is what matters — because the institution would never be larger, richer, or more powerful again. Within two decades the business model invented in 1833 would collapse, and the descent from this summit is the story of the cards that follow.",
  impact:{
    print:"American newspapers reach their maximum reach, revenue, and profit.",
    society:"The daily paper is a near-universal, locally monopolistic civic institution.",
    power:"The summit is reached — everything afterward is decline." },
  causes:["crossownership","linotype"], effects:["craigslist","newspapercollapse"] },

{ id:"xerography", year:1959, date:"1938–1976", era:5, cat:"print",
  title:"Xerography and the Copier Crisis",
  wiki:"Xerography",
  summary:"Chester Carlson's electrostatic copying — rejected by IBM, RCA, and dozens of others before Xerox — reaches the office with the plain-paper Xerox 914 (1959), and Xerox revenue leaps from $33M to $1.7B in a decade. Suddenly anyone can copy anything, igniting the first mass copyright crisis and the 'fair use' doctrine codified in the 1976 Copyright Act.",
  importance:"The office copier democratized reproduction — every worker became a printer — and immediately reopened the question the Gutenberg press had first posed: what does copyright mean when anyone can reproduce anything? Libraries and academics copied freely, publishers sued, and Congress answered by writing 'fair use' explicitly into law with four balancing factors. The copier is one more turn of the eternal cycle: a cheaper reproduction technology, a threatened rights-holder, and a legal compromise after the fact.",
  impact:{
    print:"Plain-paper copying puts reproduction on every office desk.",
    law:"The copier forces 'fair use' into the 1976 Copyright Act.",
    society:"Casual reproduction of anything becomes an everyday act." },
  causes:["printingpress"], effects:["desktoppublishing","dmca"] },

{ id:"desktoppublishing", year:1985, date:"1984–1991", era:5, cat:["print","computing"],
  title:"Desktop Publishing",
  wiki:"Desktop publishing",
  summary:"The Macintosh (1984), Apple's LaserWriter, and Aldus PageMaker (1985), unified by PostScript, let one person design and typeset a professional publication at a desk and print it — collapsing the centuries-old trades of compositor, typesetter, and paste-up artist within a decade. The 500-year-old craft of the typesetter is eliminated by software.",
  importance:"Desktop publishing put the entire apparatus of professional print — fonts, layout, typesetting — into a single computer and a laser printer, ending the hot-metal era and the skilled trades built around it. It democratized publishing to anyone with a Mac, seeding zines, newsletters, and small presses, while erasing jobs that had existed since Gutenberg. It is the moment the page became fully digital, the necessary precursor to the web's dissolution of print itself.",
  impact:{
    print:"Professional publishing collapses onto a single desktop computer.",
    labor:"The typesetter, compositor, and paste-up trades vanish within a decade.",
    computing:"The page becomes a fully digital, software-defined object." },
  causes:["linotype","xerography"], effects:["craigslist"] },

{ id:"printing3d", year:1986, date:"1986–2010", era:5, cat:"print",
  title:"3D Printing: Reproduction Makes Objects",
  wiki:"3D printing",
  summary:"Charles Hull patents stereolithography (1986) and coins 'additive manufacturing' — building objects layer by layer from a digital file; Selective Laser Sintering and Fused Deposition Modeling follow. The open-source RepRap project and MakerBot (2009) bring sub-$1,000 desktop 3D printers, turning 'printing' from making copies of pages into making physical things.",
  importance:"3D printing extends the 5,000-year logic of reproduction from images to objects: where every prior printing technology copied a flat original, additive manufacturing builds a three-dimensional thing from a digital design, layer by layer. Industrial prototyping gave way to printed implants, jet-engine parts, and consumer desktop machines, collapsing the distance between a file and a physical object. It sets up the era's hardest question — when the file is the thing, what does it mean to regulate, copy, or forbid an object?",
  impact:{
    print:"Reproduction extends from copying pages to fabricating physical objects.",
    technology:"Additive manufacturing builds things layer by layer from a digital file.",
    labor:"The distance between a design file and a finished object collapses." },
  causes:["desktoppublishing"], effects:["ghostguns"] },

{ id:"craigslist", year:1995, date:"1995–2000", era:6, cat:["print","internet"],
  title:"Craigslist Eats the Classifieds",
  wiki:"Craigslist",
  summary:"Craig Newmark's free online classifieds quietly destroy the newspaper industry's highest-margin revenue — job, real-estate, auto, and personal ads, worth $19.6 billion in 2000 alone. The classified money does not migrate to newspaper websites; it simply disappears, and with it the financial foundation under local journalism.",
  importance:"Classified advertising was the cash engine of the American newspaper, and Craigslist removed it not by competing for the revenue but by making it free and watching it evaporate. No government censor had ever managed what a simple website did: pull the financial floor out from under thousands of papers. The classified collapse, compounded by the loss of display advertising to the platforms, began the deepest crisis in the history of the press — economic, not legal.",
  impact:{
    print:"The newspaper's highest-margin revenue stream is destroyed, not transferred.",
    internet:"Free online classifieds pull the financial floor from under local journalism.",
    power:"A website accomplishes what no censor could — the gutting of the press." },
  causes:["pennypress","printpeak","desktoppublishing"], effects:["newspapercollapse"] },

{ id:"newspapercollapse", year:2008, date:"2004–2009", era:6, cat:["print","internet"],
  title:"The Digital Destruction",
  wiki:"Decline of newspapers",
  summary:"Facebook, YouTube, and Google's ad tools capture display advertising with targeting newspapers can't match; the dot-com bust and the 2008 Great Recession compound the loss. Newspaper revenue falls from $49B (2006) toward $14B (2018); the Tribune Company's debt-laden buyout collapses into bankruptcy; and in 2009 papers begin closing as no two-daily city stays that way.",
  importance:"The platforms took the advertising the classifieds hadn't already drained, offering precision targeting the newspaper could never provide, and the recession turned a decline into a freefall — a decade of revenue lost in two years. The leveraged-buyout bankruptcy of the Tribune Company became the template for extracting value from dying papers, and the closures of 2009 ended the era of competing dailies. The business model born in 1833 was, by 2009, visibly broken beyond repair.",
  impact:{
    print:"Display advertising collapses to the platforms; newspaper revenue falls 70%.",
    internet:"Precision-targeted platform ads capture the press's remaining revenue.",
    labor:"Newsroom employment begins a decline that will reach 60% over two decades." },
  causes:["craigslist","printpeak","dotcom","facebook"], effects:["aldencapital","localnewscrisis"] },

{ id:"aldencapital", year:2018, date:"2010s–2019", era:7, cat:"print",
  title:"The Hedge-Fund Harvest",
  wiki:"Alden Global Capital",
  summary:"Hedge funds and private equity buy distressed newspaper chains at deep discounts and harvest them — Alden Global Capital acquires the Denver Post, Chicago Tribune, Baltimore Sun and dozens more, cutting newsrooms 50–70%, selling the real estate, and maximizing short-term returns. In 2018 Denver Post journalists publicly revolt against their own owners; nothing changes.",
  importance:"Where the platforms drained the revenue, the financial owners harvested what remained: research shows newsrooms decline fastest under hedge-fund and private-equity ownership, which strips hard-news roles — political and general-assignment reporters — first. Alden became the symbol of the model, gutting storied papers for cash flow. The Denver Post staff's open revolt against Alden gave the crisis its defining image: journalists begging the public to save their paper from its owner, to no effect.",
  impact:{
    print:"Hedge funds harvest distressed papers, cutting newsrooms 50–70%.",
    labor:"Political and general-assignment reporters are eliminated first.",
    power:"Financial extraction completes what advertising collapse began." },
  causes:["newspapercollapse","crossownership"], effects:["localnewscrisis"] },

{ id:"dominionfox", year:2023, date:"2020–2023", era:7, cat:["print","law"],
  title:"Dominion v. Fox News",
  wiki:"Dominion Voting Systems v. Fox News",
  summary:"Dominion Voting Systems sues Fox News for broadcasting false claims that its machines rigged the 2020 election; days before trial in 2023 Fox settles for $787.5 million, the largest defamation payout in media history. Discovery shows Fox hosts and executives knew the claims were false but aired them to keep viewers from defecting to Newsmax.",
  importance:"The Dominion case is the most damning documentation in American history of a major news organization knowingly broadcasting falsehood — the discovery record laid bare that the network's own people called the election-fraud claims lies even as they amplified them, for ratings. It is the Sullivan 'actual malice' standard working exactly as designed: liability for knowing falsehood, not honest error. It also reframed the modern misinformation problem, showing that the gravest disinformation can come not from the fringe but from a dominant news brand chasing its audience.",
  impact:{
    law:"The largest defamation settlement in media history enforces 'actual malice'.",
    print:"A dominant news brand is shown to have aired what its own staff called lies.",
    society:"Disinformation is traced to a mainstream outlet chasing its audience." },
  causes:["sullivan","yellowjournalism"], effects:["sullivanthreat"] },

{ id:"sullivanthreat", year:2024, date:"2023–2026", era:7, cat:["print","law"],
  title:"The Threat to Sullivan",
  wiki:"New York Times Co. v. Sullivan",
  summary:"Justices Thomas and Gorsuch write that the Court should reconsider New York Times v. Sullivan, arguing the 'actual malice' standard is not constitutionally required and states should set their own libel rules. Meanwhile the PRESS Act — a federal shield law for journalists' sources — passes the House in 2024 with bipartisan support, then dies in the Senate.",
  importance:"For the first time in sixty years, the foundational protection of American accountability journalism is under serious challenge from the Supreme Court itself: weaken Sullivan, and any public official could sue a newsroom over an honest mistake, chilling the reporting that holds power to account. At the same moment Congress again failed to give reporters a federal shield for their sources. The two together mark the most serious First Amendment pressure on the press since 1964 — arriving precisely as the institution is at its economically weakest.",
  impact:{
    law:"The 60-year-old 'actual malice' protection faces its first serious Supreme Court threat.",
    print:"Weakening Sullivan would expose newsrooms to suits over any honest error.",
    power:"The press's core legal shield is challenged as it is at its economic weakest." },
  causes:["sullivan","branzburg","dominionfox"], effects:["localnewscrisis"] },

{ id:"localnewscrisis", year:2025, date:"2024–2026", era:7, cat:["print","internet"],
  title:"The Local News Crisis",
  wiki:"News desert",
  summary:"The U.S. loses newspapers at two a week; nearly 60% of newsroom jobs are gone since 2005; 70 million people live in a news desert or a county with one fragile outlet. Newspapers sue OpenAI and Microsoft over training on their content without pay, the JCPA to force platform payments fails for a third Congress, and research ties the loss of local news to lower turnout, more corruption, and deeper polarization.",
  importance:"The collapse of local journalism has become a measurable crisis for democracy: where the watchdog disappears, voter participation falls, corruption rises, and communities polarize. The remedies are structurally blocked — the state cannot subsidize the press without compromising it, antitrust has not been turned on the platforms, and the JCPA that might force Google and Meta to pay (as Australia's code does) keeps failing. Now AI adds a new threat and a new fight, training on the very journalism it may replace. The newspaper is dying as an institution, and what succeeds it will decide whether its democratic function survives.",
  impact:{
    print:"Newspapers vanish at two a week; 70 million live in or near a news desert.",
    internet:"AI training suits and failed platform-payment bills frame the structural fight.",
    power:"The loss of local news measurably erodes turnout, accountability, and civic trust." },
  causes:["aldencapital","newspapercollapse","sullivanthreat","muckrakers"], effects:[] },

{ id:"ghostguns", year:2013, date:"2013–2026", era:7, cat:["print","law"],
  title:"The 3D-Printed Gun",
  wiki:"3D printed firearms",
  summary:"Cody Wilson fires the 'Liberator' — a pistol of 15 printed plastic parts — and posts the files, downloaded 100,000 times in two days; the State Department demands their removal as illegal arms export, and Wilson sues, calling it unconstitutional prior restraint — the Pentagon Papers argument applied to a gun file. Courts, the ATF, and four states wrestle with the question ever since: is a digital file a weapon?",
  importance:"The 3D-printed gun forces every question of information freedom and physical harm to be asked at once: when the file is the object, regulating the object means regulating the file — and that runs straight into the First Amendment and the no-prior-restraint principle the press won with the Pentagon Papers. A printed, serial-numberless 'ghost gun' used in the 2024 killing of a health-insurance executive reignited legislation, yet no federal law bars making one, and the regulatory patchwork mirrors every frontier technology in this atlas. It is the oldest cycle — cheaper reproduction, threatened power, prior restraint, failure — now reproducing not words but weapons.",
  impact:{
    print:"Reproduction reaches physical objects — and a downloadable gun file.",
    law:"Whether a digital file is a regulable weapon collides with no-prior-restraint doctrine.",
    power:"The reproduction cycle that freed the press now arms the individual, and the law is unsettled." },
  causes:["printing3d","pentagonpapers"], effects:[] },

{ id:"bennett1835", year:1835, date:"1835", era:3, cat:"print",
  title:"Bennett's New York Herald",
  wiki:"New York Herald",
  summary:"James Gordon Bennett founds the New York Herald and professionalizes news-gathering as a commercial enterprise — paid correspondents, Wall Street coverage, crime and society reporting — turning the penny-press idea into a modern newsroom built to gather news, not just print opinion.",
  importance:"Bennett took the penny press's mass-market model and built the machinery of journalism on it: a paper that aggressively went out and got the news as a business proposition, with reporters, beats, and a relentless commercial drive. The Herald became the most widely read paper in the country and the template for the news organization as enterprise. He is where American journalism stops being a printer's sideline and becomes a profession with its own ambitions.",
  impact:{
    print:"News-gathering becomes a professional, commercial enterprise.",
    power:"The newsroom as an organized business is invented.",
    society:"A paper built to get the news, not just to opine, reaches a mass audience." },
  causes:["pennypress"], effects:["greeley1841","nytimes1851","yellowjournalism"] },

{ id:"greeley1841", year:1841, date:"1841", era:3, cat:"print",
  title:"Greeley's New-York Tribune",
  wiki:"New-York Tribune",
  summary:"Horace Greeley launches the New-York Tribune — a penny paper with editorial conscience, championing reform causes from abolition to labor and giving the editorial page a moral authority that shapes a generation of American opinion.",
  importance:"Greeley proved the mass paper could carry a serious editorial voice: the Tribune married the penny press's reach to a reform agenda, making the editorial column a force in national life and Greeley himself a political figure. Where Bennett built the news machine, Greeley built the conscience, establishing the idea that a great paper has a point of view as well as a circulation. Between them they fixed the two poles — reporting and opinion — of the American press.",
  impact:{
    print:"The mass-market paper acquires a serious, reform-minded editorial voice.",
    power:"The editorial page becomes a force in national politics.",
    society:"A penny paper champions abolition and labor to a wide readership." },
  causes:["bennett1835","pennypress"], effects:["nytimes1851"] },

{ id:"nytimes1851", year:1851, date:"1851", era:3, cat:"print",
  title:"The New-York Times Is Founded",
  wiki:"The New York Times",
  summary:"Henry Raymond and George Jones found The New-York Daily Times, pitching sober, factual reporting against the sensational Herald and the partisan Tribune. It grows into the paper of record and, a century on, the plaintiff in Sullivan and the Pentagon Papers — the institution at the center of American press freedom.",
  importance:"The Times staked out the middle ground between Bennett's sensation and Greeley's advocacy — restrained, comprehensive, factual — and that posture made it, over time, the American newspaper of record. Its institutional weight would put it at the center of the two greatest press-freedom cases in U.S. history, Sullivan and the Pentagon Papers. Founded as a commercial daily like the others, it became the closest thing American journalism has to a national institution.",
  impact:{
    print:"The future paper of record is founded on sober, factual reporting.",
    law:"The institution at the heart of Sullivan and the Pentagon Papers is born.",
    society:"A model of comprehensive, restrained journalism enters the field." },
  causes:["bennett1835","greeley1841"], effects:["washingtonpost1877","wsj1889","newsweekly","sullivan","pentagonpapers"] },

{ id:"washingtonpost1877", year:1877, date:"1877", era:3, cat:"print",
  title:"The Washington Post Is Founded",
  wiki:"The Washington Post",
  summary:"The Washington Post is founded in the capital, eventually becoming one of the nation's most influential papers — co-publisher of the Pentagon Papers and the home of the Watergate investigation that brings down a president.",
  importance:"Born as a local daily in Washington, the Post grew into a paper whose proximity to power made it a central organ of national accountability journalism. It would stand beside the Times in the Pentagon Papers case and, in Watergate, demonstrate the Fourth Estate's capacity to topple a presidency through reporting alone. Its founding plants, in the capital itself, an institution that would repeatedly test the press's power against the state's.",
  impact:{
    print:"A great accountability newspaper is founded in the seat of power.",
    power:"The press gains a permanent watchdog beside the federal government.",
    law:"A future co-publisher of the Pentagon Papers enters the field." },
  causes:["nytimes1851"], effects:["scrippschain","pentagonpapers"] },

{ id:"scrippschain", year:1880, date:"1880s", era:4, cat:"print",
  title:"Scripps Builds the First Chain",
  wiki:"E. W. Scripps",
  summary:"E.W. Scripps assembles the first true newspaper chain — common ownership of dailies across many cities, with shared resources and a standardized formula — the prototype for journalism as a business operated at scale rather than a single proprietor's craft.",
  importance:"Scripps introduced the structural force that would reshape the industry: the chain, where one owner runs papers in many markets, pooling costs and imposing a formula. It was the model of ownership at scale that made newspapers attractive to investors and, eventually, to public shareholders and hedge funds. Where the great single papers built institutions, Scripps built the template for treating the newspaper as a multiplied, manageable asset — the seed of every later consolidation.",
  impact:{
    print:"The newspaper chain — common ownership across many cities — is invented.",
    power:"Journalism becomes a business operated at scale, not a single proprietor's craft.",
    labor:"The prototype for investor- and shareholder-owned newspapers is set." },
  causes:["pennypress","washingtonpost1877"], effects:["gannett1906","crossownership","consolidation20c"] },

{ id:"wsj1889", year:1889, date:"1889", era:4, cat:"print",
  title:"The Wall Street Journal",
  wiki:"The Wall Street Journal",
  summary:"Dow Jones & Company launches The Wall Street Journal, building specialized business and financial journalism — and the Dow Jones Industrial Average — into a national institution serving the commercial readership the general dailies underserved.",
  importance:"The Journal proved the power of the specialized paper: rather than chase the mass audience, it served business and finance authoritatively, and in doing so built one of the most durable and profitable franchises in journalism. Its market indices became the language of American capitalism. It demonstrated that the press could anchor itself to a particular, valuable readership — a model of focused authority distinct from the penny press's universal reach.",
  impact:{
    print:"Specialized business and financial journalism becomes a national institution.",
    power:"The press builds the indices and language of American capitalism.",
    society:"A model of focused, authoritative coverage for a particular readership emerges." },
  causes:["nytimes1851"], effects:["newsweekly"] },

{ id:"gannett1906", year:1906, date:"1906", era:4, cat:"print",
  title:"Frank Gannett's Chain Begins",
  wiki:"Frank Gannett",
  summary:"Frank Gannett begins assembling the chain of papers that bears his name — the company that, a century later, becomes the largest U.S. newspaper owner. The founding of Gannett marks the rise of the modern, professionally managed newspaper group.",
  importance:"Gannett built on Scripps's chain idea and carried it furthest, creating the corporate newspaper group that would, by the twenty-first century, own more American dailies than any other company. Its growth traces the industry's whole trajectory from family proprietorship to managed corporate scale to, finally, the distressed assets of the collapse. The chain that begins in 1906 ends as the centerpiece of the 2019 Gannett–GateHouse merger and the hedge-fund era.",
  impact:{
    print:"The future largest U.S. newspaper chain is founded.",
    power:"The professionally managed corporate newspaper group rises.",
    labor:"Ownership consolidates further toward corporate scale." },
  causes:["scrippschain"], effects:["consolidation20c","crossownership","aldencapital"] },

{ id:"consolidation20c", year:1974, date:"20th century", era:5, cat:"print",
  title:"The Consolidation Wave",
  wiki:"Concentration of media ownership",
  summary:"Through the twentieth century the family proprietors give way to public companies: Newhouse/Advance, Knight and Ridder (merging into Knight-Ridder in 1974), and Gannett accumulate metropolitan dailies, shifting newspapers' first obligation from civic mission to shareholder returns.",
  importance:"The consolidation wave converted the American newspaper from a proprietor's institution into a publicly traded asset answerable to Wall Street, and the Knight-Ridder merger of 1974 epitomized the new scale. As long as advertising flowed, the shareholder model produced handsome profits; when revenue collapsed, the same model demanded the cuts that gutted newsrooms. The shift from family to public ownership is the structural pivot on which the later catastrophe turns — the houses became assets before they became casualties.",
  impact:{
    print:"Family proprietors give way to publicly traded newspaper corporations.",
    power:"Newspapers' first duty shifts from civic mission to shareholder returns.",
    labor:"Metropolitan dailies are accumulated into shareholder-owned groups." },
  causes:["gannett1906","scrippschain","crossownership"], effects:["newspapercollapse","aldencapital"] },

{ id:"newsweekly", year:1923, date:"1923", era:4, cat:"print",
  title:"Time and the Newsweekly",
  wiki:"Time (magazine)",
  summary:"Henry Luce and Briton Hadden found Time, inventing the newsweekly and the editorial-synthesis format — digesting and interpreting the week's news for a national audience rather than reporting it raw. It is the seed of the modern news magazine and of Luce's media empire.",
  importance:"Time pioneered a new posture for the press: not the breathless daily bulletin but the weekly synthesis, packaging and interpreting events in a confident editorial voice for a mass national readership. It created the newsmagazine as a form and made Luce one of the most powerful media proprietors of the century. The model — national reach, interpretive authority, a recognizable house voice — pointed toward the consolidated, brand-driven media to come.",
  impact:{
    print:"The newsweekly and the editorial-synthesis format are invented.",
    power:"A national interpretive press voice and a major media empire are born.",
    society:"News becomes something digested and explained, not only reported." },
  causes:["nytimes1851","wsj1889","yellowjournalism"], effects:["crossownership"] },

{ id:"schenck1919", year:1919, date:"1919", era:4, cat:["print","law"],
  title:"Schenck and 'Clear and Present Danger'",
  wiki:"Schenck v. United States",
  summary:"Upholding an Espionage Act conviction for anti-draft leaflets, the Supreme Court announces the 'clear and present danger' test — Holmes's line that the First Amendment would not protect 'falsely shouting fire in a theatre.' The standard governs speech cases for decades before being progressively narrowed.",
  importance:"Schenck was the Court's first major attempt to draw the line between protected speech and punishable speech, and for a generation 'clear and present danger' licensed the suppression of wartime and radical dissent, including the press. Only over later decades was the test tightened — toward protecting all but speech inciting imminent lawless action — restoring much of the breathing room the press needs. It marks the low point of First Amendment protection from which the modern, far more speech-protective doctrine slowly climbed.",
  impact:{
    law:"The 'clear and present danger' test is born, licensing suppression of dissent.",
    print:"Wartime and radical newspapers are punished under the Espionage Act.",
    power:"The limits of free expression are drawn narrowly, then slowly widened over decades." },
  causes:["espionageact"], effects:["nearvmn","sullivan"] },

{ id:"apvus1945", year:1945, date:"1945", era:5, cat:["print","law"],
  title:"AP v. United States: Antitrust Reaches the Press",
  wiki:"Associated Press v. United States",
  summary:"The Supreme Court holds that antitrust law applies to newspapers — the Associated Press's bylaws, which let member papers block competitors from the wire, violate the Sherman Act, and the First Amendment is no shield against competition law. It is the one place 'regulation' genuinely bites the American press: not on content, but on market power.",
  importance:"AP v. United States settled that press freedom does not exempt newspapers from the rules against monopoly — that the First Amendment protects the press from the censor, not from antitrust. Justice Black wrote that a free press assumes diverse, antagonistic sources, which the law may act to preserve. In a regime built almost entirely to insulate print from the state, this is the exception that proves the rule: where American print is regulated at all, it is regulated through competition law, by acting on the houses' economic power rather than their words.",
  impact:{
    law:"Antitrust is held to apply to the press; the First Amendment is no exemption.",
    print:"Press freedom protects against the censor, not against competition law.",
    power:"The state's one real lever on print is shown to be market power, not content." },
  causes:["yellowjournalism","standardoil"], effects:["newspaperpreservation1970","crossownership"] },

{ id:"newspaperpreservation1970", year:1970, date:"1970", era:5, cat:["print","law"],
  title:"The Newspaper Preservation Act",
  wiki:"Newspaper Preservation Act",
  summary:"Congress grants competing daily newspapers an antitrust exemption to form 'joint operating agreements' — merging business operations (printing, ads, circulation) while keeping separate newsrooms — to save a 'failing' second paper in a market. A rare case of Congress regulating print, ostensibly to preserve it.",
  importance:"The Act is the inverse of AP v. United States: where the 1945 ruling used antitrust to keep the press competitive, the 1970 law suspended antitrust to keep failing papers alive — and, critics argued, propped up comfortable duopolies under the banner of preservation. It is one of the few times Congress legislated directly on the newspaper business, and it did so to manage the economics, not the content. It reveals the real terrain of American print regulation: the market, not the message.",
  impact:{
    law:"Competing dailies are exempted from antitrust to share operations and survive.",
    print:"Congress regulates the newspaper's economics, never its content.",
    power:"A preservation law also entrenches local duopolies it claims to save." },
  causes:["apvus1945"], effects:["newspapercollapse","crossownership"] },

{ id:"tornillo1974", year:1974, date:"1974", era:5, cat:["print","law"],
  title:"Tornillo: No Right of Reply",
  wiki:"Miami Herald Publishing Co. v. Tornillo",
  summary:"The Supreme Court unanimously strikes down a Florida law requiring newspapers to give political candidates a right of reply — the government cannot compel a newspaper to print anything. It confirms print's distinct, lighter regime: the exact opposite of the broadcast 'fairness doctrine,' which did force balance because spectrum is scarce.",
  importance:"Tornillo crystallized the asymmetry at the heart of American media law: broadcast could be made to carry replies and balance because spectrum is a scarce public resource licensed by the state, but print — needing no license and no spectrum — cannot be compelled to publish at all. Editorial control is absolute; the state may not commandeer a newspaper's pages. It is the clearest statement that print operates under a far lighter regime than broadcast, and a reminder that the asymmetry itself is a deliberate fact of the law.",
  impact:{
    law:"The state cannot compel a newspaper to print a reply — editorial control is absolute.",
    print:"Print's lighter regime is confirmed as the inverse of broadcast's fairness rules.",
    power:"The print/broadcast regulatory asymmetry is grounded in spectrum scarcity." },
  causes:["sullivan","nearvmn"], effects:[] },

{ id:"typewriter", year:1874, date:"1868–1874", era:3, cat:["print","computing"],
  title:"The Typewriter and QWERTY",
  wiki:"Typewriter", gallery:["Sholes and Glidden typewriter","QWERTY","Christopher Latham Sholes"],
  summary:"Christopher Latham Sholes perfects the first commercially successful typewriter, manufactured by Remington from 1874, and arranges its keys in the QWERTY layout — a design meant to keep common letter pairs from jamming that survives, unchanged, on the keyboards of the present.",
  importance:"The typewriter mechanized writing itself, standardizing the printed page outside the print shop, accelerating business and bureaucracy, and — by opening the new occupation of 'typist' — drawing women into the office in large numbers for the first time. Its QWERTY key arrangement, a solution to the mechanical problem of jamming typebars, became so entrenched that it outlived the machine entirely and persists on every computer keyboard and phone today. It is the direct ancestor of the keyboard, the interface through which most text still enters the digital world.",
  impact:{
    print:"Writing is mechanized and standardized outside the print shop.",
    society:"The 'typist' becomes a mass occupation and a path of women into the office.",
    computing:"The QWERTY keyboard layout is set and survives onto every later computer and phone." },
  causes:["printingpress"], effects:["linotype","applefounding"] }

);
