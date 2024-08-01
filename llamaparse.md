     NVIDIA
Company Overview
May 23, 2024<!--- Page 1 --->
---
Except for the historical information contained herein, certain matters in this presentation including, but not limited to, statements as to: our financial position; our markets, market opportunity, demand and growth drivers; our financial outlook; the benefits, impact, performance, features and availability of our products and technologies; the benefits, impact, features and timing of our collaborations or partnerships; third parties adopting our products and technologies; NVIDIA accelerated computing being broadly recognized as the way to advance computing as Moore’s law ends and AI lifts off; accelerated computing being needed to tackle the most impactful opportunities of our time; AI driving a platform shift from general purpose to accelerated computing, and enabling new, never-before-possible applications; trillion dollars of installed global data center infrastructure transitioning to accelerated computing; broader enterprise adoption of AI and accelerated computing under way; AI and accelerated computing making possible the next big waves of autonomous machines and industrial digitalization; a rapidly growing universe of applications and industry innovation; the ability of developers to engage with NVIDIA through CUDA; AI augmenting creativity and productivity by orders of magnitude across industries; generative AI as the most important computing platform of our generation; data centers becoming AI factories; large language models being one of today’s most important advanced AI technologies, involving up to trillions of parameters that learn from text; full-stack and data center scale acceleration driving significant cost savings and workload scaling; the high ROI of high compute performance; NVIDIA powering the AI industrial revolution; the ability of developers to connect additional or third party services to the AI chatbot via cloud AI APIs; AI factories acting as trusted engines of generative AI; features of AI factories; nations using AI factories as sovereign national resources to process private datasets of companies, startups, universities and governments safely on shore to produce valuable insights; every important company running its own AI factories; NVIDIA generating recurring revenue from AI factories for their use of NVIDIA AI Enterprise, the operating system for enterprise AI, in addition to the up-front revenue opportunity from data center systems; our dividend program plan; our strategic investments; NVIDIA on track to achieve 100% renewable electricity for offices and data centers under operational control by end of FY25; and NVIDIA’s plan to engage manufacturing suppliers comprising at least 67% of scope 3 category 1 GHG emissions to effect supplier adoption of science-based targets by end of FY26 are forward-looking statements.

These forward-looking statements and any other forward-looking statements that go beyond historical facts that are made in this presentation are subject to risks and uncertainties that may cause actual results to differ materially. Important factors that could cause actual results to differ materially include: global economic conditions; our reliance on third parties to manufacture, assemble, package and test our products; the impact of technological development and competition; development of new products and technologies or enhancements to our existing product and technologies; market acceptance of our products or our partners' products; design, manufacturing or software defects; changes in consumer preferences and demands; changes in industry standards and interfaces; unexpected loss of performance of our products or technologies when integrated into systems and other factors.

NVIDIA has based these forward-looking statements largely on its current expectations and projections about future events and trends that it believes may affect its financial condition, results of operations, business strategy, short-term and long-term business operations and objectives, and financial needs. These forward-looking statements are subject to a number of risks and uncertainties, and you should not rely upon the forward-looking statements as predictions of future events. The future events and trends discussed in this presentation may not occur and actual results could differ materially and adversely from those anticipated or implied in the forward-looking statements. Although NVIDIA believes that the expectations reflected in the forward-looking statements are reasonable, the company cannot guarantee that future results, levels of activity, performance, achievements or events and circumstances reflected in the forward-looking statements will occur. Except as required by law, NVIDIA disclaims any obligation to update these forward-looking statements to reflect future events or circumstances. For a complete discussion of factors that could materially affect our financial results and operations, please refer to the reports we file from time to time with the SEC, including our most recent Annual Report on Form 10-K, Quarterly Reports on Form 10-Q, and Current Reports on Form 8-K. Copies of reports we file with the SEC are posted on our website and are available from NVIDIA without charge.

Many of the products and features described herein remain in various stages and will be offered on a when-and-if-available basis. The statements within are not intended to be, and should not be interpreted as a commitment, promise, or legal obligation, and the development, release, and timing of any features or functionalities described for our products is subject to change and remains at the sole discretion of NVIDIA. NVIDIA will have no liability for failure to deliver or delay in the delivery of any of the products, features or functions set forth herein.

NVIDIA uses certain non-GAAP measures in this presentation including non-GAAP gross profit, non-GAAP gross margin, non-GAAP operating income, non-GAAP operating margin, and free cash flow. NVIDIA believes the presentation of its non-GAAP financial measures enhances investors' overall understanding of the company's historical financial performance. The presentation of the company's non-GAAP financial measures is not meant to be considered in isolation or as a substitute for the company's financial results prepared in accordance with GAAP, and the company's non-GAAP measures may be different from non-GAAP measures used by other companies. Further information relevant to the interpretation of non-GAAP financial measures, and reconciliations of these non-GAAP financial measures to the most comparable GAAP measures, may be found in the slide titled “Reconciliation of Non-GAAP to GAAP Financial Measures.”<!--- Page 2 --->
---
Headquarters: Santa Clara, CA

