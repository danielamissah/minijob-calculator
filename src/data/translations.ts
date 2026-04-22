export type Language = 'en' | 'de';

export const t = {
  en: {
    // Meta
    langToggle: 'DE',

    // Hero
    heroTitle: 'Minijob Calculator',
    heroSubtitle: 'Germany 2025',
    heroDesc: 'Calculate your exact net pay, employer costs, and social contributions instantly. Updated for the 2025 earnings limit of €556/month.',

    // Inputs
    inputsTitle: 'Your Details',
    grossHourly: 'Hourly Rate (gross)',
    grossHourlyHint: 'Minimum wage 2025: €12.82/hr',
    hoursPerWeek: 'Hours per Week',
    hoursPerWeekHint: 'Max ~10 hrs/week to stay within the Minijob limit',
    employmentType: 'Employment Type',
    minijob: 'Minijob',
    midijob: 'Midijob (Übergangsbereich)',
    bundesland: 'Federal State (Bundesland)',
    kirchensteuer: 'Church tax member (Kirchensteuer)',

    // Results
    resultsTitle: 'Your Results',
    monthlyGross: 'Monthly Gross',
    monthlyNet: 'Monthly Net',
    annualNet: 'Annual Net',
    hourlyNet: 'Net Hourly Rate',
    employerCost: 'Employer Total Cost / Month',
    employerCostAnnual: 'Employer Total Cost / Year',

    // Breakdown
    breakdownTitle: 'Full Breakdown',
    employeeSection: 'Employee',
    employerSection: 'Employer Contributions',
    rvContrib: 'Pension Insurance (RV)',
    kvContrib: 'Health Insurance (KV)',
    pvContrib: 'Care Insurance (PV)',
    avContrib: 'Unemployment Insurance (AV)',
    pauschsteuer: 'Flat-rate Tax (Pauschsteuer)',
    u1: 'Sickness Supplement (U1)',
    u2: 'Maternity Supplement (U2)',
    insolvenzgeld: 'Insolvency Fund',
    totalEmployerContribs: 'Total Employer Contributions',
    totalEmployerCost: 'Total Cost to Employer',
    noEmployeeDeductions: 'No deductions — employer pays all contributions',

    // Warnings
    overLimitTitle: 'Over the Minijob Limit',
    overLimitDesc: (gross: string, limit: string) =>
      `Your gross of ${gross}/month exceeds the Minijob limit of ${limit}/month. Switch to Midijob mode or reduce hours.`,
    midijobNoteTitle: 'Midijob (Übergangsbereich)',
    midijobNoteDesc: 'Earnings between €556.01 and €2,000/month. You pay reduced social contributions on a sliding scale.',

    // Safe zone
    safeZoneTitle: 'You are within the Minijob limit',
    safeZoneMonths: (n: number) => `Annual limit reached in approximately ${n} more month${n !== 1 ? 's' : ''}`,
    safeZoneHours: (n: number) => `You can work up to ${n} hours/week at this rate`,

    // FAQ
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'What is a Minijob?',
        a: 'A Minijob (geringfügige Beschäftigung) is a form of employment in Germany where your earnings are capped at €556/month (2025). The employer pays a flat-rate contribution to cover health and pension insurance — you pay nothing extra as an employee.',
      },
      {
        q: 'What is the difference between Minijob and Midijob?',
        a: 'A Midijob (also called Übergangsbereich) covers earnings between €556.01 and €2,000/month. In a Midijob, both you and your employer pay social contributions, but your employee share is reduced on a sliding scale — you pay less than a regular employee at the same salary.',
      },
      {
        q: 'Do I pay tax on a Minijob?',
        a: 'As an employee, you typically pay no income tax on a Minijob. Your employer pays a 2% flat-rate tax (Pauschalsteuer) on your behalf. If you have a Lohnsteuerkarte (tax card), the employer may instead tax it at your individual rate.',
      },
      {
        q: 'Can I have multiple Minijobs?',
        a: 'You can have one Minijob alongside a main job (Hauptbeschäftigung). However, if you hold two Minijobs simultaneously, their earnings are combined — and if the total exceeds €556/month, the second Minijob is treated as regular employment with full social contributions.',
      },
      {
        q: 'Does a Minijob affect my Bürgergeld (social benefits)?',
        a: 'If you receive Bürgergeld, the first €100 of Minijob earnings are disregarded. Between €100 and €1,000, you keep 20% of earnings. Above €1,000, additional earnings are offset at a higher rate. Always inform your Jobcenter when starting a Minijob.',
      },
      {
        q: 'How do I register a Minijob?',
        a: 'Employers must register Minijob employees with the Minijobzentrale (operated by the Deutsche Rentenversicherung Knappschaft-Bahn-See). Registration is done online at minijob-zentrale.de. The employee needs a social security number (Sozialversicherungsnummer).',
      },
    ],

    // Footer
    footerNote: 'All calculations are based on official 2025 rates from Minijobzentrale and Deutsche Rentenversicherung. This tool is for informational purposes only — not tax or legal advice.',
    footerSources: 'Sources',
    updatedFor: 'Updated for 2025',
  },

  de: {
    langToggle: 'EN',

    heroTitle: 'Minijob-Rechner',
    heroSubtitle: 'Deutschland 2025',
    heroDesc: 'Berechne deinen genauen Nettolohn, Arbeitgeberkosten und Sozialabgaben. Aktualisiert für die Verdienstgrenze 2025 von 556 €/Monat.',

    inputsTitle: 'Deine Angaben',
    grossHourly: 'Stundenlohn (brutto)',
    grossHourlyHint: 'Mindestlohn 2025: 12,82 €/Std.',
    hoursPerWeek: 'Stunden pro Woche',
    hoursPerWeekHint: 'Max. ~10 Std./Woche um im Minijob-Bereich zu bleiben',
    employmentType: 'Beschäftigungsart',
    minijob: 'Minijob',
    midijob: 'Midijob (Übergangsbereich)',
    bundesland: 'Bundesland',
    kirchensteuer: 'Kirchensteuerpflichtig',

    resultsTitle: 'Deine Ergebnisse',
    monthlyGross: 'Bruttomonatslohn',
    monthlyNet: 'Nettomonatslohn',
    annualNet: 'Nettojahresverdienst',
    hourlyNet: 'Nettostundenlohn',
    employerCost: 'Gesamtkosten Arbeitgeber / Monat',
    employerCostAnnual: 'Gesamtkosten Arbeitgeber / Jahr',

    breakdownTitle: 'Aufschlüsselung',
    employeeSection: 'Arbeitnehmer',
    employerSection: 'Arbeitgeberanteile',
    rvContrib: 'Rentenversicherung (RV)',
    kvContrib: 'Krankenversicherung (KV)',
    pvContrib: 'Pflegeversicherung (PV)',
    avContrib: 'Arbeitslosenversicherung (AV)',
    pauschsteuer: 'Pauschale Lohnsteuer',
    u1: 'Umlage U1 (Krankheit)',
    u2: 'Umlage U2 (Mutterschaft)',
    insolvenzgeld: 'Insolvenzgeldumlage',
    totalEmployerContribs: 'Summe Arbeitgeberanteile',
    totalEmployerCost: 'Gesamtkosten Arbeitgeber',
    noEmployeeDeductions: 'Keine Abzüge — Arbeitgeber trägt alle Beiträge',

    overLimitTitle: 'Über der Minijob-Grenze',
    overLimitDesc: (gross: string, limit: string) =>
      `Dein Bruttogehalt von ${gross}/Monat überschreitet die Minijob-Grenze von ${limit}/Monat. Wechsle in den Midijob-Modus oder reduziere die Stunden.`,
    midijobNoteTitle: 'Midijob (Übergangsbereich)',
    midijobNoteDesc: 'Verdienst zwischen 556,01 € und 2.000 €/Monat. Du zahlst reduzierte Sozialabgaben nach gleitender Skala.',

    safeZoneTitle: 'Du liegst innerhalb der Minijob-Grenze',
    safeZoneMonths: (n: number) => `Jahresgrenze wird in ca. ${n} weiteren Monat${n !== 1 ? 'en' : ''} erreicht`,
    safeZoneHours: (n: number) => `Du kannst bei diesem Lohn bis zu ${n} Std./Woche arbeiten`,

    faqTitle: 'Häufig gestellte Fragen',
    faqs: [
      {
        q: 'Was ist ein Minijob?',
        a: 'Ein Minijob (geringfügige Beschäftigung) ist eine Beschäftigungsform in Deutschland, bei der der Verdienst auf 556 €/Monat (2025) begrenzt ist. Der Arbeitgeber zahlt Pauschalabgaben für Kranken- und Rentenversicherung – als Arbeitnehmer zahlst du nichts extra.',
      },
      {
        q: 'Was ist der Unterschied zwischen Minijob und Midijob?',
        a: 'Ein Midijob (Übergangsbereich) deckt Verdienste zwischen 556,01 € und 2.000 €/Monat ab. Bei einem Midijob zahlen beide Seiten Sozialabgaben, aber dein Arbeitnehmeranteil wird nach einer gleitenden Skala reduziert.',
      },
      {
        q: 'Muss ich auf einen Minijob Steuern zahlen?',
        a: 'Als Arbeitnehmer zahlst du in der Regel keine Einkommensteuer auf einen Minijob. Dein Arbeitgeber zahlt 2 % Pauschalsteuer. Mit Lohnsteuerkarte kann alternativ die individuelle Steuerklasse angewendet werden.',
      },
      {
        q: 'Kann ich mehrere Minijobs haben?',
        a: 'Du kannst einen Minijob neben einer Hauptbeschäftigung haben. Hast du jedoch zwei Minijobs gleichzeitig, werden die Verdienste zusammengerechnet – übersteigt die Summe 556 €/Monat, gilt der zweite Minijob als reguläre Beschäftigung.',
      },
      {
        q: 'Beeinflusst ein Minijob mein Bürgergeld?',
        a: 'Beim Bürgergeld bleiben die ersten 100 € des Minijob-Verdienstes anrechnungsfrei. Zwischen 100 € und 1.000 € darfst du 20 % behalten. Informiere immer dein Jobcenter, wenn du einen Minijob aufnimmst.',
      },
      {
        q: 'Wie melde ich einen Minijob an?',
        a: 'Arbeitgeber müssen Minijob-Beschäftigte bei der Minijobzentrale anmelden. Die Anmeldung erfolgt online unter minijob-zentrale.de. Der Arbeitnehmer benötigt eine Sozialversicherungsnummer.',
      },
    ],

    footerNote: 'Alle Berechnungen basieren auf den offiziellen Sätzen 2025 der Minijobzentrale und der Deutschen Rentenversicherung. Dieses Tool dient nur zur Information – keine Steuer- oder Rechtsberatung.',
    footerSources: 'Quellen',
    updatedFor: 'Aktualisiert für 2025',
  },
} as const;

export type T = typeof t.en;