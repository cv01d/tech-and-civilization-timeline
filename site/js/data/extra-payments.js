// SUPPLEMENT — digital payment, from the email-money startup to the tap-to-pay phone
// and the buy-now-pay-later checkout. The through-line: paying is pulled out of the
// bank and the wallet and into the network, becoming a social act woven into how people
// split a dinner, settle a debt, or gather. Cross-links the existing amazon, iphone,
// appstore, palantirfounding, gigeconomy, alibaba cards. cat:["internet","crypto"].
window.ATLAS_EVENTS.push(

{ id:"paypal", year:1998, date:"1998–2002", era:6, cat:["internet","crypto"],
  title:"PayPal: Money by Email",
  wiki:"PayPal", gallery:["Peter Thiel","Elon Musk","Max Levchin"],
  summary:"A pair of startups merge into PayPal, letting anyone send money to anyone else with just an email address — the first payment system built for the internet rather than retrofitted onto it. It rides eBay's auctions to ubiquity and, after a 2002 sale to eBay, scatters a 'PayPal Mafia' across Silicon Valley.",
  importance:"PayPal solved the problem that early e-commerce could not: how strangers transacting online could pay each other without sharing card numbers or waiting on checks, turning an email address into a money address. Its rise on the back of eBay's auctions proved there was a mass appetite for moving money over the network, and its fraud-fighting techniques and alumni — Thiel, Musk, and the rest of the 'PayPal Mafia' — seeded a generation of companies from Palantir to YouTube to Tesla. It is the origin point of consumer internet payments, the first system that made sending money feel like sending a message.",
  impact:{
    internet:"Paying a stranger online becomes as simple as sending an email.",
    society:"Money begins to move person-to-person over the network, not only through banks.",
    power:"The 'PayPal Mafia' of founders and engineers reshapes Silicon Valley for two decades." },
  causes:["amazon"], effects:["venmo","applepay","palantirfounding"] },

{ id:"klarna", year:2005, date:"2005", era:6, cat:["internet","crypto"],
  title:"Klarna and Buy-Now-Pay-Later",
  wiki:"Klarna", gallery:["Sebastian Siemiatkowski","Buy now, pay later"],
  summary:"Three students in Stockholm found Klarna, letting online shoppers receive goods first and pay later in interest-free installments. The 'buy now, pay later' model spreads worldwide through the 2010s — embedded in every checkout, frictionless, and quietly reviving consumer credit for a generation wary of credit cards.",
  importance:"Klarna pioneered a new kind of point-of-sale credit fitted to internet shopping: split a purchase into a few interest-free payments with a single tap, no card application, no visible interest. The model exploded across e-commerce as Afterpay, Affirm, and others followed, normalizing instant micro-loans on everything from sneakers to groceries and drawing younger shoppers who distrusted traditional credit cards. Its frictionlessness is also its hazard — regulators came to worry that invisible, ubiquitous installment lending was quietly loading a generation with debt it barely noticed taking on.",
  impact:{
    internet:"Installment credit is embedded directly into the online checkout, frictionless and instant.",
    society:"A generation wary of credit cards is drawn back into consumer debt through 'pay later.'",
    law:"Regulators move to police a vast, near-invisible new form of point-of-sale lending." },
  causes:["amazon","paypal"], effects:[] },

{ id:"venmo", year:2009, date:"2009–2012", era:6, cat:["internet","crypto"],
  title:"Venmo: Paying as Social Feed",
  wiki:"Venmo", gallery:["Smartphone","Mobile payment"],
  summary:"Two friends build Venmo to settle a forgotten debt over a weekend, and turn paying each other into something social — a phone-to-phone transfer wrapped in a public feed of who paid whom, captioned with emoji and inside jokes. It becomes the default way a generation splits the check, the rent, and the bar tab.",
  importance:"Venmo made the most private of acts — handing someone money — into a lightly public, social one, posting a feed of friends paying each other for dinners, trips, and rent, captions and emoji standing in for the cash that used to change hands. It dissolved the awkwardness of splitting a bill or chasing a debt among friends, and in doing so wove digital payment into the texture of social gatherings, where 'Venmo me' became a complete sentence. That fusion of money and social feed both drove its viral growth and raised unease about how much of one's spending, and one's social life, was now quietly on display.",
  impact:{
    society:"Splitting the check and settling debts among friends becomes a social, app-mediated ritual.",
    internet:"Person-to-person payment moves to the phone and acquires a public feed.",
    surveillance:"A feed of who-paid-whom turns private spending into casually visible social data." },
  causes:["paypal","iphone","appstore"], effects:["applepay"] },

{ id:"applepay", year:2014, date:"October 2014", era:7, cat:["internet","crypto"],
  title:"Apple Pay and the Wallet in the Phone",
  wiki:"Apple Pay", gallery:["Near-field communication","Mobile payment"],
  summary:"Apple launches Apple Pay, letting an iPhone held to a contactless terminal stand in for a credit card — tokenized, fingerprint- or face-confirmed, with the card number never shared with the merchant. Tap-to-pay, joined by Google's equivalent, makes the phone the wallet and helps push physical cash and cards toward the margins.",
  importance:"Apple Pay took the loose pieces of mobile payment and made tap-to-pay effortless and trusted: a tokenized card living in the phone, authorized by a fingerprint or a glance, with the real card number never exposed to the shop. Backed by the world's most ubiquitous device and copied by Google and the banks, it helped normalize paying with a phone for everyday purchases and accelerated the long retreat of cash from daily life. The wallet — the small leather object humans carried for centuries — began dissolving into the same glass rectangle that held the camera, the messages, and the map.",
  impact:{
    internet:"A tokenized card in the phone replaces the physical card at the contactless terminal.",
    society:"Tap-to-pay normalizes the phone as the wallet and pushes cash toward the margins.",
    surveillance:"Payment, identity, and device fuse, concentrating the record of what one buys." },
  causes:["iphone","venmo","appstore"], effects:[] }

);
