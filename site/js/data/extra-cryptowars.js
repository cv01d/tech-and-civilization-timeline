// SUPPLEMENT — the Crypto Wars: the United States government's decade-long attempt to
// keep strong encryption out of ordinary hands, and its defeat. From PGP and the Clipper
// Chip through the export-grade fiasco to the 1999 liberalization that made secure
// e-commerce globally deployable — and the second front (EARN IT, going-dark) that
// reopened the same fight through liability law. Cross-links the existing pgp, calea,
// section230, snowden, prism cards rather than duplicating them. cat:"internet"
// (also law / surveillance facets). Round one: data only — images to follow.
window.ATLAS_EVENTS.push(

{ id:"clipperchip", year:1993, date:"1993", era:6, cat:["internet","law","encryption"],
  title:"The Clipper Chip",
  wiki:"Clipper chip",
  summary:"The NSA unveils the Clipper Chip — a government-designed encryption chip for consumer telephones that would give users strong encryption while depositing a copy of every chip's key with the government ('key escrow'), guaranteeing law-enforcement access. The entire technology industry and civil-liberties community line up against it.",
  importance:"Clipper was the purest statement of the surveillance state's bargain: citizens could have strong cryptography so long as the government kept a spare key to all of it. It proposed to build lawful-access backdoors into the hardware of everyday communication, and it united an unlikely coalition — technologists, privacy advocates, and industry — in opposition, on grounds of security, economics, and liberty alike. The fight over Clipper framed the central question of the digital age: whether secure communication for ordinary people is compatible with guaranteed government access. The answer the engineers gave was no.",
  impact:{
    surveillance:"The state proposes built-in key escrow — a spare key to all encrypted speech.",
    law:"Lawful-access backdoors are proposed as a hardware standard for consumer devices.",
    society:"Industry, technologists, and civil-liberties groups unite against mandated escrow." },
  causes:["pgp"], effects:["blazeclipper","calea"] },

{ id:"blazeclipper", year:1994, date:"1994", era:6, cat:["internet","law","encryption"],
  title:"Matt Blaze Breaks Clipper",
  wiki:"Clipper chip",
  summary:"Bell Labs researcher Matt Blaze discovers a fundamental flaw in the Clipper system — the escrow mechanism could be defeated, letting a device use Clipper's strong encryption while evading the very key-access it was built to guarantee. The technical failure, combined with political opposition, kills the proposal.",
  importance:"Blaze's result was decisive because it was technical, not political: the government's own design could not deliver the guaranteed access that was its entire justification. It became the canonical demonstration of a principle cryptographers would repeat for thirty years — that a backdoor weakens a system for everyone and cannot be reliably reserved for the good guys. Clipper died, and with it the fantasy of a clean escrow system, though the surveillance-by-design impulse simply migrated from hardware to law.",
  impact:{
    technology:"A built-in escrow mechanism is shown to be defeatable — the backdoor fails on its own terms.",
    law:"The flagship key-escrow proposal collapses on technical grounds.",
    surveillance:"The principle that backdoors weaken security for all takes root in policy debate." },
  causes:["clipperchip"], effects:["calea","cryptoexport1996"] },

{ id:"exportgrade", year:1995, date:"1994–1995", era:6, cat:["internet","law","encryption"],
  title:"Export-Grade: Selling Broken Encryption",
  wiki:"Export of cryptography from the United States",
  summary:"U.S. export controls permit only weak 40-bit encryption in products sold abroad, classifying strong cryptography as a munition. In 1995, researchers in Europe break 40-bit SSL in days using ordinary workstation clusters — proving the only encryption America allows for export is demonstrably inadequate for commerce.",
  importance:"For years the United States treated strong encryption like a weapon, letting companies export only a deliberately crippled 40-bit version — and then European researchers showed that version could be cracked in days, exposing the policy as the export of security theater. The contradiction was stark: the government claimed export-grade was adequate while it was already breakable, and the rule was actively endangering the world's nascent online commerce. The crisis made plain that arms-control law could not govern mathematics, and built the case for liberalization.",
  impact:{
    law:"Strong encryption is regulated as a munition; only breakable 40-bit ciphers may be exported.",
    technology:"40-bit SSL is broken in days, proving export-grade encryption inadequate for commerce.",
    society:"U.S. policy is exposed as exporting deliberately weakened security worldwide." },
  causes:["pgp"], effects:["netscapessl","cryptoexport1996"] },

{ id:"netscapessl", year:1995, date:"1995", era:6, cat:["internet","opensource","encryption"],
  title:"SSL and the Two-Tier Browser",
  wiki:"Transport Layer Security",
  summary:"Netscape invents SSL to encrypt traffic between browser and server — the padlock that makes e-commerce possible — but export law forces it to ship two browsers: a 128-bit version for Americans and a crippled 40-bit version for everyone else. Secure online shopping exists in the U.S.; the rest of the world gets a weaker internet by decree of arms-export law.",
  importance:"SSL is the invention that made commerce on the web safe, wrapping credit-card transactions in encryption strong enough to trust — and for a few years U.S. export rules split it in two, giving Americans real security and foreigners a breakable substitute. It was the most concrete consequence of the Crypto Wars: a two-tier internet, secure at home and exposed abroad, created not by technology but by law. When the export controls fell, SSL/TLS became the universal padlock under every 'https' on earth.",
  impact:{
    technology:"Browser–server encryption — the padlock under every secure transaction — is created.",
    law:"Export rules split the browser into strong-domestic and weak-export versions.",
    communications:"Secure e-commerce exists in the U.S. while the rest of the world runs weaker crypto." },
  causes:["exportgrade","mosaic"], effects:["cryptoexport1996","aes2001"] },

{ id:"cryptoexport1996", year:1996, date:"1996", era:6, cat:["internet","law","encryption"],
  title:"Encryption Leaves the Munitions List",
  wiki:"Export of cryptography from the United States",
  summary:"A Clinton executive order moves most commercial encryption from the State Department's Munitions List to the Commerce Control List — beginning the gradual retreat from treating cryptography as a weapon, and starting the liberalization that will culminate three years later.",
  importance:"The 1996 order was the turning point at which the government conceded, in principle, that everyday encryption was a commercial good rather than a weapon of war — shifting it out of arms-control jurisdiction and toward ordinary trade regulation. It did not end the controls overnight, but it reversed their direction, acknowledging that the policy was costing American industry and protecting no one. It set the trajectory toward the 1999 settlement that finally freed strong cryptography for the world.",
  impact:{
    law:"Commercial encryption is reclassified from munition to commercial export item.",
    society:"The government concedes everyday cryptography is commerce, not weaponry.",
    technology:"The path to globally deployable strong encryption is opened." },
  causes:["blazeclipper","exportgrade","netscapessl"], effects:["cryptoexport1999"] },

{ id:"cryptoexport1999", year:1999, date:"1999", era:6, cat:["internet","law","encryption"],
  title:"The First Crypto War Ends",
  wiki:"Export of cryptography from the United States",
  summary:"U.S. export controls on encryption are substantially relaxed: strong cryptography can now be exported to most countries after a one-time review. The first Crypto War ends in victory for industry and privacy — the surveillance-maximizing position loses to commerce, and the infrastructure for secure e-commerce becomes globally deployable.",
  importance:"After nearly a decade of fighting — Clipper, escrow, export-grade — the government's effort to keep strong encryption from ordinary people collapsed, and in 1999 the controls were relaxed enough to let real cryptography ship worldwide. It was a clean defeat for the surveillance-by-design position and the precondition for the modern secure internet: globally deployable SSL/TLS, and eventually the end-to-end encryption that would protect billions. The first Crypto War ended with the engineers' values intact — but the same fight would return, recast as a question of platform liability rather than export law.",
  impact:{
    law:"Export controls on strong encryption are substantially lifted.",
    technology:"Secure e-commerce infrastructure becomes globally deployable.",
    society:"The surveillance-maximizing position loses to commerce and privacy." },
  causes:["cryptoexport1996"], effects:["signalprotocol","earnit"] },

{ id:"earnit", year:2020, date:"2019–2025", era:7, cat:["internet","law","encryption"],
  title:"EARN IT and the Second Crypto War",
  wiki:"EARN IT Act",
  summary:"The EARN IT Act would condition Section 230 immunity on compliance with a government 'best-practices' list for fighting child sexual abuse material — which critics argue is designed to force platforms to either scan all encrypted messages or lose their immunity, mandating encryption backdoors through liability rather than legislation. Introduced repeatedly since 2020, it passes committee but never reaches a floor vote.",
  importance:"EARN IT reopened the Crypto War on a new front: unable to ban encryption directly, the bill would make strong encryption a liability risk, pressuring platforms to break it 'voluntarily' to keep their Section 230 shield. It fused the two great internet-law fights — platform immunity and encryption — into one lever, using the unanswerable horror of CSAM as the wedge. Repeatedly reintroduced and repeatedly stalled, it embodies the modern strategy of achieving through liability what could not be achieved through a direct mandate, and keeps the question of guaranteed access permanently alive.",
  impact:{
    law:"Section 230 immunity would be conditioned on a government-set list of practices.",
    surveillance:"Critics argue the bill effectively mandates scanning of encrypted communications.",
    society:"The encryption fight returns as a question of platform liability, not export control." },
  causes:["cryptoexport1999","section230","signalprotocol"], effects:[] }

);
