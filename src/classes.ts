/**
 * The following break classes are handled by the pair table
 */
export const OP = 0; // Opening punctuation
export const CL = 1; // Closing punctuation
export const CP = 2; // Closing parenthesis
export const QU = 3; // Ambiguous quotation
export const GL = 4; // Glue
export const NS = 5; // Non-starters
export const EX = 6; // Exclamation/Interrogation
export const SY = 7; // Symbols allowing break after
export const IS = 8; // Infix separator
export const PR = 9; // Prefix
export const PO = 10; // Postfix
export const NU = 11; // Numeric
export const AL = 12; // Alphabetic
export const HL = 13; // Hebrew Letter
export const ID = 14; // Ideographic
export const IN = 15; // Inseparable characters
export const HY = 16; // Hyphen
export const BA = 17; // Break after
export const BB = 18; // Break before
export const B2 = 19; // Break on either side (but not pair)
export const ZW = 20; // Zero-width space
export const CM = 21; // Combining marks
export const WJ = 22; // Word joiner
export const H2 = 23; // Hangul LV
export const H3 = 24; // Hangul LVT
export const JL = 25; // Hangul L Jamo
export const JV = 26; // Hangul V Jamo
export const JT = 27; // Hangul T Jamo
export const RI = 28; // Regional Indicator

/**
 * The following break classes are not handled by the pair table
 */
export const AI = 29; // Ambiguous (Alphabetic or Ideograph)
export const BK = 30; // Break (mandatory)
export const CB = 31; // Contingent break
export const CJ = 32; // Conditional Japanese Starter
export const CR = 33; // Carriage return
export const LF = 34; // Line feed
export const NL = 35; // Next line
export const SA = 36; // South-East Asian
export const SG = 37; // Surrogates
export const SP = 38; // Space
export const XX = 39; // Unknown
