/*
	Workshop schedule. Edit this file to change the Schedule table on the page;
	assets/js/schedule.js turns it into HTML.

	Each slot has a "type":
	  - "break":         breaks, lunch, dinner etc. Fields: time, name, location (optional), note (optional)
	  - "session":       a paper session.           Fields: time, title, chair, talks
	  - "distinguished": the distinguished lecture. Fields: time, speaker, title, photo, link

	Each talk in a session has:
	  - time, title
	  - authors:   list of author names
	  - presenter: the author who presents (underlined on the page), optional
	  - invited:   true for an invited speaker (orange highlight + badge), optional
	  - link:      URL the title links to (e.g. the paper PDF or "#invited"), optional
	  - venue:     where the paper was published (e.g. "EuroSys 2026"), optional
	  - paper:     URL of the paper; shows a paper icon next to the venue, optional
	  - photo:     presenter's photo for the Speakers section (e.g. "images/speakers/name.jpg"), optional
	  - abstract:  abstract shown in the Speakers section, optional

	Every talk that is not invited and has a presenter other than "TBA" also gets an
	entry in the Speakers section.

	Leave the trailing structure intact: quotes around text, commas between items.
*/

const SCHEDULE = [
	{
		type: "break",
		time: "09:00 – 09:20",
		name: "Reception"
	},
	{
		type: "break",
		time: "09:20 – 09:30",
		name: "Welcome and Overview"
	},
	{
		type: "session",
		time: "09:30 – 11:00",
		title: "Paper Session 1",
		chair: "Session Chair",
		talks: [
			{ time: "09:30", title: "StageRun: An Execution-Centric Runtime for In-Network Security \n" +
					"Applications", authors: ["João Verissimo", "Eduard Marin", "Nuno Santos"], presenter: "João Verissimo", venue: "NDSS'27", paper: "", photo: "", abstract: "Programmable switches increasingly enforce security\n" +
					" defenses in the data plane, but evolving defenses require\n" +
					"\n" +
					"rapid deployment and extension without recompiling specialized\n" +
					"data-plane programs. However, while existing runtimes provide\n" +
					"execution substrates shared across applications, they cannot\n" +
					"simply be extended with operations that require coordinated\n" +
					"execution across multiple steps, state, and specialized switch\n" +
					"mechanisms. This leaves developers to realize such operations\n" +
					"themselves, limiting reuse and extensibility. We present StageRun,\n" +
					"a data-plane runtime that addresses this challenge through an\n" +
					"intermediate execution abstraction based on microprograms.\n" +
					"\n" +
					"Applications compose logical instructions, while instruction-\n" +
					"specific microprograms implement them using reusable microinstructions\n" +
					"that encapsulate data-plane execution and interaction\n" +
					"\n" +
					"with specialized switch mechanisms. A common execution-state\n" +
					"\n" +
					"model coordinates state across execution steps, while dependency-\n" +
					"aware deployment maps microinstructions onto concrete pipeline\n" +
					"\n" +
					"resources. We implement StageRun on an Intel Tofino switch\n" +
					"and evaluate it across 14 in-network security applications,\n" +
					"demonstrating support for diverse security functionality, rapid\n" +
					"deployment and extensibility through reusable microinstructions,\n" +
					"and preservation of evaluated security-relevant behavior under\n" +
					"\n" +
					"legitimate and adversarial traffic, while characterizing the re-\n" +
					"source and performance costs of the execution abstraction." },
			{ time: "09:50", title: "Skyler: Static Analysis for Predicting API-Driven Costs in Serverless Applications", authors: ["Bernardo Ribeiro", "Mafalda Ferreira", "José Fragoso Santos", "Rodrigo Bruno", "Nuno Santos"], presenter: "Bernardo Ribeiro", venue: "ASPLOS'26", paper: "https://dl.acm.org/doi/10.1145/3779212.3790221", photo: "", abstract: "Unpredictable costs are a growing concern in serverless computing, where applications rely on cloud APIs with complex tiered pricing models. In many deployments, API calls dominate expenses, and a single overlooked design choice can escalate costs by thousands of dollars. Existing tools fall short: provider calculators need unrealistic manual estimates, and dynamic profilers only work post-deployment.\n" +
					"We present Skyler, a static analysis framework for pre-deployment cost estimation of API invocations in serverless workflows. Skyler models control flow behavior and pricing semantics to construct symbolic cost expressions using SMT formulas, exposing economic sinks, i.e., code paths where API usage disproportionately impacts cost. This enables developers to identify hotspots and prevent costly architectural errors early. Skyler supports JavaScript-based serverless applications across AWS Lambda, Google Cloud Functions, and Azure Functions, achieving high accuracy (mean absolute percentage error 1% for AWS and Google, 4.5% for Azure)." },
			{ time: "10:10", title: "Rose: Reproducing External-Fault-Induced Failures in Distributed Systems with Lightweight Instrumentation", authors: ["Sebastião Amaro", "Pedro Fonseca", "Miguel Matos"], presenter: "Sebastião Amaro", venue: "EuroSys'26", paper: "https://dl.acm.org/doi/10.1145/3767295.3803625", photo: "images/speakers/sa-photo.png", abstract: "Distributed systems form the backbone of critical infrastructures, yet remain vulnerable to external-fault-induced bugs that manifest only when specific external events occur during specific application states. Existing approaches to reproducing these bugs require fine-grained information about the application, which might not be available in production, and operate within a limited fault model. Rose is a novel approach that collects traces from production and systematically generates fault schedules that reproduce these bugs. By leveraging the insight that external faults are observable through system interfaces, Rose uses lightweight tracing (2.6% overhead) to capture essential application-environment interactions. Then, it identifies the application states when faults must occur to trigger bugs, and generates schedules that consistently reproduce these bugs. Rose reproduced 20 bugs across eight production systems implemented in diverse languages (C, C++, Java, Go, Scala), including widely-used systems such as Zookeeper, MongoDB, and HBase." },
			{ time: "10:30", title: "TBA", authors: ["TBA"], presenter: "TBA", photo: "", abstract: "" }
		]
	},
	{
		type: "break",
		time: "11:00 – 12:00",
		name: "Coffee break"
	},
	{
		type: "distinguished",
		time: "12:00 – 13:00",
		speaker: "Robbert van Renesse",
		title: "Chain Replication Revisited",
		photo: "images/speakers/rvr.jpg",
		link: "#distinguished"
	},
	{
		type: "break",
		time: "13:00 – 14:30",
		name: "Lunch + Poster Session"
	},
	{
		type: "session",
		time: "14:30 – 16:00",
		title: "Paper Session 2",
		chair: "Session Chair",
		talks: [
			{ time: "14:30", title: "\"Title TBA\"", authors: ["José Orlando Pereira"], presenter: "José Orlando Pereira", invited: true, link: "#invited" },
			{ time: "14:50", title: "FUR: Fast and Unlimited Reads on Persistent Memory Transactions", authors: ["João Barreto", "Daniel Castro", "Paolo Romano", "Alexandro Baldassin"], presenter: "Daniel Castro", venue: "EuroSys'26", paper: "https://dl.acm.org/doi/10.1145/3767295.3769343", photo: "", abstract: "Despite the recent improvements in supporting Persistent Hardware Transactions (PHTs) on emerging persistent memories (PM), they have largely overlooked the poor performance of Read-Only (RO) transactions, which suffer from two crucial bottlenecks: i) the considerable post-commit delays required to ensure consistency with concurrent update transactions; and ii) the well-known tight read capacity limits of the commercially available HTM implementations.\n" +
					"We propose FUR, a new design for PHT that eliminates the two most crucial bottlenecks that hinder RO transactions in state-of-the-art PHT. At its core, FUR exploits advanced instructions that some contemporary HTMs provide to suspend (and resume) transactional access tracking.\n" +
					"With the exception of workloads comprised of 100% update transactions, our experimental evaluation with an IBM POWER9 system using the TPC-C benchmark shows that FUR can outperform the state of the art designs for persistent hardware (SPHT) and software memory transactions (Pisces or SpecPMT-based) by up to 6.17×." },
			{ time: "15:10", title: "TBA", authors: ["TBA"], presenter: "TBA", photo: "", abstract: "" },
			{ time: "15:30", title: "TBA", authors: ["TBA"], presenter: "TBA", photo: "", abstract: "" }
		]
	},
	{
		type: "break",
		time: "16:00 – 16:30",
		name: "Coffee break"
	},
	{
		type: "session",
		time: "16:30 – 18:00",
		title: "Paper Session 3",
		chair: "Session Chair",
		talks: [
			{ time: "16:30", title: "\"Title TBA\"", authors: ["Nuno Preguiça"], presenter: "Nuno Preguiça", invited: true, link: "#invited" },
			{ time: "16:50", title: "Linearizable Shared Log API Considered Harmful", authors: ["Yu-Ju Huang", "Shubham Chaudhary", "Rafael Soares", "Shir Cohen Gahtan", "Sabrina Johnson", "Arnav Kaul", "Lorenzo Alvisi", "Luis Rodrigues", "Robbert van Renesse"], presenter: "Rafael Soares", venue: "EuroSys'27", paper: "", photo: "", abstract: "Shared logs are a core building block for distributed systems,\n" +
					"yet existing designs struggle to simultaneously achieve low\n" +
					"latency, scalability, and strong consistency. Most provide a\n" +
					"linearizable append and a sequentially consistent read. Our\n" +
					"key insight is that linearizable appends are unnecessary: a\n" +
					"durable log that provides only total order is sufficient to build\n" +
					"linearizable applications. Log-level linearizability offers no\n" +
					"additional semantic benefit but places global synchronization\n" +
					"directly on the critical path, inflating end-to-end latency.\n" +
					"Total order needs no such coordination, cutting latency by\n" +
					"orders of magnitude while retaining scalability.\n" +
					"We present Ziplog, the first totally ordered shared log\n" +
					"with no global coordination in its critical path. Ziplog uses\n" +
					"an off-path ordering service that pre-assigns log positions,\n" +
					"allowing clients to append without in-flight synchronization\n" +
					"On RDMA, Ziplog achieves a 99.9 %-tile end-to-end\n" +
					"latency of just 16 μs. To demonstrate Ziplog’s benefits, we\n" +
					"build Zipkvs, a transactional key-value store providing strict\n" +
					"serializability. Under contention, Zipkvs reduces tail latency\n" +
					"by up to an order of magnitude versus Meerkat, a state-of-\n" +
					"the-art RDMA KVS, while achieving 58% higher throughput\n" +
					"and stronger consistency." },
			{ time: "17:10", title: "TBA", authors: ["Rodrigo Rodrigues"], presenter: "Rodrigo Rodrigues", photo: "images/speakers/rodrod.jpg", abstract: "" },
			{ time: "17:30", title: "TBA", authors: ["TBA"], presenter: "TBA", photo: "", abstract: "" }
		]
	},
	{
		type: "break",
		time: "20:00",
		name: "Dinner",
		location: "Location TBA",
		note: "Dinner is not included: each participant pays for their own meal."
	}
];
