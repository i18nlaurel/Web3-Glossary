import React from 'react';
import { Link } from './Link';

const linkedDefinitions = {
  "0x API": {
    definition: <>The <Link to="0x API">0x API </Link> is the <Link to="liquidity">liquidity </Link> and data endpoint for DeFi. It lets you access aggregated <Link to="liquidity">liquidity </Link> from tens of <Link to="on-chain">on-chain </Link> and <Link to="off-chain">off-chain </Link> decentralized <Link to="exchange">exchange </Link> networks, across multiple blockchains. It comes with many parameters to customize your requests for your application and your users: <Link to="API">API </Link> References</>,
  },
  "1inch": {
    definition: <>Decentralized <Link to="exchange">exchange </Link> <Link to="aggregator">aggregator </Link> that aims to provide traders with the best price and lowest fees on their transactions. <Link to="1inch">1inch </Link></>,
  },
  "3Box Labs": {
    definition: <>The inventors and core developers of Ceramic, the first decentralized <Link to="network">network </Link> for composable data. Ceramic makes it possible for developers to build data-rich Web3 applications without needing a traditional database, and in the process, unlocks data composability and portability across every application within the Web3 <Link to="ecosystem">ecosystem </Link>.</>,
  },
  "51% Attack": {
    definition: <>If more than half the computer power or <Link to="mining">mining </Link> hash rate on a <Link to="network">network </Link> is run by a single person or a single group of people, then a <Link to="51% attack">51% attack </Link> is in operation. This means that this entity has full control of the <Link to="network">network </Link> and can negatively affect a <Link to="cryptocurrency">cryptocurrency </Link> by taking over <Link to="mining">mining </Link> operations, stopping or changing transactions, and double-spending coins.</>,
  },
  "Aave": {
    definition: <><Link to="Aave">Aave </Link> is an open source <Link to="protocol">protocol </Link> to create non-custodial <Link to="liquidity">liquidity </Link> markets to earn interest on supplying and borrowing assets with a variable or stable interest rate.</>,
  },
  "Account": {
    definition: <>Accounts are records or statements of financial expenditure and receipts that relate to a particular period or purpose. In the world of crypto, this is referred to as a <Link to="cryptocurrency">cryptocurrency </Link> <Link to="account">account </Link>. It gives you certain benefits, and it is a requirement in order to use just about any <Link to="cryptocurrency">cryptocurrency </Link> <Link to="exchange">exchange </Link>. A <Link to="cryptocurrency">cryptocurrency </Link> <Link to="account">account </Link> gives you access to hot wallets, which allow you to quickly buy, sell and trade cryptocurrencies, and it gives you an identity or a way through which you can hold onto your public keys when it comes to the aforementioned process. <Link to="Account">Account </Link></>,
  },
  "ACH transfer": {
    definition: <>ACH (Automated Clearing House) bank transfer is an electronic payment method that allows money to be transferred between bank accounts in the United States. It is a system that processes transactions in batches and is commonly used for direct <Link to="deposit">deposit </Link> of paychecks, bill payments, and online money transfers.</>,
  },
  "address; public address; account address": {
    definition: <>Used to send and receive transactions on a <Link to="blockchain">blockchain </Link> <Link to="network">network </Link>, and to identify different users; also referred to as a &#x27;<Link to="public key">public key </Link>&#x27;. An address is an alphanumeric character string, which can also be represented as a scannable <Link to="QR code">QR code </Link>. In <Link to="Ethereum">Ethereum </Link>, the address begins with 0x. For example: 0x06A85356DCb5b307096726FB86A78c59D38e08ee</>,
  },
  "Advanced": {
    definition: <>In the context of &#x27;<Link to="Advanced">Advanced </Link> <Link to="gas">gas </Link> controls&#x27;: it is an optional feature in the <Link to="MetaMask">MetaMask </Link> <Link to="wallet">wallet </Link>, that gives you more control over the <Link to="gas">gas </Link> you pay in <Link to="MetaMask">MetaMask </Link>. Using <Link to="advanced">advanced </Link> <Link to="gas">gas </Link> controls</>,
  },
  "aggregator": {
    definition: <>An <Link to="aggregator">aggregator </Link> is a platform that aggregates <Link to="liquidity">liquidity </Link> from multiple decentralized exchanges (DEXs) or other sources of <Link to="liquidity">liquidity </Link> to provide users with the best prices and the most efficient execution for their trades.</>,
  },
  "Aggressive": {
    definition: <>In the context of &#x27;<Link to="gas">gas </Link> fees&#x27;, <Link to="Aggressive">Aggressive </Link> is a category that enables you to be more forceful with your <Link to="transaction">transaction </Link>, and have it completed as soon as possible. There are three categories available in <Link to="MetaMask">MetaMask </Link>: <Link to="Low">Low </Link>, Market, <Link to="Aggressive">Aggressive </Link> Using <Link to="advanced">advanced </Link> <Link to="gas">gas </Link> controls</>,
  },
  "Agoric": {
    definition: <><Link to="Agoric">Agoric </Link> is a Proof-of-Stake <Link to="blockchain">blockchain </Link> that functions as a <Link to="smart contract">smart contract </Link> platform, enabling developers to deploy decentralized applications. The platform is built on a variant of the JavaScript programming language, which is a widely used language for web development.</>,
  },
  "air-gapping": {
    definition: <>A method for securing computers in which the device does not connect to the internet or any other open networks. Many hardware wallets use <Link to="air-gapping">air-gapping </Link> as a security mechanism to keep users&#x27; private keys or <Link to="Secret Recovery Phrase">Secret Recovery Phrase </Link> offline, and thus safer from any kind of attack.</>,
  },
  "airdrop": {
    definition: <>A <Link to="token">token </Link> distribution method used to send <Link to="cryptocurrency">cryptocurrency </Link> or tokens to <Link to="wallet">wallet </Link> addresses. Sometimes airdrops are used for marketing purposes in <Link to="exchange">exchange </Link> for simple tasks like reshares, referrals, or app downloads.</>,
  },
  "airdrop (noun)": {
    definition: <>A <Link to="token">token </Link> distribution method used to send <Link to="cryptocurrency">cryptocurrency </Link> or tokens to <Link to="wallet">wallet </Link> addresses. Sometimes airdrops are used for marketing purposes in <Link to="exchange">exchange </Link> for simple tasks like reshares, referrals, or app downloads.</>,
  },
  "AirGap Vault": {
    definition: <><Link to="AirGap Vault">AirGap Vault </Link> is a <Link to="crypto wallet">crypto wallet </Link> application that provides secure storage for digital assets. The <Link to="wallet">wallet </Link> is designed to be used in conjunction with AirGap&#x27;s other <Link to="wallet">wallet </Link> app, AirGap <Link to="Wallet">Wallet </Link>, which is used for sending and receiving transactions.</>,
  },
  "AirSwap": {
    definition: <><Link to="AirSwap">AirSwap </Link> is a decentralized <Link to="exchange">exchange </Link> (<Link to="DEX">DEX </Link>) platform for trading digital assets, operating on <Link to="Ethereum">Ethereum </Link> and Layer-2s like <Link to="Polygon">Polygon </Link>, <Link to="Arbitrum">Arbitrum </Link>.</>,
  },
  "algorithm": {
    definition: <>An <Link to="algorithm">algorithm </Link> is a finite sequence of rigorous instructions, typically used to solve a class of specific problems or to perform a computation.</>,
  },
  "altcoin": {
    definition: <>As Bitcoin was the first <Link to="cryptocurrency">cryptocurrency </Link>, the term &#x27;<Link to="altcoin">altcoin </Link>&#x27; was created to refer to &#x27;any <Link to="cryptocurrency">cryptocurrency </Link> other than Bitcoin&#x27;. The term is less used in <Link to="Ethereum">Ethereum </Link> or <Link to="smart contract">smart contract </Link>-enabled <Link to="blockchain">blockchain </Link> communities. Many altcoins are forks of Bitcoin with minor changes (e.g., Litecoin). See also &#x27;<Link to="fork">fork </Link>&#x27;.</>,
  },
  "AML (Anti-Money Laundering)": {
    definition: <>A set of international laws enacted to diminish the potential for criminal organizations or individuals to launder money. These rules and laws are applied to cryptocurrencies with varying effects in different jurisdictions.</>,
  },
  "API": {
    definition: <>Application Programming Interface. A software intermediary that allows two separate applications to communicate with one another. APIs define methods of communication between various components.</>,
  },
  "API (Application Programming Interface)": {
    definition: <>A predefined set of requests that one program can make to another in order to transfer information between them. When you hear someone saying that an application is &#x27;getting information from&#x27; another source, it&#x27;s often doing so through an <Link to="API">API </Link>.</>,
  },
  "AppChain": {
    definition: <>A <Link to="blockchain">blockchain </Link> <Link to="network">network </Link> custom-made and optimized for a specific application&#x27;s needs. An <Link to="appchain">appchain </Link> is generally not a full-blown <Link to="blockchain">blockchain </Link>, but offers an optimized execution environment for the application, while still relying on an underlying <Link to="blockchain">blockchain </Link> for <Link to="consensus">consensus </Link>. See also: &#x27;<Link to="blockchain">blockchain </Link> trilemma&#x27;, &#x27;<Link to="modular blockchain">modular blockchain </Link>&#x27;, &#x27;<Link to="Layer 2">Layer 2 </Link>&#x27;, &#x27;Layer 3&#x27;.</>,
  },
  "Apple Pay": {
    definition: <><Link to="Apple Pay">Apple Pay </Link> is a mobile payment service by Apple Inc. that allows users to make payments in person, in iOS apps, and on the web.</>,
  },
  "Arbitrum": {
    definition: <><Link to="Arbitrum">Arbitrum </Link> is a <Link to="layer 2">layer 2 </Link> <Link to="scaling">scaling </Link> solution for <Link to="Ethereum">Ethereum </Link>, designed to improve the <Link to="scalability">scalability </Link> and reduce the cost of transactions on the <Link to="Ethereum">Ethereum </Link> <Link to="network">network </Link>. It is an implementation of the <Link to="Optimistic Rollup">Optimistic Rollup </Link> technology, which is a type of <Link to="scaling">scaling </Link> solution that uses <Link to="off-chain">off-chain </Link> computation to reduce the load on the main <Link to="Ethereum">Ethereum </Link> <Link to="network">network </Link>.</>,
  },
  "ASIC (Application Specific Integrated Circuit)": {
    definition: <>ASICs are silicon chips designed to do a specific task. In ASICs used for <Link to="mining">mining </Link> cryptocurrencies, the ASIC will perform a calculation to find values that provide a desired solution when placed into a hashing <Link to="algorithm">algorithm </Link>.</>,
  },
  "asset provenance": {
    definition: <><Link to="Asset provenance">Asset provenance </Link> refers to the origin, history, and ownership of a particular <Link to="digital asset">digital asset </Link> on the <Link to="blockchain">blockchain </Link>. In the crypto context, <Link to="asset provenance">asset provenance </Link> refers to the ability to trace the ownership and transfer of a specific <Link to="cryptocurrency">cryptocurrency </Link> or <Link to="token">token </Link> from its creation or minting to its current holder.</>,
  },
  "attestation": {
    definition: <><Link to="Attestation">Attestation </Link> in crypto refers to the process of verifying the authenticity or validity of a piece of information or a <Link to="transaction">transaction </Link> on a <Link to="blockchain">blockchain </Link> <Link to="network">network </Link>. <Link to="Attestation">Attestation </Link> is an important aspect of <Link to="blockchain">blockchain </Link> technology, as it helps to ensure the integrity and security of the <Link to="network">network </Link>. In general, <Link to="attestation">attestation </Link> involves a trusted third-party, or attester, verifying the authenticity of a <Link to="transaction">transaction </Link> or piece of information. This can include verifying the identity of users on the <Link to="network">network </Link>, verifying the accuracy of data, or validating the authenticity of a <Link to="digital signature">digital signature </Link>. One example of <Link to="attestation">attestation </Link> in crypto is the use of digital signatures to authenticate transactions on a <Link to="blockchain">blockchain </Link> <Link to="network">network </Link>. Digital signatures use <Link to="public key">public key </Link> <Link to="cryptography">cryptography </Link> to verify the identity of the sender and ensure that the <Link to="transaction">transaction </Link> has not been tampered with. Another example of <Link to="attestation">attestation </Link> in crypto is the use of Proof of Stake (PoS) <Link to="consensus">consensus </Link> mechanisms, which rely on validators to attest to the validity of transactions on the <Link to="network">network </Link>. Validators are responsible for verifying transactions and adding new blocks to the <Link to="blockchain">blockchain </Link>, and they are rewarded with <Link to="cryptocurrency">cryptocurrency </Link> for their efforts. For more info, see <Link to="Attestation">Attestation </Link> in <Link to="Ethereum">Ethereum </Link>.</>,
  },
  "Avalanche": {
    definition: <><Link to="Avalanche">Avalanche </Link> is a decentralized <Link to="blockchain">blockchain </Link> platform designed to provide fast and secure transactions for digital assets and applications. The platform uses a <Link to="consensus">consensus </Link> mechanism known as <Link to="Avalanche">Avalanche </Link> <Link to="consensus">consensus </Link>, which allows for high throughput, <Link to="low">low </Link> <Link to="latency">latency </Link>, and customizable blockchains.</>,
  },
  "Axie Infinity": {
    definition: <><Link to="Axie Infinity">Axie Infinity </Link> is a <Link to="non-fungible token">non-fungible token </Link>-based online video game known for its in-game economy, which uses <Link to="Ethereum">Ethereum </Link>-based cryptocurrencies.</>,
  },
  "Base fee": {
    definition: <>Every block has a reserve price known as the &#x27;<Link to="base fee">base fee </Link>&#x27;. It is the minimum <Link to="gas">gas </Link> fee a user must pay to include a <Link to="transaction">transaction </Link> in the next block.</>,
  },
  "Beacon Chain": {
    definition: <>The <Link to="Beacon Chain">Beacon Chain </Link> was one element built in the infrastructure being built to scale <Link to="Ethereum">Ethereum </Link>. It was the foundation for a transition from a Proof of Work (PoW) <Link to="consensus">consensus </Link> mechanism to Proof of Stake (PoS). For more information, see this guide.</>,
  },
  "Binance": {
    definition: <><Link to="Binance">Binance </Link> is a centralized <Link to="cryptocurrency">cryptocurrency </Link> <Link to="exchange">exchange </Link> which operates in multiple countries, as well as two different blockchains, the <Link to="BNB Chain">BNB Chain </Link> and the BNB Smart Chain.</>,
  },
  "Bitcoin / bitcoin (BTC)": {
    definition: <>Bitcoin is a decentralized digital currency or <Link to="cryptocurrency">cryptocurrency </Link>, which was created in 2009 by an unknown person or group using the name <Link to="Satoshi Nakamoto">Satoshi Nakamoto </Link>. Bitcoin transactions are recorded on a public digital <Link to="ledger">ledger </Link> called the <Link to="blockchain">blockchain </Link>, which is maintained by a <Link to="network">network </Link> of computers worldwide. Bitcoin transactions are made directly between users without the need for intermediaries like banks or financial institutions. Users can send and receive Bitcoins using digital wallets. One of the key features of Bitcoin is its limited supply. There will only ever be 21 million Bitcoins in existence, which helps to prevent inflation and maintain the value of the currency. The plural of bitcoin is just bitcoin; the abbreviation is <Link to="BTC">BTC </Link>, with a space: I have 250 <Link to="BTC">BTC </Link>.</>,
  },
  "block (noun)": {
    definition: <>If we think of a <Link to="blockchain">blockchain </Link> as consisting of a <Link to="ledger">ledger </Link> that is being constantly synced between any number of different nodes (indeed, &#x27;<Link to="distributed ledger">distributed ledger </Link> technology&#x27; is another phrase used to describe it), imagine that after a certain number of transactions have been added to the <Link to="ledger">ledger </Link> and <Link to="consensus">consensus </Link> has been reached among the nodes that the transactions are valid, then they are cryptographically locked into a &#x27;block&#x27; and officially recorded; this &#x27;block&#x27; forms the basis for the next one; in this way, they are all linked together in a chain, hence--<Link to="blockchain">blockchain </Link>.</>,
  },
  "block explorer": {
    definition: <>A <Link to="blockchain">blockchain </Link> explorer is an application, most often a website along with a corresponding <Link to="API">API </Link>, that displays information about <Link to="blockchain">blockchain </Link> activity in a more human-friendly way. While a <Link to="blockchain">blockchain </Link> is designed to keep information forever, and be “readable by anyone”, finding the specific information you’re interested in may require indexing data off the <Link to="blockchain">blockchain </Link>–that is, sorting it according to given categories (sender address, <Link to="token">token </Link> type, etc) into a separate database which can then be queried by the user; this essential function is provided by <Link to="blockchain">blockchain </Link> explorers. A prominent example is <Link to="etherscan">etherscan </Link>, which also offers explorers on a number of other networks.</>,
  },
  "block height": {
    definition: <>The number of blocks connected together in the <Link to="blockchain">blockchain </Link>. For example, Height 0 would be the very first block, which is also called the <Link to="Genesis Block">Genesis Block </Link>.</>,
  },
  "block reward": {
    definition: <>The reward given to a miner or <Link to="validator">validator </Link> after it has successfully hashed a <Link to="transaction">transaction </Link> block. Block rewards can be a mixture of coins and <Link to="transaction">transaction </Link> fees. The composition depends on the policy used by the <Link to="cryptocurrency">cryptocurrency </Link> in question, and whether all of the coins have already been successfully mined. The current <Link to="block reward">block reward </Link> for the Bitcoin <Link to="network">network </Link> is 12.5 bitcoins per block.</>,
  },
  "block time": {
    definition: <>When we talk about &#x27;<Link to="block time">block time </Link>&#x27;, we&#x27;re referring to how long it takes for a block of transactions (see &#x27;block&#x27;) to be confirmed by the <Link to="network">network </Link>, either by miners under PoW or by validators under PoS. See also &#x27;Proof of Work&#x27;, &#x27;Proof of Stake&#x27;.</>,
  },
  "blockchain": {
    definition: <>A digital <Link to="ledger">ledger </Link> comprised of unchangeable, digitally recorded data in packages called blocks. Each block is ‘chained’ to the next block using a cryptographic signature. <Link to="Ethereum">Ethereum </Link> is a <Link to="public blockchain">public blockchain </Link>, open to the world; its digital <Link to="ledger">ledger </Link> is distributed, or synced, between many nodes; these nodes arrive at <Link to="consensus">consensus </Link> regarding whether a <Link to="transaction">transaction </Link> is valid before encrypting it, along with a number of other valid transactions, into a block. For more on <Link to="blockchain">blockchain </Link> technology, see here. See also &#x27;block&#x27;.</>,
  },
  "Blockchain explorer": {
    definition: <>A <Link to="blockchain">blockchain </Link> explorer is an application, most often a website along with a corresponding <Link to="API">API </Link>, that displays information about <Link to="blockchain">blockchain </Link> activity in a more human-friendly way. While a <Link to="blockchain">blockchain </Link> is designed to keep information forever, and be &#x27;readable by anyone&#x27;, finding the specific information you&#x27;re interested in may require indexing data off the <Link to="blockchain">blockchain </Link>--that is, sorting it according to given categories (sender address, <Link to="token">token </Link> type, etc) into a separate database which can then be queried by the user; this essential function is provided by <Link to="blockchain">blockchain </Link> explorers. A prominent example is <Link to="etherscan">etherscan </Link>, which also offers explorers on a number of other networks.</>,
  },
  "blockchain trilemma": {
    definition: <>Tradeoffs facing those building <Link to="public blockchain">public blockchain </Link> networks vis-a-vis three elements: <Link to="decentralization">decentralization </Link>, security, and <Link to="scalability">scalability </Link> (or speed). These three elements are either necessary or desireable in public distributed networks, and often, designing a system that optimizes for one compromises on another.</>,
  },
  "BNB Chain": {
    definition: <>Build N Build (BNB) Chain is a distributed <Link to="blockchain">blockchain </Link> <Link to="network">network </Link> upon which developers and innovators can build decentralized applications (DApps) as part of the move to Web3. <Link to="BNB chain">BNB chain </Link></>,
  },
  "bounty / bug bounty": {
    definition: <>A reward offered for exposing vulnerabilities and issues in computer code.</>,
  },
  "brain wallet": {
    definition: <>A <Link to="blockchain">blockchain </Link> <Link to="account">account </Link> generated from a <Link to="seed phrase">seed phrase </Link> or password or <Link to="passphrase">passphrase </Link> of your choosing. Humans are not capable of generating enough <Link to="entropy">entropy </Link>, or randomness, and therefore the wallets derived from these phrases are insecure; brain wallets can be brute forced by super fast computers. For this reason, <Link to="brain wallet">brain wallet </Link> are insecure and should not be used. See also &#x27;<Link to="Seed phrase">Seed phrase </Link> / <Link to="Secret Recovery Phrase">Secret Recovery Phrase </Link>&#x27;.</>,
  },
  "Brave": {
    definition: <><Link to="Brave">Brave </Link> is a free and open-source web browser developed by <Link to="Brave">Brave </Link> Software, Inc., based on the Chromium web browser. It has a built-in <Link to="crypto wallet">crypto wallet </Link> that allows users to connect to the web3 <Link to="ecosystem">ecosystem </Link>.</>,
  },
  "Bridge": {
    definition: <>A <Link to="bridge">bridge </Link> is a tool built to move assets from one <Link to="network">network </Link> to another. It’s also a verb, used to describe that action: “I bridged my <Link to="ETH">ETH </Link> from <Link to="Ethereum">Ethereum </Link> <Link to="mainnet">mainnet </Link> to <Link to="Arbitrum">Arbitrum </Link>.” Not all bridges are created equal, and you should be informed about what you’re doing before you use one. Field Guide to bridges See also <Link to="MetaMask">MetaMask </Link> <Link to="Bridge">Bridge </Link></>,
  },
  "BTC": {
    definition: <>Abbreviation for Bitcoin</>,
  },
  "BUIDL": {
    definition: <>Ostensibly coined (see what we did there) by <Link to="Gitcoin">Gitcoin </Link>&#x27;s Kevin Owocki. It reflects the <Link to="Ethereum">Ethereum </Link>-focused mindset of not just investing in a <Link to="cryptocurrency">cryptocurrency </Link> as a store of value, but rather investing in it as an <Link to="ecosystem">ecosystem </Link> and a platform for public goods and software; it complements, in this sense, the now-infamous HODL.</>,
  },
  "bytecode": {
    definition: <><Link to="Bytecode">Bytecode </Link> is a &#x27;<Link to="low">low </Link>-level&#x27; computer language, that is, meant to be processed by a computer, rather than a &#x27;high-level&#x27;, more human-readable, language. In <Link to="Ethereum">Ethereum </Link>, higher-level <Link to="Solidity">Solidity </Link> is compiled into <Link to="Ethereum">Ethereum </Link> <Link to="bytecode">bytecode </Link>, which is read by the <Link to="Ethereum">Ethereum </Link> Virtual Machine (<Link to="EVM">EVM </Link>).</>,
  },
  "Byzantine fault tolerance": {
    definition: <>A Byzantine fault, or failure, is one of the most difficult failures to deal with in computer systems; this is because it takes into <Link to="account">account </Link> the possibility that the information used to determine the current <Link to="state">state </Link> of the system may--or may not--be reliable. While applicable in many realms of technology, this becomes of particular interest in <Link to="public blockchain">public blockchain </Link> systems: how do we ensure that we can agree on the current <Link to="state">state </Link> of the <Link to="network">network </Link> when there is an incentive, often a significant financial incentive, to subvert the <Link to="state">state </Link> of the <Link to="network">network </Link> for one&#x27;s own profit? On a more basic level, if we&#x27;re coordinating a <Link to="network">network </Link> running around the world on all kinds of different hardware and software, there are all kinds or problems that can occur that hinder the <Link to="network">network </Link>&#x27;s ability to reach <Link to="consensus">consensus </Link> on its current <Link to="state">state </Link>. Therefore, a <Link to="network">network </Link> that has been designed and implemented to be resistant to these sorts of failures, either due to malicious intent or technical failure, is said to be Byzantine Fault Tolerant.</>,
  },
  "Byzantium fork": {
    definition: <>A &#x27;<Link to="hard fork">hard fork </Link>&#x27; in the <Link to="Ethereum">Ethereum </Link> <Link to="network">network </Link> that occurred in October of 2017. For detailled information, see here; see also &#x27;<Link to="hard fork">hard fork </Link>&#x27;.</>,
  },
  "Celo": {
    definition: <><Link to="Celo">Celo </Link> is a platform designed to allow mobile users around the world to make simple financial transactions with <Link to="cryptocurrency">cryptocurrency </Link>. The platform has its own <Link to="blockchain">blockchain </Link> and two native tokens: <Link to="CELO">CELO </Link> and cUSD</>,
  },
  "Centralized exchange (CEX)": {
    definition: <>A centralized <Link to="exchange">exchange </Link> (<Link to="CEX">CEX </Link>) is a <Link to="cryptocurrency">cryptocurrency </Link> <Link to="exchange">exchange </Link> that is operated and controlled by a centralized entity. In a <Link to="CEX">CEX </Link>, the <Link to="exchange">exchange </Link> company or organization acts as an intermediary between buyers and sellers, holding and managing the assets on behalf of its users. Centralized exchanges typically offer a wide range of trading pairs, with many popular cryptocurrencies available for trade. They also usually have high <Link to="liquidity">liquidity </Link> and offer <Link to="advanced">advanced </Link> trading features such as margin trading, order types, and charting tools. However, centralized exchanges also have several drawbacks. They are often targeted by hackers, as the centralized nature of the <Link to="exchange">exchange </Link> makes them a single point of failure. They also require users to trust the <Link to="exchange">exchange </Link> to hold their funds securely and execute trades fairly, which can be a source of concern for some users.</>,
  },
  "CEX": {
    definition: <>Acronym; see &#x27;Centralized <Link to="Exchange">Exchange </Link>&#x27;.</>,
  },
  "chain ID": {
    definition: <>A <Link to="chain ID">chain ID </Link> is a unique identifier that represents a <Link to="blockchain">blockchain </Link> <Link to="network">network </Link>. We use it to distinguish different <Link to="blockchain">blockchain </Link> networks from each other and to ensure that transactions and messages are sent to the correct <Link to="network">network </Link>. <Link to="Ethereum">Ethereum </Link> networks have two identifiers, a <Link to="network">network </Link> ID and a <Link to="chain ID">chain ID </Link>. Although they often have the same value, they have different uses. Peer-to-peer communication between nodes uses the <Link to="network">network </Link> ID, while the <Link to="transaction">transaction </Link> signature process uses the <Link to="chain ID">chain ID </Link></>,
  },
  "Chrome": {
    definition: <>Internet browser.</>,
  },
  "client (Ethereum or other compatible blockchain)": {
    definition: <>In computing in general, a &#x27;client&#x27; is a program, running on a local computer, that is accessing data made available by a remote computer. In <Link to="public blockchain">public blockchain </Link> networks, a &#x27;client&#x27; is the software that actually does the work of syncing block data, confirming transactions, and participating in <Link to="network">network </Link> <Link to="consensus">consensus </Link>. A client usually includes a <Link to="cryptocurrency">cryptocurrency </Link> software <Link to="wallet">wallet </Link>. <Link to="ConsenSys">ConsenSys </Link> has supported efforts to maintain the <Link to="Ethereum">Ethereum </Link> clients of Besu and Teku; see an up-to-date list of <Link to="Ethereum">Ethereum </Link> clients here.</>,
  },
  "Codefi": {
    definition: <>Derived from “Commerce &amp; <Link to="Decentralized Finance">Decentralized Finance </Link>”, <Link to="Codefi">Codefi </Link>, part of <Link to="ConsenSys">ConsenSys </Link>, builds applications for commerce and financial use cases. Currently known as <Link to="Consensys">Consensys </Link> Staking</>,
  },
  "coin": {
    definition: <>The term &#x27;<Link to="coin">coin </Link>&#x27; has some nuances. Strictly speaking, a &#x27;<Link to="coin">coin </Link>&#x27; could be defined as: A fungible <Link to="token">token </Link> (all of them identical) issued on a <Link to="blockchain">blockchain </Link>, either as the <Link to="network">network </Link>&#x27;s transactional <Link to="token">token </Link>, or through a <Link to="smart contract">smart contract </Link> deployed to that <Link to="network">network </Link>. Some people may use &#x27;coins&#x27; as shorthand for &#x27;bitcoin&#x27;; the immortal aphorism &#x27;not your keys, not your coins&#x27; refers to bitcoins. Another thing to keep in mind is that, while coins are put forward as some sort of representation of value, that value can vary wildly from one &#x27;<Link to="coin">coin </Link>&#x27; to another. A <Link to="coin">coin </Link> may represent the value of the computational resources of the <Link to="network">network </Link>, or it may be &#x27;pegged&#x27; to represent <Link to="fiat currency">fiat currency </Link> value, or it may float according to the value placed on immaterial resources like NFTs, membership, or digital goods, to name a few.</>,
  },
  "Coinbase Pay": {
    definition: <><Link to="Coinbase Pay">Coinbase Pay </Link> is a payment feature that allows you to buy or transfer supported crypto on Coinbase.com directly from self-custody wallets (like <Link to="MetaMask">MetaMask </Link>) and dapps.</>,
  },
  "cold storage": {
    definition: <>cold <Link to="wallet">wallet </Link>/<Link to="cold storage">cold storage </Link>: An offline <Link to="wallet">wallet </Link> that is never connected to the internet. These wallets protect cryptocurrencies from getting hacked online. For more information, check out <Link to="MetaMask">MetaMask </Link>&#x27;s <Link to="Hardware Wallet">Hardware Wallet </Link> Hub: <Link to="Hardware Wallet">Hardware Wallet </Link> Hub</>,
  },
  "cold wallet / cold storage": {
    definition: <>An offline <Link to="wallet">wallet </Link> that is never connected to the internet. These wallets protect cryptocurrencies from getting hacked online. For more information, check out <Link to="MetaMask">MetaMask </Link>&#x27;s <Link to="Hardware Wallet">Hardware Wallet </Link> Hub.</>,
  },
  "Community Platform": {
    definition: <>A <Link to="community platform">community platform </Link> is a dedicated virtual space where people who share the same goals, interests, or motivations can connect and build relationships. <Link to="MetaMask">MetaMask </Link>&#x27;s <Link to="community platform">community platform </Link> can be accessed here: <Link to="MetaMask">MetaMask </Link> Community</>,
  },
  "Compiling": {
    definition: <>There are many languages in computing and software programming. In general, &#x27;<Link to="low">low </Link>-level&#x27; languages are those actually processed by the computer&#x27;s operating system or processor, while &#x27;high-level&#x27; languages are those typed in by software developers making programs. <Link to="Compiling">Compiling </Link>, then, is converting code written in a high-level programming language (e.g., <Link to="Solidity">Solidity </Link>) into a lower-level language (e.g., <Link to="EVM">EVM </Link> <Link to="bytecode">bytecode </Link>).</>,
  },
  "Compound": {
    definition: <><Link to="Compound">Compound </Link> is a decentralized, <Link to="blockchain">blockchain </Link>-based <Link to="protocol">protocol </Link> that allows you to lend and borrow crypto — and have a say in its <Link to="governance">governance </Link> with its native COMP <Link to="token">token </Link>.</>,
  },
  "confirmation": {
    definition: <>A <Link to="confirmation">confirmation </Link> happens when a <Link to="network">network </Link> has verified a <Link to="blockchain">blockchain </Link> <Link to="transaction">transaction </Link>. Under a Proof of Work (PoW) <Link to="consensus">consensus </Link> mechanism, this happens through a process known as <Link to="mining">mining </Link>; under Proof of Stake (PoS), the process is known as validation. Once a <Link to="transaction">transaction </Link> is successfully confirmed, it theoretically cannot be reversed or double spent. The more confirmations a <Link to="transaction">transaction </Link> has, the harder it becomes to perform a <Link to="double spend">double spend </Link> attack.</>,
  },
  "consensus": {
    definition: <>The process used by a group of peers, or nodes, on a <Link to="blockchain">blockchain </Link> <Link to="network">network </Link> to agree on the validity of transactions submitted to the <Link to="network">network </Link>. Dominant <Link to="consensus">consensus </Link> mechanisms are Proof of Work (PoW) and Proof of Stake (PoS).</>,
  },
  "Consensus client": {
    definition: <>A <Link to="consensus">consensus </Link> client is a component of a <Link to="blockchain">blockchain </Link> <Link to="node">node </Link> that is responsible for validating and verifying transactions and blocks in the <Link to="network">network </Link>. It communicates with other nodes to reach <Link to="consensus">consensus </Link> on the current <Link to="state">state </Link> of the <Link to="blockchain">blockchain </Link> and to ensure that all nodes have a consistent copy of the <Link to="ledger">ledger </Link>. There are various types of <Link to="consensus">consensus </Link> mechanisms used in <Link to="blockchain">blockchain </Link> networks, including proof of work (PoW), proof of stake (PoS), and delegated proof of stake (DPoS). The <Link to="consensus">consensus </Link> client implements the specific <Link to="consensus">consensus </Link> mechanism used by the <Link to="network">network </Link> and ensures that all nodes follow the rules and reach agreement on the current <Link to="state">state </Link> of the <Link to="blockchain">blockchain </Link>.</>,
  },
  "Consensus layer": {
    definition: <>The <Link to="consensus">consensus </Link> layer is responsible for validating and verifying transactions and blocks, and for coordinating communication between nodes to achieve <Link to="consensus">consensus </Link>. In a <Link to="blockchain">blockchain </Link> <Link to="network">network </Link>, the <Link to="consensus">consensus </Link> layer is implemented by the <Link to="consensus">consensus </Link> <Link to="protocol">protocol </Link> or <Link to="algorithm">algorithm </Link> that defines how new blocks are added to the chain and how the <Link to="network">network </Link> reaches agreement on the current <Link to="state">state </Link> of the <Link to="ledger">ledger </Link>.</>,
  },
  "Consensus mechanism": {
    definition: <><Link to="Consensus">Consensus </Link> mechanisms (also known as <Link to="consensus">consensus </Link> protocols or <Link to="consensus">consensus </Link> algorithms) allow distributed systems (networks of computers) to work together and stay secure.</>,
  },
  "Consensys": {
    definition: <>Short for <Link to="Consensus">Consensus </Link> Systems, <Link to="ConsenSys">ConsenSys </Link> is the software engineering leader of the <Link to="blockchain">blockchain </Link> space.</>,
  },
  "Constantinople fork": {
    definition: <>One of the &#x27;hard forks&#x27; made to the <Link to="Ethereum">Ethereum </Link> <Link to="network">network </Link>, in February 2019. For more detailed information, see here; see also &#x27;<Link to="hard fork">hard fork </Link>&#x27;.</>,
  },
  "contract": {
    definition: <>See <Link to="smart contract">smart contract </Link></>,
  },
  "Contract account": {
    definition: <>An <Link to="account">account </Link> containing code that executes whenever it receives a <Link to="transaction">transaction </Link> from another <Link to="account">account </Link> (EOA or <Link to="contract">contract </Link>).</>,
  },
  "CoolWallet": {
    definition: <>A crypto <Link to="hardware wallet">hardware wallet </Link> for Bitcoin, <Link to="Ethereum">Ethereum </Link>, Litecoin, Bitcoin Cash, and ERC20 <Link to="Token">Token </Link>.</>,
  },
  "crypto asset": {
    definition: <>A useful blanket term that covers <Link to="on-chain">on-chain </Link> assets: cryptocurrencies, NFTs, and other, still emerging, products.</>,
  },
  "crypto bounties": {
    definition: <><Link to="Crypto bounties">Crypto bounties </Link> are an important rewards mechanism that <Link to="blockchain">blockchain </Link> projects utilize in order to secure the successful accomplishments of certain tasks required by the <Link to="network">network </Link>. Initially, bounties were intended as a marketing tool to attract users to participate in performing validation services for <Link to="blockchain">blockchain </Link> projects. Today, <Link to="crypto bounties">crypto bounties </Link> have developed significantly beyond the purpose of a simple marketing tool. <Link to="crypto bounties">crypto bounties </Link></>,
  },
  "crypto fund": {
    definition: <>A <Link to="crypto fund">crypto fund </Link> is a type of investment fund that focuses on investing in cryptocurrencies or companies involved in the <Link to="cryptocurrency">cryptocurrency </Link> industry. These funds are designed to give investors exposure to the crypto market without the need for them to directly buy and hold cryptocurrencies themselves.</>,
  },
  "crypto wallet": {
    definition: <>A <Link to="crypto wallet">crypto wallet </Link> is a device, physical medium, program or a service which stores the public and/or private keys for <Link to="cryptocurrency">cryptocurrency </Link> transactions. Crypto wallets come in different forms, including software wallets, hardware wallets, and paper wallets.</>,
  },
  "crypto-": {
    definition: <>Even though this prefix is originally Greek, our current usage comes from <Link to="cryptography">cryptography </Link>. Technologies that are referred to with the blanket term of &#x27;crypto&#x27; tech are underlain by cryptographic tools and processes (such as public/<Link to="private key">private key </Link> pairs) that enable innovative functionality and security. Of course, &#x27;<Link to="cryptocurrency">cryptocurrency </Link>&#x27; often gets shortened to simply &#x27;crypto&#x27;, so this emerging field is full of instances where something &#x27;crypto&#x27; is being added to or shortened. With the emergence of the term &#x27;Web3&#x27;, arguably a distinction has begun to be made between &#x27;crypto&#x27;, referring to DeFi and other financial use cases of the technology, while &#x27;Web3&#x27; refers to the transition of Internet-based activities to more decentralized practices and platforms.</>,
  },
  "crypto-compliance": {
    definition: <>A blanket term used to refer to ensuring crypto projects conform with applicable regulations and laws.</>,
  },
  "cryptoassets": {
    definition: <>A useful blanket term that covers <Link to="on-chain">on-chain </Link> assets: cryptocurrencies, NFTs, and other, still emerging, products.</>,
  },
  "cryptocurrency": {
    definition: <>Digital currency that is based on mathematics and uses <Link to="encryption">encryption </Link> techniques to regulate the creation of units of currency as well as verifying the transfer of funds. Cryptocurrencies operate independently of a central bank, and are kept track of through <Link to="distributed ledger">distributed ledger </Link> technology.</>,
  },
  "cryptoeconomics": {
    definition: <>The economic analysis of <Link to="decentralized finance">decentralized finance </Link>; notably, the MIT <Link to="Cryptoeconomics">Cryptoeconomics </Link> Lab.</>,
  },
  "cryptography": {
    definition: <>In its broadest sense, <Link to="cryptography">cryptography </Link> is the art of &#x27;hidden writing&#x27; -- using some sort of code to encrypt writing. In modern times, it often refers to the application of this concept within computing, communication, and data transfer through computers and computer networks. <Link to="Cryptography">Cryptography </Link> has been protected as free speech in the United States, and provides the technological foundation that allows <Link to="blockchain">blockchain </Link> networks to be public: despite the <Link to="ledger">ledger </Link> being open and accessible by all, control over the <Link to="state">state </Link> of the <Link to="ledger">ledger </Link> and the ability to move assets on it is mediated through cryptographic tools, such as the <Link to="Secret Recovery Phrase">Secret Recovery Phrase </Link>.</>,
  },
  "Curve": {
    definition: <><Link to="Curve">Curve </Link> is a decentralized <Link to="exchange">exchange </Link> for stablecoins that uses an automated market maker (AMM) to manage <Link to="liquidity">liquidity </Link>.</>,
  },
  "custody (noun)": {
    definition: <>In the context of cryptocurrencies, custody refers to the safekeeping and management of digital assets on behalf of a client by a third-party service provider. Custody services are an important aspect of the <Link to="cryptocurrency">cryptocurrency </Link> industry because cryptocurrencies are digital assets that require secure storage and management to prevent loss, theft, or unauthorized access. Crypto custody services are typically offered by specialized companies that provide secure storage solutions for cryptocurrencies. These companies use various security measures such as multi-signature authentication, <Link to="cold storage">cold storage </Link>, and insurance to protect their clients&#x27; assets.</>,
  },
  "D'CENT": {
    definition: <><Link to="Hardware wallet">Hardware wallet </Link>.</>,
  },
  "DAI": {
    definition: <><Link to="DAI">DAI </Link> is an <Link to="Ethereum">Ethereum </Link>-based <Link to="stablecoin">stablecoin </Link> whose issuance and development is managed by the <Link to="Maker Protocol">Maker Protocol </Link> and the MakerDAO decentralized autonomous organization.</>,
  },
  "DAO": {
    definition: <>Acronym; see &#x27;Decentralized Autonomous Organization&#x27;.</>,
  },
  "dapp": {
    definition: <>Acronym; see &#x27;<Link to="decentralized application">decentralized application </Link>&#x27;</>,
  },
  "decentralization": {
    definition: <>The transfer of authority and responsibility from a centralized organization, government, or party to a distributed <Link to="network">network </Link>.</>,
  },
  "decentralized application": {
    definition: <>An open-source software application with backend (not user-facing) code running on a decentralized peer-to-peer <Link to="network">network </Link>, rather than a centralized server. You may see alternate spellings: dApps, DApps, Dapps, and Đapps.</>,
  },
  "Decentralized Autonomous Organization (DAO)": {
    definition: <>A Digital Decentralized Autonomous Organization (<Link to="DAO">DAO </Link>, pronounced like the Chinese concept) is a powerful and very flexible organizational structure built on a <Link to="blockchain">blockchain </Link>. Alternatively, the first known example of a <Link to="DAO">DAO </Link> is referred to as The <Link to="DAO">DAO </Link>. The <Link to="DAO">DAO </Link> served as a form of investor-directed venture capital fund, which sought to provide enterprises with new decentralized business models. <Link to="Ethereum">Ethereum </Link>-based, The <Link to="DAO">DAO </Link>’s code was open source. The organization set the record for the most crowdfunded project in 2016. Those funds were partially stolen by hackers. The hack caused an <Link to="Ethereum">Ethereum </Link> hard-<Link to="fork">fork </Link> which lead to the creation of <Link to="Ethereum">Ethereum </Link> Classic.</>,
  },
  "decentralized exchange (DEX)": {
    definition: <>A decentralized <Link to="exchange">exchange </Link> (<Link to="DEX">DEX </Link>) is a platform for exchanging cryptocurrencies based on functionality programmed on the <Link to="blockchain">blockchain </Link> (i.e., in smart contracts). The trading is peer-to-peer, or between pools of <Link to="liquidity">liquidity </Link>. This is in contrast with a centralized <Link to="exchange">exchange </Link>, which is more akin to a bank or investment firm that specializes in cryptocurrencies. Additionally, there are so-called on-ramp providers, who could be compared to currency brokers, exchanging traditional “fiat” money for cryptocurrencies, and do not hold customer’s funds “on <Link to="deposit">deposit </Link>” the way a centralized <Link to="exchange">exchange </Link> does. There are important technical and regulatory differences between these, which are constantly evolving.</>,
  },
  "decentralized finance": {
    definition: <>If <Link to="cryptocurrency">cryptocurrency </Link> is web3’s monetary system, its financial system is DeFi. This includes familiar concepts like loans and interest-bearing financial instruments, as well as so-called “DeFi primitives”, novel solutions like <Link to="token">token </Link> swapping and <Link to="liquidity">liquidity </Link> pools.</>,
  },
  "decentralized web": {
    definition: <>The <Link to="decentralized web">decentralized web </Link>, also known as web3, is a concept that refers to a new type of internet architecture that aims to provide a more open, secure, and privacy-preserving internet experience by removing the need for centralized intermediaries and giving users more control over their data. In contrast to the current centralized web, where most online activities are controlled by a few large corporations and their servers, the <Link to="decentralized web">decentralized web </Link> relies on a <Link to="network">network </Link> of distributed nodes and peer-to-peer protocols to store and transmit data. This means that there is no central authority controlling the internet, and users can interact directly with each other without the need for intermediaries.</>,
  },
  "deposit": {
    definition: <>In most web3 contexts, &#x27;depositing&#x27; refers to the act of transferring some amount of <Link to="token">token </Link>(s) to an address other than one&#x27;s own, most often to a <Link to="smart contract">smart contract </Link> controlled by a &#x27;<Link to="protocol">protocol </Link>&#x27;, such as a decentralized <Link to="exchange">exchange </Link>, video game or multiverse, <Link to="DAO">DAO </Link>, etc. Generally, the user will receive something in return for their <Link to="deposit">deposit </Link>, and the <Link to="deposit">deposit </Link> can be claimed at the user&#x27;s discretion, or upon completion of given conditions. Compare with &#x27;stake&#x27;.</>,
  },
  "derive / derivation": {
    definition: <>To derive something is to obtain it from an original source. In the context of <Link to="crypto-">crypto- </Link>technology, we often discuss &#x27;deriving&#x27; wallets and accounts from seed phrases (aka Secret Recovery Phrases, or SRPs). This is literally true: the SRP represents a cryptographic key which is used to derive <Link to="account">account </Link> addresses deterministically, meaning they will be derived the same way each time. Another, more technical, way of referring to this technology is to refer to &#x27;hierarchical deterministic&#x27; wallets.</>,
  },
  "dev": {
    definition: <>Abbreviation of <Link to="developer">developer </Link>.</>,
  },
  "Devcon": {
    definition: <>This is shorthand for the <Link to="Ethereum">Ethereum </Link> Developers’ Conference.</>,
  },
  "Developer": {
    definition: <>A person that creates new products, especially computer products such as software.</>,
  },
  "DEX": {
    definition: <>Acronym; see &#x27;decentralized <Link to="exchange">exchange </Link>&#x27;.</>,
  },
  "difficulty": {
    definition: <>The concept outlining how hard it is to verify blocks in a <Link to="blockchain">blockchain </Link> <Link to="network">network </Link> during Proof of Work <Link to="mining">mining </Link>. In the Bitcoin <Link to="network">network </Link>, the <Link to="difficulty">difficulty </Link> of <Link to="mining">mining </Link> adjusts every 2016 blocks. This is to keep block verification time at ten minutes.</>,
  },
  "difficulty bomb": {
    definition: <>The <Link to="difficulty">difficulty </Link> bomb, along with the <Link to="Beacon Chain">Beacon Chain </Link> and others, was a key element of <Link to="Ethereum">Ethereum </Link>&#x27;s <Link to="upgrade">upgrade </Link> to <Link to="Ethereum">Ethereum </Link> 2.0 and a Proof of Stake (PoS) <Link to="consensus">consensus </Link> mechanism. As the name indicates, the <Link to="difficulty">difficulty </Link> bomb was a software mechanism that increased block verification <Link to="difficulty">difficulty </Link>, making it more expensive and difficult--eventually, prohibitively so--to mine a new block. Through economic incentive, and later, the raw limitations of computing power, this forced the shift to PoS <Link to="consensus">consensus </Link>. See also &#x27;Proof of Stake&#x27;, &#x27;the <Link to="Merge">Merge </Link>&#x27;.</>,
  },
  "digital asset": {
    definition: <>A digital commodity that is scarce, electronically transferable, and intangible with a market value.</>,
  },
  "digital identity": {
    definition: <>An online or networked identity adopted by an individual, organization, or electronic device.</>,
  },
  "Digital signature": {
    definition: <>A short string of data a user produces for a document using a <Link to="private key">private key </Link> such that anyone with the corresponding <Link to="public key">public key </Link>, the signature, and the document can verify that (1) the document was &#x27;signed&#x27; by the owner of that particular <Link to="private key">private key </Link>, and (2) the document was not changed after it was signed.</>,
  },
  "Distributed Denial of Service (DDoS) Attack": {
    definition: <>A type of cyber-attack in which the perpetrator continuously overwhelms the system with requests in order to prevent service of legitimate requests.</>,
  },
  "distributed ledger": {
    definition: <>A type of database which spreads across multiple sites, countries, or institutions. Records are stored sequentially in a continuous <Link to="ledger">ledger </Link>. <Link to="Distributed ledger">Distributed ledger </Link> data can be either “permissioned” or “unpermissioned”, determining who can view it. This term is used, often, to refer in general to <Link to="public blockchain">public blockchain </Link> technology, as &#x27;crypto&#x27; has come to mean &#x27;<Link to="cryptocurrency">cryptocurrency </Link>&#x27;, &#x27;web3&#x27; is the collective community, and &#x27;<Link to="blockchain">blockchain </Link>&#x27;, after all, is &#x27;just&#x27; the data structure used to sync the <Link to="distributed ledger">distributed ledger </Link> itself.</>,
  },
  "Distributed Ledger Technology": {
    definition: <>A type of database which spreads across multiple sites, countries, or institutions. Records are stored sequentially in a continuous <Link to="ledger">ledger </Link>. <Link to="Distributed ledger">Distributed ledger </Link> data can be either “permissioned” or “unpermissioned”, determining who can view it. This term is used, often, to refer in general to <Link to="public blockchain">public blockchain </Link> technology, as ‘crypto’ has come to mean ‘<Link to="cryptocurrency">cryptocurrency </Link>’, ‘web3’ is the collective community, and ‘<Link to="blockchain">blockchain </Link>’, after all, is “just” the data structure used to sync the <Link to="distributed ledger">distributed ledger </Link> itself.</>,
  },
  "DLT": {
    definition: <>Acronym; see &#x27;<Link to="distributed ledger">distributed ledger </Link> technology&#x27;.</>,
  },
  "double spend": {
    definition: <>The &#x27;<Link to="double spend">double spend </Link>&#x27; is the benchmark security concern of <Link to="blockchain">blockchain </Link> networks: how do we ensure that someone doesn&#x27;t send the same <Link to="transaction">transaction </Link> to two different entities, essentially &#x27;spending their money twice&#x27;? This is the cornerstone of the <Link to="consensus">consensus </Link> mechanism, ensuring that all nodes of the <Link to="network">network </Link> are &#x27;in agreement&#x27; about which assets are allocated to which addresses, on an ongoing basis, to prevent malicious actions such as a <Link to="double spend">double spend </Link>.</>,
  },
  "ecosystem": {
    definition: <>In the context of &#x27;web3 <Link to="ecosystem">ecosystem </Link>&#x27;; &#x27;<Link to="blockchain">blockchain </Link> <Link to="ecosystem">ecosystem </Link>&#x27;. See &#x27;web3&#x27;; See &#x27;<Link to="blockchain">blockchain </Link>&#x27;</>,
  },
  "Edge": {
    definition: <>In the context of &#x27;<Link to="Edge">Edge </Link> computing&#x27;: it is an emerging computing paradigm which refers to a range of networks and devices at or near the user. <Link to="Edge">Edge </Link> is about processing data closer to where it&#x27;s being generated, enabling processing at greater speeds and volumes, leading to greater action-led results in real time. The term can also refer to Microsoft&#x27;s browser or the crypto software <Link to="wallet">wallet </Link></>,
  },
  "EIP-1559": {
    definition: <>EIP (<Link to="Ethereum">Ethereum </Link> Improvement Proposal) The EIP process is a public and open process through which suggestions are made as to how to change (and hopefully, improve) the way the <Link to="Ethereum">Ethereum </Link> <Link to="network">network </Link> functions as a whole. Individual EIPs are referred to by the name assigned to them in the repository, for example, <Link to="EIP-1559">EIP-1559 </Link>. <Link to="EIP-1559">EIP-1559 </Link> will change <Link to="Ethereum">Ethereum </Link>’s fee market mechanism. Fundamentally, <Link to="EIP-1559">EIP-1559 </Link> gets rid of the first-price auction as the main <Link to="gas">gas </Link> fee calculation. In first-price auctions, people bid a set amount of money to pay for their <Link to="transaction">transaction </Link> to be processed, and the highest bidder wins. With <Link to="EIP-1559">EIP-1559 </Link>, there will be a discrete “<Link to="base fee">base fee </Link>” for transactions to be included in the next block. For users or applications that want to prioritize their <Link to="transaction">transaction </Link>, they can add a “tip,” which is called a “<Link to="priority fee">priority fee </Link>” to pay a miner for faster inclusion.</>,
  },
  "encrypted vs unencrypted keys": {
    definition: <>As discussed elsewhere, public and private cryptographic key pairs are one of the technologies that underpins cryptocurrencies and &#x27;crypto&#x27; tech in general. In <Link to="MetaMask">MetaMask </Link>, an unencrypted <Link to="private key">private key </Link> is 64 characters long, and it is used to unlock or restore wallets. An encrypted key is also 64 letters long and is a regular <Link to="private key">private key </Link> that has gone through the process of <Link to="encryption">encryption </Link>. Usually, encrypted private keys are kept within the <Link to="extension">extension </Link> or device they are encrypted by, and they remain out of sight from the user. This is meant to add another layer of security to keep a user’s <Link to="wallet">wallet </Link> information safe. By way of example: if the world ‘Apple’ was your <Link to="private key">private key </Link>, then it was encrypted three letters down the alphabet, your new encrypted key would be ‘Dssoh’. Since you know the way to encrypt this key, you could derive the original <Link to="private key">private key </Link> from it by reversing the method of <Link to="encryption">encryption </Link>.</>,
  },
  "encryption": {
    definition: <>Encrpytion, literally &#x27;in a hidden place&#x27;, is the art and science of encoding information to control who can read it, or how it is to be read. <Link to="Encryption">Encryption </Link> occurs in natural (human) languages, as well as in machine and computer languages. Highly complex, and therefore difficult to decipher, <Link to="encryption">encryption </Link> is an essential element enabling <Link to="blockchain">blockchain </Link> networks to be simultaneously public and secure.</>,
  },
  "ENS": {
    definition: <>The <Link to="Ethereum">Ethereum </Link> Name Service is a <Link to="protocol">protocol </Link>, managed by a <Link to="DAO">DAO </Link>, which assigns human-readable and easy-to-remember addresses to <Link to="Ethereum">Ethereum </Link> addresses and assets, homologous to the traditional internet&#x27;s DNS.</>,
  },
  "Enterprise Ethereum Alliance (EEA)": {
    definition: <>A group of <Link to="Ethereum">Ethereum </Link> core developers, startups, and large companies working together to commercialize and use <Link to="Ethereum">Ethereum </Link> for different business applications. Website here.</>,
  },
  "entropy": {
    definition: <>In the context of <Link to="cryptography">cryptography </Link>, &#x27;<Link to="entropy">entropy </Link>&#x27; refers to &#x27;randomness&#x27;; generally, the more random something is (the more <Link to="entropy">entropy </Link> it has), the more secure it is.</>,
  },
  "epoch": {
    definition: <>An <Link to="epoch">epoch </Link>, in general, is a measure of time, or of <Link to="blockchain">blockchain </Link> progression, on a given <Link to="blockchain">blockchain </Link>. In <Link to="Ethereum">Ethereum </Link> Proof of Stake, an <Link to="epoch">epoch </Link> consists of 32 slots, each lasting 12 seconds, for a total of 6.4 minutes per <Link to="epoch">epoch </Link>. There is additional functionality built upon the <Link to="epoch">epoch </Link> measure in the <Link to="Beacon Chain">Beacon Chain </Link> to help ensure security and proper operation of the Chain.</>,
  },
  "ERC": {
    definition: <><Link to="Ethereum">Ethereum </Link> Request for Comment, or <Link to="ERC">ERC </Link>, is a bit of a misnomer, as it is used to refer to suggestions for modifications that have already made it through the <Link to="Ethereum">Ethereum </Link> Improvement <Link to="Protocol">Protocol </Link> (EIP) process and have been made standard on <Link to="Ethereum">Ethereum </Link>. An <Link to="ERC">ERC </Link> is, essentially, a set of standards for a given operation or topic on the <Link to="Ethereum">Ethereum </Link> <Link to="network">network </Link>. The authoritative list can be found here.</>,
  },
  "ERC-1155": {
    definition: <>A <Link to="token">token </Link> standard for creating semi-fungible tokens, meaning you can launch both fungible and non-fungible tokens within a single <Link to="smart contract">smart contract </Link>.</>,
  },
  "ERC-20 Token Standard": {
    definition: <><Link to="ERC">ERC </Link> is the abbreviation for <Link to="Ethereum">Ethereum </Link> Request for Comment and is followed by the assignment number of the standard. <Link to="ERC">ERC </Link>-20 is a technical standard for smart contracts which is used to issue the majority of tokens (in particular, <Link to="cryptocurrency">cryptocurrency </Link> tokens) extant on <Link to="Ethereum">Ethereum </Link>. This list of rules states the requirements that a <Link to="token">token </Link> must fulfill to be compliant and function within the <Link to="Ethereum">Ethereum </Link> <Link to="network">network </Link>.</>,
  },
  "ERC-721": {
    definition: <><Link to="ERC">ERC </Link>-721 <Link to="Token">Token </Link> Standard Another standard for <Link to="Ethereum">Ethereum </Link> smart contracts, which allows for the issuance of a <Link to="non-fungible token">non-fungible token </Link>: this is the standard that created what we all now know as an <Link to="NFT">NFT </Link>. This <Link to="token">token </Link> standard is used to represent a unique <Link to="digital asset">digital asset </Link> that is not interchangeable, as opposed to the <Link to="ERC">ERC </Link>-20 (or other equivalent) standard, which issues identical, interchangeable tokens.</>,
  },
  "ERC-721 Token Standard": {
    definition: <><Link to="ERC">ERC </Link>-721 <Link to="Token">Token </Link> Standard A standard for <Link to="Ethereum">Ethereum </Link> smart contracts, which allows for the issuance of a <Link to="non-fungible token">non-fungible token </Link>: this is the standard that created what we all now know as an <Link to="NFT">NFT </Link>. This <Link to="token">token </Link> standard is used to represent a unique <Link to="digital asset">digital asset </Link> that is not interchangeable, as opposed to the <Link to="ERC">ERC </Link>-20 (or other equivalent) standard, which issues identical, interchangeable tokens.</>,
  },
  "ETH": {
    definition: <>Acronym; see &#x27;ether&#x27;</>,
  },
  "ether (denominations)": {
    definition: <>There are a number of denominations of the currency we know as &#x27;ether&#x27; or <Link to="ETH">ETH </Link>; for the definitive explanation, see the original <Link to="Ethereum">Ethereum </Link> Homestead documentation <Link to="Ethereum">Ethereum </Link> Homestead documentation here.</>,
  },
  "ether (ETH)": {
    definition: <>Ether is the native <Link to="cryptocurrency">cryptocurrency </Link> of the <Link to="Ethereum">Ethereum </Link> <Link to="blockchain">blockchain </Link> <Link to="network">network </Link>. Ether—also referred to as <Link to="ETH">ETH </Link> (pronounced with a long “e”, like “teeth” without the “t”)—functions as the fuel of the <Link to="Ethereum">Ethereum </Link> <Link to="ecosystem">ecosystem </Link>, by quantifying the work performed by the <Link to="network">network </Link>, and as a form of payment for participants securing the <Link to="network">network </Link>.</>,
  },
  "Ethereum": {
    definition: <>A <Link to="public blockchain">public blockchain </Link> <Link to="network">network </Link> and decentralized software platform upon which developers build and run applications. As it is a proper noun, it should always be capitalized.</>,
  },
  "Ethereum 2.0": {
    definition: <>a.k.a The <Link to="Merge">Merge </Link> Finalized in September 2022, the <Link to="Merge">Merge </Link> was the culmination of years of work involved in transitioning <Link to="Ethereum">Ethereum </Link> from a Proof of Work <Link to="consensus">consensus </Link> model, to Proof of Stake, all while keeping the <Link to="network">network </Link> live. This was successful, and reduced the <Link to="network">network </Link>’s carbon footprint by more than 99.9%.</>,
  },
  "Ethereum Improvement Proposal (EIP)": {
    definition: <>The EIP process is a public and open process through which suggestions are made as to how to change (and hopefully, improve) the way the <Link to="Ethereum">Ethereum </Link> <Link to="network">network </Link> functions as a whole; the official repository is here. Individual EIPs are referred to by the name assigned to them in the repository, for example, <Link to="EIP-1559">EIP-1559 </Link>. Keep in mind that as it is an iterative, lengthy process, some EIPs never get fully approved, and some do, and many end up somewhere in a gray area of &#x27;partially implemented&#x27;.</>,
  },
  "Ethereum Name Service (ENS)": {
    definition: <>The <Link to="Ethereum">Ethereum </Link> Name Service is a <Link to="protocol">protocol </Link>, managed by a <Link to="DAO">DAO </Link>, which assigns human-readable and easy-to-remember addresses to <Link to="Ethereum">Ethereum </Link> addresses and assets, homologous to the traditional internet’s DNS.</>,
  },
  "Ethereum Public Address": {
    definition: <>An <Link to="Ethereum">Ethereum </Link> public address, also known as an <Link to="Ethereum">Ethereum </Link> <Link to="account">account </Link> address, is a string of 42 characters (including letters and numbers) that is used to receive or send <Link to="Ethereum">Ethereum </Link> and other <Link to="Ethereum">Ethereum </Link>-based tokens on the <Link to="Ethereum">Ethereum </Link> <Link to="network">network </Link>. Each <Link to="Ethereum">Ethereum </Link> public address is unique and is associated with a <Link to="private key">private key </Link> that allows the owner of the address to sign and authorize transactions. The public address is derived from the <Link to="private key">private key </Link> using a mathematical <Link to="algorithm">algorithm </Link>, and it can be shared with others to receive payments or tokens. When sending <Link to="Ethereum">Ethereum </Link> or tokens, users need to specify the recipient&#x27;s public address as the destination for the <Link to="transaction">transaction </Link>. Once the <Link to="transaction">transaction </Link> is confirmed by the <Link to="network">network </Link>, the <Link to="Ethereum">Ethereum </Link> or tokens are transferred to the recipient&#x27;s address.</>,
  },
  "Ethereum Virtual Machine (EVM)": {
    definition: <>The <Link to="EVM">EVM </Link> is a virtual machine that operates on the <Link to="Ethereum">Ethereum </Link> <Link to="network">network </Link>. It is Turing complete and allows anyone, anywhere to execute arbitrary <Link to="EVM">EVM </Link> <Link to="bytecode">bytecode </Link>. All <Link to="Ethereum">Ethereum </Link> nodes run on the <Link to="EVM">EVM </Link>. It is home for smart contracts based on the <Link to="Ethereum">Ethereum </Link> <Link to="blockchain">blockchain </Link>.</>,
  },
  "Etherscan": {
    definition: <>A popular website for analyzing activity on the <Link to="Ethereum">Ethereum </Link> <Link to="blockchain">blockchain </Link>. See ‘<Link to="blockchain">blockchain </Link> explorer’. https://<Link to="etherscan">etherscan </Link>.io/</>,
  },
  "EVM": {
    definition: <>Acronym; see &#x27;<Link to="Ethereum">Ethereum </Link> Virtual Machine&#x27;.</>,
  },
  "exchange": {
    definition: <>A place to trade <Link to="cryptocurrency">cryptocurrency </Link>. Centralized exchanges, operated by companies like Coinbase and Gemini, function as intermediaries, while decentralized exchanges do not have a central authority.</>,
  },
  "Execution client": {
    definition: <>Execution clients are tasked with processing and broadcasting transactions, as well as with managing <Link to="Ethereum">Ethereum </Link>&#x27;s <Link to="state">state </Link>. They run the computations for each <Link to="transaction">transaction </Link> in the <Link to="Ethereum">Ethereum </Link> Virtual Machine to ensure that the rules of the <Link to="protocol">protocol </Link> are followed. Today, they also handle proof of work <Link to="consensus">consensus </Link>. After the transition to proof of stake, they will delegate this to <Link to="consensus">consensus </Link> clients.</>,
  },
  "Execution layer": {
    definition: <><Link to="Ethereum">Ethereum </Link>&#x27;s <Link to="execution layer">execution layer </Link> is the <Link to="network">network </Link> of execution clients.</>,
  },
  "Extended Private Key (XPRIV)": {
    definition: <>See &#x27;<Link to="private key">private key </Link>&#x27;; see &#x27;Hierarchical Deterministic (HD)&#x27; <Link to="wallet">wallet </Link>. An extended <Link to="private key">private key </Link>, or xprv, is a <Link to="private key">private key </Link> which can be used to derive child private keys as part of a Hierarchical Deterministic (HD) <Link to="wallet">wallet </Link>.</>,
  },
  "Extended Public Key (XPUB)": {
    definition: <>See &#x27;<Link to="public key">public key </Link>&#x27;; see &#x27;Hierarchical Deterministic (HD)&#x27; <Link to="wallet">wallet </Link>. An extended <Link to="public key">public key </Link>, or xpub, is a <Link to="public key">public key </Link> which can be used to derive child public keys as part of a Hierarchical Deterministic (HD) <Link to="wallet">wallet </Link>.</>,
  },
  "Extension": {
    definition: <><Link to="MetaMask">MetaMask </Link> is a web browser <Link to="extension">extension </Link> and mobile app that allows you to manage your <Link to="Ethereum">Ethereum </Link> private keys. By doing so, it serves as a <Link to="wallet">wallet </Link> for Ether and other tokens, and allows you to interact with decentralized applications, or dapps. Unlike some wallets, <Link to="MetaMask">MetaMask </Link> keeps no information on you: not your email address, not your password, and not your <Link to="Secret Recovery Phrase">Secret Recovery Phrase </Link> or other private keys. You retain all power over your <Link to="crypto-">crypto- </Link>identity.</>,
  },
  "Fantom": {
    definition: <><Link to="Fantom">Fantom </Link> is a <Link to="public blockchain">public blockchain </Link> platform that aims to facilitate fast and <Link to="low">low </Link>-cost transactions for dapps and smart contracts. It was launched in 2018 and is based on the <Link to="Ethereum">Ethereum </Link> codebase, but with several key enhancements. One of the main features of <Link to="Fantom">Fantom </Link> is its <Link to="consensus">consensus </Link> mechanism, known as Lachesis, which is a variant of Directed Acyclic Graphs (DAGs) that allows for high <Link to="transaction">transaction </Link> throughput and <Link to="low">low </Link> <Link to="confirmation">confirmation </Link> times. This means that transactions on the <Link to="Fantom">Fantom </Link> <Link to="network">network </Link> can be processed quickly and at a <Link to="low">low </Link> cost, making it an attractive platform for developers looking to build dApps that require fast and efficient transactions.</>,
  },
  "faucet": {
    definition: <>A <Link to="faucet">faucet </Link> is an application, sometimes a very simple website, other times more complex, that dispenses <Link to="cryptocurrency">cryptocurrency </Link>. While some networks, especially those in early launch stages, offer “real <Link to="Mainnet">Mainnet </Link>” tokens via faucets, it is much more common for a <Link to="faucet">faucet </Link> to be present on a test <Link to="network">network </Link>, or testnet. These faucets are used by developers to test out dapps or smart contracts before deploying them on <Link to="Ethereum">Ethereum </Link> <Link to="Mainnet">Mainnet </Link>, or users who want to practice an action on the <Link to="blockchain">blockchain </Link> with no risk. Tokens dispensed by a test <Link to="faucet">faucet </Link> stay on the test networks and cannot be exchanged for <Link to="mainnet">mainnet </Link> equivalents.</>,
  },
  "fiat currency": {
    definition: <>Government-issued currency. For example, US Dollars (USD), Euros (EUR), Yuan (CNY), and Yen (JPY).</>,
  },
  "final, finality": {
    definition: <>A <Link to="transaction">transaction </Link> is considered &#x27;final&#x27; once it can no longer be changed. In a sense, this happens once there are sufficient confirmations of the <Link to="transaction">transaction </Link>, but for all intents and purposes, a <Link to="transaction">transaction </Link> is final once the block that contains it is mined or validated. Keep in mind that this reflects a fundamental rule of blockchains: unlike traditional financial systems where charges can be &#x27;reversed&#x27;, there is no &#x27;undoing&#x27; a <Link to="transaction">transaction </Link> on the <Link to="blockchain">blockchain </Link>. Once finality is reached, the <Link to="transaction">transaction </Link> is immutable.</>,
  },
  "Finality Rate": {
    definition: <>See &#x27;finality&#x27;</>,
  },
  "financial technology (FinTech)": {
    definition: <>The integration of technology into offerings by financial services companies in order to improve their use and delivery to consumers.</>,
  },
  "finney": {
    definition: <>A denomination of ether. See ether (denomination).</>,
  },
  "Firefox": {
    definition: <>Internet browser.</>,
  },
  "Firewall": {
    definition: <>In computing, a <Link to="firewall">firewall </Link> is a <Link to="network">network </Link> security system that monitors and controls incoming and outgoing <Link to="network">network </Link> traffic based on predetermined security rules. A <Link to="firewall">firewall </Link> typically establishes a barrier between a trusted <Link to="network">network </Link> and an untrusted <Link to="network">network </Link>, such as the Internet.</>,
  },
  "Flask": {
    definition: <><Link to="MetaMask">MetaMask </Link> <Link to="Flask">Flask </Link> is a distribution of the software designed for developers. It&#x27;s like a laboratory (hence the name) where the <Link to="MetaMask">MetaMask </Link> team can try out new ideas and features. It has experimental, even dangerous functionality in it that is not meant for everyday use. It also doesn&#x27;t have the same stability guarantees that the production distribution of <Link to="MetaMask">MetaMask </Link> has. What is <Link to="MetaMask">MetaMask </Link> <Link to="Flask">Flask </Link>, and how is it different from normal <Link to="MetaMask">MetaMask </Link></>,
  },
  "fork": {
    definition: <>Forking&#x27; is a term that comes from the world of collaborative software development, and refers to the action of copying an existing application or set of code and modifying it to create an alternate version. At the <Link to="blockchain">blockchain </Link> <Link to="protocol">protocol </Link> level, a &#x27;<Link to="fork">fork </Link>&#x27; creates an alternative version of a <Link to="blockchain">blockchain </Link>. Forks are often enacted intentionally to apply upgrades to a <Link to="network">network </Link>. Soft Forks render two chains with some compatibility, while Hard Forks create a new version of the chain that must be adopted to continue participation. In the instance of a contentious <Link to="Hard Fork">Hard Fork </Link>, this can create two versions of a <Link to="blockchain">blockchain </Link> <Link to="network">network </Link>. See also &#x27;<Link to="hard fork">hard fork </Link>&#x27;.</>,
  },
  "Fractional Ownership": {
    definition: <>In the context of <Link to="NFT">NFT </Link> ownership: A fractional <Link to="NFT">NFT </Link> (F-<Link to="NFT">NFT </Link>) is an entire <Link to="NFT">NFT </Link> broken into smaller fragments, allowing several people to claim ownership of a piece of the same <Link to="NFT">NFT </Link>. Fractional NFTs</>,
  },
  "Fraud proof": {
    definition: <>A security model for certain <Link to="layer 2">layer 2 </Link> solutions where, to increase speed, transactions are rolled up into batches and submitted to <Link to="Ethereum">Ethereum </Link> in a single <Link to="transaction">transaction </Link>. They are assumed valid but can be challenged if fraud is suspected. A <Link to="fraud proof">fraud proof </Link> will then run the <Link to="transaction">transaction </Link> to see if fraud took place. This method increases the amount of transactions possible while maintaining security.</>,
  },
  "full node": {
    definition: <>Public blockchains consist of a <Link to="network">network </Link> of computers which sync the <Link to="network">network </Link>&#x27;s data, coordinate <Link to="transaction">transaction </Link> requests, and participate in <Link to="consensus">consensus </Link> regarding the validity of those transactions; each one of these computers is called a &#x27;<Link to="node">node </Link>&#x27;. A <Link to="full node">full node </Link> is a computer that can fully validate transactions and download the entire data of a specific <Link to="blockchain">blockchain </Link>. In contrast, a “lightweight” or “light” <Link to="node">node </Link> does not download all pieces of a <Link to="blockchain">blockchain </Link>’s data, and uses a different validation process.</>,
  },
  "Ganache": {
    definition: <><Link to="Ganache">Ganache </Link> is a personal <Link to="blockchain">blockchain </Link> for <Link to="Ethereum">Ethereum </Link> development that developers can use to deploy contracts, develop applications, and run tests. It is part of the <Link to="Truffle">Truffle </Link> Suite <Link to="ecosystem">ecosystem </Link>.</>,
  },
  "gas": {
    definition: <>A measure of the computational steps required for a <Link to="transaction">transaction </Link> on the <Link to="Ethereum">Ethereum </Link> <Link to="network">network </Link>. This then equates to a fee for <Link to="network">network </Link> users paid in small units of <Link to="ETH">ETH </Link> specified as <Link to="gwei">gwei </Link>. For more on <Link to="gas">gas </Link>, see <Link to="MetaMask">MetaMask </Link>’s user guide here: User Guide: <Link to="Gas">Gas </Link></>,
  },
  "gas fee": {
    definition: <><Link to="Gas">Gas </Link> fee refers to the <Link to="transaction">transaction </Link> fee on the <Link to="blockchain">blockchain </Link>. It is what users pay to get their <Link to="transaction">transaction </Link> validated, or completed.</>,
  },
  "gas limit": {
    definition: <>The <Link to="gas">gas </Link> limit is the maximum amount you’re willing to pay for any given <Link to="transaction">transaction </Link> to go through the <Link to="Ethereum">Ethereum </Link> <Link to="network">network </Link>. Another way of looking at it is as a “rough estimate” of how much computing power your <Link to="transaction">transaction </Link> will take.</>,
  },
  "gas price": {
    definition: <>The <Link to="gas">gas </Link> price is what it sounds like: the cost the <Link to="network">network </Link> is paid for the computational work being performed in a given <Link to="transaction">transaction </Link>. It is paid in units of <Link to="ETH">ETH </Link> called <Link to="gwei">gwei </Link>. Depending on <Link to="network">network </Link> congestion, the <Link to="gas">gas </Link> price may vary significantly.</>,
  },
  "Gas Station Network": {
    definition: <>The <Link to="Gas">Gas </Link> Station <Link to="Network">Network </Link> (<Link to="GSN">GSN </Link>) is a decentralized <Link to="network">network </Link> of relayers mainly referring to the <Link to="Ethereum">Ethereum </Link> <Link to="blockchain">blockchain </Link>. It allows you to build dapps which provide payment for transactions, so users do not need to hold Ether or <Link to="ETH">ETH </Link> to pay for <Link to="gas">gas </Link>, easing their onboarding process and improving user acquisition and experience. However, while the relayers in the <Link to="GSN">GSN </Link> do not charge users, they charge the recipient and <Link to="contract">contract </Link> instead. In this way, the relayers recover the costs of transactions and profit from extra fees for providing such services. Originally conceived and designed by TabooKey, the <Link to="GSN">GSN </Link> has grown to encompass many companies, protocols and platforms in the <Link to="Ethereum">Ethereum </Link> <Link to="ecosystem">ecosystem </Link> that wish to facilitate the onboarding of users to <Link to="Ethereum">Ethereum </Link> applications. <Link to="Gas">Gas </Link> Station <Link to="Network">Network </Link></>,
  },
  "genesis block": {
    definition: <>The initial block of data computed in the history of a <Link to="blockchain">blockchain </Link> <Link to="network">network </Link>.</>,
  },
  "Gigawei": {
    definition: <><Link to="Gwei">Gwei </Link> is a unit of ether, the smallest denomination, which stands for <Link to="gigawei">gigawei </Link> (or 1,000,000,000). <Link to="Gwei">Gwei </Link> is used for <Link to="gas">gas </Link> fees, or rather payments made by users to compensate for the computing energy required to process and validate transactions on the <Link to="Ethereum">Ethereum </Link> <Link to="blockchain">blockchain </Link>.</>,
  },
  "Gitcoin": {
    definition: <><Link to="Gitcoin">Gitcoin </Link> is a platform where coders and developers can get paid to work on open-source software in a wide variety of programming languages. Users can also submit their own project ideas to the <Link to="Gitcoin">Gitcoin </Link> platform in order to crowdsource funding from contributing donors. <Link to="Gitcoin">Gitcoin </Link></>,
  },
  "GitHub": {
    definition: <><Link to="GitHub">GitHub </Link> is an online software development platform. It&#x27;s used for storing, tracking, and collaborating on software projects. It makes it easy for developers to share code files and collaborate with fellow developers on open-source projects. <Link to="GitHub">GitHub </Link> also serves as a social networking site where developers can openly <Link to="network">network </Link>, collaborate, and pitch their work. <Link to="GitHub">GitHub </Link></>,
  },
  "Goerli": {
    definition: <><Link to="Goerli">Goerli </Link> is a test networks. It is primarily used for development on the <Link to="blockchain">blockchain </Link> (testing out applications and smart contracts, etc). <Link to="ETH">ETH </Link> on these testnets is a dummy balance and cannot be withdrawn or sent to <Link to="mainnet">mainnet </Link>.</>,
  },
  "Governance": {
    definition: <>In the world of cryptocurrencies, <Link to="governance">governance </Link> is defined as the people or organizations that have decision-making powers regarding the project. <Link to="Governance">Governance </Link> is an essential aspect of all <Link to="cryptocurrency">cryptocurrency </Link> projects. As decentralized blockchains, cryptocurrencies often have a very liberal <Link to="governance">governance </Link> structure. There are a number of different approaches to <Link to="governance">governance </Link>. <Link to="Governance">Governance </Link></>,
  },
  "GSN": {
    definition: <>Abbreviation for <Link to="Gas">Gas </Link> Station <Link to="Network">Network </Link></>,
  },
  "gwei": {
    definition: <>A minuscule and common denomination of <Link to="ETH">ETH </Link>, and the unit in which <Link to="gas">gas </Link> prices are often specified. See &#x27;ether (denominations)&#x27; entry for more information.</>,
  },
  "halving": {
    definition: <>Many cryptocurrencies have a finite supply, which makes them a scarce digital commodity. For example, the total amount of bitcoin that will ever be issued is 21 million. The number of bitcoins generated per block is decreased 50% every four years. This is called “<Link to="halving">halving </Link>.” The final <Link to="halving">halving </Link> will take place in the year 2140.</>,
  },
  "hard fork": {
    definition: <>A <Link to="hard fork">hard fork </Link> occurs when there is a change in the <Link to="blockchain">blockchain </Link> that is not backward compatible (not compatible with older versions), thus requiring all participants to <Link to="upgrade">upgrade </Link> to the new version in order to be able to continue participating on the <Link to="network">network </Link>. See also &#x27;<Link to="fork">fork </Link>&#x27;.</>,
  },
  "hardware wallet": {
    definition: <>A <Link to="hardware wallet">hardware wallet </Link> is a physical device that is used to store cryptographic keys, and generally, sign transactions. Some hardware wallets can be connected physically or through software to internet connectivity; others are ‘air-gapped’, receiving <Link to="transaction">transaction </Link> requests and sending <Link to="transaction">transaction </Link> approvals through a mechanism such as a <Link to="QR code">QR code </Link>. The overall goal of using a <Link to="hardware wallet">hardware wallet </Link> to manage keys and signatures is to reduce the likelihood of your keys or <Link to="Secret Recovery Phrase">Secret Recovery Phrase </Link> from being somehow stolen or compromised, due to being connected to the Internet. For more on hardware wallets, see <Link to="MetaMask">MetaMask </Link>’s <Link to="Hardware Wallet">Hardware Wallet </Link> Hub: <Link to="Hardware Wallet">Hardware Wallet </Link> Hub</>,
  },
  "hash (noun)": {
    definition: <>In computing, ‘hashing’ is an operation performed on lists or sets of data to create a reliable index for that data. A particular datum, or a reference to it, is fed into an <Link to="algorithm">algorithm </Link>, which transforms the datum and returns a standardized, and generally unrecognizable, ‘hash’ of it, sometimes referred to as that datum or file’s “digital fingerprint.” Each block in a <Link to="blockchain">blockchain </Link> contains the hash value that validated the block before it, followed by its own hash value (this is how the continuity of the ‘chain’ is constructed). Hashes can be used to confirm that <Link to="blockchain">blockchain </Link> transactions are complete and valid. You may see references to the “<Link to="transaction">transaction </Link> hash” or “tx hash”; this should be understood as “unique identifier of the <Link to="transaction">transaction </Link>”.</>,
  },
  "hexadecimal; 'hex data'": {
    definition: <>Hexadecimal is a base 16, rather than base 10, counting system. Used all over <Link to="Ethereum">Ethereum </Link> for a variety of things, a hexadecimal string is comprised of the numbers 0 1 2 3 4 5 6 7 8 9 and letters A B C D E F.</>,
  },
  "Hierarchical Deterministic (HD) wallet": {
    definition: <>Hierarchical Deterministic wallets were first created for Bitcoin, and enable the creation of a very large number of accounts based on an initial <Link to="seed phrase">seed phrase </Link>. This technology was later adopted in <Link to="Ethereum">Ethereum </Link> wallets; when restoring a <Link to="MetaMask">MetaMask </Link> <Link to="wallet">wallet </Link> from the <Link to="Secret Recovery Phrase">Secret Recovery Phrase </Link>, for example, if you &#x27;create&#x27; accounts, they will be the same accounts as previously created from that same phrase; they are derived from it.</>,
  },
  "hot storage": {
    definition: <>Synonymous with &#x27;<Link to="hot wallet">hot wallet </Link>&#x27;.</>,
  },
  "hot wallet": {
    definition: <>A <Link to="wallet">wallet </Link> that is directly connected to the internet at all times; for example, one that is held on a centralized <Link to="exchange">exchange </Link>. Hot wallets are considered to have lower security than <Link to="cold storage">cold storage </Link> systems or hardware wallets.</>,
  },
  "Hybrid Network": {
    definition: <>Hybrid <Link to="blockchain">blockchain </Link>. See &#x27;<Link to="PoS/PoW Hybrid">PoS/PoW Hybrid </Link>&#x27;</>,
  },
  "Hyperledger": {
    definition: <><Link to="Hyperledger">Hyperledger </Link> is an <Link to="ecosystem">ecosystem </Link> of open-system tools, libraries, and products designed to enable and support enterprise-grade <Link to="blockchain">blockchain </Link> technology. In general, the products focus on creating solutions for permissioned blockchains--that is, non-public blockchains, with alternative <Link to="consensus">consensus </Link> mechanisms other than Proof of Work (PoW) or Proof of Stake (PoS). That said, there are use cases where such institutions would want to integrate with public blockchains, and for that reason <Link to="Hyperledger">Hyperledger </Link> Besu and <Link to="Hyperledger">Hyperledger </Link> Burrow are actively developed projects, the former being a Java-based <Link to="Ethereum">Ethereum </Link> client, the latter being a <Link to="smart contract">smart contract </Link> platform which supports <Link to="EVM">EVM </Link> <Link to="bytecode">bytecode </Link>.</>,
  },
  "ICO": {
    definition: <>An Initial <Link to="Coin">Coin </Link> Offering (also called <Link to="ICO">ICO </Link>) occurs when a new <Link to="token">token </Link> project sells advance tokens in <Link to="exchange">exchange </Link> for upfront capital. These have been a vehicle for fraud and scams, and as such are subject to ever-evolving regulation and legislation.</>,
  },
  "Identicon / AddressIdenticon / AddressIcon": {
    definition: <>The colorful blob of colors that corresponds to your address in <Link to="MetaMask">MetaMask </Link>. It is an easy way to see if your address is correct. More specifically, you can choose between jazzicons (created by the <Link to="MetaMask">MetaMask </Link> team!) or blockies.</>,
  },
  "immutability": {
    definition: <>The inability to be altered or changed. This is a key element of <Link to="blockchain">blockchain </Link> networks: once written onto a <Link to="blockchain">blockchain </Link> <Link to="ledger">ledger </Link>, data cannot be altered. This <Link to="immutability">immutability </Link> provides the basis for commerce and trade to take place on <Link to="blockchain">blockchain </Link> networks.</>,
  },
  "Infura": {
    definition: <>Part of <Link to="ConsenSys">ConsenSys </Link>, <Link to="Infura">Infura </Link> offers backend access to the <Link to="Ethereum">Ethereum </Link> <Link to="network">network </Link> over established HTTP and WebSockets technology. Prior to <Link to="Infura">Infura </Link>, developers were obligated to run their own nodes of the networks with which they wanted to interact; <Link to="Infura">Infura </Link> provides that access through a set of APIs. This enables developers of dapps and websites seeking to interact with the <Link to="Ethereum">Ethereum </Link> <Link to="blockchain">blockchain </Link> to do so, and at scale. <Link to="Infura">Infura </Link></>,
  },
  "Initial Public Offering (IPO)": {
    definition: <>An initial public offering (IPO) is the process of a company offering shares for purchase on the stock market for the first time. IPO</>,
  },
  "Insider Trading": {
    definition: <><Link to="Insider trading">Insider trading </Link> happens when someone purchases or sells stocks while possessing private, material information about that stock. <Link to="Insider Trading">Insider Trading </Link></>,
  },
  "Inter-Blockchain Communication (IBC) Protocol": {
    definition: <>Inter-<Link to="Blockchain">Blockchain </Link> Communication (IBC) is a communication <Link to="protocol">protocol </Link> that allows different blockchains to relay messages to each other. It guarantees reliable, ordered and authenticated communication between the chains. Blockchains can trustlessly <Link to="exchange">exchange </Link> value like tokens. IBC does not work like a <Link to="bridge">bridge </Link>. Instead, blockchains send packets of information via smart contracts that allow them to not only <Link to="exchange">exchange </Link> value but relay any form of data, such as communication, via the communication <Link to="protocol">protocol </Link>. Inter-<Link to="Blockchain">Blockchain </Link> Communication (IBC)</>,
  },
  "internal transaction": {
    definition: <>An <Link to="internal transaction">internal transaction </Link> on the <Link to="Ethereum">Ethereum </Link> <Link to="network">network </Link> is one that occurs between smart contracts, rather than between addresses. Notably, they are not included on the <Link to="blockchain">blockchain </Link>, and therefore do not incur <Link to="gas">gas </Link> fees, but they are often crucial to carrying out the action in question, and can be viewed on <Link to="Etherscan">Etherscan </Link>. For more detail, see <Link to="MetaMask">MetaMask </Link>&#x27;s article on the topic: Internal Transactions</>,
  },
  "Interoperability": {
    definition: <><Link to="Blockchain">Blockchain </Link> <Link to="interoperability">interoperability </Link>, or cross-chain <Link to="interoperability">interoperability </Link>, is the ability to see and share information across multiple blockchains. One of the clear benefits of <Link to="blockchain">blockchain </Link> <Link to="interoperability">interoperability </Link> is being able to trade assets across various blockchains without the need for a centralized, custodial <Link to="exchange">exchange </Link>. <Link to="Interoperability">Interoperability </Link></>,
  },
  "InterPlanetary File System (IPFS)": {
    definition: <>A decentralized file storage and referencing system for the <Link to="Ethereum">Ethereum </Link> <Link to="blockchain">blockchain </Link>, and the internet as a whole. IFPS is an open source <Link to="protocol">protocol </Link> that enables storing and sharing hypermedia (text, audio, visual) in a distributed manner without relying on a single point of failure. This distributed file system enables applications to run faster, safer and more transparently.</>,
  },
  "IP address": {
    definition: <>A unique string of characters that identifies each computer using the Internet <Link to="Protocol">Protocol </Link> to communicate over a <Link to="network">network </Link>.</>,
  },
  "JSON file": {
    definition: <>JSON (JavaScript Object Notation) is an open standard file format for sharing data that uses human-readable text to store and transmit data. it is commonly used in <Link to="public blockchain">public blockchain </Link> systems to move data.</>,
  },
  "JSON-RPC": {
    definition: <><Link to="JSON-RPC">JSON-RPC </Link> is, quite simply, a method used to move data around computer systems, and predates <Link to="public blockchain">public blockchain </Link> technology. It was chosen as a standard for moving data between <Link to="blockchain">blockchain </Link> networks and Internet browsers and wallets, with the result that these networks have come to be called &#x27;<Link to="RPC">RPC </Link> networks&#x27;, despite <Link to="JSON-RPC">JSON-RPC </Link> not being their defining technical feature.</>,
  },
  "keystore file": {
    definition: <>A <Link to="keystore file">keystore file </Link> is a special, encrypted version of a <Link to="private key">private key </Link> in JSON format. See also &#x27;<Link to="private key">private key </Link>&#x27;.</>,
  },
  "Know Your Customer (KYC)": {
    definition: <>A process in which a business must verify the identity and background information (address, financial details, etc.) of their customers. For example, current regulations and laws require banks and other financial institutions to keep and report customers&#x27; personal information and transactions.</>,
  },
  "Know Your Transaction": {
    definition: <><Link to="Know Your Transaction">Know Your Transaction </Link> (<Link to="KYT">KYT </Link>) is a process employed by financial institutions to monitor the merchants&#x27; businesses through the analysis of <Link to="transaction">transaction </Link> data.</>,
  },
  "Kovan": {
    definition: <>An <Link to="Ethereum">Ethereum </Link> testnet that uses Proof of Authority <Link to="consensus">consensus </Link>, available through <Link to="MetaMask">MetaMask </Link>; <Link to="Kovan">Kovan </Link> test <Link to="network">network </Link> has been deprecated. <Link to="Ethereum">Ethereum </Link> used to have four testnets: <Link to="Ropsten">Ropsten </Link>, <Link to="Rinkeby">Rinkeby </Link>, <Link to="Goerli">Goerli </Link>, and <Link to="Kovan">Kovan </Link> (Kiln was also added for specific purposes relating to the <Link to="Merge">Merge </Link> in 2022). However, after the <Link to="Merge">Merge </Link> occurred on September 15th 2022, most of the existing testnets began being deprecated (taken out of service). They may still work, but could be unreliable. <Link to="Sepolia">Sepolia </Link> and <Link to="Goerli">Goerli </Link> are now the only two available.</>,
  },
  "KYC": {
    definition: <>Acronym; see &#x27;Know Your Customer&#x27;.</>,
  },
  "KYT": {
    definition: <>Acronym; see &#x27;<Link to="Know Your Transaction">Know Your Transaction </Link>&#x27;.</>,
  },
  "latency": {
    definition: <>In the context of <Link to="Network">Network </Link> <Link to="latency">latency </Link>: refers to the amount of time it takes for a computer on one <Link to="network">network </Link> to communicate with a computer on another <Link to="network">network </Link>. <Link to="Network">Network </Link> <Link to="latency">latency </Link></>,
  },
  "Lattice1": {
    definition: <>The <Link to="Lattice1">Lattice1 </Link> is a powerful, secure, and user-friendly <Link to="hardware wallet">hardware wallet </Link> that allows you to manage an unlimited number of wallets and easily transact on the <Link to="blockchain">blockchain </Link>.</>,
  },
  "Launchpad": {
    definition: <>The <Link to="Launchpad">Launchpad </Link> is the <Link to="Ethereum">Ethereum </Link> Foundation&#x27;s official way to <Link to="deposit">deposit </Link> your <Link to="ETH">ETH </Link> for staking on <Link to="Ethereum">Ethereum </Link>. <Link to="Ethereum">Ethereum </Link> <Link to="Launchpad">Launchpad </Link></>,
  },
  "layer 0": {
    definition: <><Link to="Layer 0">Layer 0 </Link> in <Link to="blockchain">blockchain </Link> refers to the underlying infrastructure that supports the <Link to="blockchain">blockchain </Link> <Link to="network">network </Link>. It includes the physical hardware, such as computers, servers, and other <Link to="network">network </Link> components, as well as the software protocols that govern the interactions between the nodes in the <Link to="network">network </Link>. In other words, <Link to="Layer 0">Layer 0 </Link> is the foundation upon which the <Link to="blockchain">blockchain </Link> <Link to="network">network </Link> is built. It provides the necessary resources and technical capabilities for the <Link to="network">network </Link> to function, such as computing power, storage, and <Link to="network">network </Link> connectivity. <Link to="Layer 0">Layer 0 </Link> is essential to the operation and security of the <Link to="blockchain">blockchain </Link> <Link to="network">network </Link>, as it ensures that data is transmitted and stored correctly and securely across the <Link to="network">network </Link>. <Link to="Layer 0">Layer 0 </Link> is sometimes also referred to as &#x27;Layer Zero&#x27; or &#x27;L0&#x27;. It is important to note that the concept of <Link to="Layer 0">Layer 0 </Link> is not unique to <Link to="blockchain">blockchain </Link> technology, but is a more general term used to describe the physical and technical infrastructure underlying any type of computer <Link to="network">network </Link>.</>,
  },
  "layer 1": {
    definition: <><Link to="Layer 1">Layer 1 </Link> in <Link to="blockchain">blockchain </Link> refers to the base layer of the <Link to="blockchain">blockchain </Link> <Link to="protocol">protocol </Link>. It is the layer that contains the core elements of the <Link to="blockchain">blockchain </Link>, including the <Link to="consensus">consensus </Link> mechanism, the data structure, and the rules that govern the creation and transfer of assets or tokens. In other words, <Link to="Layer 1">Layer 1 </Link> is the foundation of the <Link to="blockchain">blockchain </Link> technology stack, upon which all other layers and applications are built. It is responsible for maintaining the integrity of the <Link to="blockchain">blockchain </Link> <Link to="network">network </Link> and ensuring that all transactions are valid and secure. <Link to="Layer 1">Layer 1 </Link> is designed to be decentralized, meaning that no single entity has control over the <Link to="network">network </Link>. This is achieved through the use of <Link to="consensus">consensus </Link> mechanisms, such as Proof of Work (PoW), Proof of Stake (PoS), or other methods, which enable participants to reach agreement on the validity of transactions and the <Link to="state">state </Link> of the <Link to="network">network </Link>. Some examples of <Link to="Layer 1">Layer 1 </Link> <Link to="blockchain">blockchain </Link> protocols include Bitcoin, <Link to="Ethereum">Ethereum </Link>, <Link to="Binance">Binance </Link> Smart Chain, <Link to="Avalanche">Avalanche </Link>.</>,
  },
  "layer 2": {
    definition: <>A <Link to="Layer 2">Layer 2 </Link> <Link to="network">network </Link>, or L2, is a <Link to="blockchain">blockchain </Link> that is built specifically to scale another <Link to="network">network </Link>. For a full understanding of how this is achieved, see here. Some popular examples of this in the <Link to="Ethereum">Ethereum </Link> <Link to="ecosystem">ecosystem </Link> are <Link to="Arbitrum">Arbitrum </Link>, <Link to="Optimism">Optimism </Link>, and StarkNet. These chains are specifically built to handle a large number of transactions quickly by relying on <Link to="Ethereum">Ethereum </Link> <Link to="Mainnet">Mainnet </Link> for security functions, while optimizing for speed and scale. These networks are considered &#x27;<Link to="scaling">scaling </Link> solutions&#x27; while not being part of <Link to="Ethereum">Ethereum </Link>&#x27;s <Link to="protocol">protocol </Link>-level <Link to="scaling">scaling </Link> efforts. See also &#x27;<Link to="blockchain">blockchain </Link> trilemma&#x27;, &#x27;<Link to="modular blockchain">modular blockchain </Link>&#x27;, &#x27;<Link to="Serenity">Serenity </Link>&#x27;. Contrast with &#x27;<Link to="sidechain">sidechain </Link>&#x27;.</>,
  },
  "Learn; MetaMask Learn": {
    definition: <><Link to="MetaMask">MetaMask </Link> Learn is a free-to-use educational platform available in 10 languages for anyone interested in learning about web3. Through engaging lessons and interactive simulations, it helps you understand what web3 is, why it matters, and how to get started. https://learn.<Link to="metamask">metamask </Link>.io/</>,
  },
  "Ledger": {
    definition: <></>,
  },
  "Ledger Live App": {
    definition: <><Link to="Ledger">Ledger </Link> Live is a <Link to="hardware wallet">hardware wallet </Link> interface app for users of the <Link to="Ledger">Ledger </Link> Nano X, <Link to="Ledger">Ledger </Link> Nano S, and <Link to="Ledger">Ledger </Link> Blue. The app enables <Link to="Ledger">Ledger </Link> users to manage their <Link to="cryptocurrency">cryptocurrency </Link> hardware and assets. Additionally, it features real-time price updates, multi-<Link to="account">account </Link> management, and the convenience of an extremely simple setup process. <Link to="Ledger">Ledger </Link> Live combines the management of your individual crypto assets and device management into one interface, with the intention of gradually replacing the <Link to="Chrome">Chrome </Link>-based applications system that previously annoyed some users of the device.</>,
  },
  "Library": {
    definition: <>A collection of non-volatile resources used by computer programs, often for software development. These may include configuration data, documentation, help data, message templates, pre-written code and subroutines, classes, values or type specifications. Software <Link to="Library">Library </Link></>,
  },
  "Lido": {
    definition: <><Link to="Lido">Lido </Link> is a liquid staking <Link to="protocol">protocol </Link> for <Link to="Ethereum">Ethereum </Link> that allows users with less than 32 <Link to="ETH">ETH </Link> to collectively fund new validators and receive rewards.</>,
  },
  "light client": {
    definition: <>In computing, a &#x27;client&#x27; is a software that runs or accesses a program made available by a remote computer. With <Link to="blockchain">blockchain </Link> networks, then, clients are the programs that sync <Link to="blockchain">blockchain </Link> data and participate in <Link to="network">network </Link> <Link to="consensus">consensus </Link>. More often and more specifically, &#x27;<Link to="Layer 2">Layer 2 </Link>&#x27; is used as a noun, to refer to a type of <Link to="network">network </Link> that is specifically built to handle a large number of transactions quickly by relying on <Link to="Ethereum">Ethereum </Link> <Link to="mainnet">mainnet </Link> for security functions, and optimizing for speed and scale. Examples include <Link to="Arbitrum">Arbitrum </Link> and <Link to="Optimism">Optimism </Link>; this is different from a &#x27;<Link to="sidechain">sidechain </Link>&#x27;, which is a <Link to="network">network </Link> that has its own security mechanism, yet still allows compatibility and bridging of assets between itself and <Link to="Ethereum">Ethereum </Link>.</>,
  },
  "Lightning Network": {
    definition: <>The <Link to="Lightning Network">Lightning Network </Link> is a second layer for Bitcoin that uses micropayment channels to scale the <Link to="blockchain">blockchain </Link>’s capability to conduct transactions more efficiently. This layer consists of multiple payment channels between parties or Bitcoin users. A <Link to="Lightning Network">Lightning Network </Link> channel is a <Link to="transaction">transaction </Link> mechanism between two parties. Using channels, the parties can make or receive payments from each other. Transactions conducted on the <Link to="Lightning Network">Lightning Network </Link> are faster, less costly, and more readily confirmed than those conducted directly on the Bitcoin <Link to="blockchain">blockchain </Link>.</>,
  },
  "liquid democracy (delegative democracy)": {
    definition: <>A government system where votes can be delegated or proxied to other individuals such as friends, politicians, or subject matter experts. For example, in a liquid democracy, Bernadette could give Ahmad her vote and Ahmad would then vote for both himself and Bernadette. Liquid democracy is used at times as a <Link to="governance">governance </Link> mechanism for Decentralized Autonomous Organizations (DAOs) wherein every participant is able to vote or delegate their vote to another individual.</>,
  },
  "liquidation": {
    definition: <><Link to="Liquidation">Liquidation </Link> happens when a trader has insufficient funds to keep a leveraged trade open. <Link to="Liquidation">Liquidation </Link></>,
  },
  "liquidity": {
    definition: <>An asset is considered more ‘liquid’ if it can easily be converted into cash, and therefore, ‘<Link to="liquidity">liquidity </Link>’ refers to the availability of assets to a company or market. Conversely, the harder it is to turn an asset into cash, the more illiquid the asset. For example, stocks are considered relatively liquid assets, as they can be easily converted to cash, while real estate is considered an illiquid asset. The <Link to="liquidity">liquidity </Link> of an asset affects its risk potential and market price.</>,
  },
  "liquidity pool": {
    definition: <>A <Link to="liquidity">liquidity </Link> pool is a crowdsourced pool of cryptocurrencies or tokens locked in a <Link to="smart contract">smart contract </Link> that is used to facilitate trades between the assets on a decentralized <Link to="exchange">exchange </Link> (<Link to="DEX">DEX </Link>). Instead of traditional markets of buyers and sellers, many <Link to="decentralized finance">decentralized finance </Link> (DeFi) platforms use automated market makers (AMMs), which allow digital assets to be traded in an automatic and permissionless manner through the use of <Link to="liquidity">liquidity </Link> pools.</>,
  },
  "liquidity staking": {
    definition: <>Liquid staking allows users to stake tokens and simultaneously use them in the DeFi <Link to="ecosystem">ecosystem </Link>. This is made possible by <Link to="wrapping">wrapping </Link> the staked tokens and providing users with a wrapped <Link to="token">token </Link> that is a claim on the underlying collateral. The wrapped tokens can be transferred and generate yield. Liquid staking permits users to stake and unstake their coins without being beholden to a lock-up period. It thus enables greater capital efficiency and increased <Link to="liquidity">liquidity </Link> on proof-of-stake blockchains, allowing users to maximize the benefits of staking and DeFi simultaneously. Furthermore, liquid staking enhances <Link to="network">network </Link> security on PoS chains.</>,
  },
  "Low": {
    definition: <>In the context of &#x27;<Link to="gas">gas </Link> fees&#x27;, <Link to="Low">Low </Link> is a category that allows you to wait a bit longer and save money if you choose. There are 3 categories available in <Link to="MetaMask">MetaMask </Link>: <Link to="Low">Low </Link>, Market, <Link to="Aggressive">Aggressive </Link> Using <Link to="Advanced">Advanced </Link> <Link to="Gas">Gas </Link> Controls</>,
  },
  "mainnet": {
    definition: <>The primary <Link to="network">network </Link> where actual transactions take place on a specific <Link to="distributed ledger">distributed ledger </Link>. For example, The <Link to="Ethereum">Ethereum </Link> <Link to="Mainnet">Mainnet </Link> (capitalized in this case) is the <Link to="public blockchain">public blockchain </Link> where <Link to="network">network </Link> validation and transactions take place</>,
  },
  "Maker Protocol": {
    definition: <>The <Link to="Maker Protocol">Maker Protocol </Link>, built on the <Link to="Ethereum">Ethereum </Link> <Link to="blockchain">blockchain </Link>, enables users to create and hold currency. Current elements of the <Link to="Maker Protocol">Maker Protocol </Link> are the <Link to="DAI">DAI </Link> stable <Link to="coin">coin </Link>, Maker Vaults, and Voting. MakerDAO governs the <Link to="Maker Protocol">Maker Protocol </Link> by deciding on key parameters (e.g., stability fees, collateral types and rates, etc.)</>,
  },
  "malware": {
    definition: <>Any software intentionally designed to cause disruption to a computer, server, client, or computer <Link to="network">network </Link>, leak private information, gain unauthorized access to information or systems, deprive access to information, or which unknowingly interferes with the user&#x27;s computer security and privacy.</>,
  },
  "market cap": {
    definition: <>Short for &#x27;market capitalization&#x27;, this refers to the total value held in a particular industry, market, company, or asset. For a publicly traded company, the <Link to="market cap">market cap </Link> is the total dollar market value of a company&#x27;s outstanding shares. For Bitcoin or <Link to="Ethereum">Ethereum </Link>, the total <Link to="market cap">market cap </Link> is a reflection of the current existing supply times the market price.</>,
  },
  "Maximal Extractable Value (MEV)": {
    definition: <>Originally known as Miner Extractable Value, MEV is a broad complex topic that refers to the inclusion, exclusion, and reordering of transactions within a block in order to extract more value from it, generally in excess of what a <Link to="validator">validator </Link> (or miner, on PoW networks) would earn from producing the block. MEV includes activities such as frontrunning, arbitrage, and what could be considered malicious actions to profit off of other users&#x27; transactions. This is a very active topic of research that is changing rapidly.</>,
  },
  "Maximum Priority Fee": {
    definition: <>The fee, or &#x27;<Link to="miner tip">miner tip </Link>&#x27;, goes to the <Link to="validator">validator </Link> or miner, and incentivizes them to prioritize your <Link to="transaction">transaction </Link>.</>,
  },
  "memory pool; mempool": {
    definition: <>a.k.a. <Link to="Transaction">Transaction </Link> Pool When a user submits a <Link to="transaction">transaction </Link> to the <Link to="Ethereum">Ethereum </Link> <Link to="network">network </Link>–or many other networks based on <Link to="Ethereum">Ethereum </Link>–the <Link to="transaction">transaction </Link> goes into what’s known as a “<Link to="transaction">transaction </Link> pool”, or “txpool” for short. This is essentially a queue of transactions that are waiting to be added to a block and recorded to the <Link to="blockchain">blockchain </Link>. There are mechanisms that determine which transactions are “picked up” and included in the next block, and there is currently a lot of research surrounding how this decision gets made. In Bitcoin, the <Link to="transaction">transaction </Link> pool was referred to as the “memory pool”, or “mempool”, and often these terms are used interchangeably.</>,
  },
  "Merge": {
    definition: <>Finalized in September 2022, the <Link to="Merge">Merge </Link> was the culmination of years of work involved in transitioning <Link to="Ethereum">Ethereum </Link> from a Proof of Work <Link to="consensus">consensus </Link> model, to Proof of Stake, all while keeping the <Link to="network">network </Link> live. This was successful, and reduced the <Link to="network">network </Link>’s carbon footprint by more than 99.9%.</>,
  },
  "Merkle Patricia trie": {
    definition: <>Often referred to simply as a &#x27;Merkle trie&#x27; (pronounced &#x27;tree&#x27;), a <Link to="Merkle Patricia trie">Merkle Patricia trie </Link> is a data structure in which a single hash code function (see &#x27;hash&#x27;) splits into smaller branches. In a similar way to a family tree, where a parent branch splits into child branches, which are then extrapolated into grandchild branches, a <Link to="Merkle Patricia trie">Merkle Patricia trie </Link> keeps a record of the filiation and history of each element. This type of data structure enables for faster verification on a <Link to="blockchain">blockchain </Link> <Link to="network">network </Link>.</>,
  },
  "Mesh": {
    definition: <><Link to="ConsenSys">ConsenSys </Link> <Link to="Mesh">Mesh </Link> is a <Link to="network">network </Link> of loosely coupled, tightly aligned teams, products, and investments advancing the <Link to="Ethereum">Ethereum </Link> <Link to="ecosystem">ecosystem </Link> and the arrival of web3.</>,
  },
  "metadata": {
    definition: <>In the context of &#x27;<Link to="NFT">NFT </Link> <Link to="metadata">metadata </Link>&#x27;: <Link to="Metadata">Metadata </Link> is &#x27;data that provides information about other data&#x27; <Link to="Metadata">Metadata </Link></>,
  },
  "MetaMask": {
    definition: <><Link to="MetaMask">MetaMask </Link>, either in its mobile app form on iOS and Android, or in its browser <Link to="extension">extension </Link> form, is a tool to access and interact with blockchains and the <Link to="decentralized web">decentralized web </Link>. It allows users to manage their <Link to="digital identity">digital identity </Link> and the permission of others to interact with that identity; its functions include that of a <Link to="wallet">wallet </Link>, a <Link to="dapp">dapp </Link> permissions manager, and access to <Link to="token">token </Link> swaps. It is an open-source project that encourages developers from other projects to build on top of it through <Link to="MetaMask">MetaMask </Link> Snaps.</>,
  },
  "MetaMask Bridge": {
    definition: <><Link to="MetaMask">MetaMask </Link> <Link to="Bridge">Bridge </Link>: You can now access a curated, straightforward bridging experience in <Link to="MetaMask">MetaMask </Link> <Link to="Bridge">Bridge </Link>, available at https://<Link to="portfolio">portfolio </Link>.<Link to="metamask">metamask </Link>.io/<Link to="bridge">bridge </Link> Only certain tokens and <Link to="network">network </Link> combinations are available initially. <Link to="MetaMask">MetaMask </Link> <Link to="Bridge">Bridge </Link></>,
  },
  "MetaMask Community Platform": {
    definition: <>The <Link to="MetaMask">MetaMask </Link> forums located at community.<Link to="metamask">metamask </Link>.io <Link to="MetaMask">MetaMask </Link>&#x27;s <Link to="community platform">community platform </Link> can be accessed here: <Link to="MetaMask">MetaMask </Link> Community</>,
  },
  "MetaMask Extension": {
    definition: <><Link to="MetaMask">MetaMask </Link> is a web browser <Link to="extension">extension </Link> and mobile app that allows you to manage your <Link to="Ethereum">Ethereum </Link> private keys. By doing so, it serves as a <Link to="wallet">wallet </Link> for Ether and other tokens, and allows you to interact with decentralized applications, or dapps. Unlike some wallets, <Link to="MetaMask">MetaMask </Link> keeps no information on you: not your email address, not your password, and not your <Link to="Secret Recovery Phrase">Secret Recovery Phrase </Link> or other private keys. You retain all power over your <Link to="crypto-">crypto- </Link>identity.</>,
  },
  "MetaMask Flask": {
    definition: <><Link to="MetaMask">MetaMask </Link> <Link to="Flask">Flask </Link> is a distribution of the software designed for developers. It&#x27;s like a laboratory (hence the name) where the <Link to="MetaMask">MetaMask </Link> team can try out new ideas and features. It has experimental, even dangerous functionality in it that is not meant for everyday use. It also doesn&#x27;t have the same stability guarantees that the production distribution of <Link to="MetaMask">MetaMask </Link> has. What is <Link to="MetaMask">MetaMask </Link> <Link to="Flask">Flask </Link>, and how is it different from normal <Link to="MetaMask">MetaMask </Link>?</>,
  },
  "MetaMask Institutional": {
    definition: <><Link to="MetaMask">MetaMask </Link> Institutional is an institution-compliant version of the world’s leading web3 <Link to="wallet">wallet </Link>, <Link to="MetaMask">MetaMask </Link>. Organizations trust us to manage their web3 access and engagement with institution-required security, operational efficiency, and compliance. <Link to="MetaMask">MetaMask </Link> Institutional</>,
  },
  "MetaMask Learn": {
    definition: <><Link to="MetaMask">MetaMask </Link> Learn is a free-to-use educational platform available in 10 languages for anyone interested in learning about web3. Through engaging lessons and interactive simulations, it helps you understand what web3 is, why it matters, and how to get started. <Link to="MetaMask">MetaMask </Link> Learn</>,
  },
  "MetaMask SDK": {
    definition: <><Link to="MetaMask">MetaMask </Link> SDK (Software Development Kit) is a <Link to="library">library </Link> that can be installed by developers in their projects. It will automatically guide their users to connect easily with a <Link to="MetaMask">MetaMask </Link> <Link to="Wallet">Wallet </Link> client. <Link to="MetaMask">MetaMask </Link> SDK</>,
  },
  "MetaMask Snaps": {
    definition: <>The first big feature shipped through <Link to="Flask">Flask </Link> has been <Link to="MetaMask">MetaMask </Link> Snaps. Snaps is a whole topic in and of itself, but think of it like this: Snaps allows developers to bring any kind of functionality they want to the application. Given how broad that is, and the potential security implications, snaps can only be used in <Link to="Flask">Flask </Link> at the moment; however, the plan is to allow users to customize their <Link to="MetaMask">MetaMask </Link> experience through this functionality.</>,
  },
  "MetaMetrics": {
    definition: <><Link to="MetaMetrics">MetaMetrics </Link> is an opt-in analytics platform that aims to collect information on non-sensitive user events to help us improve the software for <Link to="MetaMask">MetaMask </Link> users. How to manage your <Link to="MetaMetrics">MetaMetrics </Link> settings</>,
  },
  "metaverse": {
    definition: <>A <Link to="metaverse">metaverse </Link> is a digital universe that contains all the aspects of the real world, such as real-time interactions and economies. It offers a unique experience to end-users. <Link to="Metaverse">Metaverse </Link></>,
  },
  "miner tip": {
    definition: <>The <Link to="miner tip">miner tip </Link> is the <Link to="Maximum Priority Fee">Maximum Priority Fee </Link> that incentivizes the miner to prioritize a <Link to="transaction">transaction </Link>. Learn the basics of blockchains and <Link to="Ethereum">Ethereum </Link> (miners and validators, <Link to="gas">gas </Link>, cryptocurrencies and NFTs, <Link to="block explorer">block explorer </Link>, networks, etc.)</>,
  },
  "mining": {
    definition: <>The process by which blocks or transactions are verified and added to a <Link to="blockchain">blockchain </Link> using a Proof of Work (PoW) <Link to="consensus">consensus </Link> mechanism. In order to verify a block, a miner must use a computer to solve a cryptographic problem. Once the computer has solved the problem, the block is considered “mined” or verified. On Bitcoin or other PoW blockchains, the first computer to mine or verify the block receives bitcoin, or the equivalent <Link to="network">network </Link> <Link to="token">token </Link>, as a reward.</>,
  },
  "Mint": {
    definition: <>Minting refers to the act of publishing a <Link to="token">token </Link> on the <Link to="blockchain">blockchain </Link> to make it transferrable and purchasable.</>,
  },
  "mnemonic phrase": {
    definition: <>This is an alternative way of referring to a <Link to="Secret Recovery Phrase">Secret Recovery Phrase </Link>, also known as a &#x27;<Link to="seed phrase">seed phrase </Link>&#x27;: a series of words that correspond to a very long cryptographic key, used to generate and control all the addresses of a <Link to="crypto wallet">crypto wallet </Link>.</>,
  },
  "MobiKwik": {
    definition: <><Link to="MobiKwik">MobiKwik </Link> is an Indian payment service provider founded in 2009 that provides a mobile phone-based payment system and digital <Link to="wallet">wallet </Link>.</>,
  },
  "modular blockchain": {
    definition: <>Bitcoin is an example of a monolithic <Link to="blockchain">blockchain </Link>: all of the functions of the <Link to="network">network </Link> (<Link to="consensus">consensus </Link>, execution, data availability, and settlement) are run on one chain. This has significant drawbacks (see &#x27;<Link to="blockchain">blockchain </Link> trilemma&#x27; for more). A <Link to="modular blockchain">modular blockchain </Link>, on the other hand, separates some or all of these functions into separate chains, each one optimized for its specific function, and relying on the other chains for the other functions. <Link to="Ethereum">Ethereum </Link> is currently moving towards modularization, both on a <Link to="protocol">protocol </Link> level beginning with the <Link to="Merge">Merge </Link>, which split <Link to="consensus">consensus </Link> and execution into two chains, and at the level of &#x27;<Link to="Layer 2">Layer 2 </Link>&#x27; networks which provide optimized execution environments, and then &#x27;roll up&#x27; their data to <Link to="Ethereum">Ethereum </Link> for its <Link to="consensus">consensus </Link> functionality.</>,
  },
  "MoonPay": {
    definition: <><Link to="MoonPay">MoonPay </Link> is a financial technology company that builds payments infrastructure for crypto. Its on-and-off-ramp suite of products provides a seamless experience for converting between fiat currencies and cryptocurrencies using all major payment methods, including debit and credit cards, local bank transfers, <Link to="Apple Pay">Apple Pay </Link>, Google Pay, and <Link to="Samsung Pay">Samsung Pay </Link>. <Link to="MoonPay">MoonPay </Link> is active in more than 160 countries and is trusted by 300+ leading wallets, websites, and applications to accept payments and defeat fraud. The company is based in Miami, Florida, and was founded in 2019.</>,
  },
  "multi-sig": {
    definition: <>multi-signature <Link to="wallet">wallet </Link> (multisig) A <Link to="crypto-">crypto- </Link>asset <Link to="wallet">wallet </Link> which requires multiple keys in order to access and transact. Typically, a specified number of individuals are required to approve or “sign” a <Link to="transaction">transaction </Link> before they are able to access the <Link to="wallet">wallet </Link>. This is different from most wallets, which only require one signature to approve a <Link to="transaction">transaction </Link>.</>,
  },
  "multi-signature wallet (multisig)": {
    definition: <>A <Link to="crypto-">crypto- </Link>asset <Link to="wallet">wallet </Link> which requires multiple keys in order to access and transact. Typically, a specified number of individuals are required to approve or “sign” a <Link to="transaction">transaction </Link> before they are able to access the <Link to="wallet">wallet </Link>. This is different from most wallets, which only require one signature to approve a <Link to="transaction">transaction </Link>.</>,
  },
  "Multifactor Authentication": {
    definition: <>Authentication using two or more different factors to achieve authentication.</>,
  },
  "Near-Field Communication (NFC)": {
    definition: <>Near-field communication is a set of communication protocols that enables communication between two electronic devices over a distance of 4 cm or less. NFC offers a <Link to="low">low </Link>-speed connection through a simple setup that can be used to bootstrap more capable wireless connections..</>,
  },
  "Nested Blockchain": {
    definition: <>A <Link to="nested blockchain">nested blockchain </Link> is essentially a <Link to="blockchain">blockchain </Link> within — or, rather, atop — another <Link to="blockchain">blockchain </Link>. See &#x27;<Link to="Layer 2">Layer 2 </Link>&#x27;</>,
  },
  "Network": {
    definition: <>A <Link to="network">network </Link> refers to all nodes in the operation of a <Link to="blockchain">blockchain </Link> at any given moment in time.</>,
  },
  "Network Congestion": {
    definition: <>The reduced quality of service that occurs when a <Link to="network">network </Link> <Link to="node">node </Link> or link is carrying more data than it can handle. Typical effects include queueing delay, packet loss or the blocking of new connections. Congestion</>,
  },
  "NFT": {
    definition: <>When discussing Non-Fungible Tokens (NFTs), “fungibility” refers to an object’s ability to be exchanged for another. For example, an individual dollar is considered fungible, as one dollar is fully interchangeable with another. Artwork is usually deemed non-fungible, as paintings or sculptures are likely to be unequal between them in quality, value, or other attributes. A <Link to="non-fungible token">non-fungible token </Link> is a type of <Link to="token">token </Link> that is a unique <Link to="digital asset">digital asset </Link> and has no equal <Link to="token">token </Link>. This is in contrast to cryptocurrencies like ether that are fungible in nature.</>,
  },
  "NFT aggregator": {
    definition: <>In the initial wave of interest in buying and selling NFTs, a number of <Link to="NFT">NFT </Link> marketplaces--websites where you can buy and sell NFTs--were created. As the market matured, aggregators appeared, which offer the user the ability to view available stock and price, buy and sell across marketplaces from a single unified application. Similar to familiar web2 shopping portals, these have come to be known as <Link to="NFT">NFT </Link> Marketplace Aggregators, or just <Link to="NFT">NFT </Link> Aggregators.</>,
  },
  "NFT drop": {
    definition: <>An <Link to="NFT">NFT </Link> drop happens when a new <Link to="NFT">NFT </Link> collection is released. <Link to="NFT">NFT </Link> drops can vary in both how the NFTs are sold (listed for sale or auction), and in who they’re released to (the public, or a specific list called an “allowlist”). Often, <Link to="NFT">NFT </Link> drops coincide with when the NFTs in the collection are minted, that is, written to the <Link to="blockchain">blockchain </Link>. You might hear these terms used interchangeably— a drop might be referred to as the project’s <Link to="mint">mint </Link>.</>,
  },
  "Ngrave": {
    definition: <>Crypto <Link to="hardware wallet">hardware wallet </Link>.</>,
  },
  "node": {
    definition: <>Public blockchains consist of a <Link to="network">network </Link> of computers which sync the <Link to="network">network </Link>&#x27;s data, coordinate <Link to="transaction">transaction </Link> requests, and participate in <Link to="consensus">consensus </Link> regarding the validity of those transactions; each one of these computers is called a &#x27;<Link to="node">node </Link>&#x27;. A <Link to="full node">full node </Link> is a computer that can fully validate transactions and download the entire data of a specific <Link to="blockchain">blockchain </Link>. In contrast, a “lightweight” or “light” <Link to="node">node </Link> does not download all pieces of a <Link to="blockchain">blockchain </Link>’s data, and uses a different validation process.</>,
  },
  "Non-fungible token": {
    definition: <>See <Link to="NFT">NFT </Link></>,
  },
  "nonce": {
    definition: <>The word ‘<Link to="nonce">nonce </Link>’ has a few different meanings, and in different contexts, it ends up getting used a lot of different ways. Originally formed from a contraction of a phrase meaning “not more than once”, on the <Link to="Ethereum">Ethereum </Link> <Link to="Mainnet">Mainnet </Link>, “<Link to="nonce">nonce </Link>” refers to a unique <Link to="transaction">transaction </Link> identification number that increases in value with each successive <Link to="transaction">transaction </Link> in order to ensure various safety features (such as preventing a double-spend). Note that due to its broader use in <Link to="cryptography">cryptography </Link>, you may encounter ‘<Link to="nonce">nonce </Link>’ being used differently on other sidechains or decentralized projects.</>,
  },
  "off-chain": {
    definition: <>A <Link to="transaction">transaction </Link> that is processed outside the <Link to="blockchain">blockchain </Link> <Link to="network">network </Link> with an increased speed and reduced cost. There are two different transactions that occur on the <Link to="blockchain">blockchain </Link>: <Link to="On-chain">On-chain </Link> transactions are those reflected on the <Link to="distributed ledger">distributed ledger </Link> and are visible to all the <Link to="network">network </Link> users. On the other hand, <Link to="off-chain">off-chain </Link> transactions occur outside the <Link to="blockchain">blockchain </Link> <Link to="network">network </Link>. Such a <Link to="transaction">transaction </Link> doesn’t need the services of miners because no <Link to="ledger">ledger </Link> verification is conducted. Unlike <Link to="on-chain">on-chain </Link> transactions, <Link to="off-chain">off-chain </Link> transactions can be made instantly. This method entails lower fees, happens instantly, and offers more anonymity.</>,
  },
  "ommer block": {
    definition: <>Under the Proof of Work (PoW) <Link to="consensus">consensus </Link> mechanism, miners received rewards for being the first to mine a new block. However, at times a block would be mined just after, and in competition with, the last block. This block, known as an ommer and previously as an uncle, could get rolled into subsequent blocks and the miner of the original ommer would get a partial <Link to="block reward">block reward </Link>. All of this functionality was deprecated as of the launch of the <Link to="Beacon Chain">Beacon Chain </Link>.</>,
  },
  "on-chain": {
    definition: <><Link to="On-chain">On-chain </Link>, as the name implies, refers to <Link to="blockchain">blockchain </Link> transactions that exist on and have been verified to the <Link to="blockchain">blockchain </Link> by miners or validators. <Link to="On-Chain">On-Chain </Link> also means that transactions have been recorded to the <Link to="blockchain">blockchain </Link></>,
  },
  "on-ramp, off-ramp": {
    definition: <>Based on a metaphor from the American highway system, &#x27;on-ramp&#x27; refers to a tool, or a service provider, or the action, of converting <Link to="fiat currency">fiat currency </Link> into tokens on a <Link to="blockchain">blockchain </Link>. Conversely, &#x27;off-ramp&#x27; refers to exchanging <Link to="on-chain">on-chain </Link> assets for their value in a given <Link to="fiat currency">fiat currency </Link>. There are many providers of such services, and <Link to="MetaMask">MetaMask </Link> users have access to them through the &#x27;Buy Crypto&#x27; feature.</>,
  },
  "OpenSea": {
    definition: <><Link to="OpenSea">OpenSea </Link> is the world&#x27;s first and largest web3 marketplace for NFTs and crypto collectibles.</>,
  },
  "Opera": {
    definition: <>Internet browser.</>,
  },
  "Optimism": {
    definition: <><Link to="Optimism">Optimism </Link> is a layer-2 <Link to="scaling">scaling </Link> solution for <Link to="Ethereum">Ethereum </Link>, which is a <Link to="blockchain">blockchain </Link>-based platform for decentralized applications. It is designed to reduce the cost and increase the speed of transactions on the <Link to="Ethereum">Ethereum </Link> <Link to="network">network </Link>. <Link to="Optimism">Optimism </Link> works by using a technique called optimistic <Link to="rollups">rollups </Link>, which allows it to process a large number of transactions <Link to="off-chain">off-chain </Link>, while still maintaining the security and <Link to="decentralization">decentralization </Link> of the <Link to="Ethereum">Ethereum </Link> <Link to="network">network </Link>. In optimistic <Link to="rollups">rollups </Link>, transactions are initially processed <Link to="off-chain">off-chain </Link>, and a summary of these transactions is then submitted to the <Link to="Ethereum">Ethereum </Link> <Link to="network">network </Link> for verification. This verification process ensures that the transactions are valid and that no fraud has occurred. Once the transactions are verified, they are added to the <Link to="Ethereum">Ethereum </Link> <Link to="blockchain">blockchain </Link>, allowing users to interact with the decentralized applications built on the platform.</>,
  },
  "optimistic rollup": {
    definition: <>A rollup that assumes the validity and good faith of transactions, and only runs a <Link to="fraud proof">fraud proof </Link> in the case of fraud being alleged. See also &#x27;rollup&#x27;.</>,
  },
  "Oracle": {
    definition: <>Typically, an <Link to="oracle">oracle </Link> is any entity or person that is relied on to report the outcome of an event. In a <Link to="blockchain">blockchain </Link> <Link to="network">network </Link> an <Link to="oracle">oracle </Link> (human or machine) helps communicate data to a <Link to="smart contract">smart contract </Link>, which can then be used to verify an event or specific outcome.</>,
  },
  "ParaSwap": {
    definition: <><Link to="ParaSwap">ParaSwap </Link> is a decentralized <Link to="exchange">exchange </Link> (<Link to="DEX">DEX </Link>) <Link to="aggregator">aggregator </Link> that optimizes swaps for users through better prices, limited <Link to="gas">gas </Link> fees, and lower <Link to="slippage">slippage </Link>. <Link to="ParaSwap">ParaSwap </Link> sources their <Link to="liquidity">liquidity </Link> from major DEXes such as <Link to="Uniswap">Uniswap </Link>, Balancer, <Link to="Curve">Curve </Link>, Kyber, in addition to ParaSwapPool, their professional Market Maker <Link to="network">network </Link>.</>,
  },
  "parity": {
    definition: <>In a general sense, to say that something &#x27;has <Link to="parity">parity </Link>&#x27; with another thing means &#x27;equal in features or other important quality&#x27;, and is a phrase often used by software developers and computer scientists.</>,
  },
  "Parity": {
    definition: <><Link to="Parity">Parity </Link> Technologies is the name of a <Link to="blockchain">blockchain </Link> technology company that is developing a number of significant projects in the <Link to="blockchain">blockchain </Link> space. One of its first projects was an <Link to="Ethereum">Ethereum </Link> client, known as <Link to="Parity">Parity </Link>; its name was changed to <Link to="Parity">Parity </Link> <Link to="Ethereum">Ethereum </Link>, and then was spun out as a <Link to="DAO">DAO </Link>-owned and operated project called Open <Link to="Ethereum">Ethereum </Link>, which has also been deprecated. See also &#x27;client&#x27;.</>,
  },
  "Passphrase": {
    definition: <>See &#x27;<Link to="Secret Recovery Phrase">Secret Recovery Phrase </Link>&#x27;</>,
  },
  "password manager": {
    definition: <>A <Link to="password manager">password manager </Link> is a tool or software that stores all sorts of passwords needed for online applications and services. <Link to="Password manager">Password manager </Link></>,
  },
  "PayPal": {
    definition: <><Link to="PayPal">PayPal </Link> is a multinational financial technology company operating an online payments system in the majority of countries.</>,
  },
  "peer-to-peer (P2P)": {
    definition: <>P2P refers to interactions that happen directly between two parties, usually two separate individuals, and have been present in Internet technology in different ways for some time. These interactions are often coordinated through some sort of app or <Link to="network">network </Link>, which can consist of any number of individuals. Public blockchains can be considered to have a high degree of P2P functionality, as individuals are able to transact or interact with each other without relying on an intermediary or single point of failure.</>,
  },
  "permissioned ledger": {
    definition: <>A <Link to="blockchain">blockchain </Link> <Link to="network">network </Link> in which access to <Link to="ledger">ledger </Link> or <Link to="network">network </Link> requires permission from an individual or group of individuals, as opposed to a <Link to="public blockchain">public blockchain </Link>. Permissioned ledgers may have one or many owners. <Link to="Consensus">Consensus </Link> on a <Link to="permissioned ledger">permissioned ledger </Link> is conducted by the trusted actors, such as government departments, banks, or other known entities. Permissioned blockchains or ledgers contain highly-verifiable data sets because the <Link to="consensus">consensus </Link> process creates a <Link to="digital signature">digital signature </Link>, which can be seen by all parties. A <Link to="permissioned ledger">permissioned ledger </Link> is much easier to maintain and considerably faster than a <Link to="public blockchain">public blockchain </Link>. For example, <Link to="Quorum">Quorum </Link> or <Link to="Hyperledger">Hyperledger </Link> Besu are permissioned ledgers that can be more easily set up for large enterprises. In contrast, the public <Link to="Ethereum">Ethereum </Link> <Link to="blockchain">blockchain </Link> is a permissionless <Link to="ledger">ledger </Link> which anyone can access.</>,
  },
  "phishing (noun)": {
    definition: <>Phishing is a form of social engineering where attackers deceive people into revealing sensitive information or installing <Link to="malware">malware </Link> such as ransomware.</>,
  },
  "Plasma": {
    definition: <><Link to="Plasma">Plasma </Link>&#x27; is a term that is used to refer to one of the solutions being built and deployed in order to securely scale the <Link to="Ethereum">Ethereum </Link> <Link to="network">network </Link>. A <Link to="Plasma">Plasma </Link> <Link to="network">network </Link> functions similarly to an <Link to="optimistic rollup">optimistic rollup </Link>, inasmuch as it relies on <Link to="Ethereum">Ethereum </Link> <Link to="Mainnet">Mainnet </Link> to maintain the record of transactions, and as the source for arbitration or fraud resolution. However, a <Link to="Plasma">Plasma </Link> <Link to="network">network </Link> differs in other important technical ways from <Link to="rollups">rollups </Link>, and is currently limited to simple operations, such as swaps and <Link to="token">token </Link> transfers. More technical information is available here.</>,
  },
  "PoA, PoS, PoW": {
    definition: <>Acronyms standing for Proof of X <Link to="consensus">consensus </Link> mechanisms: Authority, Stake, Work. The “o” is lowercase since you wouldn’t capitalize “of” when writing out the phrase. See also &#x27;<Link to="consensus">consensus </Link>&#x27;, &#x27;Proof of Authority&#x27;, &#x27;Proof of Stake&#x27;, &#x27;Proof of Work&#x27;.</>,
  },
  "Polygon": {
    definition: <><Link to="Polygon">Polygon </Link> (formerly Matic <Link to="Network">Network </Link>) is a layer-2 <Link to="scaling">scaling </Link> solution for <Link to="Ethereum">Ethereum </Link> that aims to address the <Link to="scalability">scalability </Link> issues of the <Link to="Ethereum">Ethereum </Link> <Link to="blockchain">blockchain </Link>. It is designed to provide faster and cheaper transactions with the same level of security and <Link to="decentralization">decentralization </Link> as the <Link to="Ethereum">Ethereum </Link> <Link to="network">network </Link>. <Link to="Polygon">Polygon </Link> achieves this by creating a multi-chain <Link to="ecosystem">ecosystem </Link> that is built on top of the <Link to="Ethereum">Ethereum </Link> <Link to="network">network </Link>. This <Link to="ecosystem">ecosystem </Link> consists of various interconnected sidechains that can process transactions independently of the main <Link to="Ethereum">Ethereum </Link> <Link to="blockchain">blockchain </Link>. These sidechains are called &#x27;<Link to="Polygon">Polygon </Link> chains&#x27; or &#x27;commit chains&#x27;.</>,
  },
  "Portfolio": {
    definition: <>The <Link to="Portfolio">Portfolio </Link> <Link to="Dapp">Dapp </Link> enables you to view all your <Link to="MetaMask">MetaMask </Link> accounts and their assets in one place. It aggregates values from across your accounts and shows your total holdings, making it easier than ever to get an at-a-glance summary of their value in your chosen currency. Getting started with <Link to="MetaMask">MetaMask </Link> <Link to="Portfolio">Portfolio </Link></>,
  },
  "PoS/PoW Hybrid": {
    definition: <>A hybrid <Link to="consensus">consensus </Link> model that utilizes a combination of Proof of Stake (PoS) and Proof of Work (PoW) <Link to="consensus">consensus </Link>. Using this Hybrid <Link to="consensus">consensus </Link> mechanism, blocks are validated from not only miners, but also voters (stakeholders) to form a balanced <Link to="network">network </Link> <Link to="governance">governance </Link>.</>,
  },
  "Priority fee": {
    definition: <>The <Link to="priority fee">priority fee </Link>, also referred to as the &#x27;<Link to="miner tip">miner tip </Link>&#x27;, incentivizes the miner to prioritize your <Link to="transaction">transaction </Link>. Naturally, whether this does actually go to a miner depends on the <Link to="consensus">consensus </Link> mechanism they use: <Link to="Ethereum">Ethereum </Link> <Link to="mainnet">mainnet </Link> became a Proof of Stake <Link to="network">network </Link> following the <Link to="Merge">Merge </Link> in September 2022, so the <Link to="priority fee">priority fee </Link> goes to validators instead of miners.</>,
  },
  "private blockchain": {
    definition: <>A <Link to="blockchain">blockchain </Link> or <Link to="distributed ledger">distributed ledger </Link> that has a closed <Link to="network">network </Link> wherein participants are controlled by a single entity. A <Link to="private blockchain">private blockchain </Link> requires a verification process for new participants. A <Link to="private blockchain">private blockchain </Link> may also limit which individuals are able to participate in <Link to="consensus">consensus </Link> of the <Link to="blockchain">blockchain </Link> <Link to="network">network </Link>. See also &#x27;<Link to="permissioned ledger">permissioned ledger </Link>&#x27;.</>,
  },
  "private currency": {
    definition: <>A currency or <Link to="token">token </Link> issued by a private individual or firm. Typically, the <Link to="token">token </Link> or currency is limited to use within the <Link to="network">network </Link> of that particular firm or individual. This is not to be confused with a “privacy <Link to="cryptocurrency">cryptocurrency </Link>”, which are cryptocurrencies with specific privacy features, such as hidden user identities.</>,
  },
  "private key": {
    definition: <>A <Link to="private key">private key </Link> is an alphanumeric string of data that, in <Link to="MetaMask">MetaMask </Link>, corresponds to a single specific <Link to="account">account </Link> in a <Link to="wallet">wallet </Link>. Private keys can be thought of as a password that enables an individual to control a specific crypto <Link to="account">account </Link>. Never reveal your <Link to="private key">private key </Link> to anyone, as whoever controls the <Link to="private key">private key </Link> controls the <Link to="account">account </Link> funds. If you lose your <Link to="private key">private key </Link>, then you lose access to, and control over, that <Link to="account">account </Link>.</>,
  },
  "Proof of Authority (PoA)": {
    definition: <>A <Link to="consensus">consensus </Link> mechanism used in private blockchains, granting a single <Link to="private key">private key </Link> the authority to generate all of the blocks or validate transactions.</>,
  },
  "Proof of Stake (PoS)": {
    definition: <>A <Link to="consensus">consensus </Link> mechanism in which an individual <Link to="node">node </Link>, or “<Link to="validator">validator </Link>”, validates transactions or blocks. Validators lock up a certain amount of <Link to="cryptocurrency">cryptocurrency </Link>, such as ether, into a ‘stake’, in order to be able to participate in <Link to="consensus">consensus </Link>. If the <Link to="node">node </Link> validates a block (group of transactions) correctly, then the <Link to="validator">validator </Link> receives a reward. Conversely, if the <Link to="validator">validator </Link> behaves poorly by validating incorrect transactions or by not maintaining sufficient <Link to="network">network </Link> connectivity, the <Link to="cryptocurrency">cryptocurrency </Link> they staked can be ‘slashed’, or taken from them and put out of circulation (‘burned’). PoS requires a negligible amount of computing power compared to Proof of Work <Link to="consensus">consensus </Link>.</>,
  },
  "Proof of Work (PoW)": {
    definition: <>A <Link to="consensus">consensus </Link> mechanism in which each block is ‘mined’ by one of the nodes, or a group of nodes, on the <Link to="network">network </Link>. The computational process involved in committing a series of transactions into a block on the <Link to="network">network </Link>, known as ‘hashing a block’, is technically quite simple, and therefore subject to attack. Under PoW, each miner must solve a math problem to find a set, difficult variable in order to be able to propose their block to the <Link to="network">network </Link> as the next to be ‘mined’. In effect, the process of hashing each block becomes a competition. This addition of solving for a target increases the <Link to="difficulty">difficulty </Link> of successfully hashing each block, and consequently the security of the <Link to="network">network </Link>. For each hashed block, the overall process of hashing will have taken some time and computational effort. Thus, a hashed block is considered Proof of Work, and the miner that successfully hashes the block first receives a reward, in the form of <Link to="cryptocurrency">cryptocurrency </Link>. PoW is singificantly more energy-intensive than other <Link to="consensus">consensus </Link> mechanisms, such as Proof of Stake.</>,
  },
  "protocol": {
    definition: <>Formally speaking, a &#x27;<Link to="protocol">protocol </Link>&#x27; is a set of rules governing how a process is carried out. This concept is used throughout <Link to="public blockchain">public blockchain </Link> networks and web3 to refer to the way smart contracts execute their functionality in the same way regardless of the user. The products or services built on top of smart contracts are often referred to as &#x27;protocols&#x27; by <Link to="extension">extension </Link>.</>,
  },
  "public blockchain": {
    definition: <>A globally open <Link to="network">network </Link> wherein anyone can participate in transactions, participate in the <Link to="consensus">consensus </Link> <Link to="protocol">protocol </Link> to help determine which blocks get added to the chain, maintain and examine the contents of the chain.</>,
  },
  "public key": {
    definition: <><Link to="Public blockchain">Public blockchain </Link> networks are just that: public. Their data is accessible and readable by anyone. In order to have any degree of usability when it comes to allowing users to do some things, like send transactions, but not others, like steal other peoples&#x27; tokens, cryptographic technology is used. In particular, a design paradigm known as &#x27;public/<Link to="private key">private key </Link> pairs&#x27; is employed to ensure users can interact with others on the <Link to="network">network </Link> as they wish, while keeping their own <Link to="account">account </Link> secure. These key pairs consist of two long strings of alphanumeric characters. A <Link to="public key">public key </Link> can be derived mathematically from its corresponding <Link to="private key">private key </Link>, but the inverse is not true: it is mathematically impossible to derive a <Link to="private key">private key </Link> from its corresponding <Link to="public key">public key </Link>. This allows, for example, users to have a public <Link to="wallet">wallet </Link> address that anyone can use to send them tokens, with the peace of mind that as long as they properly keep the corresponding <Link to="private key">private key </Link> safe, those tokens cannot be stolen. See also &#x27;<Link to="private key">private key </Link>&#x27;.</>,
  },
  "Public-Key Cryptography": {
    definition: <>See &#x27;<Link to="public key">public key </Link>&#x27;,see &#x27;<Link to="Cryptography">Cryptography </Link>&#x27;, see &#x27;<Link to="blockchain">blockchain </Link>&#x27;. <Link to="Public-Key Cryptography">Public-Key Cryptography </Link></>,
  },
  "Public-Key Infrastructure": {
    definition: <>A <Link to="public key">public key </Link> infrastructure (PKI) is a collection of roles, rules, hardware, software, and processes for creating, managing, distributing, using, storing, and revoking digital certificates. <Link to="Public-Key Infrastructure">Public-Key Infrastructure </Link></>,
  },
  "QR code": {
    definition: <>A <Link to="QR code">QR code </Link> is a type of matrix barcode, constituting a machine-readable optical label that can contain information about the item to which it is attached.</>,
  },
  "Quorum": {
    definition: <><Link to="ConsenSys">ConsenSys </Link> <Link to="Quorum">Quorum </Link> enables enterprises to leverage <Link to="Ethereum">Ethereum </Link> for their high-value <Link to="blockchain">blockchain </Link> applications. Businesses can rely on the <Link to="Quorum">Quorum </Link> open-source <Link to="protocol">protocol </Link> layer and integrate on top of it product modules from <Link to="ConsenSys">ConsenSys </Link>, other companies, or your own in-house development team to build high-performance, customizable applications. <Link to="Quorum">Quorum </Link></>,
  },
  "Rarible": {
    definition: <>An <Link to="NFT">NFT </Link> marketplace.</>,
  },
  "relayer": {
    definition: <>A <Link to="relayer">relayer </Link> is an intermediary that facilitates the <Link to="exchange">exchange </Link> or transfer of information, assets, or services between two or more parties. The term is used in various fields, including finance, communication, and technology. In the context of cryptocurrencies and <Link to="blockchain">blockchain </Link> technology, a <Link to="relayer">relayer </Link> typically refers to an intermediary that facilitates peer-to-peer transactions on a decentralized <Link to="network">network </Link>. This can include decentralized exchanges (DEXs), where relayers act as matching engines to connect buyers and sellers of digital assets. A few examples of popular relayers include 0x: 0x is a decentralized <Link to="exchange">exchange </Link> <Link to="protocol">protocol </Link> that enables the creation of relayers on the <Link to="Ethereum">Ethereum </Link> <Link to="blockchain">blockchain </Link>. These relayers can be built by anyone and allow for peer-to-peer trading of <Link to="ERC">ERC </Link>-20 tokens. Kyber <Link to="Network">Network </Link>: Kyber <Link to="Network">Network </Link> is a decentralized <Link to="liquidity">liquidity </Link> <Link to="network">network </Link> that also operates as a <Link to="relayer">relayer </Link>. It enables users to trade a wide range of digital assets, including <Link to="ERC">ERC </Link>-20 tokens, without the need for a centralized intermediary. <Link to="Uniswap">Uniswap </Link>: <Link to="Uniswap">Uniswap </Link> is a popular decentralized <Link to="exchange">exchange </Link> that operates as a <Link to="relayer">relayer </Link>. It uses an automated market maker (AMM) system to enable peer-to-peer trading of <Link to="ERC">ERC </Link>-20 tokens. <Link to="AirSwap">AirSwap </Link>: <Link to="AirSwap">AirSwap </Link> is a decentralized <Link to="exchange">exchange </Link> that operates as a peer-to-peer <Link to="relayer">relayer </Link> on the <Link to="Ethereum">Ethereum </Link> <Link to="blockchain">blockchain </Link>. It uses an <Link to="off-chain">off-chain </Link> order book to match buyers and sellers and execute trades.</>,
  },
  "Remote Procedure Call (RPC)": {
    definition: <>The Remote Procedure Call is a technology that is used to transfer data between endpoints. You may often see it referred to as <Link to="JSON-RPC">JSON-RPC </Link>, which is its full name; see ‘<Link to="JSON-RPC">JSON-RPC </Link>’ for further details.</>,
  },
  "Rinkeby": {
    definition: <>An <Link to="Ethereum">Ethereum </Link> testnet that uses Proof of Authority <Link to="consensus">consensus </Link>, available through <Link to="MetaMask">MetaMask </Link>; Following the transition to Proof of Stake, <Link to="Rinkeby">Rinkeby </Link> scheduled its deprecation for the end of 2023.</>,
  },
  "Roadmap": {
    definition: <>A planning technique which lays out the short and long term goals of a particular project within a flexible estimated timeline.</>,
  },
  "Rocket Pool": {
    definition: <><Link to="Rocket Pool">Rocket Pool </Link> is a decentralized <Link to="Ethereum">Ethereum </Link> staking pool.</>,
  },
  "rollups": {
    definition: <><Link to="Rollups">Rollups </Link> (pronounced &#x27;roll ups&#x27;) are one element in the set of tools and infrastructure being built as <Link to="scaling">scaling </Link> solutions for the <Link to="Ethereum">Ethereum </Link> <Link to="network">network </Link>. They consist, in general, of networks which prioritize their ability to compute transactions and <Link to="smart contract">smart contract </Link> functionality, and then &#x27;roll up&#x27; those transactions to <Link to="Ethereum">Ethereum </Link> <Link to="Mainnet">Mainnet </Link> for secure verification of their validity. There are different ways of approaching this problem from a technical point of view, namely Zero Knowledge, or ZK, <Link to="rollups">rollups </Link>, and Optimistic <Link to="rollups">rollups </Link>. <Link to="Arbitrum">Arbitrum </Link> and <Link to="Optimism">Optimism </Link> are prominent examples. See the entries on both of these types of rollup for more, and more in-depth discussion here.</>,
  },
  "Ropsten": {
    definition: <>An <Link to="Ethereum">Ethereum </Link> testnet that used Proof of Work, and, following the transition to Proof of Stake, was deprecated.</>,
  },
  "RPC": {
    definition: <>The Remote Procedure Call is a technology that is used to transfer data between endpoints. You may often see it referred to as <Link to="JSON-RPC">JSON-RPC </Link>, which is its full name; see &#x27;<Link to="JSON-RPC">JSON-RPC </Link>&#x27; for further details.</>,
  },
  "rug pull": {
    definition: <>Similar to the traditional financial scam of a pyramid scheme, a &#x27;<Link to="rug pull">rug pull </Link>&#x27; is a <Link to="cryptocurrency">cryptocurrency </Link> or <Link to="crypto-">crypto- </Link><Link to="token">token </Link> based scam in which the creators of the <Link to="token">token </Link> create hype, through injecting <Link to="liquidity">liquidity </Link> into their <Link to="token">token </Link>, airdropping, and other schemes, and once investors pile in and boost the price of the <Link to="token">token </Link> up to a certain point, the creators liquidate their (generally majority) share of the tokens, leaving their investors with next to nothing.</>,
  },
  "Safeheron": {
    definition: <><Link to="Safeheron">Safeheron </Link> is an open-source platform for managing digital assets.</>,
  },
  "Samsung Pay": {
    definition: <><Link to="Samsung Pay">Samsung Pay </Link> is a mobile payment and digital <Link to="wallet">wallet </Link> service that lets users make payments using compatible phones and other Samsung-produced devices.</>,
  },
  "sandbox": {
    definition: <>A testing environment in a computer system in which new or untested software or coding can be run securely.</>,
  },
  "Sardine": {
    definition: <><Link to="Sardine">Sardine </Link> is an instant fiat and crypto settlement platform.</>,
  },
  "Satoshi Nakamoto": {
    definition: <>A pseudonymous individual or entity who created the Bitcoin <Link to="protocol">protocol </Link>, solving the digital currency issue of the “<Link to="double spend">double spend </Link>.” Nakamoto first published their white paper describing the project in 2008, and the first Bitcoin software was released one year later.</>,
  },
  "scalability": {
    definition: <>A change in size or scale to handle a <Link to="network">network </Link>’s demands. This word is used to refer to a <Link to="blockchain">blockchain </Link> project’s ability to handle <Link to="network">network </Link> traffic, future growth, and capacity in its intended application.</>,
  },
  "Scaling": {
    definition: <>The main goal of <Link to="scalability">scalability </Link> is to increase <Link to="transaction">transaction </Link> speed (faster finality), and <Link to="transaction">transaction </Link> throughput (high transactions per second), without sacrificing <Link to="decentralization">decentralization </Link> or security.</>,
  },
  "Scrypt": {
    definition: <>An alternative proof-of-work (PoW) <Link to="algorithm">algorithm </Link> to SHA-256, used in Bitcoin <Link to="mining">mining </Link>. <Link to="Scrypt">Scrypt </Link> <Link to="mining">mining </Link> relies more heavily on memory than on pure CPU power, aiming to reduce the advantage that ASICs. <Link to="Scrypt">Scrypt </Link></>,
  },
  "Secret Recovery Phrase": {
    definition: <>The <Link to="seed phrase">seed phrase </Link>, mnemonic, or <Link to="Secret Recovery Phrase">Secret Recovery Phrase </Link> is a crucial part of <Link to="public blockchain">public blockchain </Link> technology, originally created for Bitcoin, and goes by many names. However, they all refer to a set of ordered words which correspond to determined values. These values never change, and therefore the same string of words in the same order will always produce the same number–this is the underlying functionality that allows seed phrases to back up wallets. This is also where the name ‘hierarchical deterministic wallets’ comes from, as all the accounts in a given <Link to="wallet">wallet </Link> are deterministically created from the <Link to="seed phrase">seed phrase </Link>, and they are hierarchically controlled by it. A <Link to="Secret Recovery Phrase">Secret Recovery Phrase </Link> is exactly what it sounds like: something that is secret, and should be known only to the owner of the <Link to="account">account </Link>. If the <Link to="seed phrase">seed phrase </Link> is given to someone else, that person has complete control over the <Link to="account">account </Link>; they can drain it of tokens and funds, execute transactions with it, etc. What is a ‘<Link to="Secret Recovery Phrase">Secret Recovery Phrase </Link>’ and how to keep your <Link to="crypto wallet">crypto wallet </Link> secure</>,
  },
  "Security Token": {
    definition: <>A <Link to="security token">security token </Link> is essentially a digital form of traditional securities. There are three primary types of traditional securities: equities, debt and a hybrid of debt and equity. Examples of securities include stocks, bonds, ETFs, options and futures. Hypothetically, any of these things can be tokenized to become a <Link to="security token">security token </Link>. It is possible that in the near future, security tokens could serve as a very viable alternative and competitor to stocks and other traditional securities. <Link to="Security Token">Security Token </Link></>,
  },
  "Security Token Offering (STO)": {
    definition: <>A <Link to="security token">security token </Link> offering (STO) is a form of initial <Link to="coin">coin </Link> offering (<Link to="ICO">ICO </Link>) where a company or organization issues a <Link to="security token">security token </Link> that is backed by a tangible asset, such as real estate, technology or other assets. The <Link to="security token">security token </Link> represents the right to ownership of the underlying asset, with the tokens being tradeable on a compliant <Link to="digital asset">digital asset </Link> <Link to="exchange">exchange </Link>. <Link to="Security Token">Security Token </Link> Offering</>,
  },
  "seed phrase": {
    definition: <>Another term for <Link to="Secret Recovery Phrase">Secret Recovery Phrase </Link></>,
  },
  "self-custody (noun)": {
    definition: <>Self-custodial&#x27; refers to the fact that it&#x27;s you (&#x27;self&#x27;) who holds your <Link to="wallet">wallet </Link>&#x27;s <Link to="private key">private key </Link>(s). A self-custodial <Link to="wallet">wallet </Link> eliminates the third party between you and your <Link to="crypto-">crypto- </Link>assets, which is more suitable for some people.</>,
  },
  "self-executing": {
    definition: <>A <Link to="smart contract">smart contract </Link> is a <Link to="self-executing">self-executing </Link> <Link to="contract">contract </Link>: a computer program that automatically executes the terms of a <Link to="contract">contract </Link> when certain conditions are met.</>,
  },
  "Sepolia": {
    definition: <><Link to="Sepolia">Sepolia </Link> is a test networks. It is primarily used for development on the <Link to="blockchain">blockchain </Link> (testing out applications and smart contracts, etc). <Link to="ETH">ETH </Link> on these testnets is a dummy balance and cannot be withdrawn or sent to <Link to="mainnet">mainnet </Link></>,
  },
  "Serenity": {
    definition: <>The <Link to="Ethereum">Ethereum </Link> <Link to="network">network </Link> is working on a series of technical upgrades that will allow massive increases in <Link to="transaction">transaction </Link> throughput, amongst other things. The plan that outlined these changes was originally referred to as &#x27;<Link to="Serenity">Serenity </Link>&#x27;, although that name has become less popular, in favor of specific definitions of the upgrades themselves.</>,
  },
  "serialization": {
    definition: <>The process of converting a data structure into a sequence of bytes. <Link to="Ethereum">Ethereum </Link> internally uses an encoding format called recursive-length prefix encoding (RLP).</>,
  },
  "Shard chain": {
    definition: <>A proof-of-stake chain that is coordinated by the <Link to="Beacon Chain">Beacon Chain </Link> and secured by validators. There will be 64 added to the <Link to="network">network </Link> as part of the <Link to="shard chain">shard chain </Link> <Link to="upgrade">upgrade </Link>. Shard chains will offer increased <Link to="transaction">transaction </Link> throughput for <Link to="Ethereum">Ethereum </Link> by providing additional data to <Link to="layer 2">layer 2 </Link> solutions like optimistic <Link to="rollups">rollups </Link> and ZK-<Link to="rollups">rollups </Link>.</>,
  },
  "sharding (noun)": {
    definition: <>Sharding, in public blockchains, refers to splitting an entire <Link to="network">network </Link> into multiple portions, called “shards.” Each shard would contain its own independent <Link to="state">state </Link>, meaning a unique set of <Link to="account">account </Link> balances and smart contracts. Sharding is currently being investigated and developed as one of the set of tools and solutions for <Link to="scaling">scaling </Link> <Link to="Ethereum">Ethereum </Link>.</>,
  },
  "Shielded Transaction": {
    definition: <>A <Link to="shielded transaction">shielded transaction </Link> is essentially a <Link to="transaction">transaction </Link> that is between two shielded addresses. <Link to="Shielded Transaction">Shielded Transaction </Link></>,
  },
  "sidechain": {
    definition: <>A ‘<Link to="sidechain">sidechain </Link>’ refers to a chain that is connected to another (most often, to <Link to="Ethereum">Ethereum </Link>) through a <Link to="bridge">bridge </Link>, allowing assets to be transferred between them. In contrast to a <Link to="Layer 2">Layer 2 </Link> <Link to="network">network </Link> or a rollup, a <Link to="sidechain">sidechain </Link> is a full <Link to="blockchain">blockchain </Link> <Link to="network">network </Link> in and of itself, and does not rely on <Link to="Ethereum">Ethereum </Link> for <Link to="consensus">consensus </Link>. It therefore must be evaluated independently in terms of its security, stability, and other features. See also “<Link to="blockchain">blockchain </Link> trilemma”, “<Link to="modular blockchain">modular blockchain </Link>”. Note: Bridges exist for good reason; sending tokens from a <Link to="sidechain">sidechain </Link> to <Link to="Ethereum">Ethereum </Link> <Link to="mainnet">mainnet </Link> or vice versa would result in <Link to="token">token </Link> loss.</>,
  },
  "Signature (Cryptographic)": {
    definition: <>See &#x27;<Link to="Digital signature">Digital signature </Link>&#x27;</>,
  },
  "slashing condition": {
    definition: <>Under a Proof of Stake (PoS) <Link to="consensus">consensus </Link> mechanism, a <Link to="slashing condition">slashing condition </Link> is one that causes the <Link to="validator">validator </Link>&#x27;s <Link to="deposit">deposit </Link> to be destroyed when they trigger it. See also &#x27;Proof of Stake&#x27;.</>,
  },
  "slippage": {
    definition: <><Link to="Slippage">Slippage </Link> is the expected percentage difference between a quoted and an executed price.</>,
  },
  "slot": {
    definition: <>In Proof of Stake <Link to="consensus">consensus </Link> in <Link to="Ethereum">Ethereum </Link>, a &#x27;<Link to="slot">slot </Link>&#x27; is a period of time equivalent to 12 seconds; 32 slots make up an &#x27;<Link to="epoch">epoch </Link>&#x27;. Slots are significant in that for each <Link to="slot">slot </Link>, a different <Link to="validator">validator </Link> <Link to="node">node </Link> is randomly chosen to propose blocks to the <Link to="network">network </Link>, and a different committee of validators are chosen to vote on whether each block is valid</>,
  },
  "smart contract": {
    definition: <>Smart contracts are programs that have been published on a <Link to="public blockchain">public blockchain </Link>, and can be used by anyone. While they often contain agreements or sets of actions between parties that emulate a traditional legal <Link to="contract">contract </Link>, they are not, in and of themselves, legal documents. Smart contracts are automated actions that can be coded and executed once a set of conditions is met, and are the dominant form of programming on the <Link to="Ethereum">Ethereum </Link> Virtual Machine.</>,
  },
  "snap": {
    definition: <>A program or piece of code that extends the functionality of <Link to="MetaMask">MetaMask </Link> by using the <Link to="MetaMask">MetaMask </Link> Snaps framework.</>,
  },
  "soft fork": {
    definition: <>A change to the <Link to="blockchain">blockchain </Link> <Link to="protocol">protocol </Link> resulting in only previously valid blocks and transactions being made invalid. Since old nodes will recognize the new blocks as valid, a <Link to="soft fork">soft fork </Link> is backward-compatible. However, this can result in a potential divide in the <Link to="blockchain">blockchain </Link>, as the old software generates blocks that read as invalid according to the new rules. Contrast with &#x27;<Link to="hard fork">hard fork </Link>&#x27;; for more basic information regarding forks, see &#x27;<Link to="fork">fork </Link>&#x27;.</>,
  },
  "Software Development Kit (SDK)": {
    definition: <>A software development kit is a collection of software development tools in one installable package. They facilitate the creation of applications by having a compiler, debugger and sometimes a software framework. See &#x27;<Link to="MetaMask">MetaMask </Link> SDK&#x27;</>,
  },
  "Solidity": {
    definition: <>The programming language developers use to write smart contracts on the <Link to="Ethereum">Ethereum </Link> <Link to="network">network </Link>. See also ‘<Link to="smart contract">smart contract </Link>’. <Link to="Solidity">Solidity </Link></>,
  },
  "stablecoin": {
    definition: <>A <Link to="cryptocurrency">cryptocurrency </Link> whose value has been ‘pegged’ to that of something considered a ‘stable’ asset, like <Link to="fiat currency">fiat currency </Link> or gold. It theoretically remains stable in price, as it is measured against a known amount of an asset which should be less subject to fluctuation. Always spelled as one word. User Guide: Tokens</>,
  },
  "staking (noun)": {
    definition: <>On the <Link to="Ethereum">Ethereum </Link> Proof of Stake <Link to="network">network </Link>, those wishing to participate in <Link to="consensus">consensus </Link> must first lock up, or ‘stake’, 32 <Link to="ETH">ETH </Link> into a <Link to="smart contract">smart contract </Link>; this <Link to="ETH">ETH </Link> may be ‘slashed’ (taken from them and ‘burned’, put out of circulation) in the event that their <Link to="validator">validator </Link> behaves maliciously or does not meet performance requirements. Similar Proof of Stake mechanisms are in operation on other networks, as well. Although this is the canonical meaning of the word, similar actions taken at the level of a decentralized <Link to="exchange">exchange </Link> (<Link to="DEX">DEX </Link>) or another <Link to="dapp">dapp </Link> are often called ‘staking’, though it would probably be more accurate and descriptive to just call this ‘locking up tokens’.</>,
  },
  "state": {
    definition: <>The set of data that a <Link to="blockchain">blockchain </Link> <Link to="network">network </Link> strictly needs to keep track of, and that represents data currently relevant to applications on the chain.</>,
  },
  "state channels": {
    definition: <><Link to="State">State </Link> channels are part of the set of tools and platforms involved in <Link to="scaling">scaling </Link> <Link to="Ethereum">Ethereum </Link>. While a complex topic, <Link to="state">state </Link> channels are essentially methods through which the current &#x27;<Link to="state">state </Link>&#x27; of the <Link to="blockchain">blockchain </Link> can be exported, and then based on that, any given number of transactions can take place <Link to="off-chain">off-chain </Link>, and then be moved back onto the main <Link to="Ethereum">Ethereum </Link> chain.</>,
  },
  "Streaming": {
    definition: <>Money <Link to="streaming">streaming </Link> represents the idea of continuous payments over time. Block numbers are used to measure time in the <Link to="blockchain">blockchain </Link> and continuously update the balances of the parties in the <Link to="contract">contract </Link>.</>,
  },
  "swap (noun)": {
    definition: <>As the number of different <Link to="blockchain">blockchain </Link> projects and tokens has proliferated, the system by which users <Link to="exchange">exchange </Link> one <Link to="token">token </Link> for another has come to be known as swapping, and the individual action, a swap. Within <Link to="MetaMask">MetaMask </Link>, users have access to a powerful <Link to="aggregator">aggregator </Link> showing them information about swaps across the <Link to="ecosystem">ecosystem </Link>, this is <Link to="MetaMask">MetaMask </Link> Swaps: User Guide Swaps</>,
  },
  "Swap /MetaSwap": {
    definition: <>As the number of different <Link to="blockchain">blockchain </Link> projects and tokens has proliferated, the system by which users <Link to="exchange">exchange </Link> one <Link to="token">token </Link> for another has come to be known as swapping, and the individual action, a swap.</>,
  },
  "szabo": {
    definition: <>A denomination of <Link to="ETH">ETH </Link>. See also &#x27;ether (denominations)&#x27;.</>,
  },
  "testnet (test network)": {
    definition: <>A testnet is a <Link to="blockchain">blockchain </Link> <Link to="network">network </Link> that mirrors, as closely as possible, the current conditions of a corresponding ‘main’ <Link to="network">network </Link>. Testnets are used by developers to verify that their smart contracts and other functionality work as intended, before permanently recording their code to a live <Link to="blockchain">blockchain </Link> <Link to="network">network </Link> (and often spending significant <Link to="gas">gas </Link> fees in the process!). Tokens minted on testnets are not transferrable for their equivalent value on mainnets.</>,
  },
  "Testnet Kovan": {
    definition: <>An <Link to="Ethereum">Ethereum </Link> testnet that uses Proof of Authority <Link to="consensus">consensus </Link>, available through <Link to="MetaMask">MetaMask </Link>; website here.</>,
  },
  "Testnet Rinkeby": {
    definition: <>An <Link to="Ethereum">Ethereum </Link> testnet that uses Proof of Authority <Link to="consensus">consensus </Link>, available through <Link to="MetaMask">MetaMask </Link>; <Link to="faucet">faucet </Link> here. Following the transition to Proof of Stake, <Link to="Rinkeby">Rinkeby </Link> scheduled its deprecation for the end of 2023.</>,
  },
  "Testnet Ropsten": {
    definition: <>An <Link to="Ethereum">Ethereum </Link> testnet that used Proof of Work, and, following the transition to Proof of Stake, was deprecated.</>,
  },
  "token": {
    definition: <>A <Link to="token">token </Link> represents an asset issued on an existing <Link to="blockchain">blockchain </Link>; the transfer of tokens and the addresses that currently hold them are the subject of the <Link to="network">network </Link>’s <Link to="consensus">consensus </Link> activities. There are many types of tokens; see also ‘<Link to="ERC">ERC </Link>-20’ and ‘<Link to="ERC">ERC </Link>-721’ entries.</>,
  },
  "token lockup": {
    definition: <>A <Link to="token">token </Link> lock-up refers to a mechanism where certain tokens or <Link to="cryptocurrency">cryptocurrency </Link> holdings are locked up or frozen for a specified period of time to restrict their transfer or sale. This is often used in the context of initial <Link to="coin">coin </Link> offerings (ICOs), where <Link to="token">token </Link> issuers may require investors to commit to holding onto their tokens for a certain period, typically to ensure that investors are committed to the project&#x27;s long-term success. <Link to="Token">Token </Link> lock-up periods can vary in duration and can be predetermined or set according to certain conditions, such as reaching a certain milestone, <Link to="liquidity">liquidity </Link> event or <Link to="network">network </Link> <Link to="upgrade">upgrade </Link>. During the lock-up period, the tokens cannot be transferred or sold, although in some cases, they may be staked or used to participate in certain <Link to="network">network </Link> activities. Once the lock-up period is over, the tokens can be freely traded or sold.</>,
  },
  "Token standard": {
    definition: <>See <Link to="ERC">ERC </Link>-20, <Link to="ERC">ERC </Link>-721, <Link to="ERC">ERC </Link>-1155, etc.</>,
  },
  "Total Value Locked (TVL)": {
    definition: <>Total Value Locked, or TVL, is a common expression used in many contexts across the crypto <Link to="ecosystem">ecosystem </Link>, so it&#x27;s important to pay attention to the specifics. In general, it refers to how much value, in tokens, has been deposited into something. Most often, it refers to a <Link to="protocol">protocol </Link>, which is an application on the <Link to="blockchain">blockchain </Link>, or a set of protocols. For example, a decentralized <Link to="token">token </Link> trading platform might have a series of <Link to="liquidity">liquidity </Link> pools, which are protocols enabling swaps between tokens, and the platform may quote the &#x27;TVL&#x27; for all the pools combined. Alternatively, if a <Link to="network">network </Link> uses proof of stake for their <Link to="consensus">consensus </Link> mechanism, they may represent the TVL of all the tokens staked into that <Link to="consensus">consensus </Link> <Link to="protocol">protocol </Link>.</>,
  },
  "Transaction": {
    definition: <>Data committed to the <Link to="Ethereum">Ethereum </Link> <Link to="Blockchain">Blockchain </Link> signed by an originating <Link to="account">account </Link>, targeting a specific address. The <Link to="transaction">transaction </Link> contains <Link to="metadata">metadata </Link> such as the <Link to="gas">gas </Link> limit for that <Link to="transaction">transaction </Link>.</>,
  },
  "transaction block": {
    definition: <>A collection of transactions on a <Link to="blockchain">blockchain </Link> <Link to="network">network </Link>, gathered into a set or a block that can then be hashed and added to the <Link to="blockchain">blockchain </Link>. See &#x27;hash&#x27;.</>,
  },
  "transaction fee": {
    definition: <>A small fee imposed on transactions sent across a <Link to="blockchain">blockchain </Link> <Link to="network">network </Link>. These fees are used to pay <Link to="network">network </Link> validators or miners for their participation in <Link to="consensus">consensus </Link>, and thus ensure that a <Link to="blockchain">blockchain </Link> <Link to="network">network </Link> is self-sustaining.</>,
  },
  "transaction ID": {
    definition: <>A <Link to="transaction">transaction </Link> hash/ID (often abbreviated as tx hash or txn hash) is a unique identifier, similar to a receipt, that serves as proof that a <Link to="transaction">transaction </Link> was validated and added to the <Link to="blockchain">blockchain </Link>. In many cases, a <Link to="transaction">transaction </Link> hash is needed in order to locate funds.</>,
  },
  "transaction pool": {
    definition: <>When a user submits a <Link to="transaction">transaction </Link> to the <Link to="Ethereum">Ethereum </Link> <Link to="network">network </Link>--or many other networks based on <Link to="Ethereum">Ethereum </Link>--the <Link to="transaction">transaction </Link> goes into what&#x27;s know as a &#x27;<Link to="transaction">transaction </Link> pool&#x27;, or &#x27;txpool&#x27; for short. This is essentially a queue of transactions that are waiting to be added to a block and recorded to the <Link to="blockchain">blockchain </Link>. There are mechanisms that determine which transactions are &#x27;picked up&#x27; and included in the next block, and there is currently a lot of research surrounding how this decision gets made (see &#x27;MEV&#x27;). In Bitcoin, the <Link to="transaction">transaction </Link> pool was referred to as the &#x27;memory pool&#x27;, or &#x27;mempool&#x27;, and often these terms are used interchangeably.</>,
  },
  "Transak": {
    definition: <><Link to="Transak">Transak </Link> is a <Link to="developer">developer </Link> integration toolkit to let users buy/sell crypto in any app, website or web plugin.</>,
  },
  "Trezor": {
    definition: <><Link to="Hardware wallet">Hardware wallet </Link>.</>,
  },
  "Truffle": {
    definition: <><Link to="Truffle">Truffle </Link> Suite is a development environment based on <Link to="Ethereum">Ethereum </Link> <Link to="Blockchain">Blockchain </Link>, used to develop dapps. <Link to="Truffle">Truffle </Link> is a one-stop solution for building dapps: <Link to="compiling">compiling </Link> contracts, deploying contracts, injecting it into a web app, creating front-end for dapps and testing. <Link to="Truffle">Truffle </Link> Suite</>,
  },
  "trustless": {
    definition: <><Link to="Trustless">Trustless </Link>&#x27; is a term that gets used a lot in the <Link to="decentralized web">decentralized web </Link>, and it deserves some explanation. Traditionally, to call something &#x27;<Link to="trustless">trustless </Link>&#x27; would sound like a negative thing. In the context of decentralized technology, it has a more technical meaning: since everyone has a copy of the <Link to="ledger">ledger </Link> of all transactions ever executed, there is no need for a centralized entity that &#x27;must be trusted&#x27; as the source of truth. With <Link to="public blockchain">public blockchain </Link> networks, data isn&#x27;t kept on some centralized server somewhere that could be hacked or changed arbitrarily; anyone can verify the transactions themselves. This is why the term &#x27;<Link to="trustless">trustless </Link>&#x27; was coined: there is no need for trust, although, in a way, the rules and assurances built into the <Link to="blockchain">blockchain </Link> provide the basis for greater trust between people, because the system is guaranteed to work the same for everyone.</>,
  },
  "Turing-complete": {
    definition: <>Any machine that can calculate on a level equal to a programmable computer is <Link to="Turing-complete">Turing-complete </Link>, or computationally universal. The <Link to="Ethereum">Ethereum </Link> Virtual Machine, which processes smart contracts and transactions, is <Link to="Turing-complete">Turing-complete </Link>, despite not existing on a single physical computer.</>,
  },
  "Two-Factor Authentication (2FA)": {
    definition: <>Two-factor authentication (2FA) is an identity and access management security method that requires two forms of identification to access resources and data. 2FA gives businesses the ability to monitor and help safeguard their most vulnerable information and networks.See also &#x27;<Link to="U2F">U2F </Link>&#x27; When 2FA</>,
  },
  "TXID": {
    definition: <><Link to="Transaction">Transaction </Link> ID</>,
  },
  "U2F": {
    definition: <>Universal 2nd Factor (<Link to="U2F">U2F </Link>) is an open standard that strengthens and simplifies two-factor authentication (2FA) using specialized Universal Serial Bus (USB) or near-field communication (NFC) devices based on similar security technology found in smart cards</>,
  },
  "Uniswap": {
    definition: <><Link to="Uniswap">Uniswap </Link> is a decentralized <Link to="cryptocurrency">cryptocurrency </Link> <Link to="exchange">exchange </Link> that uses a set of smart contracts to execute trades on its <Link to="exchange">exchange </Link>.</>,
  },
  "unspent transaction output (UTXO)": {
    definition: <>An unspent <Link to="transaction">transaction </Link> output (<Link to="UTXO">UTXO </Link>) represents some amount of digital currency which has been authorized by one <Link to="account">account </Link> to be spent by another. UTXOs use <Link to="public key">public key </Link> <Link to="cryptography">cryptography </Link> to identify and transfer ownership between holders of public/<Link to="private key">private key </Link> pairs. UTXOs are formatted with the recipient&#x27;s <Link to="public key">public key </Link>, thus restricting the ability to spend that <Link to="UTXO">UTXO </Link> to the <Link to="account">account </Link> that can prove ownership of the associated <Link to="private key">private key </Link>. The <Link to="UTXO">UTXO </Link> can only be spent if it includes the <Link to="digital signature">digital signature </Link> associated with the <Link to="public key">public key </Link> attached the last time it was sent.</>,
  },
  "upgrade": {
    definition: <>Upgrading is the process of replacing a product with a newer version of the same product. In computing and consumer electronics, an <Link to="upgrade">upgrade </Link> is generally a replacement of hardware, software, or firmware with a newer or better version, in order to bring the system up to date or to improve its characteristics. See also EIP-1159, <Link to="merge">merge </Link>, and other important <Link to="Ethereum">Ethereum </Link> upgrades</>,
  },
  "UTXO": {
    definition: <>Acronym; Unspent <Link to="Transaction">Transaction </Link> Output.</>,
  },
  "validator": {
    definition: <>A participant in Proof of Stake (PoS) <Link to="consensus">consensus </Link>. On <Link to="Ethereum">Ethereum </Link>’s Proof of Stake <Link to="network">network </Link>, validators need to stake 32 <Link to="ETH">ETH </Link> in order to get included in the <Link to="validator">validator </Link> set. See also ‘staking’.</>,
  },
  "validity proof": {
    definition: <>The proof submitted along with certain types of <Link to="rollups">rollups </Link> to prove that the transactions are valid. See also &#x27;<Link to="rollups">rollups </Link>&#x27;.</>,
  },
  "Validium": {
    definition: <>One of the technologies developed for <Link to="scaling">scaling </Link> of the <Link to="Ethereum">Ethereum </Link> <Link to="network">network </Link>; see more here.</>,
  },
  "Vault Decryptor": {
    definition: <>The <Link to="MetaMask">MetaMask </Link> <Link to="Vault Decryptor">Vault Decryptor </Link> is a tool used in recovering the <Link to="Secret Recovery Phrase">Secret Recovery Phrase </Link>. This tool was written by <Link to="MetaMask">MetaMask </Link> co-founder Dan Finlay and can be accessed here: <Link to="Vault Decryptor">Vault Decryptor </Link></>,
  },
  "Vesting": {
    definition: <>In the context of &#x27;<Link to="vesting">vesting </Link> period&#x27;: The act of restricting the sale of a <Link to="token">token </Link> for a particular period of time. <Link to="Vesting">Vesting </Link> period</>,
  },
  "wallet": {
    definition: <>In <Link to="Ethereum">Ethereum </Link>-based <Link to="blockchain">blockchain </Link> technology, a &#x27;<Link to="wallet">wallet </Link>&#x27; is a something that allows you to manage private keys, your <Link to="Secret Recovery Phrase">Secret Recovery Phrase </Link>, and the accounts generated from it. This could be an internet-connected &#x27;<Link to="hot wallet">hot wallet </Link>&#x27;, like <Link to="MetaMask">MetaMask </Link>, or an &#x27;airgapped&#x27; <Link to="hardware wallet">hardware wallet </Link>. In more technical speak, you could say &#x27;the <Link to="wallet">wallet </Link> is the client, not the keys.&#x27; It is very common for people to use the word &#x27;<Link to="wallet">wallet </Link>&#x27; to refer to their SRP itself, or the accounts generated from it, or even to one <Link to="account">account </Link>.</>,
  },
  "WalletConnect": {
    definition: <><Link to="WalletConnect">WalletConnect </Link> is an open source <Link to="protocol">protocol </Link> for connecting decentralised applications to mobile wallets with <Link to="QR code">QR code </Link> scanning or deep linking.</>,
  },
  "web3, Web 3.0": {
    definition: <>Web3, or Web 3.0, are terms used synonymously with “the <Link to="decentralized web">decentralized web </Link>” and are often used to refer, broadly, to the <Link to="blockchain">blockchain </Link> and decentralized technology ecosystems and communities as a whole.</>,
  },
  "WebHID": {
    definition: <><Link to="WebHID">WebHID </Link> (Human Interface Device) Enables web applications to interact with human interface devices (HIDs) other than the standard supported devices (mice, keyboards, touchscreens, and gamepads). However, there are many other HID devices that are currently inaccessible to the web</>,
  },
  "WebSocket": {
    definition: <><Link to="WebSocket">WebSocket </Link> is a computer communications <Link to="protocol">protocol </Link>, providing full-duplex communication channels over a single TCP connection. It&#x27;s often used by dapps to regularly fetch up-to-date information from the <Link to="blockchain">blockchain </Link>.</>,
  },
  "Wei": {
    definition: <><Link to="Wei">Wei </Link> is the smallest denomination of ether, the currency used to facilitate transactional operations on the <Link to="Ethereum">Ethereum </Link> <Link to="blockchain">blockchain </Link> <Link to="network">network </Link>, where 10^18 or 1,000,000,000,000,000,000 <Link to="wei">wei </Link> is equivalent to one ether.</>,
  },
  "Whitepaper": {
    definition: <>Whitepapers explain the purpose and technology behind a project.</>,
  },
  "Wrapping": {
    definition: <><Link to="Wrapping">Wrapping </Link> a <Link to="token">token </Link> is a way of bringing a <Link to="token">token </Link> from one <Link to="network">network </Link> to another, like wrapped Bitcoin or MATIC tokens on <Link to="Ethereum">Ethereum </Link> <Link to="Mainnet">Mainnet </Link>. User Guide: Tokens</>,
  },
  "Wyre": {
    definition: <><Link to="Wyre">Wyre </Link> is a regulated Money Service Business (MSB), which means it is a financial services provider licensed to transmit and convert money. The company is almost a decade old, having been around since 2013. <Link to="Wyre">Wyre </Link> provides what the company calls a secure and compliant <Link to="bridge">bridge </Link> between fiat and cryptocurrencies. It serves as an infrastructure provider for <Link to="blockchain">blockchain </Link> businesses to connect with the fiat economy. In other words, <Link to="Wyre">Wyre </Link> payments enable <Link to="blockchain">blockchain </Link> businesses to efficiently integrate highly customizable fiat on-ramps into their onboarding flows.</>,
  },
  "yield farming": {
    definition: <><Link to="Yield farming">Yield farming </Link> is an investment practice that involves locking crypto in a <Link to="dapp">dapp </Link> for <Link to="token">token </Link> rewards. Yield farmers <Link to="deposit">deposit </Link> their tokens into DeFi applications for crypto trading, lending, or borrowing.</>,
  },
  "yield-bearing tokens": {
    definition: <>Yield tokens. See &#x27;<Link to="yield farming">yield farming </Link>&#x27;</>,
  },
  "zero address": {
    definition: <>The <Link to="Zero Address">Zero Address </Link> is an address on the <Link to="Ethereum">Ethereum </Link> <Link to="network">network </Link> that is the recipient of a special <Link to="transaction">transaction </Link> used to register the creation of a new <Link to="smart contract">smart contract </Link> on the <Link to="network">network </Link>.</>,
  },
  "Zero-knowledge proof": {
    definition: <>A <Link to="zero-knowledge proof">zero-knowledge proof </Link> is a cryptographic method that allows an individual to prove that a statement is true without conveying any additional information.</>,
  },
  "Zero-knowledge rollup": {
    definition: <>A rollup of transactions that use validity proofs to offer increased <Link to="layer 2">layer 2 </Link> <Link to="transaction">transaction </Link> throughput while using the security provided by <Link to="mainnet">mainnet </Link> (<Link to="layer 1">layer 1 </Link>). Although they can&#x27;t handle complex <Link to="transaction">transaction </Link> types, like Optimistic <Link to="rollups">rollups </Link>, they don&#x27;t have <Link to="latency">latency </Link> issues because transactions are provably valid when submitted.</>,
  },
  "zk-SNARKs": {
    definition: <>Zero-Knowledge Succinct Non-interactive ARguments of Knowledge are an incredible technology, and vital to the <Link to="scaling">scaling </Link> of <Link to="blockchain">blockchain </Link> technology and the <Link to="decentralized web">decentralized web </Link>. They are mathematically complex and can be daunting; this explanation from the <Link to="Ethereum">Ethereum </Link> Foundation is a good primer.</>,
  }
};

export default linkedDefinitions;