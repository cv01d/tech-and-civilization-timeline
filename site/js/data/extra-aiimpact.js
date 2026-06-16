// SUPPLEMENT — the empire and its externalities. Two braided threads from the critical
// turn in AI discourse (Karen Hao's "Empire of AI" and the environmental reckoning): the
// institutional critique — that a founding myth of safety gave way to an "imperial
// centralization project" — and the physical cost of that project in human labor, water,
// carbon, and power. Cross-links the existing openai, altmanboard, anthropicfounded,
// chatgpt, aitraining, colossus, aiact cards. cat:"computing" (these live in the AI tab).
// Critiques and figures are described factually. Round one: data only — images to follow.
window.ATLAS_EVENTS.push(

{ id:"empireofai", year:2025, date:"May 2025", era:7, cat:"computing",
  title:"Empire of AI",
  wiki:"Karen Hao",
  summary:"Karen Hao's book argues OpenAI's founding myth — that safety comes first — was always shaped by ambition, influence, and money; opening with Sam Altman's 2023 firing and five-day reinstatement, it indicts an industry pursuing 'an imperial centralization project' at the cost of privacy, agency, and the value of human labor and art.",
  importance:"Empire of AI crystallized the decade's critical counter-narrative to the industry's self-image. Hao traces a lab born as a nonprofit charity for humanity that restructured for profit, rushed products from insecurity rather than strength, and silenced or shed its critics — using Altman's brief ouster and swift return as proof that, beneath the mission language, power wins. Her core charge is that broad benefit need not require 'the complete capitulation of our privacy, our agency, and our worth.' The book gave activists, regulators, and departing researchers a shared vocabulary for what the empire costs.",
  impact:{
    computing:"The industry's safety-first founding myth is recast as a story of power and money.",
    power:"AI is framed as an 'imperial centralization project' concentrating control and value.",
    society:"A critical vocabulary for AI's human and democratic costs enters the mainstream." },
  causes:["openai","altmanboard","chatgpt"], effects:["gebru","ghostlabor","splinterings","aienergy"] },

{ id:"gebru", year:2020, date:"2020", era:7, cat:"computing",
  title:"Timnit Gebru and the Silencing of Critics",
  wiki:"Timnit Gebru",
  summary:"Google fires AI ethics researcher Timnit Gebru after she co-authors a paper on the harms of large language models — bias, environmental cost, and the dangers of scale — becoming a central case study in how AI companies suppress internal critique.",
  importance:"Gebru's forced departure over the 'Stochastic Parrots' paper — which warned that ever-larger language models encode bias, carry heavy environmental costs, and outrun our ability to understand them — became the defining example of a company silencing its own ethics research at the moment the warnings mattered most. It galvanized the field's critical wing and previewed nearly every concern that would dominate the following years. The episode showed that the institutions building AI were structurally unwilling to host the people scrutinizing it.",
  impact:{
    computing:"A landmark paper on language-model harms is suppressed by firing its author.",
    power:"AI firms are shown to be structurally hostile to their own internal critics.",
    society:"Bias, scale, and environmental cost are flagged years before regulation engages them." },
  causes:["empireofai"], effects:["ghostlabor","aienergy","splinterings"] },

{ id:"ghostlabor", year:2023, date:"2023", era:7, cat:"computing",
  title:"The Ghost Labor Behind the Models",
  wiki:"Data labeling",
  summary:"The hidden human supply chain of AI surfaces: content moderators and data labelers in places like Kenya and Venezuela, paid a few dollars an hour, screen traumatic material and label the data that makes models usable — the invisible workforce beneath the 'magic' of automation.",
  importance:"Behind every polished model lies a vast, low-paid, largely invisible workforce: workers in the Global South labeling images, ranking outputs, and moderating the violent and abusive content used to make chatbots safe, often for a few dollars an hour and at real psychological cost. Empire of AI and contemporaneous reporting made this human supply chain visible, puncturing the illusion that AI is bodiless automation. It revealed automation's oldest pattern — that the machine's intelligence is built on devalued human labor, now outsourced and hidden across borders.",
  impact:{
    labor:"AI is shown to rest on a hidden, low-paid, often traumatized human workforce.",
    computing:"The 'magic' of automation is revealed to depend on outsourced human labeling.",
    power:"The value created by AI flows away from the workers who make it possible." },
  causes:["empireofai","gebru","aitraining"], effects:["aiwater","samakenya","acmu"] },

{ id:"samakenya", year:2023, date:"2021–2023", era:7, cat:["computing","internet"],
  title:"The Sama Workers and ChatGPT",
  wiki:"Sama (company)", gallery:["Content moderation","OpenAI"],
  summary:"A 2023 investigation reveals that to make ChatGPT safe, OpenAI relied on Kenyan workers employed by the outsourcing firm Sama, paid roughly $1.32 to $2 an hour to read and label graphic depictions of abuse, violence, and self-harm. Several describe lasting psychological trauma; Sama ends the contract early, and the episode becomes the defining case of AI's hidden human cost.",
  importance:"To build the filter that keeps a chatbot from spewing horrors, someone first has to read the horrors — and in 2023 reporting revealed that someone was a team of Kenyan workers paid a few dollars an hour, hired through the firm Sama, sorting through the internet's worst material to teach the model what to refuse. Workers described recurring nightmares and broken relationships from the unending stream of trauma, with little mental-health support, and the contract collapsed before its term. The case put a specific, documented face on the abstraction of 'data work,' showing that the safety of a Silicon Valley product was manufactured out of the psychological injury of the Global South's lowest-paid labor.",
  impact:{
    labor:"Making a chatbot 'safe' is shown to rest on traumatizing, sub-$2-an-hour labeling work.",
    computing:"The content filters of a flagship AI are revealed to be hand-built by outsourced workers.",
    power:"A Western product's safety is manufactured out of the Global South's cheapest labor." },
  causes:["ghostlabor","chatgpt","empireofai"], effects:["acmu"] },

{ id:"acmu", year:2023, date:"May 2023", era:7, cat:["computing","internet","law"],
  title:"The Content Moderators Organize",
  wiki:"Content moderation", gallery:["Trade union","Daniel Motaung"],
  summary:"In Nairobi, around 150 workers who moderate content and label data for Facebook, TikTok, and ChatGPT — employed through outsourcing firms like Sama and Majorel — vote to form the African Content Moderators Union, the first such union on the continent. Alongside a landmark suit by ex-moderator Daniel Motaung, a Kenyan court rules in 2023 that Meta can be sued there over working conditions.",
  importance:"The hidden workforce behind the platforms and the models began, in 2023, to organize and to sue: roughly 150 Nairobi moderators and data labelers — the people enforcing the rules of Facebook, TikTok, and ChatGPT — formed Africa's first content-moderators union, while Daniel Motaung's case challenged the outsourced, precarious conditions of the work. When a Kenyan court held that Meta could be sued in Kenya despite working through a local contractor, it cracked the legal shield that lets platforms place the most damaging labor at arm's length offshore. It is the moment the ghost labor stopped being only a story told about these workers and became a movement and a legal claim made by them.",
  impact:{
    labor:"The platforms' outsourced moderators form Africa's first union and sue over their conditions.",
    law:"A Kenyan court rules Meta can be sued locally, piercing the outsourcing shield.",
    society:"The hidden workforce behind AI and social media becomes a visible, organized actor." },
  causes:["ghostlabor","samakenya","gigeconomy"], effects:[] },

{ id:"splinterings", year:2024, date:"2024", era:7, cat:"computing",
  title:"The Safety Splinterings",
  wiki:"Safe Superintelligence",
  summary:"OpenAI keeps fracturing over safety and commercialization: after the 2021 exodus that formed Anthropic, chief scientist Ilya Sutskever leaves to found Safe Superintelligence Inc. and CTO Mira Murati departs to start Thinking Machines Lab — each splinter a bet that safety must be pursued outside the empire.",
  importance:"The departures that built Anthropic in 2021 proved to be the first of a pattern: in 2024 OpenAI's own chief scientist and chief technology officer walked out to found new labs, Safe Superintelligence and Thinking Machines, repeating the founding gesture of leaving to do it right. Each splinter was a verdict that the original mission could not be pursued from within, and a hedge that scattered safety-minded talent across rival institutions. The recurring schism is the human face of Hao's argument — that the empire keeps shedding the very people most worried about where it is going.",
  impact:{
    computing:"Top OpenAI leaders depart to found new safety-focused labs.",
    power:"The recurring exodus signals the mission cannot be pursued from within the empire.",
    society:"Safety-minded talent scatters across competing institutions." },
  causes:["empireofai","gebru","anthropicfounded"], effects:[] },

{ id:"aienergy", year:2024, date:"2019–2030", era:7, cat:"computing",
  title:"The Energy Cost of Intelligence",
  wiki:"Environmental impact of artificial intelligence",
  summary:"A 2019 paper warns one large model's training emits the CO₂ of five cars over their lifetimes; by 2024 data centers draw ~415 TWh (about 1.5% of world electricity), AI a fast-growing slice, each ChatGPT query roughly 10× a Google search — and the IEA projects data-center demand could near-double to ~945 TWh by 2030.",
  importance:"Strubell and colleagues' 2019 study put the first hard number on AI's carbon cost and opened the field's environmental reckoning; ChatGPT then triggered a step-change in inference demand that made the abstract concrete. By 2024 data centers consumed roughly 1.5% of global electricity, and the IEA's projection that they could reach 3% by 2030 — more than many large nations use — identified AI as the principal driver. 'The cloud' was revealed as intensely physical: the intelligence boom is, at bottom, an energy boom, racing ahead of any grid or rule built to absorb it.",
  impact:{
    computing:"AI's electricity demand emerges as a primary driver of soaring data-center load.",
    technology:"Inference at scale, not just training, becomes a major and growing energy cost.",
    power:"AI's growth collides with the limits of national grids and climate targets." },
  causes:["empireofai","gebru","chatgpt","colossus"], effects:["aiwater","aienvreg"] },

{ id:"aiwater", year:2024, date:"2022–2025", era:7, cat:"computing",
  title:"Thirst and Smoke: AI's Physical Footprint",
  wiki:"Environmental impact of artificial intelligence",
  summary:"Cooling the boom: data centers consume an estimated 560 billion liters of water in 2024, much of it evaporated. Microsoft's water use jumped 34% in 2022 scaling Azure for OpenAI; Google draws on water-scarce Chilean regions; and xAI's Colossus runs gas turbines in a predominantly Black Memphis neighborhood, rotated to dodge permitting thresholds.",
  importance:"The compute boom drinks and pollutes as much as it burns: hyperscale data centers evaporate hundreds of billions of liters of freshwater for cooling, often in already water-stressed regions where communities have little recourse — Microsoft's Midwest draws, Google's operations in arid Chile. xAI's Memphis cluster added smoke to thirst, running dozens of gas turbines in the Boxtown neighborhood without environmental permits by rotating them before the 364-day regulatory threshold, its pollution falling on a lower-income Black community. The pattern is the atlas's oldest injustice in new form: the costs of a technology settle first on those with the least power to refuse them.",
  impact:{
    computing:"AI's water and air footprint is shown to rival its carbon cost.",
    power:"Environmental burdens fall on water-stressed and marginalized communities with little recourse.",
    law:"Permitting loopholes let infrastructure outrun the rules meant to govern its harms." },
  causes:["aienergy","ghostlabor","colossus"], effects:["aienvreg"] },

{ id:"aienvreg", year:2024, date:"2023–2028", era:7, cat:"computing",
  title:"Regulating AI's Footprint — Barely",
  wiki:"Artificial Intelligence Act",
  summary:"The EU's 2023 Energy Efficiency Directive makes data centers report energy and water; the 2024 AI Act requires training-energy documentation (but not emissions, water, hardware, or inference, and only to regulators). The U.S. AI Environmental Impacts Act stalls; a 2025 Trump order asks DOE for lifecycle reporting; binding limits exist nowhere.",
  importance:"Regulation arrived, as ever, narrow and late: Europe required disclosure of energy and water use, and the AI Act made model-makers document training energy — but mandated no actual reduction, ignored water, embodied hardware emissions, and the vast ongoing cost of inference, and kept disclosures from the public after its stronger provisions were diluted in negotiation. The U.S. passed nothing binding. With ISO sustainability standards still years off and no treaty in sight, the gap between what the science measures and what the law requires disclosed — let alone cut — keeps widening as models and deployment outrun every regulatory process built to track them.",
  impact:{
    law:"The first binding AI energy-disclosure rules arrive — covering training only, requiring no cuts.",
    computing:"Water, hardware emissions, and inference costs go largely unregulated.",
    power:"The gap between measured impact and required disclosure widens faster than rules can close it." },
  causes:["aienergy","aiwater","aiact"], effects:[] }

);
