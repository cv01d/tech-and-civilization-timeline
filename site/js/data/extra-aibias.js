// SUPPLEMENT — algorithmic bias, the most direct proof that this atlas's pattern applies
// to AI itself: harm documented in research, confirmed in journalism, made visceral by a
// named victim, forcing corporate retreat and local rules — but no federal law. The people
// who named the problem (Buolamwini, Gebru, the ProPublica team) did the work regulators
// have not. Cross-links the existing gendershades, sfbanfr, techfrpause, gebru, metlfr
// cards. cat:"computing" (these live in the AI tab). Figures described factually.
// Round one: data only — images to follow.
window.ATLAS_EVENTS.push(

{ id:"stgeorges", year:1988, date:"1988", era:7, cat:"computing",
  title:"Bias Before It Had a Name",
  wiki:"Algorithmic bias",
  summary:"St George's Hospital Medical School in London is found to have used a program to screen applicants that systematically discriminated against women and non-European candidates — among the first documented cases of algorithmic discrimination, its bias learned directly from historical admissions data.",
  importance:"The St George's program did nothing mysterious: trained to imitate past human admissions decisions, it faithfully reproduced their prejudice against women and minority applicants, denying interviews on the basis of name and birthplace. Decades before 'algorithmic bias' was a field, it demonstrated the mechanism that would recur in every later case — a system learns the world as it was, and so automates the world's injustice. The harm was real and the cause was banal: bias in, bias out.",
  impact:{
    computing:"A program learns historical discrimination from its training data and automates it.",
    society:"Women and minority applicants are denied on the basis of name and origin.",
    law:"One of the first documented cases of algorithmic discrimination is established." },
  effects:["sweeney","compas","buolamwini"] },

{ id:"sweeney", year:2013, date:"2013–2014", era:7, cat:"computing",
  title:"Sweeney's Arrest Ads",
  wiki:"Latanya Sweeney",
  summary:"Harvard's Latanya Sweeney shows Google ads for arrest records appear more often beside Black-identifying names than white-identifying ones; a year later Attorney General Eric Holder warns that criminal-sentencing risk scores 'may inadvertently undermine equal justice.'",
  importance:"Sweeney's study put rigorous evidence behind a quiet suspicion: that commercial ad systems encode and amplify racial association, serving 'arrested?' ads to people with Black-sounding names. It was early proof that everyday algorithms, not just exotic ones, carry bias — and in 2014 Holder's warning made the federal government acknowledge, for the first time at that level, that algorithmic tools in justice could entrench discrimination. Both signals were heard, studied, and largely not acted upon.",
  impact:{
    computing:"Commercial ad algorithms are shown to encode and amplify racial disparity.",
    power:"The U.S. Attorney General warns risk scores may undermine equal justice.",
    society:"Everyday algorithms, not just specialized ones, are revealed to carry bias." },
  causes:["stgeorges"], effects:["compas","buolamwini","aibiaslaw"] },

{ id:"compas", year:2016, date:"1998–2017", era:7, cat:"computing",
  title:"COMPAS and Machine Bias",
  wiki:"COMPAS (software)",
  summary:"Risk-scoring software COMPAS, used in U.S. bail, sentencing, and parole since 1998, is exposed by ProPublica's 2016 'Machine Bias': Black defendants who were not re-arrested were labeled high-risk at nearly twice the rate of comparable white defendants. State v. Loomis (2017) upholds its use; it runs in courts still.",
  importance:"COMPAS turned a defendant's freedom partly over to a proprietary algorithm whose 137-question scoring no judge could inspect, trained on data shaped by decades of unequal policing. ProPublica's investigation showed it systematically over-flagged Black defendants as future criminals, and the ensuing fight surfaced a deep truth: two reasonable mathematical definitions of 'fairness' are provably incompatible, so any risk tool is unfair by at least one of them. The Wisconsin Supreme Court let its use stand, and a quarter-century on it still scores defendants — opaque, contested, and unregulated.",
  impact:{
    computing:"A proprietary, opaque risk score is shown to over-flag Black defendants.",
    law:"Courts uphold algorithmic risk scores without resolving their bias.",
    society:"The proof that competing fairness definitions are incompatible founds the field of AI fairness." },
  causes:["stgeorges","sweeney"], effects:["aibiaslaw"] },

{ id:"buolamwini", year:2018, date:"2015–2023", era:7, cat:"computing",
  title:"Joy Buolamwini and the Coded Gaze",
  wiki:"Joy Buolamwini",
  summary:"After facial-detection software failed to see her dark-skinned face until she held up a white mask, MIT's Joy Buolamwini built Gender Shades (2018, with Timnit Gebru) — proving systems that read light-skinned men at 99% accuracy erred on dark-skinned women up to 34% of the time. She founds the Algorithmic Justice League, audits Amazon's Rekognition, testifies to Congress, and writes Unmasking AI.",
  importance:"Buolamwini named 'the coded gaze' — the way AI encodes the worldview of its mostly white, mostly male makers — and proved it with the first rigorous external audit of commercial AI, Gender Shades. The error rates were not bugs but the logical output of training data overstuffed with light male faces. Her Algorithmic Justice League turned research into accountability: IBM and Microsoft measurably improved under scrutiny, Amazon attacked her methods and lost the argument, and her 2019 congressional testimony shifted lawmakers toward facial-recognition moratoriums. She is the atlas's clearest case of a researcher forcing change the law would not.",
  impact:{
    computing:"The first rigorous external bias audit of commercial AI proves the 'coded gaze' real.",
    power:"Research and advocacy force measurable corporate change where regulation lagged.",
    society:"The disparate failure of AI on dark-skinned women is made undeniable and public." },
  causes:["stgeorges","sweeney","gendershades"], effects:["wrongfularrest","aibiaslaw"] },

{ id:"wrongfularrest", year:2020, date:"2020", era:7, cat:"computing",
  title:"Robert Williams: The Wrongful-Arrest Cost",
  wiki:"Robert Williams (privacy advocate)",
  summary:"Robert Williams, a Black man in Detroit, is arrested at home before his wife and daughters after facial recognition misidentifies him — the first publicly documented wrongful arrest by the technology in the U.S. Two more Black men, Michael Oliver and Nijeer Parks, are similarly arrested; IBM exits facial recognition and Amazon and Microsoft pause police sales.",
  importance:"Williams's arrest — holding the mismatched photo to his face and saying 'I hope you don't think all Black men look alike' — gave the bias research a human face and a name, the visceral confirmation of what Gender Shades had measured. Three documented wrongful arrests of Black men followed the same flawed technology into people's homes and jail cells. Amid the George Floyd protests, IBM left the business citing Buolamwini's work, and Amazon and Microsoft paused police sales — proof that the harm, once embodied in a victim, could force the giants to retreat, however briefly.",
  impact:{
    computing:"Facial recognition's measured bias produces real, documented wrongful arrests.",
    power:"A named victim forces IBM out of the business and Amazon and Microsoft to pause.",
    society:"The abstract error rate becomes Black men jailed for crimes they did not commit." },
  causes:["buolamwini","gendershades","ferguson"], effects:["aibiaslaw","techfrpause"] },

{ id:"aibiaslaw", year:2023, date:"2019–2026", era:7, cat:"computing",
  title:"Regulating Bias — Locally, Not Nationally",
  wiki:"Regulation of artificial intelligence",
  summary:"Cities ban government facial recognition (San Francisco 2019 on); New York's Local Law 144 (2023) mandates bias audits for AI hiring tools; Illinois regulates AI video interviews; a 2023 White House order targets algorithmic discrimination; the 2024 EU AI Act makes justice, hiring, and credit AI 'high-risk.' Amazon quietly resumes Rekognition police sales in 2022. No U.S. federal law results.",
  importance:"The response to algorithmic bias followed the atlas's exact arc: vigorous local and European action, federal paralysis. Municipal facial-recognition bans, New York's first-in-the-nation hiring-audit law, Illinois's interview-disclosure rule, and the EU AI Act's binding 'high-risk' regime all moved — while Amazon quietly let its Rekognition police moratorium lapse and the U.S. passed no federal law governing facial recognition, requiring no bias audits of criminal-justice algorithms, prohibiting nothing. COMPAS still scores defendants; the research that named the harm has outrun the law by years, and the law has outrun nothing.",
  impact:{
    law:"Cities, states, and the EU regulate algorithmic bias; the U.S. passes no federal law.",
    computing:"Bias audits and 'high-risk' classification become binding only in some jurisdictions.",
    power:"The harm is documented and embodied, yet federal regulation never arrives." },
  causes:["sweeney","compas","buolamwini","wrongfularrest","sfbanfr","aiact"], effects:[] }

);
