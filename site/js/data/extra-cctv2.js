// SUPPLEMENT 2 — further standalone exhibits for CCTV & Cameras: the prehistory of
// the camera-as-sensor (Muybridge, Marey, the iconoscope and image orthicon), the
// parallel infrared/thermal-imaging lineage from a 1929 proposal to a WWII sniper
// scope to consumer phone attachments and pandemic fever cameras, and the spread of
// automated, networked, AI-driven camera systems (ANPR, video analytics, predictive
// policing, emotion recognition) across the back half of the twentieth century and
// into the twenty-first. Cross-linked to extra-cctv.js and extra-surveillance.js.

// ERA 4 (1880-1945) — before the camera could become a watching eye, it first had to
// become small, electronic, aimable, sensitive in the dark, and able to see by heat.
window.ATLAS_EVENTS.push(

{ id:"muybridgehorse", year:1878, date:"1878", era:4, cat:"cctv",
  title:"Muybridge Freezes the Gallop",
  wiki:"Sallie Gardner at a Gallop",
  gallery:["Eadweard Muybridge","Chronophotography"],
  summary:"On a Palo Alto racetrack, Eadweard Muybridge lines up a battery of trip-wired cameras to settle a bet about a galloping horse — and invents the automated, multi-camera array that underlies cinema and the camera network alike.",
  importance:"Commissioned by railroad baron Leland Stanford to prove that a trotting horse lifts all four hooves off the ground at once, Muybridge set twelve, then two dozen, cameras along a track at Palo Alto, each tripped in sequence by a wire as the horse passed. The resulting frames, published in 1878, were the first true photographic motion sequence, and they proved the point. More lastingly, they proved something else: that an array of automatically triggered cameras could record what no single observer, however attentive, ever could. Cinema and the unattended security camera both descend from this racetrack.",
  impact:{
    technology:"An automatically triggered, multi-camera array captures motion no human eye can follow.",
    society:"Photographic sequences are shown to reveal truths invisible to ordinary observation.",
    surveillance:"Cameras that trigger themselves on a passing subject, unattended, are demonstrated for the first time." },
  effects:["chronophotogun"] },

{ id:"chronophotogun", year:1882, date:"1882", era:4, cat:"cctv",
  title:"Marey's Photographic Gun",
  wiki:"Chronophotographic gun",
  gallery:["Étienne-Jules Marey"],
  summary:"Étienne-Jules Marey builds a rifle-shaped camera that exposes twelve sequential frames a second onto one rotating plate — collapsing Muybridge's battery of a dozen cameras into a single instrument one person can aim and fire.",
  importance:"Marey had followed Muybridge's Palo Alto sequences closely but wanted to study subjects — birds, insects, marching soldiers — that could not be lured past a fixed row of tripwires. His solution, built in 1882, was the 'fusil photographique': shaped, sighted, and triggered like a hunting rifle, it exposed twelve images per second onto a single revolving glass plate as the operator tracked a moving subject through the air. Where Muybridge's method required an elaborate fixed installation, Marey's required only one person and one device — establishing the portable, aimed, sequential-exposure camera as the format that cinema, and later the handheld and vehicle-mounted optics of surveillance and reconnaissance, would inherit.",
  impact:{
    technology:"A single aimed, handheld instrument replaces a fixed battery of triggered cameras.",
    society:"Sequential photography becomes a scientific tool for analyzing motion invisible to the eye.",
    surveillance:"The aimed, portable, single-operator camera — the format of the handheld and vehicle-mounted lens — is established." },
  causes:["muybridgehorse"] },

{ id:"tihanyiinfrared", year:1929, date:"1929", era:4, cat:"cctv",
  title:"Tihanyi's Infrared Eye",
  wiki:"Kálmán Tihanyi",
  gallery:["Infrared","Television camera"],
  summary:"Hungarian engineer Kálmán Tihanyi proposes an infrared-sensitive television camera to Britain's Air Ministry — the earliest known plan to fuse electronic imaging with heat detection for night-time military surveillance.",
  importance:"Tihanyi had already patented, in the late 1920s, designs for a fully electronic television camera tube — work RCA would later fold into its own camera-tube programs. In 1929 he turned the same idea toward a military problem: spotting aircraft in darkness. His proposal to the British Air Ministry described a camera tube sensitive not to visible light but to the infrared radiation given off by an aircraft's engines, converting heat into a live electronic image for anti-aircraft gunners. Nothing came of it immediately — radar, not infrared cameras, would defend Britain's skies in 1940 — but the proposal stated, on paper, the principle that active infrared night-vision devices and thermal-imaging cameras would later realize: a camera that sees heat.",
  impact:{
    technology:"Electronic imaging is proposed to extend beyond visible light into heat detection.",
    government:"Night-time air defense becomes an early proposed military application of camera technology.",
    surveillance:"The principle of the camera that watches by heat rather than light is stated for the first time." },
  effects:["vampirscope"] },

{ id:"telefunken180", year:1934, date:"1933–34", era:4, cat:"cctv",
  title:"Telefunken's Electronic Eye",
  wiki:"180-line television system",
  gallery:["Telefunken","Iconoscope"],
  summary:"Telefunken and Fernseh AG field-test an all-electronic, iconoscope-based television system on the streets of Berlin — the moment the television camera stops being a laboratory instrument and becomes something that can be pointed at the world.",
  importance:"By the early 1930s German manufacturers had access to Vladimir Zworykin's iconoscope, the first practical all-electronic camera tube, and in 1933-34 Telefunken and Fernseh AG used it to build and field-test a 180-line television system around Berlin, ahead of the cameras that would broadcast the 1936 Olympics live to public viewing halls across the city. Unlike the spinning Nipkow disks of mechanical television, the iconoscope had no moving parts, needed no special lighting rig, and could be pointed, like a still camera, at any scene and transmit it electronically and instantly. That capability — small, electronic, aimable, live — is the precondition for every camera in this gallery that follows: before a lens could become a watching eye, it first had to become this.",
  impact:{
    technology:"The all-electronic camera tube replaces mechanical scanning, making a pointable, live 'watching eye' possible.",
    communications:"Live electronic video moves from the laboratory bench to the city street.",
    surveillance:"The technical precondition for every camera that follows — small, electronic, aimable, live — is established." },
  effects:["cctvpeenemunde","imageorthicon"] },

{ id:"chainhomeradar", year:1938, date:"1938", era:4, cat:"cctv",
  title:"Chain Home: The Always-On Eye",
  wiki:"Chain Home",
  gallery:["Royal Air Force"],
  summary:"Britain completes Chain Home, a chain of radar stations along its coast giving the RAF continuous, automated, wide-area detection of incoming aircraft — the first operational mass-surveillance sensor network.",
  importance:"Built through the mid-1930s and operational by 1938, Chain Home's radio direction-finding stations could detect aircraft tens of miles out, feeding plots in real time into the Dowding System — a centralized command structure that fused dozens of sensor feeds into a single operational picture and scrambled fighters to intercept. It was the first time a state had built a sensor grid that watched continuously, automatically, and over an entire coastline, whether or not anything was happening: not an officer posted at a door, but a network that never stopped looking. That architecture — distributed sensors, centralized fusion, automated alerting — is the direct ancestor of every networked camera and database system that appears later in this gallery.",
  impact:{
    technology:"A continuous, automated, wide-area sensor network operates for the first time.",
    government:"Centralized sensor fusion — the Dowding System — becomes the template for command-and-control.",
    surveillance:"The architecture of always-on, networked detection, later applied to cameras and databases, is established." },
  causes:["tihanyiinfrared"], effects:["cctvpeenemunde"] },

{ id:"imageorthicon", year:1943, date:"1943", era:4, cat:"cctv",
  title:"The Image Orthicon: A Camera for the Dark",
  wiki:"Image orthicon",
  gallery:["RCA"],
  summary:"RCA Laboratories develops the image orthicon camera tube to guide weapons in low light during the Pacific War — a sensor up to a thousand times more sensitive than its predecessor that becomes, after 1945, the standard television camera tube for two decades.",
  importance:"Designed in 1943 by Albert Rose, Paul Weimer, and Harold Law at RCA's wartime laboratories, the image orthicon answered a military need: the existing iconoscope camera tube was too insensitive to produce a usable image in anything but bright light, useless for guiding television-equipped weapons onto targets at dusk or at night. The image orthicon's leap in sensitivity — by some estimates a hundred to a thousand times the iconoscope's — meant a camera could now see in near-darkness. Declassified after the war, the tube (nicknamed the 'Immy', the namesake of the television Emmy Award) became the workhorse of broadcast television into the 1960s, and gave every CCTV camera of the postwar decades the low-light sensitivity that made nighttime watching possible.",
  impact:{
    technology:"Camera sensitivity leaps by orders of magnitude, enabling imaging in near-darkness.",
    government:"A sensor developed for guided weapons is declassified into civilian and commercial use.",
    surveillance:"Low-light imaging, a prerequisite for nighttime CCTV, becomes available for the first time." },
  causes:["telefunken180"], effects:["vericon"] },

{ id:"vampirscope", year:1945, date:"1944–45", era:4, cat:"cctv",
  title:"Vampir: Night Vision Goes to War",
  wiki:"Zielgerät 1229",
  gallery:["Sturmgewehr 44"],
  summary:"German infantry field the 'Vampir' — an infrared searchlight paired with an image-converter scope on a rifle — the first infrared night-vision device used in combat.",
  importance:"Fielded from February 1945 in numbers too small to affect the war, the Zielgerät 1229, nicknamed 'Vampir', paired an infrared illuminator with an electronic image-converter tube mounted on the StG 44 rifle, letting a soldier see a target lit by light invisible to the unaided eye. It was heavy, its battery pack carried separately, and its range was short, but it proved, in the field, the principle that would define infrared surveillance for the rest of the century: an active illuminator plus an image converter makes a scene visible to one viewer while it remains dark to everyone else. Captured devices and the engineers who built them fed directly into the postwar American and Soviet infrared programs that followed.",
  impact:{
    technology:"Active infrared illumination plus an image-converter tube becomes a working night-vision system.",
    government:"Captured infrared technology and personnel seed postwar infrared weapons and sensor programs.",
    surveillance:"One-sided visibility — lit for the watcher, dark for the watched — is proven in combat." },
  causes:["tihanyiinfrared"], effects:["sidewinderinfrared"] }

);

