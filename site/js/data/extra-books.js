// SUPPLEMENT — landmarks in the history of information/communication and of money/finance,
// woven into the existing galleries. Prose is self-contained and scoped to each artifact
// (no book or author used as the framing device). The app sorts ATLAS_EVENTS by year, so
// these interleave chronologically; each carries an `era` field placing it in its gallery.
window.ATLAS_EVENTS.push(

// ========== INFORMATION & COMMUNICATION ==========
{ id:"talkingdrums", year:-1000, date:"antiquity", era:1, cat:"radio",
  title:"The African Talking Drums",
  wiki:"Talking drum", gallery:["Slit drum","Griot","Sub-Saharan Africa"],
  summary:"Across central Africa, tonal drums relay messages village to village faster than any runner — a telecommunications network ages before the telegraph.",
  importance:"The talking drums confront, in the deep past, the problems Claude Shannon would formalize in 1948. The drums encode the tones of speech, and because tonal words are ambiguous, drummers add redundancy — stock phrases that pad each word with context, exactly Shannon's remedy for noise. Relayed village to village, a message could outrun a traveler by a hundred miles in an hour. European missionaries like John Carrington spent years realizing the 'drum language' was not code but speech itself, drummed. Encoding, redundancy, error, transmission: the engineering of information is older than writing.",
  impact:{
    communications:"Long-distance signaling by relay — the conceptual ancestor of every network in this atlas.",
    technology:"Redundancy as error-correction is discovered empirically millennia before information theory names it.",
    society:"An oral culture builds a communications system as sophisticated, in principle, as the telegraph." },
  causes:[], effects:["telegraph","shannon"] },

{ id:"johnsondictionary", year:1755, date:"1755", era:2, cat:"print",
  title:"Johnson's Dictionary",
  wiki:"A Dictionary of the English Language", gallery:["Samuel Johnson","Dictionary"],
  summary:"Samuel Johnson, nearly single-handed, fixes the spelling and meaning of English — standardizing the code of a language.",
  importance:"The dictionary is itself an information technology. Before Robert Cawdrey's first English wordlist (1604) and Johnson's monumental Dictionary of the English Language (1755), spelling was improvisation and meaning was local. Johnson defined some 40,000 words with 114,000 literary quotations, imposing reference and consistency on a sprawling living code. To standardize a language is to treat it as a formal system with rules — a step on the road that runs through Boole's logic to the formal languages of computing.",
  impact:{
    communications:"Language acquires a fixed reference standard — shared meaning at scale.",
    society:"Literacy and printing get an authority to appeal to; the lexicographer becomes a kind of legislator.",
    technology:"Treating words as a closed, rule-governed system anticipates the formal codes of logic and computing." },
  causes:["printingpress","alphabet"], effects:["boole"] },

{ id:"boole", year:1854, date:"1854", era:3, cat:"computing",
  title:"Boole's Laws of Thought",
  wiki:"George Boole", gallery:["Boolean algebra","The Laws of Thought"],
  summary:"George Boole reduces logic to an algebra of true and false — the math that, a century later, becomes the language of every digital circuit.",
  importance:"In An Investigation of the Laws of Thought (1854), Boole showed that reasoning itself could be written as algebra: AND, OR, NOT operating on values that are only 1 or 0. It was treated as a philosophical curiosity for eighty years — until Claude Shannon's 1937 master's thesis proved that Boolean algebra exactly describes networks of electrical switches. Boole's binary logic is the hinge between human thought and the logic gate: every processor in this atlas computes in his algebra.",
  impact:{
    computing:"Binary logic — the formal foundation on which all digital circuitry is built.",
    technology:"Reasoning is shown to be mechanizable, decades before a machine could run it.",
    society:"The boundary between thought and computation begins to blur in earnest." },
  causes:["johnsondictionary","alphabet"], effects:["shannon","turing1936"] },

{ id:"maxwellsdemon", year:1867, date:"1867", era:3, cat:"computing",
  title:"Maxwell's Demon",
  wiki:"Maxwell's demon", gallery:["James Clerk Maxwell","Entropy","Second law of thermodynamics"],
  summary:"Maxwell imagines a tiny demon sorting molecules to cheat the second law of thermodynamics — binding information to physics itself.",
  importance:"The principle that information is physical turns on Maxwell's 1867 thought experiment: a demon sorting fast and slow molecules seems to lower entropy for free, violating the second law. The paradox stood for decades until Szilard and finally Landauer resolved it — the demon must acquire, store, and erase information, and erasing a bit necessarily dissipates heat (Landauer's principle). Information is not abstract; it has a physical, thermodynamic cost. This is the deepest thread of information theory: Shannon's bit and Boltzmann's entropy are the same quantity.",
  impact:{
    computing:"Establishes that computation and erasure have an irreducible energy cost — a limit physics imposes on every chip.",
    technology:"Information is shown to be physical, not merely symbolic.",
    society:"Mind, matter, and information are bound into a single account of the world." },
  causes:[], effects:["shannon","quantuminfo"] },

{ id:"memex", year:1945, date:"July 1945", era:5, cat:"computing",
  title:"The Memex",
  wiki:"Memex", gallery:["Vannevar Bush","As We May Think"],
  summary:"Vannevar Bush imagines a desk that stores all one's books and records and links them by association — the hyperlink, sketched in 1945.",
  importance:"In 'As We May Think' (The Atlantic, July 1945), the war's chief scientist described the 'memex': a microfilm desk on which a researcher builds 'associative trails' connecting documents — memory extended and externalized. It directly inspired Douglas Engelbart's mouse-and-windows demo, Ted Nelson's hypertext, and ultimately Berners-Lee's Web. Bush reframed information's problem from storage to retrieval and connection — the problem the next half-century of computing would try to solve.",
  impact:{
    computing:"The associative link — the conceptual seed of hypertext and the Web.",
    communications:"Reframes information from a storage problem to a connection problem.",
    society:"Augmenting human memory with machines becomes an explicit research goal." },
  causes:["ww2"], effects:["arpanet","wwwproposal"] },

{ id:"cybernetics", year:1948, date:"1948", era:5, cat:"computing",
  title:"Wiener's Cybernetics",
  wiki:"Cybernetics", gallery:["Norbert Wiener","Cybernetics: Or Control and Communication in the Animal and the Machine"],
  summary:"Norbert Wiener names 'cybernetics' — the science of control and communication by feedback, in animals and machines alike.",
  importance:"Published the same year as Shannon's theory, Wiener's Cybernetics supplied its companion vision: information as the medium of feedback, control, and purpose. Where Shannon measured the channel, Wiener studied the loop — the thermostat, the gun-director, the reflex arc, the brain. Wiener deliberately blurred animal and machine and seeded control theory, artificial intelligence, neuroscience, ecology, even management. Together with Shannon's theory, Cybernetics is a founding document of the information age.",
  impact:{
    computing:"Feedback and control become formal, machine-and-organism-spanning concepts — groundwork for AI and robotics.",
    society:"The cybernetic metaphor reshapes biology, economics, and management for a generation.",
    technology:"Self-regulating systems — from autopilots to the smart thermostat — trace to this synthesis." },
  causes:["shannon","turing1936"], effects:["dartmouth","meme"] },

{ id:"dnacode", year:1953, date:"1953", era:5, cat:"biotech",
  title:"The Genetic Code",
  wiki:"DNA", gallery:["Francis Crick","Rosalind Franklin","Genetic code"],
  summary:"Watson and Crick — on Rosalind Franklin's data — reveal DNA's double helix, and biology discovers it has been running an information code all along.",
  importance:"This is the moment heredity became information. Building on Rosalind Franklin's X-ray crystallography, Watson and Crick's 1953 double helix revealed a four-letter code — A, T, G, C — copied, transmitted, and occasionally miscopied. Schrödinger had predicted a 'code-script'; now life was legibly a message. Biology became an information science, and the way was open for Dawkins to call the gene, quite literally, information that propagates.",
  impact:{
    technology:"Heredity is reconceived as a digital code — the conceptual root of genomics and biotechnology.",
    computing:"Shannon's information theory finds an unexpected home inside the cell.",
    society:"Life itself joins the list of things best understood as information." },
  causes:["shannon"], effects:["meme"] },

{ id:"meme", year:1976, date:"1976", era:5, cat:["internet","social"],
  title:"The Meme",
  wiki:"Meme", gallery:["Richard Dawkins","The Selfish Gene"],
  summary:"Richard Dawkins coins the 'meme' — an idea as a replicator, copying itself from mind to mind like a gene. Culture as information that evolves.",
  importance:"In the last pages of The Selfish Gene (1976), Dawkins proposed that genes are not the only replicators: tunes, ideas, fashions, and catchphrases also copy themselves from brain to brain, subject to variation and selection. The meme is the bridge from biology's information to culture's. The coinage proved self-fulfilling: in the network age 'meme' returns as the native unit of online culture — viral information, replicating at the speed of the Like button.",
  impact:{
    communications:"Culture is reframed as self-propagating information — prophetic of the viral internet.",
    society:"Ideas acquire an evolutionary account of their own spread and survival.",
    computing:"The meme anticipates virality, recommendation, and the engagement economy by decades." },
  causes:["dnacode","cybernetics"], effects:["likebutton","wikipedia"] },

{ id:"quantuminfo", year:1994, date:"1994", era:6, cat:"computing",
  title:"Quantum Information",
  wiki:"Quantum information", gallery:["Qubit","Shor's algorithm","Quantum computing"],
  summary:"Peter Shor shows a quantum computer could shatter modern encryption — information goes quantum, where a bit can be 0 and 1 at once.",
  importance:"Quantum mechanics reaches information theory in the qubit, which by superposition and entanglement holds more than Shannon's classical bit. Shor's 1994 algorithm proved a quantum machine could factor large numbers fast enough to break the RSA encryption guarding the internet, igniting the field. Drawing on Bennett, Wiesner, and Wheeler's 'it from bit,' quantum information theory extends Shannon and Maxwell's demon into the quantum world — and suggests, in Wheeler's phrase, that information may be the bedrock of physical reality.",
  impact:{
    computing:"A new substrate for computation and a standing threat to all current cryptography.",
    technology:"Information theory is extended into quantum mechanics — the qubit joins the bit.",
    society:"'It from bit' — the speculative idea that information underlies physics itself enters serious science." },
  causes:["maxwellsdemon","shannon","turing1936"], effects:[] },

{ id:"wikipedia", year:2001, date:"2001", era:6, cat:["internet","opensource"],
  title:"Wikipedia",
  wiki:"Wikipedia", gallery:["Jimmy Wales","Encyclopédie"],
  summary:"Anyone can edit. A free encyclopedia written by volunteers becomes the largest reference work in history — and the emblem of information abundance.",
  importance:"Wikipedia (2001) realized an old dream by a new method: universal knowledge, freely available — but written by volunteers, openly editable, and never finished. The encyclopedic ambition that runs from Diderot's Encyclopédie to H.G. Wells's 'World Brain' became a planetary, collaborative reference work, the largest in history. It also marks the turn from scarcity to abundance: the limiting resource is no longer access to information but the attention to sift it.",
  impact:{
    communications:"Crowdsourced knowledge at planetary scale — the encyclopedia reinvented as a living process.",
    society:"Abundance replaces scarcity as information's central problem; filtering becomes the task.",
    computing:"The wiki realizes the hypertext vision and becomes core training data for the AI that follows." },
  causes:["webpublic","memex"], effects:["chatgpt"] },

// ========== MONEY & FINANCE ==========
{ id:"coinage", year:-600, date:"c. 600 BCE", era:1, cat:"general",
  title:"The First Coins",
  wiki:"Coin", gallery:["Lydia","Croeseid","Electrum"],
  summary:"The kingdom of Lydia strikes the first standardized coins from electrum — money becomes a portable, state-stamped technology.",
  importance:"Money climbed a long road from Mesopotamian clay tablets to the coin. In Lydia, under kings culminating in Croesus, lumps of electrum were stamped to certify weight and purity — turning metal into trusted, countable, portable money. Greek and Roman coinage followed, and with the royal stamp came a second function the timeline keeps meeting: the coin as an instrument of sovereignty, taxation, and propaganda. Money, like writing, is a technology the state was quick to control.",
  impact:{
    technology:"Standardized, certified money — the medium that makes complex trade and credit computable.",
    power:"The mint becomes a prerogative of sovereignty; the ruler's face on the coin is a claim of authority.",
    society:"Value is abstracted and made portable, accelerating commerce far beyond barter." },
  causes:[], effects:["taxation","fibonacci","medici"] },

{ id:"fibonacci", year:1202, date:"1202", era:1, cat:"general",
  title:"Fibonacci's Liber Abaci",
  wiki:"Liber Abaci", gallery:["Fibonacci","Hindu–Arabic numeral system","Arabic numerals"],
  summary:"Leonardo of Pisa brings Hindu-Arabic numerals and place-value arithmetic to European merchants — the math that makes modern finance computable.",
  importance:"Fibonacci's Liber Abaci (1202) was a turning point in the history of money. Having learned the numerals among Arab merchants in North Africa, Leonardo of Pisa gave Europe the zero, place value, and the algorithms of commercial arithmetic — present value, profit-and-loss, currency conversion, compound interest. These were the computational tools without which double-entry bookkeeping, banking, and the bond market could not exist. It is also a deeper truth: a change in notation is a change in what can be thought.",
  impact:{
    technology:"Place-value arithmetic — the computational engine of commerce, accounting, and finance.",
    power:"Compound interest and present value make capital calculable, and thus accumulable at scale.",
    society:"A merchant class equipped with new mathematics reshapes the medieval economy." },
  causes:["coinage","alphabet"], effects:["medici","bookkeeping"] },

{ id:"medici", year:1397, date:"1397", era:1, cat:"general",
  title:"The Medici Bank",
  wiki:"Medici Bank", gallery:["House of Medici","Cosimo de' Medici","Florence"],
  summary:"The Medici master branch banking, foreign exchange, and lending to popes and princes — finance as a ladder to political power.",
  importance:"The bond and banking revolutions begin in Renaissance Italy. Founded by Giovanni de' Medici in 1397, the Medici Bank used bills of exchange to move money across borders (and around the Church's usury ban), a branch network from London to Rome, and meticulous double-entry books. It financed the Renaissance and four Medici popes, and lifted a banking family into dukes and queens. The bank is the emblem of how mastery of money converts into political power — a lesson the East India Company and modern finance restage.",
  impact:{
    power:"Banking is shown to be a path to sovereignty itself — bankers become princes.",
    technology:"Bills of exchange and branch accounting build the infrastructure of international finance.",
    society:"Florentine capital underwrites the Renaissance; credit and culture intertwine." },
  causes:["fibonacci"], effects:["bookkeeping","voc","bankofengland"] },

{ id:"potosi", year:1545, date:"1545", era:2, cat:"general",
  title:"The Silver Mountain of Potosí",
  wiki:"Potosí", gallery:["Cerro Rico","Spanish dollar","Spanish colonization of the Americas"],
  summary:"Spain discovers a mountain of silver in the Andes — and floods the world with money, learning that silver is not the same as wealth.",
  importance:"Potosí punctures the oldest confusion about money. The Cerro Rico, worked from 1545 by conscripted indigenous mita labor under lethal conditions, produced silver on a scale that made the Spanish 'piece of eight' the world's first global currency — circulating from Europe to Ming China. Yet the torrent of silver caused the price revolution, inflation that hollowed out Spanish power even as the bullion flowed. Money is not wealth; multiply the money and you multiply prices, not riches — a lesson relearned in every inflation since.",
  impact:{
    power:"Bullion wealth proves a curse: Spain inflates and declines even as the silver pours in.",
    labor:"The mita forced-labor system kills on an industrial scale — empire's human cost made visible.",
    society:"The first truly global currency links four continents; world trade acquires a money." },
  causes:["columbus"], effects:["voc","weimarinflation"] },

{ id:"lloyds", year:1688, date:"1688", era:2, cat:"general",
  title:"Lloyd's & the Birth of Insurance",
  wiki:"Lloyd's of London", gallery:["Lloyd's Coffee House","Marine insurance"],
  summary:"At Edward Lloyd's London coffee house, merchants and underwriters invent modern marine insurance — pricing risk becomes a business.",
  importance:"The management of risk begins in a coffee house. From around 1688, Edward Lloyd's became the place where shipowners and underwriters met to share news and 'underwrite' voyages — each signing his name beneath the risk he would cover. Out of it grew Lloyd's of London and the whole apparatus of pooling and pricing uncertainty: actuarial tables, probability, the premium. The same logic — shared risk against catastrophe — later scales into the welfare state, Bismarck's insurance, and Beveridge's.",
  impact:{
    power:"Risk becomes a tradable commodity — the foundation of the modern insurance economy.",
    society:"Probability and the actuarial table domesticate uncertainty, from shipwrecks to old age.",
    regulation:"The pooling-of-risk principle later underwrites public social insurance and the welfare state." },
  causes:["voc"], effects:["bismarck","beveridge"] },

{ id:"johnlaw", year:1719, date:"1716–1720", era:2, cat:"general",
  title:"John Law & the Mississippi Bubble",
  wiki:"Mississippi Company", gallery:["John Law (economist)","Banque Royale"],
  summary:"A Scottish gambler turned French finance minister floats a paper-money stock scheme — the first great bubble, and a catastrophic burst.",
  importance:"The Mississippi Bubble and its London twin, the South Sea Bubble, are the founding disasters of the stock market. John Law — convicted duelist, gambler, monetary visionary — persuaded France to combine a central bank issuing paper money, the Mississippi Company monopoly, and the national debt into one self-reinforcing machine. Shares soared twentyfold, then collapsed in 1720, ruining thousands and poisoning France against banks and paper money for a century. Law grasped that money is confidence — and learned that confidence, once lost, takes everything with it.",
  impact:{
    power:"The first paper-money stock bubble — confidence shown to be the substance, and the fragility, of finance.",
    regulation:"France's trauma entrenches a deep distrust of central banking and paper money for generations.",
    society:"'Millionaire' is coined in the frenzy; speculative mania enters the modern repertoire." },
  causes:["bankofengland","voc"], effects:["southsea","weimarinflation"] },

{ id:"rothschild", year:1815, date:"1815", era:3, cat:"general",
  title:"The Rothschilds & the Bond Market",
  wiki:"Nathan Mayer Rothschild", gallery:["Rothschild family","Battle of Waterloo"],
  summary:"Five brothers in five capitals master the government bond market — financing wars and becoming the richest family in the world.",
  importance:"The Rothschilds made themselves masters of the instrument that disciplines even kings: the government bond. Mayer Amschel's five sons, posted to Frankfurt, London, Paris, Vienna, and Naples, ran an information and capital network that financed Wellington's armies and, around Waterloo (1815), executed the bond trades that made their fortune legendary. By making and trading sovereign debt, the bond market gained the power to set the price of a state's credibility — and to force governments to answer to it.",
  impact:{
    power:"The bond market emerges as a check on sovereigns — states must borrow on the market's terms.",
    communications:"The Rothschild courier network shows information speed as financial advantage — a pre-telegraph edge.",
    society:"Finance becomes a transnational power rivaling governments; the family becomes a byword for it." },
  causes:["bankofengland"], effects:["blackwednesday"] },

{ id:"weimarinflation", year:1923, date:"1923", era:4, cat:"general",
  title:"The Weimar Hyperinflation",
  wiki:"Hyperinflation in the Weimar Republic", gallery:["Weimar Republic","German Papiermark"],
  summary:"German prices double every few days; a wheelbarrow of marks buys a loaf of bread. Money dies, and a republic's legitimacy with it.",
  importance:"The grimmest case of money's instability. War debt, reparations, and a government printing paper to pay them drove German prices to lunatic heights: by November 1923 a U.S. dollar cost 4.2 trillion marks, and workers were paid twice a day to spend before prices rose again. Savings and the savings-keeping middle class were annihilated. The hyperinflation seared German monetary orthodoxy for a century — and the ruin it spread helped clear the path that Hitler walked a decade later.",
  impact:{
    power:"Money's collapse destroys a currency, a middle class, and a fragile democracy's legitimacy.",
    society:"The trauma fixes an enduring German horror of inflation, shaping European monetary policy to this day.",
    government:"Economic catastrophe corrodes the Weimar Republic and feeds the extremism of the 1930s." },
  causes:["wwi","johnlaw","potosi"], effects:["hitler"] },

{ id:"brettonwoods", year:1944, date:"1944", era:4, cat:"general",
  title:"Bretton Woods",
  wiki:"Bretton Woods system", gallery:["Bretton Woods Conference","International Monetary Fund","John Maynard Keynes"],
  summary:"In a New Hampshire hotel, the Allies design the postwar monetary order — fixed exchange rates, the dollar-gold anchor, the IMF and World Bank.",
  importance:"In July 1944, with the war still on, 44 nations met at Bretton Woods to build the financial architecture of the postwar world. Keynes lost the argument to America's Harry Dexter White, and the dollar — pegged to gold, with other currencies pegged to the dollar — became the anchor of global money, policed by the new IMF and World Bank. The system underwrote the long postwar boom and the institutions that still anchor the present, until Nixon severed the dollar from gold in 1971 and the era of floating, speculative currencies began.",
  impact:{
    power:"The architecture of postwar global capitalism — and of American financial primacy — is set.",
    government:"The IMF and World Bank institutionalize international economic governance.",
    society:"Stable exchange rates underwrite a generation of growth, until the system's 1971 collapse." },
  causes:["ww2","crash1929"], effects:["chinawto","financialcrisis"] },

{ id:"blackwednesday", year:1992, date:"September 16, 1992", era:6, cat:"general",
  title:"Black Wednesday",
  wiki:"Black Wednesday", gallery:["George Soros","Exchange Rate Mechanism"],
  summary:"George Soros bets a billion against the pound and wins — Britain crashes out of the ERM in a day, and a speculator beats a central bank.",
  importance:"Black Wednesday showed where power had moved in the floating-rate world. Convinced sterling's peg in the European Exchange Rate Mechanism was unsustainable, George Soros's Quantum Fund shorted the pound by billions. The Bank of England burned through reserves and jacked rates to 15% in a single day defending it — and lost, crashing out of the ERM at a cost of some £3.3 billion. One speculator, commanding mobile global capital, had overpowered a central bank. Money's discipline now ran both ways.",
  impact:{
    power:"Global private capital is shown able to overrule a sovereign central bank's monetary policy.",
    government:"Britain's ejection from the ERM reshapes its politics and its distance from the euro.",
    society:"The hedge fund enters public consciousness as a force rivaling states." },
  causes:["bankofengland","rothschild"], effects:["ltcm"] },

{ id:"ltcm", year:1998, date:"1998", era:6, cat:"general",
  title:"The Fall of Long-Term Capital Management",
  wiki:"Long-Term Capital Management", gallery:["Myron Scholes","Black–Scholes model"],
  summary:"A hedge fund run by Nobel laureates and their option-pricing math nearly takes down the financial system — when the model meets reality.",
  importance:"A parable of model risk. Long-Term Capital Management was run by the architects of the Black-Scholes-Merton option formula (1997 Nobel), wielding leverage around 25-to-1 on trades their models deemed nearly riskless. Then Russia defaulted in 1998 and markets moved in ways the models rated all but impossible, threatening a chain reaction the Federal Reserve had to organize a $3.6 billion rescue to contain. The lesson — that financial models systematically underprice extreme events — went unlearned, and was restaged at world scale in 2008.",
  impact:{
    power:"Quantitative finance's hidden fragility is exposed — and the system saved only by a bailout.",
    regulation:"Raises, and then fails to resolve, the 'too big to fail' question that returns in 2008.",
    technology:"Mathematical models are shown to mistake the map for the territory under stress." },
  causes:["southsea","blackwednesday"], effects:["financialcrisis"] },

{ id:"enron", year:2001, date:"2001", era:6, cat:"law",
  title:"The Collapse of Enron",
  wiki:"Enron scandal", gallery:["Enron","Arthur Andersen","Sarbanes–Oxley Act"],
  summary:"America's most admired company turns out to be an accounting fiction — and its collapse rewrites the rules of corporate disclosure.",
  importance:"The loop closes from the South Sea Bubble to the present: fraud, collapse, statute. Enron used mark-to-market accounting and off-balance-sheet partnerships to manufacture profits and hide debt, until the seventh-largest U.S. company imploded in 2001, destroying employees' pensions and the auditor Arthur Andersen with it. The wreckage produced Sarbanes-Oxley (2002), the largest overhaul of securities law since the New Deal — the same regulatory reflex the Bubble Act answered with in 1720, restaged at the millennium.",
  impact:{
    law:"Sarbanes-Oxley (2002) — the biggest corporate-disclosure reform since the 1930s — follows directly.",
    power:"Corporate accounting itself is revealed as a place where reality can be manufactured.",
    society:"Pension destruction puts the risks of financialized retirement before the public." },
  causes:["southsea","crash1929"], effects:["financialcrisis"] }

);
