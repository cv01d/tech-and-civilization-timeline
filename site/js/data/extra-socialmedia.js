// SUPPLEMENT — the social platform, from the dial-up bulletin board to the global
// regulatory wave. The through-line is the museum's oldest: the technology outpaces
// the law by a decade, a crisis (an election, a genocide, a livestreamed massacre, a
// teenager's harm) forces public attention, Congress holds hearings but rarely
// legislates, the EU moves first with binding rules, and the rest of the world
// scrambles to follow. Cross-links the existing arpanet, webpublic, facebook, youtube,
// likebutton, cambridgeanalytica, arabspring, snowden, gdpr, schrems cards.
// Round one: data only — images to follow.
window.ATLAS_EVENTS.push(

{ id:"bbs", year:1978, date:"1978", era:5, cat:"social",
  title:"The Bulletin Board System",
  wiki:"Bulletin board system",
  summary:"In a Chicago blizzard, Ward Christensen and Randy Suess build the first dial-up BBS — strangers phoning a single computer to post messages, swap files, and arrange to meet. The online community is born.",
  importance:"Snowed in during the Great Blizzard of 1978, two hobbyists wired a modem to a microcomputer so people could dial in, leave messages on a shared board, and read each other's replies. It was tiny, local, and one-caller-at-a-time, but it established the fundamental act of the social internet: posting to a public space and waiting for a stranger to answer. Every forum, feed, and comment thread in this gallery descends from that snowbound experiment.",
  impact:{
    communications:"The first public online community — posting to strangers becomes possible.",
    technology:"The modem and the shared message board prefigure the entire social web.",
    society:"Geographically scattered people form communities around interests, not place." },
  causes:["arpanet"], effects:["thewell","irc","sixdegrees"] },

{ id:"thewell", year:1985, date:"1985", era:5, cat:"social",
  title:"CompuServe and The WELL",
  wiki:"The WELL",
  summary:"Commercial online services arrive: CompuServe sells forums, chat, and email to the mass market, while the Bay Area's WELL becomes the influential prototype of online community and digital culture.",
  importance:"CompuServe turned the BBS idea into a paid national service — forums, real-time chat, and email for anyone with a modem — while The WELL (Whole Earth 'Lectronic Link) gathered a small, intensely literate community whose debates shaped how the culture would think about virtual life itself. Together they proved online community could be a product and a culture at once. The WELL in particular seeded the language of cyberspace that the web would inherit.",
  impact:{
    communications:"Online community becomes a commercial mass-market service.",
    society:"The WELL incubates the founding ideas and vocabulary of digital culture.",
    technology:"Forums, chat, and email are bundled into a single consumer experience." },
  causes:["bbs"], effects:["aol","sixdegrees"] },

{ id:"irc", year:1988, date:"1988", era:5, cat:"social",
  title:"Internet Relay Chat",
  wiki:"Internet Relay Chat",
  summary:"Jarkko Oikarinen creates IRC — the first real-time, global, public chat infrastructure, where channels of strangers worldwide talk at once.",
  importance:"IRC moved online conversation from the slow rhythm of posted messages to live, many-to-many chat spanning the globe, organized into topical channels anyone could join. It carried news of coup attempts and disasters in real time before any newsroom, and built the cultural grammar — channels, nicknames, ops, bots — that later chat and messaging would reuse. It is the direct ancestor of every group chat and live comment stream.",
  impact:{
    communications:"Real-time, global, public group chat becomes possible for the first time.",
    society:"Strangers worldwide gather in topical channels, live and continuous.",
    technology:"The many-to-many chat protocol sets patterns later platforms inherit." },
  causes:["bbs"], effects:["aol","twitter"] },

{ id:"aol", year:1993, date:"1993", era:6, cat:"social",
  title:"AOL and the Mass-Market Online",
  wiki:"AOL",
  summary:"America Online floods mailboxes with free trial discs and brings tens of millions of ordinary Americans their first email address, chat room, and screen name — the internet's mainstream on-ramp.",
  importance:"AOL took the online service to the general public with relentless marketing and a friendly walled garden, and for millions the words 'You've Got Mail' were their introduction to the internet itself. Its chat rooms and instant messaging normalized talking to strangers and friends online as everyday behavior, the social habit later platforms would industrialize. AOL was the bridge between the hobbyist online world and the mass social internet to come.",
  impact:{
    communications:"Tens of millions get their first email, screen name, and chat room.",
    society:"Being online shifts from hobbyist niche to mainstream daily life.",
    technology:"The walled-garden portal model previews the platform era." },
  causes:["thewell","irc"], effects:["sixdegrees","myspace"] },

{ id:"section230", year:1996, date:"1996", era:6, cat:"social",
  title:"Section 230: Twenty-Six Words",
  wiki:"Section 230",
  summary:"The Communications Decency Act tries to police internet speech; the Supreme Court strikes most of it down in 1997, but Section 230 survives — granting platforms immunity for what their users post, the most consequential internet law ever written.",
  importance:"Congress meant the CDA to scrub indecency from the web, and the Court found most of it an unconstitutional muzzle on speech. What endured was a near-afterthought, Section 230: 'No provider... shall be treated as the publisher' of user content. Those twenty-six words let platforms host billions of posts without being sued for each one — the legal foundation that made YouTube, Facebook, and the entire user-generated internet possible, and the law every later reckoning circles back to.",
  impact:{
    law:"Platforms gain broad immunity for user-generated content — the bedrock of the social web.",
    communications:"Hosting unlimited user speech becomes legally survivable.",
    power:"A single clause shapes the economic structure of the entire platform era." },
  causes:["webpublic"], effects:["facebookapi","gonzalez","kosa"] },

{ id:"sixdegrees", year:1997, date:"1997", era:6, cat:"social",
  title:"SixDegrees: The First Social Network",
  wiki:"SixDegrees.com",
  summary:"SixDegrees.com combines profiles, friend lists, and messaging in one place — the first recognizable social network, years before the infrastructure could sustain it.",
  importance:"SixDegrees assembled the three elements every social network since has used — a personal profile, an explicit list of friends, and the ability to message across that graph — and built a service on the premise that everyone is connected by six links. It reached millions but arrived before broadband, digital photography, and the smartphone could make it sticky, and it folded. Its blueprint, however, was exactly right; Friendster, MySpace, and Facebook simply built it again at the right moment.",
  impact:{
    communications:"The profile + friend-list + messaging model of all social networks debuts.",
    technology:"The 'social graph' becomes the organizing structure of online life.",
    society:"Identity online shifts from anonymous handle to mapped network of real ties." },
  causes:["aol","thewell"], effects:["friendster","myspace","facebookapi"] },

{ id:"blogging", year:1999, date:"1999", era:6, cat:"social",
  title:"Blogging Goes Mainstream",
  wiki:"Blog",
  summary:"LiveJournal and Blogger launch, putting publishing in everyone's hands; self-expression and personal journaling become a mass public act, the precursor to the status update.",
  importance:"Before the feed there was the blog: LiveJournal and Blogger removed the technical barrier to publishing, and suddenly anyone could broadcast a diary, an argument, or a life to the open web. It dissolved the line between audience and author that mass media had held for a century, and trained a generation in the habits — frequent posting, public intimacy, comment threads — that social platforms would later compress into the status update. Personal publishing became ordinary.",
  impact:{
    communications:"Publishing to the public becomes free and effortless for everyone.",
    society:"Public self-expression and confessional intimacy become mass behavior.",
    power:"The one-to-many monopoly of mass media is broken by the individual author." },
  causes:["webpublic"], effects:["myspace","twitter"] },

{ id:"friendster", year:2002, date:"2002", era:6, cat:"social",
  title:"Friendster's Flameout",
  wiki:"Friendster",
  summary:"Friendster brings the social network to the mainstream and rockets to three million users — then collapses under technical load it cannot handle, a cautionary tale of timing and scale.",
  importance:"Friendster was the first social network to feel like a phenomenon, growing explosively as people raced to map their real friendships online. But its servers buckled under the demand, pages crawled, and frustrated users drifted to faster rivals — proof that in the platform era, infrastructure is destiny. Its rise showed the appetite was real; its fall showed that whoever could actually scale would win, a lesson MySpace and then Facebook took to heart.",
  impact:{
    communications:"The social network becomes a genuine mass phenomenon for the first time.",
    technology:"Scaling failure proves infrastructure decides who survives the network race.",
    society:"Mapping real friendships online moves from novelty to expectation." },
  causes:["sixdegrees"], effects:["myspace","facebookapi"] },

{ id:"myspace", year:2003, date:"2003", era:6, cat:"social",
  title:"MySpace and LinkedIn",
  wiki:"Myspace",
  summary:"MySpace lets users customize garish profiles and follow music, becoming the world's most-visited website by 2006; LinkedIn applies the same graph to careers. The social network goes culturally dominant.",
  importance:"MySpace turned the profile into a canvas — custom HTML, autoplaying songs, a ranked 'Top 8' friends — and became the center of youth culture and music discovery, the first social network to top the global traffic charts. LinkedIn, launched the same year, proved the model worked for professional life too. Between them they made the social network the default shape of the web, the ground onto which Facebook would shortly stake its more disciplined claim.",
  impact:{
    communications:"The social network becomes the most-visited destination on the web.",
    society:"Online identity, music, and youth culture fuse on the customizable profile.",
    technology:"The social graph splits into personal (MySpace) and professional (LinkedIn) forms." },
  causes:["friendster","blogging","aol"], effects:["facebookapi","obamacampaign"] },

{ id:"twitter", year:2006, date:"2006", era:6, cat:"social",
  title:"Twitter and the Real-Time Feed",
  wiki:"Twitter",
  summary:"Twitter's 140-character microblog turns the internet into a global, real-time nervous system — breaking news, organizing protest, and amplifying outrage faster than any institution can respond.",
  importance:"Twitter stripped the post down to a sentence and made it instant and public by default, and in doing so became the world's real-time information feed — where earthquakes, revolutions, and scandals surfaced before the newswires. Its speed and reach made it indispensable to journalists, activists, and politicians, and equally to propagandists and mobs. The same frictionless amplification that organized the Arab Spring would later supercharge disinformation and harassment.",
  impact:{
    communications:"The internet gains a global, public, real-time information feed.",
    power:"Breaking news and political organizing move at the speed of a single post.",
    society:"Instant amplification empowers activists and propagandists alike." },
  causes:["blogging","irc"], effects:["arabspring","russia2016","trumpban"] },

{ id:"facebookapi", year:2007, date:"2007", era:6, cat:"social",
  title:"Facebook Opens the Data Tap",
  wiki:"Facebook",
  summary:"Facebook opens its platform to third-party apps, letting outside developers harvest user data at scale — building the architecture that, a decade later, makes Cambridge Analytica possible.",
  importance:"By opening its API, Facebook turned itself into a platform other companies could build on — and, crucially, draw data from, including data about users' friends who had never consented. It fueled explosive growth and a developer gold rush, but it also wired in the structural vulnerability that Cambridge Analytica would exploit to siphon tens of millions of profiles. The decision captured the era's bargain: openness and growth purchased with a quiet surrender of personal data.",
  impact:{
    surveillance:"Third parties gain large-scale access to user data, including friends' data.",
    communications:"The social network becomes a platform others build atop.",
    law:"The data architecture that enables the Cambridge Analytica scandal is laid." },
  causes:["facebook","sixdegrees","section230"], effects:["cambridgeanalytica","likebutton"] },

{ id:"obamacampaign", year:2008, date:"2008", era:6, cat:"social",
  title:"The First Social-Media Election",
  wiki:"Barack Obama 2008 presidential campaign",
  summary:"Barack Obama's campaign uses Facebook, YouTube, and email lists systematically to organize, fundraise, and mobilize — proving social media is now a decisive instrument of political power.",
  importance:"The 2008 campaign treated social platforms as core infrastructure, not novelty: building online organizing tools, raising small-dollar money at scale, and reaching voters directly without the filter of traditional media. It demonstrated that whoever mastered the platforms held a real electoral advantage, and it set off an arms race in political data and targeting. The optimism of that moment — social media as democratizing force — would curdle within a decade into Cambridge Analytica and foreign interference.",
  impact:{
    power:"Social media becomes a decisive tool of electoral organizing and fundraising.",
    communications:"Campaigns reach voters directly, bypassing traditional media gatekeepers.",
    society:"The hopeful view of platforms as democratizing reaches its high-water mark." },
  causes:["myspace","youtube","facebook"], effects:["russia2016","cambridgeanalytica"] },

{ id:"instagram", year:2010, date:"2010", era:6, cat:"social",
  title:"Instagram and the Image Feed",
  wiki:"Instagram",
  summary:"Instagram makes the photo the unit of social life; Facebook buys it for $1 billion in 2012. The curated image feed reshapes self-presentation, aspiration, and, eventually, teenage mental health.",
  importance:"Instagram fused the smartphone camera with the social feed and the filter, turning everyday life into a stream of polished images and making visual self-presentation the medium of social status. Facebook's $1 billion acquisition of a thirteen-person company signaled how valuable the photo feed had become. The same curated perfection that drove its growth would, in Facebook's own later research, be shown to corrode the self-image of teenage girls — a harm the company studied and buried.",
  impact:{
    communications:"The photograph becomes the central unit of social expression.",
    society:"Curated images reset norms of aspiration, beauty, and self-worth.",
    technology:"The smartphone camera and the feed fuse into a single habit." },
  causes:["iphone","facebook"], effects:["haugen","snapchat"] },

{ id:"snapchat", year:2011, date:"2011", era:6, cat:"social",
  title:"Snapchat and the Disappearing Message",
  wiki:"Snapchat",
  summary:"Snapchat pioneers ephemeral content — messages and photos that vanish after viewing — reshaping expectations of privacy, permanence, and performance online.",
  importance:"Against a web that remembered everything, Snapchat offered forgetting: images and messages that disappeared by design, countering the permanent record that earlier platforms had made the norm. It reshaped how a generation thought about privacy and self-presentation, favoring the candid and momentary over the archived and curated, and its 'Stories' format was copied by every major platform. Ephemerality became a feature the whole industry adopted.",
  impact:{
    communications:"Ephemeral, self-deleting content becomes a mainstream mode of sharing.",
    society:"Expectations of online permanence and privacy are rewritten for a generation.",
    technology:"The 'Stories' format is invented and absorbed across every platform." },
  causes:["instagram"], effects:["haugen"] },

{ id:"egyptshutdown", year:2011, date:"2011", era:6, cat:"social",
  title:"Egypt Pulls the Plug",
  wiki:"Egyptian revolution of 2011",
  summary:"As protesters organize on Facebook and Twitter, Egypt shuts down the entire national internet for five days — the first time a major state kills connectivity to suppress a social-media-driven uprising.",
  importance:"When the Arab Spring reached Cairo, the Mubarak government did what no major state had dared: it switched off the country's internet and mobile networks for five days to break the protesters' coordination. The blackout failed to stop the revolution but proved a new reality — social media had become threatening enough to authoritarian control that severing a nation's connectivity was now a tool of statecraft. It opened the era of internet shutdowns that autocracies worldwide would normalize.",
  impact:{
    power:"A state severs national connectivity to suppress a platform-organized uprising.",
    communications:"The internet kill-switch enters the authoritarian toolkit.",
    surveillance:"Platforms are confirmed as a genuine threat to state control of information." },
  causes:["arabspring","twitter"], effects:["russia2016"] },

{ id:"rohingya", year:2013, date:"2013–2017", era:7, cat:"social",
  title:"Facebook and the Rohingya Genocide",
  wiki:"Rohingya genocide",
  summary:"In Myanmar, where Facebook is effectively the internet, anti-Rohingya hate spreads almost unchecked for want of Burmese-language moderators; UN investigators later find the platform played a 'determining role' in inciting genocidal violence.",
  importance:"Facebook entered Myanmar as the de facto internet for millions, yet staffed almost no moderators who could read Burmese, and for years incitement against the Rohingya minority circulated unchecked as violence escalated toward genocide. In 2018 UN investigators stated the platform had played a 'determining role,' and Facebook conceded it had been too slow. It is the museum's gravest case of the engagement machine's externalities — a recommender tuned for reach, loosed on a society it did not bother to understand, with lethal results.",
  impact:{
    power:"An unmoderated platform is found to have helped incite a genocide.",
    society:"The human cost of scaling reach without moderation becomes undeniable.",
    law:"The episode fuels global demands that platforms answer for real-world harm." },
  causes:["facebook","likebutton"], effects:["christchurch","dsa"] },

{ id:"gamergate", year:2014, date:"2014", era:7, cat:"social",
  title:"Gamergate: The Harassment Template",
  wiki:"Gamergate (harassment campaign)",
  summary:"A coordinated campaign targeting women in the games industry shows that platforms can be weaponized for sustained, organized mob harassment with effectively no accountability — a playbook later adopted broadly.",
  importance:"Gamergate fused message-board coordination with the open reach of Twitter to subject women in gaming to relentless harassment, doxxing, and threats, while the platforms hosting it offered little defense. It revealed both the ease of organizing mob abuse across services and the structural unwillingness of platforms to stop it. The tactics it pioneered — brigading, manufactured outrage, the swarm — became the standard toolkit of online harassment and, soon, of political disinformation.",
  impact:{
    power:"Coordinated mob harassment is shown to operate at scale with impunity.",
    society:"Women are driven from public online life by organized abuse.",
    communications:"The brigading playbook is established and exported to politics." },
  causes:["twitter"], effects:["russia2016","kosa"] },

{ id:"russia2016", year:2016, date:"2016", era:7, cat:"social",
  title:"2016: The Disinformation Election",
  wiki:"Russian interference in the 2016 United States elections",
  summary:"Russia's Internet Research Agency runs a systematic disinformation campaign across Facebook, Twitter, and YouTube, reaching an estimated 126 million Americans on Facebook alone — and the engagement-maximizing algorithms amplify it.",
  importance:"A foreign troll farm exploited exactly the machinery the platforms had built — open APIs, microtargeting, and recommenders tuned for outrage — to inject division into the U.S. election at a scale measured in the hundreds of millions of impressions. It shattered the 2008-era faith in social media as a democratizing force and exposed the business model's core flaw: engagement optimization rewards the inflammatory and the false. The reckoning that followed — hearings, audits, regulation — begins here.",
  impact:{
    power:"Foreign disinformation reaches over a hundred million voters through the feed.",
    communications:"Engagement-maximizing algorithms are shown to amplify falsehood and outrage.",
    law:"The episode triggers the global wave of platform scrutiny and regulation." },
  causes:["facebookapi","twitter","obamacampaign","gamergate","egyptshutdown"], effects:["cambridgeanalytica","haugen","dsa"] },

{ id:"pizzagate", year:2016, date:"2016", era:7, cat:"social",
  title:"Pizzagate: Conspiracy to Gunfire",
  wiki:"Pizzagate conspiracy theory",
  summary:"A viral conspiracy theory spread on Facebook and Reddit leads a man to fire a rifle inside a Washington, D.C. pizzeria — an early, vivid case of social-media falsehood producing real-world violence.",
  importance:"Pizzagate showed how quickly a baseless theory could metastasize across platforms into the physical world: a man, convinced by what he read online, drove to a restaurant and opened fire searching for a nonexistent crime. No one was hurt, but the line from feed to firearm was now undeniable. It previewed the radicalization pipeline that QAnon and January 6 would later industrialize, and it forced the recognition that viral misinformation is not merely false but dangerous.",
  impact:{
    power:"Online conspiracy is shown to translate directly into real-world violence.",
    society:"The radicalization pipeline from feed to action becomes visible.",
    communications:"Viral falsehood is reframed as a physical-safety problem, not just a truth problem." },
  causes:["russia2016","likebutton"], effects:["trumpban","infodemic"] },

{ id:"alexjones", year:2018, date:"2018", era:7, cat:"social",
  title:"Deplatforming Alex Jones",
  wiki:"Alex Jones",
  summary:"Facebook, YouTube, Apple, and Spotify remove Alex Jones and Infowars within days of one another — the first coordinated major deplatforming of a U.S. public figure, igniting the debate over private platform power over speech.",
  importance:"For years the platforms had hosted Jones's conspiracy broadcasts under their hands-off ethos; in 2018 they acted nearly in unison to remove him, demonstrating that a handful of private companies could erase a public figure from the digital public square overnight. It crystallized the central tension of the platform era: the same power that can suppress genuine harm is unaccountable, opaque, and concentrated in a few firms. The deplatforming debate — censorship or moderation, public square or private property — starts in earnest here.",
  impact:{
    power:"A few private firms demonstrate they can erase a public figure from the public square.",
    law:"The unaccountable nature of platform moderation power becomes a central issue.",
    communications:"'Deplatforming' enters the vocabulary as both remedy and threat." },
  causes:["russia2016"], effects:["trumpban","onlinesafetyact"] },

{ id:"christchurch", year:2019, date:"2019", era:7, cat:"social",
  title:"Christchurch: The Livestreamed Massacre",
  wiki:"Christchurch mosque shootings",
  summary:"A gunman livestreams the murder of 51 worshippers at two New Zealand mosques on Facebook; copies propagate across platforms for hours. New Zealand and Australia pass emergency laws compelling rapid removal of violent content.",
  importance:"The Christchurch attacker weaponized the platforms' own broadcast tools, streaming the massacre live and relying on millions of users to spread it faster than moderators could delete it. The horror forced the first laws aimed squarely at social-media livestreaming: New Zealand and Australia mandated swift removal of violent content, and the 'Christchurch Call' organized governments and platforms against terrorist material. It was a turning point in which states stopped asking platforms to self-regulate and began compelling them.",
  impact:{
    law:"The first laws directly targeting violent livestreaming are enacted.",
    communications:"Platform broadcast tools are shown to be weaponizable in real time.",
    power:"Governments shift from requesting platform cooperation to mandating it." },
  causes:["rohingya","facebook"], effects:["onlinesafetyact","dsa"] },

{ id:"libra", year:2019, date:"2019", era:7, cat:"social",
  title:"Facebook's Currency Is Killed",
  wiki:"Diem (digital currency)",
  summary:"Facebook announces Libra, a global cryptocurrency; alarmed financial regulators worldwide force the project to collapse — the first time regulators successfully halt a major Facebook product before launch.",
  importance:"Libra proposed that the company connecting billions of people should also issue their money, and the prospect of a private, supranational currency outside central-bank control united regulators across the U.S. and Europe in opposition. Under that pressure partners fled and the project died — the first clear instance of governments stopping a flagship Facebook initiative outright. It signaled that the era of platforms expanding unchecked into any domain they chose was beginning to close.",
  impact:{
    law:"Regulators halt a flagship platform product before launch for the first time.",
    power:"States refuse to cede monetary sovereignty to a social-media company.",
    society:"The limits of platform expansion into new domains become enforceable." },
  causes:["facebook"], effects:["dsa"] },

{ id:"infodemic", year:2020, date:"2020", era:7, cat:"social",
  title:"The COVID Infodemic",
  wiki:"Infodemic",
  summary:"Health misinformation outruns fact-checks on every platform during the pandemic; the WHO names the crisis an 'infodemic,' and platforms begin labeling and removing health claims for the first time.",
  importance:"The pandemic turned the platforms' amplification machinery against public health, as false cures and vaccine conspiracies spread faster than any correction could follow, with lethal consequences. The WHO's coinage 'infodemic' captured a new category of harm, and platforms — long resistant to judging the truth of posts — began for the first time labeling, demoting, and removing health misinformation at scale. It pulled them into the role of arbiters of fact they had always refused, and intensified the fight over who decides what is true.",
  impact:{
    communications:"Misinformation is shown to outrun fact at lethal scale during a crisis.",
    society:"Platforms become reluctant arbiters of truth on health, against their will.",
    power:"Content moderation expands from safety into the contested terrain of fact." },
  causes:["pizzagate","russia2016"], effects:["trumpban","dsa"] },

{ id:"trumpban", year:2021, date:"January 2021", era:7, cat:"social",
  title:"Deplatforming a President",
  wiki:"Donald Trump on social media",
  summary:"After the January 6 Capitol attack — organized in part on Facebook, Twitter, and Parler — Twitter, Facebook, YouTube, and Snapchat suspend or ban the sitting U.S. president, the most dramatic display of platform power ever seen.",
  importance:"The platforms that had amplified a president for years removed him within days of the Capitol riot, demonstrating that private companies could silence the most powerful voice on earth by policy decision alone. To some it was overdue accountability; to others, proof of unaccountable corporate control over political speech. Either way it laid the platform-power question bare at the highest possible stakes, and it accelerated both the push to regulate the companies and the drive to build alternative, unmoderated networks.",
  impact:{
    power:"Private platforms silence a sitting head of state — the starkest show of their power.",
    law:"The episode supercharges demands to regulate platform moderation on all sides.",
    communications:"The fight over the public square moves to its highest possible stakes." },
  causes:["twitter","alexjones","pizzagate","infodemic"], effects:["dsa","kosa","onlinesafetyact"] },

{ id:"haugen", year:2021, date:"2021", era:7, cat:"social",
  title:"The Facebook Whistleblower",
  wiki:"Frances Haugen",
  summary:"Frances Haugen leaks internal documents proving Facebook knew its algorithm amplified division and that Instagram harmed teen girls' mental health — yet chose growth over reform. She testifies before the Senate.",
  importance:"Haugen's 'Facebook Papers' converted suspicion into evidence: the company's own researchers had documented that the engagement algorithm rewarded anger and that Instagram worsened body image and suicidal ideation among teenage girls, and leadership had buried the findings. Called the most important whistleblower since Snowden, she gave regulators a documented case that the harms were known, internal, and chosen. Her disclosures became the factual backbone of the children's-safety laws that followed.",
  impact:{
    power:"Internal proof shows the platform knew of its harms and chose growth anyway.",
    society:"The damage to teenage girls' mental health is documented from the inside.",
    law:"The leak supplies the evidentiary basis for child-safety legislation worldwide." },
  causes:["russia2016","instagram","snapchat"], effects:["kosa","onlinesafetyact","australiaban"] },

{ id:"dsa", year:2022, date:"2022", era:7, cat:"social",
  title:"The EU Digital Services Act",
  wiki:"Digital Services Act",
  summary:"The EU passes the DSA, the most comprehensive platform regulation in history: very large platforms must assess systemic risks, open data to researchers, allow algorithm audits, and remove illegal content — with fines up to 6% of global revenue.",
  importance:"The DSA marked the moment regulation finally tried to match the platforms' scale and opacity, imposing binding duties on the largest of them — risk assessments, researcher data access, algorithmic transparency, and illegal-content removal — backed by fines large enough to matter. As with GDPR before it, Europe moved first and globally, setting a de facto world standard. It converted a decade of crises into enforceable obligations, and made the EU the venue where platform accountability would actually be tested.",
  impact:{
    law:"The most comprehensive binding platform regulation in history takes force.",
    power:"The largest platforms are made legally accountable for systemic risks.",
    communications:"Algorithmic transparency and researcher access become legal requirements." },
  causes:["russia2016","rohingya","christchurch","haugen","trumpban","gdpr"], effects:["kosa","australiaban","tiktokban"] },

{ id:"kosa", year:2023, date:"2023", era:7, cat:"social",
  title:"KOSA and the Children's-Safety Push",
  wiki:"Kids Online Safety Act",
  summary:"The U.S. Senate passes the Kids Online Safety Act with rare bipartisan support, imposing a 'duty of care' on platforms used by minors — the most serious U.S. social-media legislation in years. It stalls in the House.",
  importance:"Built on the Haugen disclosures, KOSA would require platforms to mitigate harms to children by design rather than after the fact, and it cleared the Senate with a bipartisanship almost unheard of in U.S. tech policy. Then it stalled in the House amid free-speech and scope objections — the recurring American pattern in which hearings and momentum fail to become law. Its fate underscored the contrast with Europe: the U.S. could agree on the problem and still not legislate.",
  impact:{
    law:"The U.S. seriously advances child-safety platform regulation — then stalls in the House.",
    society:"A 'duty of care' toward minors becomes the framework for the children's-safety fight.",
    power:"The American pattern of hearings-without-legislation repeats once more." },
  causes:["haugen","section230","gamergate"], effects:["australiaban"] },

{ id:"metafine2023", year:2023, date:"May 2023", era:7, cat:"social",
  title:"The Largest GDPR Fine",
  wiki:"General Data Protection Regulation",
  summary:"Meta is fined €1.2 billion under GDPR for unlawfully transferring EU user data to U.S. servers — the largest privacy penalty in history, the enforcement edge of the Schrems data-transfer rulings.",
  importance:"The record €1.2 billion fine, for moving Europeans' data to the United States in defiance of the Schrems II ruling on inadequate U.S. protections, showed that GDPR's threat of revenue-scale penalties was real and that cross-border data flows were now a genuine legal constraint. It demonstrated the EU's willingness to impose costs large enough to alter corporate behavior. The fine is the concrete proof that Europe's privacy regime had grown teeth the American framework still lacked.",
  impact:{
    law:"The largest-ever privacy fine proves GDPR's revenue-scale penalties are real.",
    surveillance:"Cross-border data transfer becomes a binding legal constraint, not a formality.",
    power:"Europe's privacy regime is shown to have enforcement teeth the U.S. lacks." },
  causes:["gdpr","schrems"], effects:["dsa"] },

{ id:"gonzalez", year:2023, date:"2023", era:7, cat:"social",
  title:"Section 230 Survives the Court",
  wiki:"Gonzalez v. Google LLC",
  summary:"In Gonzalez v. Google, the Supreme Court declines to narrow Section 230's immunity for algorithmic recommendations, leaving the 1996 law — and the legal foundation of the platform economy — intact for now.",
  importance:"The case asked whether Section 230's shield extends to a platform's algorithmic recommendations, not just its hosting of content — a question with the power to remake the entire industry. The Court sidestepped it, declining to narrow the immunity and leaving the twenty-six words of 1996 standing. The reprieve meant that the central legal question of the social-media age — whether platforms answer for what their algorithms amplify — remained unresolved, deferred once more to a future case or a Congress that would not act.",
  impact:{
    law:"The Court leaves Section 230's broad immunity intact, including for recommendations.",
    power:"The foundational question of algorithmic liability is deferred, not decided.",
    communications:"The legal bedrock of the platform economy survives its biggest test." },
  causes:["section230"], effects:["kosa"] },

{ id:"onlinesafetyact", year:2023, date:"2023", era:7, cat:"social",
  title:"The UK Online Safety Act",
  wiki:"Online Safety Act 2023",
  summary:"Britain's Online Safety Act becomes law, requiring platforms to protect users from illegal and harmful content, imposing child-safety duties, and creating new offenses for sharing intimate images without consent.",
  importance:"After years of drafting, the UK imposed a sweeping 'duty of care' on platforms — to assess and mitigate illegal and harmful content, to shield children, and to face a powerful regulator in Ofcom with real enforcement power. It criminalized non-consensual intimate imagery and pressed platforms toward age assurance. With the DSA, it marked the post-self-regulation settlement taking hold across the democratic world: binding duties, empowered regulators, and the end of the platforms' decade of effective immunity from accountability for harm.",
  impact:{
    law:"A sweeping duty-of-care regime and a powerful regulator are imposed on platforms.",
    society:"Child safety and non-consensual intimate imagery gain dedicated legal protection.",
    power:"The democratic world's post-self-regulation settlement takes hold." },
  causes:["christchurch","haugen","trumpban","alexjones"], effects:["australiaban"] },

{ id:"tiktokban", year:2024, date:"2024–2025", era:7, cat:"social",
  title:"The TikTok Divestment Law",
  wiki:"Restrictions on TikTok in the United States",
  summary:"Citing national-security fears over Chinese ownership, Congress passes a law forcing ByteDance to sell TikTok or face a U.S. ban; the Supreme Court upholds it unanimously, and TikTok briefly goes dark in January 2025 before a reprieve.",
  importance:"The TikTok law marked a new front: not content or privacy but ownership and geopolitics, the United States moving to force the divestment of a platform used by 170 million Americans because its parent answered to Beijing. The unanimous Supreme Court endorsement and TikTok's brief January 2025 blackout showed how far the state would now go, while the subsequent delays showed how entangled the platform had become in daily life and politics. It fused the social-media reckoning with great-power rivalry over data and influence.",
  impact:{
    law:"The U.S. forces a platform's divestment on national-security grounds, upheld unanimously.",
    power:"Platform regulation fuses with great-power rivalry over data and influence.",
    surveillance:"Foreign ownership of a mass platform is treated as a security threat in itself." },
  causes:["dsa","snowden"], effects:["australiaban"] },

{ id:"australiaban", year:2024, date:"2024–2026", era:7, cat:"social",
  title:"Australia Bans Under-16s",
  wiki:"Internet censorship in Australia",
  summary:"Australia passes the world's first age-based social-media ban, barring under-16s from major platforms with fines up to $50 million; enforced from December 2025, it is watched globally — and early results show little behavior change and rising cyberbullying complaints.",
  importance:"Australia took the children's-safety argument to its furthest point yet, legally barring under-16s from Facebook, Instagram, TikTok, YouTube, Snapchat, X, and more, and switching the ban on in December 2025 — the first country to enforce an age gate at national scale, with Malaysia, Turkey, Greece, and Norway moving to follow. Yet early data showed no meaningful shift away from the platforms and a 26% rise in cyberbullying complaints, a fitting coda to the whole atlas: the law, arriving at last, still struggling to keep pace with the technology it means to govern.",
  impact:{
    law:"The first national, age-based social-media ban is enacted and enforced.",
    society:"Other nations move to copy the model as the global child-safety wave crests.",
    power:"Early results show regulation, even at its boldest, still lagging the technology." },
  causes:["haugen","dsa","kosa","onlinesafetyact","tiktokban"], effects:[] }

);
