// SUPPLEMENT — the long history of secret writing, from Egyptian tomb glyphs and the
// Spartan scytale to post-quantum cryptography. The atlas already holds the modern crypto
// run as exhibits (publickeycrypto, rsa, aes2001, signalprotocol, netscapessl, the export
// wars, clipperchip, earnit, shannon, snowden); those are re-tagged into the encryption
// category elsewhere. This file fills the gaps: the ancient and mechanical ciphers, the
// codebreaking that changed two world wars, DES, BULLRUN, the second crypto war, Chat
// Control, and the NIST post-quantum standards. cat:"encryption" (+ law where they apply).
window.ATLAS_EVENTS.push(

// ===== I. THE ANCIENT AND CLASSICAL CIPHERS =====
{ id:"scytale", year:-400, date:"c. 400 BCE", era:1, cat:"encryption",
  title:"The Spartan Scytale",
  wiki:"Scytale", gallery:["Sparta","Transposition cipher"],
  summary:"Sparta uses the scytale — a wooden staff around which a strip of leather is wound, the message written along it so that, unwound, the letters fall into meaningless order — the first known physical encryption device, readable only by someone with a rod of matching diameter.",
  importance:"The scytale embodied a foundational idea of cryptography: secrecy carried not by hiding the message but by transforming its order, recoverable only with the right key — here, a rod of the correct thickness. It is among the earliest transposition ciphers, scrambling position rather than substituting symbols, and it shows military communication and its concealment evolving together from antiquity. The staff is crude, but the principle — a shared secret that turns gibberish back into meaning — runs straight to the present.",
  impact:{
    government:"Military commands gain a method of concealment requiring a shared physical key.",
    technology:"Transposition — scrambling letter order — is established as a cipher principle.",
    communications:"Secrecy is achieved by transforming a message, recoverable only with the key." },
  causes:[], effects:["caesarcipher","alkindi"] },

{ id:"caesarcipher", year:-50, date:"c. 50 BCE", era:1, cat:"encryption",
  title:"The Caesar Cipher",
  wiki:"Caesar cipher", gallery:["Julius Caesar","Substitution cipher"],
  summary:"Julius Caesar encodes military messages by shifting each letter a fixed number of places down the alphabet — the first widely documented substitution cipher. Trivial to break by frequency analysis once the method is known, it is effective only while the technique itself stays secret.",
  importance:"The Caesar cipher introduced substitution — replacing each symbol with another by a fixed rule — the other great branch of classical cryptography alongside transposition. Its weakness became the field's enduring lesson: security that depends on keeping the method secret collapses the moment the method is known, a principle later inverted into Kerckhoffs's rule that only the key, not the algorithm, should be secret. Simple as it is, the shift cipher is the conceptual seed of every substitution scheme that followed.",
  impact:{
    government:"A simple letter-shift secures Roman military dispatches.",
    technology:"Substitution joins transposition as a core cipher principle.",
    communications:"The fragility of secret-method security foreshadows the modern key/algorithm split." },
  causes:["scytale"], effects:["alkindi","alberti"] },

{ id:"alkindi", year:850, date:"c. 850 CE", era:1, cat:"encryption",
  title:"Al-Kindi Invents Cryptanalysis",
  wiki:"Al-Kindi", gallery:["Frequency analysis","Cryptanalysis"],
  summary:"The Arab polymath al-Kindi writes the first known treatise on cryptanalysis, introducing frequency analysis — using the characteristic frequencies of letters in a language to break substitution ciphers. From this point, encryption and codebreaking evolve as adversaries.",
  importance:"Al-Kindi turned cipher-breaking into a science, observing that every language uses some letters far more than others, so a substitution cipher leaks its own solution through these telltale frequencies. His treatise made plain that the simple substitution ciphers ruling the ancient world were fundamentally broken, forcing cryptography toward more complex schemes. The eternal contest of this tab — every cipher eventually met by a method to break it — begins formally with al-Kindi.",
  impact:{
    technology:"Frequency analysis is invented, breaking simple substitution ciphers.",
    communications:"Cryptography and cryptanalysis become permanent adversaries.",
    society:"The ancient world's ciphers are shown to be fundamentally insecure." },
  causes:["caesarcipher"], effects:["alberti","vigenere"] },

{ id:"alberti", year:1466, date:"1466", era:2, cat:"encryption",
  title:"Alberti's Cipher Disk",
  wiki:"Leon Battista Alberti", gallery:["Polyalphabetic cipher","Cipher disk"],
  summary:"Leon Battista Alberti invents the polyalphabetic cipher and the first mechanical cipher device — the cipher disk, two concentric rotating alphabets — letting a message switch substitution alphabets as it goes and defeating the frequency analysis that broke earlier ciphers.",
  importance:"Alberti's disk answered al-Kindi: by rotating between multiple cipher alphabets within a single message, it flattened the letter-frequency patterns that cryptanalysts exploited, making the cipher far harder to break. It was also the first mechanical encryption device, beginning the lineage of cipher machines that would culminate in Enigma. Polyalphabetic substitution dominated serious cryptography for the next four centuries.",
  impact:{
    technology:"Polyalphabetic substitution and the first cipher machine defeat frequency analysis.",
    communications:"Ciphers gain resistance to the codebreaker's chief tool.",
    society:"The age of mechanical cipher devices begins." },
  causes:["alkindi"], effects:["vigenere","enigma"] },

{ id:"vigenere", year:1553, date:"1553", era:2, cat:"encryption",
  title:"The Vigenère Cipher",
  wiki:"Vigenère cipher", gallery:["Polyalphabetic cipher","Charles Babbage"],
  summary:"The Vigenère cipher chains multiple Caesar shifts under a repeating keyword, and is reputed unbreakable — 'le chiffre indéchiffrable' — for three centuries, until Charles Babbage and Friedrich Kasiski crack it in the 1800s by detecting the key's repetition.",
  importance:"Vigenère's cipher was the most famous polyalphabetic scheme, so resistant to frequency analysis that it carried a reputation for invincibility for some 300 years. Its eventual fall — Babbage and Kasiski exploiting the periodic repetition of the keyword — was a landmark of cryptanalysis and a recurring moral of this tab: 'unbreakable' is a claim with an expiration date. The contest between cipher and codebreaker only sharpened.",
  impact:{
    technology:"A keyword-driven polyalphabetic cipher resists frequency analysis for centuries.",
    communications:"The cipher reputed 'indecipherable' eventually yields to new cryptanalysis.",
    society:"The lesson recurs: every 'unbreakable' cipher is eventually broken." },
  causes:["alberti"], effects:["enigma","shannon"] },

// ===== II. THE CODEBREAKING WARS =====
{ id:"zimmermanntelegram", year:1917, date:"1917", era:4, cat:["encryption","law"],
  title:"The Zimmermann Telegram",
  wiki:"Zimmermann Telegram", gallery:["Room 40","World War I"],
  summary:"British intelligence intercepts and decrypts a secret German cable proposing a military alliance with Mexico against the United States. The decryption is shared with Washington and helps bring the U.S. into World War I — the first time cryptanalysis visibly changes the course of history.",
  importance:"The Zimmermann Telegram demonstrated that breaking an enemy's cipher could swing a world war: a single decrypted message, revealing Germany's offer to Mexico, inflamed American opinion and helped end U.S. neutrality. It established signals intelligence as a strategic instrument of statecraft and showed that the security of diplomatic communication was now a matter of national survival. Codebreaking had moved from clever pastime to decisive weapon.",
  impact:{
    government:"A decrypted cable helps bring the United States into World War I.",
    law:"Signals intelligence becomes a recognized instrument of statecraft.",
    communications:"The security of diplomatic ciphers becomes a question of national survival." },
  causes:["vigenere"], effects:["enigma","onetimepad"] },

{ id:"onetimepad", year:1917, date:"1917 / 1949", era:4, cat:"encryption",
  title:"The One-Time Pad",
  wiki:"One-time pad", gallery:["Gilbert Vernam","Information-theoretic security"],
  summary:"Gilbert Vernam devises the one-time pad — a cipher using a truly random key as long as the message, used only once — later proven by Claude Shannon to be mathematically unbreakable. Impractical for general use, it secures the most sensitive links, including the Cold War Washington–Moscow hotline.",
  importance:"The one-time pad is the lone cipher with perfect, provable secrecy: if the key is truly random, as long as the message, and never reused, the ciphertext reveals literally nothing about the plaintext. Shannon's proof made it the theoretical gold standard against which all other encryption is measured. Its impracticality — generating and distributing mountains of one-use key — is exactly why the rest of cryptography exists, chasing strong-enough security without the pad's impossible demands.",
  impact:{
    technology:"A provably unbreakable cipher is devised — perfect secrecy, at an impractical cost.",
    communications:"The most sensitive links, like the Cold War hotline, adopt it.",
    society:"The theoretical ceiling of encryption is established for all others to approach." },
  causes:["zimmermanntelegram"], effects:["enigma","shannon"] },

{ id:"enigma", year:1941, date:"1939–1945", era:4, cat:"encryption",
  title:"Enigma and Bletchley Park",
  wiki:"Enigma machine", gallery:["Cryptanalysis of the Enigma","Bletchley Park","Bombe"],
  summary:"Germany encrypts its military communications with the electromechanical Enigma machine; Polish mathematicians first crack it in the 1930s, and British codebreakers at Bletchley Park, led by Alan Turing, automate the attack with the Bombe. Allied reading of Nazi traffic is estimated to have shortened the war by years — and stays secret until the 1970s.",
  importance:"Enigma was the culmination of the mechanical-cipher lineage Alberti began, and its breaking was the greatest codebreaking feat in history, turning intercepted German orders into an Allied advantage across the war. The effort built at Bletchley — industrialized, mathematical, machine-assisted — was also the crucible of modern computing, with Turing's work pointing directly toward the programmable machine. That the triumph stayed classified for decades shows how completely cryptanalysis had become an instrument of state power.",
  impact:{
    government:"Reading Nazi communications is estimated to have shortened World War II by years.",
    technology:"Machine-assisted codebreaking at Bletchley helps birth modern computing.",
    communications:"The mechanical-cipher era reaches its peak and its decisive defeat." },
  causes:["alberti","onetimepad","vigenere"], effects:["shannon","des","publickeycrypto"] },

// ===== III. THE STANDARDS AND THE CRYPTO WARS =====
{ id:"des", year:1977, date:"1977", era:5, cat:["encryption","law"],
  title:"DES: The First Public Standard",
  wiki:"Data Encryption Standard", gallery:["National Bureau of Standards","Brute-force attack"],
  summary:"NIST's predecessor adopts the Data Encryption Standard as the U.S. government's symmetric cipher — the first public, standardized encryption algorithm. Its 56-bit key, reportedly shortened at the NSA's suggestion, is eventually brute-forced in under a day in 1997, exposing the politics of key length.",
  importance:"DES was a watershed: a publicly published, openly standardized cipher that let banks and businesses encrypt to a common government-blessed algorithm, seeding the modern cryptographic industry. But its history also exposed the state's fingerprints on civilian cryptography — a key length apparently trimmed to keep the cipher within reach of government codebreakers, and a public brute-force crack two decades later that proved the concern real. DES framed the central political question of modern encryption: how strong will the government let everyone else's cryptography be?",
  impact:{
    technology:"The first public, standardized encryption algorithm is adopted.",
    law:"A key length reportedly trimmed at the NSA's urging exposes the politics of strength.",
    society:"A government-blessed cipher seeds the commercial cryptography industry." },
  causes:["enigma","shannon"], effects:["aes2001","clipperchip","bullrun"] },

{ id:"bullrun", year:2013, date:"2013", era:7, cat:["encryption","law"],
  title:"BULLRUN: Sabotaging the Standards",
  wiki:"Bullrun (decryption program)", gallery:["Edward Snowden","Dual_EC_DRBG"],
  summary:"Snowden's disclosures reveal BULLRUN — an NSA program to deliberately weaken commercial encryption standards and insert backdoors into products — including evidence that the NIST-endorsed Dual_EC_DRBG random-number generator contained an NSA backdoor. Trust in standards bodies and government involvement in cryptography collapses.",
  importance:"BULLRUN confirmed cryptographers' deepest fear: that the government had not merely tried to break encryption from outside but had corrupted the standards everyone relied on from within, planting a backdoor in a NIST-blessed algorithm. The revelation poisoned trust in official cryptographic standards and in any government role in setting them, and it pushed the industry to double down on open, auditable, end-to-end encryption beyond the state's reach. It is the betrayal that radicalized the field toward the encrypt-everything posture of the 2010s.",
  impact:{
    surveillance:"The NSA is shown to have weakened commercial standards and backdoored a NIST algorithm.",
    law:"Trust in government-set cryptographic standards collapses.",
    society:"The industry pivots hard toward open, end-to-end encryption beyond state reach." },
  causes:["des","snowden"], effects:["applefbi","tls13"] },

{ id:"applefbi", year:2016, date:"2014–2016", era:7, cat:["encryption","law"],
  title:"Apple vs. the FBI: The Second Crypto War",
  wiki:"Apple–FBI encryption dispute", gallery:["San Bernardino","FBI"],
  summary:"After Apple and Google enable full-device encryption by default, the FBI warns of 'going dark' and, following the 2016 San Bernardino shooting, obtains a court order demanding Apple build a backdoor into iPhone encryption. Apple refuses; the FBI pays a third party to break into the specific phone; the legal question is left unresolved.",
  importance:"The Apple–FBI standoff was the second Crypto War's defining battle, fought not over export law but over whether a company could be compelled to undermine the security of its own products. Apple's refusal — framed as protecting all users, since a backdoor for one phone is a backdoor for every phone — drew the industry's line in public. That the government ultimately broke the phone by other means, leaving the legal precedent unsettled, ensured the fight would simply recur in new forms, from EARN IT to Chat Control.",
  impact:{
    law:"The government tries to compel a company to backdoor its own encryption; the question is left open.",
    society:"Apple's refusal frames default-on device encryption as protecting all users at once.",
    surveillance:"'Going dark' becomes the state's rallying cry against ubiquitous encryption." },
  causes:["bullrun"], effects:["tls13","chatcontrol"] },

{ id:"tls13", year:2018, date:"2018", era:7, cat:"encryption",
  title:"TLS 1.3 Secures the Web",
  wiki:"Transport Layer Security", gallery:["HTTPS","Forward secrecy"],
  summary:"TLS 1.3 — the latest version of the protocol securing web traffic, the successor to SSL — is released, stripping out the weak and broken algorithms accumulated over decades and making encrypted connections faster and safer. It secures virtually every HTTPS connection on the modern web.",
  importance:"TLS 1.3 was the quiet, essential modernization of the internet's security layer, removing the legacy ciphers and handshakes that attackers exploited and enforcing forward secrecy so that capturing today's traffic cannot unlock yesterday's. Forged in the post-Snowden climate of distrust, it reflected a hardened consensus that encryption should be strong, fast, and on by default everywhere. It is the protocol silently protecting nearly every secure connection a person makes today.",
  impact:{
    technology:"The web's encryption protocol is modernized, dropping weak legacy algorithms.",
    communications:"Forward secrecy and faster handshakes secure virtually all HTTPS traffic.",
    society:"Strong, default-on encryption becomes the baseline of the web." },
  causes:["bullrun","applefbi","netscapessl"], effects:["chatcontrol","nistpqc"] },

{ id:"chatcontrol", year:2022, date:"2022–2026", era:7, cat:["encryption","law"],
  title:"Chat Control: Scanning Encrypted Messages",
  wiki:"Regulation to Prevent and Combat Child Sexual Abuse", gallery:["Client-side scanning","Signal Messenger"],
  summary:"The EU's 'Chat Control' proposal would require messaging platforms to scan all messages for child-sexual-abuse material using client-side scanning — technically equivalent to breaking end-to-end encryption. Cryptographers and Signal (which threatens to leave the EU) oppose it; blocked in Council in 2024, revived in 2025, and unresolved as of 2026.",
  importance:"Chat Control is the European front of the perpetual encryption war, attempting to preserve the appearance of end-to-end encryption while scanning messages on the device before they are encrypted — a backdoor by another name. Like the U.S. EARN IT Act, it uses the unanswerable cause of fighting CSAM to mandate the inspection of private communication, and like the Apple–FBI fight it has united cryptographers and privacy-focused firms in opposition. Its repeated revival shows that the fundamental conflict — guaranteed access versus genuine privacy — admits no compromise and never ends.",
  impact:{
    law:"The EU repeatedly proposes mandatory scanning of encrypted messages for CSAM.",
    surveillance:"Client-side scanning would break end-to-end encryption while appearing to preserve it.",
    society:"Cryptographers and Signal oppose it; the guaranteed-access fight reaches Europe." },
  causes:["applefbi","tls13","earnit"], effects:["nistpqc"] },

{ id:"nistpqc", year:2024, date:"August 2024", era:7, cat:["encryption","law"],
  title:"The Post-Quantum Standards",
  wiki:"Post-quantum cryptography", gallery:["National Institute of Standards and Technology","Lattice-based cryptography"],
  summary:"NIST finalizes the first post-quantum cryptography standards — FIPS 203, 204, and 205 — quantum-resistant algorithms to replace RSA and elliptic-curve cryptography. Three decades after Shor's 1994 algorithm made them necessary, the global migration of cryptographic infrastructure away from quantum-vulnerable schemes can formally begin.",
  importance:"The NIST post-quantum standards are the cryptographic world's answer to the quantum threat, providing vetted algorithms whose security rests on math believed hard even for quantum computers. Their release starts a migration projected to take ten to twenty years — replacing the public-key cryptography woven into virtually every secure system on earth — driven by the 'harvest now, decrypt later' fear that encrypted data stolen today will be readable once quantum machines mature. It closes the loop opened by Shor and binds the encryption story to the quantum one: the cipher race's newest front is a race against a computer that does not yet exist.",
  impact:{
    encryption:"Quantum-resistant algorithms are standardized to replace RSA and elliptic-curve crypto.",
    law:"Governments and standards bodies launch a decade-long cryptographic migration.",
    government:"'Harvest now, decrypt later' makes the migration urgent before the threat matures." },
  causes:["shorsalgorithm","tls13","chatcontrol","rsa"], effects:["quantumthreat"] }

);