NVIDIA pioneered accelerated computing to help solve impactful challenges classical computers cannot. A quarter of a century in the making, NVIDIA accelerated computing is broadly recognized as the way to advance computing as Moore’s law ends and AI lifts off.

NVIDIA’s platform is installed in several hundred million computers, is available in every cloud and from every server maker, powers over 76% of the TOP500 supercomputers, and has over 5 million developers.

Headquarters: Santa Clara, CA

Headcount: ~29,600<!--- Page 3 --->
---
# NVIDIA’s Accelerated Computing Platform

Full-stack innovation across silicon, systems and software

|APPLICATION FRAMEWORKS|MODULUS|MONAI|MAXINE|NEMO|AVATAR|DRIVE|SAAC|METROPOLIS|HOLOSCAN|
|---|---|---|---|---|---|---|---|---|---|
|PLATFORM|NVIDIA AI NVIDIA OMNIVERSE| | | | | | | | |
|ACCELERATION LIBRARIES|RTX|CUDA-X|CUDA| | | | | | |
|SYSTEM SOFTWARE|Magnum IO| |DOCA| |Base Command|Forge| | | |
|HARDWARE|RTX|DGX|HGX|EGX|OVX|AGX|MLNX| | |

With nearly three decades of singular focus, NVIDIA is expert at accelerating software and scaling compute by a Million-X, going well beyond Moore’s law. Accelerated computing requires full-stack innovation—optimizing across every layer of computing—from silicon and systems to software and algorithms, demanding deep understanding of the problem domain.

Our full-stack platforms—NVIDIA AI and NVIDIA Omniverse—accelerate AI and industrial digitalization workloads. We accelerate workloads at data center scale, across thousands of compute nodes, treating the network and storage as part of the computing fabric. Our platform extends from the cloud and enterprise data centers to supercomputing centers, edge computing and PCs.

GPU
CPU
DPU
NIC
SWITCH
SOC<!--- Page 4 --->
---
# What Is Accelerated Computing?

A full-stack approach: silicon, systems, software

Not just a superfast chip—accelerated computing is a full-stack combination of:

- Chip(s) with specialized processors
- Algorithms in acceleration libraries
- Domain experts to refactor applications

To speed-up compute-intensive parts of an application

Amdahl’s law:

The overall system speed-up (S) gained by optimizing a single part of a system by a factor (s) is limited by the proportion of execution time of that part (p).

𝑆 = 1 / (1 − 𝑝 + 𝑠)

For example:

- If 90% of the runtime can be accelerated by 100X, the application is sped up 9X
- If 99% of the runtime can be accelerated by 100X, the application is sped up 50X
- If 80% of the runtime can be accelerated by 500X, or even 1000X, the application is sped up 5X<!--- Page 5 --->
---
# Why Accelerated Computing?

Advancing computing in the post-Moore’s Law era

109108

Accelerated computing is needed to tackle the most impactful opportunities of our time—like AI, climate simulation, drug discovery, ray tracing, and robotics. NVIDIA is uniquely dedicated to accelerated computing—working top-to-bottom, refactoring applications and creating new algorithms, and bottom-to-top—inventing new specialized processors, like RT Core and Tensor Core.

| |107|GPU-Computing perf|2X per year|1000X|
|---|---|---|---|---|
| |106| | | |
| |105|1.1X per year| | |
| |104| | | |
|103|Trillions of Operations per Second (TOPS)|1.5X perf per year| | |

“It’s the end of Moore’s Law as we know it.” - John Hennessy Oct 23, 2018

“Moore’s Law is dead.” - Jensen Huang, GTC 2013

1980
1990
2000
2010
2020
2030<!--- Page 6 --->
---
|1000x AI Compute in 8 Years| | | | | | |
|---|---|---|---|---|---|---|
| | | | | |Blackwell|20,000 TFLOPS FP4|
| | | | | |TFLOPS| |
| | | | |Hopper|4,000 TFLOPS FP8| |
| | | |Ampere|Pascal 19 TFLOPS FP16| | |
| |Volta 130 TFLOPS FP16| | | | | |
| | | |BF16/FP16| | | |
| |2016|2017|2020|2022|2024| |<!--- Page 7 --->
---
# Waves of Adoption of Accelerated Computing

A generational computing platform shift

Industrial DigitalizationAutonomous Vehicles & RoboticsEnterpriseCloud Service Providers & Consumer Internet

