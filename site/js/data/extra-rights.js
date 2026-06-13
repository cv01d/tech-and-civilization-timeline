// SUPPLEMENT — the long road of human rights, from the moral codes of antiquity to the
// modern treaty system. The thread runs alongside the museum's law spine: the idea that
// the powerful owe duties to the powerless is articulated first by religious and moral
// traditions, then by revolutionary declarations, and finally — after the catastrophe of
// the Second World War — by a body of binding international law. Cross-links the existing
// hammurabi, urnammu, magnacarta, declaration (1776), frenchrev, usbillofrights,
// slavetrade1807, abolition1833, udhr, senecafalls, nineteenth, ww2 cards.
// Religious milestones are dated by tradition and described historically.
// Round one: data only — images to follow.
window.ATLAS_EVENTS.push(

{ id:"tencommandments", year:-1440, date:"c. 1440 BCE (traditional)", era:1, cat:"law",
  title:"The Ten Commandments",
  wiki:"Ten Commandments",
  summary:"By tradition, the Torah gives the tribes of Israel the Ten Commandments — among them 'Thou shalt not kill' — binding a whole people to a shared moral code with stated punishments for its breach.",
  importance:"Whatever its precise date, the Decalogue became one of the most enduring moral-legal codes in human history: a compact list of duties binding rulers and ruled alike before a higher law than any king's. Set beside the earlier royal codes of Ur-Nammu and Hammurabi, it shifted the source of law from the sovereign's will toward a transcendent moral order. Its prohibitions — on killing, theft, false witness — echo down every later declaration of rights in this gallery.",
  impact:{
    law:"A shared moral code binds a people under law higher than any ruler's command.",
    power:"Authority is subordinated, in principle, to a transcendent moral order.",
    society:"Duties owed to one another are fixed in a portable, memorable code." },
  causes:["hammurabi","urnammu"], effects:["jesus","quran","frenchdeclaration"] },

{ id:"buddha", year:-500, date:"c. 528–486 BCE", era:1, cat:"power",
  title:"The Buddha's Ethic of Non-Violence",
  wiki:"Gautama Buddha",
  summary:"In India the Buddha preaches morality, reverence for life, non-violence, and right conduct — an ethical framework, independent of any state, that places compassion and restraint at the center of the good life.",
  importance:"The Buddha's teaching offered a moral order grounded not in royal decree or tribal covenant but in the cultivation of conscience and the relief of suffering, with non-violence (ahimsa) at its heart. Its insistence on reverence for all life and right conduct became one of humanity's deepest wells of ethical thought, shaping law and politics across Asia for millennia. It stands in this gallery as an early articulation of duties owed to every living being, irrespective of power.",
  impact:{
    power:"A moral order is founded on conscience and compassion, independent of the state.",
    society:"Non-violence and reverence for life enter the world's ethical vocabulary.",
    law:"Right conduct is framed as universal duty, not the command of a ruler." },
  causes:[], effects:["jesus","quran","udhr"] },

{ id:"jesus", year:30, date:"c. 26–33 CE", era:1, cat:"power",
  title:"The Teaching of Jesus",
  wiki:"Jesus",
  summary:"Jesus of Nazareth preaches morality, tolerance, justice, forgiveness, and love — an ethic of mercy toward the poor, the outcast, and the enemy that would profoundly shape Western moral and legal thought.",
  importance:"The teaching attributed to Jesus placed the dignity of the least and the duty of forgiveness at the center of moral life, extending obligation even to the stranger and the enemy. However it was later wielded by power, its core ethic of equal human worth became a recurring source of dissent against injustice — invoked by abolitionists, reformers, and rights movements across the centuries. It belongs in this gallery as one of the deep roots of the idea that every person possesses inviolable worth.",
  impact:{
    power:"The dignity of the poor and the outcast is placed at the center of moral life.",
    society:"An ethic of mercy, forgiveness, and equal worth enters Western thought.",
    law:"The claim of universal human dignity gains one of its enduring sources." },
  causes:["tencommandments","buddha"], effects:["quran","frenchdeclaration","abolition1833"] },

{ id:"quran", year:632, date:"c. 610–632 CE", era:1, cat:"power",
  title:"The Qur'an's Principles of Justice",
  wiki:"Quran",
  summary:"The teachings revealed through the Prophet Muhammad and gathered in the Qur'an proclaim principles of equality, justice, and compassion — a moral and legal order that would shape the law and governance of much of the world.",
  importance:"The Qur'an set out a comprehensive moral and legal vision in which justice, charity to the poor, and the fundamental equality of believers were religious obligations, becoming the foundation of Islamic law and statecraft. Its principles of compassion and just dealing influenced ethics, governance, and jurisprudence across a vast portion of humanity for fourteen centuries. In this gallery it stands as a major source of the conviction that justice and human dignity are owed as a matter of sacred duty.",
  impact:{
    power:"Justice, equality, and charity are framed as binding sacred obligations.",
    law:"A comprehensive moral-legal order shapes the governance of much of the world.",
    society:"Compassion and just dealing are established as religious duty across civilizations." },
  causes:["tencommandments","jesus"], effects:["althing"] },

{ id:"althing", year:930, date:"930", era:1, cat:"power",
  title:"The Althing: The First Parliament",
  wiki:"Althing",
  summary:"Iceland founds the Althing — the oldest surviving parliamentary institution in the world — where free men gather annually to make law and settle disputes, a thousand years before universal representative democracy.",
  importance:"At the Althing, the free farmers of Iceland assembled each year on the plain of Þingvellir to legislate and adjudicate in common, an early and durable instance of law made by an assembly rather than dictated by a king. It embodied the principle that authority can rest in a deliberating community, the seed of every later parliament and representative body. Its longevity made it a living link between the assemblies of antiquity and the democratic institutions that would carry rights into law.",
  impact:{
    power:"Law is made by a deliberating assembly of free men, not a single ruler.",
    law:"A durable model of representative lawmaking is established in the medieval world.",
    society:"The principle that authority rests in the community gains a living institution." },
  causes:[], effects:["magnacarta"] },

{ id:"frenchdeclaration", year:1789, date:"1789", era:2, cat:"law",
  title:"The Rights of Man and of the Citizen",
  wiki:"Declaration of the Rights of Man and of the Citizen",
  summary:"France's National Assembly adopts the Declaration of the Rights of Man and of the Citizen, guaranteeing liberty, equality, property, security, and resistance to oppression — a founding charter of the modern rights tradition.",
  importance:"Proclaimed in the first months of the French Revolution, the Declaration asserted that men are born free and equal in rights, and that government exists to secure those rights — a universalist claim that swept far beyond France's borders. Alongside the American Declaration and Bill of Rights, it converted Enlightenment philosophy into political foundation, the language on which the Universal Declaration of 1948 would later build. It is among the most influential statements of human rights ever written.",
  impact:{
    law:"Liberty, equality, and resistance to oppression are declared the rights of all.",
    power:"Government is redefined as the servant of pre-existing human rights.",
    society:"Enlightenment philosophy becomes the charter of the modern rights tradition." },
  causes:["declaration","frenchrev","magnacarta","tencommandments"], effects:["usbillofrights","udhr"] },

{ id:"redcrossgeneva", year:1864, date:"1859–1864", era:3, cat:"law",
  title:"Solferino, the Red Cross, and Geneva",
  wiki:"Geneva Conventions",
  summary:"Horror at the carnage of the Battle of Solferino (1859) moves Henry Dunant to found the International Committee of the Red Cross (1863); the next year the first Geneva Convention is adopted — the birth of modern international humanitarian law.",
  importance:"Dunant, an ordinary traveler who came upon the unattended wounded of Solferino, turned his horror into an institution: the Red Cross, and a treaty obliging armies to protect the wounded and those who care for them. The 1864 Geneva Convention was the first modern instrument of international humanitarian law — the radical idea that even war has binding rules, and that human dignity persists on the battlefield. It opened the long effort to subject organized violence to law that runs through the Hague Conventions to the autonomous-weapons debates of today.",
  impact:{
    law:"The first modern treaty of international humanitarian law is adopted.",
    power:"Even war is made subject to binding rules protecting the wounded.",
    society:"A neutral institution is created to safeguard human dignity in conflict." },
  causes:[], effects:["hagueconvention","un1945","udhr"] },

{ id:"nzwomenvote", year:1893, date:"1893", era:4, cat:"power",
  title:"New Zealand Enfranchises Women",
  wiki:"Women's suffrage in New Zealand",
  summary:"New Zealand becomes the first self-governing country in the world to grant women the right to vote — a landmark breach in the assumption that political rights belong to men alone.",
  importance:"After a mass suffrage campaign, New Zealand extended the vote to women in 1893, the first nation to do so and a proof of concept that reverberated worldwide. It marked a decisive advance in the long struggle, from Seneca Falls onward, to make the universal language of rights actually universal — to include the half of humanity that every prior declaration had quietly excluded. The breakthrough helped open the path to women's suffrage across the democratic world.",
  impact:{
    power:"Women gain the vote at national scale for the first time anywhere.",
    society:"The exclusion of women from the rights of citizenship is decisively challenged.",
    law:"A precedent is set that political rights cannot be reserved to men." },
  causes:["senecafalls"], effects:["nineteenth"] },

{ id:"hagueconvention", year:1899, date:"1899", era:4, cat:"law",
  title:"The Hague Conventions",
  wiki:"Hague Conventions of 1899 and 1907",
  summary:"The first Hague Convention is signed, setting limits on the conduct of war and methods of combat; together with the Geneva Conventions it forms the foundation of international humanitarian law.",
  importance:"Where Geneva protected the victims of war, the Hague Conventions sought to constrain its conduct — prohibiting certain weapons and tactics and establishing rules of engagement among states. Together the two strands built the body of law that insists organized violence has limits enforceable in principle by the community of nations. That framework would be tested to destruction in the world wars, and rebuilt afterward into the modern human-rights and humanitarian-law system.",
  impact:{
    law:"Binding limits on the conduct and weapons of war are codified among nations.",
    power:"The community of states asserts authority to regulate how wars are fought.",
    society:"International humanitarian law acquires its second foundational pillar." },
  causes:["redcrossgeneva"], effects:["un1945"] },

{ id:"un1945", year:1945, date:"1945", era:5, cat:"power",
  title:"The United Nations",
  wiki:"United Nations",
  summary:"From the ashes of the Second World War and the Holocaust, the United Nations is founded to 'reaffirm faith in human rights, in the dignity and worth of the human person' — and to build the institutions that would translate that faith into law.",
  importance:"The unprecedented catastrophe of the war and the genocide at its heart forced a reckoning: that national sovereignty alone could not protect human beings from their own governments. The UN Charter placed human dignity at the center of the new international order, and the organization became the forum in which the modern body of human-rights law would be written. Nearly every treaty that follows in this gallery is a product of the institution born in 1945.",
  impact:{
    power:"A global institution is founded to place human dignity at the center of world order.",
    law:"The forum is created in which modern human-rights law will be written.",
    society:"The catastrophe of war and genocide forces a new commitment to universal rights." },
  causes:["ww2","redcrossgeneva","hagueconvention"], effects:["udhr","echr","icerd","covenants1966","riodeclaration"] },

{ id:"echr", year:1950, date:"1950", era:5, cat:"law",
  title:"The European Convention on Human Rights",
  wiki:"European Convention on Human Rights",
  summary:"The Council of Europe adopts the European Convention on Human Rights — the first treaty to translate the Universal Declaration's principles into binding regional law, enforceable by a court whose judgments states must obey.",
  importance:"Where the 1948 Universal Declaration was a statement of aspiration, the European Convention made rights enforceable: individuals could bring their own governments before the European Court of Human Rights and win binding judgments. It was the first system to give the human-rights idea real legal teeth, and it became the model for the regional charters that followed in the Americas and Africa. The Convention proved that international rights could be more than words.",
  impact:{
    law:"The Universal Declaration's principles become binding, court-enforced regional law.",
    power:"Individuals gain the right to bring their own governments before a court.",
    society:"Human rights acquire enforcement, not merely proclamation." },
  causes:["udhr"], effects:["americanconvention","africancharter"] },

{ id:"amnesty", year:1961, date:"1961", era:5, cat:"power",
  title:"Amnesty International",
  wiki:"Amnesty International",
  summary:"Amnesty International is founded after a campaign to free two Portuguese students jailed for raising a toast to freedom — pioneering the citizen movement that holds governments to account for political imprisonment and torture.",
  importance:"Sparked by outrage at the imprisonment of people for their beliefs, Amnesty built a global movement of ordinary citizens writing letters on behalf of 'prisoners of conscience,' proving that organized public pressure could pry open prison doors. It made human rights a matter of grassroots activism, not only diplomacy, and its documentation became a force governments could not easily ignore. The model of the independent watchdog, naming abuses and mobilizing shame, descends directly from it.",
  impact:{
    power:"Citizen activism becomes a force holding governments to account for abuses.",
    society:"The 'prisoner of conscience' enters the global moral vocabulary.",
    law:"Independent documentation of abuses pressures states toward their treaty obligations." },
  causes:["udhr"], effects:["cat1984"] },

{ id:"icerd", year:1965, date:"1965", era:5, cat:"law",
  title:"The Convention Against Racial Discrimination",
  wiki:"International Convention on the Elimination of All Forms of Racial Discrimination",
  summary:"The UN adopts the International Convention on the Elimination of All Forms of Racial Discrimination (in force 1969) — the first of the great binding human-rights treaties, committing states to end racial discrimination in law and practice.",
  importance:"Adopted amid decolonization, the U.S. civil-rights movement, and the struggle against apartheid, ICERD translated the Universal Declaration's promise of equality into a specific, binding obligation to dismantle racial discrimination. It was the first of the core UN human-rights treaties to enter force, establishing the model of a convention with a monitoring committee to which states must report. It made the abolition of racial hierarchy a matter of international law.",
  impact:{
    law:"States are bound by treaty to eliminate racial discrimination in law and practice.",
    power:"The international community makes racial equality a binding obligation.",
    society:"The first core UN human-rights treaty enters force amid global anti-racist struggle." },
  causes:["udhr","un1945"], effects:["covenants1966","cedaw"] },

{ id:"covenants1966", year:1966, date:"1966", era:5, cat:"law",
  title:"The Two Covenants",
  wiki:"International Covenant on Civil and Political Rights",
  summary:"The UN adopts the International Covenant on Civil and Political Rights and the International Covenant on Economic, Social and Cultural Rights (both in force 1976) — turning the Universal Declaration into binding, comprehensive treaty law.",
  importance:"Together with the Universal Declaration, the two Covenants form the 'International Bill of Human Rights,' binding states to respect both civil-political liberties (speech, fair trial, freedom from torture) and economic-social rights (work, health, education). Their split into two treaties reflected the Cold War divide over which rights mattered most, yet together they made the full span of human rights a matter of international legal obligation. They are the comprehensive legal core of the modern rights system.",
  impact:{
    law:"The Universal Declaration becomes binding, comprehensive treaty law.",
    power:"States accept legal obligations spanning both liberty and material welfare.",
    society:"The full range of human rights gains the force of international law." },
  causes:["udhr","icerd"], effects:["cedaw","crc1989"] },

{ id:"americanconvention", year:1969, date:"1969", era:5, cat:"law",
  title:"The American Convention on Human Rights",
  wiki:"American Convention on Human Rights",
  summary:"The nations of the Americas adopt the American Convention on Human Rights (in force 1978), creating a regional system with its own commission and court to protect rights across the hemisphere.",
  importance:"Following Europe's model, the Americas built their own enforceable regional system, with an Inter-American Commission and Court able to hear cases and issue binding rulings against member states. It became a crucial instrument during the decades of military dictatorship and disappearances across Latin America, giving victims a forum beyond their own captured courts. The regional human-rights system was now taking root on a second continent.",
  impact:{
    law:"A binding regional rights system, with a court, is established for the Americas.",
    power:"Victims gain a forum beyond their own governments' captured institutions.",
    society:"Enforceable human rights spread to a second continent." },
  causes:["echr","udhr"], effects:["africancharter"] },

{ id:"soweto", year:1976, date:"1976", era:5, cat:"power",
  title:"The Soweto Uprising",
  wiki:"Soweto uprising",
  summary:"South African schoolchildren protesting apartheid education are met with police gunfire in Soweto; the killings become the turning point of the liberation struggle and a global symbol of resistance to racial oppression.",
  importance:"When police opened fire on students protesting the imposition of Afrikaans in their schools, the images of dead and wounded children galvanized the anti-apartheid movement at home and the campaign of isolation and sanctions abroad. Soweto marked the point from which apartheid's collapse, though still years away, became a matter of when rather than whether. It stands as a defining instance of how a regime's violence against the powerless can become the engine of its undoing.",
  impact:{
    power:"State violence against children becomes the turning point against apartheid.",
    society:"A global movement of solidarity and sanctions is galvanized.",
    law:"The struggle accelerates the international rejection of institutionalized racism." },
  causes:["icerd"], effects:["africancharter"] },

{ id:"cedaw", year:1979, date:"1979", era:5, cat:"law",
  title:"CEDAW: A Treaty for Women's Rights",
  wiki:"Convention on the Elimination of All Forms of Discrimination Against Women",
  summary:"The UN adopts the Convention on the Elimination of All Forms of Discrimination Against Women (in force 1981) — an international bill of rights for women, binding states to end discrimination in law, work, education, and family life.",
  importance:"CEDAW gathered the scattered struggle for women's equality — from Seneca Falls to New Zealand's ballot to suffrage worldwide — into a single binding treaty obliging states to dismantle discrimination across every sphere of life. It made gender equality a matter of international legal obligation rather than national grace, and created a committee to hold governments to account. It remains the most comprehensive global instrument for the rights of half of humanity.",
  impact:{
    law:"States are bound by treaty to end discrimination against women in all spheres.",
    power:"Gender equality becomes a binding international obligation, not national grace.",
    society:"The long struggle for women's rights is consolidated into global law." },
  causes:["udhr","icerd","senecafalls"], effects:["crc1989","crpd"] },

{ id:"africancharter", year:1981, date:"1981", era:5, cat:"law",
  title:"The African Charter on Human and Peoples' Rights",
  wiki:"African Charter on Human and Peoples' Rights",
  summary:"The Organisation of African Unity adopts the African Charter on Human and Peoples' Rights — a regional system distinctive for pairing individual rights with collective 'peoples' rights' and with duties owed to the community.",
  importance:"Completing the trio of regional systems after Europe and the Americas, the African Charter brought a distinctive vision: alongside individual liberties it enshrined the rights of peoples — to self-determination, development, and a satisfactory environment — and the duties individuals owe their communities, reflecting African philosophical traditions. Adopted as the continent emerged from colonial rule and apartheid endured to its south, it asserted that human rights could be framed in more than one cultural idiom. It gave Africa its own enforceable rights framework.",
  impact:{
    law:"A regional rights system enshrines peoples' rights and communal duties alongside individual liberty.",
    power:"Human rights are asserted in a distinctively African philosophical idiom.",
    society:"The regional rights model is completed on a third continent." },
  causes:["echr","americanconvention","soweto"], effects:["cairodeclaration"] },

{ id:"cat1984", year:1984, date:"1984", era:5, cat:"law",
  title:"The Convention Against Torture",
  wiki:"United Nations Convention Against Torture",
  summary:"The UN adopts the Convention Against Torture (in force 1987), binding states to prevent and criminalize torture absolutely — one of the few human-rights prohibitions admitting no exception, not even in war or emergency.",
  importance:"The Convention Against Torture made one of humanity's oldest abuses an absolute, non-derogable crime: no circumstance — war, emergency, the orders of a superior — can justify it, and states must prosecute torturers found on their soil wherever the act occurred. Built on the documentation work of movements like Amnesty, it represented the rights system at its most uncompromising. It established that some violations of human dignity are simply beyond the reach of any justification.",
  impact:{
    law:"Torture is made an absolute crime admitting no exception, enforceable across borders.",
    power:"States lose any claimed right to torture, even in war or emergency.",
    society:"One of the oldest abuses of power is placed beyond all justification." },
  causes:["amnesty","udhr"], effects:["crc1989","crpd"] },

{ id:"crc1989", year:1989, date:"1989", era:5, cat:"law",
  title:"The Convention on the Rights of the Child",
  wiki:"Convention on the Rights of the Child",
  summary:"The UN adopts the Convention on the Rights of the Child (in force 1990) — the most widely ratified human-rights treaty in history, recognizing children as bearers of rights; only the United States has not ratified it.",
  importance:"The Convention reframed children not as the property of parents or states but as holders of rights — to survival, protection, education, and a voice in matters affecting them — and it won near-universal ratification, a unique consensus in human-rights law. Its lone holdout, the United States, made it a quiet marker of American exceptionalism in the treaty system. It extended the rights idea to the most dependent members of every society.",
  impact:{
    law:"Children are recognized as rights-bearers in the most widely ratified treaty ever.",
    society:"The most dependent members of society gain protected international rights.",
    power:"Near-universal ratification sets a benchmark — with the U.S. the notable holdout." },
  causes:["udhr","covenants1966","cedaw","cat1984"], effects:["crpd","icrmw"] },

{ id:"cairodeclaration", year:1990, date:"1990", era:5, cat:"law",
  title:"The Cairo Declaration on Human Rights in Islam",
  wiki:"Cairo Declaration on Human Rights in Islam",
  summary:"Member states of the Organisation of the Islamic Conference adopt the Cairo Declaration, articulating human rights within the framework of Islamic law (Sharia) — both an affirmation of rights and a contested counterpoint to the Universal Declaration's universalism.",
  importance:"The Cairo Declaration sought to express human rights in an explicitly Islamic idiom, grounding dignity, justice, and equality in Sharia rather than in the secular universalism of 1948. It crystallized one of the central debates of the rights tradition: whether human rights are truly universal or are inevitably shaped by particular cultures and faiths. Affirmed by some as cultural authenticity and criticized by others as a qualification of universal standards, it marked the maturing of that argument within the international system.",
  impact:{
    law:"Human rights are articulated within the framework of Islamic law.",
    power:"The universalism of the 1948 Declaration is met with a cultural counterpoint.",
    society:"The debate over universal versus particular rights is sharpened within the system." },
  causes:["udhr","quran","africancharter"], effects:["crpd"] },

{ id:"icrmw", year:1990, date:"1990", era:5, cat:"law",
  title:"Rights for Migrant Workers",
  wiki:"International Convention on the Protection of the Rights of All Migrant Workers and Members of Their Families",
  summary:"The UN adopts a convention protecting the rights of all migrant workers and their families (in force 2003) — extending human-rights protection to one of the world's most exploited and least enfranchised populations.",
  importance:"As global labor migration swelled, the convention sought to guarantee migrant workers and their families basic rights regardless of their legal status — against exploitation, abuse, and the legal limbo that strips the undocumented of protection. Tellingly, it has been ratified mainly by countries that send migrants, not those that receive them, exposing the gap between universal principle and the interests of wealthy states. It marks the frontier where the rights idea meets the hard politics of borders and cheap labor.",
  impact:{
    law:"Migrant workers and their families gain treaty protection regardless of status.",
    labor:"One of the most exploited labor populations is brought under human-rights law.",
    power:"Ratification mainly by sending, not receiving, states exposes the limits of universalism." },
  causes:["udhr","crc1989"], effects:["crpd"] },

{ id:"riodeclaration", year:1992, date:"1992", era:6, cat:"law",
  title:"The Rio Declaration",
  wiki:"Rio Declaration on Environment and Development",
  summary:"The UN Conference on Environment and Development produces the Rio Declaration — linking human rights, development, and the environment, and asserting that a healthy environment is a condition of human dignity and the rights of future generations.",
  importance:"Rio broadened the rights horizon to include the planet itself, articulating principles — sustainable development, the precautionary approach, common but differentiated responsibilities — that tied human welfare to environmental stewardship and to the claims of generations not yet born. It opened the still-unfolding effort to recognize a right to a healthy environment within the human-rights framework. As climate change advances, its premise — that dignity depends on a livable world — has only grown more central.",
  impact:{
    law:"Human rights, development, and the environment are formally linked in international principle.",
    society:"A healthy environment is asserted as a condition of human dignity.",
    power:"The rights of future generations enter the international agenda." },
  causes:["un1945"], effects:["crpd"] },

{ id:"crpd", year:2007, date:"2007", era:6, cat:"law",
  title:"The Convention on the Rights of Persons with Disabilities",
  wiki:"Convention on the Rights of Persons with Disabilities",
  summary:"The UN adopts the Convention on the Rights of Persons with Disabilities — drawing the highest number of opening-day signatories in UN history (in force 2008) — recognizing disability rights as human rights and shifting from a model of charity to one of equality and inclusion.",
  importance:"The Convention marked a paradigm shift: from viewing disabled people as objects of medicine and charity to recognizing them as full rights-holders entitled to autonomy, accessibility, and inclusion on equal terms. Shaped by the disability movement's own demand — 'nothing about us without us' — it drew record support on its opening day. It stands, in this gallery, as the most recent great expansion of the rights idea, extending dignity's protection to a fifth of humanity long treated as outside it.",
  impact:{
    law:"Disability rights are recognized as human rights in a record-supported treaty.",
    society:"The model shifts from charity to equality, autonomy, and inclusion.",
    power:"The rights idea expands to a population long excluded from its protection." },
  causes:["udhr","crc1989","cedaw","cat1984","cairodeclaration","icrmw","riodeclaration"], effects:[] }

);
