// SUPPLEMENT — the platforms that displaced print: the digital services that captured
// its advertising, its readers, and its formats, and the closures and pivots that
// followed. Cross-links the existing craigslist, googlefounding, adwords, wikipedia,
// amazon, iphone, nytimes1851, newspapercollapse, newsweekmag, wienerzeitung, facebook,
// likebutton cards. cat:"print" (+ internet/social). Round one: data only.
window.ATLAS_EVENTS.push(

{ id:"googlenews", year:2002, date:"1998–2002", era:6, cat:["print","internet","social"],
  title:"Google News and the Ad Machine",
  wiki:"Google News",
  summary:"Google (1998) launches Google News in 2002 — algorithmically aggregating the world's journalism onto one page — while its AdSense and search-ad systems, later joined by Facebook, come to dominate digital advertising. The platforms capture the ad revenue that journalism produces but no longer controls.",
  importance:"Google did to display and search advertising what Craigslist did to classifieds: it captured the revenue while producing none of the journalism, aggregating newspapers' work to sell ads against it. By the 2010s a Google-and-Facebook duopoly took the lion's share of all digital ad spending, leaving publishers fighting over scraps of the value their reporting created. It is the core economic mechanism of the press's collapse — the decoupling of journalism from the money it generates.",
  impact:{
    internet:"Search and programmatic ads capture the revenue journalism generates.",
    print:"A platform duopoly takes the lion's share of digital advertising.",
    power:"Journalism is decoupled from the money its work creates." },
  causes:["googlefounding","craigslist","adwords"], effects:["newspapercollapse","facebooknews"] },

{ id:"kindle", year:2007, date:"November 2007", era:6, cat:["print","internet"],
  title:"The Kindle and Self-Publishing",
  wiki:"Amazon Kindle",
  summary:"Amazon launches the Kindle e-reader in 2007, and the same day opens Kindle Direct Publishing, letting anyone self-publish a book to its store. It restructures book retail and distribution around Amazon — and the bookseller Borders, unable to adapt, goes bankrupt in 2011.",
  importance:"The Kindle did to books what the web did to newspapers: it moved the medium onto a platform that controlled discovery, pricing, and distribution, concentrating power over publishing in Amazon's hands. Direct self-publishing democratized authorship while undercutting the gatekeeping houses, and the collapse of Borders showed that even the booksellers could not survive the shift. Reproduction's newest form — the instantly delivered, infinitely copyable e-book — reshaped the oldest print industry.",
  impact:{
    internet:"E-books and self-publishing restructure book retail around one platform.",
    print:"Amazon concentrates control over discovery, pricing, and distribution.",
    power:"Self-publishing democratizes authorship as the gatekeeping houses weaken." },
  causes:["amazon"], effects:["britannica"] },

{ id:"thedaily", year:2011, date:"2011–2012", era:6, cat:["print","internet"],
  title:"The Daily: The iPad Newspaper",
  wiki:"The Daily (News Corporation)",
  summary:"News Corp launches The Daily in February 2011 — a newspaper built only for the iPad, with no print or web edition — as a bet that the tablet would save paid journalism. It folds in December 2012, a costly failure that punctured the hope of a clean tablet-era business model.",
  importance:"The Daily was the most ambitious attempt to reinvent the newspaper for the post-print device, and its swift failure was instructive: a closed, app-only paper could not build the audience or economics it needed when readers expected the open web. It marked the end of the fantasy that a new device would simply restore the old paid model, and pushed the industry toward the metered paywall instead.",
  impact:{
    internet:"A device-only newspaper tests the tablet as journalism's savior — and fails.",
    print:"The hope of a clean post-print business model is punctured.",
    power:"The industry turns from app experiments toward the paywall." },
  causes:["iphone"], effects:["nytpaywall"] },

{ id:"nytpaywall", year:2011, date:"March 2011", era:6, cat:["print","internet"],
  title:"The New York Times Paywall",
  wiki:"The New York Times",
  summary:"The New York Times launches a metered digital paywall on 28 March 2011 — free articles up to a monthly limit, then a subscription — after years of debate over whether readers would pay for online news. It works, reaching some 676,000 digital subscribers by 2013, and becomes the industry's most-copied model.",
  importance:"The Times paywall answered the existential question of digital journalism — whether anyone would pay — and its success charted the one durable path out of the advertising collapse: subscription revenue from readers rather than advertisers. Widely imitated, it let a handful of national papers thrive even as local journalism withered, deepening the divide between the few winners with national scale and the many losers without it.",
  impact:{
    internet:"Metered digital subscriptions prove readers will pay for online news.",
    print:"Reader revenue charts the one durable path out of the ad collapse.",
    power:"National papers thrive on subscriptions as local journalism withers." },
  causes:["nytimes1851","newspapercollapse","thedaily"], effects:[] },

{ id:"britannica", year:2012, date:"March 13, 2012", era:7, cat:["print","internet"],
  title:"Britannica Ends Print",
  wiki:"Encyclopædia Britannica",
  summary:"On 13 March 2012 Encyclopædia Britannica ends its print edition after 244 years — its roughly 120,000 articles long eclipsed by Wikipedia's millions, free and constantly updated. The most authoritative print reference work in the English language becomes digital-only.",
  importance:"Britannica's surrender of print is the symbolic end of the bound reference book: 244 years of curated, paid, expert authority undone by a free, crowdsourced, endlessly expanding alternative. It crystallized the digital displacement of print's most prestigious form, and posed the question that runs through the whole tab — whether the abundance that replaced scarce, edited knowledge is a gain or a loss for a public trying to know the world.",
  impact:{
    print:"The most authoritative print reference work ends after 244 years.",
    internet:"Free, crowdsourced abundance displaces curated, paid expertise.",
    society:"The bound reference book yields to the constantly-updated digital commons." },
  causes:["wikipedia","kindle"], effects:[] },

{ id:"facebooknews", year:2018, date:"2015–2018", era:7, cat:["print","social"],
  title:"The News Feed Turns Away",
  wiki:"News Feed",
  summary:"Through the mid-2010s Facebook's algorithm sends huge referral traffic to news publishers, who reorganize around it — then in January 2018 it pivots away from news toward 'meaningful' personal content, crashing the referral traffic many digital newsrooms depended on and driving waves of layoffs.",
  importance:"Facebook's reversal exposed the peril of building journalism on a platform one does not control: publishers that had remade themselves for the feed's traffic were gutted overnight when the algorithm changed, with no recourse. It was the bitter lesson of the platform era — that the same companies capturing the advertising could also, with a single ranking tweak, decide which newsrooms lived or died. Dependence on the platforms proved as dangerous as competition with them.",
  impact:{
    social:"An algorithm change crashes the referral traffic newsrooms were built on.",
    print:"Publishers dependent on the feed are gutted overnight, with no recourse.",
    power:"A single ranking tweak decides which newsrooms survive." },
  causes:["facebook","likebutton","googlenews"], effects:["newspapercollapse"] },

{ id:"borders", year:2011, date:"2011", era:6, cat:["print","internet"],
  title:"Borders Goes Bankrupt",
  wiki:"Borders Group",
  summary:"Borders, once one of the largest U.S. bookstore chains, files for bankruptcy and liquidates in 2011 — unable to adapt to online retail and e-books, and having ceded its web sales to Amazon years earlier. Its collapse marks the brick-and-mortar bookseller's reckoning with the digital shift.",
  importance:"Borders' fall was the bookstore's Craigslist moment: a great physical chain destroyed not by a better bookstore but by a platform that changed how books were discovered, bought, and read. Having outsourced its online sales to Amazon, it had handed its future to a rival, and the Kindle era finished it. Its empty storefronts were the visible face of print retail's displacement by the platform.",
  impact:{
    print:"A major bookstore chain is destroyed by online retail and e-books.",
    internet:"Outsourcing its web sales to Amazon hands a rival the future.",
    power:"Physical book retail's reckoning with the platform shift becomes visible." },
  causes:["kindle","amazon"], effects:[] }

);