A new computing era has begun. Accelerated computing enabled the rise of AI, which is driving a platform shift from general purpose to accelerated computing, and enabling new, never-before-possible applications. The trillion dollars of installed global data center infrastructure will transition to accelerated computing to achieve better performance, energy-efficiency, and cost by an order of magnitude. Hyperscale cloud service providers and consumer internet companies have been the early adopters of AI and accelerated computing, with broader enterprise adoption now underway. AI and accelerated computing will also make possible the next big waves—autonomous machines and industrial digitalization.<!--- Page 8 --->
---
# NVIDIA Accelerated Computing for Every Wave

NVIDIA OmniverseNVIDIA Omniverse is a software platform for designing, building, and operating 3D and virtual world simulations. It harnesses the power of NVIDIA graphics and AI technologies and runs on NVIDIA-powered data centers and workstations.

Autonomous Vehicles & RoboticsNVIDIA DRIVE is a full-stack platform for autonomous vehicles (AV) that includes hardware for in-car compute, such as the Orin system-on-chip, and the full AV and AI cockpit software stack.

Industrial DigitalizationNVIDIA DGX Cloud is a cloud service that allows enterprises immediate access to the infrastructure and software needed to train advanced models for generative AI and other groundbreaking applications.

Enterprise Cloud Service Providers & Consumer InternetNVIDIA AI Enterprise is the operating system of AI, with enterprise-grade security, stability, manageability and support. It is available on all major CSPs and server OEMs and supports enterprise deployment of AI in production.

Cloud Service Providers & Consumer InternetNVIDIA HGX is an AI supercomputing platform purpose-built for AI. It includes 8 NVIDIA GPUs, as well as interconnect and networking technologies, delivering order-of-magnitude performance speed-ups for AI over CPU servers. It is broadly available from all major server OEMs/ODMs. NVIDIA DGX, an AI server based on the same architecture, along with NVIDIA AI software and support, is also available.<!--- Page 9 --->
---
# NVIDIA’s Accelerated Computing Ecosystem

| |Developers|CUDA Downloads*| | |
|---|---|---|---|---|
| |5.1M|53M| | |
| |2.5M|26M| | |
| |2021|2024|2021|2024|

The NVIDIA accelerated computing platform has attracted the largest ecosystem of developers, supporting a rapidly growing universe of applications and industry innovation.

Developers can engage with NVIDIA through CUDA—our parallel computing programming model introduced in 2006—or at higher layers of the stack, including libraries, pre-trained AI models, SDKs, and other development tools.

| |AI Startups|GPU-Accelerated Applications| | |
|---|---|---|---|---|
| |19K|3,700| | |
| |7K|1,700| | |
| |2021|2024|2021|2024|

*Cumulative<!--- Page 10 --->
---
# NVIDIA’s Multi-Sided Platform and Flywheel

|Scale|R&D $|Speed-Up|
|---|---|---|
|Installed Base|Developers|Cloud & OEMs|

The virtuous cycle of NVIDIA’s accelerated computing starts with an installed base of several hundred million GPUs, all compatible with the CUDA programming model.

- For developers—NVIDIA’s one architecture and large installed base give developer’s software the best performance and greatest reach.
- For end users—NVIDIA is offered by virtually every computing provider and accelerates the most impactful applications from cloud to edge.
- For cloud providers and OEMs—NVIDIA’s rich suite of Acceleration Platforms lets partners build one offering to address large markets including media & entertainment, healthcare, transportation, energy, financial services, manufacturing, retail, and more.
- For NVIDIA—Deep engagement with developers, computing providers, and customers in diverse industries enables unmatched expertise, scale, and speed of innovation across the entire accelerated computing stack — propelling the flywheel.

# NVIDIA Accelerated Computing Virtuous Cycle<!--- Page 11 --->
---
# Huge ROI From AI Driving a Powerful New Investment Cycle

AI can augment creativity and productivity by orders of magnitude across industries

Knowledge workers will use copilots based on large language models to generate documents, answer questions, or summarize missed meetings, emails and chats—adding hours of productivity per week. Copilots specialized for fields such as software development, legal services, or education can boost productivity by as much as 50%.

|Office AI Copilots|Search & Social Media|AI Content Creation|
|---|---|---|
|Over 1B knowledge workers|$700B in digital advertising annually|50M creators globally|

Social media, search, and e-commerce apps are using deep recommenders to offer more relevant content and ads to their customers, increasing engagement and monetization. Creators can generate stunning, photorealistic images with a single text prompt—compressing workflows that take days or weeks into minutes in industries from advertising to game development.

|Legal Services, Education|AI Software Development|Financial Services|
|---|---|---|
|1M legal professionals in the US|30M software developers globally|678B annual credit card transactions|
|9M educators in the US| | |

