// SUPPLEMENT — the press as a check on power: the investigations and leaks that
// exposed war crimes, surveillance, and corruption, and the platforms (WikiLeaks, the
// global leak consortia) that industrialized disclosure. Cross-links the existing
// pentagonpapers, washingtonpost1877, churchcommittee, fisa, snowden, prism, usafreedom,
// sueddeutsche, espionageact cards. cat:"print" (+ power/law/internet). Round one: data only.
window.ATLAS_EVENTS.push(

{ id:"mylai", year:1969, date:"November 1969", era:5, cat:"print",
  title:"My Lai Exposed",
  wiki:"My Lai massacre",
  summary:"Independent reporter Seymour Hersh, working through the small Dispatch News Service, breaks the story of the 1968 My Lai massacre — U.S. soldiers' killing of hundreds of unarmed Vietnamese civilians — the first major Vietnam-era war-crimes exposure by American journalism.",
  importance:"Hersh's My Lai reporting demonstrated the press's power to force a nation to confront atrocities committed in its name, against the military's effort to bury them. Surfacing as the Vietnam War's legitimacy crumbled, it helped turn public opinion and established investigative reporting as a check on the conduct of war itself. It is the modern template for the journalist-as-accountability-mechanism that runs through every entry here.",
  impact:{
    print:"Independent reporting forces the nation to confront a war crime it tried to bury.",
    power:"Journalism is established as a check on the conduct of war.",
    society:"The press helps turn public opinion against the Vietnam War." },
  causes:["muckrakers"], effects:["pentagonpapers","watergate","abughraib"] },

{ id:"watergate", year:1972, date:"1972–1974", era:5, cat:"print",
  title:"Watergate",
  wiki:"Watergate scandal",
  summary:"Washington Post reporters Bob Woodward and Carl Bernstein trace the 1972 break-in at Democratic headquarters to the Nixon White House; two years of reporting help force the first resignation of a U.S. president (August 1974) and trigger reforms — campaign-finance limits, and the Church Committee (1975–76) that produced FISA (1978).",
  importance:"Watergate is the high-water mark of the American press as a check on power: dogged reporting by two metro journalists, against a sitting president's cover-up, ended in his resignation and a wave of accountability reforms. It made investigative journalism heroic and central to democratic self-correction, and its downstream effects — intelligence oversight, surveillance law — reshaped the relationship between the state and its watchers. No single act better embodies the Fourth Estate's promise.",
  impact:{
    power:"Reporting helps force the first resignation of a U.S. president.",
    print:"Investigative journalism becomes the heroic center of accountability.",
    law:"The fallout produces campaign-finance reform, the Church Committee, and FISA." },
  causes:["washingtonpost1877","pentagonpapers","mylai"], effects:["churchcommittee","fisa","abughraib"] },

{ id:"abughraib", year:2004, date:"2004", era:6, cat:"print",
  title:"The Abu Ghraib Photographs",
  wiki:"Abu Ghraib torture and prisoner abuse",
  summary:"CBS's 60 Minutes II and Seymour Hersh in The New Yorker publish photographs of U.S. soldiers abusing and torturing detainees at Iraq's Abu Ghraib prison, triggering congressional hearings, military investigations, and a global reckoning with American conduct in the 'war on terror.'",
  importance:"Abu Ghraib showed the press's enduring power to hold the state's wartime conduct to account, with photographic evidence that no official denial could overcome. The images reshaped global perception of the Iraq War and forced investigations and prosecutions, even as accountability stopped short of the senior officials who set the policies. It is the post-9/11 successor to My Lai — the camera, this time in soldiers' own hands, exposing atrocity.",
  impact:{
    print:"Photographic evidence of torture forces hearings and investigations.",
    power:"The press again holds the state's wartime conduct to account.",
    society:"The images reshape the world's view of America's 'war on terror.'" },
  causes:["mylai","watergate"], effects:["wikileaks"] },

{ id:"wikileaks", year:2006, date:"October 2006", era:6, cat:["print","internet"],
  title:"WikiLeaks",
  wiki:"WikiLeaks",
  summary:"Julian Assange and others found WikiLeaks, a dedicated platform for publishing leaked government and corporate documents at scale — an attempt to industrialize disclosure by giving whistleblowers an anonymous, uncensorable conduit to the public, outside any single newsroom.",
  importance:"WikiLeaks reimagined the leak for the internet age: not a source handing documents to one reporter, but a global publishing platform built to receive and release secrets in bulk, beyond the reach of any government's prior restraint. It forced the established press into uneasy partnership and posed a new question — whether radical transparency is a check on power or a danger to it — that the prosecutions of the next two decades would contest.",
  impact:{
    internet:"A platform industrializes the leak — bulk disclosure beyond any single newsroom.",
    print:"The established press is forced into partnership with a new kind of publisher.",
    power:"Radical transparency is offered as a permanent check on state secrecy." },
  causes:["abughraib"], effects:["collateralmurder","warlogs","cablegate","assangeplea"] },

{ id:"collateralmurder", year:2010, date:"April 5, 2010", era:6, cat:"print",
  title:"Collateral Murder",
  wiki:"July 12, 2007, Baghdad airstrike",
  summary:"WikiLeaks releases 'Collateral Murder' — classified U.S. military gunsight video of a 2007 Baghdad airstrike that killed civilians and two Reuters journalists — provided by Army analyst Chelsea Manning. The footage brings the abstraction of distant war to a global audience in raw form.",
  importance:"The Collateral Murder video made visceral what statistics could not: the killing of civilians and journalists seen through the attackers' own gunsight, narrated by their own voices. Sourced from Manning's vast leak, it announced WikiLeaks as a force and the disclosures to come, and reframed the debate over secrecy, accountability, and the human cost of remote warfare.",
  impact:{
    print:"Leaked gunsight video brings the reality of remote war to a global public.",
    power:"The killing of civilians and journalists is exposed in the military's own footage.",
    society:"The abstraction of distant war is made visceral and undeniable." },
  causes:["wikileaks"], effects:["warlogs","cablegate"] },

{ id:"warlogs", year:2010, date:"July–October 2010", era:6, cat:"print",
  title:"The War Logs",
  wiki:"Iraq War documents leak",
  summary:"WikiLeaks, partnering with the New York Times, the Guardian, and Der Spiegel, publishes the Afghan War Diary (July) and Iraq War Logs (October) — hundreds of thousands of military field reports from both wars, the largest leaks of classified military records in U.S. history to that point.",
  importance:"The War Logs established the model that would define modern mega-leaks: WikiLeaks supplying the documents, major newspapers providing the editing, context, and credibility. Together they revealed unreported civilian deaths, detainee abuse, and the gap between official accounts and ground truth, demonstrating that the press could process state secrets at industrial scale — and that disclosure now flowed through a partnership of platform and newsroom.",
  impact:{
    print:"Platform and major newspapers jointly process state secrets at industrial scale.",
    power:"Unreported civilian deaths and the gap between official and real war are exposed.",
    society:"The largest military-records leaks to date reshape the wars' public record." },
  causes:["wikileaks","collateralmurder"], effects:["cablegate"] },

{ id:"cablegate", year:2010, date:"November 2010", era:6, cat:"print",
  title:"Cablegate",
  wiki:"United States diplomatic cables leak",
  summary:"WikiLeaks and a consortium of international papers publish some 250,000 U.S. diplomatic cables — an unprecedented exposure of the candid inner workings of American foreign policy. The source, Chelsea Manning, is convicted and sentenced to 35 years in 2013; President Obama commutes the sentence in 2017.",
  importance:"Cablegate laid bare the private machinery of diplomacy on a scale never seen, embarrassing governments worldwide and feeding events from the Arab Spring onward. It also set up the era's central press-freedom conflict: the U.S. response — prosecuting the leaker under the Espionage Act and pursuing the publisher — raised the question of whether disclosing state secrets is journalism or a crime, a question still unresolved.",
  impact:{
    print:"A quarter-million secret cables expose the candid workings of foreign policy.",
    power:"The private machinery of diplomacy is laid bare worldwide.",
    law:"The prosecution of the leaker opens the era's central press-freedom conflict." },
  causes:["wikileaks","warlogs"], effects:["snowden","assangeplea"] },

{ id:"panamapapers", year:2016, date:"April 2016", era:7, cat:["print","law"],
  title:"The Panama Papers",
  wiki:"Panama Papers",
  summary:"A leak to Germany's Süddeutsche Zeitung, shared through the International Consortium of Investigative Journalists with 100-plus outlets worldwide, exposes how the global elite use offshore shell companies to hide wealth — and forces the resignation of Iceland's prime minister.",
  importance:"The Panama Papers pioneered a new form of accountability journalism: a single source's data analyzed simultaneously by hundreds of journalists across dozens of countries, coordinated by a consortium, producing a coordinated global exposure no single newsroom could mount. It toppled a head of government and put offshore finance under worldwide scrutiny, proving the cross-border collaborative investigation as a twenty-first-century check on transnational power.",
  impact:{
    print:"A global consortium of journalists analyzes one leak across dozens of countries.",
    law:"Offshore finance and elite tax avoidance come under worldwide scrutiny.",
    power:"The exposure forces the resignation of a sitting prime minister." },
  causes:["snowden","sueddeutsche","cablegate"], effects:["pandorapapers"] },

{ id:"pandorapapers", year:2021, date:"October 2021", era:7, cat:["print","law"],
  title:"The Pandora Papers",
  wiki:"Pandora Papers",
  summary:"The International Consortium of Investigative Journalists releases the Pandora Papers, another vast offshore-finance leak on the Panama Papers model — implicating world leaders, billionaires, and public officials in hidden wealth, and cementing the global collaborative investigation as a permanent journalistic form.",
  importance:"The Pandora Papers confirmed that the cross-border consortium model had become a durable institution of accountability journalism, capable of repeatedly mobilizing hundreds of reporters worldwide against the machinery of hidden wealth. That such mega-leaks now recur shows both the press's adaptation to a globalized elite and the limits of exposure alone, as the offshore system survives each disclosure largely intact.",
  impact:{
    print:"The global collaborative investigation is confirmed as a permanent journalistic form.",
    law:"A new wave of offshore disclosures implicates leaders and billionaires worldwide.",
    power:"Repeated exposure tests whether transparency alone can change entrenched systems." },
  causes:["panamapapers"], effects:[] },

{ id:"assangeplea", year:2024, date:"June 2024", era:7, cat:["print","law"],
  title:"The Assange Plea",
  wiki:"Julian Assange",
  summary:"After years in detention and a long extradition fight, Julian Assange pleads guilty in June 2024 to a single Espionage Act count for his role in obtaining and publishing classified documents, is sentenced to time served (1,901 days), and returns to Australia — the first publisher ever convicted under the Espionage Act.",
  importance:"The Assange case resolved with a precedent press-freedom advocates had long feared: a publisher criminally convicted under the Espionage Act for publishing state secrets — the very act the Pentagon Papers had seemed to protect. Whatever one's view of Assange, the plea established that the act of publishing classified information can be prosecuted as espionage, a chilling marker for investigative journalism and the unresolved end of the disclosure era WikiLeaks began.",
  impact:{
    law:"For the first time, a publisher is convicted under the Espionage Act for publishing.",
    print:"The prosecution of publishing as espionage chills investigative journalism.",
    power:"The disclosure era ends with the state asserting it can criminalize publication." },
  causes:["wikileaks","cablegate","espionageact","pentagonpapers"], effects:[] }

);
