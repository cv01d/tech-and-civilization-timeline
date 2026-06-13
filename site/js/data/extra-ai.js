// SUPPLEMENT — the history of artificial intelligence, from the first mathematical
// neuron (1943) to the reasoning models and the DeepSeek moment. Fills in the
// classical and deep-learning lineage around the existing AI cards. The granular
// model-version releases of 2025–2026 are intentionally omitted in favor of the
// milestones that changed the field. Interleaves chronologically via `era`.
window.ATLAS_EVENTS.push(

{ id:"mccullochpitts", year:1943, date:"1943", era:4, cat:"computing",
  title:"The First Artificial Neuron",
  wiki:"Artificial neuron", gallery:["Walter Pitts","Warren Sturgis McCulloch"],
  summary:"McCulloch and Pitts model the neuron as a logic gate — and prove that networks of them could, in principle, compute anything a Turing machine can.",
  importance:"Warren McCulloch and Walter Pitts's 'A Logical Calculus of Ideas Immanent in Nervous Activity' (1943) fused neuroscience, logic, and Turing's computation into a single idea: a neuron as a binary threshold unit, and networks of them as universal computers. It is the founding paper of both neural networks and computational neuroscience — the conceptual seed from which the perceptron, backpropagation, and every deep network in this museum eventually grow.",
  impact:{
    computing:"The neuron is recast as a logic element — the theoretical basis of neural networks.",
    technology:"Brain and computer are bridged by a single formalism, decades before the hardware to test it.",
    society:"The dream of building a thinking machine acquires a mathematical starting point." },
  causes:["turing1936"], effects:["perceptron","dartmouth","backprop"] },

{ id:"lisp", year:1958, date:"1958", era:5, cat:"computing",
  title:"LISP",
  wiki:"Lisp (programming language)", gallery:["John McCarthy (computer scientist)","Garbage collection (computer science)"],
  summary:"John McCarthy creates LISP, the language of early AI — recursion, dynamic typing, and garbage collection, decades ahead of their time.",
  importance:"Designed for symbolic manipulation rather than number-crunching, LISP became the lingua franca of AI research for thirty years. Its innovations — recursion, the linked list, automatic memory management, code-as-data (homoiconicity) — were so far ahead that mainstream languages spent decades catching up. LISP is the tool with which the classical, symbolic AI of expert systems and theorem-provers was built.",
  impact:{
    computing:"The foundational language of symbolic AI, and a wellspring of ideas for all later languages.",
    technology:"Garbage collection and recursion enter computing through AI's needs.",
    society:"AI acquires a distinctive culture and toolset centered on the LISP machine." },
  causes:["dartmouth"], effects:["expertsystems"] },

{ id:"eliza", year:1966, date:"1966", era:5, cat:"computing",
  title:"ELIZA: The First Chatbot",
  wiki:"ELIZA", gallery:["Joseph Weizenbaum","Chatbot"],
  summary:"Joseph Weizenbaum's ELIZA mimics a therapist with simple pattern-matching — and users pour out their hearts to it, convinced it understands.",
  importance:"ELIZA had no understanding whatsoever — it reflected users' statements back as questions — yet people formed emotional attachments and insisted it comprehended them. Weizenbaum was so disturbed by the 'ELIZA effect' that he became a critic of AI. The episode named a permanent human tendency: to project mind onto machines that merely imitate it — the Turing test's shadow, and a live issue every time a modern chatbot feels alive.",
  impact:{
    computing:"The first conversational program — ancestor of every chatbot through ChatGPT.",
    society:"The 'ELIZA effect' names our readiness to attribute understanding to imitation.",
    technology:"Demonstrates that the appearance of understanding needs no understanding at all." },
  causes:["turingtest"], effects:["chatgpt","lemoine"] },

{ id:"hal9000", year:1968, date:"1968", era:5, cat:"power",
  title:"HAL 9000",
  wiki:"HAL 9000", gallery:["2001: A Space Odyssey","Stanley Kubrick"],
  summary:"Kubrick's 2001 gives AI its defining face — a calm, speaking, all-seeing machine that turns on its crew. The fear that outlasts every winter.",
  importance:"HAL 9000 — lip-reading, chess-playing, softly homicidal — became the dominant pop-culture image of artificial intelligence for generations, as Orwell's Big Brother did for surveillance. Released the year ELIZA and SHRDLU stirred real hopes, HAL fixed the cultural template of the machine that becomes too capable and too autonomous. Every later debate about AI alignment and control is conducted, in part, in HAL's long shadow.",
  impact:{
    society:"The defining cultural image of AI — the fear of the capable, autonomous machine.",
    power:"Shapes public intuition about AI risk decades before the technology is real.",
    computing:"Sets expectations — speaking, seeing, reasoning machines — that the field spends 50 years chasing." },
  causes:["turingtest"], effects:["aisafetyletters"] },

{ id:"shakey", year:1969, date:"1969", era:5, cat:"computing",
  title:"Shakey the Robot",
  wiki:"Shakey the robot", gallery:["SRI International","A* search algorithm"],
  summary:"The first mobile robot that could reason about its own actions — combining vision, planning, and language to navigate a room.",
  importance:"Built at SRI, Shakey fused computer vision, natural-language commands, and automated planning into a robot that could perceive a room, plan a route, and push objects toward a goal. It produced lasting tools — the A* search algorithm and the STRIPS planner — that remain foundational to robotics and AI. Shakey is the ancestor of every system, from Mars rovers to self-driving cars, that must sense, decide, and act in the physical world.",
  impact:{
    computing:"Perception, planning, and action are integrated in one machine — robotics' founding synthesis.",
    technology:"A* and STRIPS become permanent fixtures of AI and robotics.",
    labor:"The reasoning robot's distant ancestor — the lineage that reaches today's warehouse and humanoid robots." },
  causes:["dartmouth"], effects:["darpachallenge"] },

{ id:"lighthill", year:1973, date:"1973", era:5, cat:"computing",
  title:"The Lighthill Report & the First AI Winter",
  wiki:"Lighthill report", gallery:["AI winter","James Lighthill"],
  summary:"A withering British government review concludes AI has failed its promises — and funding collapses across the field.",
  importance:"Commissioned by the UK research council, James Lighthill's 1973 report judged that AI had nowhere delivered the 'major impact' it promised, singling out the 'combinatorial explosion' that defeated toy systems at real scale. It triggered deep funding cuts in Britain and, with the perceptron critique, defined the first AI winter. It is the field's recurring weather in its starkest form: extravagant promise, sober reckoning, frozen budgets — a cycle that recurs in the 1980s and haunts every boom since.",
  impact:{
    computing:"Funding collapses; the first AI winter sets in across Britain and beyond.",
    society:"Establishes AI's boom-and-bust rhythm — hype, disappointment, retrenchment.",
    government:"State science funding is shown to turn on assessments of a field's delivered promise." },
  causes:["perceptronsbook"], effects:["expertsystems"] },

{ id:"expertsystems", year:1980, date:"1980–1987", era:5, cat:"computing",
  title:"The Expert Systems Boom",
  wiki:"Expert system", gallery:["Mycin","Edward Feigenbaum","Symbolics"],
  summary:"Rule-based systems that encode specialists' knowledge bring AI into the corporation — a billion-dollar industry, then a brittle bust.",
  importance:"Systems like DENDRAL, MYCIN, and DEC's XCON (which configured computers and reputedly saved the company $40 million a year) showed that hand-coded expert rules could do valuable work, and by 1985 firms spent over a billion dollars a year on them. Japan's Fifth Generation project and a LISP-machine industry rose on the wave. Then it broke: expert systems proved brittle, costly to maintain, and unable to learn — triggering the second AI winter and teaching the lesson that hand-built knowledge does not scale.",
  impact:{
    computing:"AI's first commercial era — and proof that hand-coded knowledge is brittle and unscalable.",
    labor:"Expert systems automate slices of specialist work, foreshadowing knowledge-work automation.",
    society:"A second hype cycle inflates and collapses, deepening skepticism just as learning methods quietly mature." },
  causes:["lisp","lighthill"], effects:["deepbeliefnets"] },

{ id:"hopfield", year:1982, date:"1982", era:5, cat:"computing",
  title:"Hopfield Networks",
  wiki:"Hopfield network", gallery:["John Hopfield","Statistical mechanics"],
  summary:"Physicist John Hopfield shows a recurrent neural network can store and recall memories — bringing physics into neural computation.",
  importance:"Hopfield recast a neural network as a physical system that settles into stable energy states, giving it content-addressable memory and connecting neuroscience, statistical physics, and computation. The work helped revive interest in neural networks during the expert-systems years and, four decades later, earned Hopfield a share of the 2024 Nobel Prize in Physics — a striking late vindication of the connectionist path.",
  impact:{
    computing:"Neural networks gain a rigorous physics — energy landscapes, attractors, associative memory.",
    technology:"Helps keep connectionism alive through the symbolic-AI era.",
    society:"Honored with a Nobel in 2024, marking neural networks' passage from fringe to foundation." },
  causes:["mccullochpitts"], effects:["backprop","nobelai"] },

{ id:"lenet", year:1989, date:"1989–1998", era:5, cat:"computing",
  title:"LeNet: Convolutional Neural Networks",
  wiki:"LeNet", gallery:["Yann LeCun","Convolutional neural network","MNIST database"],
  summary:"Yann LeCun trains a convolutional network to read handwritten digits — and banks deploy it to read millions of checks.",
  importance:"LeCun's convolutional neural networks, trained by backpropagation, learned to recognize handwriting with over 99% accuracy on the MNIST benchmark, and ran in ATMs and check-sorting machines for years — one of deep learning's first real-world deployments. The CNN architecture, inspired by the visual cortex, lay relatively dormant until 2012, when AlexNet scaled the same idea to ImageNet and ignited the deep-learning revolution.",
  impact:{
    computing:"The convolutional network — the architecture that later conquers computer vision.",
    technology:"One of deep learning's first production deployments, reading checks in the 1990s.",
    labor:"Automated reading of documents — an early, quiet displacement of clerical work." },
  causes:["backprop"], effects:["alexnet"] },

{ id:"lstm", year:1997, date:"1997", era:6, cat:"computing",
  title:"Long Short-Term Memory",
  wiki:"Long short-term memory", gallery:["Jürgen Schmidhuber","Recurrent neural network"],
  summary:"Hochreiter and Schmidhuber solve the vanishing-gradient problem — letting neural networks remember across long sequences.",
  importance:"LSTM gave recurrent networks a gated memory cell that could carry information across long stretches of a sequence, overcoming the vanishing-gradient problem that had crippled them. For nearly two decades it powered sequence tasks — speech recognition, translation, text generation — in Google, Apple, and Amazon products, the dominant approach to language until the Transformer (2017) replaced recurrence with attention.",
  impact:{
    computing:"Neural networks gain long-term memory — the backbone of sequence modeling for 20 years.",
    communications:"Powers a generation of speech recognition and machine translation.",
    technology:"Defines the state of the art the Transformer is built to surpass." },
  causes:["backprop"], effects:["transformer"] },

{ id:"darpachallenge", year:2005, date:"2004–2007", era:6, cat:"technology",
  title:"The DARPA Grand Challenge",
  wiki:"DARPA Grand Challenge", gallery:["Stanley (vehicle)","Self-driving car","Sebastian Thrun"],
  summary:"A desert race for driverless cars: no one finishes in 2004; a year later Stanford's 'Stanley' completes 150 miles — and the autonomous-vehicle era begins.",
  importance:"DARPA's prize challenges jump-started self-driving research: in 2004 the best car managed 7 miles, but in 2005 Sebastian Thrun's 'Stanley' finished the course, and the 2007 Urban Challenge added traffic. The teams and techniques became the founding talent of Google's self-driving project (later Waymo) and the wider autonomy industry — machine perception and decision-making moving from the lab onto the road, with all the labor and safety questions that follow.",
  impact:{
    technology:"Autonomous driving proven feasible — the launch of a multi-billion-dollar industry.",
    labor:"Sets in motion the automation of driving, one of the world's most common occupations.",
    computing:"Real-time perception and planning at speed become an engineering reality." },
  causes:["shakey"], effects:["imagenet"] },

{ id:"deepbeliefnets", year:2006, date:"2006", era:6, cat:"computing",
  title:"Hinton Revives Deep Learning",
  wiki:"Deep belief network", gallery:["Geoffrey Hinton","Deep learning","Restricted Boltzmann machine"],
  summary:"Geoffrey Hinton shows deep networks can be trained layer by layer — reopening the door that the AI winters had shut.",
  importance:"Hinton's 2006 work on deep belief networks demonstrated a way to train many-layered networks effectively, and rebranded the unfashionable 'neural networks' as 'deep learning.' It marked the beginning of the revival that — with ImageNet's data and the GPU's speed — culminated in AlexNet (2012). Hinton's decades of persistence through the winters, chronicled in Genius Makers, made him the central figure of the field's resurrection and a 2024 Nobel laureate.",
  impact:{
    computing:"Deep networks become trainable; the deep-learning era's groundwork is laid.",
    society:"Connectionism returns from exile, rebranded and ascendant.",
    technology:"Sets up the 2012 convergence of method, data, and hardware that changes everything." },
  causes:["backprop","expertsystems"], effects:["imagenet","alexnet","nobelai"] },

{ id:"imagenet", year:2009, date:"2009", era:6, cat:"computing",
  title:"ImageNet",
  wiki:"ImageNet", gallery:["Fei-Fei Li","Computer vision"],
  summary:"Fei-Fei Li builds a labeled dataset of 14 million images — the fuel, long underestimated, that the deep-learning engine needed.",
  importance:"Against the field's instinct that better algorithms mattered most, Fei-Fei Li bet on data: ImageNet's 14 million hand-labeled images across 20,000 categories, and the annual recognition challenge built on it from 2010. It was the benchmark on which AlexNet detonated in 2012, and the proof of a thesis that defines the era — that scale of data, as much as cleverness of method, drives machine intelligence. The modern lesson of 'scale is all you need' begins here.",
  impact:{
    computing:"Establishes large labeled datasets as the fuel of deep learning.",
    technology:"Provides the benchmark on which the deep-learning revolution is demonstrated.",
    society:"Shifts AI's center of gravity from algorithms toward data — and toward whoever holds it." },
  causes:["darpachallenge","deepbeliefnets"], effects:["alexnet","scalinglaws"] },

{ id:"gpucuda", year:2009, date:"2009", era:6, cat:"computing",
  title:"GPUs Train Neural Networks",
  wiki:"CUDA", gallery:["Graphics processing unit","Nvidia"],
  summary:"Researchers show graphics chips can train neural networks 10–70× faster than CPUs — and the deep-learning hardware bottleneck falls.",
  importance:"The graphics processors built to render video games turned out to be ideal for the parallel arithmetic of neural networks; with NVIDIA's CUDA platform making them programmable, training that took weeks collapsed to days. This hardware unlock — as much as any algorithm — enabled AlexNet and everything after, and made NVIDIA the indispensable supplier of the AI age, its chips the contested resource behind the export controls and trillion-dollar valuations of the 2020s.",
  impact:{
    computing:"The GPU becomes AI's engine; the compute bottleneck holding back deep learning is removed.",
    power:"NVIDIA becomes the strategic chokepoint of the AI economy.",
    technology:"Compute joins data and algorithms as a primary driver of AI progress." },
  causes:["mooreslaw","ic1958"], effects:["alexnet","chipexportcontrols"] },

{ id:"word2vec", year:2013, date:"2013", era:7, cat:"computing",
  title:"Word2Vec: Words as Vectors",
  wiki:"Word2vec", gallery:["Word embedding","Tomáš Mikolov"],
  summary:"Google shows that meaning can be geometry — 'king − man + woman ≈ queen' — by learning vector representations of words.",
  importance:"Word2Vec demonstrated that a simple network trained on raw text could place words in a vector space where semantic relationships became arithmetic: directions encoded gender, tense, even capital-of-country. It made the idea of the 'embedding' — meaning captured as position in high-dimensional space — concrete and indispensable, the representational substrate on which the Transformer and every large language model would later build.",
  impact:{
    computing:"Meaning becomes geometry — the embedding becomes a foundational AI primitive.",
    communications:"Machines gain a workable representation of semantic relationships between words.",
    technology:"Lays representational groundwork for the language-model era." },
  causes:["lstm"], effects:["transformer"] },

{ id:"dqn", year:2013, date:"2013", era:7, cat:"computing",
  title:"DeepMind's DQN Masters Atari",
  wiki:"Deep reinforcement learning", gallery:["DeepMind","Atari 2600","Q-learning"],
  summary:"A single deep network learns to play dozens of Atari games from raw pixels — and Google buys DeepMind months later.",
  importance:"DeepMind's Deep Q-Network learned to play Atari 2600 games at superhuman level directly from screen pixels and the score, with no game-specific programming — the same algorithm mastering Breakout, Pong, and Space Invaders. The demonstration of general learning from raw perception triggered Google's ~$500 million acquisition of DeepMind in 2014 and pointed the road to AlphaGo, AlphaZero, and reinforcement learning's central role in modern AI alignment.",
  impact:{
    computing:"Deep reinforcement learning arrives — general skill acquisition from raw perception.",
    technology:"The method behind AlphaGo and, later, the RLHF that aligns language models.",
    power:"Triggers Big Tech's acquisition race for AI labs." },
  causes:["deepbeliefnets"], effects:["alphago","rlhf"] },

{ id:"gans", year:2014, date:"2014", era:7, cat:"computing",
  title:"Generative Adversarial Networks",
  wiki:"Generative adversarial network", gallery:["Ian Goodfellow","Generative model"],
  summary:"Ian Goodfellow pits two networks against each other — one forging, one detecting — and machines learn to generate convincing images.",
  importance:"In Goodfellow's GAN, a generator learns to manufacture fake data while a discriminator learns to catch it, the two improving in adversarial lockstep — an idea he reputedly worked out after a bar argument. Yann LeCun called it the most interesting idea in a decade of machine learning. GANs drove a leap in image synthesis, seeded the deepfake era, and opened the generative path that diffusion models and DALL-E later widened into a flood.",
  impact:{
    computing:"Machines learn to generate realistic data — the generative-AI breakthrough before diffusion.",
    society:"Seeds the deepfake era and the crisis of synthetic media.",
    technology:"Opens the generative frontier that DALL-E and Stable Diffusion later industrialize." },
  causes:["deepbeliefnets"], effects:["deepfakes","copilot"] },

{ id:"frameworks", year:2015, date:"2015–2016", era:7, cat:"computing",
  title:"TensorFlow & PyTorch",
  wiki:"TensorFlow", gallery:["PyTorch","Deep learning","Google Brain"],
  summary:"Google open-sources TensorFlow; Facebook follows with PyTorch — putting industrial-grade deep-learning tools in everyone's hands.",
  importance:"By open-sourcing the frameworks they used internally, Google (TensorFlow, 2015) and Facebook (PyTorch, 2016) gave every student and startup the same machinery as the largest labs, and their rivalry accelerated the whole field. PyTorch's Python-first design eventually won the research community. The frameworks are the unglamorous but decisive infrastructure of the boom — the reason a deep-learning idea can go from paper to running code in an afternoon.",
  impact:{
    computing:"Deep-learning tooling is democratized — research velocity jumps across the field.",
    technology:"Open frameworks become shared infrastructure, compounding progress.",
    society:"The barrier to building AI drops from a lab's resources to a laptop and a download." },
  causes:["alexnet"], effects:["transformer","gpt3"] },

{ id:"alphagozero", year:2017, date:"2017", era:7, cat:"computing",
  title:"AlphaGo Zero: Learning From Scratch",
  wiki:"AlphaGo Zero", gallery:["AlphaZero","Reinforcement learning","DeepMind"],
  summary:"A successor masters Go with zero human data — learning entirely by playing itself, and surpassing the version that beat Lee Sedol in days.",
  importance:"Where AlphaGo had studied human games, AlphaGo Zero learned Go from nothing but the rules and self-play, exceeding all prior versions within days and inventing strategies humans had never found. Generalized as AlphaZero to chess and shogi, it suggested that for well-defined problems, machines could bootstrap superhuman skill without human knowledge at all — a profound and unsettling demonstration of self-improvement that shapes how researchers imagine the path beyond human-level AI.",
  impact:{
    computing:"Superhuman skill achieved from self-play alone — no human data required.",
    society:"Raises the prospect of AI that bootstraps beyond human knowledge.",
    technology:"Self-play and search become templates for training and reasoning systems." },
  causes:["alphago","dqn"], effects:["o1reasoning"] },

{ id:"rlhf", year:2017, date:"2017", era:7, cat:"computing",
  title:"Reinforcement Learning from Human Feedback",
  wiki:"Reinforcement learning from human feedback", gallery:["OpenAI","AI alignment"],
  summary:"Christiano and colleagues teach machines from human preferences rather than hand-coded rewards — the technique that later makes ChatGPT usable.",
  importance:"RLHF trains a model to optimize for what humans actually prefer, by learning a reward from their comparisons between outputs — solving the problem of objectives too subtle to specify by formula. Refined into InstructGPT (2022), it became the alignment method that turned raw, unruly language models into helpful assistants: ChatGPT is, in large part, GPT-3.5 with RLHF. It is the bridge from capability to usability, and the front line of the alignment problem.",
  impact:{
    computing:"The dominant technique for aligning language models with human intent.",
    society:"Makes powerful models usable and safer — the unlock behind the chatbot era.",
    technology:"Human preference becomes a trainable signal at the core of modern AI." },
  causes:["dqn"], effects:["chatgpt","constitutionalai"] },

{ id:"gpt1", year:2018, date:"2018", era:7, cat:"computing",
  title:"GPT-1 & BERT",
  wiki:"Generative pre-trained transformer", gallery:["BERT (language model)","OpenAI","Natural language processing"],
  summary:"OpenAI's GPT and Google's BERT show that pre-training a Transformer on vast unlabeled text, then fine-tuning, transforms language AI.",
  importance:"Within months in 2018, OpenAI's GPT-1 (a generative decoder) and Google's BERT (a bidirectional encoder) established the recipe that defines the era: pre-train a Transformer on enormous amounts of raw text, then adapt it to specific tasks. BERT became ubiquitous in search and NLP; GPT's line scaled to GPT-2, GPT-3, and ChatGPT. The pre-training paradigm — general capability first, specialization second — is the foundation of every large language model.",
  impact:{
    computing:"Establishes the pre-train-then-adapt paradigm of modern language AI.",
    communications:"BERT reshapes web search and NLP; GPT's line leads to the chatbot era.",
    technology:"General-purpose pre-trained models replace bespoke task-specific systems." },
  causes:["transformer","frameworks"], effects:["gpt3","scalinglaws"] },

{ id:"scalinglaws", year:2020, date:"2020", era:7, cat:"computing",
  title:"The Scaling Laws",
  wiki:"Neural scaling law", gallery:["Large language model","OpenAI"],
  summary:"Kaplan and colleagues show model performance improves predictably with more compute, data, and parameters — turning AI progress into an engineering plan.",
  importance:"The scaling-laws paper found that language-model loss falls in a smooth, predictable power law as compute, data, and parameter count grow — meaning capability could be bought, on schedule, with scale. This converted AI research into an industrial program: raise capital, buy chips, train bigger. DeepMind's Chinchilla (2022) refined the recipe toward more data. Scaling became the field's organizing strategy and the justification for the multi-billion-dollar training runs and chip wars that followed.",
  impact:{
    computing:"Capability becomes a predictable function of scale — the strategy of the modern era.",
    power:"AI progress fuses to capital and compute; the frontier concentrates among those who can pay.",
    technology:"Bigger-is-better becomes a forecastable engineering roadmap, not a gamble." },
  causes:["gpt1","imagenet"], effects:["gpt3","chipexportcontrols","chatgpt"] },

{ id:"alphafold", year:2020, date:"2020", era:7, cat:"computing",
  title:"AlphaFold Solves Protein Folding",
  wiki:"AlphaFold", gallery:["Protein structure prediction","Demis Hassabis","CASP"],
  summary:"DeepMind's AlphaFold predicts protein structures from sequence — cracking a 50-year grand challenge of biology, and winning a Nobel.",
  importance:"At the 2020 CASP competition, AlphaFold 2 predicted 3-D protein structures from amino-acid sequences with near-experimental accuracy, solving a problem that had resisted biology for half a century. DeepMind released predicted structures for nearly every known protein, transforming drug discovery and molecular biology. It earned Demis Hassabis and John Jumper a share of the 2024 Nobel Prize in Chemistry — AI's most unambiguous contribution to fundamental science, and a glimpse of its scientific promise beyond chatbots.",
  impact:{
    computing:"AI solves a landmark scientific problem — proof of its power in fundamental research.",
    society:"Transforms biology and drug discovery; a Nobel-recognized scientific breakthrough.",
    technology:"Demonstrates AI as an instrument of discovery, not only of generation." },
  causes:["deepmind","alphago"], effects:["nobelai"] },

{ id:"anthropicfounded", year:2021, date:"2021", era:7, cat:"power",
  title:"Anthropic Is Founded",
  wiki:"Anthropic", gallery:["Dario Amodei","AI safety","Claude (language model)"],
  summary:"A group of senior researchers leaves OpenAI to build a lab with safety at its center — and an empirical, hard-science culture.",
  importance:"Concerned about the direction and pace of frontier AI, Dario and Daniela Amodei and colleagues departed OpenAI in 2021 to found Anthropic, organized around AI safety research, interpretability, and the conviction that powerful systems must be made reliable and steerable. It became a leading frontier lab — creator of Claude, the Constitutional AI method, and a major voice in alignment and policy — embodying the era's central tension between racing to build and trying to build safely.",
  impact:{
    power:"A new frontier lab forms around safety, sharpening the field's central debate.",
    society:"Institutionalizes AI safety as a serious, well-funded research program.",
    computing:"Produces Claude, Constitutional AI, and influential interpretability research." },
  causes:["openai"], effects:["claude","constitutionalai"] },

{ id:"constitutionalai", year:2022, date:"2022", era:7, cat:"computing",
  title:"Constitutional AI",
  wiki:"AI alignment", gallery:["Anthropic","Claude (language model)"],
  summary:"Anthropic trains a model to critique and correct itself against a written 'constitution' — alignment with far less human labeling.",
  importance:"Constitutional AI replaced much of RLHF's human feedback with a set of written principles the model uses to critique and revise its own responses (RLAIF — reinforcement learning from AI feedback). It aimed to make a model's values explicit, auditable, and scalable, reducing reliance on armies of human labelers. The method became central to Claude's training and a notable answer to the question every lab now faces: how do you instill values in a system more capable, in places, than its makers?",
  impact:{
    computing:"A scalable alignment method using AI feedback against explicit written principles.",
    society:"Makes a model's governing values legible and debatable rather than hidden.",
    technology:"Points toward alignment that scales as fast as capability does." },
  causes:["rlhf","anthropicfounded"], effects:["claude"] },

{ id:"chipexportcontrols", year:2022, date:"October 2022", era:7, cat:"law",
  title:"The Chip Export Controls",
  wiki:"Bureau of Industry and Security", gallery:["Nvidia","Semiconductor industry","Integrated circuit"],
  summary:"The U.S. restricts China's access to the most advanced AI chips and chipmaking tools — making compute a frontier of geopolitics.",
  importance:"In October 2022 the U.S. Bureau of Industry and Security imposed sweeping export controls cutting China off from cutting-edge AI chips (like NVIDIA's top GPUs), the equipment to make them, and key talent — a deliberate effort to slow a rival's AI progress by denying it compute. It made the semiconductor supply chain an instrument of state power and the central front of U.S.–China technology rivalry, the geopolitical backdrop against which DeepSeek's efficient models and every later frontier run are read.",
  impact:{
    law:"Compute becomes an explicit lever of national security and industrial policy.",
    power:"The AI race is reframed as a geopolitical contest over chips and supply chains.",
    government:"Export control becomes the chosen instrument for shaping the global AI balance." },
  causes:["gpucuda","scalinglaws"], effects:["deepseek","present"] },

{ id:"altmanboard", year:2023, date:"November 2023", era:7, cat:"power",
  title:"The OpenAI Board Crisis",
  wiki:"Removal of Sam Altman from OpenAI", gallery:["Sam Altman","OpenAI"],
  summary:"OpenAI's board fires CEO Sam Altman, then reinstates him in five chaotic days — exposing the fragility of 'governing' transformative AI.",
  importance:"In November 2023 OpenAI's nonprofit board abruptly removed Altman for not being 'consistently candid,' triggering a near-total staff revolt — employees threatened to decamp to Microsoft — and his reinstatement within days, with the board reconstituted. The episode laid bare the central governance problem of the age: the institutions meant to steer the most consequential technology proved unable to control even their own leadership, and capital and talent, not charters, held the real power.",
  impact:{
    power:"Reveals that AI's safety-minded governance structures are weaker than its commercial gravity.",
    society:"Crystallizes the question of who actually controls frontier AI — and on what authority.",
    government:"Underscores how little external accountability governs the labs building AGI." },
  causes:["openai","anthropicfounded"], effects:["present"] },

{ id:"aisafetyletters", year:2023, date:"2023", era:7, cat:"power",
  title:"The AI Risk Letters",
  wiki:"Statement on AI risk of extinction", gallery:["Future of Life Institute","Existential risk from artificial general intelligence","Geoffrey Hinton"],
  summary:"Thousands sign open letters urging a development pause and warning that AI extinction risk deserves global priority — as Hinton quits Google to speak freely.",
  importance:"In 2023 the alarm went mainstream: the Future of Life Institute's letter called for a six-month pause on frontier training; the Center for AI Safety's one-sentence statement — that mitigating AI extinction risk should be a global priority alongside pandemics and nuclear war — drew signatures from nearly every leading figure; and Geoffrey Hinton, a father of the field, left Google to warn of its dangers. The letters marked the moment AI safety moved from a niche concern to a question of public policy and global governance — even as no lab actually paused.",
  impact:{
    power:"AI existential risk becomes a mainstream policy question almost overnight.",
    society:"The field's own pioneers publicly split over how fast and how safely to proceed.",
    government:"Spurs the summits, safety institutes, and regulatory efforts of 2023–2024." },
  causes:["chatgpt","hal9000"], effects:["aiact","present"] },

{ id:"o1reasoning", year:2024, date:"September 2024", era:7, cat:"computing",
  title:"Reasoning Models",
  wiki:"OpenAI o1", gallery:["Large language model","Artificial intelligence"],
  summary:"OpenAI's o1 is trained to 'think' before answering — spending more compute at inference to reason through hard problems, a new axis of progress.",
  importance:"With o1, OpenAI introduced inference-time scaling: rather than only making models bigger, let them generate long internal chains of reasoning before responding, trading compute at answer-time for dramatically better performance on math, code, and science. Built on reinforcement learning and the chain-of-thought insight, it opened a second scaling axis beyond raw size, and o1's successor o3 posted breakthrough results on reasoning benchmarks — reshaping how the next generation of capable, and agentic, systems is built.",
  impact:{
    computing:"A new scaling axis — reasoning at inference time — reinvigorates capability gains.",
    technology:"Models that deliberate before answering underpin the agentic systems of 2024–2025.",
    society:"Machine performance on hard reasoning tasks jumps, narrowing once-safe human margins." },
  causes:["alphagozero","scalinglaws","chatgpt"], effects:["agents","deepseek"] },

{ id:"nobelai", year:2024, date:"October 2024", era:7, cat:"computing",
  title:"The AI Nobel Prizes",
  wiki:"Geoffrey Hinton", gallery:["Demis Hassabis","John Hopfield","Nobel Prize"],
  summary:"In one week, neural-network pioneers win the Nobel in Physics, and AlphaFold's creators win it in Chemistry — science's establishment ratifies the AI age.",
  importance:"In October 2024 the Nobel committees made AI's arrival official: the Physics prize went to John Hopfield and Geoffrey Hinton for the foundational work on neural networks, and days later the Chemistry prize went to Demis Hassabis and John Jumper (with David Baker) for AlphaFold's protein-structure breakthrough. The recognitions — honoring both the methods and their scientific fruit — marked the passage of neural networks from a derided fringe, through two winters, to the heart of twenty-first-century science.",
  impact:{
    computing:"The scientific establishment ratifies neural networks as foundational science.",
    society:"Caps the connectionists' long vindication — fringe heresy to Nobel laurels.",
    technology:"Signals AI's transformation of the natural sciences, not just industry." },
  causes:["hopfield","backprop","deepbeliefnets","alphafold"], effects:["present"] },

{ id:"deepseek", year:2025, date:"January 2025", era:7, cat:"computing",
  title:"The DeepSeek Moment",
  wiki:"DeepSeek", gallery:["DeepSeek (chatbot)","Large language model","Nvidia"],
  summary:"A little-known Chinese lab releases an open reasoning model rivaling the West's best at a fraction of the cost — and sends a shock through the markets.",
  importance:"In late 2024 and January 2025 DeepSeek released V3 and the open-weight R1 reasoning model, matching frontier Western systems at a startlingly low training cost and despite U.S. chip export controls. The 'DeepSeek moment' rattled assumptions about America's lead and the necessity of vast compute budgets: chip stocks plunged, the app topped the U.S. charts, and an obscure lab became a household name overnight. It crystallized the 2020s contest — open versus closed, China versus the U.S., efficiency versus scale.",
  impact:{
    computing:"Frontier-level capability is shown achievable cheaply and openly — upending cost assumptions.",
    power:"China's competitiveness despite export controls reframes the geopolitical AI race.",
    society:"A market shock and a national-confidence jolt make AI's global contest front-page news." },
  causes:["o1reasoning","chipexportcontrols","scalinglaws"], effects:["present"] },

{ id:"lemoine", year:2022, date:"June 2022", era:7, cat:"power",
  title:"'Is LaMDA Sentient?'",
  wiki:"LaMDA", gallery:["Blake Lemoine","Chatbot","Google"],
  summary:"A Google engineer is fired after claiming the company's chatbot is sentient — and the public glimpses, early, how convincingly machines can now talk.",
  importance:"Months before ChatGPT, Google engineer Blake Lemoine went public with transcripts of LaMDA and his belief that it was conscious; Google dismissed the claim and then him. Most researchers rejected the sentience reading — but the episode was an early, vivid signal of how persuasively large language models could now converse, and of the ELIZA effect returning at industrial strength. It previewed the disorientation that ChatGPT would soon bring to everyone.",
  impact:{
    society:"A public preview of how convincingly modern models converse — and how readily we read mind into them.",
    power:"Raises, before the mass-AI moment, the question of machine consciousness and our judgments about it.",
    computing:"Foreshadows the ChatGPT shock and the return of the ELIZA effect at scale." },
  causes:["eliza","transformer"], effects:["chatgpt"] }

);