Call center agents augmented with AI chatbots can dramatically increase productivity and customer satisfaction. Drug discovery, financial services, agriculture, and food services, and climate forecasting are seeing order-of-magnitude workflow acceleration from AI.

|Customer Service with AI|Drug Discovery|Agri-Food | Climate|
|---|---|---|
|15M call center agents globally|1018 molecules in chemical space|1B people in agri-food worldwide|
| |40 exabytes of genome data|Earth-2 for km-scale simulation|

Source: Goldman Sachs, Cowen, Statista, Capital One, Wall Street Journal, Resource Watch, NVIDIA internal analysis<!--- Page 12 --->
---
# Generative AI

|TEXT|IMAGE|
|---|---|
|Learn and Understand Everything|VIDEO|

|IMAGE|VIDEO|3D|
|---|---|---|
|TEXT|IMAGE|SOUND|
|SPEECHTEXT|7|ANIMATION|

|MULTI-MODAL|AMINO ACID|
|---|---|
|BRAINWAVES|PROTEIN|

The era of generative AI has arrived, unlocking new opportunities for AI across many different applications.

Generative AI is trained on large amounts of data to find patterns and relationships, learning the representation of almost anything with structure. It can then be prompted to generate text, images, video, code, or even proteins.

For the very first time, computers can augment the human ability to generate information and create.

1,600+ Generative AI companies are building on NVIDIA.<!--- Page 13 --->
---
# Modern AI Is a Data Center Scale Computing Workload

Data centers are becoming AI factories: Data as input, intelligence as output

| |2012|2014|2016|2018|2020|2022|2024|
|---|---|---|---|---|---|---|---|
| |AI Training Computational Requirements| | | | | | |
| | | | | | |Fueling Giant-Scale AI Infrastructure| |
| | | | | | |NVIDIA compute & networking GPU | DPU | Switch | CPU| |

# Large Language Models, based on the Transformer architecture, are one of today’s most important advanced AI technologies, involving up to trillions of parameters that learn from text.

Developing them is an expensive, time-consuming process that demands deep technical expertise, distributed data center-scale infrastructure, and a full-stack accelerated computing approach.

|1010|GPT-MoE-1.8T|
|---|---|
|109|MT NLG 530B|
|108|GPT3-175B|
| |Chinchilla|
|107|Microsoft T-NLG|
|106|Wav2Vec 2.0|
| |XLNet|
| |MoCo ResNet50|
| |Xception|
|105|InceptionV3|
| |BERT Large|
| |GPT-1|
|104|VGG|
| |Resnet|
| |Seq2Seq|
| |ResNeXt|
|103|DenseNet201|
| |ELMo|
| |AlexNet|<!--- Page 14 --->
---
# Full-Stack & Data Center Scale Acceleration

Drive significant cost savings and workload scaling

|Classical Computing—960 CPU-only servers|Accelerated Computing—2 GPU servers|
|---|---|
|Application CPU server racks|Application Re-Engineered for Acceleration|
|HHHHH|CUDA-X Acceleration Libraries Magnum IO 25X lower cost 84X better energy-efficiency|

LLM Workload: Bert-Large Training and Inference | CPU Server: Dual-EYPC 7763 | GPU Server: Dual-EPYC 7763 + 8X H100 PCIe GPUs<!--- Page 15 --->
---
# The High ROI of High Compute Performance

$1 upfront investment in NVIDIA compute and networking can translate to $5 in CSP revenue over 4 years

| |4-Year Rental Opportunity|
|---|---|
|@$4 per GPU-HR|~$2.5B Rental|

4-Year Cost of AI Infrastructure

~$1B

16K GPU Cost

Illustrative example of NVIDIA GPU cost vs AI infrastructure total cost of ownership (TCO)

|DC Facility Build & Operate|GPU Compute|
|---|---|
|25% Performance Increase Worth $600M+|15% Utilization Increase Worth $350M+|<!--- Page 16 --->
---
# Powering the AI Industrial RevolutionBuilding and running enterprise Gen AI applications

|NVIDIA AI Foundation|Pre-Trained LLMs| | | |
|---|---|---|---|---|
| | |Cloud|DGX Cloud| |
|NVIDIA DGX Cloud| |Enterprise On-Prem|Enterprise AI Chatbot|Cloud AI APIs|
|NVIDIA AI Enterprise| | | | |
| | |Enterprise SaaS|& AI Platforms| |
|NIM| | | |Enterprise AI chatbots|
|Are built with Retrieval Augmented Generation (RAG), which augments the knowledge in the LLM with Enterprise data mapped to a Vector Database, thus reducing "hallucinations". Developers can connect additional or 3rd party services to the AI chatbot via cloud AI APIs.| | | | |

# AI Foundation DGX Cloud Model Tech Factory Experts

NVIDIA AI foundry service for building Enterprise AI applications

