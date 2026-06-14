// SUPPLEMENT — the platform that ate the taxi, and the car that wants to drive itself.
// Uber and Lyft turned the smartphone, GPS, and algorithmic dispatch into a software layer
// over urban transport, collapsing the medallion-taxi system and reframing a ride as a
// computing problem; the self-driving project is the same logic pushed to its end, removing
// the driver entirely. Cross-links the existing gigeconomy, uberav, waymo, darpachallenge,
// iphone, deeplearning cards. cat:"computing" (the technology/AI framing; the labor-law
// angle lives in gigeconomy). Round one: data only — images to follow.
window.ATLAS_EVENTS.push(

{ id:"uber", year:2010, date:"2009–2012", era:6, cat:["computing","law"],
  title:"Uber: The Taxi Becomes Software",
  wiki:"Uber", gallery:["Travis Kalanick","Ridesharing company"],
  summary:"Uber launches in San Francisco, turning a smartphone, GPS, and an algorithmic dispatcher into an on-demand ride: tap a button, a nearby car comes, payment is automatic. By treating urban transport as a software-matching problem, it bypasses the taxi industry entirely and expands explosively across the world's cities.",
  importance:"Uber's insight was that the hard parts of a taxi system — finding a nearby car, agreeing a price, paying — were really an information problem the smartphone had just made solvable, and that a company controlling the software layer need own no cars and employ no drivers. It grew by moving fast and confronting regulators after the fact, a 'permissionless' strategy that spread the model worldwide before most cities could respond. It is the template for platform disruption of a regulated physical industry: software eats the dispatcher, and the incumbent is routed around rather than beaten head-on.",
  impact:{
    computing:"GPS, smartphones, and algorithmic matching turn urban transport into a software service.",
    society:"On-demand ride-hailing spreads worldwide, reshaping how cities move.",
    law:"A 'permissionless' rollout confronts taxi regulators only after achieving scale." },
  causes:["iphone","gigeconomy"], effects:["lyft","taxifall","selfdrivingcars"] },

{ id:"lyft", year:2012, date:"2012", era:7, cat:["computing","law"],
  title:"Lyft and the Ride-Hailing Duopoly",
  wiki:"Lyft", gallery:["Ridesharing company","Logan Green"],
  summary:"Lyft launches with a friendlier, peer-to-peer framing — fist bumps and pink mustaches on dashboards — and grows into Uber's principal U.S. rival, hardening ride-hailing into a two-company market that, between them, displaces much of the traditional taxi trade.",
  importance:"Lyft proved the ride-hailing model was a category, not a single company, and its rivalry with Uber drove the subsidy wars — billions in venture money spent on rider discounts and driver bonuses to buy market share — that made app rides artificially cheap and accelerated the taxi's decline. The resulting duopoly concentrated a once-fragmented, heavily local industry into two national software platforms. It showed that platform competition often resolves not into many firms but into a stable pair carving up the market.",
  impact:{
    computing:"Ride-hailing consolidates into a two-platform software market.",
    society:"Subsidy-fueled competition makes app rides cheap and speeds the taxi's decline.",
    law:"A fragmented, locally regulated trade is replaced by two national platforms." },
  causes:["uber"], effects:["taxifall"] },

{ id:"taxifall", year:2014, date:"2014–2018", era:7, cat:["computing","law"],
  title:"The Fall of the Taxi Medallion",
  wiki:"Taxi medallion", gallery:["Taxicabs of New York City","Medallion (license)"],
  summary:"As ride-hailing scales, the taxi medallion — the license to operate a cab, which in New York had been a six-figure asset traded like real estate and peaking near $1 million in 2013 — collapses in value within a few years, wiping out the savings of drivers who had mortgaged everything to buy one and driving several to suicide.",
  importance:"The medallion system had turned the right to drive a taxi into a speculative asset, and ride-hailing destroyed it almost overnight: with Uber and Lyft cars effectively unlimited, the artificial scarcity the medallion represented evaporated, and values fell by 80–90%. The human cost fell hardest on immigrant owner-drivers who had borrowed against medallions as retirement nest eggs and were left with crushing debt and worthless licenses. It is a stark case study in platform disruption's externalities — the incumbents routed around were not faceless corporations but individuals holding the bag when a software company dissolved the value of a government-created asset.",
  impact:{
    society:"Medallion values collapse 80–90%, wiping out immigrant owner-drivers' savings.",
    law:"A government-created scarcity asset is dissolved by an unregulated software rival.",
    computing:"Software-uncapped supply destroys the economic basis of the licensed taxi." },
  causes:["uber","lyft"], effects:[] },

{ id:"selfdrivingcars", year:2015, date:"2004–2018", era:7, cat:["computing","robotics"],
  title:"The Self-Driving Car",
  wiki:"Self-driving car", gallery:["DARPA Grand Challenge","Waymo","Lidar"],
  summary:"The autonomous vehicle moves from the DARPA Grand Challenges (2004–2007), where research teams first drove robots across the desert, to Google's self-driving project (later Waymo) logging millions of public-road miles — applying lidar, mapping, and deep-learning perception to the goal of removing the driver entirely.",
  importance:"The self-driving car is ride-hailing's logic taken to its conclusion: if a ride is a software service, the driver is the last human component left to automate. The DARPA Challenges seeded the field and its talent, and the deep-learning revolution after 2012 gave cars the perception to recognize the world well enough to attempt it. Progress proved far harder than early predictions — the 'last 1%' of edge cases is where the danger lives, as Uber's 2018 fatality showed — making autonomy a long, contested march rather than the imminent revolution once promised.",
  impact:{
    computing:"Lidar, mapping, and deep-learning perception are aimed at removing the driver.",
    robotics:"The DARPA Challenges seed an autonomous-vehicle industry.",
    society:"Automating the driver proves a long, hard march defined by rare edge cases." },
  causes:["uber","darpachallenge","alexnet"], effects:["uberav","waymo"] }

);
