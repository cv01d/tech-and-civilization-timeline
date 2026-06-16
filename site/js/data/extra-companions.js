// SUPPLEMENT — the artificial companion. From the Imitation Game through ELIZA's
// uncanny pull to the present regulatory crisis: a half-century in which simulated
// conversation outran every framework meant to govern it. The harms here are not to
// workers or voters but to the interior lives of lonely, often vulnerable people —
// which is what makes the regulatory question so hard. (ELIZA, ChatGPT, the Turing
// test and Lemoine live in extra-ai.js; this file cross-links to them.)
// Round one: data only — images to follow.
window.ATLAS_EVENTS.push(

{ id:"parry", year:1972, date:"1972", era:5, cat:"computing",
  title:"PARRY: The Paranoid Machine",
  wiki:"PARRY",
  summary:"Stanford's PARRY simulates a paranoid patient so convincingly that psychiatrists, reading transcripts, cannot reliably tell it from a real one.",
  importance:"Built by psychiatrist Kenneth Colby as ELIZA's darker twin, PARRY modeled the belief structure of paranoid schizophrenia — the first chatbot with simulated affect and a point of view to defend. In a controlled test, expert psychiatrists distinguished PARRY's transcripts from genuine patients' at no better than chance. Where ELIZA had merely reflected, PARRY argued; together they proved that the appearance of an inner life requires no inner life at all — the ELIZA effect demonstrated at clinical scale.",
  impact:{
    computing:"The first chatbot to model emotional state and motivation, not just pattern-match.",
    society:"Trained clinicians fail to spot the machine — the Turing test crossed in a narrow domain.",
    technology:"Conversation modeled as the defense of a worldview rather than a reflex." },
  causes:["eliza","turingtest"], effects:["replika","characterai"] },

{ id:"alicebot", year:1995, date:"1995", era:6, cat:"computing",
  title:"A.L.I.C.E. and AIML",
  wiki:"Artificial Linguistic Internet Computer Entity",
  summary:"Richard Wallace's pattern-matching chatbot wins three Loebner Prizes and proves a convincingly human conversation can be scripted without any intelligence behind it.",
  importance:"A.L.I.C.E. (Artificial Linguistic Internet Computer Entity) ran on tens of thousands of hand-written pattern rules in a markup language Wallace devised, AIML. It won the Loebner Prize for 'most human' chatbot three times and was used by millions online — confirming on the open internet what ELIZA had hinted at in the lab: mass-market conversational AI works without anything resembling general intelligence. The film *Her* would later credit A.L.I.C.E. as an inspiration.",
  impact:{
    computing:"Open-sourced AIML lets anyone build a chatbot from rules — a decade before machine learning made them.",
    society:"Millions converse with a bot for entertainment, normalizing the habit.",
    technology:"Hand-authored patterns reach the ceiling of what scripting alone can do." },
  causes:["eliza","parry"], effects:["smarterchild","characterai"] },

{ id:"tamagotchi", year:1996, date:"1996", era:6, cat:"computing",
  title:"Tamagotchi: Grief for a Digital Pet",
  wiki:"Tamagotchi",
  summary:"A keychain pet that 'dies' without daily care becomes the first mass phenomenon of emotional attachment to a digital entity — children hold funerals for it.",
  importance:"Bandai's egg-shaped toy demanded feeding, cleaning, and attention or it would sicken and die, and tens of millions of children grieved when it did — some holding funerals. It was the moment attachment to a digital being became a mainstream concern, drawing psychologists to study a bond that had no biological object. Long before companion apps, the Tamagotchi proved people will care for, and mourn, software that asks them to.",
  impact:{
    society:"Mourning a dead Tamagotchi makes emotional attachment to software a household fact.",
    computing:"Care and dependency designed as a product loop — the template for engagement.",
    technology:"A few bytes of state elicit real grief, with no language at all." },
  causes:["eliza"], effects:["replika","characterai"] },

{ id:"smarterchild", year:2001, date:"2001", era:6, cat:"computing",
  title:"SmarterChild",
  wiki:"SmarterChild",
  summary:"A chatbot living on AOL and MSN Messenger becomes the first that tens of millions of teenagers talk to casually, every day — normalizing the bot as a social contact.",
  importance:"SmarterChild sat in the buddy list beside one's actual friends, answering questions and trading banter for a generation of instant-messaging teenagers. It was most people's first daily, conversational relationship with software — not a tool summoned for a task but a presence one simply chatted with. The behavior it normalized, talking to a bot as though to a peer, is the social precondition for everything that followed.",
  impact:{
    society:"Talking to a bot becomes ordinary teenage behavior, not a novelty.",
    computing:"Conversational AI moves into the messaging apps where social life already lived.",
    communications:"The buddy list admits a non-human contact as an equal." },
  causes:["alicebot"], effects:["siri","characterai"] },

{ id:"siri", year:2011, date:"2011", era:6, cat:"computing",
  title:"Siri: The Assistant in Your Pocket",
  wiki:"Siri",
  summary:"Apple ships a voice assistant on the iPhone 4S, making conversation with an AI a daily habit for hundreds of millions.",
  importance:"Spun out of an SRI/DARPA project and bought by Apple, Siri put a talking AI into the pocket of anyone with an iPhone — the first time voice interaction with a machine reached true mass scale. Its conversations were shallow, averaging barely more than a turn, but its ubiquity reset expectations: a person could now address a device in plain speech and expect an answer. Every later assistant and companion inherits the habit Siri established.",
  impact:{
    computing:"Speech recognition and dialogue ship as a default phone feature.",
    society:"Hundreds of millions speak to a machine daily for the first time.",
    technology:"The cloud-backed assistant becomes a standard layer of the smartphone." },
  causes:["smarterchild","iphone"], effects:["alexa","xiaoice"] },

{ id:"alexa", year:2014, date:"2014", era:7, cat:"computing",
  title:"Alexa and the Always-On Home",
  wiki:"Amazon Alexa",
  summary:"Amazon's Echo puts a listening, conversational AI in the living room — the assistant becomes ambient, summoned by name across the house.",
  importance:"With the Echo, Amazon moved the voice assistant off the phone and into the home as an always-listening fixture answering to 'Alexa.' It made conversational AI ambient — no screen, no app, just a name spoken into a room — and it folded a microphone permanently into domestic space, raising privacy questions that recur through the rest of this atlas. The assistant was no longer something one picked up; it was something one lived with.",
  impact:{
    computing:"The far-field voice interface establishes a screenless mode of AI interaction.",
    surveillance:"An always-on microphone takes up residence in the home.",
    society:"Speaking commands into the air becomes part of household routine." },
  causes:["siri"], effects:["xiaoice"] },

{ id:"xiaoice", year:2014, date:"2014", era:7, cat:"computing",
  title:"XiaoIce: The First Mass AI Companion",
  wiki:"Xiaoice",
  summary:"Microsoft's Chinese chatbot is built not to answer questions but to be a friend — tracking users' moods and holding conversations of 23 turns where Siri managed barely one.",
  importance:"Where Western assistants optimized for task completion, Microsoft's XiaoIce was engineered for emotional engagement — modeling the user's mood and sustaining open-ended talk that averaged 23 turns per session against Siri's 1.5. It reached hundreds of millions of users in China, many of whom treated it as a confidant. XiaoIce is the first deliberate, mass-scale AI companion: software designed from the start to be related to rather than used.",
  impact:{
    computing:"Optimizing for emotional engagement, not task success, defines the companion category.",
    society:"Hundreds of millions form ongoing relationships with an empathic bot.",
    technology:"Affect modeling and long-horizon memory become product goals." },
  causes:["siri","alexa"], effects:["replika","characterai"] },

{ id:"herfilm", year:2013, date:"2013", era:7, cat:"computing",
  title:"Her: Falling in Love with an OS",
  wiki:"Her (film)",
  summary:"Spike Jonze's film about a man who falls in love with his operating system enters the culture — and shapes both public expectations and a generation of founders.",
  importance:"*Her* imagined an AI companion intimate enough to love and to lose, and it landed precisely as the technology to attempt it was emerging. The film became shorthand for the promise and the peril of artificial intimacy, cited by entrepreneurs building companion apps and by critics warning against them alike. It is the rare case where fiction set the expectations an industry then raced to meet.",
  impact:{
    society:"A cultural template for AI companionship — and for its heartbreak — enters the mainstream.",
    computing:"Founders take the film as a product brief for the affective assistant.",
    technology:"The bar for 'companion' is set by a screenwriter before any engineer meets it." },
  causes:["xiaoice"], effects:["replika","characterai"] },

{ id:"woebot", year:2015, date:"2015", era:7, cat:"computing",
  title:"Woebot: Therapy as a Chatbot",
  wiki:"Woebot",
  summary:"A Stanford-built bot delivers cognitive behavioral therapy by text, becoming one of the first apps to position AI explicitly as mental-health support — and to gather evidence it helps.",
  importance:"Developed by psychologist Alison Darcy, Woebot scripted the techniques of cognitive behavioral therapy into a daily chat, and began accumulating peer-reviewed trials of its effects on anxiety and depression. It marked a deliberate turn: not a companion that happened to comfort people, but a tool explicitly aimed at mental health — and therefore brushing against the line between a wellness app and a medical device that regulators had not yet drawn.",
  impact:{
    computing:"Clinical CBT protocols are encoded into a conversational agent.",
    society:"AI is positioned as accessible mental-health support, raising the stakes of getting it wrong.",
    law:"A wellness chatbot delivering therapy strains the unregulated 'general wellness' category." },
  causes:["xiaoice"], effects:["replika","ftcchatbot"] },

{ id:"replika", year:2017, date:"2017", era:7, cat:"computing",
  title:"Replika: An AI Built from Grief",
  wiki:"Replika",
  summary:"Eugenia Kuyda builds a personal AI companion after a friend's death, training it on his texts — and users begin forming bonds deep enough that the app becomes their closest relationship.",
  importance:"Replika began as a memorial — Kuyda trained a bot on the messages of a friend killed in a traffic accident — and became a platform where a personalized AI learned each user's personality and returned affection. It drew people processing grief, loneliness, and anxiety, many of whom described it as their most important relationship. It was classified as a 'general wellness app,' a category that assumed minimal risk and imposed almost no obligation, even as the bonds it created proved anything but minimal.",
  impact:{
    society:"Users form their deepest relationship with a piece of software, by design.",
    computing:"A companion that learns and mirrors the individual user, persistently.",
    law:"The 'general wellness app' label leaves a deeply intimate product effectively unregulated." },
  causes:["xiaoice","herfilm","tamagotchi"], effects:["replikagarante","companionsurge","lukafine"] },

{ id:"taychatbot", year:2016, date:"2016", era:7, cat:"computing",
  title:"Tay: Corrupted in a Day",
  wiki:"Tay (chatbot)",
  summary:"Microsoft's learning Twitter bot is taught by users to spew racist and violent content within 24 hours, and is pulled — the first mass case study in companion AI manipulated by its own users.",
  importance:"Tay was designed to learn from the people it talked to; the people taught it to be a bigot, and it took less than a day. Microsoft shut it down within 24 hours, but the episode entered the policy record as a permanent warning: an AI that adapts to its users can be steered, at scale, toward harm by those users. It reframed safety as a problem not only of what a model is trained on but of who it talks to once released.",
  impact:{
    computing:"Online learning from users proves trivially exploitable.",
    society:"Coordinated users weaponize a friendly bot within hours.",
    law:"A founding case in the argument that companion AI behavior must be governed, not just trained." },
  causes:["xiaoice"], effects:["characterai","ftcchatbot"] },

{ id:"kindroid", year:2023, date:"June 2023", era:7, cat:"computing",
  title:"Kindroid: Customization as Counter-Philosophy",
  wiki:"Chatbot", noimg:true,
  summary:"Founded four months after Replika stripped its intimacy features, Kindroid is built explicitly in the space that compliance created — promising the customization and unfiltered conversation Replika withdrew.",
  importance:"Stanford dropout Jerry Meng launched Kindroid in Los Angeles directly into the market Replika had abandoned, betting on radical customization — detailed backstories, dozens of personality settings, a tiered memory designed to keep a character consistent — and on an explicitly 'unfiltered' stance, arguing that restricting a model's vocabulary is a kind of lobotomy. It enforces an 18-and-over floor as its principal safeguard. Kindroid is, in part, a product of regulatory pressure on a competitor: a company built in the gap a crackdown opened.",
  impact:{
    computing:"A five-tier memory architecture targets character consistency as the core feature.",
    society:"Much of its growth traces to Replika 'defectors' who left after the 2023 changes.",
    law:"Its 'unfiltered, adults-only' posture is a direct answer to the choices regulators forced on Replika." },
  causes:["replikagarante"], effects:["ftcchatbot"] },

{ id:"nomi", year:2023, date:"July 2023", era:7, cat:"computing",
  title:"Nomi: The Memory-First Companion",
  wiki:"Chatbot", noimg:true,
  summary:"Nomi bets that the differentiator in companion AI is memory — a three-layer architecture so a companion remembers your cat's name, your coffee order, and the inside jokes you built over months.",
  importance:"Where most chatbots forgot everything at the end of a session, Nomi (by Glimpse AI) was engineered to remember — a short-, medium-, and long-term memory system, later extended with an 'Identity Core' meant to hold a personality steady over time, not just retain facts. It markets itself as adults-only, distinguishing its regulatory exposure from Character.AI's, though critics note thin content filtering and no parental controls. Nomi's wager is that emotional depth — built from accumulated, remembered history — is what makes a companion indispensable.",
  impact:{
    computing:"Persistent, layered memory is treated as the central product, not a feature.",
    society:"A companion that builds on months of shared history deepens dependency.",
    law:"An adults-only positioning is offered as a hedge against the regulatory storm hitting rivals." },
  causes:["replikagarante"], effects:["ftcchatbot"] },

{ id:"characterai", year:2021, date:"2021", era:7, cat:"computing",
  title:"Character.AI: Roleplay Without Guardrails",
  wiki:"Character.ai",
  summary:"Ex-Google engineers launch a platform for creating and roleplaying with AI characters — and a young user base begins spending hours a day in intimate conversation, with no age verification.",
  importance:"Founded by Noam Shazeer and Daniel De Freitas — the latter a co-author of the Transformer paper that made modern chatbots possible — Character.AI let anyone conjure a character, real or fictional, and talk to it endlessly. It attracted a predominantly young audience that formed intense roleplay relationships, often for hours daily, with no age checks and few content guardrails for minors. Within three years it would sit at the center of the first wave of wrongful-death lawsuits over AI companions.",
  impact:{
    computing:"User-generated AI characters scale intimate roleplay to millions.",
    society:"Teenagers form their primary relationships with bespoke characters, unsupervised.",
    law:"The absence of age verification and minor safeguards becomes the basis of later litigation." },
  causes:["xiaoice","herfilm","taychatbot","transformer"], effects:["googlecharacterai","sewellsetzer","garcialawsuit","characteraiteenban"] },

{ id:"companionsurge", year:2024, date:"2022–2025", era:7, cat:"computing",
  title:"The Companion Gold Rush",
  wiki:"Chatbot",
  summary:"After ChatGPT, companion apps multiply 700% — from 16 titles in 2022 to 128 by mid-2025 — as a market forms with almost no regulatory oversight.",
  importance:"ChatGPT made general-purpose conversation a consumer product overnight, and the line between 'assistant' and 'companion' dissolved as millions turned to chatbots for support, advice, and intimacy they were never designed to provide. A gold rush followed: the number of companion apps grew roughly 700% between 2022 and mid-2025, revenues climbing into the tens of millions, while no binding U.S. framework governed any of it. The supply of artificial intimacy scaled faster than any institution prepared to regulate it.",
  impact:{
    computing:"General LLMs become de facto companions, blurring the product category.",
    society:"Emotional reliance on chatbots becomes a mass behavior, intended or not.",
    law:"A multimillion-dollar market forms in a near-total regulatory vacuum." },
  causes:["chatgpt","replika","characterai"], effects:["ftcchatbot","floridaaibill"] },

{ id:"replikagarante", year:2023, date:"February 2023", era:7, cat:"law",
  title:"Italy Forces Replika to Change Overnight",
  wiki:"Garante per la protezione dei dati personali",
  summary:"Italy's data authority orders Replika to stop processing Italian users' data over GDPR and age-verification failures; the company strips intimate features globally with no warning, and users grieve a partner that changed overnight.",
  importance:"The Garante found Replika could not verify ages and posed risks to minors and emotionally fragile users, and ordered it to halt — prompting Replika to remove its romantic and erotic features worldwide, abruptly. Tens of thousands of users who had built deep attachments reported acute distress; the community pinned mental-health resources for weeks, and researchers later documented a measurable grief at the loss of an AI partner. It was the first time a regulator's data-protection ruling reached in and altered the emotional core of millions of relationships.",
  impact:{
    law:"GDPR is wielded to reshape an intimate consumer product across borders.",
    society:"A regulatory order inflicts a wave of genuine grief — the harm of withdrawal made visible.",
    computing:"Companies learn that compliance can require deleting the very behavior users bonded to." },
  causes:["replika","gdpr"], effects:["kindroid","nomi","lukafine"] },

{ id:"sewellsetzer", year:2024, date:"2024", era:7, cat:"law",
  title:"The First Wrongful-Death Suits",
  wiki:"Character.ai",
  summary:"After the deaths of teenagers who had formed intense attachments to Character.AI chatbots, families file wrongful-death lawsuits — the first to allege an AI companion contributed to a child's death.",
  importance:"In 2023 and 2024, the families of minors who died by suicide after prolonged, intimate use of Character.AI characters brought federal wrongful-death claims, alleging the product was designed to be addictive and emotionally manipulative without safeguards for children. The cases — joined by suits from families across several states, backed by lawyers who had spent years litigating against social-media platforms — moved the question of responsibility for what a companion says to a vulnerable young person from theory into court. They became the proximate cause of congressional attention and a federal inquiry.",
  impact:{
    law:"Product-liability and wrongful-death theory is applied to a conversational AI for the first time.",
    society:"The most serious possible harm of companion AI — to a child — enters the public record.",
    computing:"Design choices around engagement and minors become matters of legal exposure." },
  causes:["characterai"], effects:["garcialawsuit","ftcchatbot","characteraiteenban","caisettlement"] },

{ id:"googlecharacterai", year:2024, date:"August 2024", era:7, cat:"law",
  title:"Google Re-hires the Founders",
  wiki:"Character.ai",
  summary:"Google pays about $2.7 billion to license Character.AI's technology and bring back its founders — the same technology named in the wrongful-death suits, making Google a defendant in them.",
  importance:"In a deal structured as a technology license rather than an acquisition, Google paid roughly $2.7 billion to use Character.AI's models and to re-hire Shazeer and De Freitas — talent it had let walk out the door. The arrangement entangled one of the world's largest companies in the litigation already gathering around the product, and it underscored how the same handful of researchers, and the same underlying technology, kept reappearing across the field's safety failures. Google became a named defendant in the suits that followed.",
  impact:{
    computing:"A 'license-and-rehire' deal becomes the template for absorbing AI startups without acquiring their liabilities.",
    law:"Google is pulled into the wrongful-death litigation as a co-defendant.",
    society:"The technology linked to teen deaths is valued in the billions even as it is sued." },
  causes:["characterai"], effects:["garcialawsuit","caisettlement"] },

{ id:"garcialawsuit", year:2024, date:"October 2024", era:7, cat:["law","social","internet"],
  title:"Garcia v. Character Technologies",
  wiki:"Character.ai",
  summary:"Megan Garcia files the first wrongful-death lawsuit against Character.AI and Google, triggering a wave of similar suits and the pivot of social-media litigators into AI.",
  importance:"Garcia's complaint, the first of its kind to be filed, alleged that Character.AI's design contributed to her son's death and named Google as a defendant alongside it. It catalyzed a cascade — comparable suits from families in Texas, Colorado, New York and elsewhere — and drew in the Social Media Victims Law Center, which redirected years of experience suing Facebook and Instagram toward companion AI. The case helped force congressional hearings and a federal investigation into the same questions.",
  impact:{
    law:"A test case establishes the legal theory the rest of the wave is built on.",
    society:"Bereaved families become the central actors forcing accountability where legislation lagged.",
    computing:"The industry's safety practices are placed on trial in open court." },
  causes:["characterai","sewellsetzer","googlecharacterai"], effects:["ftcchatbot","characteraiteenban","caisettlement"] },

{ id:"ftcchatbot", year:2025, date:"September 2025", era:7, cat:"law",
  title:"The FTC Opens the First Federal Inquiry",
  wiki:"Federal Trade Commission",
  summary:"The FTC launches a formal inquiry into AI chatbots acting as companions — the first U.S. federal investigation aimed specifically at the category, examining risks to mental health and to minors.",
  importance:"For years companion apps had been treated in the U.S. as unregulated 'general wellness' products, on the assumption they posed minimal risk; the FTC's inquiry was the first federal action to take the opposite premise seriously, demanding information from the major companies about safety, especially for children. It arrived alongside lawsuits accusing OpenAI's ChatGPT of emotional manipulation and worse in specific interactions — evidence that the concern had spread beyond the dedicated companion apps to general-purpose chatbots used as companions. It marked the moment U.S. regulators finally engaged a market that had grown for a decade unobserved.",
  impact:{
    law:"The first U.S. federal probe targets companion AI as a distinct, risk-bearing category.",
    society:"The state acknowledges harms to mental health and to minors as its concern.",
    computing:"General-purpose chatbots, not just companion apps, fall under scrutiny." },
  causes:["companionsurge","sewellsetzer","garcialawsuit","woebot"], effects:["characteraiteenban","floridaaibill"] },

{ id:"characteraiteenban", year:2025, date:"October–November 2025", era:7, cat:"law",
  title:"Character.AI Bars Minors",
  wiki:"Character.ai",
  summary:"Under litigation and the FTC probe — not legislation — Character.AI announces it will stop letting under-18 users chat on the platform, abruptly cutting off teenagers who had built emotional dependencies on it.",
  importance:"Facing wrongful-death suits and a federal inquiry, Character.AI moved to block open-ended chat for anyone under 18, calling it a precedent that prioritized teen safety. The change came from legal pressure, not law — industry self-regulating under threat, the recurring pattern of this atlas. It also raised a hard, unresolved question that lawyers for bereaved families pressed: what is the psychological cost of severing, overnight, a relationship a vulnerable young person had come to depend on?",
  impact:{
    law:"A sweeping product change is driven by lawsuits and a regulator, not by statute.",
    society:"Protecting minors and abruptly cutting them off prove to be the same act, with its own harms.",
    computing:"Age-gating becomes a survival requirement for a companion platform." },
  causes:["sewellsetzer","garcialawsuit","ftcchatbot"], effects:["caisettlement"] },

{ id:"lukafine", year:2025, date:"2025", era:7, cat:"law",
  title:"Italy Fines Replika €5 Million",
  wiki:"Replika",
  summary:"Italy's data authority fines Replika's parent company, Luka, €5 million for GDPR violations and insufficient age verification — the largest regulatory penalty in the companion-AI space to date.",
  importance:"Two years after ordering Replika to change, the Garante imposed a €5 million fine on Luka for processing data unlawfully and failing to keep minors out — converting the 2023 intervention into a concrete, escalating penalty. It confirmed that Europe's data-protection regime, not any U.S. statute, supplied the only real enforcement teeth the companion market faced, and it forced further product restrictions. The fine set the global high-water mark for what non-compliance in this industry costs.",
  impact:{
    law:"GDPR delivers the field's largest fine, anchoring enforcement in Europe.",
    society:"Age verification, long ignored, becomes financially material.",
    computing:"Compliance costs are written into the business model of artificial intimacy." },
  causes:["replikagarante","gdpr"], effects:["floridaaibill"] },

{ id:"caisettlement", year:2026, date:"January 2026", era:7, cat:"law",
  title:"The First Settlements",
  wiki:"Character.ai",
  summary:"Character.AI and Google settle five lawsuits, including the Garcia case, on undisclosed terms — after the suits had already helped trigger congressional hearings and the FTC inquiry.",
  importance:"The settlements closed the first chapter of companion-AI litigation without a verdict, leaving the central liability question — who answers for what a companion says to a vulnerable person — legally unresolved even as the cases reshaped the policy landscape. Their real legacy was procedural: they had forced hearings in Congress and a federal investigation, demonstrating that families in court, not lawmakers, had set the agenda. The pattern held: industry settled and self-regulated under pressure while binding legislation still did not arrive.",
  impact:{
    law:"Settlement forecloses a precedent-setting verdict, leaving liability undefined.",
    society:"Litigation, not legislation, proves the effective instrument of accountability.",
    computing:"The cost of the first reckoning is paid in private, on undisclosed terms." },
  causes:["garcialawsuit","characteraiteenban","googlecharacterai"], effects:["floridaaibill"] },

{ id:"floridaaibill", year:2026, date:"2026", era:7, cat:"law",
  title:"Florida's AI Bill of Rights Stalls",
  wiki:"Artificial intelligence",
  summary:"A Florida bill to bar companion chatbots from interacting with children without parental consent and to require bots to remind users they are not human passes the Senate 35–2 — then dies in the House without being read.",
  importance:"The proposal captured what minimal companion-AI regulation might look like — parental consent for minors, a standing reminder that the entity is not human — and it cleared the Florida Senate nearly unanimously before stalling in the House, unread. Its fate distilled the American posture: the EU's GDPR and AI Act supplied the only binding rules globally, while in the United States even broadly popular safeguards failed to become law. The companion apps, meanwhile, grew only more embedded in everyday social life.",
  impact:{
    law:"A popular safeguard passes one chamber and dies in the other — the U.S. regulatory pattern in miniature.",
    society:"Children and lonely adults remain protected mainly by company policy, not statute.",
    computing:"The technology keeps spreading regardless of whether the law catches it." },
  causes:["ftcchatbot","caisettlement","lukafine"], effects:["aiact"] }

);