// ERA 5 (1945-1990) — videotape gives the camera a memory, the camcorder gives it to
// everyone, the CCD begins shrinking it onto a chip, and infrared imaging moves from
// the battlefield into a commercial industry. Meanwhile, three late-Cold-War crackdowns
// show what recorded footage and surveillance archives do once a regime falls.
window.ATLAS_EVENTS.push(

{ id:"ampexvideotape", year:1956, date:"1956", era:5, cat:"cctv",
  title:"The Ampex VRX-1000: Video Gets a Memory",
  wiki:"Quadruplex videotape",
  gallery:["Ampex"],
  summary:"Ampex demonstrates the VRX-1000, the first commercially practical videotape recorder — for the first time, a moving image can be captured electronically, stored, and played back later rather than only broadcast live.",
  importance:"Unveiled at a US broadcasters' convention in April 1956, the VRX-1000 used two-inch tape and a rotating recording head to capture a usable, broadcast-quality picture — something earlier attempts at video recording had failed to do. At $50,000 a unit, it was a tool for television networks, not households or security desks, and its first broadcast use, that November, simply let CBS delay a news program by three hours for the West Coast. But the underlying capability — recording a live video signal so it can be reviewed later — is the single technical advance that, two decades on, would let CCTV stop being a live-only 'watch now or miss it' system and start becoming the evidentiary archive it is today.",
  impact:{
    technology:"Video recording becomes commercially practical for the first time, at broadcast quality.",
    communications:"Television escapes the demand for live transmission; programs can be delayed, repeated, and stored.",
    surveillance:"The capability that will let camera footage become a searchable archive, rather than a live-only view, first exists." },
  effects:["sonyportapak"] },

{ id:"sidewinderinfrared", year:1956, date:"1950s", era:5, cat:"cctv",
  title:"The Sidewinder: Infrared Becomes a Weapon",
  wiki:"AIM-9 Sidewinder",
  summary:"The US Navy fields the AIM-9 Sidewinder, the first operational infrared-guided air-to-air missile — built in part on infrared-sensing techniques refined from captured WWII German night-vision technology.",
  importance:"Developed at the Naval Ordnance Test Station at China Lake through the early 1950s and entering service in 1956, the Sidewinder homed in on the infrared heat signature of a jet engine's exhaust, needing no radar lock and no operator input once fired. Postwar American infrared research drew on captured German devices and personnel from programs that had produced wartime night-sights like 'Vampir' — the same active-infrared principle, redirected from illuminating a target for a human eye to letting a machine track a target by its own heat. Sidewinder's success made infrared sensing a permanent fixture of military technology, the branch of the infrared lineage that, a generation later, would yield the thermal cameras used by police helicopters and border patrols.",
  impact:{
    technology:"Infrared sensing becomes a guidance technology, tracking targets by heat with no illumination needed.",
    government:"Captured wartime infrared research is converted into a mass-produced operational weapon.",
    surveillance:"The infrared lineage that will produce postwar thermal-imaging cameras becomes a funded military priority." },
  causes:["vampirscope"], effects:["flirsystems1978"] },

{ id:"palcolorsystem", year:1967, date:"1967", era:5, cat:"cctv",
  title:"Walter Bruch's Second Invention: Color",
  wiki:"PAL",
  gallery:["Walter Bruch","Telefunken"],
  summary:"Twenty-five years after building the first CCTV camera for a Nazi rocket site, Telefunken engineer Walter Bruch gives West Germany its color-television standard, PAL — adopted within a decade by more than a hundred countries.",
  importance:"The same Walter Bruch who, in 1942, rigged a camera to let engineers watch a V-2 launch from a bunker spent the postwar decades at Telefunken developing color television. His Phase Alternating Line (PAL) system was switched on for West German broadcasts on 25 August 1967, when Chancellor Willy Brandt pressed a symbolic button at the Berlin radio show. PAL's spread across Western Europe, much of Asia, Africa, and Australia over the following decade gave the television camera, by now also the CCTV camera, a second standard channel into ordinary life: color. The engineer who first turned a camera into a watching eye later helped decide what, in color, that eye would show.",
  impact:{
    technology:"A single engineer's second major invention gives television, and eventually CCTV, a color standard adopted by over a hundred countries.",
    society:"Color becomes the default for both broadcast and, eventually, surveillance video.",
    communications:"A national broadcast standard, set by one company's engineer, becomes a de facto global one." },
  causes:["cctvpeenemunde"] },

{ id:"sonyportapak", year:1967, date:"1967", era:5, cat:"cctv",
  title:"The Portapak: Video Leaves the Studio",
  wiki:"Portapak",
  gallery:["Sony"],
  summary:"Sony's Portapak puts a battery-powered video camera and reel-to-reel recorder into a shoulder bag one person can carry — the first time recording moving images required neither a studio, a crew, nor a broadcaster's budget.",
  importance:"Introduced in 1967 for around $1,500, the Portapak was a two-piece system, a handheld camera tethered to a recorder worn on a shoulder strap, that let a single person shoot and immediately play back video anywhere, without a truck, a crew, or a transmitter. Activists, artists, and journalists seized on it for what became known as 'guerrilla television': footage of protests, evictions, and police actions shot from the ground, outside any broadcaster's control. The Portapak is the point at which the moving-image camera, previously the property of networks and the state, becomes a tool an individual can point back at power — the consumer half of the same lineage that, in CCTV form, would soon point cameras the other way.",
  impact:{
    technology:"Video recording becomes portable, battery-powered, and operable by one person.",
    society:"'Guerrilla television' lets ordinary people document power from the ground up, outside broadcaster control.",
    surveillance:"The same portability that empowers citizen documentation will, in CCTV form, make cameras cheap enough to put everywhere." },
  causes:["ampexvideotape","expo67picturephone"], effects:["sonybetamovie1983"] },

{ id:"expo67picturephone", year:1967, date:"1967", era:5, cat:"cctv",
  title:"Expo 67: The Public Tries Video Calling",
  wiki:"Telephone Pavilion (Expo 67)",
  gallery:["Picturephone"],
  summary:"At Montreal's Expo 67, fairgoers line up at the Telephone Pavilion to make the first video calls many of them have ever seen — AT&T's Picturephone, a half-billion-dollar research project, demonstrated live to over a thousand visitors at a time.",
  importance:"The Telephone Pavilion's headline attraction was a 360-degree film, but alongside it were working Picturephone booths where the public could place video calls to volunteers in other cities — most visitors' first encounter with the idea that a telephone call could also be a moving picture of the person on the other end. AT&T had spent a reported half-billion dollars developing Picturephone, and Expo 67 was its largest public demonstration yet. The technology would fail commercially for decades, undone by cost and by a discomfort with being seen that voice calls never demanded — but the underlying proposition, that a camera could be a routine part of two-way communication, anticipated both videoconferencing and the webcam.",
  impact:{
    technology:"Two-way video communication is demonstrated to the public at unprecedented scale.",
    society:"Being seen, not just heard, on a call is presented as the future of telephony — and meets immediate public unease.",
    communications:"The camera is proposed as a routine component of personal communication, decades before it becomes one." },
  effects:["sonyportapak","vanbrittanbrown"] },

{ id:"vanbrittanbrown", year:1969, date:"1966–69", era:5, cat:"cctv",
  title:"A Nurse Invents the Home Security Camera",
  wiki:"Marie Van Brittan Brown and Albert L. Brown",
  summary:"Marie Van Brittan Brown, a nurse working night shifts in Queens, and her husband Albert, an electrician, patent a home security system using a camera, peepholes, a television monitor, and a two-way microphone — the template for every video doorbell and home-security camera that follows.",
  importance:"Filed in 1966 and granted in December 1969, the Browns' patent described a system in which a motorized camera could slide between several peepholes in a front door, sending its picture to a television monitor elsewhere in the home; a resident could see and speak to a visitor, and trigger an alarm or unlock the door remotely, without opening it. Built out of concern for slow police response in their neighborhood, it was the first design to put live video surveillance under the control of an ordinary household rather than a bank, a factory, or the state. Every video doorbell and networked home camera sold half a century later is a direct descendant of this patent.",
  impact:{
    technology:"Live video surveillance is designed for the first time as a consumer product for the home.",
    society:"A household, not an institution, becomes the operator of its own surveillance camera.",
    surveillance:"The architecture of the modern video doorbell and home security camera is patented decades before the market exists." },
  causes:["vericon","expo67picturephone"], effects:["ipcamera"] },

{ id:"ccdinvention", year:1969, date:"1969", era:5, cat:"cctv",
  title:"The CCD: A Camera on a Chip",
  wiki:"Charge-coupled device",
  gallery:["Bell Labs"],
  summary:"Bell Labs researchers Willard Boyle and George Smith sketch the charge-coupled device in about an hour and build a working prototype within a week — the solid-state sensor that will eventually replace the vacuum-tube camera entirely.",
  importance:"Conceived on 17 October 1969 while the pair were thinking about solid-state memory and improved video-telephone technology, the CCD stores and shifts charge across a grid of semiconductor capacitors — and, when that charge is generated by incoming light, the grid becomes an imaging sensor with no vacuum tube, no electron gun, and no moving parts. It took until the 1970s and 80s for CCDs to become practical and affordable enough to displace tubes like the image orthicon, but once they did, they shrank the camera from a heavy, power-hungry tube assembly to a chip the size of a fingernail — the change that makes a camera small, cheap, and durable enough to be bolted unobtrusively to a million streetlights, doorways, and ceiling corners.",
  impact:{
    technology:"The vacuum-tube camera sensor begins its replacement by a solid-state chip.",
    computing:"Imaging becomes, for the first time, a semiconductor problem rather than a vacuum-electronics one.",
    surveillance:"The miniaturization that makes cameras cheap and ubiquitous enough for mass CCTV deployment becomes possible." },
  causes:["imageorthicon"], effects:["hikvision2001"] },

{ id:"kraytwins", year:1969, date:"1969", era:5, cat:"cctv",
  title:"The Krays: Surveillance Brings Down the Gangsters",
  wiki:"Kray twins",
  summary:"After years of failed prosecutions, Scotland Yard convicts the Kray twins — London's most notorious organized-crime figures — substantially on the strength of sustained surveillance: photographs, bugged premises, and the testimony of those who had been watched.",
  importance:"Ronnie and Reggie Kray had run protection rackets, clubs, and worse across London's East End for over a decade, shielded by witnesses too frightened to testify and a public fascination that made them minor celebrities. Their 1969 conviction for murder followed a years-long Scotland Yard surveillance operation: photographic surveillance of their associates and premises, painstakingly assembled into a case the prosecution could finally bring to court. The trial's huge press coverage helped normalize, for a British public still two decades from its own town-center cameras, the idea that being watched and photographed by the police was simply how organized crime got solved — an idea King's Lynn and its successors would put down roots into a national infrastructure.",
  impact:{
    power:"Sustained photographic surveillance, not just witness testimony, becomes the basis for convicting organized crime.",
    law:"Surveillance evidence assembled over years succeeds where witness-dependent prosecutions had failed.",
    society:"The press makes the watched gangster a familiar figure, normalizing surveillance as crime-fighting." },
  effects:["lutonpopplewell1986"] },

{ id:"preventionterrorismact1974", year:1974, date:"1974", era:5, cat:"cctv",
  title:"Britain Legislates an Emergency, Permanently",
  wiki:"Prevention of Terrorism (Temporary Provisions) Act 1974",
  summary:"Eight days after the Birmingham pub bombings, Parliament rushes through the Prevention of Terrorism Act 1974 — emergency powers of detention, exclusion, and surveillance passed as 'temporary' that would, in renewed form, last for decades.",
  importance:"Introduced and passed within a single day's debate after IRA bombs killed 21 people in Birmingham on 21 November 1974, the Act let police detain suspects without charge for up to seven days, exclude people from Great Britain or Northern Ireland by executive order, and proscribe organizations — powers justified as a temporary response to an emergency but renewed annually, and re-legislated, for the rest of the century. It established a pattern that recurs throughout this gallery and the next: a security crisis produces sweeping surveillance and detention powers, framed as exceptional, that become permanent infrastructure. The cameras that would soon ring the City of London as a 'ring of steel' were authorized by the same logic this Act first wrote into law.",
  impact:{
    law:"Emergency detention and surveillance powers, passed as temporary, become a renewable permanent framework.",
    government:"A security crisis is answered with sweeping executive powers passed in a single day.",
    surveillance:"The 'temporary emergency' justification for permanent surveillance infrastructure is established." },
  effects:["ringofsteel"] },

{ id:"flirsystems1978", year:1978, date:"1978", era:5, cat:"cctv",
  title:"FLIR Systems: Infrared Becomes a Business",
  wiki:"Teledyne FLIR",
  summary:"FLIR Systems is founded in Oregon to build forward-looking infrared cameras for aircraft — the start of a company, and an industry, that will put thermal-imaging cameras on police helicopters, border-patrol trucks, and eventually smartphones.",
  importance:"Founded in 1978 to adapt military infrared-sensor technology for civilian and law-enforcement use, FLIR built stabilized thermal cameras that could be mounted on aircraft to see heat signatures invisible to ordinary cameras — useful for energy audits, then for police searching for fugitives at night, then for border agencies watching for people crossing in darkness. Where 'Vampir' and the Sidewinder had been military-only, FLIR represented infrared imaging's move into a commercial market with civilian law enforcement as a primary customer from the start. By the time courts began asking, in the 1990s and 2000s, whether police could point a thermal camera at a house without a warrant, FLIR's equipment was usually the camera in question.",
  impact:{
    technology:"Infrared imaging becomes a commercial product line rather than a military-only capability.",
    government:"Police and border agencies become primary civilian customers for thermal-imaging cameras.",
    surveillance:"Thermal cameras enter routine law-enforcement use, raising questions later gallery entries take up directly." },
  causes:["sidewinderinfrared"], effects:["microbolometer1980s"] },

{ id:"iranrevolutiontribunals", year:1979, date:"1979", era:5, cat:"cctv",
  title:"Iran 1979: The Watchers Are Identified",
  wiki:"Islamic Revolutionary Court",
  gallery:["Iranian Revolution","SAVAK"],
  summary:"After the Shah's fall, Iran's new revolutionary courts try and execute hundreds of former SAVAK agents and officials within months — identified partly through photographs, surveillance files, and crowd recognition, in a reversal where the watchers of the old surveillance state become its first targets.",
  importance:"SAVAK, the Shah's secret police, had built an extensive surveillance and informant network through the 1960s and 70s, photographing, tailing, and filing on suspected dissidents. After the February 1979 revolution, Islamic Revolutionary Courts began summary trials, often lasting hours, sometimes minutes, of SAVAK agents, generals, and ministers, with hundreds executed by year's end. Identification of lower-level agents relied partly on the same tools SAVAK had used on others: photographs, personnel files, and public recognition, now turned against their former owners. It is among the earliest large-scale instances of a surveillance apparatus's own archive being repurposed, in the chaos of regime change, against the people who built it — a pattern that recurs, far more orderly, in East Germany a decade later.",
  impact:{
    power:"A surveillance state's own personnel and files become evidence used against it after regime change.",
    law:"Summary tribunals process hundreds of cases in months, with photographic and file-based identification standing in for due process.",
    surveillance:"The reversal of a surveillance apparatus against its own operators previews East Germany's Stasi reckoning a decade later." },
  effects:["stasiarchives"] },

{ id:"polandmartiallaw1981", year:1981, date:"1981", era:5, cat:"cctv",
  title:"Poland, 1981: A State Watches Itself Shut Down",
  wiki:"Martial law in Poland",
  gallery:["Solidarity (Polish trade union)"],
  summary:"To crush the Solidarity movement, Poland's government declares martial law overnight — sealing borders, cutting phone lines, and giving the security services sweeping surveillance and detention powers over a population of 36 million.",
  importance:"Imposed without warning on the night of 13 December 1981 by General Wojciech Jaruzelski's Military Council of National Salvation, martial law shut down telephone networks, imposed curfews, sealed Poland's borders and airports, and authorized the internment of thousands of Solidarity activists and other dissidents without charge — a surveillance and control operation executed against an entire nation in a single night. State television, the only broadcaster, announced the measures and broadcast the regime's version of events for the eighteen months martial law remained formally in force. It stands, alongside the Stasi's East Germany, as one of the late Cold War's clearest demonstrations that a one-party state's surveillance and communications infrastructure could be turned, instantly and totally, into an instrument of suppression.",
  impact:{
    government:"A national communications and surveillance infrastructure is turned, overnight, into a tool of total suppression.",
    power:"Mass internment without charge demonstrates the speed at which a surveillance state can act against its own population.",
    communications:"State control of the only broadcaster lets the regime narrate the crackdown unopposed." },
  effects:["tiananmenfootage1989"] },

{ id:"sonybetamovie1983", year:1983, date:"1983", era:5, cat:"cctv",
  title:"Betamovie: The Camcorder Arrives",
  wiki:"Betamovie",
  gallery:["Sony"],
  summary:"Sony's Betamovie combines a camera and a videotape recorder into a single shoulder-mounted unit — the first true camcorder, and the device that puts a recording video camera into ordinary households for the first time.",
  importance:"Launched in 1983, the Betamovie BMC-100 did away with the Portapak's separate camera-and-recorder units, integrating both into one camera-shaped device that recorded directly onto a Betamax cassette. It could not play back through its own viewfinder — tapes had to be removed and run through a separate VCR — but it was light enough for one person to hold and aim, and affordable enough for a consumer market. Within a few years, competing camcorders from JVC and Panasonic would be common at weddings, birthdays, and protests alike. The camcorder generation that resulted would, by the end of the 1980s, be present — often by accident — at some of the decade's most consequential news events.",
  impact:{
    technology:"Camera and recorder merge into a single consumer device for the first time.",
    society:"Recording moving images becomes an ordinary household activity rather than a specialist one.",
    surveillance:"A generation of consumer camcorders becomes, often incidentally, a source of footage documenting public events." },
  causes:["sonyportapak"], effects:["tiananmenfootage1989"] },

{ id:"minersstrike1984", year:1984, date:"1984–85", era:5, cat:"cctv",
  title:"The Miners' Strike: Policing Becomes Intelligence Work",
  wiki:"1984–1985 United Kingdom miners' strike",
  summary:"During the year-long UK miners' strike, police forces coordinate roadblocks, surveillance, and intelligence-sharing on an unprecedented national scale to track and intercept striking miners — a preview of the data-driven public-order policing that follows.",
  importance:"The 1984-85 strike, called by the National Union of Mineworkers against pit closures, was met by a national policing operation without precedent in peacetime Britain: forces from across the country were coordinated to set up roadblocks turning back 'flying pickets' before they reached their destination, while intelligence on individual miners' movements was shared between forces and with the National Reporting Centre in London. The strike's defeat after a year was as much an intelligence and logistics victory as a policing one. The techniques — centralized coordination, movement-tracking, pre-emptive interception based on intelligence about where people were headed — anticipated the camera-and-database fusion that would define public-order policing once CCTV networks existed to do the watching automatically.",
  impact:{
    government:"Police forces are coordinated nationally, for the first time in peacetime, to track and intercept a civilian population.",
    law:"Surveillance of trade unionists' movements and communications becomes a tool of an industrial dispute.",
    surveillance:"Intelligence-led, movement-tracking public-order policing is practiced at national scale before the cameras exist to automate it." },
  effects:["lutonpopplewell1986"] },

{ id:"brazilhyperinflation1985", year:1985, date:"1980s", era:5, cat:"cctv",
  title:"Brazil's Lost Decade: Cameras for the Crime Wave",
  wiki:"Hyperinflation in Brazil",
  summary:"As hyperinflation devastates Brazil's economy through the 1980s, banks and businesses in São Paulo and Rio de Janeiro turn to private CCTV in numbers, joining the wave of crime-driven camera adoption spreading through the developing world's cities.",
  importance:"Brazil's 'lost decade' saw inflation reach four-digit annual rates by the mid-1980s, wiping out savings and accompanying a surge in urban crime, particularly armed robbery of banks and commercial premises in São Paulo and Rio de Janeiro. As in the United States two decades earlier, the response from private business was the camera: bank branches and shops installed CCTV not because any law required it, but because insurers and owners judged it cheaper than the alternative. The pattern — economic crisis, rising crime, camera adoption led by private capital rather than government, with regulation arriving years or decades later if at all — would repeat across the developing world for the rest of the century, eventually supplied overwhelmingly by Chinese manufacturers.",
  impact:{
    surveillance:"Private CCTV adoption, driven by crime and insurance economics rather than law, spreads to a major developing economy.",
    society:"Economic crisis becomes a direct driver of camera proliferation, a pattern that recurs globally.",
    law:"Camera deployment again outpaces any regulatory framework, this time outside the wealthy world." },
  causes:["vericon"], effects:["chinaexport"] },

{ id:"lutonpopplewell1986", year:1986, date:"1985–86", era:5, cat:"cctv",
  title:"After the Luton Riot: Cameras for the Crowd",
  wiki:"1985 Luton riot",
  gallery:["Football hooliganism"],
  summary:"After a violent riot at a Luton Town match against Millwall, English football responds with membership schemes, away-fan bans, and — recommended by the resulting government inquiry — CCTV in stadiums, part of a wider 1985 football-safety crisis that put cameras into British crowd control.",
  importance:"The March 1985 riot at Luton's Kenilworth Road ground, in which Millwall fans tore up seating and fought police and home supporters, came during a year that also saw the Bradford City fire and the Heysel Stadium disaster, killing dozens of Liverpool and Juventus fans. The government's Popplewell Inquiry, examining all three, recommended closed-circuit television in stadiums alongside membership schemes and away-fan restrictions; Luton itself banned visiting supporters entirely and introduced a members-only card scheme for its own fans the following season, with government backing. Football grounds became, almost overnight, one of the first widespread civilian contexts in which CCTV was installed specifically to identify individuals after the fact, a capability the rest of Britain's town centers would adopt within the decade.",
  impact:{
    law:"A government inquiry recommends CCTV in stadiums as part of crowd-control policy.",
    surveillance:"Football grounds become an early mass civilian context for after-the-fact identification by camera.",
    society:"Membership schemes and camera surveillance are normalized as the price of admission to a public event." },
  causes:["kraytwins","minersstrike1984"], effects:["kingslynn","cctvchallenge1994"] },

{ id:"microbolometer1980s", year:1985, date:"1980s", era:5, cat:"cctv",
  title:"Uncooled Infrared: A Camera Without a Refrigerator",
  wiki:"Microbolometer",
  summary:"Honeywell researchers develop the uncooled microbolometer detector through the 1980s — an infrared sensor that needs no bulky cryogenic cooling system, the breakthrough that will eventually shrink the thermal camera from a vehicle-mounted unit to a handheld, then a phone-mounted, device.",
  importance:"Earlier infrared cameras, including the systems FLIR built through the 1980s, generally required their detectors to be cooled to cryogenic temperatures to register the faint heat differences in a scene — a requirement that made them heavy, power-hungry, and expensive. Honeywell's uncooled microbolometer, developed under military contract through the 1980s and declassified for commercial use in the early 1990s, used arrays of tiny temperature-sensitive resistors that worked at room temperature. The technology took another two decades to become cheap enough for mass deployment, but it is the direct ancestor of the thermal-imaging attachments later sold for smartphones and the low-cost thermal cameras deployed at airports and borders.",
  impact:{
    technology:"Infrared detection no longer requires cryogenic cooling, removing the largest barrier to a compact thermal camera.",
    government:"Military-funded sensor research is declassified into a civilian technology base.",
    surveillance:"The path to a thermal camera small and cheap enough for a phone or a checkpoint is opened." },
  causes:["flirsystems1978"], effects:["policeflir2000s"] },

{ id:"tiananmenfootage1989", year:1989, date:"1989", era:5, cat:"cctv",
  title:"After Tiananmen: Footage as a Manhunt",
  wiki:"1989 Tiananmen Square protests and massacre",
  summary:"After the June 4 crackdown, Chinese state television broadcasts photographs and video stills of protesters and asks the public to identify them — footage shot by foreign press cameras and security cameras repurposed, after the fact, into the basis of a nationwide manhunt.",
  importance:"In the weeks after the military cleared Tiananmen Square on 4 June 1989, Chinese state media broadcast images of people identified as participants in the protests, drawn from footage shot during the seven weeks of demonstrations by foreign news crews, state television, and security cameras, and called on viewers, neighbors, and work units to identify them. Thousands were arrested in the following months, many located through this combination of broadcast appeals and existing surveillance and personnel records. It was an early, stark demonstration of a capability that would become central to CCTV decades later: footage does not need to be watched live to be useful to power. Recorded once, it can be searched, broadcast, and acted upon long after the moment it captured has passed.",
  impact:{
    power:"Recorded footage becomes the basis for identifying and arresting people after an event has ended.",
    surveillance:"The 'retrospective surveillance' capability — footage searched and acted on after the fact — is demonstrated at national scale.",
    society:"Broadcast appeals turn the public itself into an instrument of identification." },
  causes:["polandmartiallaw1981","sonybetamovie1983"], effects:["stasiarchives"] },

{ id:"stasiarchives", year:1990, date:"1989–90", era:5, cat:"cctv",
  title:"East Germany's Files Are Opened",
  wiki:"Stasi",
  gallery:["Stasi Records Agency"],
  summary:"As the Berlin Wall falls, citizens occupy Stasi offices across East Germany to stop secret-police files from being destroyed — preserving an archive on millions of people that becomes, within two years, the most thoroughly opened surveillance-state record in history.",
  importance:"The Ministry for State Security had, by 1989, built files on an estimated six million people — a third of East Germany's population — using a network of regular officers and hundreds of thousands of informal informants who reported on neighbors, colleagues, and even spouses. As the regime collapsed in late 1989 and early 1990, citizens' committees occupied Stasi offices, including its Berlin headquarters in January 1990, to prevent staff from shredding the files. What survived became, under a law passed by the newly unified Germany, the basis of the Stasi Records Agency: the first time a former surveillance state's own archive was opened to the people it had watched, letting individuals read the files kept on them and on their friends and families.",
  impact:{
    power:"A mass-surveillance archive survives regime collapse and is opened to the people it documented.",
    law:"Germany legislates a right for individuals to read the secret-police files kept on them — a first.",
    surveillance:"The scale of a totalitarian surveillance apparatus — files on a third of a population — becomes fully documented." },
  causes:["tiananmenfootage1989","iranrevolutiontribunals"] }

);

