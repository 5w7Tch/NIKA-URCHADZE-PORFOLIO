# NIKA URCHADZE
Full-Stack & AI Engineer — production LLM agents, macOS apps

Tbilisi, Georgia · +995 595 206 203 · nurch22@freeuni.edu.ge · linkedin.com/in/nika-urchadze-292358293 · github.com/5w7Tch · nika-urchadze.vercel.app

> The PDF is rendered from `cv/cv.html` (`npm run cv`). Keep this text in step with it.

## SUMMARY
AI and full-stack engineer who ships production systems end to end: primary engineer on Sophia, Edumentors' LLM support agent, architect of its lesson-transcription pipeline, and solo builder of three launched macOS products, from native Swift through licensing and payments.

## EXPERIENCE

### Edumentors — Full-Stack / AI Engineer — Jan 2026–Present
UK online tutoring marketplace · TypeScript, Node/Express, MongoDB, Redis, AWS, LangChain, OpenAI / Anthropic / Gemini, Nuxt/Vue
- **Sophia, production AI support agent:** primary engineer (~700 commits, 89% of all commits). Rebuilt it as one agentic loop over 70 problem types and 50+ role-scoped tools that perform real bookings, reschedules, cancellations and refunds; hybrid keyword + embedding retrieval puts the right problem in the top 5 for 81.6% of messages.
- **Autonomous sending:** built the judge that lets Sophia skip human review (nearest-neighbour vote over 7,274 past drafts + unanimous 5-vote LLM check): 24.6% of replies approved at 97.3% acceptance, 2,000+ auto-sent in the first month; guarded by a 225-case eval suite and nightly agents that turn support corrections into eval-verified merge requests.
- **Lesson transcription & AI review (architect):** Puppeteer bot fleet that joins Google Meet lessons, with a predictive EC2 autoscaler (60 concurrent sessions in-call in 43 s, 0 failures; join time 84 s → 10 s). LLM summaries, engagement scores and compliance flags; a single-call redesign cut tokens 7× and latency 6×. Enabled for ~24,500 sessions.
- **Messaging:** shipped the Sophia → Sales hand-off across 4 codebases (shadow-mode rollout, SQS fan-out, race-safe claims) and turned the in-app WhatsApp gateway into a standalone multi-number service (leader lease, durable outbox, signed webhooks, 79 tests) on AWS via Terraform and GitLab CI.
- **Quality & platform:** 330+ API tests over 83 payment, booking and referral endpoints, pinning 80+ real bugs incl. double payments; Vite 2 → 7 migration (build 24 s → 15 s); Sophia analytics; AI voice calls (ElevenLabs, LiveKit, Deepgram).

### Stimuli Digital — Software Engineer — Mar 2025–Jan 2026
- Built production Python backends (FastAPI, ARQ) for cold-email agencies running thousands of mailboxes: a private SaaS for buying and health-tracking email accounts and domains, plus LLM-driven lead qualification.
- Automated agency operations with Airtable, BigQuery, n8n, Make and Zapier for clients such as C17 and Hypergen.

## PRODUCTS — BUILT AND LAUNCHED SOLO

### RunWatch — paid macOS app for Claude Code users — runwatch.site — Oct 2026
- Shows every Claude Code session as a live status dot and jumps to it in one click. Built and launched in 5 days: Swift 6 / SwiftUI (94 tests), Cloudflare Worker licensing (Whop, offline Ed25519 device-bound licenses, free trial), forced updates.

### MeetMaster — free Google Meet notetaker for Mac — meetmaster.site — Oct 2026
- Follows you into Meet calls (CoreAudio mic detection, AppleScript, EventKit) with a hidden Playwright-driven Chrome and turns live captions into speaker-attributed notes; no audio, no server. Electron + Swift helper, 48 tests, signed auto-updates.

### Mona Lisa — commercial face-verification security app — mona-lisa.online — 2026
- Swift 6 menu-bar agent that locks every display when an unknown face is at the Mac (Vision → Core ML embeddings, blink liveness); Windows (.NET / WPF) and Linux (Avalonia) ports; Cloudflare Worker licensing with Whop and USDC payments.

## EDUCATION
**BSc Computer Science — Free University of Tbilisi** — expected 2027
ICPC International Olympiad Quarterfinalist. Teaching Assistant for OOP in Java and Design Patterns (Mar 2025 – Jan 2026).

## SKILLS
**Languages:** TypeScript/JavaScript, Python, Swift, Java, C#, C/C++, SQL
**AI / LLM:** agentic tool-calling systems, LangChain, RAG and embeddings, LLM evals (LLM-as-judge, Braintrust, LangSmith), OpenAI / Anthropic / Gemini / xAI APIs, Core ML, PyTorch
**Backend & infra:** Node.js/Express, FastAPI, MongoDB, PostgreSQL/Supabase, Redis, AWS (EC2, S3, SQS), Terraform, Docker, Cloudflare Workers, GitLab CI / GitHub Actions, Stripe / Whop
**Apps & frontend:** SwiftUI/AppKit, Electron, React, Next.js, Vue/Nuxt, React Native/Expo, three.js, Puppeteer/Playwright
**Spoken:** English, German, Georgian
