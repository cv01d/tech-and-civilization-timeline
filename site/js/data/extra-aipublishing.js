// SUPPLEMENT — AI training, copyright, and the publishing industry's response: the
// specific lawsuits, rulings, settlements, and licensing deals behind the broad
// aicopyright/aitraining cards. Joins googlebooks, tasini, ascap, chatgpt, wga2023,
// aicopyright. cat:["print","computing","law"] (subsets where one domain dominates).
// Round one: data only — images to follow.
window.ATLAS_EVENTS.push(

{ id:"hathitrust", year:2011, date:"2011–2014", era:6, cat:["print","law"],
  title:"Authors Guild v. HathiTrust",
  wiki:"HathiTrust", gallery:["Google Books"],
  summary:"The same consortium of research libraries whose books Google scanned is sued by the Authors Guild over its own digital repository; in 2014 the Second Circuit holds that full-text search and access for the print-disabled are fair use, sending only the preservation claim back for more fact-finding.",
  importance:"HathiTrust extended the Google Books fight to the libraries themselves, testing whether an institution could hold a searchable digital copy of every book it owned. The 2014 ruling went further than Google Books in one respect: it found that giving blind and print-disabled readers full-text access to copyrighted works was itself transformative fair use — a disability-rights rationale for mass digitization that neither publishers nor courts had weighed so directly before. Combined with Google Books, it gave mass-scanning projects two independent fair-use foundations just as the first AI training sets were being assembled from the same library corpora.",
  impact:{
    law:"Mass digitization for search and disability access is held fair use, independent of Google Books.",
    print:"Library digitization projects gain a second fair-use foundation alongside Google's.",
    society:"Accessibility for print-disabled readers becomes a recognized fair-use rationale." },
  causes:["googlebooks"], effects:["aicopyright"] },

{ id:"gettystability", year:2023, date:"2023–2025", era:7, cat:["computing","law"],
  title:"Getty Images v. Stability AI",
  wiki:"Stability AI", gallery:["Stable Diffusion","Getty Images"],
  summary:"Getty Images sues Stability AI in the US and UK in January 2023, alleging Stable Diffusion was trained on more than 12 million Getty photographs — some of which the model reproduces complete with a garbled Getty watermark; in November 2025 the UK's High Court rejects the core copyright claim but finds Stability liable for trademark infringement over that watermark.",
  importance:"Getty's was the first major lawsuit over training an image generator on copyrighted photographs, filed within weeks of the suits against text models and on both sides of the Atlantic at once. The 2025 UK ruling split the difference in a way that became its own precedent: training on, and even reproducing, the substance of copyrighted images was not infringement because the model's weights are not themselves a 'copy' — but Stable Diffusion's habit of regurgitating Getty's watermark was trademark infringement, since it falsely implied Getty's endorsement. Copyright law and trademark law drew the line in different places.",
  impact:{
    computing:"Training on, and reproducing the substance of, copyrighted photographs is held not to infringe via the model's weights.",
    law:"A reproduced watermark becomes trademark infringement even where the underlying image is not.",
    power:"The first major image-AI lawsuit ends in a split verdict that satisfies neither side fully." },
  causes:["aicopyright"], effects:[] },

{ id:"kadreymeta", year:2023, date:"2023–2025", era:7, cat:["print","computing","law"],
  title:"Kadrey v. Meta: Authors and the Shadow Libraries",
  wiki:"Llama (language model)", gallery:["Sarah Silverman","Library Genesis"],
  summary:"Comedian Sarah Silverman and a dozen novelists sue Meta in 2023, alleging it trained its LLaMA models on hundreds of thousands of books downloaded from pirate sites like Library Genesis and Anna's Archive; in June 2025 a federal judge rules the training itself was fair use, because the authors could not show it had harmed the market for their books — even while calling Meta's wholesale piracy of the source files troubling.",
  importance:"Kadrey was the first ruling to test generative-AI training against fair use on the merits, and its split logic became a template: copying books to train a model can be transformative and non-substitutive of the originals, so long as the resulting system doesn't flood the market with copies of those specific works. But the judge was explicit that the ruling turned on the plaintiffs' thin evidentiary showing, not a blanket rule — and that future plaintiffs with a better record on piracy and market harm could win where Silverman's group did not. That warning was answered within days, in a neighboring courtroom, by a very different outcome for Anthropic.",
  impact:{
    computing:"Training an LLM on copyrighted books is held fair use where plaintiffs can't show market substitution.",
    law:"The ruling turns on weak evidence of harm, not a blanket rule — and says so explicitly.",
    print:"Authors' books, pirated wholesale from shadow libraries, become AI training data with no clear remedy." },
  causes:["aicopyright"], effects:["bartzanthropic"] },

{ id:"nytopenai", year:2023, date:"2023–2026", era:7, cat:["print","computing","law"],
  title:"The New York Times v. OpenAI and Microsoft",
  wiki:"The New York Times", gallery:["OpenAI","ChatGPT"],
  summary:"The Times sues OpenAI and Microsoft in December 2023, the first major news organization to do so, alleging ChatGPT and Bing's Copilot were trained on millions of its articles and can reproduce them near-verbatim — including paywalled investigations — while sometimes attributing fabricated 'hallucinations' to the paper's byline. Courts allow most of the copyright claims to proceed through 2025.",
  importance:"The Times case put a newsroom's central asset — its reporting, much of it paywalled and expensive to produce — at the heart of the AI-training fight, and it chose litigation over the licensing deals other publishers were signing in the same months. Its complaint highlighted a problem distinct from book or image cases: a chatbot that can reproduce a Times investigation verbatim competes directly with the subscription that funded it, and a chatbot that misattributes invented facts to the Times damages a reputation built over a century. By 2025 the suit had survived early dismissal motions, becoming the marquee test of whether journalism's economic value survives contact with a model trained on it.",
  impact:{
    print:"A newsroom's reporting, and its byline, become contested AI training inputs and outputs.",
    computing:"The case tests whether verbatim reproduction by a chatbot differs in kind from training on a work.",
    law:"Litigation becomes one major publisher's answer, where others choose to license instead." },
  causes:["tasini","aicopyright"], effects:["ainewsdeals"] },

{ id:"rossintelligence", year:2020, date:"2020–2025", era:7, cat:["computing","law"],
  title:"Thomson Reuters v. Ross Intelligence",
  wiki:"Thomson Reuters", gallery:["Westlaw"],
  summary:"Thomson Reuters sues the legal-AI startup Ross Intelligence in 2020 for building its training data from Westlaw's copyrighted headnotes — summaries of legal points representing decades of editorial work; in February 2025, Judge Stephanos Bibas grants Thomson Reuters summary judgment, the first U.S. ruling to reject an AI company's fair-use defense for its training data outright.",
  importance:"Ross Intelligence was a direct competitor built by training on a rival's proprietary editorial product, and the court treated that competitive substitution as decisive: unlike Google Books' search index, Ross's tool aimed to replace Westlaw in its own market. The February 2025 ruling — months before the Kadrey and Bartz decisions complicated the picture — was the first to say plainly that 'fair use' is not a label that attaches to AI training as such; it depends on what the training is for and what it replaces. Ross itself had already shut down, a casualty of the litigation it lost.",
  impact:{
    computing:"AI training on a rival's proprietary data, aimed at replacing that rival's product, is held not fair use.",
    law:"The first U.S. ruling against an AI fair-use defense draws the line at competitive substitution.",
    power:"A legal-AI startup is litigated out of existence before the ruling that defines its industry even lands." },
  causes:["googlebooks","aicopyright"], effects:[] },

{ id:"musicpublishersai", year:2023, date:"2023–2025", era:7, cat:["computing","law"],
  title:"Music Publishers v. Anthropic",
  wiki:"Anthropic", gallery:["Claude (language model)","Universal Music Group"],
  summary:"Universal Music, Concord, and other major music publishers sue Anthropic in October 2023, alleging its Claude chatbot reproduces copyrighted lyrics from hundreds of songs on request; rather than the injunction the publishers sought, a January 2025 court-approved stipulation has Anthropic add guardrails against generating lyrics, while the underlying infringement claims continue.",
  importance:"The music industry — which had spent a century building collecting societies and mechanical-royalty systems for exactly this kind of problem — moved fastest and most narrowly: not to stop AI training outright, but to stop a specific output (verbatim lyrics) competing with an existing licensing market. The 2025 stipulation, brokered before any ruling on the merits, became an early template for AI companies facing well-organized rightsholders: add technical guardrails now, litigate the underlying training question later, if at all.",
  impact:{
    computing:"A chatbot is required to add guardrails against reproducing specific copyrighted outputs.",
    law:"A settlement addresses outputs without resolving whether the underlying training was lawful.",
    power:"Organized rightsholders extract a narrow, immediate concession rather than wait years for a ruling." },
  causes:["ascap","aicopyright"], effects:[] },

{ id:"bartzanthropic", year:2025, date:"2024–2026", era:7, cat:["print","computing","law"],
  title:"Bartz v. Anthropic: The $1.5 Billion Settlement",
  wiki:"Bartz v. Anthropic", gallery:["Anthropic","Library Genesis"],
  summary:"Authors sue Anthropic in 2024 over the nearly half a million books — many downloaded from pirate sites, others bought and de-bound to be scanned — that built its training library; in June 2025 Judge William Alsup rules training itself can be fair use, but acquiring the books through piracy was not, and in September Anthropic agrees to pay $1.5 billion, roughly $3,000 per book, the largest copyright settlement in U.S. history.",
  importance:"Bartz drew the line Kadrey had only gestured toward: the same kind of training that another judge might find transformative was still built on books obtained by piracy, and that act of acquisition was independently illegal regardless of what the model later did with them. That distinction — training can be fair use, but piracy to obtain the training set is not — turned one AI company's project of stockpiling 'all the books in the world' into a $1.5 billion liability, paid out at roughly $3,000 per title to authors of nearly 500,000 books. It is the largest copyright recovery in American history, and it answers, for one company, the question every other AI-training suit is still litigating: not whether the destination was lawful, but whether the road there was.",
  impact:{
    print:"Authors of nearly 500,000 books share a $1.5 billion settlement — the largest copyright payout ever.",
    computing:"Training may be fair use, but acquiring the training set through piracy is independently liable.",
    law:"The largest copyright settlement in U.S. history is reached without a final ruling on AI training itself." },
  causes:["hathitrust","googlebooks","kadreymeta"], effects:[] },

{ id:"cnetai", year:2023, date:"2022–2023", era:7, cat:["print","computing"],
  title:"CNET's AI-Written Articles",
  wiki:"CNET", gallery:["Red Ventures"],
  summary:"Starting in November 2022, the tech-news site CNET quietly publishes dozens of finance explainer articles under the byline 'CNET Money Staff,' generated by an AI tool and disclosed only via a hover-over note; when the tech site Futurism reveals the practice in January 2023, CNET's own audit finds errors in more than half of the AI-written stories, and Wikipedia later downgrades CNET as a source over the episode.",
  importance:"CNET's experiment was one of the earliest concrete instances of a newsroom replacing reporters' work with AI output at scale, months before ChatGPT made the technology a household name — and it went wrong in exactly the way critics had warned: an AI tasked with explaining compound interest and bank bonuses got the math wrong, in articles meant to guide readers' financial decisions, while a quiet byline note did the disclosure work a correction notice should have. The episode became shorthand for the risk side of automation in journalism, just as the WGA and SAG-AFTRA strikes later that year made the labor side of the same argument on picket lines.",
  impact:{
    print:"A newsroom's published work is quietly generated by AI, errors and all, with minimal disclosure.",
    labor:"An early, concrete case of AI directly substituting for reporters' work — with visible quality failures.",
    computing:"AI-generated content's reliability, not just its existence, becomes a public news story." },
  causes:["chatgpt"], effects:["wga2023"] },

{ id:"ainewsdeals", year:2023, date:"2023–2024", era:7, cat:["print","computing"],
  title:"The Publisher Licensing Wave",
  wiki:"OpenAI", gallery:["Associated Press","Axel Springer SE","News Corp"],
  summary:"Rather than sue, most major news organizations strike licensing deals with OpenAI: the Associated Press (July 2023) first, then Axel Springer (December 2023, reportedly around $13 million a year), then News Corp (May 2024, up to $250 million over five years for the Journal, the Post, and dozens of other titles), with the Financial Times, Le Monde, and Prisa following in 2024 — trading archive access for payment and for citations in AI answers.",
  importance:"While the Times litigated, the rest of the industry negotiated, and the resulting deals quietly became the market's first price discovery for what an AI company should pay to train on, and cite, a news organization's journalism. The sums were a fraction of what the lawsuits sought in damages but represented real, recurring revenue at a moment when digital advertising had collapsed — and they came with no admission that training without a license had been illegal, letting both sides avoid the question the courts were still deciding. For publishers, the deals were also a hedge: payment now, in case the litigation path produced nothing.",
  impact:{
    print:"News archives become a licensed input to AI products, at negotiated, undisclosed rates.",
    power:"A licensing market sets a price for journalism's role in AI without resolving the underlying legal question.",
    computing:"AI assistants gain licensed access to, and obligations to cite, major news sources." },
  causes:["aicopyright"], effects:[] }

);