// ERA 6 (1991-2011) — the camera goes online, the border and the database become
// surveillance infrastructure, and after a string of mass-casualty attacks, reviewing
// camera footage becomes the default first step of every major investigation. By the
// decade's end, the camera's gaze has, for the first time, also turned outward.
window.ATLAS_EVENTS.push(

{ id:"trojanroomwebcam", year:1993, date:"1991–93", era:6, cat:"cctv",
  title:"The Trojan Room Coffee Pot: The First Webcam",
  wiki:"Trojan Room coffee pot",
  summary:"A camera trained on a coffee pot in a Cambridge University computer lab, set up so researchers could check it without walking down the hall, becomes the world's first webcam once it goes online in 1993 — the camera's image enters the internet for the first time, for the most trivial reason imaginable.",
  importance:"Set up in 1991 by Quentin Stafford-Fraser and Paul Jardetzky to save colleagues a wasted trip to an empty coffee pot, the Trojan Room camera fed a low-resolution greyscale image to desktop computers on the lab's internal network. When the World Wide Web gained the ability to display images in 1993, Daniel Gordon and Martyn Johnson put the same feed on the public internet, and a coffee pot in Cambridge became, by some accounts, the first thing anyone in the world could watch live online. The feed ran until 2001, a minor cult object, but it established the pattern every networked camera since has followed: a camera, a network connection, and anyone, anywhere, able to look.",
  impact:{
    technology:"A camera's image is made available over a public computer network for the first time.",
    society:"A trivial, mundane subject becomes an early symbol of what the networked camera will be used for.",
    surveillance:"The architecture of the modern networked camera — image, network, remote viewer — is demonstrated, years before it is used for security." },
  causes:["ccdinvention"], effects:["ipcamera"] },

{ id:"operationgatekeeper1994", year:1994, date:"1994", era:6, cat:"cctv",
  title:"Operation Gatekeeper: The Border Becomes a Sensor",
  wiki:"Operation Gatekeeper",
  summary:"The United States launches Operation Gatekeeper, a buildup of fencing, floodlights, ground sensors, and cameras along the California-Mexico border designed not to seal it but to push crossings into terrain remote and dangerous enough to deter them — 'prevention through deterrence' as a surveillance strategy.",
  importance:"Announced by Attorney General Janet Reno in September 1994 and launched that October, Operation Gatekeeper concentrated agents, stadium lighting, infrared scopes, and remote cameras along the most heavily trafficked stretches of the San Diego border sector. The explicit strategy was not to make crossing impossible but to make the easiest routes monitored and the remaining routes, desert and mountain terrain, so hazardous that fewer people would attempt them; thousands died making those crossings in the years that followed. Gatekeeper established the border itself as a surveillance zone, instrumented with sensors and cameras whose purpose was deterrence and funneling rather than simple detection — a model later expanded with drones, ground radar, and AI-assisted camera towers.",
  impact:{
    government:"A national border is reconceived as an instrumented surveillance zone rather than a simple line.",
    technology:"Cameras, lighting, and sensors are deployed at a border not to stop crossings but to shape where they happen.",
    surveillance:"'Prevention through deterrence' establishes surveillance infrastructure as a tool for funneling, not just watching, human movement." },
  effects:["anpr1990s"] },

{ id:"cctvchallenge1994", year:1994, date:"1994–95", era:6, cat:"cctv",
  title:"After Bulger: Britain Pays for Cameras",
  wiki:"Murder of James Bulger",
  summary:"Grainy CCTV footage of two ten-year-olds leading toddler James Bulger from a Bootle shopping centre becomes one of the most-replayed images in British television history — and the public reaction helps the government launch a CCTV Challenge Competition that funds cameras in town centres across the country.",
  importance:"The February 1993 abduction and murder of two-year-old James Bulger was partly captured on a shopping-centre security camera, and the footage, broadcast repeatedly as the case became a national obsession, helped identify and convict his killers within months. The following year, Home Secretary Michael Howard launched a CCTV Challenge Competition, offering central government money to local partnerships that could match it with business funding to install open-street cameras; the first round, in March 1995, distributed grants to 106 schemes. It was the moment CCTV stopped being something individual shops and councils bought piecemeal and became a national policy with a funding stream — the direct ancestor of the much larger programs that would follow within the decade.",
  impact:{
    law:"A single piece of CCTV footage becomes the public justification for a national camera-funding policy.",
    government:"Central government money for street CCTV is allocated through a competitive grant process for the first time.",
    surveillance:"Open-street CCTV moves from ad hoc local purchase to funded national policy." },
  causes:["lutonpopplewell1986"], effects:["cctvinitiative1999"] },

{ id:"tokyosarin1995", year:1995, date:"1995", era:6, cat:"cctv",
  title:"Tokyo, 1995: Cameras Hunt a Cult",
  wiki:"Tokyo subway sarin attack",
  summary:"After the Aum Shinrikyo cult releases sarin gas on the Tokyo subway, killing twelve and injuring thousands, investigators spend years tracking down the perpetrators partly through surveillance-camera footage from stations, banks, and shops — one fugitive evades capture using the same gaps in coverage for seventeen years.",
  importance:"The 20 March 1995 attack, in which Aum Shinrikyo members punctured bags of sarin on five separate subway trains during the morning rush, was Japan's deadliest act of domestic terrorism and prompted a manhunt that ran for years. Investigators pieced together suspects' movements using whatever camera footage existed, bank cameras, shop cameras, station cameras, to place cult members at the scene and trace their escape routes; one fugitive, Katsuya Takahashi, remained at large until 2012, in part by staying in places coverage did not reach. The case demonstrated both what camera networks could do for a major investigation and how incomplete those networks still were in the mid-1990s — a gap subsequent decades would close.",
  impact:{
    government:"A mass-casualty terrorist attack becomes a years-long manhunt partly conducted through camera footage.",
    surveillance:"Surveillance camera coverage proves valuable but incomplete, with gaps fugitives can exploit for years.",
    law:"Camera footage becomes routine evidence in a major terrorism investigation and prosecution." },
  effects:["madridbombings2004"] },

{ id:"anpr1990s", year:1996, date:"1990s", era:6, cat:"cctv",
  title:"ANPR: Reading Every Plate",
  wiki:"Automatic number-plate recognition in the United Kingdom",
  summary:"Through the 1990s, British police forces roll out automatic number-plate recognition cameras developed from a 1970s Home Office project — the first surveillance technology built not to record a scene for a human to watch, but to read, classify, and database every vehicle that passes, automatically.",
  importance:"ANPR, developed from a Police Scientific Development Branch project that produced a working prototype in 1979 and its first arrest in 1981, spread through the 1990s from a handful of experimental sites to a standard tool in routine policing: cameras on motorways, at fuel stations, and on patrol cars that read number plates and check them, in real time, against databases of stolen, uninsured, or wanted vehicles. Unlike a CCTV camera, which produces images for a person to review, an ANPR camera produces structured data, a plate, a time, a location, automatically, at a scale no human reviewer could match. It is the first mass camera system whose primary output was a database record rather than a picture — the template every subsequent automated surveillance system would follow.",
  impact:{
    technology:"A camera system is built whose primary output is a database record, not an image for a human to view.",
    surveillance:"Automated, database-driven vehicle tracking operates at a scale no human-reviewed camera system could match.",
    law:"Vehicle movement becomes routinely logged and checked against police databases without individualized suspicion." },
  causes:["operationgatekeeper1994"], effects:["predictivepolicing2012"] },

{ id:"cctvinitiative1999", year:1999, date:"1999", era:6, cat:"cctv",
  title:"The CCTV Initiative: £170 Million for Cameras",
  wiki:"Closed-circuit television",
  summary:"The British government's Crime Reduction Programme commits £170 million to fund over 680 town-centre, car-park, and transport CCTV schemes — by far the largest public investment in camera surveillance any democracy had yet made, justified on evidence that was, even then, mixed.",
  importance:"Running from 1999 to 2003, the CCTV Initiative was the centrepiece of a national Crime Reduction Programme that funded hundreds of schemes ranging from £30,000 neighbourhood systems to £7 million city-wide networks, on the strength of studies showing dramatic reductions in vehicle theft from monitored car parks. By the early 2000s, estimates, disputed, but widely repeated, put Britain's camera count in the millions, more per capita than any other country, almost entirely the product of a decade of competitive government grant programs rather than any single national plan. The evidence base for cameras' effect on violent crime, as opposed to car-park theft, remained far thinner than the funding that followed it.",
  impact:{
    government:"The largest public investment in camera surveillance yet made by a democracy is committed on a narrow evidence base.",
    surveillance:"Britain's camera count reaches an estimated millions, the product of a decade of grant-funded local schemes.",
    law:"Public CCTV becomes permanent national infrastructure, funded well ahead of any settled evidence of its broader effectiveness." },
  causes:["cctvchallenge1994"], effects:["hikvision2001","smarper2008"] },

{ id:"hikvision2001", year:2001, date:"2001", era:6, cat:"cctv",
  title:"Hikvision: The Camera Becomes a Commodity",
  wiki:"Hikvision",
  summary:"Hikvision is founded in Hangzhou, China — within two decades it becomes the world's largest maker of surveillance cameras and DVRs, supplying the cameras behind a large share of the world's CCTV systems, from European town centres to Xinjiang internment camps.",
  importance:"Founded on 30 November 2001 with backing from a Chinese state-owned defense-electronics conglomerate, Hikvision built its early business on digital video recorders before expanding into cameras, eventually manufacturing a substantial share of the IP cameras and CCTV equipment sold worldwide — components found in everything from small-business security systems to city-wide surveillance networks and to the camera infrastructure of China's internment camps in Xinjiang. Its rise tracks the moment CCTV stopped being a system of cameras feeding tapes to a security desk and became a commodity: cheap, networked, mass-produced hardware, made overwhelmingly in one country, sold into markets whose governments rarely asked who made the equipment watching their streets.",
  impact:{
    technology:"Surveillance cameras and recorders become a mass-manufactured global commodity, made overwhelmingly by one country's companies.",
    government:"A state-backed manufacturer becomes central to surveillance infrastructure in countries with no say in its supply chain.",
    surveillance:"The same hardware supply chain equips ordinary CCTV systems and the camera networks of internment camps." },
  causes:["ccdinvention","cctvinitiative1999"], effects:["billioncameras2025"] },

{ id:"goldenshield2002", year:2002, date:"2002", era:6, cat:"cctv",
  title:"The Golden Shield: Cameras Meet the Database",
  wiki:"Golden Shield Project",
  summary:"China's Ministry of Public Security formally launches the Golden Shield Project, an effort to integrate internet filtering, household registration records, and surveillance-camera feeds into unified police databases — the architectural blueprint for linking 'what the cameras see' to 'who the state already knows about'.",
  importance:"Conceived in the late 1990s and showcased at a security-technology exhibition before formal rollout from 2002, the Golden Shield Project was originally envisioned as a comprehensive national database linking citizens' identity records, internet activity, and physical movements into a single system accessible to police at every level. Internet growth far outpaced the project's ability to build that single database, and 'Golden Shield' became best known abroad for its internet-filtering component, the Great Firewall. But its original ambition, integrating camera feeds with identity and movement records under the Ministry of Public Security, is the architecture that China's later city-wide camera networks, and the facial-recognition systems layered onto them, would actually build.",
  impact:{
    government:"A national project sets out to integrate surveillance cameras, identity records, and internet activity into unified police databases.",
    surveillance:"The architecture linking 'what a camera sees' to 'a citizen's existing record' is conceived as explicit policy.",
    technology:"Camera-feed integration with identity databases is established as the design goal years before facial recognition makes it practical." },
  effects:["chinasurveillance"] },

{ id:"madridbombings2004", year:2004, date:"2004", era:6, cat:"cctv",
  title:"Madrid, 2004: The Faces in the Footage",
  wiki:"2004 Madrid train bombings",
  summary:"After coordinated bombs kill 191 people on Madrid commuter trains, investigators identify suspects within days using station and shop CCTV footage — cementing CCTV's role, across Europe, as the first place investigators look after a mass-casualty attack.",
  importance:"The 11 March 2004 attacks, in which ten bombs exploded on four commuter trains during the morning rush, killed 191 people and injured around 2,000 — Europe's deadliest terrorist attack since the Second World War. Investigators recovered footage from station and shop cameras showing several of the bombers in the hours before the attack, footage that featured prominently in the subsequent investigation and trial. Coming three years after 9/11 and a year before London's 7 July bombings, Madrid reinforced a pattern that was becoming standard across Europe: after a mass-casualty attack, recovering and reviewing every nearby camera's footage is among the first and most productive investigative steps, regardless of whether any camera was aimed at the attack itself.",
  impact:{
    law:"CCTV footage becomes central evidence in the investigation and trial of a mass-casualty terrorist attack.",
    government:"Camera footage recovery becomes a standard, expected first step in counter-terrorism investigations across Europe.",
    surveillance:"The value of camera coverage is demonstrated retroactively — footage never intended for this purpose becomes decisive." },
  causes:["tokyosarin1995"], effects:["mumbaiattacks2008"] },

{ id:"policeflir2000s", year:2005, date:"2000s", era:6, cat:"cctv",
  title:"FLIR Takes to the Sky",
  wiki:"Forward-looking infrared",
  summary:"Through the 2000s, forward-looking infrared cameras become standard equipment on police helicopters, letting officers track a person's body heat through darkness, smoke, or undergrowth — even as, in 2001, the US Supreme Court had just ruled that pointing a thermal camera at a home requires a warrant.",
  importance:"Mounted on a gimbal beneath a helicopter and operated by a crew member inside, FLIR cameras let police locate a fleeing suspect, a lost hiker, or a hidden marijuana grow by the heat it gives off, regardless of visible light or cover, dramatically improving the success rate of aerial searches that had previously depended on spotlights and luck. The technology's spread through the 2000s proceeded on a curiously divided legal track: the Supreme Court's 2001 ruling in Kyllo v. United States held that using thermal imaging to detect heat from inside a private home was a search requiring a warrant, while the same cameras, aimed at people in public space — streets, fields, rooftops — became routine and largely unchallenged. The line the courts drew ran through walls, not through the technology itself.",
  impact:{
    technology:"Thermal imaging becomes standard equipment for aerial policing, search and rescue, and pursuit.",
    law:"Courts draw a line between thermal imaging of a home (restricted) and of public space (largely unregulated), based on location rather than the technology.",
    surveillance:"Airborne heat-vision surveillance of public space expands largely without the legal scrutiny applied to its use against homes." },
  causes:["microbolometer1980s","kyllo"], effects:["covidthermalfever2020"] },

{ id:"nicevideoanalytics2006", year:2006, date:"2006", era:6, cat:"cctv",
  title:"Software Learns to Watch the Footage",
  wiki:"Video content analysis",
  gallery:["NICE Ltd."],
  summary:"NICE Systems and competitors begin selling video content analysis software that scans CCTV feeds automatically — detecting abandoned bags, loitering, or a person matching a description — addressing the problem that millions of new cameras had created vastly more footage than any number of human operators could watch.",
  importance:"By the mid-2000s, the camera-funding programs of the previous decade had created a volume of CCTV footage that no realistic number of human monitors could review in real time, let alone search after the fact. Video content analysis software, sold by companies including the Israeli firm NICE Systems, addressed this by having algorithms watch the feeds instead: flagging unattended objects, counting people, detecting motion in restricted areas, or, in later versions, searching archived footage for a person matching a description across an entire camera network. It was the moment CCTV's bottleneck stopped being the number of cameras and became the software watching them, the precondition for the AI-driven systems, including facial recognition and predictive policing, that would follow.",
  impact:{
    computing:"Software begins watching camera feeds in place of human operators, at a scale humans never could.",
    surveillance:"The bottleneck in mass camera networks shifts from the number of cameras to the software analyzing their output.",
    technology:"Automated detection and cross-camera search of footage becomes a commercial product." },
  causes:["cctvinitiative1999","hikvision2001"], effects:["predictivepolicing2012"] },

{ id:"mumbaiattacks2008", year:2008, date:"2008", era:6, cat:"cctv",
  title:"Mumbai, 2008: The Gunman on Camera",
  wiki:"2008 Mumbai attacks",
  summary:"During the three-day siege of Mumbai, CCTV cameras at the city's main railway station capture clear footage of gunman Ajmal Kasab firing on commuters — images that become the defining visual record of the attack and the central evidence at his trial and execution.",
  importance:"The November 2008 attacks, in which ten gunmen struck hotels, a railway station, a hospital, and other sites across Mumbai over three days, killed 166 people. Security cameras at Chhatrapati Shivaji Terminus captured Kasab, the only attacker captured alive, walking through the station with an assault rifle moments before he opened fire, an image broadcast worldwide and produced at his trial as direct evidence of the attack. The footage made Kasab's prosecution unusually straightforward by the standards of mass-casualty terrorism trials, and the attacks accelerated camera installation across Indian cities and transport hubs, part of a broader pattern in which CCTV expansion follows, rather than prevents, the attacks that justify it.",
  impact:{
    law:"CCTV footage becomes the central, decisive evidence in the trial and execution of a terrorist.",
    government:"A mass-casualty attack accelerates camera installation across a country's cities and transport infrastructure.",
    surveillance:"The pattern in which CCTV expansion follows rather than prevents the attacks used to justify it repeats outside the Western world." },
  causes:["madridbombings2004"], effects:["dubaimabhouh2010"] },

{ id:"smarper2008", year:2008, date:"2008", era:6, cat:"cctv",
  title:"S and Marper: Europe Draws a Line on Databases",
  wiki:"S and Marper v United Kingdom",
  summary:"The European Court of Human Rights rules that Britain's practice of retaining DNA profiles and fingerprints of people who were arrested but never convicted violates their right to privacy — one of the first major rulings to set a limit on the otherwise one-directional growth of state identification databases.",
  importance:"The case was brought by S, an eleven-year-old acquitted of a charge, and Michael Marper, whose case was dropped, after Britain refused to delete their DNA and fingerprints from the national database despite neither having been convicted of anything. In December 2008 the Strasbourg court ruled unanimously that indefinite, blanket retention of such data from anyone merely arrested, regardless of outcome, violated the European Convention's right to private life, calling Britain's database practices disproportionate among Council of Europe states. It was a rare instance, after a decade and a half of expanding British camera, vehicle, and biometric databases, of a court telling a government that a database had to get smaller, not bigger.",
  impact:{
    law:"A European court rules that indefinite retention of biometric data from people never convicted violates privacy rights.",
    government:"Britain is required, for the first time, to delete rather than retain entries in a national identification database.",
    surveillance:"A court sets a legal limit on the otherwise one-directional growth of state identification databases." },
  causes:["cctvinitiative1999"], effects:["euaiactfr"] },

{ id:"irangreenmovement2009", year:2009, date:"2009", era:6, cat:"cctv",
  title:"Neda: The Camera Turns Outward",
  wiki:"2009 Iranian presidential election protests",
  gallery:["Death of Neda Agha-Soltan"],
  summary:"During Iran's post-election protests, a bystander's mobile-phone video of Neda Agha-Soltan's death is uploaded and broadcast globally within hours — a moment when a recorded image, for the first time at this scale, flows from an ordinary citizen's pocket camera outward to the world, rather than from a state's camera down onto its subjects.",
  importance:"When Iranians took to the streets in June 2009 to protest the disputed re-election of Mahmoud Ahmadinejad, the government restricted foreign press access, but could not prevent the spread of mobile-phone footage shot by participants themselves. The video of 26-year-old Neda Agha-Soltan dying after being shot during a protest, filmed on a bystander's phone, was online and broadcast by international networks within hours, becoming one of the most widely viewed pieces of citizen video in history. Two decades after Tiananmen, where recorded images had flowed from the state outward to identify protesters, the direction reversed: a camera in an ordinary person's hand became the instrument that made a state's violence visible to the world in near real time.",
  impact:{
    society:"Citizen-shot video becomes a primary global source of information about events a government wants suppressed.",
    power:"The direction of camera power inverts: footage flows from citizens outward to the world, exposing rather than identifying.",
    communications:"Near-real-time global broadcast of citizen video becomes possible for the first time at this scale." },
  causes:["tiananmenfootage1989"], effects:["dubaimabhouh2010"] },

{ id:"dubaimabhouh2010", year:2010, date:"2010", era:6, cat:"cctv",
  title:"Dubai, 2010: A City of Cameras Reconstructs an Assassination",
  wiki:"Assassination of Mahmoud Al-Mabhouh",
  summary:"After Hamas commander Mahmoud al-Mabhouh is assassinated in a Dubai hotel, police release CCTV footage and photographs reconstructing the movements of 26 to 27 suspected Mossad operatives across the city's airports, hotels, and streets — a single dense camera network turning an entire covert operation into a public dossier.",
  importance:"Al-Mabhouh was found dead in his Dubai hotel room on 20 January 2010, and within weeks Dubai police had assembled and released a remarkably detailed account of the operation: passport images, hotel check-in records, and footage from airport, hotel-lobby, and street cameras tracking a team of operatives, travelling on forged European passports, from their arrival to their departure. It was made possible by Dubai's unusually dense camera coverage across exactly the infrastructure, airports, luxury hotels, taxi ranks, that a covert team would have to pass through. What Dubai police did by painstaking manual cross-referencing of footage and records in 2010, facial-recognition-equipped camera networks would, within a decade, be designed to do automatically.",
  impact:{
    surveillance:"A single city's camera network reconstructs an entire covert intelligence operation after the fact.",
    government:"A dense, integrated camera network becomes a tool a state can turn against another state's intelligence service.",
    technology:"The manual cross-referencing of footage and travel records previews what automated facial-recognition camera networks will do natively." },
  causes:["mumbaiattacks2008","irangreenmovement2009"], effects:["xinjiangfr2017"] }

);

