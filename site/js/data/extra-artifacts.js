// SUPPLEMENT — artifacts of network culture. The small, human inventions that
// appeared as people first lived on the early internet: the map, the spam, the
// smiley, the lexicon. Interleaves chronologically via the `era` field.
window.ATLAS_EVENTS.push(

{ id:"arpanetmap", year:1977, date:"1977", era:5, cat:"internet",
  title:"The Map of ARPANET",
  wiki:"ARPANET", gallery:["History of the Internet","Interface Message Processor"],
  summary:"A logical map of ARPANET in 1977 shows 111 host computers wired together — the small, strange seed of the internet, drawn by hand.",
  importance:"Eight years after its first two nodes, ARPANET had grown into a continental web of 111 host computers at universities and research labs, documented in the famous hand-drawn 'logical maps' that circulated as the network's self-portrait. Built by the Defense Department to share scarce computers, it had quietly become something else: a community. By 1983 it carried over 4,000 machines and a thriving culture of email; its completion report admitted that 'the full impact of the technical changes set in motion by this project may not be understood for many years.' The map is the internet as a thing you could still draw on one page.",
  impact:{
    communications:"The early internet made legible — a whole network small enough to map by hand.",
    computing:"Resource-sharing among institutions becomes a permanent community of machines and people.",
    society:"A military research tool quietly becomes social infrastructure — the pattern of the net's whole history." },
  causes:["arpanet"], effects:["firstspam","webpublic"] },

{ id:"firstspam", year:1978, date:"May 1, 1978", era:5, cat:"internet",
  title:"The First Spam Email",
  wiki:"History of email spam", gallery:["Email spam","ARPANET"],
  summary:"A DEC marketer emails 393 ARPANET users to pitch a new computer — the first spam, and the first taste of the network's oldest nuisance.",
  importance:"On May 1, 1978, Gary Thuerk, a marketing manager at the Digital Equipment Corporation, sent an unsolicited product pitch to nearly 400 ARPANET users on the West Coast — the first mass commercial email. The reaction was furious: complaints poured in, the Defense Communications Agency scolded his company, yet Thuerk claimed it sold millions in mainframes. The word 'spam' (from a Monty Python sketch) came later, but the dynamic was set on day one: the same openness that made the network valuable made it abusable, a tension that runs through CAN-SPAM, filters, and every platform's moderation fight since.",
  impact:{
    communications:"Unsolicited bulk messaging is born with the network itself — the net's original abuse.",
    society:"The openness/abuse tension that defines online life is present from the first mass email.",
    regulation:"Begins the long, half-won campaign against spam — filters, blocklists, and the CAN-SPAM Act (2003)." },
  causes:["arpanet","arpanetmap"], effects:["tcpa"] },

{ id:"firstsmiley", year:1982, date:"September 19, 1982", era:5, cat:"internet",
  title:"The First Smiley",
  wiki:"Emoticon", gallery:["Scott Fahlman","Smiley","Carnegie Mellon University"],
  summary:"On a Carnegie Mellon bulletin board, Scott Fahlman proposes :-) and :-( to mark jokes — and gives text the tone it had been missing.",
  importance:"When a joke about a mercury spill on a CMU message board was taken literally, computer scientist Scott Fahlman proposed a fix: ':-)' to flag humor, ':-(' for the serious. Read sideways, the emoticon restored to flat ASCII text the emotional register that face and voice carry — a tiny act of error-correction in exactly Shannon's sense. It spread from CMU across the early internet and, through emoji, became a near-universal layer of human communication. The first smiley is the moment people began re-engineering a cold medium to carry warmth.",
  impact:{
    communications:"Text gains a way to signal tone — the ancestor of the emoji that now punctuate global communication.",
    society:"Online communities begin inventing the social conventions that flat text lacks.",
    technology:"A reminder that users, not designers, supply the missing humanity of a medium." },
  causes:["arpanet"], effects:["meme","likebutton"] },

{ id:"hackersdictionary", year:1983, date:"1983", era:5, cat:"internet",
  title:"The Hacker's Dictionary",
  wiki:"Jargon File", gallery:["Hacker culture","Guy L. Steele Jr."],
  summary:"The Jargon File — a crowd-written lexicon of hacker slang from MIT, Stanford, and CMU — is published in print, preserving a culture's private language.",
  importance:"Compiled collaboratively across the ARPANET labs through the 1970s and published in 1983 as The Hacker's Dictionary, the Jargon File catalogued the wit and worldview of the first programmers — 'bug,' 'daemon,' 'crufty,' 'foo,' and a definition of 'bit' as 'the amount of information obtained by asking a yes-or-no question.' It is an artifact of community self-documentation, an ancestor of the wiki, and a record of the hacker ethos — playful, anti-authoritarian, obsessive — that shaped open-source software and the culture of the internet itself.",
  impact:{
    communications:"A subculture writes its own dictionary — collaborative self-documentation before the wiki.",
    computing:"Preserves the hacker ethos that drives Unix, free software, and open-source culture.",
    society:"Shows the early internet generating not just tools but a distinct language and identity." },
  causes:["arpanet"], effects:["wikipedia"] }

);
