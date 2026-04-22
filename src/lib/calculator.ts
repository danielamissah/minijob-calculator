import { MinijobInputs, MinijobResult, MidijobResult } from '@/types';
import { MINIJOB_2025 } from '@/data/constants';

const C = MINIJOB_2025;

export function calculateMinijob(inputs: MinijobInputs): MinijobResult {
  const { grossHourly, hoursPerWeek } = inputs;

  const grossMonthly = Math.round(grossHourly * hoursPerWeek * C.WEEKS_PER_MONTH * 100) / 100;
  const grossAnnual = Math.round(grossMonthly * 12 * 100) / 100;
  const isOverLimit = grossMonthly > C.MONTHLY_LIMIT_EUR;
  const isMidijob = grossMonthly > C.MONTHLY_LIMIT_EUR && grossMonthly <= C.MIDIJOB_UPPER_EUR;

  // Employer contributions (always on employer for Minijob)
  const employerKV = round2(grossMonthly * C.EMPLOYER_KV_RATE);
  const employerRV = round2(grossMonthly * C.EMPLOYER_RV_RATE);
  const employerPauschsteuer = round2(grossMonthly * C.EMPLOYER_PAUSCHSTEUER);
  const employerU1 = round2(grossMonthly * C.EMPLOYER_U1);
  const employerU2 = round2(grossMonthly * C.EMPLOYER_U2);
  const employerInsolvenzgeld = round2(grossMonthly * C.EMPLOYER_INSOLVENZGELD);

  const employerTotalCost = round2(
    grossMonthly +
    employerKV +
    employerRV +
    employerPauschsteuer +
    employerU1 +
    employerU2 +
    employerInsolvenzgeld
  );

  // Employee: optional RV top-up (default: not paying extra)
  const employeeRV = 0;
  const netMonthly = round2(grossMonthly - employeeRV);
  const netAnnual = round2(netMonthly * 12);
  const netHourly = round2(netMonthly / (hoursPerWeek * C.WEEKS_PER_MONTH));

  // How many months until annual limit is hit
  const monthsUntilLimit =
    !isOverLimit && grossMonthly > 0
      ? Math.floor((C.ANNUAL_LIMIT_EUR - grossAnnual) / grossMonthly)
      : null;

  // How many hours/month can work before hitting monthly limit
  const hoursUntilLimitPerMonth =
    !isOverLimit && grossHourly > 0
      ? Math.floor(C.MONTHLY_LIMIT_EUR / grossHourly / C.WEEKS_PER_MONTH)
      : null;

  return {
    grossMonthly,
    grossAnnual,
    employeeRV,
    netMonthly,
    netAnnual,
    netHourly,
    employerRV,
    employerKV,
    employerPauschsteuer,
    employerU1,
    employerU2,
    employerInsolvenzgeld,
    employerTotalCost,
    employerTotalCostAnnual: round2(employerTotalCost * 12),
    isOverLimit,
    isMidijob,
    monthsUntilLimit,
    hoursUntilLimitPerMonth,
  };
}

export function calculateMidijob(grossMonthly: number, hoursPerWeek: number): MidijobResult {
  const isOverLimit = grossMonthly > C.MIDIJOB_UPPER_EUR;

  const employeeKV = round2(grossMonthly * C.MIDIJOB_EMPLOYEE_KV);
  const employeeRV = round2(grossMonthly * C.MIDIJOB_EMPLOYEE_RV);
  const employeePV = round2(grossMonthly * C.MIDIJOB_EMPLOYEE_PV);
  const employeeAV = round2(grossMonthly * C.MIDIJOB_EMPLOYEE_AV);
  const totalEmployeeDeductions = round2(employeeKV + employeeRV + employeePV + employeeAV);

  const netMonthly = round2(grossMonthly - totalEmployeeDeductions);
  const netAnnual = round2(netMonthly * 12);
  const netHourly = round2(netMonthly / (hoursPerWeek * C.WEEKS_PER_MONTH));

  const employerKV = round2(grossMonthly * C.MIDIJOB_EMPLOYER_KV);
  const employerRV = round2(grossMonthly * C.MIDIJOB_EMPLOYER_RV);
  const employerPV = round2(grossMonthly * C.MIDIJOB_EMPLOYER_PV);
  const employerAV = round2(grossMonthly * C.MIDIJOB_EMPLOYER_AV);

  const employerTotalCost = round2(
    grossMonthly + employerKV + employerRV + employerPV + employerAV
  );

  return {
    grossMonthly,
    grossAnnual: round2(grossMonthly * 12),
    netMonthly,
    netAnnual,
    netHourly,
    employerTotalCost,
    employerTotalCostAnnual: round2(employerTotalCost * 12),
    isOverLimit,
  };
}

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}

export function formatEur(amount: number): string {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  }).format(amount);
}

export function formatEurRounded(amount: number): string {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}