// ERA 7 (2012-2026) — the algorithm learns to watch, the surveillance state reaches
// consumer hardware, and a decade of deployment without regulation provokes the first
// serious legislative response — too slow, critics argue, and too late to constrain
// systems already running at planetary scale.
window.ATLAS_EVENTS.push(

{ id:"predictivepolicing2012", year:2012, date:"2012", era:7, cat:"cctv",
  title:"PredPol: The Algorithm Writes the Beat",
  wiki:"Geolitica",
  gallery:["Predictive policing"],
  summary:"PredPol, later renamed Geolitica, begins selling a predictive policing algorithm to police departments — a system that uses crime history to generate 500-square-foot 'prediction boxes' for officers to patrol, shifting the logic of surveillance from responding to past crime to pre-empting predicted future crime.",
  importance:"Founded in 2012 from an LAPD and UCLA collaboration, PredPol applied earthquake-aftershock mathematics to crime prediction, generating shift-by-shift map overlays showing where the algorithm forecast crime was most likely to occur. Departments from Los Angeles to London adopted it. Critics documented a compounding-bias problem: because the algorithm trained on arrest records rather than actual crime, and arrest rates reflected policing patterns rather than underlying crime rates, it sent officers to over-policed neighbourhoods first, generating more arrests there, confirming its predictions in a closed loop. The company shut down in 2023, but the logic it embodied — cameras and sensors feeding continuous data to an algorithm that decides where surveillance resources go next — had already become the default architecture of modern policing analytics.",
  impact:{
    surveillance:"An algorithm trained on police arrest records sends officers to the same neighbourhoods repeatedly, encoding past bias as future prediction.",
    computing:"Crime prediction software demonstrates how training data from a surveillance system can self-reinforce and amplify disparate outcomes.",
    law:"Predictive policing shifts the object of surveillance from individuals who have acted to places predicted to become crime sites." },
  causes:["anpr1990s","nicevideoanalytics2006"], effects:["euaiactfr"] },

{ id:"socialcredit2014", year:2014, date:"2014", era:7, cat:"cctv",
  title:"The Social Credit System: Scoring Citizens at Scale",
  wiki:"Social credit system",
  summary:"China's State Council issues a Planning Outline for a national Social Credit System, formalizing what Rongcheng city had piloted in 2013 as a local scoring scheme into a national policy framework — an ambition to rate the trustworthiness of citizens, businesses, and government agencies from a single integrated data infrastructure.",
  importance:"The 2014 Planning Outline described a system that would aggregate financial, legal, social, and behavioral data about every Chinese citizen and institution into unified creditworthiness scores, to be used for everything from loan eligibility to travel restrictions and government contract eligibility. Rongcheng's pilot, launched in 2013, assigned each of its roughly 740,000 adult residents a numerical score adjusted for traffic violations, volunteering, debt repayment, and administrative compliance. Western coverage often framed the system as a single unified Orwellian algorithm; the reality was a patchwork of municipal pilots and sectoral blacklists that varied widely by city and agency, sharing an ambition — integrating surveillance data into governance decisions — more than a single implementation.",
  impact:{
    government:"Behavioral data aggregated from cameras, financial records, and administrative databases is formalized as a governance tool.",
    surveillance:"The distinction between a citizen's financial credit score and their overall civic trustworthiness is formally dissolved.",
    society:"A scoring framework built for financial trust is extended to encompass compliance with government norms and social expectations." },
  causes:["goldenshield2002","chinasurveillance"], effects:["xinjiangfr2017"] },

{ id:"flirone2014", year:2014, date:"2014", era:7, cat:"cctv",
  title:"FLIR One: Thermal Vision in Every Pocket",
  wiki:"Teledyne FLIR",
  gallery:["Thermographic camera"],
  summary:"FLIR Systems introduces FLIR One at CES 2014, a $349 thermal imaging attachment for the iPhone 5 — the moment when a technology that had spent thirty years moving from classified military hardware to police helicopters reaches the consumer market, available to anyone with a smartphone.",
  importance:"For most of its history, infrared thermal imaging had required specialized optics, cryogenic cooling, and prices measured in thousands of dollars, equipment built for military targeting and, later, police surveillance. The FLIR One, announced at the January 2014 Consumer Electronics Show, packed a microbolometer sensor into an iPhone case small enough to fit in a pocket and cheap enough for mass-market retail. It was a consumer product in search of use cases — home inspectors, hobbyists, energy auditors — but it also demonstrated that the underlying technology had crossed the consumer threshold. The same sensor that had tracked suspects through darkness from a police helicopter could now attach to a smartphone, and the barriers between military-grade surveillance hardware and everyday devices were thinner than they had ever been.",
  impact:{
    technology:"Military-grade thermal imaging reaches the consumer market for the first time, at mass-market price and smartphone scale.",
    surveillance:"A sensor technology developed for military and police surveillance becomes available to private citizens and private investigators.",
    society:"The 30-year arc from classified infrared weapon sight to a $349 smartphone attachment is complete." },
  causes:["policeflir2000s"], effects:["covidthermalfever2020"] },

{ id:"charliehebdo2015", year:2015, date:"2015", era:7, cat:"cctv",
  title:"After Charlie Hebdo: France Legalizes Mass Surveillance",
  wiki:"Intelligence Act (France)",
  gallery:["Charlie Hebdo shooting"],
  summary:"Three months after gunmen kill twelve people at the Charlie Hebdo offices in Paris, the French parliament passes an Intelligence Act authorizing warrantless mass surveillance of communications, real-time location tracking, and algorithmic scanning of internet metadata — the most sweeping surveillance law in French history.",
  importance:"The attacks of 7 January 2015, in which brothers Chérif and Saïd Kouachi killed twelve people at the satirical newspaper's offices, prompted the French government to accelerate an intelligence reform bill that had been in preparation for months. Introduced to parliament in March 2015 by Prime Minister Manuel Valls and passed in July over strong civil-liberties objections, the Intelligence Act authorized the use of IMSI catchers, bulk metadata analysis by algorithm, and surveillance of communications without prior judicial authorization, subject only to oversight by an advisory body with no binding authority. France joined the UK and the United States in normalizing domestic mass surveillance as a legislative response to terrorism, settling a debate that had previously been largely covert into statute.",
  impact:{
    law:"Mass communications surveillance is legalized and formalized as statutory power in France for the first time.",
    government:"A terrorist attack is used to accelerate a surveillance reform bill that had been in preparation before the attack.",
    surveillance:"Algorithmic bulk-metadata analysis of internet and phone communications is authorized without individual judicial warrant." },
  causes:["madridbombings2004","tokyosarin1995"], effects:["ipa2016"] },

{ id:"ipa2016", year:2016, date:"2016", era:7, cat:["cctv","law"],
  title:"The Snoopers' Charter: Britain Writes Surveillance into Law",
  wiki:"Investigatory Powers Act 2016",
  summary:"The UK's Investigatory Powers Act 2016 becomes law, compiling and extending surveillance powers that had previously operated in legal shadow: bulk interception of communications, bulk equipment interference, bulk personal datasets, and a requirement that internet providers retain all customers' browsing histories for 12 months.",
  importance:"Passed in November 2016 after years of parliamentary debate and the failed attempts of a predecessor bill, the Investigatory Powers Act codified in explicit statute the surveillance programs that Edward Snowden's 2013 disclosures had shown to be already operating. Its powers included bulk collection of communications data; targeted and bulk equipment interference, effectively state hacking; retention by internet service providers of every customer's internet connection records for 12 months, accessible by dozens of agencies; and a new Investigatory Powers Commissioner to oversee the system. Critics called it the most far-reaching surveillance law in any Western democracy. Parts were later struck down by UK courts as incompatible with human rights law, but the bulk of it entered force and set the template for subsequent legislative attempts across Europe.",
  impact:{
    law:"Surveillance powers previously operating in legal shadow are codified in explicit statute and extended significantly.",
    government:"Internet service providers are legally required to retain every customer's browsing history for 12 months.",
    surveillance:"Britain legislates the most comprehensive set of bulk-collection surveillance powers of any Western democracy." },
  causes:["charliehebdo2015","smarper2008"], effects:["euaiactfr"] },

{ id:"xinjiangfr2017", year:2017, date:"2017", era:7, cat:"cctv",
  title:"Xinjiang: The Total Surveillance State",
  wiki:"Xinjiang internment camps",
  gallery:["Facial recognition system"],
  summary:"China begins deploying a comprehensive, integrated facial-recognition camera system across Xinjiang — checkpoints, mosques, petrol stations, shopping centres, residential blocks — whose footage feeds into a regional police database that tracks the movements of the territory's Uyghur Muslim population in real time.",
  importance:"From 2017, Xinjiang became the site of the most extensive camera-based surveillance system deployed against a civilian population in the post-war period: police checkpoints equipped with facial-recognition cameras scanned faces every few hundred metres; convenience police stations installed roughly every 300 to 500 metres served partly as camera nodes and data collection posts; WIFI sniffers swept device IDs from passing phones; and residents' biometrics were collected at enrollment stations and fed into regional databases. The system was built to a significant degree with commercial hardware including cameras from Hikvision, Dahua, and other Chinese manufacturers that also supplied global markets. What it demonstrated, for the first time at this scale, was that a government with enough cameras, enough compute, and a closed legal environment could approach comprehensive real-time tracking of an entire population's daily physical movements.",
  impact:{
    surveillance:"A government achieves near-comprehensive real-time tracking of an entire population's physical movements using camera and facial-recognition networks.",
    technology:"Commercial CCTV hardware, supplied partly by globally-traded manufacturers, is assembled into a mass-population-tracking system.",
    government:"A facial-recognition surveillance network built for minority-population control is operated openly, with legal sanction, for the first time at this scale." },
  causes:["socialcredit2014","dubaimabhouh2010"], effects:["rekognitionaclu2018","billioncameras2025"] },

{ id:"rekognitionaclu2018", year:2018, date:"2018", era:7, cat:"cctv",
  title:"Amazon Rekognition and the Bias Reckoning",
  wiki:"Amazon Rekognition",
  summary:"The ACLU tests Amazon's Rekognition facial recognition service by matching 535 members of Congress against a database of arrested people — the system produces 28 false matches, disproportionately of members of colour — igniting a controversy over AI face recognition's accuracy disparities that forces a public reckoning among tech companies and regulators.",
  importance:"Amazon Rekognition, launched in 2016, offered cloud-based facial recognition to law enforcement and other customers at commodity prices; by 2018, the ACLU's test, which showed that the system generated false matches for legislators of colour at higher rates than for white legislators, became the most-cited demonstration of the field's accuracy-disparity problem. MIT researcher Joy Buolamwini's concurrent Gender Shades study documented substantially higher error rates on darker-skinned faces across multiple commercial systems, reinforcing the finding. The combined pressure led Amazon, Microsoft, and IBM to pause or withdraw facial recognition products from law enforcement sales in 2020. For the EU, whose AI Act was then in drafting, the cases provided concrete evidence for classifying real-time facial recognition in public spaces as high-risk AI.",
  impact:{
    computing:"AI facial recognition is shown to have substantially higher error rates on darker-skinned faces, across multiple commercial systems.",
    law:"Tech companies withdraw or pause facial recognition products from law enforcement sales under public pressure, ahead of any legal requirement.",
    surveillance:"Documented accuracy disparities force a political and regulatory reckoning with the mass deployment of AI face recognition in public space." },
  causes:["xinjiangfr2017","frcctv1998"], effects:["euaiactfr","clearviewgdpr2022"] },

{ id:"covidcontacttracing2020", year:2020, date:"2020", era:7, cat:"cctv",
  title:"Contact Tracing Goes Digital",
  wiki:"COVID-19 apps",
  summary:"During the COVID-19 pandemic, dozens of governments deploy smartphone contact-tracing apps in weeks — compressed from years of normal policy timescale into months by emergency — forcing public debates, compressed to emergency timescale, about what data citizens will share with their governments, and on what terms.",
  importance:"The first generation of COVID contact-tracing apps, deployed by Singapore (TraceTogether), Australia (COVIDSafe), and dozens of others from March 2020, used Bluetooth or GPS to log contacts and alert users to potential exposures. The design choice between centralized data storage, where the government held the exposure network, and decentralized storage, where contact logs stayed on individuals' phones, became a central political question in several countries, with Germany, Switzerland, and others switching from centralized to decentralized designs after public objection. The episode was the largest and fastest public experiment in mass voluntary health surveillance ever conducted, and it demonstrated that pandemic emergency could compress years of normal surveillance-technology deployment into months, with regulatory frameworks trailing far behind.",
  impact:{
    government:"Dozens of governments deploy mass digital health surveillance systems in weeks, compressed from the years such deployment would normally require.",
    surveillance:"The design choice between centralized and decentralized contact data storage becomes a public political question for the first time.",
    law:"Emergency pandemic powers override the usual timescales of privacy law and regulatory review for surveillance technology deployment." },
  causes:["ipcamera","ipa2016"], effects:["euaiactfr"] },

{ id:"covidthermalfever2020", year:2020, date:"2020", era:7, cat:"cctv",
  title:"Fever Cameras at Every Door",
  wiki:"Thermographic camera",
  gallery:["COVID-19 pandemic"],
  summary:"During the COVID-19 pandemic, thermal fever-screening cameras are installed at airports, hospitals, offices, schools, and shops worldwide — an unprecedented mass deployment of a camera technology that reads a bodily state rather than an identity, normalized largely without regulatory review and without the controversy that facial recognition would have attracted.",
  importance:"From early 2020, thermal cameras capable of flagging individuals with elevated body temperature became standard fixtures at entrance points across Asia and spread rapidly worldwide as the pandemic intensified. The deployment required no regulatory approval, generated no controversy comparable to facial recognition, and operated with the implicit consent of populations willing to accept almost any measure framed as pandemic control. What it normalized, largely unnoticed, was a new kind of camera: one that reads not who you are but what your body is doing. The same cameras and the same regulatory permissiveness that allowed fever screening at every airport door were later pointed toward different bodily states — drowsiness, emotional affect, health condition — in contexts where the emergency justification was far weaker.",
  impact:{
    technology:"A camera that reads a bodily state rather than an identity is normalized at mass scale in public space for the first time.",
    surveillance:"Thermal body-state surveillance is deployed with implicit mass consent under emergency conditions, before any regulatory framework exists.",
    society:"The emergency normalization of reading citizens' bodies by camera sets a template later applied to non-emergency monitoring of affect and health." },
  causes:["flirone2014"], effects:["emotionrecognition2023"] },

{ id:"ukrainewar2022", year:2022, date:"2022", era:7, cat:"cctv",
  title:"Ukraine: The Surveilled War",
  wiki:"Russian invasion of Ukraine",
  summary:"Russia's full-scale invasion of Ukraine in 2022 becomes the first major land war fought under near-continuous drone and satellite surveillance by both sides, by journalists, and by the public — commercial satellite imagery, civilian drone footage, facial recognition of casualties, and open-source intelligence tools converging to make a battlefield substantially observable to the world in near real time.",
  importance:"Ukraine deployed Clearview AI to identify Russian casualties and prisoners by matching faces against social-media databases; civilian drones equipped with consumer cameras were used for reconnaissance, artillery spotting, and strike missions at a scale no previous conflict had seen; and commercial satellite imagery from Planet Labs and Maxar was released publicly, letting journalists and researchers document troop movements and atrocities with a timeliness previously impossible. Russia, meanwhile, used facial-recognition cameras across occupied territories and against domestic anti-war protesters, deploying the same systems Moscow had installed during the previous decade. The conflict demonstrated that surveillance technology built for civilian and commercial use — consumer drones, satellite subscriptions, cloud facial recognition — had become a primary instrument of modern warfare.",
  impact:{
    surveillance:"Commercial surveillance technologies — consumer drones, satellite imagery, cloud facial recognition — become primary instruments of warfare.",
    government:"A country at war deploys facial recognition to identify enemy casualties at scale, using a third-party commercial database.",
    technology:"Open-source intelligence using public satellite and drone footage lets the world observe a major war in near real time." },
  causes:["dubaimabhouh2010","chinasurveillance"], effects:["billioncameras2025"] },

{ id:"clearviewgdpr2022", year:2022, date:"2022", era:7, cat:"cctv",
  title:"Clearview AI: The Face Collector Meets Europe",
  wiki:"Clearview AI",
  summary:"Italy, France, Greece, and the United Kingdom each fine Clearview AI — a company that scraped billions of publicly posted faces from the internet to build a facial recognition database sold to law enforcement — finding that collecting faces without consent violates fundamental data rights, regardless of whether the faces were publicly available.",
  importance:"Clearview AI, founded in 2017, had by 2020 built a database of over three billion faces scraped from social media and public websites, offered to police forces as a search tool: upload a photo, receive social media profiles back. The European fines, Italy €20 million in February 2022, France €20 million in October, Greece €20 million in July, and the UK £7.5 million in May, established that the mere public availability of a photograph does not constitute consent to its collection for biometric profiling, and that the GDPR applies to any company processing European citizens' data regardless of where the company is incorporated. Clearview disputed all the fines, refused to comply with deletion orders, and continued operating outside Europe, demonstrating as plainly as any case yet had the gap between European regulatory intent and effective enforcement over companies headquartered elsewhere.",
  impact:{
    law:"European data regulators rule that public availability of a photograph does not constitute consent to its collection for biometric profiling.",
    surveillance:"A company builds the world's largest facial recognition database from scraped public photos, then disputes every regulatory order to stop.",
    government:"The GDPR's extraterritorial reach is tested and found wanting: fines issued, orders defied, company continues operating." },
  causes:["rekognitionaclu2018","smarper2008"], effects:["euaiactfr"] },

{ id:"emotionrecognition2023", year:2023, date:"2020s", era:7, cat:"cctv",
  title:"Emotion Recognition: Reading the Face",
  wiki:"Emotion recognition",
  summary:"Emotion recognition systems — AI software that claims to infer a person's emotional state, fatigue, deception, or attention from facial expressions — spread into workplace monitoring tools, exam proctoring software, driver fatigue detection, and airport screening, despite scientific consensus that the technology's claims outrun its accuracy.",
  importance:"Emotion recognition draws on the facial action coding system developed in the 1970s and on machine learning applied to face video. By the early 2020s it had been embedded in exam-proctoring software monitoring university students for signs of cheating, in driver-monitoring systems watching for fatigue, in customer-service software scoring workers on apparent attentiveness, and in airport security pilots flagging passengers whose expressions algorithms classified as suspicious. A 2019 assessment by the Association for Psychological Science found little consistent evidence that facial expressions reliably encode inner emotional states across individuals or cultures. The EU AI Act's 2023 text specifically restricted real-time biometric categorization in public spaces and identified workplace and educational emotion recognition as among its most contested prohibitions.",
  impact:{
    computing:"AI emotion inference is embedded in workplace monitoring, exam proctoring, and airport security despite contested scientific evidence for its validity.",
    law:"The EU AI Act specifically restricts emotion recognition in public and employment contexts, identifying it as a distinct category of prohibited AI.",
    surveillance:"A camera system that claims to read internal mental states rather than observable facts becomes a commercial product for continuous human monitoring." },
  causes:["nicevideoanalytics2006","covidthermalfever2020"], effects:["euaiactfr"] },

{ id:"billioncameras2025", year:2025, date:"2025", era:7, cat:"cctv",
  title:"One Billion Eyes",
  wiki:"Closed-circuit television",
  summary:"By 2025, the number of surveillance cameras installed worldwide is estimated to have passed one billion — roughly one for every eight people on earth — the majority manufactured by Chinese companies, with China hosting the highest concentration and London, Delhi, and Singapore among the most-watched cities outside it.",
  importance:"The cumulative deployment of CCTV cameras since the 1990s, accelerated by the falling cost of IP cameras, the proliferation of cloud storage, and government funding programs in dozens of countries, produced a camera density by the mid-2020s that had no historical precedent. Estimates, though imprecise, converged on a figure around one billion cameras globally by 2025, with Chinese cities hosting a disproportionate share: Taiyuan, Wuxi, and Changsha ranked among the world's most surveilled cities by cameras per capita. The one-billion figure is not simply a quantity milestone; it marks the point at which a substantial fraction of outdoor public space in major cities worldwide is under more-or-less continuous camera coverage — the state of affairs that had been the subject of utopian and dystopian speculation since the first CCTV system went live in a German rocket factory in 1942.",
  impact:{
    surveillance:"Continuous outdoor camera coverage of a substantial fraction of public space in major cities worldwide is achieved for the first time.",
    technology:"The global camera count crosses one billion, the cumulative product of 80 years of government, commercial, and residential deployment.",
    society:"The physical public space available to a person in a major city without camera coverage is, for the first time, the exception rather than the norm." },
  causes:["hikvision2001","ukrainewar2022","xinjiangfr2017"] },

{ id:"indiaaadhaar2025", year:2025, date:"2025", era:7, cat:"cctv",
  title:"Aadhaar Plus Face: India's Biometric State",
  wiki:"Aadhaar",
  summary:"India's Aadhaar biometric identity system, which by 2025 holds the iris scans, fingerprints, and photographs of over 1.4 billion enrolled residents, expands into facial recognition — integrated into university entrance exams, welfare disbursement, border crossing, and public surveillance — making India's the world's largest biometric identity infrastructure.",
  importance:"Aadhaar, launched in 2009, was originally designed for welfare disbursement, a way to verify beneficiary identity and reduce fraud, but over fifteen years it was extended to cover SIM card issuance, bank accounts, tax filing, airline travel, and school enrollment, effectively becoming an unavoidable part of daily life. The National Crime Records Bureau's Automated Facial Recognition System, developed from 2019, aimed to integrate Aadhaar's photograph database with police camera networks across the country. By 2025, facial recognition had been piloted for entry to university examinations to prevent impersonation, for Aadhaar-based face authentication in welfare delivery, and at major transport hubs. India thus assembled, largely without a dedicated data-protection framework for most of the system's life, what was by enrollment numbers the world's largest biometric surveillance infrastructure.",
  impact:{
    government:"A welfare-delivery biometric database is progressively integrated into law enforcement, education, and transport surveillance over 15 years.",
    surveillance:"India assembles the world's largest biometric identity infrastructure largely without a dedicated data-protection framework for most of its existence.",
    law:"The extension of a consent-framed welfare database into police facial-recognition networks proceeds ahead of any specific legal authorization for the fusion." },
  causes:["mumbaiattacks2008","hikvision2001"] }

);
