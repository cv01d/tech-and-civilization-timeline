// SUPPLEMENT — the digital divide as a thirty-year policy story: the programs built to
// close it (E-Rate, RDOF, BEAD, the ACP) and the recurring pattern of money meeting a
// problem only to be blunted by bad maps, self-reporting, and lapsed funding. Thickens
// the existing digitaldivide and broadbandinvest cards with the specific programs the
// general cards summarize. cat:"internet" (+ law). Round one: data only.
window.ATLAS_EVENTS.push(

{ id:"erate", year:1996, date:"1996", era:6, cat:["internet","law"],
  title:"E-Rate: Wiring the Schools",
  wiki:"E-Rate",
  summary:"The Telecommunications Act creates E-Rate, subsidizing internet connectivity for schools and libraries through the Universal Service Fund — the first federal program aimed squarely at digital access. By the 2020s it serves nearly 150,000 schools and libraries a year.",
  importance:"E-Rate was the country's first systematic answer to the divide between the connected and the unconnected, channeling telephone-bill levies into wiring classrooms and libraries — the public institutions where those without home access could get online. It became one of the most durable and least controversial digital-access programs, quietly connecting a generation of students. But it also tied access policy to the Universal Service Fund, whose telephone-revenue base would erode just as the need grew — a structural weakness that shadows every program built on it.",
  impact:{
    law:"The first federal digital-access program subsidizes school and library connectivity.",
    society:"Public institutions become the access point for those without it at home.",
    communications:"Universal-service levies are redirected from telephones toward the internet." },
  causes:["telecomact"], effects:["broadbandinvest","acpcollapse"] },

{ id:"rdof", year:2020, date:"2020", era:7, cat:["internet","law"],
  title:"The RDOF Auction",
  wiki:"Rural Digital Opportunity Fund",
  summary:"The FCC awards $9.2 billion in the Rural Digital Opportunity Fund auction to extend broadband to unserved rural areas. Starlink wins funding for some regions, but the FCC later declines to authorize its subsidy, citing concerns about a 'still-developing technology' — a decision that draws lasting criticism as rural users wait.",
  importance:"RDOF was a reverse-auction bet on closing the rural gap cheaply, awarding subsidies to whoever would build for the least — and it ran straight into the mapping problems that plague every U.S. broadband program, funding some areas already served and stranding others. The decision to deny Starlink's award became a flashpoint, pitting a cautious 'developing technology' rationale against rural users for whom satellite was the only realistic option. It typified the era's pattern: large sums committed on shaky data, with execution lagging the promise.",
  impact:{
    law:"A $9.2B reverse auction allocates rural broadband subsidies on contested coverage data.",
    power:"The denial of Starlink's award becomes a lasting point of dispute.",
    society:"Rural users wait as auction results collide with unreliable maps." },
  causes:["digitaldivide"], effects:["broadbandinvest","acpcollapse"] },

{ id:"acpcollapse", year:2024, date:"June 1, 2024", era:7, cat:["internet","law"],
  title:"The ACP Lapses",
  wiki:"Affordable Connectivity Program",
  summary:"Congress fails to appropriate further funds, and the Affordable Connectivity Program — a $30-a-month subsidy that 23 million low-income households relied on for high-speed internet — ends. An estimated 5 million households drop service entirely; surveys find nearly 40% of former participants cut back on food to keep their connection, and most lose telehealth access.",
  importance:"The ACP was the rare program that demonstrably worked — 23 million households, clear evidence of impact — and it died not from failure but from simple congressional neglect of a renewal vote. Its collapse exposed how fragile affordability policy is when it depends on periodic appropriation: a working subsidy can vanish overnight, and millions are forced to choose between internet and food. The lapse stands as the sharpest illustration of the divide's central lesson, that building access is not enough if the means to sustain it are allowed to expire.",
  impact:{
    law:"A subsidy serving 23 million households ends when Congress fails to refund it.",
    society:"Some 5 million households drop internet; many cut food or lose telehealth to keep it.",
    power:"A demonstrably effective program dies through neglect of a renewal vote." },
  causes:["broadbandinvest","erate","rdof"], effects:[] }

);
