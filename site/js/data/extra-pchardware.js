// SUPPLEMENT — the personal-computer era as hardware and companies: the founding of Apple
// and Microsoft, the graphical operating system, and the unglamorous components that made
// computing personal — the calculator, the printer on the desk, and the long climb of
// storage from floppy disk to flash. These are the physical substrate beneath the software
// histories already in the atlas. Cross-links the existing altair, ibmpc, intel4004,
// integratedcircuit, transistor, mooreslaw, microsoftcase, appstore cards. cat:"computing"
// (a few carry print/internet facets). Round one: data only — images to follow.
window.ATLAS_EVENTS.push(

// ===== I. THE COMPANIES AND THE OS =====
{ id:"applefounding", year:1976, date:"April 1, 1976", era:5, cat:"computing",
  title:"Apple Is Founded",
  wiki:"Apple Inc.", gallery:["Steve Jobs","Steve Wozniak","Apple I"],
  summary:"Steve Wozniak and Steve Jobs found Apple and sell the Apple I, a hobbyist circuit board; the Apple II (1977) — a complete, friendly machine with color graphics — becomes one of the first mass-market personal computers and helps create the home-computer industry.",
  importance:"Apple turned the personal computer from a solder-it-yourself kit for hobbyists into an appliance an ordinary household could buy and use, with the Apple II's design, color, and the spreadsheet VisiCalc giving people a reason to own one. Jobs's insistence on the whole experience — hardware, software, and presentation as one product — set a template the company would return to with the Macintosh, the iPod, and the iPhone. Apple's founding is the hinge on which computing swings from the institution to the individual.",
  impact:{
    computing:"The personal computer becomes a finished consumer product, not a hobbyist kit.",
    society:"The home-computer industry is created around an appliance anyone can buy.",
    technology:"The integrated hardware-plus-software product philosophy is established." },
  causes:["altair","intel4004"], effects:["microsoftfounding","windows","graphingcalculator"] },

{ id:"microsoftfounding", year:1975, date:"April 4, 1975", era:5, cat:"computing",
  title:"Microsoft Is Founded",
  wiki:"Microsoft", gallery:["Bill Gates","Paul Allen","Altair BASIC"],
  summary:"Bill Gates and Paul Allen found Microsoft to sell a BASIC interpreter for the Altair, betting that the value in personal computing would lie in software, not hardware. Licensing MS-DOS to IBM in 1981 — while keeping the right to sell it to everyone else — makes Microsoft the dominant software company of the era.",
  importance:"Microsoft's founding bet — that software, not the machine, was where the durable value lay — proved one of the most lucrative insights in business history. By licensing MS-DOS to IBM non-exclusively, Gates ensured that as dozens of manufacturers cloned the IBM PC, every clone needed Microsoft's operating system, handing the company control of the platform beneath the entire PC industry. That platform dominance, extended through Windows and Office, made Microsoft the defining software power of the personal-computer age — and the eventual target of the era's great antitrust case.",
  impact:{
    computing:"Software is established as the seat of value in personal computing.",
    society:"Non-exclusive OS licensing gives one firm the platform beneath the whole PC industry.",
    law:"The platform dominance that draws the era's landmark antitrust case is built." },
  causes:["altair","applefounding"], effects:["windows","ibmpc"] },

{ id:"windows", year:1985, date:"1985–1995", era:6, cat:"computing",
  title:"Microsoft Windows",
  wiki:"Microsoft Windows", gallery:["Windows 1.0","Graphical user interface","Windows 95"],
  summary:"Microsoft layers a graphical user interface — windows, icons, and a mouse pointer — over MS-DOS, beginning with Windows 1.0 (1985). Windows 95 (1995) makes the graphical desktop mainstream, selling at midnight-launch frenzy, and cements Microsoft's grip on the personal computer.",
  importance:"Windows brought the graphical interface — pioneered at Xerox and popularized by the Macintosh — to the vast installed base of IBM-compatible PCs, making point-and-click computing the everyday norm for hundreds of millions. Windows 95, with its Start menu and built-in networking, was a cultural event that defined what a computer looked like for a generation. Bundling Internet Explorer into Windows to fight Netscape, however, turned that desktop monopoly into the heart of the antitrust case that would define the limits of platform power.",
  impact:{
    computing:"The graphical desktop becomes the mainstream way hundreds of millions use computers.",
    society:"Windows 95 defines what a personal computer looks like for a generation.",
    law:"Bundling the browser into Windows triggers the era's landmark antitrust fight." },
  causes:["microsoftfounding","applefounding"], effects:["microsoftcase"] },

// ===== II. THE CALCULATOR =====
{ id:"graphingcalculator", year:1985, date:"1985–1990", era:6, cat:"computing",
  title:"The Graphing Calculator",
  wiki:"Graphing calculator", gallery:["Casio fx-7000G","TI-81","Texas Instruments"],
  summary:"Casio's fx-7000G (1985) and Texas Instruments' TI-81 (1990) put a programmable computer with a graphical display into a handheld calculator — able to plot functions, run programs, and store data — and, embedded in school math curricula, become the first real computer millions of students ever own.",
  importance:"The graphing calculator was a genuine pocket computer that reached a mass audience through the side door of the classroom, becoming a required tool in algebra and calculus courses for decades. For a great many people it was their first programmable machine, where they wrote their first lines of code or played their first self-typed game. Long after smartphones could do far more, the graphing calculator persisted as a permitted, self-contained device on exams — a small, durable computing platform hiding in plain sight in every backpack.",
  impact:{
    computing:"A programmable computer with a display reaches millions in handheld form.",
    society:"For many students it is the first computer they own and first device they program.",
    technology:"A durable computing platform embeds itself in math education for decades." },
  causes:["intel4004","applefounding"], effects:[] },

// ===== III. THE PRINTER ON THE DESK =====
{ id:"laserprinter", year:1984, date:"1971–1985", era:5, cat:"computing",
  title:"The Laser Printer",
  wiki:"Laser printing", gallery:["Gary Starkweather","Xerox 9700","Apple LaserWriter"],
  summary:"Gary Starkweather builds the first laser printer at Xerox PARC (1971); the technology reaches the desktop with the HP LaserJet and Apple LaserWriter (1984–1985). Paired with the Macintosh and PageMaker, the LaserWriter ignites desktop publishing — professional-quality pages produced from a desk.",
  importance:"The laser printer brought typeset-quality output to the individual, and its arrival on the desktop touched off the desktop-publishing revolution: with a Mac, PageMaker, and a LaserWriter, one person could lay out and print newsletters, brochures, and books that once required a print shop. It put the power of the printing press, in miniature, onto the desk — a democratization of professional printing as consequential in its way as the personal computer itself. The crisp page from a laser printer became the visible proof that publishing had moved to the individual.",
  impact:{
    computing:"Typeset-quality printing arrives on the personal desktop.",
    print:"Desktop publishing lets one person lay out and print professional pages.",
    society:"The power of the print shop is miniaturized onto the desk." },
  causes:["ic1958"], effects:["inkjetprinter","windows"] },

{ id:"inkjetprinter", year:1988, date:"1984–1990s", era:6, cat:"computing",
  title:"The Home Inkjet Printer",
  wiki:"Inkjet printing", gallery:["HP DeskJet","Canon Bubble Jet"],
  summary:"Thermal inkjet printers from HP and Canon (late 1980s) bring cheap color printing into the home: an affordable printer spraying microscopic ink droplets onto the page, sold cheap and subsidized by the recurring sale of ink cartridges — one of the first 'razor-and-blades' hardware business models in consumer tech.",
  importance:"The inkjet made printing a household fixture, putting affordable color output next to the family computer and letting people print photos, homework, and documents at home for the first time. It also pioneered a business model that would echo across consumer technology: sell the device near cost and profit from the proprietary consumables, making printer ink famously among the most expensive liquids by volume. The home printer is the everyday companion of the personal computer — and an early lesson in how the real cost of a cheap device hides in what it consumes.",
  impact:{
    computing:"Affordable color printing becomes a standard household capability.",
    society:"Photos, homework, and documents are printed at home for the first time.",
    technology:"The 'cheap device, costly consumable' razor-and-blades model is established." },
  causes:["laserprinter"], effects:[] },

// ===== IV. THE LONG CLIMB OF STORAGE =====
{ id:"microchipscaling", year:1971, date:"1958–1971", era:5, cat:"computing",
  title:"The Microchip Goes Personal",
  wiki:"Microprocessor", gallery:["Intel 4004","MOSFET","Very Large Scale Integration"],
  summary:"Building on the integrated circuit, the microprocessor — a whole computer's processing unit on one chip, beginning with the Intel 4004 (1971) — and ever-denser memory chips make computing cheap and small enough to be personal. Moore's Law names the relentless doubling of transistors per chip that drives it all.",
  importance:"Every personal computer, printer, calculator, and storage device in this thread rests on one trend: the microchip's exponential cheapening, as more and more transistors are packed onto silicon year after year. The microprocessor put the heart of a computer onto a single inexpensive chip, and the same scaling shrank memory and logic until a usable machine could sit on a desk and then in a pocket. This is the engine beneath the entire era — the steady, compounding miniaturization that turned computing from an institutional resource into a personal and then ubiquitous one.",
  impact:{
    computing:"A computer's processor and memory shrink onto cheap, mass-produced chips.",
    technology:"Moore's Law's compounding density drives the whole personal-computing era.",
    society:"Exponential cheapening turns computing personal, then ubiquitous." },
  causes:["ic1958","intel4004","mooreslaw"], effects:["floppydisk","harddrive","busstandards"] },

{ id:"floppydisk", year:1971, date:"1971–1981", era:5, cat:"computing",
  title:"The Floppy Disk",
  wiki:"Floppy disk", gallery:["8-inch floppy disk","5¼-inch floppy disk","3½-inch floppy disk"],
  summary:"IBM introduces the floppy disk (1971); shrinking from 8-inch to 5¼-inch to the rigid-cased 3½-inch format, it becomes the universal removable storage of the personal-computer era — how software was sold, files were carried, and computers shared data for two decades.",
  importance:"The floppy disk solved personal computing's first practical problem — getting programs and files into and out of the machine — with a cheap, removable medium anyone could mail, copy, or carry in a pocket. It became the era's lingua franca of data exchange and the medium on which a generation of software shipped, its 3½-inch form so iconic it survives as the 'save' icon long after the disks vanished. The floppy is the humble enabler of the software industry's distribution and of the everyday act of moving one's work between machines.",
  impact:{
    computing:"Cheap removable storage lets software ship and files move between machines.",
    society:"A generation exchanges data and programs on a pocketable disk.",
    technology:"The 3½-inch floppy becomes the lasting icon of 'save.'" },
  causes:["microchipscaling"], effects:["cdrom","flashdrive"] },

{ id:"harddrive", year:1983, date:"1956–1990s", era:5, cat:"computing",
  title:"The Hard Disk Drive",
  wiki:"Hard disk drive", gallery:["IBM 350","Winchester drive","ST-506"],
  summary:"The hard disk drive — magnetic platters spinning under read/write heads, invented by IBM in 1956 — shrinks from the size of a refrigerator to a component that fits inside a desktop (the 1983 'Winchester' drives and after), giving personal computers large, permanent, fast-access storage that transforms what they can do.",
  importance:"The hard drive gave the personal computer a memory that persisted and was big enough to matter — holding the operating system, applications, and a user's accumulating files all at once, so the machine became a place where work lived rather than a device fed from floppies. Its relentless growth in capacity and fall in price, mirroring the microchip's, made ever-larger software, databases, and eventually digital photo and music libraries possible. The hard drive is the deep well of personal storage on which the whole modern experience of a computer 'containing your stuff' depends.",
  impact:{
    computing:"Large, permanent, fast-access storage moves inside the personal computer.",
    society:"The computer becomes the place a person's files and work permanently live.",
    technology:"Capacity growth mirrors Moore's Law, enabling ever-larger software and libraries." },
  causes:["microchipscaling"], effects:["cdrom","flashdrive"] },

{ id:"cdrom", year:1985, date:"1982–1995", era:6, cat:["computing","tv"],
  title:"The CD-ROM and Optical Storage",
  wiki:"CD-ROM", gallery:["Compact disc","DVD","Optical disc drive"],
  summary:"Adapting the audio compact disc (1982), the CD-ROM (1985) stores hundreds of megabytes on a cheap pressed disc read by laser — enough to distribute multimedia encyclopedias, games, and software too large for floppies. The DVD (1995) extends optical storage to feature-length video.",
  importance:"The CD-ROM's leap in capacity over the floppy — hundreds of times more data on a disc that cost pennies to press — reshaped how software was sold and what it could contain, enabling multimedia: encyclopedias with video, games with full soundtracks, applications that once spanned dozens of floppies now on a single disc. It made the computer a vehicle for rich media, not just text and code, and its successor the DVD did the same for movies. Optical storage was the bridge between the floppy era and the networked downloads that eventually replaced physical media altogether.",
  impact:{
    computing:"Cheap high-capacity discs let software carry video, audio, and rich multimedia.",
    tv:"The DVD brings feature-length digital video to optical disc.",
    society:"The computer becomes a multimedia machine, not just a text-and-code one." },
  causes:["floppydisk"], effects:["flashdrive","dvdvideo"] },

{ id:"flashdrive", year:2000, date:"2000–2010", era:6, cat:["computing","internet"],
  title:"Flash Memory: The USB Drive",
  wiki:"USB flash drive", gallery:["Flash memory","USB","Solid-state drive"],
  summary:"Flash memory — fast, solid-state, with no moving parts — reaches consumers as the USB thumb drive (c. 2000), which plugs into the universal USB port and supplants the floppy for carrying files. The same flash chips later become the storage inside phones, cameras, and the solid-state drives replacing hard disks.",
  importance:"Flash memory ended the era of spinning and pressed media for everyday storage, and the USB thumb drive was its consumer face: pocketable, rewritable, and far larger than any floppy, plugging into the USB port that finally standardized how peripherals connect. The same technology, scaled up, became the storage in every smartphone and the solid-state drives that made laptops fast and durable. Flash is the storage layer of the mobile and cloud era — silent, solid, and everywhere — the endpoint of the long climb from the floppy disk.",
  impact:{
    computing:"Solid-state flash storage supplants spinning and pressed media for everyday use.",
    technology:"The same chips become the storage in phones, cameras, and solid-state drives.",
    internet:"Portable flash and the USB standard bridge toward the mobile and cloud era." },
  causes:["floppydisk","harddrive","cdrom","busstandards"], effects:[] },

{ id:"busstandards", year:1996, date:"1981–2000s", era:6, cat:"computing",
  title:"Buses and Ports: ISA, PCI, USB",
  wiki:"Bus (computing)", gallery:["Conventional PCI","USB","Peripheral Component Interconnect"],
  summary:"A computer's components and peripherals talk over shared 'buses' and ports whose standards steadily evolve — from the IBM PC's ISA bus (1981) to the faster PCI (1992) to USB (1996), which finally replaces a tangle of incompatible connectors with one universal, hot-pluggable port for keyboards, drives, printers, and the rest.",
  importance:"The unglamorous standards governing how parts connect determined what a personal computer could become: a faster bus meant faster graphics and storage, and a universal port meant peripherals that simply worked. USB in particular ended the era of mismatched serial, parallel, and proprietary connectors, letting any device plug into any computer and draw power besides — the quiet standardization that made add-ons effortless and the thumb drive possible. Buses and ports are the connective tissue of computing, the agreements that let independently made components form one working machine.",
  impact:{
    computing:"Evolving bus and port standards set how fast and how easily components connect.",
    technology:"USB replaces incompatible connectors with one universal, hot-pluggable port.",
    society:"Peripherals that 'just work' make the expandable personal computer practical." },
  causes:["ibmpc","microchipscaling"], effects:["flashdrive"] }

);