# NVIDIA AI enterprise ecosystem

for running Enterprise AI applications<!--- Page 17 --->
---
# The NVIDIA AI Foundry Model on DGX Cloud

For building enterprise AI applications Pre-trained LLMs

NVIDIA’s “AI foundry” service leverages our AI infrastructure and expertise to build custom AI models for enterprise customers— analogous to a semiconductor foundry that uses its infrastructure and expertise to build custom chips for fabless customers.

An enterprise customer starts with an NVIDIA or 3rd party pre-trained AI model, available in NVIDIA AI Foundations. This model making service includes frameworks such as NVIDIA NeMo for custom LLMs and NVIDIA Picasso for custom generative AI for visual design. With help from NVIDIA experts, the enterprise customer fine-tunes the model on their proprietary enterprise data and adds guardrails, using tools available in NVIDIA AI Foundations.

The fine-tuning and optimization is done on NVIDIA DGX Cloud, a cloud service that allows enterprises immediate access to NVIDIA AI infrastructure and software, hosted at partner cloud providers. The enterprise customer ends up with a fully-trained and optimized AI model, fine-tuned on their proprietary enterprise data, that can be deployed anywhere—in the cloud or on-prem.

The NVIDIA AI Foundry model generates revenue based on per-node, per-month consumption of NVIDIA DGX Cloud.<!--- Page 18 --->
---
# AI Factories—A New Class of Data Centers

For running enterprise AI applications

'AI factories' are next-generation data centers that host advanced, full-stack accelerated computing platforms for NVIDIA AI Enterprise the most computationally intensive tasks, where data comes in and intelligence comes out.

|DATA|TOKENS|
|---|---|
|These new data centers will act as trusted engines of generative AI. Every important company will run its own AI factories to securely process its valuable proprietary data and turn it into monetizable tokens, encapsulating its knowledge, intelligence, and creativity. Nations are using AI factories as sovereign national resources—processing private datasets of companies, startups, universities and governments safely on shore to produce valuable insights. In addition to the up-front revenue opportunity from data center systems, NVIDIA can generate recurring revenue from AI factories with NVIDIA AI Enterprise, the operating system for enterprise AI.|AI Factory|

Cloud Enterprise Enterprise SaaS On-Prem & AI Platforms<!--- Page 19 --->
---
# NVIDIA AI Enterprise

The operating system for enterprise AI

# NVIDIA AI Enterprise

NVIDIA AI Enterprise is software for deploying and running AI with enterprise-grade security, API stability, manageability, and support. Cloud-native and available in every major cloud marketplace. Certified to run on servers and workstations from all major OEMs. Supported by all major global system integrators. Integrated with and distributed by VMware.

# AI Use Cases and Workflows

|LLM|Speech AI|Recommenders|Cybersecurity|
|---|---|---|---|
|Medical Imaging|Video Analytics|Route Optimization|More|

Cloud: Azure | GCP | OCI | AWS

NVIDIA Certified Server: Dell | HPE | Lenovo

Consumption pricing per GPU-hour

Subscription pricing per GPU/year (included with H100 PCIe/DGX)<!--- Page 20 --->
---
# NVIDIA AI Enterprise

|GSI & Service Delivery|AI Platforms|Software Platforms|
|---|---|---|
|Private Cloud|Public Cloud|Marketplaces|
| | |Server OEMs|<!--- Page 21 --->
---
# NVIDIA Inference Microservice (NIM)

Extending reach of the platform, connecting millions of developers to hundreds of millions of CUDA GPUs in the installed base

# Industry Standard APIs

Text, Speech, Image, Video, 3D, Biology

# Triton Inference Server

cuDF, CV-CUDA, DALI, NCCL, Post Processing Decoder

# Cloud Native Stack

GPU Operator, Network Operator

# TensorRT LLM and Triton

cuBLAS, cuDNN, In-Flight Batching, Memory Optimization, FP8 Quantization

# Optimized Model

Single GPU, Multi-GPU, Multi-Node

# Customization Cache

P-Tuning, LORA, Model Weights

# Enterprise Management

Health Check, Identity, Metrics, Monitoring, Secrets Management

Kubernetes

NVIDIA CUDA

Available Now as Part of NVIDIA AI Enterprise 5.0

$4,500/GPU/YEAR, $1/GPU/HOUR<!--- Page 22 --->
---
# NVIDIA Go-to-Market Across Cloud and On-PremisesReaching customers everywhere

|DGX Cloud|c|7C0|
|---|---|---|
|NVIDIA AI Foundations - Cloud services for customizing and operating generative AI models|c|7C0|

|Partners|F|WHH| | | |
|---|---|---|---|---|---|
| |HGX|INFERENCE|MGX|AGX|IGX|

Cloud

