// SUPPLEMENT — quantum computing: a field that existed as pure theory for a decade before
// any hardware, became a national-security question the moment Shor showed it could break
// RSA, and is now racing the migration of the world's cryptography against its own progress.
// From Feynman's 1981 proposal through Google's supremacy claim, error-corrected logical
// qubits, and the 2024 NIST post-quantum standards. Cross-links the existing rsa, aes2001,
// publickeycrypto, shannon, colossus cards; cards that bear on cryptography are also tagged
// encryption. cat:"quantum" (+ encryption / law where they apply). Data only.
window.ATLAS_EVENTS.push(

{ id:"feynmanquantum", year:1981, date:"1980–1981", era:5, cat:["quantum","computing"],
  title:"Feynman Proposes the Quantum Computer",
  wiki:"Quantum computing", gallery:["Richard Feynman","Paul Benioff"],
  summary:"In a 1981 keynote, 'Simulating Physics with Computers,' Richard Feynman argues that only a computer built from quantum systems could efficiently simulate quantum physics — the lecture most cited as the field's origin. Paul Benioff and Yuri Manin had independently sketched quantum computation the year before.",
  importance:"Feynman reframed a frustration — classical computers choke trying to simulate quantum systems, whose possibilities explode exponentially — into a proposal: build the computer out of the same quantum stuff, and the hard simulation becomes natural. It was a profound inversion, suggesting that the universe's most counterintuitive physics could be harnessed as a computational resource. The talk launched a field that would spend a decade as pure theory before any machine existed.",
  impact:{
    computing:"A computer built from quantum systems is proposed to simulate quantum physics.",
    technology:"Quantum mechanics is reconceived as a computational resource.",
    society:"A new branch of computer science begins, a decade before any hardware." },
  causes:[], effects:["deutschquantum","shorsalgorithm"] },

{ id:"deutschquantum", year:1985, date:"1985", era:5, cat:["quantum","computing"],
  title:"Deutsch's Universal Quantum Computer",
  wiki:"David Deutsch", gallery:["Quantum Turing machine","Church–Turing thesis"],
  summary:"David Deutsch defines the universal quantum computer, proving theoretically that such a machine could simulate any physical system — the formal, mathematical foundation that turns Feynman's intuition into a rigorous model of computation.",
  importance:"Deutsch supplied the theory Feynman's proposal lacked, formalizing the quantum Turing machine and showing it was a universal computer in the deepest sense — capable, in principle, of any computation and of simulating any physical process. This put quantum computing on the same rigorous footing as classical computer science and made it possible to ask precise questions about what such a machine could do faster. The answers, when they came, would shake cryptography to its foundations.",
  impact:{
    computing:"The universal quantum computer is given a rigorous mathematical definition.",
    technology:"Quantum computing gains the formal footing of classical computer science.",
    society:"Precise questions about quantum speedups become askable." },
  causes:["feynmanquantum"], effects:["shorsalgorithm","groversalgorithm"] },

{ id:"shorsalgorithm", year:1994, date:"1994", era:6, cat:["quantum","encryption","computing"],
  title:"Shor's Algorithm Threatens RSA",
  wiki:"Shor's algorithm", gallery:["Peter Shor","Integer factorization"],
  summary:"Peter Shor introduces a quantum algorithm that factors large integers exponentially faster than any known classical method. Because the security of RSA rests on factoring being hard, a large enough quantum computer running Shor's algorithm could break the encryption protecting nearly all internet traffic — the moment quantum computing becomes a national-security issue.",
  importance:"Shor's result transformed quantum computing from a physicist's curiosity into a strategic threat: the same machine Feynman imagined for simulating chemistry could, at sufficient scale, unravel the public-key cryptography that secures banking, commerce, and state secrets. Overnight the field acquired urgency, funding, and classification interest, and the race began — to build the machine, and to replace the cryptography it would break. Every later milestone is measured against the question Shor posed: how close are we to a computer that can run it?",
  impact:{
    encryption:"A quantum algorithm could break RSA, the basis of most internet security.",
    government:"Quantum computing becomes a national-security priority overnight.",
    computing:"An exponential quantum speedup over classical methods is proven for a real problem." },
  causes:["feynmanquantum","deutschquantum","rsa"], effects:["nistpqc","willowchip","groversalgorithm"] },

{ id:"groversalgorithm", year:1996, date:"1995–1996", era:6, cat:["quantum","computing"],
  title:"The First Qubits and Grover's Search",
  wiki:"Grover's algorithm", gallery:["Lov Grover","Quantum logic gate"],
  summary:"Lov Grover introduces a quantum algorithm giving a quadratic speedup for searching unstructured data — proof that quantum advantage extends beyond cryptography — while at NIST the first two-qubit quantum logic gate moves the field from theory into the laboratory.",
  importance:"Grover's algorithm showed that Shor's was not a one-off: quantum computers offered general advantages, here a broad speedup for search that also forces longer symmetric encryption keys. In the same period the first working quantum gate turned the abstract qubit into laboratory hardware, beginning the long, painstaking effort to build real machines. Together they marked the field's passage from blackboard to bench.",
  impact:{
    computing:"A general quantum speedup for search is demonstrated beyond cryptography.",
    technology:"The first two-qubit gate brings quantum computing into the laboratory.",
    encryption:"Grover's speedup forces longer symmetric keys to stay secure." },
  causes:["deutschquantum","shorsalgorithm"], effects:["ibmshor15","googlesupremacy"] },

{ id:"ibmshor15", year:2001, date:"2001", era:6, cat:["quantum","computing"],
  title:"Factoring 15 on a Quantum Computer",
  wiki:"Shor's algorithm", gallery:["IBM","Nuclear magnetic resonance quantum computer"],
  summary:"IBM runs Shor's algorithm on a 7-qubit quantum computer to factor the number 15 — a tiny result, but the first hardware demonstration that the algorithm threatening RSA actually works on a real quantum machine.",
  importance:"Factoring 15 was almost comically modest, but the point was the proof of principle: Shor's algorithm was not merely a theorem but something a physical quantum computer could execute. It made the cryptographic threat tangible and set the benchmark the field would chase — scaling from factoring 15 to factoring the thousand-bit numbers that secure real systems. The vast gap between the two is the margin of safety that post-quantum cryptography races to close before it disappears.",
  impact:{
    computing:"Shor's algorithm runs on real quantum hardware for the first time.",
    encryption:"The cryptographic threat is shown to be physical, not just theoretical.",
    technology:"The benchmark of scaling toward useful factoring is set." },
  causes:["shorsalgorithm","groversalgorithm"], effects:["dwave","googlesupremacy"] },

{ id:"dwave", year:2011, date:"2007–2011", era:7, cat:["quantum","computing"],
  title:"D-Wave and the First Commercial Quantum Machine",
  wiki:"D-Wave Systems", gallery:["Quantum annealing","Lockheed Martin"],
  summary:"D-Wave ships the first commercially sold quantum computer — a quantum annealer aimed at optimization problems, bought by the likes of Lockheed Martin — even as physicists argue for years over whether the machine delivers a genuine quantum speedup.",
  importance:"D-Wave forced the field's first reckoning with commercialization and hype: a real product sold to real customers, wrapped in a long, public dispute over whether it was 'truly quantum' in any useful sense. Its annealer took a different path from the gate-model machines most researchers pursued, targeting optimization rather than Shor-style algorithms. Whatever the verdict on its speedups, D-Wave marked the moment quantum computing left the lab for the marketplace, vendor claims and skeptics' caveats included.",
  impact:{
    computing:"The first commercial quantum computer is sold, sparking a lasting 'is it quantum?' debate.",
    technology:"Quantum annealing offers an alternative to the gate model for optimization.",
    society:"Quantum computing enters the marketplace, hype and skepticism together." },
  causes:["ibmshor15"], effects:["ibmquantumcloud","googlesupremacy"] },

{ id:"ibmquantumcloud", year:2016, date:"2016", era:7, cat:["quantum","computing"],
  title:"Quantum Computing in the Cloud",
  wiki:"IBM Quantum Platform", gallery:["IBM","Cloud computing"],
  summary:"IBM launches the IBM Quantum Experience, putting a real quantum processor on the internet for anyone to program through a web browser — the first cloud-accessible quantum computer, democratizing access to hardware that had been confined to a handful of elite labs.",
  importance:"By exposing real quantum hardware over the cloud, IBM turned quantum computing from a resource a few institutions owned into a service any researcher, student, or curious programmer could use. It seeded a global community of quantum developers and made experimentation cheap, accelerating the field's growth and its talent pipeline. The move mirrored what cloud computing did for classical infrastructure: access, not ownership, became the path to the machine.",
  impact:{
    computing:"Real quantum hardware becomes accessible to anyone over the cloud.",
    society:"A global community of quantum programmers forms around shared access.",
    technology:"The cloud-service model accelerates quantum experimentation and talent." },
  causes:["dwave"], effects:["googlesupremacy","ibmroadmap"] },

{ id:"googlesupremacy", year:2019, date:"October 2019", era:7, cat:["quantum","computing"],
  title:"Google Claims Quantum Supremacy",
  wiki:"Quantum supremacy", gallery:["Sycamore processor","Google"],
  summary:"Google announces that its 53-qubit Sycamore processor performed a contrived calculation in 200 seconds that it claims would take the best classical supercomputer 10,000 years. IBM disputes the figure and the task has no practical use — but the moment makes quantum computing's potential undeniable to the world.",
  importance:"Quantum supremacy was a milestone of demonstration rather than utility: the chosen problem was useless, the classical comparison was contested, but for the first time a quantum machine appeared to do something no classical computer feasibly could. It was the field's 'flight at Kitty Hawk' moment — short, impractical, and epochal — proving the hardware had crossed a genuine threshold. The dispute with IBM also set the tone for an era in which every quantum claim would be scrutinized as much as celebrated.",
  impact:{
    computing:"A quantum machine performs a task claimed infeasible for any classical computer.",
    technology:"Quantum hardware crosses a genuine threshold, however impractical the task.",
    society:"Quantum computing's potential becomes undeniable — and every claim, contested." },
  causes:["groversalgorithm","ibmquantumcloud"], effects:["ibmroadmap","willowchip"] },

{ id:"ibmroadmap", year:2021, date:"2021–2025", era:7, cat:["quantum","computing"],
  title:"IBM's Scaling Roadmap",
  wiki:"IBM Quantum Platform", gallery:["Superconducting quantum computing","Qubit"],
  summary:"IBM publishes the most detailed public quantum scaling plan — Eagle (127 qubits, 2021), Osprey (433, 2022), Condor (1,121, 2023), toward thousands more — and by 2025 connects over a thousand physical qubits with thousands of gates, as the field shifts focus from raw qubit count to error correction.",
  importance:"IBM's roadmap imposed a cadence on a field long driven by sporadic breakthroughs, publicly committing to a qubit-count trajectory and largely hitting it, which made progress legible and investable. But the rising numbers also exposed the real bottleneck: physical qubits are fragile and error-prone, so scaling raw count is not enough without error correction. The roadmap thus both demonstrated momentum and reframed the goal — from many noisy qubits to fewer reliable, error-corrected ones.",
  impact:{
    computing:"A public, largely-met scaling cadence makes quantum progress legible.",
    technology:"The bottleneck shifts from qubit count to error correction.",
    society:"Quantum progress becomes a roadmap to invest and plan against." },
  causes:["ibmquantumcloud","googlesupremacy"], effects:["logicalqubits","willowchip"] },

{ id:"logicalqubits", year:2023, date:"2023", era:7, cat:["quantum","computing"],
  title:"From Physical to Logical Qubits",
  wiki:"Quantum error correction", gallery:["Logical qubit","Neutral-atom quantum computer"],
  summary:"QuEra and Harvard demonstrate a 48-logical-qubit system — bundling fragile physical qubits into error-corrected logical ones — marking the shift from counting noisy physical qubits to building the stable, error-corrected qubits that practical quantum computing actually requires.",
  importance:"The leap to logical qubits addressed the field's central obstacle: individual qubits are so error-prone that useful computation requires many of them woven together into a single, error-corrected unit that behaves reliably. Demonstrating dozens of logical qubits showed this error-correction scheme working at meaningful scale, the prerequisite for any quantum computer that can run long algorithms like Shor's. It reframed the finish line — not millions of raw qubits, but enough robust logical ones.",
  impact:{
    computing:"Error-corrected logical qubits are demonstrated at meaningful scale.",
    technology:"The path to running long algorithms shifts to robust logical qubits.",
    society:"The goalposts move from raw qubit count to error-corrected reliability." },
  causes:["ibmroadmap"], effects:["willowchip","quantumthreat"] },

{ id:"willowchip", year:2024, date:"2024–2025", era:7, cat:["quantum","computing"],
  title:"Willow and Error Correction That Scales",
  wiki:"Quantum error correction", gallery:["Google","Topological quantum computer"],
  summary:"Google's Willow chip demonstrates error-corrected quantum computation that improves as the qubit count grows — the first sign of the scaling behavior fault-tolerant quantum computing needs — while Microsoft unveils its contested Majorana 1 chip claiming topological qubits, and multiple firms report practical quantum advantage on chemistry and optimization tasks.",
  importance:"Willow showed the crucial trend reversed: adding qubits made the error-corrected system more reliable rather than less, the scaling signature that fault-tolerant quantum computing has always required. Alongside competing architectural bets — superconducting, neutral-atom, and Microsoft's disputed topological qubits — it suggested the field entering a 'quantum utility' era, where real machines begin outperforming classical ones on narrow but genuine problems. The distance to a Shor-capable machine narrowed from 'maybe never' toward a horizon measured in years.",
  impact:{
    computing:"Error correction is shown to improve as qubit count grows — the fault-tolerance signature.",
    technology:"Rival architectures vie as practical quantum advantage appears on real tasks.",
    society:"A 'quantum utility' era begins, narrowing the road to a Shor-capable machine." },
  causes:["googlesupremacy","ibmroadmap","logicalqubits","shorsalgorithm"], effects:["quantumthreat"] },

{ id:"quantumthreat", year:2026, date:"2024–2026", era:7, cat:["quantum","encryption","law"],
  title:"The Quantum Threat and 'Harvest Now, Decrypt Later'",
  wiki:"Post-quantum cryptography", gallery:["Harvest now, decrypt later","National Institute of Standards and Technology"],
  summary:"With NIST finalizing the first post-quantum cryptography standards in 2024, the world begins migrating off RSA — because adversaries are assumed to be harvesting encrypted data now to decrypt it once quantum computers mature. The threat is estimated 10–15 years away, but the migration must begin immediately, since today's secrets can be unlocked tomorrow.",
  importance:"The quantum threat is the rare security problem that demands action long before the danger arrives: data captured and stored today — diplomatic cables, health records, state secrets — can be decrypted the moment a Shor-capable machine exists, so the clock is already running. NIST's 2024 standards gave the world quantum-resistant algorithms to migrate to, but swapping out the cryptography embedded in every system is a decade-long undertaking. It is the point where this tab and the encryption tab fuse: quantum computing's greatest near-term consequence is the obsolescence of the cryptography that secures the modern world.",
  impact:{
    encryption:"The world begins migrating off RSA to NIST's post-quantum standards.",
    law:"Standards bodies and governments mandate a decade-long cryptographic migration.",
    government:"'Harvest now, decrypt later' makes today's encrypted secrets a future liability." },
  causes:["shorsalgorithm","willowchip","nistpqc"], effects:[] }

);
