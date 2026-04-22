
# Minijob Calculator Germany

> Calculate your exact net pay, employer costs, and social contributions for Minijob and Midijob employment in Germany — free, accurate, and updated for 2025.

Germany's Minijob system employs approximately 7 million people, yet the rules around earnings limits, social contributions, and employer costs are poorly understood. This calculator gives employees and employers instant, accurate answers — in English and German.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue?logo=typescript)
![License](https://img.shields.io/badge/license-MIT-green)
![Updated](https://img.shields.io/badge/rates-2025-orange)

---

## Live Demo

🔗 [minijob-calculator.vercel.app](https://minijob-calculator.vercel.app/)

---

## Features

* **Live calculation** — results update instantly as you adjust sliders
* **Minijob & Midijob** — full support for both employment types
* **Employee view** — net monthly pay, annual earnings, net hourly rate
* **Employer view** — total cost including all flat-rate contributions (KV, RV, Pauschsteuer, U1, U2, Insolvenzgeld)
* **Full breakdown** — every contribution line itemised
* **Over-limit detection** — warns when earnings exceed the €556/month Minijob limit
* **Safe zone indicator** — shows months until annual limit and max hours per week at current rate
* **All 16 Bundesländer** — Kirchensteuer rate varies by state
* **English & German** — toggle between languages, preference saved to localStorage
* **SEO optimised** — targets "Minijob Rechner" and "Minijob Calculator Germany"

---

## 2025 Official Rates

| Parameter               | Value      | Source                      |
| ----------------------- | ---------- | --------------------------- |
| Monthly earnings limit  | €556.00   | Minijobzentrale             |
| Annual earnings limit   | €6,672.00 | Minijobzentrale             |
| Midijob lower limit     | €556.01   | BMAS                        |
| Midijob upper limit     | €2,000.00 | BMAS                        |
| Minimum wage            | €12.82/hr | BMAS                        |
| Employer KV (health)    | 13.00%     | GKV-Spitzenverband          |
| Employer RV (pension)   | 15.00%     | Deutsche Rentenversicherung |
| Employer Pauschsteuer   | 2.00%      | Finanzamt                   |
| Employer U1 (sickness)  | 1.10%      | Minijobzentrale             |
| Employer U2 (maternity) | 0.24%      | Minijobzentrale             |
| Insolvenzgeldumlage     | 0.06%      | Bundesagentur für Arbeit   |

---

## How the Calculator Works

### Minijob

In a Minijob, the  **employee pays no social contributions** . The employer covers everything as flat-rate percentages of the gross wage. The employee receives their full gross as net pay.

```
Employee net = Gross wage (no deductions)

Employer contributions on top of gross:
  Health insurance (KV):     Gross × 13.00%
  Pension insurance (RV):    Gross × 15.00%
  Flat-rate tax:             Gross × 2.00%
  Sickness supplement (U1):  Gross × 1.10%
  Maternity supplement (U2): Gross × 0.24%
  Insolvency fund:           Gross × 0.06%
  ─────────────────────────────────────────
  Total employer surcharge:  Gross × 31.40%

Total employer cost = Gross × 1.3140
```

**Example — 10 hrs/week at €13.00/hr:**

```
Gross monthly  = €13.00 × 10 hrs × 4.33 weeks = €562.90
                 ⚠️ Exceeds the €556.00 limit

At €12.82/hr (minimum wage):
Gross monthly  = €12.82 × 10 × 4.33           = €554.91 ✅

Employee net   = €554.91 (keeps everything)
Employer cost  = €554.91 × 1.3140              = €729.15/month
               = €8,749.80/year
```

---

### Midijob (Übergangsbereich)

A Midijob covers earnings between  **€556.01 and €2,000/month** . Both employer and employee pay social contributions, but the employee's share is reduced on a sliding scale — much less than regular employment at the same gross salary.

```
Employee contributions (approximate rates):
  Health insurance (KV):         Gross × 7.30%
  Pension insurance (RV):        Gross × 9.30%
  Care insurance (PV):           Gross × 1.70%
  Unemployment insurance (AV):   Gross × 1.30%
  ──────────────────────────────────────────────
  Total employee deductions:     Gross × 19.60%

Employee net = Gross − (Gross × 19.60%)

Employer contributions (approximate):
  Same rates as employee — Gross × 19.60%

Total employer cost = Gross × 1.1960
```

**Example — 20 hrs/week at €13.00/hr:**

```
Gross monthly       = €13.00 × 20 × 4.33 = €1,125.80

Employee deductions = €1,125.80 × 19.60% = €220.66
Employee net        = €1,125.80 − €220.66 = €905.14/month
                    = €10,861.68/year
Net hourly rate     = €905.14 ÷ (20 × 4.33) = €10.45/hr

Employer cost/month = €1,125.80 × 1.1960  = €1,346.46
Employer cost/year  = €16,157.52
```

---

### Annual Limit Tracking

The Minijob annual limit is **€6,672** (12 × €556). The calculator monitors both the monthly and annual limits simultaneously.

```
If gross monthly = €400:
  Annual projection  = €400 × 12 = €4,800 ✅ under limit
  Months until limit = (€6,672 − €4,800) ÷ €400 = 4.68 → 4 more months safe
  Max hours/week     = €556 ÷ (€13.00 × 4.33) = ~9.87 hrs/week
```

---

### Multiple Minijobs (Cumulation Rule)

If you hold **two Minijobs** simultaneously, their earnings are combined. If the total exceeds €556/month, the second Minijob is reclassified as regular employment with full social contributions. One Minijob alongside a main job (Hauptbeschäftigung) is always permitted — only the Minijob earnings count toward the limit.

---

## Project Structure

```
minijob-calculator/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Open Sans font, metadata, SEO tags
│   │   ├── page.tsx             # Main calculator page (all UI + state)
│   │   └── globals.css          # Slider styles, select styles, CSS variables
│   ├── components/
│   │   ├── LanguageToggle.tsx   # EN / DE pill toggle with localStorage
│   │   ├── ResultCard.tsx       # Summary metric cards (net pay, employer cost)
│   │   └── BreakdownRow.tsx     # Individual contribution line items
│   ├── data/
│   │   ├── constants.ts         # 2025 official rates — update here each January
│   │   └── translations.ts      # All UI strings in EN and DE
│   ├── hooks/
│   │   └── useTranslation.ts    # Language state + localStorage persistence
│   ├── lib/
│   │   └── calculator.ts        # Pure calculation functions (no side effects)
│   └── types/
│       └── index.ts             # TypeScript interfaces for inputs and results
├── public/
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## Tech Stack

| Layer     | Technology                    | Why                                                   |
| --------- | ----------------------------- | ----------------------------------------------------- |
| Framework | Next.js 15 (App Router)       | SSR for SEO; instant static generation                |
| Language  | TypeScript (strict)           | Type-safe calculation engine prevents rounding errors |
| Font      | Open Sans (Google Fonts)      | Clean, highly readable for financial data             |
| Styling   | Inline styles + CSS variables | Zero build-time CSS dependency, full visual control   |
| State     | React useState                | No external library needed — purely client-side math |
| i18n      | Custom hook + localStorage    | No external library; EN/DE with browser persistence   |
| Hosting   | Vercel                        | Zero-config deployment, global edge CDN               |

---

## Getting Started

### Prerequisites

* Node.js 18+
* npm or yarn

### Installation

```bash
git clone https://github.com/danielamissah/minijob-calculator.git
cd minijob-calculator
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000/).

### Build for production

```bash
npm run build
npm start
```

---

## Updating for a New Year

All rates live in one file: `src/data/constants.ts`. Each January:

1. Update `MONTHLY_LIMIT_EUR` and `ANNUAL_LIMIT_EUR` — these change when minimum wage changes
2. Update `MIN_WAGE_EUR` to the new minimum wage
3. Update contribution rates if announced by Minijobzentrale or GKV
4. Update year references in `src/data/translations.ts` (search for "2025")
5. Update `metadata` title and description in `src/app/layout.tsx`
6. Run `npm run build` and verify calculations against the official Minijobzentrale calculator

---

## Key Design Decisions

**Why sliders instead of text inputs?**
Sliders give instant visual feedback and prevent invalid input. The orange fill that grows as you drag makes the relationship between hours and earnings immediately visible — users understand the limit before they hit it.

**Why no backend?**
All calculation logic is pure TypeScript math with no server round-trips. This means the calculator works offline, loads instantly, and can be hosted for free. The calculation functions in `src/lib/calculator.ts` are fully unit-testable with zero mocking.

**Why inline styles instead of Tailwind classes?**
Tailwind classes are great for rapid prototyping but make precise financial UI harder to reason about. Inline styles make every visual decision explicit and reviewable — important when the UI is communicating money.

**Why custom i18n instead of next-intl or react-i18next?**
The app has exactly two languages and a fixed string count. A custom hook with a typed translations object costs 30 lines and gives full TypeScript autocomplete on every string key. Adding a full i18n library would be over-engineering.

---

## Sources

* [Minijobzentrale](https://www.minijob-zentrale.de/) — official employer contribution rates and earnings limits
* [Deutsche Rentenversicherung](https://www.deutsche-rentenversicherung.de/) — RV rates and Midijob sliding scale rules
* [Bundesministerium für Arbeit und Soziales](https://www.bmas.de/) — minimum wage, Bürgergeld interaction
* [GKV-Spitzenverband](https://www.gkv-spitzenverband.de/) — health insurance contribution rates

---

## Roadmap

* [ ] Bürgergeld / ALG II earnings disregard calculator
* [ ] Multiple Minijob cumulation checker (add a second job)
* [ ] Printable / downloadable PDF pay summary
* [ ] Annual limit progress tracker (how much of the year's allowance is used)
* [ ] Student Minijob 20-hour weekly rule checker
* [ ] Pensioner Minijob interaction with Rentenansprüche

---

## Contributing

Pull requests are welcome, especially for:

* Corrections to contribution rates
* New Bundesland-specific rules
* Additional language support

Please open an issue first for significant changes. All rate changes must be sourced to an official publication.

---

## Disclaimer

All calculations are based on official 2025 rates from Minijobzentrale and Deutsche Rentenversicherung. This tool is for informational purposes only and does not constitute tax or legal advice. Always verify with your employer, tax advisor, or the Minijobzentrale directly for binding information.

---

## License

MIT — see [LICENSE](https://claude.ai/chat/LICENSE) for details.