On-Prem<!--- Page 23 --->
---
# Driving Strong & Profitable Growth

|Revenue ($M)|$45,000|$60,922|$36,000|$27,000|$18,000|$12,690|$18,059|$3,735|$6,803|$9,040|
|---|---|---|---|---|---|---|---|---|---|---|
|Operating Income (Non-GAAP, $M)|$37,134| | | | | | | | | |
|Operating Margin (Non-GAAP)|70%|60%|61%|50%|47%|41%|34%|30%| | |

Fiscal year ends in January. Refer to Appendix for reconciliation of Non-GAAP measures. Operating margins rounded to the nearest percent.

| |FY20|FY21|FY22|FY23|FY24|YTD FY25| | | |
|---|---|---|---|---|---|---|---|---|---|
|$26,914|$26,974|$26,044| | | |Q1 FY22| | |Q1 FY25|

| |FY20|FY21|FY22|FY23|FY24|YTD FY25|
|---|---|---|---|---|---|---|
|Gaming|6%|3%|6%|2%|10%| |
|Data Center| | | | | | |
|ProViz| | |49%| | | |
|Auto|36%| | | | | |
|OEM & Other| | | | |87%| |<!--- Page 24 --->
---
# NVIDIA Gross Margins Reflect Value of Acceleration

|Gross Profit (Non-GAAP, $M)|Gross Margin (Non-GAAP)|
|---|---|
|$48,000|90%|
|$42,000|85%|
|$36,000|79%|
|$30,000|74%|
|$24,000|70%|
|$18,000|66%|
|$12,000|63%|
|$6,000|59%|
|$0|55%|

Accelerated computing requires full-stack and data center-scale innovation across silicon, systems, algorithms, and applications.

Significant expertise and effort are required, but application speed-ups can be incredible, resulting in dramatic cost and time-to-solution savings.

For example, 2 NVIDIA HGX nodes with 16 NVIDIA H100 GPUs that cost $400K can replace 960 nodes of CPU servers that cost $10M for the same LLM workload.

NVIDIA chips carry the value of the full-stack, not just the chip.

Cost comparison example based on latest available NVIDIA A100 GPU and Intel CPU inference results in the commercially available category of the MLPerf industry benchmark; includes related infrastructure costs such as networking.

Fiscal year ends in January. Refer to Appendix for reconciliation of Non-GAAP measures. Gross margins are rounded to the nearest percent.<!--- Page 25 --->
---
# Strong Cash Flow Generation

|Free Cash Flow (Non-GAAP)|Capital Allocation|
|---|---|
|$26.9B|Share Repurchase|
| |Utilized cash towards $9.5B of repurchases in FY24|
| |$14.5B Remaining Authorization as of end of Q1|
|$14.9B|Dividend|
| |$395M in FY24|
| |Plan to Maintain|
|$8.0B| |

| |FY20|FY21|FY22|FY23|FY24|YTD FY25|
|---|---|---|---|---|---|---|
|Strategic Investments|$4.3B|$4.7B|$3.8B| | | |
|Growing Our Talent| | | | | | |
|Platform Reach & Ecosystem| | | | | | |

Fiscal year ends in January. Refer to Appendix for reconciliation of Non-GAAP measures.

1 Subject to continuing determination by our Board of Directors.<!--- Page 26 --->
---
# Our Market Platforms at a Glance

| |Data Center|Gaming|Professional Visualization|Automotive|
|---|---|---|---|---|
|78% of FY24 Revenue|17% of FY24 Revenue|3% of FY24 Revenue|2% of FY24 Revenue| |
|FY24 Revenue $47.5B|FY24 Revenue $10.4B|FY24 Revenue $1.6B|FY24 Revenue $1.1B| |
|5-YR CAGR 75%|5-YR CAGR 11%|5-YR CAGR 7%|5-YR CAGR 11%| |

DGX/HGX/MGX/IGX systems GPU | CPU | DPU | Networking

GeForce GPUs for PC gaming GeForce NOW cloud gaming NVIDIA RTX GPUs for workstations

NVIDIA AI software Omniverse software DRIVE Hyperion sensor architecture with AGX compute DRIVE AV & IX full stack software for ADAS, AV & AI cockpit<!--- Page 27 --->
---
# Data Center

The leading accelerated computing platform

|Revenue ($M)| |
|---|---|
|75% 5-YR CAGR|$47,525|
|Through FY24| |

Leader in AI & HPC

- #1 in AI training and inference
- Used by all hyperscale and major cloud computing providers and over 40,000 companies
- Powers over 75% of the TOP500 supercomputers

# Growth Drivers

