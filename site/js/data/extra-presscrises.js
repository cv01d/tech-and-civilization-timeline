// SUPPLEMENT — source protection, global press-freedom crises, platform pressures, and
// the new fights (AI training, foreign-agent laws, SLAPPs, equity in publishing). Joins
// the existing branzburg, pentagonpapers, snowden, newsoftheworld, russiawar2022,
// novayagazeta, royaltystandards, googlebooks cards. cat:print (+ law/power/computing/
// social/internet). Round one: data only — images to follow.
window.ATLAS_EVENTS.push(

// ===== SOURCE PROTECTION =====
{ id:"zurcher", year:1978, date:"1978", era:5, cat:["print","law"],
  title:"Zurcher v. Stanford Daily",
  wiki:"Zurcher v. Stanford Daily",
  summary:"The Supreme Court rules that police may search a newsroom with an ordinary warrant, even when the journalists are not suspects — newsrooms enjoy no special Fourth Amendment exemption. Congress partly answers with the Privacy Protection Act of 1980, limiting such searches.",
  importance:"Zurcher held that the press's premises and unpublished materials — notes, photographs, source files — could be searched like anyone's, a serious threat to confidential newsgathering. The backlash produced statutory protection where the Constitution offered none, the Privacy Protection Act, an early instance of the recurring pattern in which legislatures must shore up press protections the courts decline to find.",
  impact:{
    law:"Newsrooms get no Fourth Amendment exemption from police searches.",
    print:"Confidential notes, photos, and source files are exposed to warrants.",
    power:"Congress must legislate the protection the Court refused to recognize." },
  causes:["branzburg"], effects:["risen"] },

{ id:"joshwolf", year:2006, date:"2006", era:6, cat:["print","law"],
  title:"Josh Wolf Jailed",
  wiki:"Josh Wolf",
  summary:"Video blogger Josh Wolf is jailed for 226 days — the longest imprisonment of a journalist in U.S. history — for refusing to hand over footage of a 2005 protest to a federal grand jury, raising the question of who counts as a 'journalist' deserving source protection in the digital age.",
  importance:"Wolf's record imprisonment dramatized two gaps at once: the absence of a federal reporter's privilege, and the uncertainty over whether an independent video blogger enjoys the protections of the institutional press. As newsgathering spread beyond newspapers to anyone with a camera, his case forced the question the shield-law debate still wrestles with — whether press freedom attaches to the act of journalism or the credential.",
  impact:{
    print:"The longest U.S. jailing of a journalist tests source protection.",
    law:"The absence of a federal reporter's privilege is laid bare again.",
    society:"Who counts as a 'journalist' becomes an urgent question in the digital age." },
  causes:["branzburg"], effects:["risen"] },

{ id:"risen", year:2013, date:"2013–2015", era:7, cat:["print","law"],
  title:"James Risen and the Leak Crackdown",
  wiki:"James Risen",
  summary:"The Justice Department spends years trying to compel New York Times reporter James Risen to reveal a confidential source for his reporting on a botched CIA operation; amid an aggressive Obama-era crackdown on leakers, the DOJ finally backs down in 2015 rather than jail him.",
  importance:"The Risen case epitomized the Obama administration's record use of the Espionage Act against leakers and the pressure it put on the reporters who received them. His refusal to testify, and the government's eventual retreat, became a defining stand for source confidentiality — but the broader crackdown chilled national-security journalism and foreshadowed the prosecution of publishers themselves.",
  impact:{
    print:"A reporter's years-long refusal to name a source becomes a defining stand.",
    law:"An aggressive leak crackdown pressures national-security journalism.",
    power:"Source confidentiality holds, but the chilling effect spreads." },
  causes:["zurcher","joshwolf"], effects:["gershkovich"] },

{ id:"projectveritas", year:2020, date:"2020", era:7, cat:["print","law"],
  title:"Project Veritas v. The New York Times",
  wiki:"Project Veritas",
  summary:"A defamation suit by the activist group Project Veritas against the New York Times produces an unusual court order barring the Times from publishing or even possessing certain leaked memos — a rare prior-restraint-adjacent order that press-freedom advocates condemned as a dangerous incursion.",
  importance:"The Veritas case unsettled the usual alignments: an order restraining a major newspaper's use of source materials, sought by a group that styles itself a journalistic outlet, blurring who deserves press protections. It revived the prior-restraint concerns of the Pentagon Papers era in a new, partisan form, and underscored how defamation litigation has become a tool to constrain reporting from multiple directions.",
  impact:{
    law:"A court order restrains a newspaper's possession of source materials.",
    print:"Prior-restraint concerns revive in a partisan, source-materials dispute.",
    power:"Defamation litigation becomes a tool to constrain reporting." },
  causes:["pentagonpapers","sullivan"], effects:[] },

{ id:"gershkovich", year:2023, date:"2023–2024", era:7, cat:"print",
  title:"Evan Gershkovich Detained",
  wiki:"Evan Gershkovich",
  summary:"Russia detains Wall Street Journal reporter Evan Gershkovich on espionage charges in 2023 — the first U.S. journalist accused of spying in Russia since the Cold War — holding him for over a year before his release in a 2024 prisoner exchange. The case becomes a symbol of the global crackdown on the press.",
  importance:"Gershkovich's imprisonment, on charges his employer and the U.S. government called baseless, marked the use of a journalist as a hostage of state, and the dangers of reporting from an authoritarian wartime Russia. It crystallized the worldwide deterioration of press freedom, in which states detain, expel, and kill reporters with impunity, and journalism from closed societies becomes a matter of personal risk.",
  impact:{
    power:"A U.S. reporter is held by Russia on espionage charges as a state hostage.",
    print:"Reporting from authoritarian states becomes a matter of personal risk.",
    society:"The case symbolizes a worldwide crackdown on the press." },
  causes:["risen","russiawar2022"], effects:[] },

// ===== INTERNATIONAL PRESS-FREEDOM CRISES =====
{ id:"culturalrevolution", year:1966, date:"1966–1976", era:5, cat:"print",
  title:"The Cultural Revolution and the Press",
  wiki:"Cultural Revolution",
  summary:"China's Cultural Revolution (1966–76) destroys what remained of independent publishing — newspapers are made pure party organs, writers and intellectuals are persecuted, books are burned, and the press becomes wholly an instrument of Maoist mass mobilization.",
  importance:"The Cultural Revolution was the totalitarian extreme of press control: not merely censorship but the violent destruction of the publishing world and the persecution of those who made it, the printed word weaponized for ideological frenzy. It stands with Glavlit and the Nazi Editors Law as a warning of what becomes of journalism when a regime claims total control over thought.",
  impact:{
    power:"Independent publishing is destroyed and writers persecuted en masse.",
    print:"The press becomes a pure instrument of ideological mobilization.",
    society:"The printed word is weaponized in a campaign of mass frenzy." },
  causes:["peoplesdaily"], effects:[] },

{ id:"argentinajunta", year:1976, date:"1976–1983", era:5, cat:"print",
  title:"Argentina's Junta and the Disappeared Journalists",
  wiki:"Dirty War",
  summary:"Argentina's 1976–83 military dictatorship censors the press and 'disappears' scores of journalists in its 'Dirty War'; the newspaper of the Mothers of the Plaza de Mayo and outlets like Robert Cox's Buenos Aires Herald become rare voices of dissent at mortal risk.",
  importance:"The Argentine junta showed the most lethal form of press control in modern Latin America: not just shuttering papers but abducting and murdering the journalists who reported the regime's crimes. The courage of the few who kept publishing, and the silence enforced on the rest, became emblematic of the disappearances that haunt the continent's memory and of journalism practiced under threat of death.",
  impact:{
    power:"A dictatorship 'disappears' scores of journalists to silence the press.",
    print:"Reporting the regime's crimes becomes a capital risk.",
    society:"Press repression becomes part of the trauma of the 'Dirty War.'" },
  causes:[], effects:["khashoggi"] },

{ id:"glasnost1986", year:1986, date:"1986", era:5, cat:"print",
  title:"Glasnost Tests the Soviet Press",
  wiki:"Glasnost",
  summary:"Gorbachev's policy of glasnost ('openness') begins loosening Soviet censorship in the mid-1980s; papers like Moskovsky Komsomolets and Ogonyok push the new boundaries, publishing once-forbidden criticism and history — a partial, state-managed liberalization that helped unravel the system.",
  importance:"Glasnost was an experiment in controlled press freedom that escaped its bounds: by allowing the press to expose Soviet failures and crimes, the state unleashed a torrent of truth-telling that corroded the regime's legitimacy. It demonstrated both the power of even partial press freedom to transform a society and the impossibility of granting it by halves — a lesson the post-Soviet reversal under Putin would invert.",
  impact:{
    power:"State-managed press loosening exposes Soviet failures and crimes.",
    print:"Once-forbidden criticism and history reach Soviet readers.",
    society:"Partial press freedom helps corrode the regime's legitimacy." },
  causes:["glavlit"], effects:["ntvrussia"] },

{ id:"danielpearl", year:2002, date:"2002", era:6, cat:"print",
  title:"The Murder of Daniel Pearl",
  wiki:"Daniel Pearl",
  summary:"Wall Street Journal reporter Daniel Pearl is kidnapped and murdered by al-Qaeda-linked militants in Pakistan in 2002, his killing filmed and circulated — an early, shocking instance of terrorists deliberately targeting a Western journalist as a propaganda act.",
  importance:"Pearl's murder marked a grim turn in the dangers facing journalists: not collateral risk in a war zone but deliberate targeting and ritualized killing for propaganda, broadcast to terrorize. It foreshadowed the use of journalist hostages by extremist groups and states alike, and the era in which reporting from conflict and closed societies would carry the risk of becoming the story's victim.",
  impact:{
    power:"A journalist is deliberately murdered as an act of terrorist propaganda.",
    print:"Reporting from conflict zones takes on the risk of targeted killing.",
    society:"The targeting of journalists as propaganda victims begins." },
  causes:[], effects:["khashoggi"] },

{ id:"pressfreedomindex", year:2013, date:"2013", era:7, cat:"print",
  title:"Mapping Press Freedom's Decline",
  wiki:"Press Freedom Index",
  summary:"Reporters Without Borders and Freedom House sharpen their annual measures of global press freedom; RWB's 'Predators of Press Freedom' identifies dozens of regimes systematically repressing journalists — quantifying a worldwide decline that accelerates through the 2010s.",
  importance:"The press-freedom indices turned a diffuse global trend into measurable fact: year after year, the data showed more journalists jailed, more outlets shuttered, and more populations living without free media. By naming the 'predators' and ranking nations, the monitors made the erosion of press freedom legible and comparable, a documentary record of democratic backsliding seen through the treatment of the press.",
  impact:{
    power:"Systematic press repression is quantified and ranked across nations.",
    print:"A measurable record of global press-freedom decline is built.",
    society:"The treatment of journalists becomes an index of democratic health." },
  causes:["argentinajunta"], effects:["khashoggi","myanmarcoup"] },

{ id:"khashoggi", year:2018, date:"2018", era:7, cat:"print",
  title:"The Murder of Jamal Khashoggi",
  wiki:"Assassination of Jamal Khashoggi",
  summary:"Saudi agents kill the U.S.-based Washington Post columnist Jamal Khashoggi inside the Saudi consulate in Istanbul in 2018 — a state assassination of a journalist on foreign soil that shocks the world and lays bare the impunity with which autocracies silence their critics abroad.",
  importance:"Khashoggi's murder was the most brazen state killing of a journalist of the era: a critic lured to a consulate and dismembered, the crime traced to the highest levels of a U.S.-allied government that faced little consequence. It became the symbol of authoritarian reach beyond borders and of the limits of outrage, demonstrating that even a columnist for a major Western paper could be killed with near-impunity.",
  impact:{
    power:"A state assassinates a journalist on foreign soil with near-impunity.",
    print:"A columnist for a major Western paper is murdered for his criticism.",
    society:"Authoritarian reach beyond borders is laid bare to the world." },
  causes:["pressfreedomindex","danielpearl","argentinajunta"], effects:[] },

{ id:"myanmarcoup", year:2021, date:"2021", era:7, cat:"print",
  title:"Myanmar's Coup and the Press",
  wiki:"2021 Myanmar coup d'état",
  summary:"Myanmar's 2021 military coup outlaws independent media almost overnight — revoking licenses, jailing dozens of journalists, and forcing newsrooms underground or into exile, abruptly reversing a decade of cautious press opening after military rule.",
  importance:"The Myanmar coup showed how swiftly a fragile press freedom can be extinguished: a decade of tentative opening erased in weeks as the junta criminalized journalism and hunted reporters. It is a contemporary instance of the oldest pattern — a regime seizing power and immediately seizing the press — and of the courage of journalists who keep reporting from exile and the shadows.",
  impact:{
    power:"A military coup outlaws independent media and jails journalists overnight.",
    print:"A decade of press opening is reversed in weeks.",
    society:"Journalism survives only underground and in exile." },
  causes:["pressfreedomindex"], effects:[] },

// ===== PLATFORM PRESSURES & NEW FIGHTS =====
{ id:"instantarticles", year:2017, date:"2015–2017", era:7, cat:["print","social"],
  title:"Facebook Instant Articles",
  wiki:"Instant Articles",
  summary:"Facebook's Instant Articles (2015) invites publishers to host their journalism directly inside the platform for speed and reach — but on Facebook's terms, with its control over data and revenue. By 2017 most publishers abandon it, wary of surrendering their audience and economics to the platform.",
  importance:"Instant Articles distilled the platform bargain that defined the 2010s: trade control of your journalism for the platform's traffic. Publishers who took the deal found themselves dependent on Facebook's whims for audience and revenue, and most retreated — a hard lesson, alongside the News Feed pivot, that building journalism inside someone else's walled garden meant living and dying by its rules.",
  impact:{
    social:"Publishers host their journalism inside Facebook, on Facebook's terms.",
    print:"Most abandon the program rather than surrender audience and revenue.",
    power:"The peril of building journalism in a platform's walled garden is shown." },
  causes:["facebooknews"], effects:["substack"] },

{ id:"substack", year:2021, date:"2017–2023", era:7, cat:["print","internet"],
  title:"Substack and the Newsletter Turn",
  wiki:"Substack",
  summary:"Substack's paid-newsletter platform lets individual writers earn directly from readers, drawing prominent journalists out of newsrooms into independent publishing — and igniting fierce debate when it declines to deplatform controversial writers, pitting free-speech principles against content moderation.",
  importance:"Substack offered a genuine alternative to both the dying newsroom and the ad-funded platform: writers paid directly by subscribers, owning their audience. But its hands-off moderation stance forced the era's central content debate into the open — whether a platform should police who may publish on it — making Substack a flashpoint in the fight over speech, moderation, and the unbundling of journalism from institutions.",
  impact:{
    internet:"Writers earn directly from readers, unbundling journalism from newsrooms.",
    print:"Prominent journalists leave institutions for independent publishing.",
    society:"Its moderation stance ignites the era's free-speech-versus-moderation fight." },
  causes:["instantarticles","nytpaywall"], effects:[] },

{ id:"foreignagentlaws", year:2020, date:"2017–2026", era:7, cat:["print","law"],
  title:"'Foreign Agent' Laws",
  wiki:"Foreign agent",
  summary:"Governments increasingly weaponize 'foreign agent' designations against journalists and outlets — Russia branding independent media and reporters as 'foreign agents' or 'undesirable,' Hungary and others following, even as the U.S. debates the scope of its own FARA — a legal tool to stigmatize and burden critical reporting.",
  importance:"The 'foreign agent' label revives a Cold War instrument as a modern weapon against the press: rather than ban an outlet outright, the state brands it a tool of foreign powers, burdening it with disclosures, stigma, and legal jeopardy. It is censorship by bureaucratic harassment, a deniable, legalistic means of crippling independent journalism that has spread from Russia across the authoritarian and semi-authoritarian world.",
  impact:{
    law:"'Foreign agent' designations stigmatize and burden independent journalists.",
    print:"Censorship by bureaucratic harassment spreads across nations.",
    power:"A Cold War instrument is revived as a modern weapon against the press." },
  causes:["russiawar2022"], effects:[] },

{ id:"slapp", year:2020, date:"2010s–2020s", era:7, cat:["print","law"],
  title:"SLAPP Suits",
  wiki:"Strategic lawsuit against public participation",
  summary:"Strategic Lawsuits Against Public Participation (SLAPPs) — meritless defamation and related suits filed to intimidate and bankrupt critics and journalists through legal costs rather than to win — proliferate; states pass 'anti-SLAPP' laws in response, but coverage is uneven and the threat persists.",
  importance:"The SLAPP turns litigation itself into censorship: even reporting that would ultimately prevail can be silenced by the ruinous cost of defending against a suit designed to punish, not to win. As a tool of the wealthy and powerful to chill investigative journalism, the SLAPP exploits the gap the threat to Sullivan would widen, and the patchwork of anti-SLAPP protections leaves much reporting exposed.",
  impact:{
    law:"Meritless suits weaponize legal costs to silence critics and journalists.",
    print:"Even accurate reporting can be chilled by the cost of defending it.",
    power:"Litigation becomes a tool of the powerful to suppress scrutiny." },
  causes:["sullivan"], effects:[] },

// ===== ROYALTY EQUITY & AI =====
{ id:"publishingpaidme", year:2020, date:"2020", era:7, cat:"print",
  title:"#PublishingPaidMe",
  wiki:"Publishing",
  summary:"In 2020 authors share their book advances under the hashtag #PublishingPaidMe, exposing stark racial disparities in what publishers pay Black writers versus their white peers — data-driven evidence that prompts diversity initiatives and transparency pushes across the industry.",
  importance:"#PublishingPaidMe turned anecdote into evidence, using the transparency of social media to document that the publishing industry systematically underpaid Black authors. It forced a reckoning with who gets advances, marketing, and attention in an industry that shapes the culture, and made the economics of authorship — long opaque — a matter of public accountability and reform.",
  impact:{
    labor:"Authors expose stark racial disparities in publishing advances.",
    print:"The opaque economics of who gets paid become publicly accountable.",
    society:"A reckoning with equity reshapes industry hiring and pay practices." },
  causes:["royaltystandards"], effects:[] },

{ id:"aicopyright", year:2023, date:"2023–2026", era:7, cat:["print","computing","law","opensource"],
  title:"AI Training and the Copyright Reckoning",
  wiki:"Artificial intelligence and copyright",
  summary:"Generative-AI companies train their models on vast troves of copyrighted books, articles, images, and news without permission or payment; authors, the New York Times, Getty Images, and others sue, while some publishers strike licensing deals — opening the defining copyright fight of the era, with no clear precedent yet.",
  importance:"AI training reopens every copyright question at once and at unprecedented scale: whether ingesting the whole corpus of human creativity to build a machine that competes with its authors is transformative fair use or mass infringement. The outcome — litigated through the same 1976 fair-use factors and Google Books precedent — will decide the economic relationship between the AI industry and every creator whose work it consumes, and whether human authorship retains commercial value at all.",
  impact:{
    computing:"Models are trained on the corpus of human creativity without permission or pay.",
    law:"The defining copyright fight of the era — fair use or mass infringement — opens.",
    print:"The economic value of human authorship itself is put in question." },
  causes:["copyright1976","googlebooks","tasini","cariouprince","ascap"],
  effects:["gettystability","kadreymeta","nytopenai","rossintelligence","musicpublishersai","ainewsdeals"] }

);
