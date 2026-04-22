export type Language = 'en' | 'de';

export type EmploymentType = 'minijob' | 'midijob';

export interface MinijobInputs {
  grossHourly: number;
  hoursPerWeek: number;
  employmentType: EmploymentType;
  hasKirchensteuer: boolean;
  bundesland: string;
}

export interface MinijobResult {
  grossMonthly: number;
  grossAnnual: number;

  // Employee
  employeeRV: number;
  netMonthly: number;
  netAnnual: number;
  netHourly: number;

  // Employer
  employerRV: number;
  employerKV: number;
  employerPauschsteuer: number;
  employerU1: number;
  employerU2: number;
  employerInsolvenzgeld: number;
  employerTotalCost: number;
  employerTotalCostAnnual: number;

  // Status
  isOverLimit: boolean;
  isMidijob: boolean;
  monthsUntilLimit: number | null;
  hoursUntilLimitPerMonth: number | null;
}

export interface MidijobResult {
  grossMonthly: number;
  grossAnnual: number;
  netMonthly: number;
  netAnnual: number;
  netHourly: number;
  employerTotalCost: number;
  employerTotalCostAnnual: number;
  isOverLimit: boolean;
}