// SUPPLEMENT — home video: the VCR and the format war, the rental store, the brief reign of
// LaserDisc, and the DVD, which together moved the moving image off the broadcast schedule
// and onto a shelf the viewer controlled — the analog prelude to streaming. Cross-links the
// existing sonybetamax (the Betamax legal case), cdrom, netflixstreaming, cordcutting cards.
// cat:"tv" (a couple carry a computing facet for the optical-disc link). Data only.
window.ATLAS_EVENTS.push(

{ id:"vcr", year:1976, date:"1975–1977", era:5, cat:"tv",
  title:"The VCR and the Format War",
  wiki:"Videocassette recorder", gallery:["Betamax","VHS","Time shifting"],
  summary:"Sony's Betamax (1975) and JVC's VHS (1976) bring video recording into the home, letting viewers tape television to watch later — 'time-shifting.' The two incompatible formats fight a war that VHS wins on longer recording time and looser licensing, despite Betamax's better picture.",
  importance:"The VCR broke television's hold over when people watched, handing the viewer control of the schedule for the first time and creating the home-video market out of nothing. The Betamax-versus-VHS contest became the textbook format war, showing that the better technology does not always win — VHS prevailed through longer tapes, aggressive licensing, and the content that followed the larger installed base. Time-shifting also provoked Hollywood's lawsuit against home recording, a fight whose outcome would shape the law of every copying technology since.",
  impact:{
    tv:"Home recording lets viewers time-shift, breaking the broadcast schedule's hold.",
    society:"The home-video market is created, and a textbook format war is fought.",
    technology:"VHS beats the technically superior Betamax on capacity and licensing." },
  causes:["cableorigin"], effects:["sonybetamax","videorental","laserdisc"] },

{ id:"videorental", year:1985, date:"1985–2005", era:6, cat:"tv",
  title:"The Video Rental Store",
  wiki:"Video rental shop", gallery:["Blockbuster Video","Movie rental"],
  summary:"The VCR's spread creates the video rental store — Blockbuster and thousands of local shops — where viewers browse shelves of tapes to rent for a night. For two decades, renting a movie means a trip to the store, late fees, and the ritual of the Friday-night browse.",
  importance:"The rental store turned the VCR into an industry, building a vast new way to see films outside the theater and the broadcast schedule — a physical, browsable library the viewer could draw from at will. It made the studios' feared home-recording technology into one of their largest revenue streams, and it embedded the rituals of late fees and the empty-case disappointment into popular culture. Its eventual destruction by mail-order DVDs and then streaming — Blockbuster's fall to Netflix — is one of the era's defining stories of a physical business dissolved by a networked one.",
  impact:{
    tv:"A browsable rental library lets viewers choose films outside theater and broadcast.",
    society:"The Friday-night rental and the late fee become cultural rituals.",
    technology:"The physical rental model is later dissolved by mail-order discs and streaming." },
  causes:["vcr"], effects:["dvdvideo","netflixstreaming"] },

{ id:"laserdisc", year:1978, date:"1978–1990s", era:5, cat:["tv","computing"],
  title:"LaserDisc: The Premature Disc",
  wiki:"LaserDisc", gallery:["Optical disc","Video disc"],
  summary:"LaserDisc arrives in 1978 with sharper picture and sound than tape, storing video as optical pits read by laser on a record-sized disc — but it cannot record, costs more, and never displaces the VCR. It remains a cinephile and institutional niche, while its optical technology directly seeds the CD and DVD.",
  importance:"LaserDisc was right about the future and wrong about the moment: it proved optical video storage superior to magnetic tape years before the market would adopt it, but its inability to record and its expense kept it niche against the entrenched VCR. Its real importance is genealogical — the laser-read optical disc it pioneered became the CD, then the DVD, then Blu-ray, the dominant media formats of the next quarter-century. It is the influential commercial failure, the format whose ideas won even though the product lost.",
  impact:{
    tv:"Optical video storage beats tape on quality years before the market adopts it.",
    computing:"The laser-read optical disc it pioneers seeds the CD, DVD, and Blu-ray.",
    society:"An influential commercial failure whose technology wins after the product loses." },
  causes:["vcr"], effects:["dvdvideo","cdrom"] },

{ id:"dvdvideo", year:1997, date:"1997–2006", era:6, cat:["tv","computing"],
  title:"The DVD",
  wiki:"DVD", gallery:["DVD-Video","Optical disc drive","Blu-ray"],
  summary:"The DVD (1997) finally combines optical quality with mass-market price and convenience: a disc holding a feature film with crisp digital video, chapters, and extras, no rewinding. It rapidly replaces VHS, becomes the fastest-adopted home-entertainment format to that point, and powers Netflix's mail-order rise before streaming.",
  importance:"The DVD did what LaserDisc could not — bring digital optical video to the mass market — and it swept away VHS within a few years, its quality, durability, and bonus features redefining what owning a movie meant. It also became the bridge to the networked era: Netflix built its business mailing DVDs in red envelopes, accumulating the subscriber base and data it would later turn into streaming. The DVD is the last great physical video format, the high-water mark of media-on-a-disc just before the moving image dissolved into the download and the stream.",
  impact:{
    tv:"Digital optical video reaches the mass market and sweeps away VHS.",
    computing:"The DVD's data capacity also makes it a computer storage medium.",
    society:"Mail-order DVDs build the subscriber base that becomes streaming." },
  causes:["laserdisc","cdrom","videorental"], effects:["netflixstreaming","cordcutting"] }

);
