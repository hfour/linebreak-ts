/**
 * This is copied from https://github.com/devongovett/linebreak and adopted to TS
 * needs more work
 */

export const DI_BRK = 0; // Direct break opportunity
export const IN_BRK = 1; // Indirect break opportunity
export const CI_BRK = 2; // Indirect break opportunity for combining marks
export const CP_BRK = 3; // Prohibited break for combining marks
export const PR_BRK = 4; // Prohibited break

// # table generated from http://www.unicode.org/reports/tr14/#Table2
export const pairTable = [
  [
    PR_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    CP_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
  ],
  [
    DI_BRK,
    PR_BRK,
    PR_BRK,
    IN_BRK,
    IN_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    IN_BRK,
    IN_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    IN_BRK,
    IN_BRK,
    DI_BRK,
    DI_BRK,
    PR_BRK,
    CI_BRK,
    PR_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
  ],
  [
    DI_BRK,
    PR_BRK,
    PR_BRK,
    IN_BRK,
    IN_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    DI_BRK,
    DI_BRK,
    IN_BRK,
    IN_BRK,
    DI_BRK,
    DI_BRK,
    PR_BRK,
    CI_BRK,
    PR_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
  ],
  [
    PR_BRK,
    PR_BRK,
    PR_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    PR_BRK,
    CI_BRK,
    PR_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
  ],
  [
    IN_BRK,
    PR_BRK,
    PR_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    PR_BRK,
    CI_BRK,
    PR_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
  ],
  [
    DI_BRK,
    PR_BRK,
    PR_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    IN_BRK,
    IN_BRK,
    DI_BRK,
    DI_BRK,
    PR_BRK,
    CI_BRK,
    PR_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
  ],
  [
    DI_BRK,
    PR_BRK,
    PR_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    IN_BRK,
    IN_BRK,
    DI_BRK,
    DI_BRK,
    PR_BRK,
    CI_BRK,
    PR_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
  ],
  [
    DI_BRK,
    PR_BRK,
    PR_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    DI_BRK,
    DI_BRK,
    IN_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    IN_BRK,
    IN_BRK,
    DI_BRK,
    DI_BRK,
    PR_BRK,
    CI_BRK,
    PR_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
  ],
  [
    PR_BRK, // Changed from DI_BRK not to swallow the dot at ".["
    PR_BRK,
    PR_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    DI_BRK,
    DI_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    DI_BRK,
    DI_BRK,
    IN_BRK,
    IN_BRK,
    DI_BRK,
    DI_BRK,
    PR_BRK,
    CI_BRK,
    PR_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
  ],
  [
    IN_BRK,
    PR_BRK,
    PR_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    DI_BRK,
    DI_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    DI_BRK,
    IN_BRK,
    IN_BRK,
    DI_BRK,
    DI_BRK,
    PR_BRK,
    CI_BRK,
    PR_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    DI_BRK,
  ],
  [
    IN_BRK,
    PR_BRK,
    PR_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    DI_BRK,
    DI_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    DI_BRK,
    DI_BRK,
    IN_BRK,
    IN_BRK,
    DI_BRK,
    DI_BRK,
    PR_BRK,
    CI_BRK,
    PR_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
  ],
  [
    IN_BRK,
    PR_BRK,
    PR_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    DI_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    DI_BRK,
    DI_BRK,
    PR_BRK,
    CI_BRK,
    PR_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
  ],
  [
    IN_BRK,
    PR_BRK,
    PR_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    DI_BRK,
    DI_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    DI_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    DI_BRK,
    DI_BRK,
    PR_BRK,
    CI_BRK,
    PR_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
  ],
  [
    IN_BRK,
    PR_BRK,
    PR_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    DI_BRK,
    DI_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    DI_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    DI_BRK,
    DI_BRK,
    PR_BRK,
    CI_BRK,
    PR_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
  ],
  [
    DI_BRK,
    PR_BRK,
    PR_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    DI_BRK,
    IN_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    DI_BRK,
    DI_BRK,
    PR_BRK,
    CI_BRK,
    PR_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
  ],
  [
    DI_BRK,
    PR_BRK,
    PR_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    DI_BRK,
    DI_BRK,
    PR_BRK,
    CI_BRK,
    PR_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
  ],
  [
    DI_BRK,
    PR_BRK,
    PR_BRK,
    IN_BRK,
    DI_BRK,
    IN_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    DI_BRK,
    DI_BRK,
    IN_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    IN_BRK,
    IN_BRK,
    DI_BRK,
    DI_BRK,
    PR_BRK,
    CI_BRK,
    PR_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
  ],
  [
    DI_BRK,
    PR_BRK,
    PR_BRK,
    IN_BRK,
    DI_BRK,
    IN_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    IN_BRK,
    IN_BRK,
    DI_BRK,
    DI_BRK,
    PR_BRK,
    CI_BRK,
    PR_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
  ],
  [
    IN_BRK,
    PR_BRK,
    PR_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    PR_BRK,
    CI_BRK,
    PR_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
  ],
  [
    DI_BRK,
    PR_BRK,
    PR_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    IN_BRK,
    IN_BRK,
    DI_BRK,
    PR_BRK,
    PR_BRK,
    CI_BRK,
    PR_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
  ],
  [
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    PR_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
  ],
  [
    IN_BRK,
    PR_BRK,
    PR_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    DI_BRK,
    DI_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    DI_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    DI_BRK,
    DI_BRK,
    PR_BRK,
    CI_BRK,
    PR_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
  ],
  [
    IN_BRK,
    PR_BRK,
    PR_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    PR_BRK,
    CI_BRK,
    PR_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
  ],
  [
    DI_BRK,
    PR_BRK,
    PR_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    DI_BRK,
    IN_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    DI_BRK,
    DI_BRK,
    PR_BRK,
    CI_BRK,
    PR_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    IN_BRK,
    IN_BRK,
    DI_BRK,
  ],
  [
    DI_BRK,
    PR_BRK,
    PR_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    DI_BRK,
    IN_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    DI_BRK,
    DI_BRK,
    PR_BRK,
    CI_BRK,
    PR_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    IN_BRK,
    DI_BRK,
  ],
  [
    DI_BRK,
    PR_BRK,
    PR_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    DI_BRK,
    IN_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    DI_BRK,
    DI_BRK,
    PR_BRK,
    CI_BRK,
    PR_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    DI_BRK,
    DI_BRK,
  ],
  [
    DI_BRK,
    PR_BRK,
    PR_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    DI_BRK,
    IN_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    DI_BRK,
    DI_BRK,
    PR_BRK,
    CI_BRK,
    PR_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    IN_BRK,
    IN_BRK,
    DI_BRK,
  ],
  [
    DI_BRK,
    PR_BRK,
    PR_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    DI_BRK,
    IN_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    DI_BRK,
    DI_BRK,
    PR_BRK,
    CI_BRK,
    PR_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    IN_BRK,
    DI_BRK,
  ],
  [
    DI_BRK,
    PR_BRK,
    PR_BRK,
    IN_BRK,
    IN_BRK,
    IN_BRK,
    PR_BRK,
    PR_BRK,
    PR_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    IN_BRK,
    IN_BRK,
    DI_BRK,
    DI_BRK,
    PR_BRK,
    CI_BRK,
    PR_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    DI_BRK,
    IN_BRK,
  ],
];