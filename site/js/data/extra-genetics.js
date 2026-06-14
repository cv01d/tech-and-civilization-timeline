// SUPPLEMENT — heredity, from the first deliberate breeding of crops to CRISPR. This
// is the atlas's hardest thread, because the technology of life is also a technology
// of power over bodies: the same century that mapped the gene also sterilized the
// "unfit" by law. The pattern holds — capability outruns ethics, and the first people
// to feel the consequence are those with the least power to refuse. Cross-links to the
// existing `dnacode` (the information framing) and `aiact`. cat:"biotech".
// Round one: data only — images to follow.
window.ATLAS_EVENTS.push(

{ id:"ancientbreeding", year:-3000, date:"c. 3000 BCE", era:1, cat:"biotech",
  title:"The First Genetic Engineers",
  wiki:"Selective breeding",
  summary:"Mesopotamian and Egyptian farmers selectively breed crops and livestock, reshaping the heredity of whole species millennia before anyone understands the mechanism they are using.",
  importance:"Long before genes were imagined, farmers were already directing evolution — saving the best seed, mating the strongest animals, and slowly bending wheat, cattle, and dogs to human use. It was genetic engineering by patient selection, the deepest root of the entire thread that ends in CRISPR. That humans could reshape life by controlling who reproduces is the oldest fact in this gallery, and the one eugenics would later turn, monstrously, on human beings.",
  impact:{
    biotech:"Deliberate control of reproduction reshapes species without any theory of heredity.",
    technology:"Agriculture's foundational tool is the manipulation of inheritance.",
    society:"The domesticated crop and animal underwrite settled civilization itself." },
  effects:["ancientinheritance","mendel","galton"] },

{ id:"ancientinheritance", year:-400, date:"c. 400–350 BCE", era:1, cat:"biotech",
  title:"The First Theories of Heredity",
  wiki:"Pangenesis",
  summary:"Hippocrates proposes 'pangenesis' — particles from every body part gathering to pass on traits — and Aristotle counters that the father gives form and the mother mere matter; both are wrong, and both rule for two thousand years.",
  importance:"The Greeks asked the right question — how do traits pass from parent to child? — and answered it wrongly in ways that endured. Hippocrates' pangenesis imagined the body broadcasting tiny copies of itself into the seed; Aristotle's scheme made the male the active sculptor of a passive female substance, a notion that shadowed both biology and patriarchy for millennia. Their errors held until Mendel, a reminder of how long a plausible wrong idea about inheritance can govern.",
  impact:{
    biotech:"Heredity becomes a subject of systematic theory, however mistaken.",
    society:"Aristotle's active-male/passive-female model entwines biology with gender hierarchy.",
    technology:"A framework, even a wrong one, lets inheritance be reasoned about for the first time." },
  causes:["ancientbreeding"], effects:["mendel"] },

{ id:"hybridization", year:1600, date:"1000–1600s", era:2, cat:"biotech",
  title:"The Hybridizer's Craft",
  wiki:"Plant breeding",
  summary:"Across Asia and Europe, growers practice deliberate plant hybridization and formalize animal breeding in agricultural manuals — refining the control of heredity into a documented craft.",
  importance:"Through the medieval and early-modern centuries, the manipulation of inheritance matured from instinct into recorded technique: gardeners crossed plant varieties on purpose, breeders kept stud records, and agricultural treatises codified what worked. The craft accumulated exactly the kind of patterned data — which crosses bred true, which traits reappeared — that Mendel would later read as law. The hybridizer's notebook is the unacknowledged laboratory of genetics.",
  impact:{
    biotech:"Hybridization and pedigree breeding become documented, transmissible technique.",
    technology:"Systematic record-keeping turns breeding into a cumulative practice.",
    labor:"Agricultural improvement becomes a specialized, knowledge-bearing trade." },
  causes:["ancientbreeding"], effects:["mendel"] },

{ id:"mendel", year:1856, date:"1856–1866", era:3, cat:"biotech",
  title:"Mendel's Peas",
  wiki:"Gregor Mendel",
  summary:"In a monastery garden in Brno, Gregor Mendel breeds pea plants and extracts the laws of dominance, segregation, and independent assortment — the foundation of all genetics. His 1866 paper is then ignored for 34 years.",
  importance:"Mendel did what two millennia of theory had not: he counted. By tracking thousands of pea crosses he found that inheritance was particulate and lawful — traits passed as discrete units in fixed ratios, not blended fluids — and published it in 1866. The world's biologists missed it entirely for a generation. His rediscovery in 1900 would launch genetics as a science overnight, making him the patron saint of the overlooked correct idea.",
  impact:{
    biotech:"Inheritance is shown to be particulate and governed by countable laws.",
    technology:"Quantitative experiment replaces speculation as the method of heredity.",
    society:"A monk's garden quietly lays the groundwork for a century of genetic science." },
  causes:["ancientinheritance","hybridization"], effects:["geneticsfield","morgan"] },

{ id:"geneticsfield", year:1900, date:"1900–1905", era:4, cat:"biotech",
  title:"Genetics Is Born",
  wiki:"Genetics",
  summary:"Three scientists independently rediscover Mendel's laws in 1900, and a new science crystallizes overnight; in 1905 William Bateson gives it a name — 'genetics.'",
  importance:"In 1900 Hugo de Vries, Carl Correns, and Erich von Tschermak each arrived at Mendel's conclusions and found he had reached them first — and a discipline ignored for a generation became, almost instantly, the cutting edge of biology. William Bateson christened it 'genetics' in 1905. The field's sudden birth set up the century's great fork: the same science could illuminate disease and feed the world, or be twisted into a program for ranking and culling human beings.",
  impact:{
    biotech:"Mendel's rediscovery turns heredity into an organized modern science.",
    society:"A powerful new authority on human difference emerges, ripe for misuse.",
    technology:"Genetics acquires a name, a method, and a research community." },
  causes:["mendel"], effects:["morgan","galton","doublehelix"] },

{ id:"morgan", year:1910, date:"1910–1915", era:4, cat:"biotech",
  title:"Genes on the Chromosome",
  wiki:"Thomas Hunt Morgan",
  summary:"Thomas Hunt Morgan's fruit-fly experiments map genes to specific locations on chromosomes — proving the abstract 'gene' is a physical thing with a physical address.",
  importance:"Morgan's fly room at Columbia turned the gene from a bookkeeping abstraction into a material entity: by tracking traits that were inherited together, he showed genes sit in linear order along chromosomes, each at a fixed locus. It married Mendel's statistics to the visible architecture of the cell and gave heredity a physical map. The chromosome theory is the bridge from Mendel's ratios to the molecular hunt that would end at the double helix.",
  impact:{
    biotech:"The gene is localized to a physical position on the chromosome.",
    technology:"The fruit fly becomes biology's premier experimental organism.",
    society:"Heredity is shown to have a material basis that can, in principle, be read and altered." },
  causes:["geneticsfield","mendel"], effects:["doublehelix"] },

{ id:"galton", year:1883, date:"1883", era:4, cat:"biotech",
  title:"Galton Coins 'Eugenics'",
  wiki:"Francis Galton",
  summary:"Francis Galton names 'eugenics' — the idea that human heredity can and should be deliberately guided to 'improve' the species — turning the breeder's logic on humanity itself.",
  importance:"Darwin's cousin took the ancient craft of selective breeding and proposed applying it to people: encourage the 'fit' to reproduce, discourage or prevent the 'unfit.' Dressed in the prestige of the new genetics, eugenics offered states a scientific-sounding rationale for controlling who could have children. Within a generation it would be written into sterilization statutes, immigration law, and ultimately genocide — the darkest demonstration in this atlas of technology outrunning ethics.",
  impact:{
    biotech:"Selective breeding is proposed as policy for the human species.",
    surveillance:"Heredity becomes grounds for classifying and ranking citizens.",
    law:"A pseudo-scientific doctrine is readied for translation into coercive statute." },
  causes:["ancientbreeding","geneticsfield"], effects:["eugenicssterilization","buckvbell","nazieugenics"] },

{ id:"eugenicssterilization", year:1907, date:"1907", era:4, cat:["biotech","law"],
  title:"The First Sterilization Law",
  wiki:"Compulsory sterilization",
  summary:"Indiana passes the world's first compulsory sterilization law, authorizing the state to sterilize people deemed 'unfit' — criminals, the mentally ill, the disabled. Some 60,000 Americans will be sterilized under such laws.",
  importance:"Indiana's 1907 statute converted Galton's doctrine into state power over the body, empowering officials to sterilize those they judged hereditarily defective. Dozens of states followed, and the U.S. became the global model that Nazi Germany would later cite admiringly. Roughly 60,000 Americans were sterilized under these laws, most between 1907 and 1970 — a vast, coercive program of reproductive control carried out in the name of science, against the powerless.",
  impact:{
    biotech:"Genetic 'improvement' becomes a coercive function of the state.",
    surveillance:"The state takes the authority to judge whose heredity is acceptable.",
    law:"Forced sterilization is normalized in American statute for over sixty years." },
  causes:["galton"], effects:["buckvbell","nazieugenics"] },

{ id:"buckvbell", year:1927, date:"1927", era:4, cat:["biotech","law"],
  title:"Buck v. Bell",
  wiki:"Buck v. Bell",
  summary:"The U.S. Supreme Court upholds forced sterilization 8–1; Justice Holmes writes 'three generations of imbeciles are enough.' The decision has never been overturned.",
  importance:"Carrie Buck, a young woman in Virginia, was ordered sterilized as 'feebleminded'; the Supreme Court blessed it almost unanimously, with Oliver Wendell Holmes supplying one of the most infamous sentences in American law. The ruling gave constitutional cover to tens of thousands of sterilizations and was cited by name at Nuremberg by Nazi defendants pointing to America's example. It still stands, never expressly overturned — a live reminder of how readily law ratifies the science of the moment.",
  impact:{
    law:"The highest court constitutionalizes forced sterilization — and never reverses it.",
    surveillance:"Judgments about 'fitness' are given the full force of the state.",
    society:"American eugenic law becomes a precedent the Nazis would cite in their defense." },
  causes:["galton","eugenicssterilization"], effects:["nazieugenics"] },

{ id:"nazieugenics", year:1933, date:"1933–1945", era:4, cat:"biotech",
  title:"Where Eugenics Leads",
  wiki:"Law for the Prevention of Hereditarily Diseased Offspring",
  summary:"Nazi Germany's 1933 sterilization law leads to some 400,000 forced sterilizations; the T-4 program then murders roughly 300,000 disabled people — and the Holocaust shows the full destination of eugenic ideology.",
  importance:"Germany took the American model and accelerated it past any limit: a 1933 law sterilized hundreds of thousands deemed hereditarily diseased, and the T-4 program moved from preventing 'unfit' births to murdering the disabled outright, pioneering the gas chambers later used in the Holocaust. Eugenics had reached its logical end — the industrial killing of those a state judged unworthy of life. It is the atlas's gravest lesson in what follows when a technology of heredity is fused to a doctrine of human ranking.",
  impact:{
    biotech:"Eugenic ideology reaches its end point in mass sterilization and murder.",
    surveillance:"The state's power to classify by heredity becomes the power to exterminate.",
    law:"The catastrophe drives the postwar human-rights order and the discrediting of eugenics." },
  causes:["galton","buckvbell","eugenicssterilization"], effects:["dnacarrier"] },

{ id:"dnacarrier", year:1944, date:"1944", era:4, cat:"biotech",
  title:"DNA Is the Carrier",
  wiki:"Avery–MacLeod–McCarty experiment",
  summary:"Oswald Avery and colleagues prove that DNA — not protein, as most assumed — is the molecule that carries genetic information, redirecting the entire search for the gene.",
  importance:"Most biologists had bet that genes were made of protein, the cell's versatile workhorse; Avery, MacLeod, and McCarty showed instead that the carrier of heredity was the unglamorous nucleic acid DNA. The result reoriented a generation of researchers toward a single molecule and set the stage for the race to learn its structure. It is the quiet hinge on which the molecular era of biology turns.",
  impact:{
    biotech:"Heredity is pinned to a specific molecule: DNA.",
    technology:"The search for the gene narrows to deciphering one chemical structure.",
    society:"Biology begins its turn from natural history toward molecular engineering." },
  causes:["nazieugenics","morgan"], effects:["doublehelix"] },

{ id:"doublehelix", year:1953, date:"1953", era:5, cat:"biotech",
  title:"The Double Helix",
  wiki:"Nucleic acid double helix",
  summary:"Watson and Crick publish the double-helix structure of DNA — built crucially on Rosalind Franklin's X-ray data — revealing how genetic information is stored and copied, and how, by 1961, it is read as a code.",
  importance:"The twin helix, its strands complementary, instantly suggested how heredity is copied: unzip the two sides and each templates a new partner. Watson and Crick's 1953 model — leaning heavily on Rosalind Franklin's crystallography, her contribution long underacknowledged — turned the gene into readable, writable chemistry, and by 1961 researchers were cracking the code by which DNA triplets specify amino acids. It is the moment biology becomes an information science, the moment life became legible as code.",
  impact:{
    biotech:"The structure of DNA reveals how genes are stored, copied, and read.",
    computing:"Heredity is recast as digital information — a code in four letters.",
    society:"Franklin's sidelined contribution becomes a touchstone case of credit and gender in science." },
  causes:["dnacarrier","geneticsfield","morgan"], effects:["recombinantdna","dnacode","genetherapy"] },

{ id:"recombinantdna", year:1973, date:"1973", era:5, cat:"biotech",
  title:"Recombinant DNA: Genetic Engineering Is Born",
  wiki:"Recombinant DNA",
  summary:"Stanley Cohen and Herbert Boyer splice genes from one organism into another, creating the first recombinant DNA — and with it the literal ability to engineer living things.",
  importance:"Cohen and Boyer's technique let scientists cut a gene from one species and paste it, functioning, into another — bacteria could now be made to carry and express foreign DNA. Reading heredity had become writing it; genetic engineering was real. The power was so unprecedented that its own inventors would, within two years, call a halt to consider what they had unleashed — the rare case of a field pausing at the moment of its breakthrough.",
  impact:{
    biotech:"Genes can be cut and pasted between organisms — life becomes engineerable.",
    technology:"The foundational tool of the entire biotechnology industry is created.",
    society:"Humanity acquires the power to rewrite living things, with no rules yet for it." },
  causes:["doublehelix"], effects:["asilomar","ivf","chakrabarty"] },

{ id:"asilomar", year:1975, date:"1975–1976", era:5, cat:"biotech",
  title:"Asilomar: Science Pauses Itself",
  wiki:"Asilomar Conference on Recombinant DNA",
  summary:"Scientists voluntarily halt recombinant-DNA research and gather at Asilomar to write the first safety guidelines; in 1976 the NIH creates the Recombinant DNA Advisory Committee — the first formal government oversight of genetic research.",
  importance:"At Asilomar, the researchers who had just learned to engineer DNA imposed a moratorium on their own work and drafted containment rules before resuming — a near-unique act of pre-emptive self-regulation in the history of technology. The NIH then institutionalized it with the Recombinant DNA Advisory Committee, the first government body to oversee genetic research. Asilomar became the model invoked, and often found wanting, at every later genetic reckoning, from cloning to CRISPR.",
  impact:{
    biotech:"The field pauses to write its own safety rules before proceeding.",
    law:"The first formal government oversight of genetic engineering is established.",
    society:"Asilomar becomes the enduring template — and benchmark — for scientific self-governance." },
  causes:["recombinantdna"], effects:["dolly","crispr","geneediting2015"] },

{ id:"ivf", year:1978, date:"1978", era:5, cat:"biotech",
  title:"The First Test-Tube Baby",
  wiki:"Louise Brown",
  summary:"Louise Brown, conceived by in-vitro fertilization, is born in the UK — the first human conceived outside the body — and governments scramble to respond to a technology that has outpaced all law.",
  importance:"IVF moved conception itself into the laboratory, and Louise Brown's birth proved it worked, opening parenthood to millions who could not conceive naturally — and opening questions no law had anticipated about embryos, donors, and the limits of reproductive technology. It set the template for the genetic era's politics: a capability arrives, families embrace it, and ethics and regulation chase it years behind. Every later debate over embryo editing begins with the laboratory embryo IVF made ordinary.",
  impact:{
    biotech:"Human conception moves into the laboratory, controllable and observable.",
    law:"Regulators scramble to govern embryos, donors, and assisted reproduction after the fact.",
    society:"Millions gain a path to parenthood as the embryo becomes a contested object." },
  causes:["recombinantdna"], effects:["dolly","hejiankui"] },

{ id:"chakrabarty", year:1980, date:"1980", era:5, cat:["biotech","law"],
  title:"Diamond v. Chakrabarty: Patenting Life",
  wiki:"Diamond v. Chakrabarty",
  summary:"The U.S. Supreme Court rules that a genetically modified organism can be patented — that life, engineered, is intellectual property — opening the floodgates for the biotechnology industry.",
  importance:"Asked whether a man-made, oil-eating bacterium could be patented, the Court said yes: anything 'under the sun made by man,' including living things, was patentable. The ruling turned engineered organisms and, soon, genes themselves into ownable property, and the modern biotech industry — and its venture capital — rushed through the door it opened. It also set up the harder question the Court would not resolve until Myriad in 2013: whether a gene you merely isolated, rather than invented, could be owned.",
  impact:{
    biotech:"Engineered life becomes patentable intellectual property.",
    law:"The biotechnology industry gains the ownership framework it needs to commercialize.",
    society:"Living things enter the regime of property and profit." },
  causes:["recombinantdna"], effects:["myriadgenes","hgp"] },

{ id:"pcr", year:1983, date:"1983", era:5, cat:"biotech",
  title:"PCR: Copying DNA at Will",
  wiki:"Polymerase chain reaction",
  summary:"Kary Mullis devises the polymerase chain reaction, which amplifies a tiny trace of DNA into billions of copies — making forensics, diagnostics, and modern genetic research possible.",
  importance:"PCR solved a brutal practical limit: most samples held too little DNA to study. By cycling temperatures to copy a target sequence exponentially, it could turn a single hair, a drop of blood, or an ancient bone into analyzable material. It became the workhorse beneath DNA fingerprinting, disease testing, and genome sequencing — the amplifier that made the genetic age operational, and put DNA evidence into courtrooms and surveillance databases alike.",
  impact:{
    biotech:"Any trace of DNA can be amplified into a readable quantity.",
    surveillance:"Forensic DNA from the smallest sample becomes possible — and databanked.",
    technology:"PCR becomes the indispensable engine of diagnostics and sequencing." },
  causes:["doublehelix"], effects:["dnafingerprinting","hgp"] },

{ id:"dnafingerprinting", year:1984, date:"1984–1986", era:5, cat:"biotech",
  title:"DNA Fingerprinting",
  wiki:"DNA profiling",
  summary:"Alec Jeffreys discovers that DNA can identify an individual uniquely; within two years it resolves a murder case and immigration disputes, and enters the criminal courtroom — fusing genetics with surveillance and the state.",
  importance:"Jeffreys found that certain DNA regions vary enough between people to serve as a near-unique biological signature, and the technique moved with startling speed from lab to law: clearing one suspect and convicting another in a 1986 English murder case, settling immigration claims, and founding forensic genetics. It also founded the genetic surveillance state — the DNA database, the familial search, the discarded cup yielding a profile. Heredity became an identifier the state could collect and keep.",
  impact:{
    surveillance:"DNA becomes a unique biometric the state can collect, match, and store.",
    law:"Forensic DNA transforms criminal justice, exonerating and convicting alike.",
    biotech:"Individual identity is shown to be legible in the genome itself." },
  causes:["pcr"], effects:["hgp","gina"] },

{ id:"hgp", year:1990, date:"1990", era:5, cat:"biotech",
  title:"The Human Genome Project Begins",
  wiki:"Human Genome Project",
  summary:"An international project launches to sequence all 3.2 billion base pairs of human DNA — and uniquely dedicates 3–5% of its budget to studying the ethical, legal, and social implications, the first major science to build ethics in from the start.",
  importance:"The Human Genome Project set out to read the entire human genetic instruction set within fifteen years, an undertaking on the scale of the moon landing. Chastened by the eugenic past, its planners did something new: they funded the ELSI program to examine genetic discrimination, privacy, and ethics alongside the science itself — an explicit attempt to make the reckoning keep pace with the capability for once. Whether it succeeded is the open question the rest of this thread tests.",
  impact:{
    biotech:"A coordinated effort sets out to read the entire human genome.",
    law:"For the first time a major project funds the study of its own ethics from day one.",
    society:"The eugenic past forces genetics to confront discrimination and privacy in advance." },
  causes:["chakrabarty","pcr","dnafingerprinting"], effects:["genetherapy","hgpcomplete","gina"] },

{ id:"genetherapy", year:1990, date:"1990", era:5, cat:"biotech",
  title:"The First Gene Therapy",
  wiki:"Gene therapy",
  summary:"Four-year-old Ashanti DeSilva, born with a fatal immune disorder, becomes the first human treated by gene therapy — the first attempt to cure disease by correcting the genes themselves.",
  importance:"Born with ADA-SCID, a genetic immune deficiency, Ashanti DeSilva received cells engineered to carry a working copy of the missing gene — the first sanctioned attempt to treat illness at its genetic root rather than its symptoms. The promise was breathtaking and the road long and dangerous; an early patient's death later in the decade would force a hard reckoning with safety. But the principle was established: the engineered gene could be medicine, the lineage that leads to Casgevy.",
  impact:{
    biotech:"Disease is treated by correcting genes rather than managing symptoms.",
    society:"Genetic medicine's promise — and its risks — enter the clinic.",
    technology:"Engineered DNA is delivered into a living patient as therapy." },
  causes:["doublehelix","hgp"], effects:["casgevy"] },

{ id:"dolly", year:1996, date:"1996", era:6, cat:"biotech",
  title:"Dolly the Sheep",
  wiki:"Dolly (sheep)",
  summary:"The Roslin Institute clones Dolly, the first mammal grown from an adult cell — proving a differentiated cell can be reset to make a whole new organism, and triggering worldwide alarm over human cloning.",
  importance:"Dolly shattered a biological assumption: that an adult, specialized cell could never be turned back into a whole animal. If a sheep could be copied from a single udder cell, the public and politicians immediately asked, why not a human? The clone set off a global wave of cloning bans within a year, and made 'cloning' the era's emblem of science racing past society's comfort — the rehearsal for the gene-editing panics to come.",
  impact:{
    biotech:"An adult cell is shown to be reprogrammable into a whole new organism.",
    law:"Worldwide cloning bans follow within a year, racing to get ahead of the technology.",
    society:"Human cloning becomes the public's defining fear of unbounded biotechnology." },
  causes:["ivf","asilomar"], effects:["cloningbans","hejiankui"] },

{ id:"cloningbans", year:1997, date:"1997", era:6, cat:"biotech",
  title:"The World Bans Cloning",
  wiki:"Oviedo Convention",
  summary:"In one year: UNESCO declares the human genome the 'common heritage of mankind,' the Council of Europe's Oviedo Convention prohibits reproductive cloning and germline editing, and President Clinton bans human cloning in federally funded research.",
  importance:"Dolly provoked the fastest coordinated bioethical response in the genetic age: a UNESCO declaration framing the genome as humanity's shared heritage, a binding European convention against cloning and heritable genome editing, and a U.S. executive ban on federally funded cloning — all in 1997. It was a rare moment of regulation arriving almost with the technology rather than long after. Yet the patchwork was uneven across nations, and its germline prohibitions would be defied two decades later in a Shenzhen lab.",
  impact:{
    law:"Cloning and germline editing are prohibited across many states almost at once.",
    biotech:"The human genome is declared a shared heritage, not a free-for-all.",
    society:"For once, governance moves nearly in step with the capability it governs." },
  causes:["dolly"], effects:["hejiankui","geneediting2015"] },

{ id:"hgpcomplete", year:2003, date:"2000–2003", era:6, cat:"biotech",
  title:"The Genome Is Read",
  wiki:"Human Genome Project",
  summary:"The Human Genome Project announces a rough draft in 2000 (jointly hailed by Clinton and Blair) and completes the sequence in 2003, two years early — the full human genetic instruction set, now readable.",
  importance:"With the draft in 2000 and completion in 2003, humanity held, for the first time, the essentially complete sequence of its own DNA — three billion letters, finished ahead of schedule and amid a fierce public-versus-private race. It promised a new medicine built on genetic understanding, and it delivered the raw text on which everything after — cheap sequencing, genetic testing, CRISPR's targeting, AI-driven genomics — depends. The book of the human was open; learning to read it well would take far longer.",
  impact:{
    biotech:"The complete human genome sequence becomes available to science.",
    technology:"The reference genome underwrites all later genomic medicine and editing.",
    society:"The promise — and the hype — of genome-based medicine arrives." },
  causes:["hgp","chakrabarty"], effects:["myriadgenes","crispr","aigenomics"] },

{ id:"gina", year:2008, date:"2008", era:6, cat:"biotech",
  title:"GINA: A Shield Against Genetic Discrimination",
  wiki:"Genetic Information Nondiscrimination Act",
  summary:"The U.S. Genetic Information Nondiscrimination Act bars health insurers and employers from discriminating on genetic information — passing the Senate unanimously and the House 414–1, a direct answer to the eugenic past.",
  importance:"As cheap testing made everyone's genetic risks knowable, GINA pre-empted a new form of discrimination: it forbade health insurers and employers from using a person's DNA against them. Its near-unanimous passage reflected a rare bipartisan recognition — shadowed by the memory of Buck v. Bell — that genetic information must not become a basis for exclusion. Its limits (it does not cover life, disability, or long-term-care insurance) mark exactly where the genetic surveillance question remains open.",
  impact:{
    law:"Genetic discrimination by employers and health insurers is outlawed.",
    surveillance:"Limits are set on how a person's own DNA can be used against them.",
    society:"The eugenic past explicitly motivates a modern protective statute." },
  causes:["hgp","dnafingerprinting"], effects:["aigenomics"] },

{ id:"myriadgenes", year:2013, date:"2013", era:7, cat:["biotech","law"],
  title:"You Cannot Patent a Gene",
  wiki:"Association for Molecular Pathology v. Myriad Genetics",
  summary:"The U.S. Supreme Court rules unanimously that naturally occurring DNA sequences cannot be patented — overturning Myriad's monopoly on the BRCA breast-cancer genes and reshaping patient access to genetic testing.",
  importance:"Myriad Genetics had patented the BRCA1 and BRCA2 genes and used that monopoly to control — and price — testing for hereditary breast and ovarian cancer. The Court drew the line Chakrabarty had left blurred: a gene you merely isolate from nature is a product of nature, not an invention, and cannot be owned, though synthetic DNA can. The ruling broke the monopoly, multiplied affordable tests overnight, and set the terms on which genetic information stays a commons rather than a private holding.",
  impact:{
    law:"Naturally occurring genes are held unpatentable — a commons, not property.",
    biotech:"Competition and affordable genetic testing follow the broken monopoly.",
    society:"Access to one's own genetic risk information is widened by the courts." },
  causes:["chakrabarty","hgpcomplete"], effects:["aigenomics"] },

{ id:"crispr", year:2012, date:"2012", era:7, cat:"biotech",
  title:"CRISPR-Cas9: Editing the Code",
  wiki:"CRISPR gene editing",
  summary:"Jennifer Doudna and Emmanuelle Charpentier show CRISPR-Cas9 can be programmed to cut and edit any gene precisely and cheaply — democratizing genetic engineering and winning the 2020 Nobel Prize.",
  importance:"Adapting a bacterial immune system, Doudna and Charpentier turned gene editing from a painstaking specialty into a programmable, inexpensive tool any lab could wield — point it at a sequence and it cuts there. It collapsed the cost and difficulty of rewriting DNA, accelerating medicine, agriculture, and research at once, and earning the 2020 Nobel. It also made the oldest fear concrete: if editing any gene is this easy, editing a human embryo's is only a decision away — a line crossed within six years.",
  impact:{
    biotech:"Precise, cheap, programmable gene editing becomes available to ordinary labs.",
    technology:"The cost and difficulty of rewriting DNA collapse almost overnight.",
    society:"Editing the human germline shifts from theoretical to imminent." },
  causes:["doublehelix","asilomar","hgpcomplete"], effects:["geneediting2015","hejiankui","casgevy"] },

{ id:"geneediting2015", year:2015, date:"2015", era:7, cat:"biotech",
  title:"The Line Drawn at the Germline",
  wiki:"Human germline engineering",
  summary:"As Chinese researchers first edit (non-viable) human embryos with CRISPR, the International Summit on Human Gene Editing declares heritable germline editing 'irresponsible' given current knowledge and calls for restraint.",
  importance:"Within three years of CRISPR's debut, researchers had edited human embryos in the lab, and the field convened in Washington to draw a line: editing genes that would be inherited by future generations was, the summit concluded, irresponsible to attempt clinically with present understanding. It was Asilomar's logic invoked again — voluntary restraint at the threshold of a new power. The difference this time was that the tool was cheap and global, and a single researcher could ignore the consensus, as one soon would.",
  impact:{
    biotech:"Human embryos are edited in the lab, making the germline question concrete.",
    law:"The scientific community calls for a moratorium it cannot actually enforce.",
    society:"A global consensus line is drawn — and its enforceability immediately in doubt." },
  causes:["crispr","asilomar","cloningbans"], effects:["hejiankui"] },

{ id:"hejiankui", year:2018, date:"2018", era:7, cat:"biotech",
  title:"The First Gene-Edited Babies",
  wiki:"He Jiankui affair",
  summary:"He Jiankui announces the birth of twin girls whose CCR5 gene he edited as embryos — the first gene-edited humans, created without ethics approval and in defiance of global consensus. He is sentenced to three years in prison; the world condemns him.",
  importance:"He Jiankui crossed the line the field had explicitly drawn, editing the embryos of twin girls to confer HIV resistance and bringing them to birth — the first humans with deliberately altered, heritable genomes, produced with neither ethical approval nor scientific justification. The condemnation was near-universal, and a Chinese court imprisoned him, but the breach was permanent: the consensus had proven unenforceable against one determined actor with a cheap tool. It is the atlas's clearest proof that voluntary restraint cannot, alone, hold a democratized technology.",
  impact:{
    biotech:"Heritable human genome editing is performed and brought to birth.",
    law:"A criminal sentence follows, but only after the irreversible line is crossed.",
    society:"The limits of self-regulation against a cheap, global technology are exposed." },
  causes:["crispr","geneediting2015","cloningbans","ivf"], effects:["casgevy","aigenomics"] },

{ id:"casgevy", year:2023, date:"2023", era:7, cat:"biotech",
  title:"Casgevy: The First Approved CRISPR Cure",
  wiki:"Casgevy",
  summary:"After sickle-cell trials beginning in 2020, regulators approve Casgevy — the world's first CRISPR-based therapy — to treat sickle-cell disease and beta-thalassemia, turning gene editing from promise into medicine.",
  importance:"Just over a decade after CRISPR's debut, Casgevy became the first approved treatment built on it, editing patients' own blood stem cells to relieve the agony of sickle-cell disease and beta-thalassemia. It redeemed the promise opened by the first gene therapy in 1990 and vindicated the responsible side of the field even as He Jiankui's breach hung over it. The same tool that could be abused to edit embryos was now, lawfully and curatively, editing the sick — the two faces of genetic power, side by side.",
  impact:{
    biotech:"The first CRISPR therapy is approved, making gene editing real medicine.",
    technology:"A decade-old tool reaches the clinic as an approved cure.",
    society:"Gene editing's healing promise is realized alongside its demonstrated dangers." },
  causes:["crispr","genetherapy","hejiankui"], effects:["aigenomics"] },

{ id:"aigenomics", year:2024, date:"2024", era:7, cat:"biotech",
  title:"AI Meets the Genome",
  wiki:"Genomics",
  summary:"The EU AI Act adds provisions on AI used in genomics as the fusion of artificial intelligence with genetic data intensifies — promising faster discovery while opening new surveillance risks, with germline governance still fragmented and untreatied worldwide.",
  importance:"As AI systems learned to predict protein structures and mine genomes for risk, the two most powerful technologies in this atlas converged — and the EU AI Act became one of the first laws to grapple with AI applied to genetic data. The promise is faster cures; the peril is a new genetic surveillance, where models infer health, ancestry, and behavior from DNA at scale. Meanwhile no binding international treaty governs human germline editing, leaving the UK, EU, and China to diverge — the genetic thread ending exactly where the whole atlas does: capability racing ahead, governance fragmented and behind.",
  impact:{
    biotech:"AI accelerates genomic discovery and prediction at unprecedented scale.",
    surveillance:"Models inferring health and ancestry from DNA open a new frontier of genetic surveillance.",
    law:"Germline editing remains ungoverned by any binding treaty; national approaches diverge." },
  causes:["hgpcomplete","crispr","casgevy","gina","myriadgenes"], effects:["aiact"] }

);
