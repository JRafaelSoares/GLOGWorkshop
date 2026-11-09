/*
	Workshop schedule. Edit this file to change the Schedule table on the page;
	assets/js/schedule.js turns it into HTML.

	Each slot has a "type":
	  - "break":         breaks, lunch, dinner etc. Fields: time, name, location (optional), link (optional, makes the location clickable), note (optional)
	  - "session":       a paper session.           Fields: time, title, chair, talks
	  - "distinguished": the distinguished lecture. Fields: time, speaker, title, photo, link

	Each talk in a session has:
	  - time, title
	  - authors:   list of author names
	  - presenter: the author who presents (underlined on the page), optional
	  - invited:   true for an invited speaker (orange highlight + badge), optional
	  - project:   name of a project the talk belongs to (e.g. "GLOG Project"); shows a green
	               badge and highlight, optional
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
			{ time: "09:50", title: "Skyler: Static Analysis for Predicting API-Driven Costs in Serverless Applications", authors: ["Bernardo Ribeiro", "Mafalda Ferreira", "José Fragoso Santos", "Rodrigo Bruno", "Nuno Santos"], presenter: "Bernardo Ribeiro", venue: "ASPLOS'26", paper: "https://dl.acm.org/doi/10.1145/3779212.3790221", photo: "images/speakers/bernardo.jpeg", abstract: "Unpredictable costs are a growing concern in serverless computing, where applications rely on cloud APIs with complex tiered pricing models. In many deployments, API calls dominate expenses, and a single overlooked design choice can escalate costs by thousands of dollars. Existing tools fall short: provider calculators need unrealistic manual estimates, and dynamic profilers only work post-deployment.\n" +
					"We present Skyler, a static analysis framework for pre-deployment cost estimation of API invocations in serverless workflows. Skyler models control flow behavior and pricing semantics to construct symbolic cost expressions using SMT formulas, exposing economic sinks, i.e., code paths where API usage disproportionately impacts cost. This enables developers to identify hotspots and prevent costly architectural errors early. Skyler supports JavaScript-based serverless applications across AWS Lambda, Google Cloud Functions, and Azure Functions, achieving high accuracy (mean absolute percentage error 1% for AWS and Google, 4.5% for Azure)." },
			{ time: "10:10", title: "Aletheia: Automated Detection of Data Integrity Violations in Microservices", authors: ["Mafalda Sofia Ferreira", "João Ferreira Loff", "João Garcia", "Rodrigo Rodrigues"], presenter: "João Garcia", project: "GLOG Project", venue: "OSDI'26", paper: "https://www.usenix.org/conference/osdi26/presentation/ferreira", photo: "images/speakers/garcia.png", abstract: "The decomposition of applications into microservices results in data being stored across heterogeneous systems, with data schemas partitioned and managed by separate services. As the size and complexity of microservice deployments grow, the consistency of data associations at the application level can be overlooked, and it becomes challenging to manually identify data integrity violations.\n" +
					"\n" +
					"In this paper, we present a systematic approach for identifying semantic violations in microservice ecosystems, namely operations and service interactions that break data integrity. We formalize these violations by leveraging the Entity-Relationship model and relational algebra to characterize problematic operation patterns across distributed services. We then introduce Aletheia, a static analysis tool that operationalizes this framework, using the static single assignment (SSA) representation to track data flow and a novel abstract call graph to detect integrity violations. We evaluate Aletheia on 7 open-source applications, detecting 46 previously unreported integrity violations, and use production-scale synthetic applications to demonstrate scalability to large call graphs with up to 500 microservices."  },
			{ time: "10:30", title: "Linearizable Shared Log API Considered Harmful", authors: ["Yu-Ju Huang", "Shubham Chaudhary", "Rafael Soares", "Shir Cohen Gahtan", "Sabrina Johnson", "Arnav Kaul", "Lorenzo Alvisi", "Luis Rodrigues", "Robbert van Renesse"], presenter: "Rafael Soares", project: "GLOG Project", venue: "EuroSys'27", paper: "", photo: "images/speakers/rasoares.jpeg", abstract: "Shared logs are a core building block for distributed systems,\n" +
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
					"and stronger consistency."}
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
			{ time: "14:30", title: "Towards Geo-Replicated HTAP", authors: ["José Orlando Pereira"], presenter: "José Orlando Pereira", invited: true, link: "#invited" },
			{ time: "14:50",
				title: "Rose: Reproducing External-Fault-Induced Failures in Distributed Systems with Lightweight Instrumentation", authors: ["Sebastião Amaro", "Pedro Fonseca", "Miguel Matos"], presenter: "Sebastião Amaro", venue: "EuroSys'26", paper: "https://dl.acm.org/doi/10.1145/3767295.3803625", photo: "images/speakers/sa-photo.png", abstract: "Distributed systems form the backbone of critical infrastructures, yet remain vulnerable to external-fault-induced bugs that manifest only when specific external events occur during specific application states. Existing approaches to reproducing these bugs require fine-grained information about the application, which might not be available in production, and operate within a limited fault model. Rose is a novel approach that collects traces from production and systematically generates fault schedules that reproduce these bugs. By leveraging the insight that external faults are observable through system interfaces, Rose uses lightweight tracing (2.6% overhead) to capture essential application-environment interactions. Then, it identifies the application states when faults must occur to trigger bugs, and generates schedules that consistently reproduce these bugs. Rose reproduced 20 bugs across eight production systems implemented in diverse languages (C, C++, Java, Go, Scala), including widely-used systems such as Zookeeper, MongoDB, and HBase."
				},
			{ time: "15:10",
				title: "FUR: Fast and Unlimited Reads on Persistent Memory Transactions", authors: ["João Barreto", "Daniel Castro", "Paolo Romano", "Alexandro Baldassin"], presenter: "Daniel Castro", venue: "EuroSys'26", paper: "https://dl.acm.org/doi/10.1145/3767295.3769343", photo: "images/speakers/dcastro.jpg", abstract: "Despite the recent improvements in supporting Persistent Hardware Transactions (PHTs) on emerging persistent memories (PM), they have largely overlooked the poor performance of Read-Only (RO) transactions, which suffer from two crucial bottlenecks: i) the considerable post-commit delays required to ensure consistency with concurrent update transactions; and ii) the well-known tight read capacity limits of the commercially available HTM implementations.\n" +
					"We propose FUR, a new design for PHT that eliminates the two most crucial bottlenecks that hinder RO transactions in state-of-the-art PHT. At its core, FUR exploits advanced instructions that some contemporary HTMs provide to suspend (and resume) transactional access tracking.\n" +
					"With the exception of workloads comprised of 100% update transactions, our experimental evaluation with an IBM POWER9 system using the TPC-C benchmark shows that FUR can outperform the state of the art designs for persistent hardware (SPHT) and software memory transactions (Pisces or SpecPMT-based) by up to 6.17×."
				},
			{ time: "15:30", title: "Accelerating Transactional Execution via Processing-In-Memory", authors: ["André Lopes", "Daniel Castro", "Paolo Romano"], presenter: "André Lopes", project: "GLOG Project", venue: "EuroSys'26", paper: "https://dl.acm.org/doi/abs/10.1145/3767295.3803621", photo: "images/speakers/Andre.png", abstract: "Processing-in-Memory (PIM) integrates compute capabilities directly into memory modules to reduce costly data movement, promising large performance gains for data-intensive workloads. In PIM systems, small processors—Data Processing Units (DPUs)—are embedded near memory banks to execute computations close to where data resides. Although PIM has shown strong benefits for analytical tasks, supporting transactional workloads such as online transaction processing (OLTP) remains challenging due to decentralized DPUs and the lack of efficient hardware coordination mechanisms.\n" +
					"We present PIM-TIDE (Processing-in-Memory with Transactional Isolation via Deterministic Execution), a new transaction execution platform designed for PIM architectures. PIM-TIDE provides a lightweight software-based coordination mechanism that enables transactions to span multiple DPUs, while ensuring consistency, atomicity, and isolation. By using the CPU selectively for transaction coordination, PIM-TIDE avoids the performance penalties of frequent inter-DPU communication. We evaluate PIM-TIDE on real PIM hardware (UPMEM) and show that it achieves scalable transaction processing with low overhead, both in terms of performance and energy efficiency, in TPC-C based workloads."  }
		]
	},
	{
		type: "break",
		time: "16:00 – 16:30",
		name: "Coffee break"
	},
	{
		type: "session",
		time: "16:30 – 17:30",
		title: "Paper Session 3",
		chair: "Session Chair",
		talks: [
			{ time: "16:30", title: "\"Title TBA\"", authors: ["Nuno Preguiça"], presenter: "Nuno Preguiça", invited: true, link: "#invited" },
			{ time: "16:50",  title: "Narrowing the Expert-Automation Gap for Cross-Platform Network Function Offloading", authors: ["Francisco Pereira", "Hugo Sadok", "João Romeiras Amado", "Ruben Martins", "Fernando Ramos", "Justine Sherry", "Luis Pedrosa"], presenter: "Luis Pedrosa", venue: "", paper: "", photo: "images/speakers/pedrosa.jpeg", abstract: "Offloading Network Functions (NFs) to hardware accelerators allows them to reach higher throughputs under lower power consumption, yet porting NFs to these targets remains notoriously difficult. Existing automated compilers still lag behind expert-crafted solutions. We argue that this gap arises because expert developers reason over a much richer design space than current automatic compilers—jointly considering functional partitioning, data structure selection, and parameter tuning. We propose Synapse, the first NF offloading compiler to jointly reason about these multiple dimensions. Unlike prior tools that severely restrict the design space, Synapse explores a vastly wider space using simple heuristics guided by a fast analytical performance model. Synapse consistently generates solutions comparable to expert-crafted ones, increasing throughput by 3 orders of magnitude compared to state-of-the-art compilers by successfully finding more offloading solutions."},
			{ time: "17:10", title: "Principles and practice of TEE replication (and beyond)", authors: ["Rodrigo Rodrigues"], presenter: "Rodrigo Rodrigues", photo: "images/speakers/rodrod.jpg", abstract: "Trusted Execution Environments (TEEs) ensure the confidentiality and integrity of computations in hardware. Subject to the TEE's threat model, the hardware shields a computation from most externally induced fault behavior except crashes. As a result, a crash-fault tolerant (CFT) replication protocol should be sufficient when replicating trusted code inside TEEs. However, TEEs do not provide efficient and general means of ensuring the freshness of external, persistent state. Therefore, CFT replication is insufficient for TEE computations with external state, as this state could be rolled back to an earlier version when a TEE restarts. Furthermore, using BFT protocols in this setting is too conservative, because these protocols are designed to tolerate arbitrary behavior, not just rollback during a restart.\n" +
					"\n" +
					"In this talk, I will present the restart-rollback fault model for replicating TEEs, which precisely captures the possible fault behaviors of TEEs with external state. Then, I will show that existing replication protocols can be easily adapted to this fault model with few changes, while retaining their original performance. In particular, we adapted two widely used crash fault tolerant protocols—the Attiya, Bar-Noy, Dolev read/write register protocol and the Paxos consensus protocol—to the new fault model. Furthermore, we leverage these protocols to build a replicated metadata service called TEEMS, and then show that it can add TEE-grade confidentiality, integrity, and freshness to untrusted cloud storage services. Finally, time permitting, I will preview our ongoing work that highlights the power and generality of this model by applying to conventional replicated storage systems, to address a pending tension between performance and durability guarantees." }
		]
	},
	{
		type: "break",
		time: "20:00",
		name: "Dinner",
		location: "Mezze Restaurant",
		link: "#dinner"
	}
];
