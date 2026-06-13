// SUPPLEMENT — U.S. newspaper houses, magazines, wire services, chains, and book
// publishers, each as its own exhibit: founding, political/regulatory role, and
// digital-era fate. Joins the existing penny-press → consolidation → hedge-fund thread.
// Cross-links pennypress, nytimes1851, washingtonpost1877, wsj1889, scrippschain,
// gannett1906, consolidation20c, aldencapital, newspapercollapse. cat:"print".
// Round one: data only — images to follow.
window.ATLAS_EVENTS.push(

{ id:"houghtonmifflin", year:1832, date:"1832", era:3, cat:"print",
  title:"Houghton Mifflin",
  wiki:"Houghton Mifflin Harcourt",
  summary:"A Boston literary publisher (lineage to 1832) that built one of America's great trade lists before pivoting, as HMH, almost entirely to educational publishing.",
  importance:"Houghton Mifflin was a pillar of nineteenth-century American letters, publishing the New England literary establishment. Its twentieth-century transformation into a schoolbook house traces the consolidation of trade publishing and the migration of the old literary firms into the more durable textbook market.",
  impact:{
    print:"A storied literary house survives by becoming an educational publisher.",
    power:"Trade publishing's economics push the old houses toward textbooks." },
  causes:["printingpress"], effects:[] },

{ id:"theatlantic", year:1857, date:"1857", era:3, cat:"print",
  title:"The Atlantic",
  wiki:"The Atlantic",
  summary:"Founded in Boston in 1857 as a literary and political review; in 2017 a majority stake is acquired by Laurene Powell Jobs's Emerson Collective — one of the tech-fortune rescues that reshaped elite American journalism.",
  importance:"The Atlantic carried a century and a half of American literary and political argument, from abolition to the present. Its 2017 sale to a Silicon Valley philanthropic vehicle exemplified the new patronage model in which tech wealth, rather than the advertising market, keeps prestige journalism alive.",
  impact:{
    print:"A 160-year review passes to tech-fortune patronage.",
    power:"Elite journalism increasingly depends on wealthy benefactors, not the market." },
  causes:["pennypress"], effects:["washingtonpost1877"] },

{ id:"mcclatchy", year:1857, date:"1857", era:3, cat:"print",
  title:"McClatchy",
  wiki:"The McClatchy Company",
  summary:"A California newspaper company tracing to 1857 that became a major metro chain, acquired Knight Ridder's papers in 2006 — then filed for Chapter 11 bankruptcy in 2020 and was bought by the hedge fund Chatham Asset Management.",
  importance:"McClatchy's arc is the industry's in miniature: a family paper grown into a chain, doubling down by absorbing Knight Ridder at the worst possible moment, then crushed by the debt and the advertising collapse into bankruptcy and hedge-fund ownership. Its fall left another swath of American metros under financial owners.",
  impact:{
    print:"A historic chain over-expands into Knight Ridder, then collapses into bankruptcy.",
    power:"Another metro-daily group passes to hedge-fund ownership." },
  causes:["scrippschain","consolidation20c"], effects:["aldencapital"] },

{ id:"chicagotribune", year:1847, date:"1847", era:3, cat:"print",
  title:"The Chicago Tribune",
  wiki:"Chicago Tribune",
  summary:"Founded 1847; under the McCormick family it wielded enormous Midwestern political influence with a fiercely isolationist editorial line before WWII. Spun into Tribune Publishing (2014); Alden Global Capital took control and fully acquired it in 2021.",
  importance:"For a century the Tribune was a political power in its own right, the McCormicks' isolationism shaping Midwestern opinion. Its end under Alden — staff cuts, shuttered offices — made it the emblem of the hedge-fund harvesting of America's great regional papers.",
  impact:{
    print:"A century-old political powerhouse is harvested by a hedge fund.",
    power:"The McCormick machine's paper becomes an asset to be stripped." },
  causes:["consolidation20c"], effects:["aldencapital"] },

{ id:"latimes", year:1881, date:"1881", era:4, cat:"print",
  title:"The Los Angeles Times",
  wiki:"Los Angeles Times",
  summary:"Founded 1881; the Otis and Chandler families ran it as a political machine that helped build modern Southern California. Sold to Tribune in 2000, then in 2018 to biotech billionaire Patrick Soon-Shiong — another local-billionaire rescue of a major metro.",
  importance:"The Chandlers' Times was as much a political and real-estate force as a newspaper, instrumental in Los Angeles's growth. Its passage from family to chain to billionaire owner traced the whole century of newspaper ownership, ending in the patronage model that now sustains several big-city dailies.",
  impact:{
    print:"A metro institution passes from family machine to chain to billionaire owner.",
    power:"The paper that helped build Southern California survives on private wealth." },
  causes:["consolidation20c"], effects:["aldencapital"] },

{ id:"wileypub", year:1807, date:"1807", era:3, cat:"print",
  title:"John Wiley & Sons",
  wiki:"John Wiley & Sons",
  summary:"Founded 1807; began publishing the American literary canon and evolved into a leading scientific, technical, and academic publisher — and one of the few major houses still independent and publicly traded.",
  importance:"Wiley outlasted the consolidation that swallowed most of its peers by anchoring itself to scholarly and professional publishing, a market less exposed to trade-book economics. Its persistence as an independent is a rare survival in an industry defined by mergers.",
  impact:{
    print:"A 200-year house endures by serving scholarly and professional markets.",
    power:"Independence survives the consolidation that absorbed the trade houses." },
  causes:["printingpress"], effects:[] },

{ id:"harpercollins", year:1817, date:"1817", era:3, cat:"print",
  title:"Harper & Brothers → HarperCollins",
  wiki:"HarperCollins",
  summary:"Harper & Brothers (1817) grew into a dominant American trade house; merged with Britain's Collins to form HarperCollins (1989), now owned by Rupert Murdoch's News Corp — a flagship of media-conglomerate book publishing.",
  importance:"Harper was one of the founding houses of American publishing; its absorption into News Corp made it part of a global media empire, exemplifying how the old independent houses became divisions of conglomerates that also own newspapers, studios, and broadcasters.",
  impact:{
    print:"A founding American house becomes a division of a global media conglomerate.",
    power:"Book publishing is folded into the Murdoch media empire." },
  causes:["printingpress"], effects:["randomhouse"] },

{ id:"mcgrawhill", year:1888, date:"1888", era:4, cat:"print",
  title:"McGraw-Hill",
  wiki:"McGraw Hill",
  summary:"Founded 1888; built a vast trade, technical, and financial publishing empire (and the S&P ratings business) before narrowing, in the digital era, almost entirely to educational publishing.",
  importance:"McGraw-Hill spanned magazines, technical books, and financial information, but like Houghton Mifflin it found its durable future in the schoolbook market as trade and reference publishing fragmented online. Its retreat to education marks the same consolidation that reshaped the whole industry.",
  impact:{
    print:"A diversified publishing empire narrows to educational publishing.",
    power:"Reference and trade publishing fragment as education endures." },
  causes:["printingpress"], effects:[] },

{ id:"doubledaypub", year:1897, date:"1897", era:4, cat:"print",
  title:"Doubleday",
  wiki:"Doubleday (publisher)",
  summary:"Founded 1897; a major American trade publisher across the twentieth century, now an imprint within Penguin Random House — one of the many storied names absorbed into the world's largest publisher.",
  importance:"Doubleday published bestsellers and Book-of-the-Month staples for a century before becoming a brand inside the Penguin Random House conglomerate. Its fate illustrates how the great independent houses survive now only as imprints under a handful of global owners.",
  impact:{
    print:"A century-old trade house becomes an imprint of the largest publisher.",
    power:"Independent publishing identities survive only as conglomerate brands." },
  causes:["printingpress"], effects:["randomhouse"] },

{ id:"upi", year:1907, date:"1907", era:4, cat:"print",
  title:"United Press / UPI",
  wiki:"United Press International",
  summary:"E.W. Scripps founds United Press in 1907 to challenge the Associated Press's grip on wire news; it merges with Hearst's International News Service in 1958 to form UPI, then declines, is sold repeatedly, and since 2000 is owned by News World Communications, linked to the Unification Church.",
  importance:"United Press broke the AP cooperative's near-monopoly by selling wire news to anyone, and for decades UPI was a fierce competitor that trained generations of reporters. Its long decline and sale to a religious-movement-linked owner is one of the starker fates in American journalism — a great wire service hollowed to a brand.",
  impact:{
    print:"A competitor breaks the AP's wire monopoly, then withers to a shadow.",
    power:"A historic wire service ends under religious-movement ownership." },
  causes:["apwire","scrippschain"], effects:[] },

{ id:"csmonitor", year:1908, date:"1908", era:4, cat:"print",
  title:"The Christian Science Monitor",
  wiki:"The Christian Science Monitor",
  summary:"Founded 1908 by the Church of Christ, Scientist as a serious international daily; in 2009 it becomes one of the first major American papers to abandon daily print for a digital-first model with a weekly print edition.",
  importance:"The Monitor earned a reputation for sober global reporting disproportionate to its circulation. Its 2009 decision to drop daily print was an early, deliberate bet on the digital future that most metros would later be forced into by collapse rather than choose by strategy.",
  impact:{
    print:"An early, chosen exit from daily print into a digital-first model.",
    power:"A respected daily previews the industry's forced digital migration." },
  causes:["pennypress"], effects:["newspapercollapse"] },

{ id:"knopf", year:1915, date:"1915", era:4, cat:"print",
  title:"Alfred A. Knopf",
  wiki:"Alfred A. Knopf",
  summary:"Founded 1915; a byword for literary prestige and book design across the twentieth century, publishing dozens of Nobel and Pulitzer winners — now an imprint within Penguin Random House.",
  importance:"Knopf made the publisher's imprint itself a mark of quality, its Borzoi colophon signaling literary distinction. Its survival as a prestige imprint inside the largest publishing conglomerate shows how the value of the great houses now lives on as brand within scale.",
  impact:{
    print:"The publisher's imprint becomes a recognized mark of literary quality.",
    power:"Prestige survives as a brand inside a global conglomerate." },
  causes:["printingpress"], effects:["randomhouse"] },

{ id:"advancenewhouse", year:1922, date:"1922", era:4, cat:"print",
  title:"Advance Publications / Newhouse",
  wiki:"Advance Publications",
  summary:"The Newhouse family's privately held media company (from 1922) built a large regional-newspaper portfolio and the Condé Nast magazine empire — and, unlike most of its peers, remains largely intact as a private holding.",
  importance:"Advance is the counterexample to the publicly traded chains: family-owned and private, it was insulated from the quarterly pressures that forced public companies to gut newsrooms, though its papers too retreated to digital. Its persistence shows that ownership structure, as much as the advertising collapse, shaped which houses survived and how.",
  impact:{
    print:"A private family company holds newspapers and the Condé Nast magazines.",
    power:"Private ownership escapes the shareholder pressures that gutted public chains." },
  causes:["consolidation20c"], effects:[] },

{ id:"simonschuster", year:1924, date:"1924", era:4, cat:"print",
  title:"Simon & Schuster",
  wiki:"Simon & Schuster",
  summary:"Founded 1924; a major trade house owned by Gulf+Western/Paramount from 1975. Paramount's 2020 deal to sell it to Penguin Random House for $2.2B is blocked by a federal judge on antitrust grounds in 2022; it is sold instead to private-equity firm KKR for $1.62B in 2023.",
  importance:"Simon & Schuster sits at the center of the era's defining publishing-antitrust fight: the government blocked its sale to Penguin Random House to stop a 'Big Five' from becoming a 'Big Four,' protecting authors' advances. Its eventual sale to a private-equity firm instead routed yet another great house into financial ownership.",
  impact:{
    print:"A great trade house is at the heart of the era's publishing-antitrust battle.",
    law:"The PRH sale is blocked to protect competition for authors; KKR buys it instead.",
    power:"Another storied house passes to private-equity ownership." },
  causes:["printingpress"], effects:["prhmerger","randomhouse"] },

{ id:"randomhouse", year:1927, date:"1927", era:4, cat:"print",
  title:"Random House → Penguin Random House",
  wiki:"Penguin Random House",
  summary:"Founded 1927; acquired by Germany's Bertelsmann in 1998 and merged with Penguin (from Pearson) in 2013 to form Penguin Random House — the world's largest trade publisher, of which Bertelsmann took full ownership in 2017.",
  importance:"The Penguin Random House merger consolidated trade publishing into a single dominant house controlling a vast share of the market, and its later attempt to absorb Simon & Schuster — blocked by antitrust — defined the limits of that concentration. It is the apex of book publishing's century-long consolidation.",
  impact:{
    print:"Trade publishing consolidates into the world's largest house.",
    power:"A handful of conglomerates come to dominate what books reach readers.",
    law:"Its bid for Simon & Schuster is blocked as a step too far for competition." },
  causes:["harpercollins","doubledaypub","knopf"], effects:["prhmerger"] },

{ id:"newsweekmag", year:1933, date:"1933", era:4, cat:"print",
  title:"Newsweek",
  wiki:"Newsweek",
  summary:"Founded 1933; a leading political newsweekly for 80 years. The Washington Post Company sells it for $1 in 2010; it merges with The Daily Beast, ceases print at the end of 2012, is bought by IBT Media in 2013, briefly revives print, and is dogged by a 2018 fraud investigation — a near-total collapse of a brand.",
  importance:"Newsweek's fall is the most vertiginous in American magazines: from a pillar of political journalism to a paper sold for a single dollar, its print edition killed, its name passed among obscure owners. It is the clearest case of a great editorial brand outliving the economic model that sustained it, surviving only as a contested label.",
  impact:{
    print:"An 80-year newsweekly collapses, sold for $1 and stripped to a brand.",
    power:"A pillar of political journalism outlives its economic model entirely." },
  causes:["newsweekly"], effects:["newspapercollapse"] },

{ id:"lifemag", year:1936, date:"1936", era:4, cat:"print",
  title:"Life",
  wiki:"Life (magazine)",
  summary:"Relaunched by Time Inc. in 1936 as a photojournalism weekly, Life defined the picture magazine and the visual record of mid-century America before ceasing weekly publication in 1972, with intermittent revivals after.",
  importance:"Life made the photo-essay a mass medium and gave the twentieth century many of its defining images, from war to celebrity to the moon. Its decline as television captured both the mass audience and the advertising marked an early instance of a new medium hollowing out a print form — a rehearsal for the digital destruction to come.",
  impact:{
    print:"The photojournalism weekly defines the visual record of mid-century America.",
    power:"Television's capture of audience and ads ends the great picture magazine." },
  causes:["newsweekly"], effects:[] },

{ id:"tribuneco", year:1847, date:"1847–2021", era:7, cat:"print",
  title:"The Tribune Company",
  wiki:"Tribune Media",
  summary:"The Chicago Tribune's parent, a major newspaper-and-broadcast empire, takes on $8B of debt in a 2007 leveraged buyout, goes bankrupt in 2008, splits in 2014 into Tribune Publishing (papers) and Tribune Media (broadcast); the broadcast side is bought by Nexstar (2019) and the papers (renamed tronc) are fully acquired by Alden Global Capital (2021).",
  importance:"The Tribune Company's debt-driven bankruptcy and dismemberment is the template for the financial destruction of a great media empire — the separation of profitable broadcast from declining print, and the delivery of the papers into hedge-fund hands. Its breakup distilled every force gutting American journalism into a single corporate saga.",
  impact:{
    print:"A great media empire is broken up by debt and delivered to a hedge fund.",
    power:"Profitable broadcast is split from declining print, which is then harvested.",
    law:"The leveraged-buyout model of media extraction is laid bare." },
  causes:["consolidation20c","newspapercollapse"], effects:["aldencapital"] },

{ id:"prhmerger", year:2022, date:"2020–2023", era:7, cat:["print","law"],
  title:"The Blocked Publishing Merger",
  wiki:"United States v. Bertelsmann SE & Co. KGaA",
  summary:"Penguin Random House's $2.2B bid to buy Simon & Schuster would shrink the 'Big Five' trade publishers to four; the DOJ sues to block it (2021), and after a 2022 trial Judge Florence Pan enjoins the merger — protecting competition for authors' advances. Simon & Schuster goes to KKR instead.",
  importance:"The case marked a rare antitrust intervention in publishing, and an unusual theory: the government argued the merger would harm not consumers but authors, by reducing the bidders for their books. The ruling halted the consolidation of trade publishing at the Big Five and signaled a more aggressive antitrust posture toward media concentration.",
  impact:{
    law:"A publishing merger is blocked to protect competition for authors, not readers.",
    print:"Trade publishing's consolidation is stopped at the 'Big Five.'",
    power:"Antitrust reasserts itself against media concentration." },
  causes:["simonschuster","randomhouse"], effects:[] }

);
