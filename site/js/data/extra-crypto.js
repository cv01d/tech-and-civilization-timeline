// SUPPLEMENT — Digital money and the blockchain, 1983–2026. Cryptographers dream of
// cash without banks; a financial crisis births the first working system; a decade
// later it has spawned a bubble economy, a speculative art market, a string of
// collapses, and the first federal framework for digital money — the atlas's oldest
// pattern once more, invention first and reckoning after. The existing `bitcoin`
// (2009 genesis block) and `libra` (2019) cards belong to this gallery too; this file
// supplies the rest and cross-links the financialcrisis, dotcom, snowden cards.
window.ATLAS_EVENTS.push(

{ id:"chaumecash", year:1983, date:"1983–1988", era:5, cat:["crypto","encryption","internet"],
  title:"David Chaum's Blueprint for Digital Cash",
  wiki:"David Chaum", gallery:["Blind signature","Digital currency"],
  summary:"Cryptographer David Chaum publishes the theoretical foundation for anonymous digital cash, inventing the 'blind signature' — the first serious technical framework for money that can move over a network without a trusted third party watching. His 1983, 1985, and 1988 papers show how cryptography could give networked payments the privacy of physical cash.",
  importance:"Chaum saw before almost anyone that to digitize money was to digitize surveillance: every electronic payment leaves a record some institution holds. His blind-signature scheme let a bank certify a coin as valid without learning whose coin it was, preserving the anonymity of cash in a networked world. The papers laid the intellectual groundwork for every later attempt at electronic money, framing the central question the field would spend forty years answering — whether digital value can be both trustworthy and private without a master ledger of who paid whom.",
  impact:{
    encryption:"The blind signature lets a payment be certified without revealing the payer.",
    society:"The privacy of physical cash is given, in theory, a digital form.",
    surveillance:"Chaum names the core danger of electronic money — that it records everything." },
  causes:["publickeycrypto","rsa"], effects:["digicash","satoshiwhitepaper"] },

{ id:"digicash", year:1990, date:"1989–1998", era:6, cat:["crypto","encryption","internet"],
  title:"DigiCash and the Cypherpunks",
  wiki:"DigiCash", gallery:["David Chaum","Hashcash","Cypherpunk"],
  summary:"Chaum builds DigiCash to implement his anonymous-cash ideas, one of the earliest electronic payment systems — but it needs banks to cooperate, struggles for adoption, and folds in 1998. The cypherpunk movement fills the void: Adam Back's Hashcash (1997) introduces proof-of-work, and Wei Dai's b-money (1998) proposes distributed cash with no central authority — both later cited directly in the Bitcoin whitepaper.",
  importance:"DigiCash proved how hard the practical problem was: Chaum's mathematics worked, but a private currency that still depended on banks to issue it could not escape the institutions it sought to bypass, and it died for want of adoption. The cypherpunks — a mailing-list culture convinced that cryptography was a tool of political liberation — took up the unsolved pieces, with Hashcash supplying a way to make digital effort costly and b-money sketching money with no issuer at all. These were the missing parts that a later, anonymous author would finally assemble.",
  impact:{
    crypto:"The first electronic cash fails, but proof-of-work and issuer-less money are invented.",
    encryption:"Cryptography is reframed as a political instrument for individual autonomy.",
    society:"A subculture sets out to build money beyond the reach of banks and states." },
  causes:["chaumecash","pgp"], effects:["satoshiwhitepaper"] },

{ id:"satoshiwhitepaper", year:2008, date:"October 31, 2008", era:6, cat:["crypto","internet","computing"],
  title:"Satoshi Nakamoto Publishes the Whitepaper",
  wiki:"Bitcoin", gallery:["Satoshi Nakamoto","Bitcoin network"],
  summary:"At the height of the 2008 financial crisis, a person or group writing as Satoshi Nakamoto posts a nine-page paper, 'Bitcoin: A Peer-to-Peer Electronic Cash System,' to a cryptography mailing list — proposing a currency secured by proof-of-work and a public chain of blocks, with no bank, government, or trusted intermediary anywhere in it.",
  importance:"The whitepaper solved the problem that had defeated DigiCash and every predecessor: how a network of strangers could agree on who owns what, and prevent the same coin being spent twice, without any central authority to keep the books. Nakamoto's answer chained proof-of-work blocks into a single history so expensive to rewrite that honest participants would always outpace an attacker. Published as governments bailed out the banks, it read as both a technical proposal and a political argument — that trust in institutions could be replaced by trust in mathematics.",
  impact:{
    crypto:"A peer-to-peer currency with no central authority is specified for the first time.",
    computing:"Proof-of-work consensus solves double-spending without a trusted intermediary.",
    society:"Released amid the bailouts, it frames trustless money as a rebuke to banking." },
  causes:["digicash","financialcrisis","chaumecash"], effects:["bitcoin"] },

{ id:"bitcoinpizza", year:2010, date:"May 22, 2010", era:6, cat:["crypto","internet"],
  title:"Bitcoin Pizza Day",
  wiki:"History of bitcoin", gallery:["Bitcoin","Laszlo Hanyecz"],
  summary:"A programmer pays 10,000 bitcoin for two pizzas — the first documented purchase of a real-world good with the currency. At later peaks those coins would be worth well over half a billion dollars, making the meal a permanent monument to bitcoin's volatility.",
  importance:"The pizza transaction marked the moment bitcoin crossed from a cryptographic experiment into a thing that could buy lunch, proving the currency could actually function as money between two ordinary people. It also became crypto culture's founding parable of volatility and hindsight — a snack that, valued at the asset's heights, cost a fortune — a story retold every year to capture how wildly the promise of digital money would swing between trivial and immense. It is the human-scale beginning of the speculative economy that followed.",
  impact:{
    crypto:"Bitcoin makes its first purchase of a real-world good, becoming spendable money.",
    society:"A two-pizza meal becomes the enduring emblem of crypto's volatility.",
    internet:"Value moves directly between two people online, with no payment processor." },
  causes:["bitcoin"], effects:["silkroad"] },

{ id:"silkroad", year:2013, date:"2011–2013", era:7, cat:["crypto","internet","law"],
  title:"Silk Road and the Dark Market",
  wiki:"Silk Road (marketplace)", gallery:["Ross Ulbricht","Dark web","Tor (network)"],
  summary:"Bitcoin finds its first mass non-technical user base on Silk Road, an anonymous Tor-hidden marketplace for drugs and contraband paid for in cryptocurrency. In October 2013 the FBI shuts it down and seizes some 26,000 bitcoin, crashing the price — establishing the pattern of enforcement action arriving as a price shock that would repeat throughout crypto's history.",
  importance:"Silk Road gave bitcoin its first real economy and its first reputational crisis at once: the pseudonymity that the cypherpunks prized made the currency ideal for an online drug bazaar, binding crypto to crime in the public mind for years. The FBI's takedown and coin seizure demonstrated that 'anonymous' and 'untraceable' were not the same — chain analysis could follow the money — and that the state could reach even a hidden market. The arrest of founder Ross Ulbricht and the price crash that followed set the template for the regulatory shocks that would punctuate every later cycle.",
  impact:{
    crypto:"Bitcoin gains its first large user base — and its lasting association with crime.",
    law:"The FBI proves the blockchain is traceable and a hidden market reachable.",
    surveillance:"Pseudonymity is shown to be no shield against chain analysis." },
  causes:["bitcoinpizza","bitcoin"], effects:["mtgox","strategicbitcoinreserve"] },

{ id:"mtgox", year:2014, date:"February 2014", era:7, cat:["crypto","internet","law"],
  title:"Mt. Gox Collapses",
  wiki:"Mt. Gox", gallery:["Bitcoin","Cryptocurrency exchange"],
  summary:"Tokyo-based Mt. Gox, which at its 2013 peak handled roughly 70% of all bitcoin trading worldwide, collapses in February 2014 after losing about 850,000 BTC to a years-long, undetected theft — one of the largest cryptocurrency losses in history, and a blow that froze the funds of hundreds of thousands of users.",
  importance:"Mt. Gox exposed the central irony of early crypto: a currency built to remove trusted intermediaries was, in practice, held for users by a single under-secured exchange that lost their coins. Its implosion established custody — the exchange where people actually keep their crypto — as the ecosystem's recurring point of catastrophic failure, the soft center inside the hard cryptography. 'Not your keys, not your coins' became the lesson, learned and forgotten and relearned through every later exchange collapse up to FTX.",
  impact:{
    crypto:"The dominant exchange loses ~850,000 BTC, freezing hundreds of thousands of users.",
    law:"Custodial exchanges are revealed as the unregulated weak point of the system.",
    society:"'Not your keys, not your coins' enters crypto as hard-won folk wisdom." },
  causes:["silkroad","bitcoin"], effects:["ftxcollapse"] },

{ id:"ethereum", year:2015, date:"July 2015", era:7, cat:["crypto","internet","computing"],
  title:"Ethereum and the Smart Contract",
  wiki:"Ethereum", gallery:["Vitalik Buterin","Smart contract","Decentralized finance"],
  summary:"Ethereum launches a programmable blockchain — not just a ledger but a platform, where developers deploy 'smart contracts,' self-executing code that runs on the network itself. It enables decentralized applications and, in time, the whole edifice of decentralized finance (DeFi): lending, trading, and derivatives built entirely from code.",
  importance:"Where bitcoin was a single application — money — Ethereum generalized the blockchain into a world computer that could run arbitrary programs, turning the chain into a foundation others could build on. Smart contracts let strangers transact under rules enforced by code rather than by courts or banks, spawning DeFi, the token economy, and eventually NFTs. It was the leap from a decentralized currency to a decentralized platform, and it made the blockchain a place where software, not just value, could live beyond any single owner's control.",
  impact:{
    crypto:"A programmable blockchain turns the ledger into a platform for applications.",
    computing:"Smart contracts execute agreements as code, without courts or intermediaries.",
    society:"Decentralized finance reconstructs lending and trading out of open software." },
  causes:["bitcoin"], effects:["thedao","cryptopunks","terraluna"] },

{ id:"thedao", year:2016, date:"June 2016", era:7, cat:["crypto","internet","law"],
  title:"The DAO Hack — 'Code Is Law' Meets Reality",
  wiki:"The DAO", gallery:["Ethereum","Ethereum Classic","Decentralized autonomous organization"],
  summary:"The DAO, an investor-directed venture fund run entirely by smart contracts, raises about $150 million in Ether — one of the largest crowdfunding events ever — before an attacker exploits a flaw in its code and drains millions. The Ethereum community then does what the blockchain was supposedly designed to forbid: it rewinds history via a hard fork, splitting the chain into Ethereum and Ethereum Classic.",
  importance:"The DAO forced the movement's defining principle to a crisis: if 'code is law,' then the attacker who merely followed the contract's logic had taken the funds legitimately, and the chain's whole point was that no one could undo it. By voting to fork and reverse the theft, most of the community chose human judgment over immutability — and the minority who refused kept the original chain as Ethereum Classic, a living monument to the opposite belief. The split is crypto's foundational schism over whether a blockchain's rules are inviolable or merely a starting point for human governance.",
  impact:{
    crypto:"A smart-contract exploit drains a $150M fund, forcing a chain-rewinding fork.",
    law:"'Code is law' collides with the human impulse to reverse a theft.",
    society:"The chain splits over whether immutability is a principle or a feature." },
  causes:["ethereum"], effects:["icomania"] },

{ id:"cryptopunks", year:2017, date:"2017", era:7, cat:["crypto","internet","computing"],
  title:"The First NFTs",
  wiki:"Non-fungible token", gallery:["CryptoPunks","CryptoKitties","Dapper Labs"],
  summary:"In June 2017 two developers release CryptoPunks — 10,000 pixel-art characters on Ethereum, given away free — and in December Dapper Labs launches CryptoKitties, a game for breeding and trading unique virtual cats that congests the entire Ethereum network. The term 'non-fungible token' is coined the same year for these one-of-a-kind, blockchain-tracked digital objects.",
  importance:"NFTs extended the blockchain from interchangeable money to unique property: a token that certifies ownership of a specific digital thing, provably scarce in a medium defined by infinite copying. CryptoKitties' viral congestion of Ethereum was the first sign that mainstream play could overwhelm the network, and the free CryptoPunks would, within a few years, sell for millions each. The idea that authenticity and ownership could be minted on-chain set up both the speculative art boom to come and the long argument over whether digital scarcity is meaningful or manufactured.",
  impact:{
    crypto:"Tokens move from fungible money to unique, ownable digital objects.",
    computing:"A breeding game congests Ethereum, exposing the limits of on-chain throughput.",
    society:"Provable digital scarcity is invented in a medium built for infinite copies." },
  causes:["ethereum"], effects:["beeple"] },

{ id:"icomania", year:2018, date:"2017–2018", era:7, cat:["crypto","internet","law"],
  title:"ICO Mania and the First Crypto Winter",
  wiki:"Initial coin offering", gallery:["Ethereum","Securities regulation in the United States"],
  summary:"The Initial Coin Offering boom raises billions for projects that have a whitepaper and a token but often no product, as anyone can mint and sell a coin on Ethereum. Regulators scramble to decide whether these tokens are unregistered securities; when the bubble bursts in early 2018, the total crypto market loses over 80% of its value — the first 'crypto winter.'",
  importance:"The ICO frenzy was the token economy's first speculative mania, a gold rush in which the act of issuing money — once the jealously guarded province of states and banks — became something any team could do over a weekend. It collided immediately with securities law: U.S. regulators began treating many tokens as investment contracts requiring registration, opening a definitional fight over what a crypto asset legally is that would run for years. The ensuing crash, an 80%-plus drawdown, established the boom-and-bust cycle — euphoria, regulatory reckoning, winter — that crypto would repeat at ever-larger scale.",
  impact:{
    crypto:"Issuing a currency becomes something any team can do, fueling a speculative mania.",
    law:"Regulators begin treating tokens as unregistered securities, a fight that endures.",
    society:"An 80% crash establishes the boom-bust 'crypto winter' cycle." },
  causes:["thedao","dotcom"], effects:["beeple","geniusact"] },

{ id:"beeple", year:2021, date:"March 11, 2021", era:7, cat:["crypto","internet","social"],
  title:"Beeple and the NFT Supercycle",
  wiki:"Beeple", gallery:["Everydays: the First 5000 Days","Christie's","Bored Ape Yacht Club"],
  summary:"Beeple's 'Everydays: The First 5000 Days' sells through Christie's for $69.3 million, making it one of the most expensive works by a living artist at auction and pulling NFTs into mainstream conversation worldwide. NFT trading volume peaks above $25 billion in 2021; by 2025 flagship collections like Bored Ape Yacht Club have lost over 99% of their peak value.",
  importance:"The Christie's sale was the moment digital art's blockchain experiment became global news, drawing artists, celebrities, and speculators into a market that minted overnight fortunes on pixelated apes and generative art. The boom compressed into roughly four years a bubble-and-collapse cycle that traditional art markets take decades to run, then deflated almost as fast, with marquee collections shedding nearly all their value. It stands as the purest case study of the speculative mania the token economy could generate — and of how quickly manufactured scarcity could lose the belief that gave it worth.",
  impact:{
    crypto:"A $69M auction makes NFTs global news and inflates a four-year art bubble.",
    social:"Celebrities and influencers turn digital collectibles into a status economy.",
    society:"Flagship collections lose 99% of their value, compressing a decades-long bubble." },
  causes:["cryptopunks","icomania"], effects:["terraluna"] },

{ id:"terraluna", year:2022, date:"May 2022", era:7, cat:["crypto","internet","law"],
  title:"Terra-Luna Collapses",
  wiki:"Terra (blockchain)", gallery:["Stablecoin","Do Kwon"],
  summary:"The algorithmic stablecoin TerraUSD and its paired token Luna enter a death spiral and collapse within days, wiping out roughly $40 billion in market value. The 'stablecoin' that was supposed to hold a steady $1 by code alone unravels as confidence evaporates, triggering a contagion across crypto lenders that will reach FTX six months later.",
  importance:"Terra's implosion demonstrated that 'stablecoin' names a design ambition, not a guarantee: a coin kept at a dollar not by reserves but by an arbitrage loop with a volatile sister token had no floor once belief cracked, and it fell to near zero in days. The $40 billion evaporation and the cascade of failures it set off across over-leveraged crypto lenders exposed how interconnected and fragile the edifice had become. It drew the crucial line the law would later codify — between a stablecoin backed by real, redeemable reserves and one backed only by the confidence of the market.",
  impact:{
    crypto:"A $40B 'stablecoin' proves stability was a design ambition, not a guarantee.",
    law:"The collapse forces the distinction between reserve-backed and algorithmic coins.",
    society:"Contagion across crypto lenders reveals how interlinked and fragile the system is." },
  causes:["ethereum","beeple"], effects:["ftxcollapse","geniusact"] },

{ id:"ftxcollapse", year:2022, date:"November 11, 2022", era:7, cat:["crypto","internet","law"],
  title:"FTX Collapses — The Trust Problem",
  wiki:"Bankruptcy of FTX", gallery:["Sam Bankman-Fried","Alameda Research"],
  summary:"The exchange FTX files for bankruptcy on November 11, 2022, after it emerges that customer funds had been diverted to Alameda Research, a trading firm secretly controlled by FTX founder Sam Bankman-Fried. Bankman-Fried is convicted on seven counts of fraud and conspiracy in November 2023 and sentenced to 25 years in federal prison, and the collapse sharply accelerates regulatory urgency on both sides of the Atlantic.",
  importance:"FTX was the Mt. Gox lesson at vastly greater scale and with intent: not a hack but a fraud, in which a celebrated founder used customer deposits as a private trading slush fund while presenting his exchange as the industry's responsible adult. Its overnight implosion vaporized billions and shattered the claim that crypto's new institutions had matured beyond the chaos of its early years. Bankman-Fried's conviction and 25-year sentence made it the field's defining criminal case, and the wreckage became the central exhibit in the argument that digital-asset markets needed real regulation.",
  impact:{
    crypto:"A flagship exchange is revealed as a fraud, vaporizing billions in customer funds.",
    law:"Its founder's conviction becomes crypto's defining criminal case.",
    power:"The collapse turns regulatory pressure on digital assets from rhetoric to urgency." },
  causes:["mtgox","terraluna"], effects:["bitcoinetf","geniusact"] },

{ id:"bitcoinetf", year:2024, date:"January 2024", era:7, cat:["crypto","internet","law"],
  title:"Spot Bitcoin ETFs Approved",
  wiki:"Bitcoin ETF", gallery:["U.S. Securities and Exchange Commission","Exchange-traded fund"],
  summary:"After years of rejections, the SEC approves the first U.S. spot bitcoin exchange-traded funds, letting ordinary investors gain exposure to bitcoin through a regulated financial product without holding the coins themselves — folding the asset that began on the dark web into the machinery of mainstream Wall Street.",
  importance:"The ETF approval marked crypto's absorption into traditional finance: the same regulator that had spent a decade refusing these products now blessed a wrapper that put bitcoin inside ordinary brokerage and retirement accounts. It legitimized bitcoin as an investable asset class and routed enormous institutional money into it, even as it severed the coin from the anti-institutional ideals of its origins — bitcoin now held for investors by the very intermediaries it was designed to remove. The dark-web currency had become a line item on Wall Street.",
  impact:{
    crypto:"Bitcoin enters regulated brokerage and retirement accounts as an asset class.",
    law:"A decade of SEC refusals reverses, legitimizing bitcoin within traditional finance.",
    power:"Institutional intermediaries now custody the currency built to remove them." },
  causes:["ftxcollapse"], effects:["strategicbitcoinreserve","geniusact"] },

{ id:"strategicbitcoinreserve", year:2025, date:"March 6, 2025", era:7, cat:["crypto","internet","law"],
  title:"The Strategic Bitcoin Reserve",
  wiki:"Strategic Bitcoin Reserve", gallery:["Executive order","Donald Trump"],
  summary:"President Trump signs an executive order establishing a Strategic Bitcoin Reserve and a United States Digital Asset Stockpile — the first time a national government formally designates bitcoin a reserve asset. In roughly fifteen years the currency completes its journey from anonymous dark-web payment to official holding of the state it was built to circumvent.",
  importance:"The reserve order is the symbolic endpoint of bitcoin's improbable arc: a currency designed by cypherpunks to escape government control, adopted by the U.S. government as a strategic asset alongside gold. Built initially from coins seized in criminal cases, the reserve folded the technology fully into the apparatus of state power, and signaled an administration determined to make the country a crypto center. It is the atlas's recurring irony in its sharpest form — the anti-state instrument absorbed, fifteen years on, as an instrument of the state.",
  impact:{
    crypto:"A national government designates bitcoin a reserve asset for the first time.",
    power:"The currency built to bypass the state becomes a holding of the state.",
    law:"Seized criminal-case coins are converted into a strategic national stockpile." },
  causes:["silkroad","bitcoinetf"], effects:["geniusact"] },

{ id:"geniusact", year:2025, date:"July 18, 2025", era:7, cat:["crypto","law","internet"],
  title:"The GENIUS Act — First Federal Crypto Law",
  wiki:"GENIUS Act", gallery:["Stablecoin","United States Congress"],
  summary:"The GENIUS Act is signed into law on July 18, 2025, creating the first federal regulatory framework for payment stablecoins in the United States. It requires issuers to hold full 1:1 reserves, mandates federal oversight, and explicitly excludes volatile assets like bitcoin — drawing the first statutory line between money and speculation in the digital-asset world.",
  importance:"After a decade in which crypto law was written by enforcement actions and court rulings, the GENIUS Act was the first comprehensive statute Congress enacted for the field, and it chose its target deliberately: the stablecoin, the part of crypto that aspires to be money rather than a bet. By demanding real, redeemable reserves and federal supervision, it answered the Terra-Luna catastrophe directly, and by excluding bitcoin it formalized the distinction the whole history had been groping toward — between a digital dollar that must be backed and a speculative asset that need not be. It is the reckoning phase of the oldest pattern in this atlas, arriving as ever after the invention and the crises that taught the lesson.",
  impact:{
    law:"The first U.S. federal crypto statute regulates payment stablecoins directly.",
    crypto:"Full 1:1 reserves and federal oversight are required; bitcoin is excluded by design.",
    society:"A statutory line is finally drawn between digital money and speculation." },
  causes:["terraluna","ftxcollapse","icomania","strategicbitcoinreserve"], effects:[] },

{ id:"asicmining", year:2013, date:"2013", era:7, cat:["crypto","computing","internet"],
  title:"The Industrialization of Mining",
  wiki:"Application-specific integrated circuit", gallery:["Bitcoin network","Bitcoin mining","Data center"],
  summary:"Purpose-built ASIC chips arrive for Bitcoin mining, ending the era when ordinary people could mine on home laptops and graphics cards. Mining becomes a capital-intensive industrial race, concentrating the network's security in massive, electricity-hungry data centers — and quietly converting a decentralized ideal into a heavy industry.",
  importance:"Bitcoin's design assumed many small miners, but the leap from general-purpose CPUs and GPUs to application-specific chips made mining thousands of times more efficient and turned it into a contest of capital, cheap power, and scale. Within a few years the work of securing the network had migrated from bedrooms to warehouse-sized facilities run by a handful of firms, the first great centralizing pressure on a system built to resist centralization. That industrial concentration — visible, immobile, power-hungry — is precisely what later made mining a target governments could ban, tax, or expel, setting up the geopolitical shocks of the 2020s.",
  impact:{
    crypto:"Specialized chips end home mining and turn network security into heavy industry.",
    labor:"Power shifts from decentralized individuals to capital-intensive data centers.",
    computing:"An application-specific chip arms race concentrates mining in a few firms." },
  causes:["bitcoin"], effects:["chinaminingban","defisummer"] },

{ id:"defisummer", year:2020, date:"June 2020", era:7, cat:["crypto","computing","internet"],
  title:"DeFi Summer and the Automated Market",
  wiki:"Decentralized finance", gallery:["Compound (company)","Uniswap","Automated market maker"],
  summary:"Compound's launch of 'liquidity mining' rewards — paying users in its COMP token to lend and borrow — ignites 'DeFi Summer,' as automated market makers like Uniswap prove that software alone can match buyers and sellers. Smart contracts graduate from theory to functioning financial infrastructure that needs no broker, bank, or clearinghouse.",
  importance:"DeFi Summer was the moment Ethereum's smart contracts became working financial plumbing: automated market makers replaced the order book and the human broker with a formula and a pool of capital, letting anyone trade, lend, or borrow through code that never closes and asks no permission. It is the atlas's purest case of software automating institutional employment — the clearinghouse, the market maker, the loan officer all dissolved into open programs. The same composability that made it explosively generative also made it fragile and exploit-prone, but it proved that core functions of finance could run with no firm behind them at all.",
  impact:{
    crypto:"Automated market makers replace the broker and order book with open code.",
    labor:"Core financial jobs — market maker, clearinghouse, loan officer — dissolve into software.",
    computing:"Smart contracts graduate from sandbox to functioning financial infrastructure." },
  causes:["ethereum","thedao"], effects:["terraluna","tornadocash"] },

{ id:"chinaminingban", year:2021, date:"May 2021", era:7, cat:["crypto","law","internet"],
  title:"China Bans Mining — The Great Migration",
  wiki:"Bitcoin in China", gallery:["Bitcoin mining","Digital yuan"],
  summary:"China's State Council issues a sweeping crackdown on Bitcoin mining and trading, erasing more than half the network's global computing power almost overnight. Driven by capital controls and a desire to clear the runway for its own state digital currency, the ban forces a historic migration of industrial mining hardware to the United States, Kazakhstan, and Russia.",
  importance:"The Chinese ban was the first demonstration that a single state could reshape the physical geography of a 'borderless' network, exiling half its infrastructure with a stroke and proving that the heavy, immobile industry ASICs had created was vulnerable to sovereign power. The hardware did not vanish; it moved, redistributing the network's center of gravity toward North America and Central Asia and incidentally proving the system's resilience by surviving the shock. It also revealed the deeper motive — a state clearing private crypto out of the way of its own programmable, monitored digital currency.",
  impact:{
    crypto:"Over half the network's computing power is exiled and migrates overnight.",
    power:"A single state reshapes the physical geography of a 'borderless' network.",
    law:"China clears private mining to make way for its state digital currency." },
  causes:["asicmining"], effects:["cbdc","strategicbitcoinreserve"] },

{ id:"elsalvadorbtc", year:2021, date:"September 7, 2021", era:7, cat:["crypto","law","internet"],
  title:"El Salvador Makes Bitcoin Legal Tender",
  wiki:"Bitcoin in El Salvador", gallery:["Nayib Bukele","Chivo (wallet)","Legal tender"],
  summary:"Under President Nayib Bukele, El Salvador becomes the first sovereign nation to make Bitcoin legal tender alongside the U.S. dollar, requiring businesses to accept it and rolling out the state-backed 'Chivo' wallet. It is an attempt to capture remittance flows and assert financial sovereignty — over the explicit warnings of the IMF.",
  importance:"El Salvador turned the cypherpunk dream inside out: not citizens using Bitcoin to escape the state, but a state adopting Bitcoin to escape the global banking architecture, betting that a deflationary internet currency could cut remittance costs and free it from dollar dependence. The experiment met hard economic friction — thin adoption, price volatility on the national balance sheet, and pressure from lenders — and was eventually scaled back under an IMF agreement. It stands as the first real-world test of a nation staking its monetary policy on crypto, and a cautionary tale about the gap between ideological ambition and macroeconomic reality.",
  impact:{
    crypto:"A sovereign nation adopts Bitcoin as legal tender for the first time.",
    power:"A developing state bypasses the banking order to claim financial sovereignty.",
    law:"IMF pressure forces structural retreat from the mandate over time." },
  causes:["bitcoin","chinaminingban"], effects:["strategicbitcoinreserve"] },

{ id:"tornadocash", year:2022, date:"August 2022", era:7, cat:["crypto","encryption","law","internet"],
  title:"Tornado Cash — Sanctioning Code",
  wiki:"Tornado Cash", gallery:["Office of Foreign Assets Control","Smart contract","Privacy"],
  summary:"The U.S. Treasury's Office of Foreign Assets Control sanctions Tornado Cash, a decentralized, privacy-preserving 'mixer' that obscures the trail of funds on Ethereum. For the first time, the government sanctions not a nation, person, or company but a piece of self-executing, open-source software — triggering a constitutional fight over whether publishing immutable code is protected speech.",
  importance:"The Tornado Cash sanctions marked a genuine paradigm shift in law: an autonomous smart contract, owned and controllable by no one, was added to the same list as foreign regimes and criminals, criminalizing interaction with software itself. It revived, at the sharpest pitch, the crypto wars' old question — whether source code is speech the First Amendment protects — now applied to immutable programs that cannot be taken down. The arrest of a developer and the legal challenges that followed made it the defining test of where the state's power ends and the freedom to publish code begins.",
  impact:{
    law:"For the first time the state sanctions a piece of autonomous open-source code.",
    encryption:"A privacy tool is criminalized, reviving the code-as-speech battle.",
    power:"The boundary between publishing software and aiding crime is put on trial." },
  causes:["defisummer","mtgox"], effects:["micaregulation"] },

{ id:"micaregulation", year:2024, date:"December 30, 2024", era:7, cat:["crypto","law","internet"],
  title:"Europe's MiCA Takes Effect",
  wiki:"Markets in Crypto-Assets", gallery:["European Union","Stablecoin"],
  summary:"The EU's Markets in Crypto-Assets regulation becomes fully applicable across all member states, the world's first unified, multi-nation licensing framework for digital assets. Where the U.S. regulated for years by enforcement and piecemeal court battles, Europe writes a comprehensive playbook — consumer protections, strict stablecoin reserve mandates, and environmental disclosures.",
  importance:"MiCA embodied the Brussels approach to a frontier technology: rather than litigate harms after the fact, legislate the market's shape in advance with a single statutory framework binding twenty-seven nations. Its rigid stablecoin reserve rules, licensing requirements, and even environmental-disclosure mandates demonstrated a philosophy of clear, preemptive containment opposite to America's reactive enforcement — the regulated-utility instinct applied to crypto. As the first comprehensive cross-border regime, it became the global reference point against which every other jurisdiction's lighter or later rules would be measured, the Brussels effect arriving once more in a new domain.",
  impact:{
    law:"The first unified, multi-nation licensing framework for digital assets takes effect.",
    crypto:"Stablecoin reserves, licensing, and even energy disclosure become mandatory.",
    power:"Europe's preemptive statute contrasts with America's regulation-by-enforcement." },
  causes:["tornadocash","terraluna"], effects:["geniusact"] },

{ id:"cbdc", year:2025, date:"2021–2025", era:7, cat:["crypto","cctv","internet"],
  title:"The Rise of Central Bank Digital Currencies",
  wiki:"Central bank digital currency", gallery:["Digital yuan","People's Bank of China","Programmable money"],
  summary:"Led by China's mass domestic trials of the e-CNY (digital yuan) and followed by over a hundred nations exploring sovereign digital currencies, states build their own answer to cryptocurrency — co-opting the underlying ledger technology to issue programmable, fully state-monitored money.",
  importance:"CBDCs are the empire striking back: instead of letting citizens transact on private, pseudonymous networks in the Chaum or Nakamoto lineage, governments adopt the digital-ledger idea and strip out the anonymity, building hyper-efficient currencies whose every movement the state can see and whose rules it can program. It is the cypherpunk dream inverted — technology conceived for individual liberty repurposed into a near-flawless instrument of domestic financial surveillance and control, money that can be expiring, geofenced, or conditional by design. The same architecture that promised escape from the state becomes, in the state's hands, the most complete record of private economic life ever built.",
  impact:{
    surveillance:"State-issued digital money makes every transaction visible to the issuer.",
    crypto:"Governments co-opt the ledger and strip out the anonymity that defined crypto.",
    power:"The cypherpunk tool of liberation is inverted into an instrument of control." },
  causes:["chinaminingban","chaumecash","bitcoin"], effects:["geniusact"] }

);
