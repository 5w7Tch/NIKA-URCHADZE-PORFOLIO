# NIKA URCHADZE
AI & Full-Stack Engineer — production LLM agents, web platforms, desktop apps

Tbilisi, Georgia · +995 595 206 203 · nurch22@freeuni.edu.ge · linkedin.com/in/nika-urchadze-292358293 · github.com/5w7Tch · nika-urchadze.vercel.app

> The PDF is rendered from `cv/cv.html` (`npm run cv`). Keep this text in step with it.

## SUMMARY
AI and full-stack engineer who ships production systems end to end. Primary engineer on Sophia, Edumentors' LLM support agent that resolves live customer chats with 50+ tools and sends approved replies on its own; architect of the platform's lesson transcription pipeline; builder of features across its Node.js backend and Vue apps. Has launched three desktop products solo, from native code through licensing, payments and LLM features.

## EXPERIENCE

### Edumentors — AI / Full-Stack Engineer — Jan 2026–Present
UK online tutoring marketplace · TypeScript, Node.js, MongoDB, Redis, AWS, Vue/Nuxt, LangChain, OpenAI/Anthropic/Gemini/xAI

**AI engineering**
- **Sophia, production AI support agent:** primary engineer (800+ commits, 88% of all commits). Rebuilt it as one agentic loop over 70 problem types and 50+ role-scoped tools that perform real bookings, reschedules, cancellations and refunds; hybrid keyword + embedding retrieval puts the right problem in the top 5 for 81.6% of messages.
- **Success rate:** Sophia correctly handles 87% of the traffic that flows through support chats; the support team resolves the rest, and Sophia's automated improvement system learns from those corrections, raising the success rate week by week.
- **Lesson transcription & AI review (architect):** Puppeteer bot fleet that joins Google Meet lessons, with a predictive EC2 autoscaler (60 concurrent sessions in-call in 43 s, 0 failures; join time cut from ~84 s to ~10 s). LLM summaries, engagement scores and compliance flags; a single-call redesign cut tokens 7× and latency 6×. Enabled for ~24,500 sessions.

**Full-stack & platform**
- **Sales hand-off and WhatsApp platform:** end-to-end hand-off of customers from Sophia to the Sales team on WhatsApp, spanning the AI backend, main API, admin app and a standalone multi-number WhatsApp service deployed on AWS (Terraform, GitLab CI); rolled out in shadow mode, with race-safe claims so no customer is answered twice.
- **Support and admin platform:** the tools the support team works in, built in Nuxt/Vue on the Node API: Sophia's review and approval workflow with live drafts, analytics dashboards (time saved, weekly trends, audits), the lesson-transcript viewer, and a tutor-onboarding support chat across the admin and tutor apps.
- **Payments quality:** API test framework over 83 payment, booking and referral endpoints (330+ tests) that uncovered 40+ bugs, including double refunds, Stripe charges without idempotency keys and referral records anyone could delete.

### Stimuli Digital — Software Engineer — Mar 2025–Jan 2026
Cold-email outreach agency · Python, FastAPI, ARQ, React, PostgreSQL, LLM APIs, BigQuery
- **Email infrastructure SaaS:** built a privately hosted platform for buying, monitoring and health-tracking thousands of email accounts and domains, with automated redistribution, recovery and parallel tagging (hours of manual work cut to seconds) that keep outreach campaigns deliverable.
- **AI lead generation:** LLM pipelines for lead discovery, enrichment and qualification, fed by scrapers and Smartlead/Instantly campaign-sync workers; replaced paid data tools and saved the company thousands.
- **Client platforms:** portals and KPI dashboards for agencies such as C17, Sales Automation Systems and Hypergen, with onboarding and reporting automated across BigQuery, Looker Studio, Airtable, n8n and Make; contributed to OutFound, Stimuli's outreach SaaS.

## PRODUCTS — BUILT AND LAUNCHED SOLO

### MeetMaster — free Google Meet notetaker with AI, Mac and Windows — meetmaster.site — Oct–Nov 2026
- Follows you into Meet calls (mic-in-use detection, browser-tab reading, calendar sync) with a hidden Playwright-driven Chrome and turns live captions into speaker-attributed notes; no audio recorded.
- "Ask your meetings" and recurring AI tasks (recaps, decisions, to-dos) on Claude, ChatGPT, Gemini, Grok or Muse with the user's own key. Electron app with native Swift (CoreAudio, EventKit) and C# (UI Automation) helpers and signed auto-updates.

### RunWatch — paid macOS app for Claude Code users — runwatch.site — Oct 2026
- Shows every Claude Code session as a live status dot and jumps to it in one click, reading Claude Code's hook events and transcripts. Built and launched in 5 days: Swift 6 / SwiftUI (94 tests), Cloudflare Worker licensing (Whop, offline Ed25519 device-bound licenses, free trial), forced updates.

### Mona Lisa — commercial face-verification security app — mona-lisa.online — 2026
- Swift 6 menu-bar agent that locks every display when an unknown face is at the Mac (Vision alignment, Core ML face embeddings, blink liveness); Windows (.NET / WPF, ONNX Runtime) and Linux (Avalonia) ports; Cloudflare Worker licensing with Whop and USDC payments.

### Life Tracker — full-stack productivity platform, web and mobile — tracker-six-gules.vercel.app — 2026
- Next.js 16 / React 19 web app, Expo / React Native mobile app and a FastAPI + Supabase (Postgres) backend; zero-knowledge client-side encryption (PBKDF2 + AES-GCM) for finance data, a conflict-resolving sync engine, JWT auth, rate limiting and row-level security.

## EDUCATION
**BSc Computer Science — Free University of Tbilisi** — expected 2027
- ICPC International Olympiad Quarterfinalist.
- Machine learning: CycleGAN implemented from scratch in PyTorch for Kaggle's Monet style-transfer competition; regression modelling with scikit-learn.
- Teaching Assistant for OOP in Java and Design Patterns (Mar 2025 – Jan 2026).

## SKILLS
**Languages:** TypeScript/JavaScript, Python, Swift, C#, Java, C/C++, SQL
**AI / LLM:** agentic tool-calling systems, LangChain, RAG and hybrid retrieval, LLM evals (LLM-as-judge, pass@k), voice agents (LiveKit), OpenAI/Anthropic/Gemini/xAI APIs, Core ML, ONNX, PyTorch
**Backend & infra:** Node.js/Express, FastAPI, MongoDB, PostgreSQL/Supabase, Redis, AWS (EC2, S3, SQS), Terraform, Docker, Cloudflare Workers, GitLab CI/GitHub Actions, Stripe/Whop
**Frontend & apps:** Vue/Nuxt, React, Next.js, React Native/Expo, SwiftUI/AppKit, Electron, .NET/WPF, Playwright/Puppeteer
**Spoken:** English, German, Georgian