| | |
|---|---|
|$22,563|Broad data center platform transition from general-purpose to accelerated computing|
|$15,005|Emergence of “AI factory” — optimized for refining data and training, inferencing, and generating AI|
|$10,613|Broader and faster product launch cadence to meet a growing and diverse set of AI opportunities|
|$6,696| |
|$2,983|DGX Cloud services and NVIDIA AI Enterprise software for building and running enterprise AI applications|

FY20 FY21 FY22 FY23 FY24 YTD FY25<!--- Page 28 --->
---
# NVIDIA Blackwell Platform

NVLINK SwitchHGX B100

|Spectrum X800 Switch|Quantum X800 Switch|BlueField-3 SuperNIC|
|---|---|---|
|GB200 Superchip|ConnectX-8 SuperNIC| |
| |Compute Node| |<!--- Page 29 --->
---
# Gaming

GeForce—the world’s largest gaming platform

|Revenue ($M)|Leader in PC Gaming|
|---|---|
|11% 5-YR CAGR|Strong #1 market position|
|Through FY24|15 of the top 15 most popular GPUs on Steam|
| |Leading performance & innovation|
| |200M+ gamers on GeForce|

|$12,462| |
|---|---|
|$10,447| |
|$9,067| |
|$7,759| |
|$5,518| |
|$2,647| |

Growth Drivers

- Rising adoption of NVIDIA RTX in games
- Expanding universe of gamers & creators
- Gaming laptops & Gen AI on PCs
- GeForce NOW Cloud gaming

FY20        FY21     FY22         FY23        FY24       YTD FY25<!--- Page 30 --->
---
# GeForce Extends Growth, Large Upgrade Opportunity

|GeForce Gaming Revenue|Installed Base|$699+ Cumulative Sell-Through $|
|---|---|---|
|13% CAGR| | |
| |NVIDIA|Ada|
| |53% RTX| |
|3YR CAGR| | |
| |NVIDIA|Ampere|
|ASP 16%| | |
|Units -2%| | |
| |NVIDIA|Turing|
| |25% RTX3060+| |
| |Performance| |

FY21            FY24                                                                    1 4 7 10 13 16 19 22 25 28 31 34 37 40 43 46 49 52

Weeks After Launch

Installed Base Needs Upgrade

Source: NVIDIA estimates<!--- Page 31 --->
---
# Professional Visualization Workstation graphics

|Revenue ($M)|Leader in Workstation Graphics|
|---|---|
|7% 5-YR CAGR Through FY24|95%+ market share in graphics for workstations|
|$2,111|45M Designers and Creators|
| |Strong software ecosystem with over 100 RTX accelerated and supported applications|

$1,544$1,553$1,212$1,053$427

Growth Drivers

- Gen AI adoption across design and creative industries
- Enterprise AI development, model fine-tuning, cross-industry
- Ray tracing revolutionizing design and content creation
- Expanding universe of designers and creators
- Omniverse for digital twins and collaborative 3D design
- Hybrid work environments<!--- Page 32 --->
---
# Automotive Autonomous Vehicle and AI Cockpit

|Revenue ($M)|Leader in Autonomous Driving|
|---|---|
|11% 5-YR CAGR Through FY24|NVIDIA DRIVE is our end-to-end Autonomous Vehicle (AV) and AI Cockpit platform featuring a full software stack and is powered by NVIDIA (systems-on-a-chip) SoCs in the vehicle|
| |DRIVE Orin SoC ramp began in FY23|
| |Next-generation DRIVE Thor SoC ramp to begin in FY26|
|$1,091|Over 40 customers including 20 of top 30 EV makers, 7 of top 10 truck makers, 8 of top 10 robotaxi makers|
|$903| |
|$700| |
|$536| |
|$566| |
|$329| |

Growth Drivers

- Adoption of centralized car computing and software-defined vehicle architectures
- AV software and services: Mercedes-Benz, Jaguar Land Rover<!--- Page 33 --->
---
# $1 Trillion Long-Term Available Market Opportunity

|Omniverse Enterprise|$150B|
|---|---|
|Industrial Digitalization| |
|Autonomous Vehicles & Robotics|$300B|
|NVIDIA AI Enterprise & DGX Cloud|$150B|
|Cloud Service Providers|$100B|
|Consumer Internet| |
|Gaming| |
|Data Center Systems|$300B|<!--- Page 34 --->
---
Financials<!--- Page 35 --->
---
# Annual Cash & Cash Flow Metrics

| |Operating Income (Non-GAAP)—$M| |Operating Cash Flow—$M| | | |
|---|---|---|---|---|---|---|
| | |37,134| | |28,090| |
|12,690|9,108|6,803|9,040|4,761|5,822|5,641|
|3,735| | | | | | |

| |Free Cash Flow (Non-GAAP)—$M| |Cash Balance—$M|
|---|---|---|---|
| |26,947| |25,984|
| | |21,208| |
| |11,561|13,296| |
| |10,897| | |
|8,049| | | |
|4,272|4,677|3,750| |

