// SUPPLEMENT — the graphics processor, from a gaming chip to the most strategically
// important technology on earth. Three compounding decisions — the GPU itself, CUDA,
// and owning the network between chips — made one company the accidental infrastructure
// of the entire AI revolution, and the chip a matter of national security. Cross-links
// the existing gpucuda (CUDA), alexnet, imagenet, transformer, deepseek, and
// chipexportcontrols cards. cat:"computing". Round one: data only — images to follow.
window.ATLAS_EVENTS.push(

{ id:"nvidiafounded", year:1993, date:"April 5, 1993", era:6, cat:"computing",
  title:"NVIDIA, Founded at a Denny's",
  wiki:"Nvidia",
  summary:"Jensen Huang, Chris Malachowsky, and Curtis Priem found NVIDIA in a San Jose diner on a single bet: that 3D graphics will demand massively parallel processing the CPU cannot efficiently provide.",
  importance:"Over coffee at a Denny's, three engineers wagered that a dedicated, massively parallel processor would be needed to render 3D worlds in real time — work the serial CPU did badly. Backed by $20 million from Sequoia and Sutter Hill, NVIDIA nearly died with its incompatible first chip before the RIVA 128 saved it in 1997. The parallel-processing bet was made for games, but it would turn out to be exactly the architecture deep learning required — a coincidence that would one day make the company among the most valuable on earth.",
  impact:{
    computing:"A company is founded on the bet that parallel hardware will beat the serial CPU.",
    technology:"The dedicated graphics processor is conceived as a distinct kind of chip.",
    power:"The architectural choice made for gaming will later underpin all of modern AI." },
  effects:["geforce256","gpucuda"] },

{ id:"geforce256", year:1999, date:"1999", era:6, cat:"computing",
  title:"The GPU Is Named",
  wiki:"GeForce 256",
  summary:"NVIDIA launches the GeForce 256 and coins the term 'GPU,' moving transform-and-lighting math off the CPU; in 2001 the GeForce 3 adds programmable shaders — the first step toward general-purpose computing on graphics hardware.",
  importance:"The GeForce 256 offloaded the heavy matrix math of 3D rendering — transform and lighting — entirely onto the graphics card, and NVIDIA branded it with a new word: the Graphics Processing Unit. Scientists noticed that this linear-algebra engine resembled what physics, weather, and other simulations needed, though no one acted on it yet. The GeForce 3's programmable shaders in 2001 went further, letting developers run their own code on the chip — the crack through which general-purpose GPU computing would eventually pour.",
  impact:{
    computing:"Matrix-heavy work moves onto a programmable parallel processor — the GPU.",
    technology:"Hardware transform, lighting, and then shaders make the GPU programmable.",
    society:"Researchers glimpse, but do not yet seize, the GPU's use beyond graphics." },
  causes:["nvidiafounded"], effects:["gpucuda","alexnet"] },

{ id:"teslav100", year:2017, date:"2017", era:7, cat:"computing",
  title:"The First Commercial AI Chip",
  wiki:"Volta (microarchitecture)", noimg:true,
  summary:"NVIDIA's Volta architecture and Tesla V100 — at $10,000 a card — is the first GPU sold openly as an AI training chip rather than a graphics card. Google, Amazon, and Microsoft buy at scale, and data-center revenue begins its vertical climb.",
  importance:"Five years after AlexNet proved GPUs could train deep networks, NVIDIA stopped pretending its AI chips were for graphics: the V100 was sold openly as a training accelerator, complete with dedicated tensor hardware, at a price no gamer would pay. Custom in-house silicon had reached the data center first — Google's TPU v1 went into its racks in 2015 for inference — but the V100 was the first chip a company could simply buy to train neural networks, and the hyperscalers bought it by the rack. NVIDIA's data-center business, once a rounding error beside gaming, began the growth that would dominate the company. The GPU had formally become AI infrastructure.",
  impact:{
    computing:"The GPU is sold explicitly as an AI training engine, not a graphics card.",
    technology:"Dedicated tensor hardware is built into the chip for neural-network math.",
    power:"NVIDIA's data-center revenue begins eclipsing its gaming origins." },
  causes:["alexnet","gpucuda"], effects:["googletpu","h100"] },

{ id:"googletpu", year:2018, date:"2018", era:7, cat:"computing",
  title:"Google's TPU Challenge",
  wiki:"Tensor Processing Unit",
  summary:"Google reveals its Tensor Processing Unit — a custom chip built solely for the matrix multiplication of neural networks, the first serious challenge to NVIDIA's AI dominance. It keeps the TPU for itself; rivals' alternatives gain little traction.",
  importance:"The TPU was the first credible signal that NVIDIA's grip on AI hardware might be broken: a chip purpose-built for neural-network math, powering Google's own services without ever being sold. Intel, AMD, Graphcore, and Cerebras chased the same idea, yet none dislodged NVIDIA from training — because the moat was not just silicon but CUDA, the software every researcher already knew. The TPU proved a better chip was possible and that beating NVIDIA would take more than a better chip.",
  impact:{
    computing:"A custom neural-network chip challenges the general-purpose GPU.",
    technology:"Purpose-built AI silicon becomes a strategic asset the hyperscalers build in-house.",
    power:"NVIDIA's dominance is shown to rest on software lock-in as much as hardware." },
  causes:["teslav100","gpucuda"], effects:["h100"] },

{ id:"mellanox", year:2020, date:"2020", era:7, cat:"computing",
  title:"Buying the Network Between Chips",
  wiki:"Mellanox Technologies",
  summary:"NVIDIA acquires Mellanox for $6.9 billion — the leading maker of high-speed server interconnect — recognizing that as models grow, the bottleneck is how fast thousands of GPUs talk to each other, not any single chip.",
  importance:"NVIDIA grasped before its rivals that the unit of AI infrastructure is not a chip but a cluster — thousands of GPUs that must exchange data at enormous speed — and that whoever owned the network between them owned the system. Buying Mellanox let NVIDIA sell the whole interconnected machine, not just the processors, and made its lead far harder to attack. It was the third of the three decisions, after the GPU and CUDA, that compounded into near-total control of frontier AI compute.",
  impact:{
    computing:"NVIDIA gains the high-speed fabric that binds GPUs into a single cluster.",
    technology:"The sellable unit of AI becomes the full system, not the individual chip.",
    power:"Owning compute and network together deepens an already commanding moat." },
  causes:["teslav100"], effects:["h100","blackwell"] },

{ id:"armblocked", year:2020, date:"2020–2022", era:7, cat:"law",
  title:"The $80 Billion ARM Deal Dies",
  wiki:"Arm Holdings",
  summary:"NVIDIA bids $80 billion for ARM, whose architecture powers nearly every mobile device on earth; regulators in the UK, EU, and U.S. block it on competition grounds in 2022 — the most consequential failed semiconductor acquisition in history.",
  importance:"Owning ARM would have given NVIDIA the foundational design beneath almost all the world's phones and embedded chips, a chokehold over computing itself — and that is precisely why regulators on three continents killed the deal. Its collapse marked the moment antitrust authorities recognized chip architecture as critical infrastructure too important to consolidate. NVIDIA was blocked from owning the base layer, but its grip on the AI layer would prove powerful enough without it.",
  impact:{
    law:"Antitrust regulators treat foundational chip architecture as too critical to consolidate.",
    power:"NVIDIA is denied control of the design beneath nearly all computing.",
    technology:"The semiconductor industry's competitive structure is preserved by regulation." },
  causes:["mellanox"], effects:["chipexportcontrols"] },

{ id:"a100ampere", year:2020, date:"2020", era:7, cat:"computing",
  title:"The A100: Priced for AI",
  wiki:"Ampere (microarchitecture)",
  summary:"NVIDIA's Ampere A100 is the first chip whose $10,000–$15,000 price reflects AI demand rather than gaming; Google, Microsoft, Amazon, and Meta order them by the tens of thousands. It becomes the first target of U.S. export controls.",
  importance:"The A100's price had nothing to do with rendering games and everything to do with training models, and the hyperscalers absorbed them by the tens of thousands as the scaling race accelerated. Its raw capability made it the chip the United States would soon move to keep out of China — the first time a graphics processor became a controlled strategic good. The A100 marks the moment compute itself became the scarce, contested resource at the center of the AI economy.",
  impact:{
    computing:"GPU pricing decouples from gaming and tracks AI demand alone.",
    power:"Compute becomes the scarce input the largest companies stockpile.",
    law:"The A100's capability makes it the first GPU treated as a controlled export." },
  causes:["teslav100","gpucuda"], effects:["chipexportcontrols","h100","chinachips"] },

{ id:"h100", year:2022, date:"2022", era:7, cat:"computing",
  title:"The H100 and the Compute Gold Rush",
  wiki:"Hopper (microarchitecture)",
  summary:"NVIDIA's Hopper H100, built explicitly for transformer models, arrives just as ChatGPT ignites demand; at $25,000–$40,000 a card it cannot be made fast enough, waiting lists stretch to months, and individual chips resell for up to $70,000.",
  importance:"The H100 was engineered for exactly the architecture — the transformer — behind GPT, Claude, and every major language model, and it launched into the demand explosion ChatGPT unleashed weeks later. Supply could not keep up: the hyperscalers spent billions to secure allocation, startups begged for access, and a single H100 became a liquid asset. The chip turned compute into the defining bottleneck of the AI age and NVIDIA into the gatekeeper of the frontier.",
  impact:{
    computing:"A chip tuned for transformers becomes the scarcest resource in tech.",
    power:"Access to H100s determines which labs can train at the frontier.",
    technology:"GPU supply, not ideas, becomes the binding constraint on AI progress." },
  causes:["teslav100","googletpu","mellanox","a100ampere","transformer","chatgpt"], effects:["nvidia1t","chinachips","blackwell"] },

{ id:"nvidia1t", year:2023, date:"June 2023", era:7, cat:"computing",
  title:"NVIDIA Crosses $1 Trillion",
  wiki:"Nvidia",
  summary:"NVIDIA becomes the first chipmaker worth $1 trillion, reaching the milestone faster than any company in history; Jensen Huang is anointed 'the most important person in tech.'",
  importance:"The market's verdict was emphatic: the company that controlled AI compute was now worth more than any chipmaker had ever been, vaulting from $500 billion to $1 trillion faster than any firm before it. It signaled that investors saw AI infrastructure, not any single application, as the decade's defining asset — and that one company sat astride it. NVIDIA had gone from a gaming-chip maker to the most strategically central business in technology in barely a decade.",
  impact:{
    power:"The market crowns the controller of AI compute as tech's most valuable chipmaker.",
    computing:"Infrastructure, not applications, is valued as the AI era's defining asset.",
    society:"NVIDIA's CEO becomes a household name as the chip becomes geopolitical." },
  causes:["h100"], effects:["nvidia3t"] },

{ id:"chinachips", year:2023, date:"2023", era:7, cat:"law",
  title:"Downgraded Chips for China",
  wiki:"Nvidia",
  summary:"To keep selling into China under U.S. export controls, NVIDIA engineers throttled chips — the A800 and H800, then the H20 — with interconnect speed dialed down to stay legal. Each tightening of the rules forces a new China-specific design.",
  importance:"Export controls did not stop NVIDIA selling to China so much as start a cat-and-mouse game: when the A100 and H100 were banned, NVIDIA shipped the A800 and H800 with their interconnect bandwidth deliberately crippled to fall under the limit; when those were banned too, it built the H20. China's labs ran the frontier on downgraded silicon — a constraint that, as DeepSeek would soon show, pushed them to innovate around the bottleneck rather than be stopped by it. The episode revealed how blunt and porous chip controls actually are.",
  impact:{
    law:"Export limits trigger a recurring cycle of throttled, country-specific chip designs.",
    power:"Compute becomes the central instrument of U.S.–China technological rivalry.",
    computing:"Chinese AI is forced onto deliberately handicapped hardware." },
  causes:["chipexportcontrols","a100ampere","h100"], effects:["deepseek","h20saga"] },

{ id:"nvidia3t", year:2024, date:"2024", era:7, cat:"computing",
  title:"NVIDIA Becomes the World's Most Valuable Company",
  wiki:"Nvidia",
  summary:"NVIDIA crosses $3 trillion, briefly passing Microsoft and Apple to become the most valuable company on earth; revenue from H100s alone exceeds the entire revenue of most Fortune 500 companies.",
  importance:"In tripling its valuation in a year, NVIDIA momentarily became the most valuable company in the world, an extraordinary reordering of the corporate hierarchy around the single fact of who controls AI compute. The H100 line alone out-earned most of the Fortune 500. It was the financial expression of a structural truth: the global AI industry, worth trillions and increasingly central to national power, ran on infrastructure that one company supplied almost alone.",
  impact:{
    power:"The chipmaker briefly becomes the most valuable company on earth.",
    computing:"One firm's hardware revenue dwarfs that of most of corporate America.",
    society:"The center of economic gravity shifts to whoever supplies AI compute." },
  causes:["nvidia1t","h100"], effects:["blackwell"] },

{ id:"blackwell", year:2024, date:"2024", era:7, cat:"computing",
  title:"Blackwell: The Rack as a Computer",
  wiki:"Blackwell (microarchitecture)",
  summary:"NVIDIA announces Blackwell (B200, GB200 NVL72): a full rack system can run AI inference some 30 times faster than an equivalent H100 setup, at roughly $3 million per rack. The next architecture, Vera Rubin, is designed before Blackwell ships in volume.",
  importance:"Blackwell made explicit that NVIDIA no longer sold chips but data-center-scale machines: the GB200 NVL72 was a single rack-as-computer, dramatically faster than the H100 generation and priced like a building. Every major lab scrambled for allocation, and NVIDIA's relentless roughly-two-year cadence — Vera Rubin already designed before Blackwell shipped at scale — kept customers waiting for the next generation rather than defecting. The architecture cycle itself had become a moat.",
  impact:{
    computing:"The sellable unit becomes a multi-million-dollar rack, not a single chip.",
    technology:"A relentless architecture cadence locks customers into the NVIDIA roadmap.",
    power:"Frontier AI capability is gated by access to the newest racks." },
  causes:["h100","mellanox","nvidia3t"], effects:["tsmcarizona"] },

{ id:"h20saga", year:2025, date:"2025", era:7, cat:"law",
  title:"The H20 Whiplash",
  wiki:"United States New Export Controls on Advanced Computing",
  summary:"The Trump administration bans the H20 — the very chip NVIDIA built to comply with earlier controls — forcing a $5.5 billion write-down; months later it reverses course and permits limited sales, exposing export policy as driven by trade dynamics, not coherent strategy.",
  importance:"In 2025 export policy lurched: first banning the H20, NVIDIA's carefully compliant China chip, and saddling it with a $5.5 billion inventory write-down — then, months later, allowing limited H20 sales again under conditions. The reversal made plain that chip controls had become an instrument of trade negotiation rather than a steady technology strategy, oscillating with the politics of the moment. For NVIDIA, the world's most valuable company was now hostage to the unpredictability of geopolitics it never sought to enter.",
  impact:{
    law:"Export controls swing with trade politics rather than a coherent technology doctrine.",
    power:"The chip becomes a bargaining chip in great-power negotiation.",
    computing:"NVIDIA absorbs billions in losses to policy it cannot predict." },
  causes:["chinachips","deepseek"], effects:["tsmcarizona"] },

{ id:"tsmcarizona", year:2026, date:"2026", era:7, cat:"computing",
  title:"Advanced Chips Made on U.S. Soil",
  wiki:"TSMC",
  summary:"NVIDIA's Blackwell B200 and GB200 reach full volume production as TSMC achieves high-yield output at its Arizona fab — the first time NVIDIA's most advanced chips are made in significant quantity in the U.S., easing dependence on Taiwan.",
  importance:"For decades the world's most advanced logic was fabricated almost entirely in Taiwan, a concentration that made the island the fragile fulcrum of the global economy; TSMC's Arizona fab reaching high yield on Blackwell parts began, modestly, to change that. It marked the physical onshoring of the AI supply chain that export controls and security fears had demanded. The geopolitics of compute — who designs the chips, who builds them, and where — converged on a desert fab as the next front of the contest.",
  impact:{
    power:"The most advanced AI chips begin being manufactured on U.S. soil.",
    technology:"The AI supply chain starts to diversify away from Taiwan.",
    law:"Onshoring becomes the industrial answer to the security logic of export controls." },
  causes:["blackwell","h20saga","chipexportcontrols"], effects:[] }

);
