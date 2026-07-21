# NIKA URCHADZE
Full-Stack Software Engineer · AI Engineering

Tbilisi · +995 595 206 203 · nurch22@freeuni.edu.ge · LinkedIn · GitHub (5w7Tch) · LeetCode

## SUMMARY
Full-stack engineer specializing in production LLM systems and end-to-end product delivery — from agentic AI backends serving live customers to a commercial macOS app shipped solo (native Swift, on-device ML, payments, licensing). Fourth-year Computer Science student at Free University of Tbilisi; ICPC International Quarterfinalist. Strong across TypeScript/Node, Python, React/React Native, and Swift.

## EXPERIENCE

### Edumentors — Full-Stack / AI Engineer — Jan 2026–Present
- Core engineer (300+ commits) on the AI backend powering "Sophia," an LLM support agent that autonomously handles parent/tutor/student chats in production for a UK tutoring platform (TypeScript, Express, MongoDB, Redis, Pusher real-time).
- Designed a two-stage agent architecture: a fast decision-maker LLM classifies each conversation into one of ~24 problem types, then a scoped executor agent resolves it — with per-problem model routing and fallback across OpenAI, Gemini, Anthropic, and xAI (LangChain).
- Built 30+ role-scoped function-calling tools that execute real operations — bookings, reschedules, cancellations, refunds, tutor replacement — behind a human-in-the-loop approval workflow with kill-switch-gated autonomous sending.
- Implemented a RAG pipeline (document chunking, Gemini embeddings, vector retrieval) for policy-grounded answers, plus a per-problem evaluation harness with LLM-as-judge (Braintrust, LangSmith) to ship prompt and code changes without regressions.
- Automated the improvement loop itself: nightly agentic jobs that read support-corrected bot replies from production, diagnose the defect, implement and eval-verify a fix, and open merge requests.
- Built AI voice features (ElevenLabs voice agents + Deepgram transcription for automated tutor-training feedback) and contributed to the admin dashboard (Nuxt/Vue: approval queues, bot analytics) and the main platform backend (Stripe, CRM/ads conversion sync).

### Stimuli Digital — Software Engineer — Mar 2025–Jan 2026
- Built production Python backends (FastAPI, ARQ workers, async processing) powering internal platforms for cold-email outreach agencies operating thousands of email accounts.
- Created a privately hosted SaaS for purchasing, monitoring, and health-tracking email accounts and domains at scale, with intelligent redistribution, recovery, and fleet-management systems to optimize campaign delivery.
- Designed AI workflows using LLM APIs for automated lead discovery, qualification, and decision-making; contributed to OutFound, Stimuli's proprietary outreach SaaS.
- Automated operations end-to-end across Airtable, ClickUp, BigQuery, Looker Studio, n8n, Make, Zapier, and Slack for global agencies (Sales Automation Systems, C17, Hypergen, OneAway), cutting manual work and operational costs.

### Free University of Tbilisi — Teaching Assistant (OOP; Design Patterns) — Mar 2025–Jan 2026
- Taught practical sessions on OOP in Java; graded coursework for correctness, design-pattern usage, and unit-testing practice across two courses.

## PROJECTS

### Mona Lisa — commercial macOS security app (solo) — mona-lisa.online — 2026
- Native Swift 6 / SwiftUI menu-bar agent that face-verifies the person at the Mac and locks the screen when an unenrolled user is detected: Vision landmark alignment → Core ML face embeddings (converted from ONNX) → cosine matching, with blink-based liveness detection against photo spoofing.
- Deep macOS internals: multi-display kiosk lock, reboot-surviving lock state, launchd respawn watchdog, one-shot low-power camera capture, ad-hoc code-signed DMG release pipeline with in-app forced updates.
- Built the full commercial stack solo: TypeScript Cloudflare Worker licensing backend — Paddle subscription webhooks (HMAC + replay protection), offline Ed25519 device-bound license tokens, trial-abuse blocking — plus the marketing/download site.

### Life Tracker — full-stack productivity platform (web + iOS/Android) — 2026
- One codebase family shipping three targets: Next.js 16/React 19 web app, Expo/React Native mobile app, and a FastAPI + Supabase (Postgres) backend, deployed on Vercel.
- Zero-knowledge client-side encryption for the finance module (PBKDF2 + AES-GCM — data never leaves the device unencrypted) and a custom conflict-resolving document-sync engine (optimistic versioning, automatic rebase-and-retry).
- Production-grade hardening: JWT auth, per-IP and per-email rate limiting, login timing-attack mitigation, Postgres row-level security, Google Calendar OAuth integration.

### Machine Learning — CycleGAN Monet style-transfer and coursework projects (PyTorch, Jupyter) — 2025–2026

## EDUCATION
**BSc Computer Science — Free University of Tbilisi** — expected 2027
ICPC International Olympiad Quarterfinalist.

## SKILLS
**Languages:** TypeScript/JavaScript, Python, Swift, Java, C/C++, SQL
**AI/LLM:** LangChain, OpenAI/Anthropic/Gemini APIs, agent & tool-calling architectures, RAG, LLM evals (LLM-as-judge, Braintrust/LangSmith), Core ML, PyTorch
**Frontend:** React, Next.js, React Native/Expo, Vue/Nuxt, SwiftUI, Tailwind, three.js
**Backend & Infra:** Node.js/Express, FastAPI, MongoDB, PostgreSQL/Supabase, Redis, Docker, Vercel, Cloudflare Workers, GitHub Actions/GitLab CI, Stripe & Paddle payments
**Spoken:** English, German, Georgian
