import React from "react";

export function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="pointer-events-none absolute -left-40 top-[-10rem] h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.35),_transparent_60%)] blur-3xl" />
        <div className="pointer-events-none absolute -right-32 top-40 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,_rgba(129,140,248,0.4),_transparent_60%)] blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-8rem] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(244,63,94,0.25),_transparent_60%)] blur-3xl" />
      </div>

      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-12 pt-6 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between gap-4 py-3">
          <div className="flex items-center gap-3">
            <img
              src="/quantumx_logo.png"
              alt="Quantum X logo"
              className="h-12 w-12 rounded-xl bg-slate-950/60 object-contain ring-1 ring-sky-400/40 shadow-[0_0_30px_rgba(56,189,248,0.35)]"
            />
            <div>
              <span className="block text-xs font-semibold uppercase tracking-[0.3em] text-sky-300/80">
                Quantum X
              </span>
              <p className="text-xs text-slate-400">
                Secure role-based school infrastructure
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-300/80 md:flex">
            <a href="#problem" className="hover:text-sky-300 transition-colors">
              Problem
            </a>
            <a href="#solution" className="hover:text-sky-300 transition-colors">
              Solution
            </a>
            <a href="#features" className="hover:text-sky-300 transition-colors">
              Architecture
            </a>
            <a href="#roadmap" className="hover:text-sky-300 transition-colors">
              Roadmap
            </a>
            <a
              href="#pilot-form"
              className="rounded-full bg-sky-500/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950 shadow-lg shadow-sky-500/40 transition hover:bg-sky-400"
            >
              Request Early Access
            </a>
          </nav>
        </header>

        <main className="mt-6 flex flex-1 flex-col gap-16 pb-8 md:mt-10">
          <section
            aria-labelledby="hero-title"
            className="grid gap-10 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:items-center"
          >
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-sky-400/40 bg-slate-900/60 px-3 py-1 text-xs text-sky-100 shadow-[0_0_40px_rgba(56,189,248,0.25)] backdrop-blur">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                <span className="font-semibold tracking-[0.2em] uppercase text-emerald-300/90">
                  Now onboarding pilot institutions
                </span>
              </div>

              <div className="space-y-4">
                <h1
                  id="hero-title"
                  className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl"
                >
                  Quantum X — Intelligent Infrastructure for Modern Schools
                </h1>
                <p className="max-w-xl text-balance text-sm leading-relaxed text-slate-300 sm:text-base">
                  Quantum X is a secure, role-based school management cloud built to automate examinations, result
                  processing, records, and institutional workflows — giving leadership full visibility across every
                  campus, arm, and session.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#pilot-form"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-400 via-indigo-400 to-fuchsia-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_18px_45px_rgba(56,189,248,0.40)] transition hover:brightness-110"
                >
                  Request Early Access
                </a>
                <a
                  href="#pilot-form"
                  className="inline-flex items-center justify-center rounded-full border border-slate-600/80 bg-slate-900/60 px-5 py-2.5 text-sm font-medium text-slate-100 shadow-sm shadow-slate-900/60 transition hover:border-sky-400 hover:text-sky-200"
                >
                  Schedule Institutional Demo
                </a>
              </div>

              <dl className="grid gap-4 text-xs text-slate-300 sm:grid-cols-3 sm:text-[0.7rem]">
                <div>
                  <dt className="font-semibold text-slate-200">Built for leadership</dt>
                  <dd>Designed for proprietors, principals, registrars, and exam officers managing complex schools.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-200">Role-based governance</dt>
                  <dd>Admin Officer, Exam Officer, Teachers, and Students in one controlled environment.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-200">Secure by design</dt>
                  <dd>Strong access controls, immutable result history, and infrastructure built for multi-campus scale.</dd>
                </div>
              </dl>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute -inset-8 rounded-3xl border border-sky-400/10 bg-sky-500/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-3xl border border-slate-700/70 bg-gradient-to-br from-slate-900/80 via-slate-900/95 to-slate-950 shadow-2xl shadow-sky-900/40">
                <div className="flex items-center justify-between border-b border-slate-800/80 bg-slate-900/80 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    <span className="text-xs font-medium text-slate-200">Quantum X Examination Console</span>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-600" />
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-600" />
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-600" />
                  </div>
                </div>

                <div className="grid gap-4 p-4 sm:grid-cols-[1.2fr_0.9fr]">
                  <div className="space-y-4">
                    <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-3">
                      <div className="flex items-center justify-between text-[0.65rem] text-slate-300">
                        <span className="font-semibold text-slate-100">Exam processing pipeline</span>
                        <span className="text-emerald-300">96% automated</span>
                      </div>
                      <div className="mt-2 flex h-1.5 overflow-hidden rounded-full bg-slate-800">
                        <div className="h-full w-[64%] bg-gradient-to-r from-sky-400 via-indigo-400 to-fuchsia-500" />
                        <div className="h-full w-[22%] bg-slate-700" />
                        <div className="h-full w-[14%] bg-slate-900" />
                      </div>
                      <div className="mt-2 flex justify-between text-[0.6rem] text-slate-400">
                        <span>Scripts uploaded</span>
                        <span>Grading in review</span>
                        <span>Pending approvals</span>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-3">
                      <div className="mb-2 flex items-center justify-between text-[0.65rem]">
                        <span className="font-semibold text-slate-100">Institutional roles</span>
                        <span className="text-slate-400">Real-time access matrix</span>
                      </div>
                      <div className="grid grid-cols-4 gap-2 text-center text-[0.6rem]">
                        {[
                          "Admin",
                          "Exam Officer",
                          "Teachers",
                          "Students",
                        ].map((role) => (
                          <div
                            key={role}
                            className="rounded-xl bg-slate-900/80 px-2 py-1.5 text-slate-200 ring-1 ring-slate-700/80"
                          >
                            <div className="mb-1 h-1 w-full rounded-full bg-slate-800">
                              <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-sky-400 to-indigo-400" />
                            </div>
                            <span>{role}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-3">
                      <div className="mb-2 flex items-center justify-between text-[0.65rem]">
                        <div className="flex items-center gap-1.5 text-slate-200">
                          <span className="text-base">🔔</span>
                          <span className="font-semibold">Notifications</span>
                        </div>
                        <span className="text-[0.6rem] text-slate-400">0 unread</span>
                      </div>
                      <div className="mb-2 flex gap-1.5 text-[0.6rem]">
                        {[
                          "All",
                          "Unread",
                          "Announcements",
                          "Uploads",
                        ].map((tab, index) => (
                          <button
                            key={tab}
                            className={
                              "flex-1 rounded-full border px-1.5 py-1 " +
                              (index === 0
                                ? "border-sky-400/70 bg-sky-500/10 text-sky-200"
                                : "border-slate-700/80 bg-slate-900/60 text-slate-300")
                            }
                            type="button"
                          >
                            {tab}
                          </button>
                        ))}
                      </div>
                      <div className="rounded-xl border border-sky-500/40 bg-slate-900/80 p-2.5 text-[0.65rem] text-slate-200">
                        <p className="font-semibold">WELCOME MESSAGE</p>
                        <p className="mt-1 text-slate-300">
                          Welcome to Quantum X, your school management system. Wishing you success in all your
                          academic and administrative endeavours.
                        </p>
                        <p className="mt-2 text-[0.6rem] text-slate-500">
                          Abdul Rahman Hammed, CEO, Quantum X
                        </p>
                        <p className="mt-0.5 text-[0.55rem] text-slate-500">Feb 20, 2026 at 12:08 AM</p>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-3 text-[0.6rem] text-slate-300">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="font-semibold text-slate-100">Exam integrity status</span>
                        <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[0.55rem] text-emerald-300">
                          Compliant
                        </span>
                      </div>
                      <ul className="space-y-1.5">
                        <li className="flex items-center justify-between">
                          <span>Result tampering attempts</span>
                          <span className="text-emerald-300">Blocked</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span>Audit log coverage</span>
                          <span>100%</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span>Active academic sessions</span>
                          <span>6</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            aria-label="Trust and credibility"
            className="rounded-2xl border border-amber-400/30 bg-gradient-to-r from-amber-500/10 via-slate-950/80 to-slate-950/80 p-4 text-center shadow-[0_0_50px_rgba(252,211,77,0.1)]"
          >
            <div className="flex flex-col items-center justify-center gap-2 sm:flex-row">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300/90">
                    🏆 Internationally Showcased
                </p>
                <span className="hidden h-4 border-l border-slate-700 sm:block" />
                <p className="text-xs text-slate-300">
                    Create Apps Championship 2025–26 – Solo Founder Submission | Trusted Global Recognition
                </p>
            </div>
          </section>

          <section id="problem" aria-labelledby="problem-heading" className="space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300/80">Institutional problem</p>
              <h2 id="problem-heading" className="text-xl font-semibold text-slate-50 sm:text-2xl">
                Manual result processing is expensive, slow, and impossible to govern at scale.
              </h2>
              <p className="max-w-3xl text-sm text-slate-300">
                Most schools still rely on spreadsheets, staff-owned tools, or disjointed portals. Exam officers chase
                scripts. Principals approve blind. Parents receive late or inconsistent results. There is no single
                version of academic truth across the institution.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <article className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 shadow-lg shadow-black/40">
                <h3 className="text-sm font-semibold text-slate-100">Fragmented systems</h3>
                <p className="mt-2 text-xs text-slate-300">
                  Admissions, exams, and records all run on different tools. Data lives in silos, making it hard for
                  leadership to see one cohesive academic picture across campuses and sessions.
                </p>
              </article>
              <article className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 shadow-lg shadow-black/40">
                <h3 className="text-sm font-semibold text-slate-100">Opaque accountability</h3>
                <p className="mt-2 text-xs text-slate-300">
                  When results change, no one knows who edited what or when. Without audit trails and approvals,
                  institutions are exposed to disputes, internal pressure, and reputational risk.
                </p>
              </article>
              <article className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 shadow-lg shadow-black/40">
                <h3 className="text-sm font-semibold text-slate-100">Operational bottlenecks</h3>
                <p className="mt-2 text-xs text-slate-300">
                  Exam officers manually chase scripts, compute grades, prepare broadsheets, and print reports — every
                  term. Delays become normal, and leadership cannot measure performance in real time.
                </p>
              </article>
            </div>
          </section>

          <section id="solution" aria-labelledby="solution-heading" className="space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300/80">Solution</p>
              <h2 id="solution-heading" className="text-xl font-semibold text-slate-50 sm:text-2xl">
                Quantum X creates one secure, role-based operating system for your entire school.
              </h2>
              <p className="max-w-3xl text-sm text-slate-300">
                Every stakeholder — from the proprietor to the student — operates inside a single, governed environment.
                Roles define who can initiate, review, and approve each step of the academic lifecycle. Workflows are
                standardized, tracked, and auditable.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
              <div className="space-y-4 rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4">
                <h3 className="text-sm font-semibold text-slate-100">Role-aware workflows</h3>
                <p className="text-xs text-slate-300">
                  Quantum X ships with opinionated, configurable workflows mapped to the way leading schools operate.
                  Super Admin, Admin Officer, Exam Officer, HoD, Teacher, and Student each see only what they need, when
                  they need it.
                </p>
                <p className="text-xs text-slate-300">
                  Approvals move through structured lanes. Nothing is lost in WhatsApp chats or personal email. Every
                  change to marks, results, and reports leaves a permanent trace.
                </p>
              </div>

              <div className="space-y-3 rounded-2xl border border-sky-500/40 bg-slate-950/80 p-4 text-xs">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-slate-100">Role & access matrix</h3>
                  <span className="rounded-full bg-sky-500/10 px-2 py-0.5 text-[0.6rem] text-sky-200">
                    Default configuration
                  </span>
                </div>
                <div className="overflow-hidden rounded-xl border border-slate-800/80 bg-slate-950/80">
                  <table className="min-w-full border-separate border-spacing-0 text-[0.65rem]">
                    <thead className="bg-slate-900/90 text-slate-300">
                      <tr>
                        <th className="px-3 py-2 text-left font-semibold">Role</th>
                        <th className="px-3 py-2 text-left font-semibold">Primary control</th>
                        <th className="px-3 py-2 text-left font-semibold">Visibility</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-slate-800/80">
                        <td className="px-3 py-2 font-medium text-slate-100">Admin</td>
                        <td className="px-3 py-2">System-wide governance, campus setup.</td>
                        <td className="px-3 py-2">All campuses, terms, and audit trail.</td>
                        <td className="px-3 py-2">Admissions, class structures, student records.</td>
                        <td className="px-3 py-2">Assigned campuses & academic sessions.</td>
                      </tr>
                      <tr className="border-t border-slate-800/80">
                        <td className="px-3 py-2 font-medium text-slate-100">Exam Officer</td>
                        <td className="px-3 py-2">Exam setup, collation, approvals, publishing.</td>
                        <td className="px-3 py-2">All results within allocated classes and arms.</td>
                      </tr>
                      <tr className="border-t border-slate-800/80 bg-slate-900/60">
                        <td className="px-3 py-2 font-medium text-slate-100">Teachers</td>
                        <td className="px-3 py-2">Continuous assessment, grading, remarks.</td>
                        <td className="px-3 py-2">Only subjects and classes they own.</td>
                      </tr>
                      <tr className="border-t border-slate-800/80">
                        <td className="px-3 py-2 font-medium text-slate-100">Students</td>
                        <td className="px-3 py-2">Secure self-service portal for results.</td>
                        <td className="px-3 py-2">Personal records only.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-[0.6rem] text-slate-400">
                  Every modification to scores, subjects, or comments is logged with actor, timestamp, and device
                  signature — building a defensible narrative for every exam session.
                </p>
              </div>
            </div>
          </section>

          <section id="features" aria-labelledby="features-heading" className="space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300/80">Feature architecture</p>
              <h2 id="features-heading" className="text-xl font-semibold text-slate-50 sm:text-2xl">
                A secure, examination-first backbone for your institution.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <article className="flex flex-col gap-3 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4">
                <h3 className="text-sm font-semibold text-slate-100">Administration control</h3>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  <li>Multi-campus, multi-session configuration from a single console.</li>
                  <li>Standardized grading scales, promotion rules, and report templates.</li>
                  <li>Delegated admin roles with least-privilege access policies.</li>
                </ul>
              </article>
              <article className="flex flex-col gap-3 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4">
                <h3 className="text-sm font-semibold text-slate-100">Examination & result automation</h3>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  <li>Script upload, continuous assessment, and exam entry in one workflow.</li>
                  <li>Automated computation of totals, positions, and analytics per class.</li>
                  <li>Configurable approval steps before results are released or printed.</li>
                </ul>
              </article>
              <article className="flex flex-col gap-3 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4">
                <h3 className="text-sm font-semibold text-slate-100">Security & infrastructure</h3>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  <li>Hardened authentication, secure session management, and IP-aware controls.</li>
                  <li>Immutable audit trails for every academic transaction.</li>
                  <li>Cloud-native infrastructure designed for West African and global schools.</li>
                </ul>
              </article>
            </div>
          </section>

          <section aria-labelledby="positioning-heading" className="space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300/80">Competitive positioning</p>
              <h2 id="positioning-heading" className="text-xl font-semibold text-slate-50 sm:text-2xl">
                Purpose-built for result integrity, not just digital classrooms.
              </h2>
              <p className="max-w-3xl text-sm text-slate-300">
                PowerSchool, Google Classroom, and Moodle are powerful platforms for learning management. Quantum X
                complements that ecosystem by focusing deeply on examinations, results, and academic records for
                African and global schools that require strong governance.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/80 text-xs">
              <table className="min-w-full border-separate border-spacing-0">
                <thead className="bg-slate-900/90 text-slate-200">
                  <tr>
                    <th className="px-4 py-2 text-left font-semibold">Platform</th>
                    <th className="px-4 py-2 text-left font-semibold">Primary focus</th>
                    <th className="px-4 py-2 text-left font-semibold">Quantum X complement</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-slate-800/80">
                    <td className="px-4 py-2 font-medium">PowerSchool</td>
                    <td className="px-4 py-2">Comprehensive SIS and learning suite for large districts.</td>
                    <td className="px-4 py-2">Quantum X offers a leaner, exam-first stack suited to emerging markets.</td>
                  </tr>
                  <tr className="border-t border-slate-800/80 bg-slate-900/60">
                    <td className="px-4 py-2 font-medium">Google Classroom</td>
                    <td className="px-4 py-2">Classroom collaboration and assignment management.</td>
                    <td className="px-4 py-2">Quantum X adds structured exams, approvals, and official records.</td>
                  </tr>
                  <tr className="border-t border-slate-800/80">
                    <td className="px-4 py-2 font-medium">Moodle</td>
                    <td className="px-4 py-2">Flexible open-source LMS for courses and content.</td>
                    <td className="px-4 py-2">Quantum X provides governed exam workflows and result lifecycle.</td>
                  </tr>
                  <tr className="border-t border-slate-800/80 bg-slate-900/60">
                    <td className="px-4 py-2 font-medium text-sky-200">Quantum X</td>
                    <td className="px-4 py-2">Secure, role-based examination and records backbone.</td>
                    <td className="px-4 py-2">Designed to plug into your existing learning tools while securing results.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="roadmap" aria-labelledby="roadmap-heading" className="space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300/80">Future roadmap</p>
              <h2 id="roadmap-heading" className="text-xl font-semibold text-slate-50 sm:text-2xl">
                Building towards a fully digitized, verifiable academic lifecycle.
              </h2>
            </div>

            <ol className="space-y-4 text-xs text-slate-300">
              <li className="flex gap-4">
                <div className="mt-0.5 h-6 w-6 flex-shrink-0 rounded-full bg-sky-500/20 text-center text-[0.6rem] font-semibold text-sky-200">
                  01
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-slate-100">CBT integration</p>
                    <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[0.6rem] text-emerald-300">
                      In design
                    </span>
                  </div>
                  <p>
                    Native computer-based testing engine aligned with national exam patterns, seamlessly feeding into
                    the same result engine and audit trail.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-0.5 h-6 w-6 flex-shrink-0 rounded-full bg-sky-500/20 text-center text-[0.6rem] font-semibold text-sky-200">
                  02
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-slate-100">Biometric verification</p>
                    <span className="rounded-full bg-slate-500/20 px-2 py-0.5 text-[0.6rem] text-slate-200">
                      Planned
                    </span>
                  </div>
                  <p>
                    Identity verification for candidates and key staff actions, reducing impersonation and unauthorized
                    result changes.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-0.5 h-6 w-6 flex-shrink-0 rounded-full bg-sky-500/20 text-center text-[0.6rem] font-semibold text-sky-200">
                  03
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-slate-100">AI analytics</p>
                    <span className="rounded-full bg-sky-500/15 px-2 py-0.5 text-[0.6rem] text-sky-200">
                      Exploratory pilot
                    </span>
                  </div>
                  <p>
                    Trend analysis, early warning signals, and cohort-level insights for school owners and academic
                    boards.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-0.5 h-6 w-6 flex-shrink-0 rounded-full bg-sky-500/20 text-center text-[0.6rem] font-semibold text-sky-200">
                  04
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-slate-100">Mobile & desktop expansion</p>
                    <span className="rounded-full bg-slate-500/20 px-2 py-0.5 text-[0.6rem] text-slate-200">
                      Roadmap
                    </span>
                  </div>
                  <p>
                    Dedicated apps for leadership, exam teams, and parents to access real-time information securely on
                    any device.
                  </p>
                </div>
              </li>
            </ol>
          </section>

          <section
            id="pilot-form"
            aria-labelledby="pilot-heading"
            className="mt-4 grid gap-8 rounded-3xl border border-slate-800/80 bg-slate-950/90 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.9)] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]"
          >
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300/80">
                Pilot institution program
              </p>
              <h2 id="pilot-heading" className="text-xl font-semibold text-slate-50 sm:text-2xl">
                Join the first cohort of schools on Quantum X.
              </h2>
              <p className="text-sm text-slate-300">
                We are onboarding a limited number of private and public institutions into the Quantum X pilot. Selected
                schools work directly with our product and implementation team to shape the roadmap, tailor
                configurations, and establish institution-wide standards.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li>Dedicated onboarding and training for your leadership and exam teams.</li>
                <li>Preferential pricing and migration support at general availability.</li>
                <li>Direct channel to influence roadmap items like CBT and biometrics.</li>
              </ul>
            </div>

            <form
              className="space-y-4 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="grid gap-3 text-xs text-slate-200 sm:grid-cols-2">
                <label className="space-y-1">
                  <span>School name</span>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Quantum Heights College"
                    className="w-full rounded-lg border border-slate-700/80 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 outline-none ring-sky-500/0 placeholder:text-slate-500 focus:border-sky-400 focus:ring-1 focus:ring-sky-500"
                  />
                </label>
                <label className="space-y-1">
                  <span>Contact person</span>
                  <input
                    type="text"
                    required
                    placeholder="Name of proprietor, principal or admin lead"
                    className="w-full rounded-lg border border-slate-700/80 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 outline-none ring-sky-500/0 placeholder:text-slate-500 focus:border-sky-400 focus:ring-1 focus:ring-sky-500"
                  />
                </label>
                <label className="space-y-1">
                  <span>Work email</span>
                  <input
                    type="email"
                    required
                    placeholder="you@school.edu"
                    className="w-full rounded-lg border border-slate-700/80 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 outline-none ring-sky-500/0 placeholder:text-slate-500 focus:border-sky-400 focus:ring-1 focus:ring-sky-500"
                  />
                </label>
                <label className="space-y-1">
                  <span>Phone number</span>
                  <input
                    type="tel"
                    required
                    placeholder="Include country code"
                    className="w-full rounded-lg border border-slate-700/80 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 outline-none ring-sky-500/0 placeholder:text-slate-500 focus:border-sky-400 focus:ring-1 focus:ring-sky-500"
                  />
                </label>
                <label className="space-y-1">
                  <span>Student population</span>
                  <input
                    type="number"
                    required
                    min={1}
                    placeholder="Approximate number of students"
                    className="w-full rounded-lg border border-slate-700/80 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 outline-none ring-sky-500/0 placeholder:text-slate-500 focus:border-sky-400 focus:ring-1 focus:ring-sky-500"
                  />
                </label>
                <label className="space-y-1">
                  <span>Institution type</span>
                  <select
                    required
                    className="w-full rounded-lg border border-slate-700/80 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 outline-none ring-sky-500/0 focus:border-sky-400 focus:ring-1 focus:ring-sky-500"
                  >
                    <option value="">Select type</option>
                    <option>Private basic school</option>
                    <option>Private secondary school</option>
                    <option>Public basic school</option>
                    <option>Public secondary school</option>
                    <option>Tertiary institution</option>
                    <option>Group of schools</option>
                  </select>
                </label>
                <label className="space-y-1 sm:col-span-2">
                  <span>Location</span>
                  <input
                    type="text"
                    required
                    placeholder="City, state/province, country"
                    className="w-full rounded-lg border border-slate-700/80 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 outline-none ring-sky-500/0 placeholder:text-slate-500 focus:border-sky-400 focus:ring-1 focus:ring-sky-500"
                  />
                </label>
                <label className="space-y-1 sm:col-span-2">
                  <span>Current examination workflow (optional)</span>
                  <textarea
                    rows={3}
                    placeholder="Describe how you currently manage exams, results, and reports."
                    className="w-full rounded-lg border border-slate-700/80 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 outline-none ring-sky-500/0 placeholder:text-slate-500 focus:border-sky-400 focus:ring-1 focus:ring-sky-500"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-sky-400 via-indigo-400 to-fuchsia-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_18px_45px_rgba(56,189,248,0.40)] transition hover:brightness-110"
              >
                Submit pilot application
              </button>

              <p className="text-[0.65rem] text-slate-400">
                By submitting this form, you agree to be contacted about the Quantum X pilot program and to receive
                occasional product updates. We do not share your data with third parties.
              </p>
            </form>
          </section>

          <section aria-labelledby="contact-heading" className="text-center">
             <div className="space-y-2">
                 <h2 id="contact-heading" className="text-lg font-semibold text-slate-50">Need Help or Have Questions?</h2>
                 <p className="text-sm text-slate-300">Reach us anytime for inquiries or support.</p>
             </div>
             <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm">
                <a href="mailto:quantumxoffical@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-slate-200 transition-colors hover:border-sky-400 hover:text-sky-300">
                    📧 quantumxoffical@gmail.com
                </a>
                <a href="tel:08123488059" className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-slate-200 transition-colors hover:border-sky-400 hover:text-sky-300">
                    📞 08123488059
                </a>
                <a
                  href="mailto:quantumxoffical@gmail.com"
                  className="inline-flex items-center justify-center rounded-full bg-sky-500/90 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950 shadow-lg shadow-sky-500/40 transition hover:bg-sky-400"
                >
                  Contact Us
                </a>
             </div>
          </section>
        </main>

        <footer className="mt-10 border-t border-slate-800/80 pt-6 text-[0.7rem] text-slate-400">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p>
                Founder: <span className="font-medium text-slate-200">Abdul Rahman Hammed (Smartdon)</span>
              </p>
              <p className="mt-0.5">© 2026 Quantum X — Powered by SRASS</p>
            </div>
            <div className="space-y-0.5 text-slate-400">
              <p className="font-medium text-slate-200">Secure. Role-based. Examination-first.</p>
              <p>Dark mode optimized experience for school owners, principals, administrators, and exam officers.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
