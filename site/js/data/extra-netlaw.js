// SUPPLEMENT — the legal scaffolding of the internet, in granular detail: the cases that
// built Section 230 (Cubby, Stratton Oakmont, Zeran), the Communications Decency Act it
// was buried inside, the net-neutrality litigation chain (Comcast/BitTorrent, the 2008 and
// 2014 court losses, the 2015 Title II order, Netflix–Comcast interconnection, the Four
// Internet Freedoms), the broadband-classification orders rendered as their own cards
// (Cable Modem Order, Brand X), and the Section 230 cases of the 2020s (Taamneh). These
// thicken the thread already sketched by section230, renoaclu, fostasesta, gonzalez,
// netneutrality, netneutralitywars, titleone, telecomact. cat:"internet" (+ law). Data only.
window.ATLAS_EVENTS.push(

// ===== SECTION 230's CASE LINEAGE =====
{ id:"cubbycompuserve", year:1991, date:"1991", era:6, cat:["internet","law"],
  title:"Cubby v. CompuServe: The Distributor Rule",
  wiki:"Cubby, Inc. v. CompuServe Inc.",
  summary:"A federal court holds CompuServe not liable for defamatory content posted by users — because it exercised no editorial control, it is a mere 'distributor' like a newsstand, liable only if it knew of the content. The first ruling on online-service liability rewards hands-off platforms.",
  importance:"Cubby imported an old rule from print — distributors aren't liable unless they know — into the new world of online services, and concluded that a platform which didn't moderate was like a bookstore, not a publisher. The logic protected CompuServe precisely because it stayed out of its forum. It set up the perverse trap the next case would spring: that the safest legal course was to do nothing at all, a result so plainly backward that Congress would eventually legislate around it.",
  impact:{
    law:"Online services are treated as distributors, liable only for content they know of.",
    communications:"A platform escapes liability precisely because it does not moderate.",
    society:"The first online-liability rule rewards the hands-off host." },
  causes:["nsfnet"], effects:["strattonoakmont","section230"] },

{ id:"strattonoakmont", year:1995, date:"1995", era:6, cat:["internet","law"],
  title:"Stratton Oakmont v. Prodigy: The Moderator's Penalty",
  wiki:"Stratton Oakmont, Inc. v. Prodigy Services Co.",
  summary:"A New York court holds Prodigy liable for a user's defamatory post — because Prodigy moderated its boards and marketed itself as family-friendly, it was a 'publisher,' fully responsible for everything users wrote. The mirror image of Cubby: moderate, and you own all of it.",
  importance:"Together with Cubby, this case created the impossible bind at the heart of early internet law — a platform that ignored its users was a protected distributor, but one that tried to keep its space clean became a publisher liable for every word. The rule punished exactly the responsible behavior society wanted, giving platforms a powerful incentive to abandon moderation entirely. Representatives Chris Cox and Ron Wyden read the decision, saw the perverse result, and wrote the twenty-six words designed to dissolve it.",
  impact:{
    law:"A platform that moderates is deemed a publisher, liable for all user content.",
    communications:"The case creates an incentive to abandon moderation to escape liability.",
    society:"The Cubby–Prodigy bind directly prompts the drafting of Section 230." },
  causes:["cubbycompuserve"], effects:["cda1996","section230"] },

{ id:"cda1996", year:1996, date:"February 8, 1996", era:6, cat:["internet","law"],
  title:"The Communications Decency Act",
  wiki:"Communications Decency Act",
  summary:"Buried in the sweeping Telecommunications Act of 1996, the CDA criminalizes transmitting 'indecent' or 'patently offensive' material to minors online — and, in a small provision drafted to fix the Cubby–Prodigy trap, contains Section 230. The ACLU challenges the speech provisions immediately.",
  importance:"The CDA tried to tame the young internet by importing broadcast-style decency rules, threatening criminal penalties for online speech deemed unfit for minors — and it carried, almost unnoticed, the Section 230 immunity that would outlive it. The censorship provisions drew instant constitutional challenge and would fall the next year in Reno v. ACLU, while the obscure liability shield survived to become the most consequential law of the commercial internet. Rarely has a statute's incidental clause so vastly outweighed its headline purpose.",
  impact:{
    law:"Online 'indecency' is criminalized — and Section 230 is enacted in the same statute.",
    communications:"Broadcast-style decency rules are first applied to the internet.",
    society:"The provision meant to protect children is struck down; its footnote remakes the web." },
  causes:["strattonoakmont","telecomact"], effects:["section230","renoaclu"] },

{ id:"zeranaol", year:1997, date:"1997", era:6, cat:["internet","law"],
  title:"Zeran v. AOL: Immunity Goes Broad",
  wiki:"Zeran v. America Online, Inc.",
  summary:"The Fourth Circuit gives Section 230 its most expansive reading: AOL faces no liability for user content even after being notified it was harmful and failing to remove it. The decision sets the precedent that platform immunity is near-absolute, even with knowledge.",
  importance:"Zeran was the case that turned twenty-six words into a fortress: courts read Section 230 to bar liability even when a platform was told, repeatedly, that content was false and damaging and did nothing. That maximalist interpretation — immunity regardless of notice — became the settled law that let platforms scale to billions of users without fear of liability for what those users posted. It is the reason the modern platform internet exists in its present form, and the reason the backlash against Section 230 runs so hot.",
  impact:{
    law:"Section 230 immunity is held to apply even after notice of harmful content.",
    communications:"Platforms gain near-absolute protection for user-posted material.",
    society:"The most expansive reading of platform immunity becomes the governing precedent." },
  causes:["section230","renoaclu"], effects:["fostasesta","gonzalez"] },

{ id:"twittertaamneh", year:2023, date:"2023", era:7, cat:["internet","law","social"],
  title:"Twitter v. Taamneh: Platforms Off the Hook",
  wiki:"Twitter, Inc. v. Taamneh",
  summary:"The Supreme Court unanimously rules that hosting terrorist content does not make a platform liable for 'aiding and abetting' a terrorist attack — finding an independent reason platforms aren't liable, and so relieving the pressure on Section 230 that its companion case, Gonzalez v. Google, had threatened to bring to a head.",
  importance:"Taamneh defused the most serious judicial threat to Section 230 without ruling on Section 230 at all: by holding that merely hosting content, even ISIS content, was not 'aiding and abetting' an attack, the Court found platforms not liable on other grounds and left the immunity untouched. Decided alongside Gonzalez — where the Court declined to reach the Section 230 question — it preserved the legal status quo of the platform internet. The twenty-six words survived their closest brush with the Supreme Court, intact but more politically exposed than ever.",
  impact:{
    law:"Hosting terrorist content is held not to be 'aiding and abetting' an attack.",
    communications:"Platforms are found not liable on grounds that leave Section 230 untouched.",
    society:"Section 230 survives its closest Supreme Court encounter unchanged." },
  causes:["gonzalez","zeranaol"], effects:[] },

// ===== BROADBAND CLASSIFICATION, RENDERED IN DETAIL =====
{ id:"cablemodemorder", year:2002, date:"March 2002", era:6, cat:["internet","law"],
  title:"The Cable Modem Order",
  wiki:"National Cable & Telecommunications Ass'n v. Brand X Internet Services",
  summary:"The FCC classifies cable broadband as a Title I 'information service' rather than a Title II 'telecommunications service.' The distinction is not technical but legal: Title II common carriers must share their infrastructure with competitors at regulated rates; Title I services need not. With one reclassification, cable companies are freed from the open-access duty that had created ISP competition.",
  importance:"This single order is the hinge of American broadband policy. By declaring cable internet an 'information service,' the FCC lifted it out of the common-carrier regime — meaning cable companies no longer had to lease their lines to rival ISPs, and the competitive market the 1996 Act had created began to die. The choice was a legal classification with monopoly consequences, made not by Congress but by an agency, and everything that follows — the duopoly, the net-neutrality wars, Brand X — flows from it. The most consequential broadband decision in U.S. history is also among the least understood.",
  impact:{
    law:"Cable broadband is placed under Title I, outside common-carrier obligations.",
    power:"Cable companies are freed from the duty to share infrastructure with rival ISPs.",
    communications:"The legal foundation of the cable–telephone broadband duopoly is laid." },
  causes:["computerinquiry2","dialupisp"], effects:["dslreclassified","brandx"] },

{ id:"dslreclassified", year:2005, date:"August 5, 2005", era:6, cat:["internet","law"],
  title:"DSL Joins Title I",
  wiki:"National Cable & Telecommunications Ass'n v. Brand X Internet Services",
  summary:"The FCC extends the Cable Modem Order's logic to telephone-company DSL, reclassifying it too as a Title I information service. Now every major broadband technology sits outside common-carrier rules, and the 1996 Act's open-access requirements are dead for broadband across the board.",
  importance:"With DSL reclassified, the deregulation became total: both wires into the American home — cable and telephone — were now 'information services' with no duty to share, and the brief age of thousands of competing ISPs was finished. The symmetry was the point; leaving DSL under Title II while freeing cable would have been untenable, so the relief was extended to telephone companies too. The independent-ISP market collapsed within a few years, leaving the cable-and-telephone duopoly that persists today.",
  impact:{
    law:"DSL is reclassified to Title I; all broadband now sits outside common-carrier rules.",
    power:"The competitive ISP market loses its last legal foundation.",
    communications:"The 1996 Act's open-access mandate is dead for broadband entirely." },
  causes:["cablemodemorder"], effects:["brandx"] },

{ id:"brandx", year:2005, date:"June 27, 2005", era:6, cat:["internet","law"],
  title:"Brand X: The Supreme Court Settles It",
  wiki:"National Cable & Telecommunications Ass'n v. Brand X Internet Services",
  summary:"The Supreme Court upholds the FCC's reclassification of broadband as a Title I information service, deferring to the agency's reading of an ambiguous statute under Chevron. The deregulation is now legally settled — and hundreds of independent ISPs vanish as the wholesale-access market evaporates.",
  importance:"Brand X locked in the broadband duopoly by blessing the FCC's classification under Chevron deference, holding that where the statute was ambiguous, the agency's reasonable interpretation governed. The decision both entrenched the deregulation and planted a time bomb: it made net-neutrality policy hostage to Chevron, so that when the Supreme Court abolished Chevron in 2024, the whole edifice built on agency interpretation would come crashing down. The case that settled broadband classification in 2005 is the same doctrine whose death would unsettle it twenty years later.",
  impact:{
    law:"The Court upholds Title I broadband classification under Chevron deference.",
    power:"Hundreds of independent ISPs disappear as wholesale access ends.",
    communications:"Broadband policy is bound to a deference doctrine that will later be abolished." },
  causes:["cablemodemorder","dslreclassified"], effects:["fourfreedoms","netneutralitywars"] },

{ id:"fourfreedoms", year:2005, date:"August 2005", era:6, cat:["internet","law"],
  title:"The Four Internet Freedoms",
  wiki:"Net neutrality in the United States",
  summary:"FCC Chairman Michael Powell articulates four voluntary 'Internet Freedoms' — principles against blocking, throttling, and degrading internet traffic. They carry no legal force, but with them the net-neutrality debate formally begins.",
  importance:"Having just removed broadband from the common-carrier rules that would have guaranteed open access, the FCC offered in their place a set of voluntary aspirations — don't block, don't throttle, don't degrade — with nothing to enforce them. The Four Freedoms named the principle of net neutrality and simultaneously revealed its fatal weakness: after Brand X, the agency had classified away its own authority to compel them. The next fifteen years of litigation would be an attempt to give these voluntary words legal teeth.",
  impact:{
    law:"Voluntary anti-blocking, anti-throttling principles are announced without enforcement power.",
    communications:"The net-neutrality debate formally begins as a set of unenforceable freedoms.",
    power:"The FCC names openness just after classifying away its power to require it." },
  causes:["brandx"], effects:["comcastbittorrent","netneutralitywars"] },

// ===== THE NET-NEUTRALITY LITIGATION CHAIN =====
{ id:"comcastbittorrent", year:2007, date:"2007–2008", era:6, cat:["internet","law"],
  title:"Comcast Throttles BitTorrent",
  wiki:"Comcast Corp. v. FCC",
  summary:"Comcast is caught secretly slowing BitTorrent peer-to-peer traffic for its customers without disclosure; the FCC orders it to stop. In 2008 a federal court overturns the order — the agency has no legal authority to enforce its voluntary open-internet principles. The legal void at the center of internet regulation is exposed.",
  importance:"The Comcast affair turned the abstract net-neutrality debate concrete: an ISP was secretly degrading a lawful application, exactly what the Four Freedoms forbade — and when the FCC tried to punish it, the courts said the agency had no power to do so. Having classified broadband as a lightly regulated information service, the FCC had no statutory hook to enforce openness. The case laid bare the hole at the heart of internet regulation and forced the agency toward the Title II reclassification it had spent a decade avoiding.",
  impact:{
    communications:"An ISP is caught covertly throttling a lawful peer-to-peer application.",
    law:"A court rules the FCC cannot enforce its voluntary open-internet principles.",
    power:"The agency's lack of authority over broadband is exposed in open court." },
  causes:["fourfreedoms"], effects:["openinternet2010","netneutralitywars"] },

{ id:"openinternet2010", year:2010, date:"2010", era:7, cat:["internet","law"],
  title:"The 2010 Open Internet Order",
  wiki:"FCC Open Internet Order 2010",
  summary:"The FCC adopts rules prohibiting blocking and throttling and setting a non-discrimination standard — but rests them on weak Title I 'ancillary authority' rather than common-carrier classification. Verizon promptly sues, and the foundation proves too thin to hold.",
  importance:"The 2010 order was the FCC's attempt to have net neutrality without the political cost of reclassifying broadband — building rules on the shaky ground of 'ancillary authority' that the Comcast case had already cast in doubt. It banned the worst conduct but on a foundation everyone suspected would crumble, and Verizon's lawsuit set up the decision that would force the choice the agency kept dodging: regulate broadband as a common carrier, or not at all. It is the first of the formal net-neutrality orders that would rise and fall with each administration.",
  impact:{
    law:"Blocking and throttling are banned on a weak Title I 'ancillary authority' basis.",
    communications:"The first enforceable net-neutrality rules take effect, on a contested foundation.",
    power:"Verizon's immediate suit sets up a test of the FCC's authority." },
  causes:["comcastbittorrent"], effects:["verizonfcc","netneutralitywars"] },

{ id:"verizonfcc", year:2014, date:"January 2014", era:7, cat:["internet","law"],
  title:"Verizon v. FCC: The Path to Title II",
  wiki:"Verizon Communications Inc. v. FCC (2014)",
  summary:"The D.C. Circuit strikes down the 2010 anti-blocking and anti-discrimination rules: because the FCC itself classified broadband as a Title I information service in 2002, it cannot impose common-carrier obligations on it. But the court signals the cure — reclassify broadband under Title II, and the rules would stand.",
  importance:"Verizon v. FCC was a defeat that contained a roadmap: the court agreed the FCC could not treat an 'information service' like a common carrier, but all but invited the agency to change the classification and try again. It made unavoidable the choice the FCC had ducked since 2002 — that meaningful net neutrality required reclassifying broadband under Title II, with all the political war that entailed. The ruling set the stage for the Netflix–Comcast interconnection fight, a presidential intervention, and the strong 2015 rules.",
  impact:{
    law:"The 2010 rules fall because broadband was classified as an information service.",
    communications:"The court signals that Title II reclassification would sustain the rules.",
    power:"The FCC is forced toward the common-carrier choice it long avoided." },
  causes:["openinternet2010","brandx"], effects:["netflixcomcast","openinternet2015","netneutralitywars"] },

{ id:"netflixcomcast", year:2014, date:"February 2014", era:7, cat:["internet","law"],
  title:"Netflix Pays Comcast",
  wiki:"Net neutrality in the United States",
  summary:"After Netflix's streaming speeds on Comcast decline some 25% in the preceding months, Netflix agrees to pay Comcast directly for interconnection — and its speeds immediately recover. With net-neutrality rules struck down weeks earlier, the feared consequence arrives in real time: a content company paying an ISP for access to its own customers.",
  importance:"The Netflix–Comcast deal made the stakes of net neutrality visible to everyone: in the gap left by the voided rules, an ISP let a major service degrade until it paid up, then restored it the moment money changed hands. It was the abstract fear — ISPs as tollbooths between users and the content they already paid for — made concrete and undeniable, and it galvanized public support for strong rules. Within months a president would intervene and the FCC would reclassify, in no small part because this episode showed what the alternative looked like.",
  impact:{
    communications:"A content company pays an ISP for adequate access to its own subscribers.",
    power:"The tollbooth scenario net-neutrality rules guard against plays out in real time.",
    society:"A visible degradation-then-payment episode galvanizes support for strong rules." },
  causes:["verizonfcc"], effects:["openinternet2015"] },

{ id:"openinternet2015", year:2015, date:"2015", era:7, cat:["internet","law"],
  title:"Title II: The 2015 Open Internet Order",
  wiki:"FCC Open Internet Order 2015",
  summary:"After 4 million public comments and a rare direct presidential call from Obama to reclassify, FCC Chairman Tom Wheeler reclassifies broadband as a Title II telecommunications service and bans blocking, throttling, and paid prioritization. The D.C. Circuit upholds the rules in 2016 — net neutrality finally rests on solid legal ground.",
  importance:"The 2015 order was net neutrality at its strongest: broadband as a common carrier, the full prohibition on blocking, throttling, and paid prioritization, and a court affirmation that the foundation would hold. It took the path Verizon v. FCC had marked out, the public mobilization of 4 million comments, and an extraordinary presidential intervention into an independent agency to get there. For two years the open internet had real legal force — before a change of administration reversed it, beginning the cycle of repeal and reinstatement that defines the era.",
  impact:{
    law:"Broadband is reclassified as a Title II common carrier; the full open-internet rules take effect.",
    communications:"Blocking, throttling, and paid prioritization are prohibited and upheld in court.",
    power:"Net neutrality rests, briefly, on a solid legal foundation." },
  causes:["verizonfcc","netflixcomcast"], effects:["netneutrality","netneutralitywars"] }

);
