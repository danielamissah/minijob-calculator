// These are values official for 2025
// Sources: Minijobzentrale, Deutsche Rentenversicherung, Bundesministerium für Arbeit

export const MINIJOB_2025 = {
  // Monthly earnings limit
  MONTHLY_LIMIT_EUR: 556,
  ANNUAL_LIMIT_EUR: 6672,

  // Midijob range (Übergangsbereich)
  MIDIJOB_LOWER_EUR: 556.01,
  MIDIJOB_UPPER_EUR: 2000,

  // Employer flat-rate contributions (% of gross)
  EMPLOYER_KV_RATE: 0.13,         // Krankenversicherung 13%
  EMPLOYER_RV_RATE: 0.15,         // Rentenversicherung 15%
  EMPLOYER_PAUSCHSTEUER: 0.02,    // Pauschale Lohnsteuer 2%
  EMPLOYER_U1: 0.011,             // Umlage U1 (Krankheit) 1.1%
  EMPLOYER_U2: 0.0024,            // Umlage U2 (Mutterschaft) 0.24%
  EMPLOYER_INSOLVENZGELD: 0.0006, // Insolvenzgeldumlage 0.06%

  // Employee optional RV contribution (top-up to full 18.6%)
  EMPLOYEE_RV_TOPUP_RATE: 0.036,  // Employee pays 3.6% to reach full pension
  FULL_RV_RATE: 0.186,            // Full RV rate = 18.6%

  // Midijob employee contribution rates (approximate linear scale)
  MIDIJOB_EMPLOYEE_KV: 0.073,
  MIDIJOB_EMPLOYEE_RV: 0.093,
  MIDIJOB_EMPLOYEE_PV: 0.0170,
  MIDIJOB_EMPLOYEE_AV: 0.013,

  // Midijob employer contribution rates
  MIDIJOB_EMPLOYER_KV: 0.073,
  MIDIJOB_EMPLOYER_RV: 0.093,
  MIDIJOB_EMPLOYER_PV: 0.0170,
  MIDIJOB_EMPLOYER_AV: 0.013,

  // Minimum wage 2025
  MIN_WAGE_EUR: 12.82,

  WEEKS_PER_MONTH: 4.33,
};

export const BUNDESLAENDER = [
  { id: 'bw', name: 'Baden-Württemberg' },
  { id: 'by', name: 'Bayern' },
  { id: 'be', name: 'Berlin' },
  { id: 'bb', name: 'Brandenburg' },
  { id: 'hb', name: 'Bremen' },
  { id: 'hh', name: 'Hamburg' },
  { id: 'he', name: 'Hessen' },
  { id: 'mv', name: 'Mecklenburg-Vorpommern' },
  { id: 'ni', name: 'Niedersachsen' },
  { id: 'nw', name: 'Nordrhein-Westfalen' },
  { id: 'rp', name: 'Rheinland-Pfalz' },
  { id: 'sl', name: 'Saarland' },
  { id: 'sn', name: 'Sachsen' },
  { id: 'st', name: 'Sachsen-Anhalt' },
  { id: 'sh', name: 'Schleswig-Holstein' },
  { id: 'th', name: 'Thüringen' },
];

// Kirchensteuer rate varies by Bundesland
export const KIRCHENSTEUER_RATES: Record<string, number> = {
  bw: 0.08, by: 0.08,
  be: 0.09, bb: 0.09, hb: 0.09, hh: 0.09,
  he: 0.09, mv: 0.09, ni: 0.09, nw: 0.09,
  rp: 0.09, sl: 0.09, sn: 0.09, st: 0.09,
  sh: 0.09, th: 0.09,
};