Cash balance is defined as cash and cash equivalents plus marketable securities.

Refer to Appendix for reconciliation of non-GAAP measures.<!--- Page 36 --->
---
# Corporate Sustainability

|Environmentally Conscious|A Place For People To Do Their Life’s Work|Management|
|---|---|---|
|NVIDIA Blackwell GPUs are as much as 20X more energy efficient than CPUs for certain AI and HPC workloads|GLASSDOOR|Fast Company Magazine’s World’s 50 Most Innovative Companies|
|On track to achieve 100% renewable electricity for offices and data centers under operational control by end of FY25|BARRON’S|“Best Places to Work” Fortune’s World’s Most Admired Companies|
|Plan to engage manufacturing suppliers comprising at least 67% of scope 3 category 1 GHG emissions to effect supplier adoption of science-based targets by end of FY26|NEWSWEEK|“America’s Most Sustainable Companies” Wall Street Journal’s Management Top 250|
| |FORTUNE|“America’s 100 Best Companies to Work For”|
| | |Corporate Governance|
|50% of Board is Gender, Racially, or Ethnically Diverse| |92% of Directors are independent|<!--- Page 37 --->
---
Reconciliation of Non-GAAP
to GAAP Financial Measures<!--- Page 38 --->
---
# Reconciliation of Non-GAAP to GAAP Financial Measures

|Gross Margin ($ in Millions & Margin Percentage)|Non-GAAP|Acquisition-Related and Other Costs (A)|Stock-Based Compensation (B)|Other (C)|GAAP|
|---|---|---|---|---|---|
|FY 2020|$6,821|—|(39)|(14)|$6,768|
| |62.5%|—|(0.4)|(0.1)|62.0%|
|FY 2021|$10,947|(425)|(88)|(38)|$10,396|
| |65.6%|(2.6)|(0.5)|(0.2)|62.3%|
|FY 2022|$17,969|(344)|(141)|(9)|$17,475|
| |66.8%|(1.4)|(0.5)|—|64.9%|
|FY 2023|$15,965|(455)|(138)|(16)|$15,356|
| |59.2%|(1.7)|(0.5)|(0.1)|56.9%|
|FY 2024|$44,959|(477)|(141)|(40)|$44,301|
| |73.8%|(0.8)|(0.2)|(0.1)|72.7%|
|YTD 2025|$20,560|(119)|(36)|1|$20,406|
| |78.9%|(0.4)|(0.1)|—|78.4%|

A. Consists of amortization of intangible assets and inventory step-up

B. Stock-based compensation charge was allocated to cost of goods sold

C. Other consists of IP-related costs and assets held for sale related adjustments<!--- Page 39 --->
---
# Reconciliation of Non-GAAP to GAAP Financial Measures (contd.)

|Operating Income and Margin ($ in Millions & Margin Percentage)|Non-GAAP|Acquisition-Related Termination Cost|Stock-Based Compensation|Other|GAAP| | | | | | |
|---|---|---|---|---|---|---|---|---|---|---|---|
|FY 2020|FY 2021|FY 2022|FY 2023|FY 2024|YTD 2025| | | | | | |
| |$3,735|$6,803|$12,690|$9,040|$37,134|$18,059| | | | | |
| |34.2%|40.8%|47.2%|33.5%|61.0%|69.3%| | | | | |
| | |—|—|—|(1,353)|—|—| | | | |
| | | |(31)|(836)|(636)|(674)|(583)|(140)| | | |
| | | | |(844)|(1,397)|(2,004)|(2,710)|(3,549)|(1,011)| | |
| | | | | |(14)|(38)|(9)|(79)|(30)|1| |
| | | | | | |$2,846|$4,532|$10,041|$4,224|$32,972|$16,909|

A. Consists of amortization of acquisition-related intangible assets, inventory step-up, transaction costs, compensation charges, and other costs

B. Stock-based compensation charge was allocated to cost of goods sold, research and development expense, and sales, general and administrative expense

C. Comprises of legal settlement cost, contributions, restructuring costs and assets held for sale related adjustments<!--- Page 40 --->
---
|($ in Millions)|Free Cash Flow|Purchases Related to Property and Equipment and Intangible Assets|Principal Payments on Property and Equipment and Intangible Assets|Net Cash Provided by Operating Activities|
|---|---|---|---|---|
|FY 2020|$4,272|489|—|$4,761|
|FY 2021|$4,677|1,128|17|$5,822|
|FY 2022|$8,049|976|83|$9,108|
|FY 2023|$3,750|1,833|58|$5,641|
|FY 2024|$26,947|1,069|74|$28,090|
|YTD 2025|$14,936|369|40|$15,345|<!--- Page 41 --->
---
<!--- Page 42 --->