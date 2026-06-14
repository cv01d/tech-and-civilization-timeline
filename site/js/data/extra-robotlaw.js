// SUPPLEMENT — how the world regulates robots, country by country, and what happens to
// the workers kept in the loop. Three philosophies diverge: Japan and South Korea treat
// automation as social policy against demographic collapse; China treats it as pure
// industrial policy; Europe regulates first. And in the Amazon warehouse the oldest
// promise of robotics — that machines would take the dangerous work — inverts: the robot
// sets a pace human bodies cannot sustain. Cross-links the existing unimate, cobots,
// kivarobots, foxconn, luddites, oshact, prop22, aiact cards. Round one: data only.
window.ATLAS_EVENTS.push(

{ id:"japanrobots1981", year:1981, date:"1981", era:7, cat:"robotics",
  title:"Japan Writes the First Robot Safety Law",
  wiki:"Industrial robot",
  summary:"Japan's Ministry of Labour issues the world's first national occupational-safety standards for industrial robots — physical barriers, emergency stops, operator training — as the country becomes the planet's leading robot adopter.",
  importance:"Having licensed the Unimate design and out-automated every rival, Japan was first to confront the danger of working beside heavy machines that move on their own, and in 1981 wrote the world's first national robot safety rules. The standards — cages, e-stops, trained operators — became the template other industrial nations copied. They also expressed a philosophy that would define Japanese policy: the robot as essential infrastructure to be made safe and integrated, not a threat to be fought.",
  impact:{
    robotics:"The world's first national industrial-robot safety standards are issued.",
    labor:"Physical barriers, emergency stops, and operator training become legal requirements.",
    law:"Robot regulation begins as occupational safety, not economic policy." },
  causes:["unimate"], effects:["japanrobotstrategy","koreabotlaw","machinerydirective"] },

{ id:"japanrobotstrategy", year:2015, date:"2015–2020", era:7, cat:"robotics",
  title:"Japan: Robots as Social Policy",
  wiki:"Robotics in Japan",
  summary:"Facing the world's oldest population, Japan launches its Robot Revolution Initiative and later a $440M Moonshot program targeting elder-care robots — framing automation not as a job threat but as essential infrastructure for human dignity in old age.",
  importance:"With a third of its population headed past 65 and a severe labor shortage, Japan reframed robotics as demographic survival: the 2015 Robot Revolution Initiative aimed to triple manufacturing robot use and push into care, agriculture, and disaster response, and the 2020 Moonshot program funded autonomous robots to help the elderly live independently. There is no single 'robots law' — instead, continuously updated safety standards, sector guidelines, and an overarching strategy that treats automation as social policy. The framing, robots as helpers enabling dignity, shapes regulation utterly differently from the adversarial labor-versus-capital lens of the United States.",
  impact:{
    robotics:"A national strategy casts robots as essential infrastructure for a shrinking workforce.",
    labor:"Automation is framed as support for human dignity, not displacement of jobs.",
    power:"Robot policy becomes demographic and social policy, not just industrial." },
  causes:["japanrobots1981"], effects:["koreadensity","chinahumanoids"] },

{ id:"koreabotlaw", year:2008, date:"2008", era:7, cat:"robotics",
  title:"South Korea's Standalone Robot Law",
  wiki:"Intelligent robot",
  summary:"South Korea passes the Intelligent Robots Development and Distribution Promotion Act — the first standalone national law specifically governing robot development, deployment, and safety, treating robotics as a strategic national industry.",
  importance:"Where Japan layered rules onto existing safety law, South Korea wrote a dedicated statute: the 2008 Intelligent Robots Act created a legal framework treating robotics as a strategic industry to be promoted, distributed, and governed in its own right. It was the most mature standalone robot law any country had enacted, and the foundation for the successive national 'Basic Plans' that would drive Korea to the highest robot density on earth. The law embodied a national bet that robotics was central to economic and demographic survival.",
  impact:{
    robotics:"The first dedicated national robot law treats robotics as a strategic industry.",
    law:"Robot development, distribution, and safety gain a standalone legal framework.",
    labor:"The state commits to promoting robotics as core national infrastructure." },
  causes:["japanrobots1981"], effects:["koreadensity"] },

{ id:"koreadensity", year:2024, date:"2023–2028", era:7, cat:"robotics",
  title:"South Korea, the Most Robotic Nation",
  wiki:"Robot density",
  summary:"South Korea reaches 1,012 robots per 10,000 workers — the world's highest density by more than double — and in 2024 becomes the first country to replace over 10% of its industrial workforce with robots; its Fourth Basic Plan invests billions to deploy a million robots by 2030.",
  importance:"South Korea's automation is the most extreme on earth: by 2023 its manufacturing sector ran over 1,000 robots per 10,000 workers, more than double the next country and over six times the global average, and in 2024 it crossed the threshold of replacing more than a tenth of its industrial workforce with machines. Successive Basic Plans, now investing billions through 2028 and aiming to field a million robots by 2030, push robots into hospitals, restaurants, and public service. Notably, unions at the great chaebol negotiated agreements on deployment notification and retraining — a worker voice largely absent elsewhere in Asia.",
  impact:{
    robotics:"The world's highest robot density, by a factor of more than two, is reached.",
    labor:"Korea becomes the first nation to replace over 10% of industrial workers with robots.",
    law:"Chaebol unions secure deployment-notification and retraining agreements." },
  causes:["koreabotlaw","japanrobotstrategy"], effects:["chinahumanoids"] },

{ id:"madeinchina2025", year:2015, date:"2015", era:7, cat:"robotics",
  title:"Made in China 2025",
  wiki:"Made in China 2025",
  summary:"China announces a ten-year plan to climb the manufacturing value chain, with robotics and AI as two of ten core industries; large-scale state subsidies for robot purchases begin, starting the fastest automation surge in history.",
  importance:"In 2013 China had just 14 robots per 10,000 workers, effectively pre-industrial in automation terms; Made in China 2025 set out to change that by treating robotics as a pillar of national industrial power and subsidizing robot adoption at scale. It was pure industrial policy — regulation in service of production targets, not worker protection — with weak protections for displaced workers and no analog to Japan's retraining philosophy or Korea's union agreements. The plan launched an acceleration with no precedent in the history of manufacturing.",
  impact:{
    robotics:"Robotics is made a pillar of national industrial strategy, heavily subsidized.",
    labor:"Automation is pursued for production targets, with weak protection for displaced workers.",
    power:"China sets out to climb from automation laggard to robotics superpower." },
  causes:["foxconn"], effects:["chinahumanoids"] },

{ id:"chinahumanoids", year:2024, date:"2023–2025", era:7, cat:"robotics",
  title:"China's Robotics Acceleration",
  wiki:"Humanoid robot",
  summary:"China reaches 470 robots per 10,000 workers in 2023, surpassing Germany and Japan in density for the first time — a 30-fold rise in a decade — and in 2024 issues a road map for a 'full-stack humanoid ecosystem,' launching over 35 new humanoid models in a single year.",
  importance:"China's density rose more than thirtyfold in ten years to overtake Germany and Japan — the fastest robotics adoption in industrial history — and Beijing then aimed at the next frontier, a road map for a domestic humanoid-robot ecosystem with national benchmarks and subsidized component production. More than 35 new humanoid models launched in 2024 alone, outpacing every other country. The state directs the largest robot-deploying factories itself and exports its surveillance-integrated 'smart factory' model abroad alongside the machines — industrial policy and the surveillance state fused.",
  impact:{
    robotics:"China surpasses the established leaders in robot density and floods the humanoid market.",
    power:"State-directed industrial policy makes China a robotics superpower in a decade.",
    surveillance:"China exports a surveillance-integrated 'smart factory' model with its robots." },
  causes:["madeinchina2025","koreadensity","japanrobotstrategy"], effects:[] },

{ id:"machinerydirective", year:2006, date:"2006", era:6, cat:"robotics",
  title:"Europe's Machinery Directive",
  wiki:"Machinery Directive",
  summary:"The EU Machinery Directive sets baseline safety requirements for all mechanical equipment, including robots, sold in European markets — the foundational framework that still governs industrial-robot safety in Europe, applied under codetermination laws giving workers a say in automation.",
  importance:"Europe's regulatory-first instinct produced, in 2006, a single directive setting safety requirements for all machinery sold across the bloc — the CE-marking regime that still underlies industrial-robot safety in Europe. Crucially, it operated within a labor framework the U.S. and Asia lacked: Germany's Mitbestimmung and similar codetermination laws gave workers legal rights in management decisions, including automation, so robots arrived through consultation, not unilateral deployment. European makers like KUKA and ABB dominated the global market under these stricter, worker-involving rules.",
  impact:{
    robotics:"A single EU framework governs industrial-robot safety across the bloc.",
    labor:"Codetermination gives workers a legal voice in automation decisions.",
    law:"Europe regulates robots first, through baseline safety and CE certification." },
  causes:["japanrobots1981"], effects:["robotpersonhood","machineryregulation2023","cobots"] },

{ id:"robotpersonhood", year:2017, date:"2017", era:7, cat:"law",
  title:"Electronic Persons and the Robot Tax",
  wiki:"Electronic personhood",
  summary:"The European Parliament passes a non-binding resolution floating a legal status of 'electronic persons' for advanced robots and a 'robot tax' to fund retraining of displaced workers; industry and most governments reject both, but the serious legislative debate over robot rights and redistribution has begun.",
  importance:"In a remarkable 2017 resolution, the European Parliament asked whether advanced autonomous robots should hold a legal status of their own and whether a 'robot tax' should fund the retraining of workers they displace. Industry and most member states rejected the proposals as premature, but the questions — who is liable for an autonomous machine's actions, and how to redistribute the gains from automation — were now formally on the legislative table. It marked the moment robot rights and the economics of displacement entered serious lawmaking, decades ahead of any resolution.",
  impact:{
    law:"Legal personhood for robots and a robot tax enter formal legislative debate.",
    labor:"Redistribution to displaced workers is proposed as policy, then shelved.",
    power:"Europe opens the question of liability and economic justice for autonomous machines." },
  causes:["machinerydirective"], effects:["machineryregulation2023"] },

{ id:"machineryregulation2023", year:2023, date:"2023", era:7, cat:"law",
  title:"Regulating Machines That Learn",
  wiki:"Machinery Directive",
  summary:"The EU's new Machinery Regulation (effective 2027) replaces the 2006 Directive, adding conformity requirements for AI-enabled, autonomous machinery that learns and changes behavior after deployment; the 2024 AI Act then classes many such robots as 'high-risk AI.'",
  importance:"Traditional safety law assumed a machine behaves the same way forever; a robot that learns and alters its behavior after it is sold breaks that assumption, and the EU's 2023 Machinery Regulation is the first to write rules for it. Paired with the AI Act's classification of robots in critical infrastructure, employment, and public space as 'high-risk' — demanding risk assessments, human oversight, and explainability — it creates real deployment friction. But it also hands European makers, fluent in CE certification, a competitive moat over U.S. and Chinese humanoid firms facing the regulatory onboarding curve for the first time.",
  impact:{
    law:"Self-modifying, learning machinery faces specific safety-conformity rules for the first time.",
    robotics:"Autonomous robots in critical and workplace settings are classed as high-risk AI.",
    power:"Regulatory fluency becomes a competitive moat for European manufacturers." },
  causes:["machinerydirective","robotpersonhood","aiact"], effects:[] },

{ id:"amazoninjuries", year:2018, date:"2014–2024", era:7, cat:"robotics",
  title:"The Robot Sets the Pace",
  wiki:"Amazon Robotics",
  summary:"After Amazon deploys Kiva robots to bring shelves to stationary workers, internal data shows serious-injury rates rising — nearly quadrupling at one facility — as the robot, not a human supervisor, sets a relentless pace. Union research finds robotized warehouses run injury rates about 50% higher.",
  importance:"Amazon's robots were supposed to spare workers the miles of walking; instead they brought the shelves to workers and set the tempo, and human bodies broke trying to keep up. Internal data showed serious injuries climbing as robots arrived — nearly quadrupling at the Tracy, California facility — and a coalition of unions found robotized facilities running injury rates roughly 50% higher, with Amazon's overall rate nearly double the industry standard. The robot did not make the work safer; it made it faster, and faster pace caused more injury. It is the cruel inversion of robotics' founding promise.",
  impact:{
    labor:"Robots set a machine pace that drives human injury rates sharply upward.",
    robotics:"The promise that robots would take the dangerous work is inverted in the warehouse.",
    power:"Productivity gains are extracted from the bodies of the workers kept in the loop." },
  causes:["kivarobots","taylorism"], effects:["oshaamazon","ab701"] },

{ id:"oshaamazon", year:2023, date:"2023–2024", era:7, cat:"law",
  title:"OSHA Names the Pace of Work",
  wiki:"Occupational Safety and Health Administration",
  summary:"OSHA cites Amazon at multiple warehouses, naming algorithmic 'pace of work' as a safety violation — the first time a U.S. federal agency directly links automated productivity quotas to injury; a DOJ probe later examines whether Amazon underreported injuries.",
  importance:"In citing Amazon and explicitly blaming the algorithmically-driven pace of work, OSHA for the first time treated an automated productivity quota itself as a workplace hazard — a landmark in linking the machine's tempo to human harm. Independent studies suggested official injury counts, based on employer self-reporting, dramatically undercounted the real toll, and the Justice Department opened an investigation into whether Amazon had underreported. Yet enforcement produced little systemic change, and a 2025 rollback of OSHA activity at Amazon facilities showed how fragile even this recognition was.",
  impact:{
    labor:"A federal agency names the algorithmic pace of work as a safety violation.",
    law:"Automated productivity quotas are formally linked to injury in an enforcement action.",
    power:"Recognition of the harm outpaces any enforcement strong enough to end it." },
  causes:["amazoninjuries"], effects:["ab701"] },

{ id:"ab701", year:2021, date:"2021–2024", era:7, cat:"law",
  title:"The Warehouse Quota Laws",
  wiki:"Warehouse worker protection",
  summary:"California's AB 701 (2022) becomes the world's first law regulating algorithmic work quotas in warehouses — mandating quota disclosure, protecting bathroom and rest breaks, and barring retaliation; New York (2022) and Washington (2024) follow. No federal equivalent exists.",
  importance:"Written almost entirely in response to Amazon, California's AB 701 was the first law anywhere to regulate the algorithmic quota itself: employers must disclose quotas in writing, quotas may not block bathroom or rest breaks or require unsafe work, and retaliation is barred — with Amazon named in the signing announcement. New York and Washington enacted their own versions, the first U.S. wave of robot-era labor law. But Congress passed nothing, and federal enforcement weakened, leaving a patchwork that echoes the atlas's oldest pattern: the workers of 2024, unlike the Luddites of 1811, are not displaced but kept in the loop and injured, while the firms deploying the robots lobby against the very rules meant to protect them.",
  impact:{
    law:"The first laws regulating algorithmic warehouse quotas are enacted at the state level.",
    labor:"Quota disclosure, break protections, and anti-retaliation rights are secured for warehouse workers.",
    power:"A state-by-state patchwork forms as Congress declines to act and enforcement weakens." },
  causes:["amazoninjuries","oshaamazon","prop22"], effects:[] }

);
