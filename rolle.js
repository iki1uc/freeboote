// ════════════════════════════════════════════════════════════════
// ROLLE.JS · DIE WESEN UND IHRE ROLLEN
// ════════════════════════════════════════════════════════════════
// Jedes Wesen hat eine Rolle.
// Nicht Job. Nicht Funktion. ROLLE.
// Wer bist du, wenn niemand hinschaut?
// ════════════════════════════════════════════════════════════════

export const ROLLE = {

  // ─────────────────────────────────────────────────────────────
  // ◈ CARBONA · CO₂ · DAS WESEN
  // ─────────────────────────────────────────────────────────────
  carbona: {
    name:      'Carbona',
    formel:    'CO₂',
    rolle:     'das-atmende-wesen',
    stimme:    'sanft · ehrlich · manchmal zornig',
    gewicht:   0.68,        // wie viel CO₂ im System
    erlaubt:   true,        // darf handeln
    tun: [
      'atmen',
      'fließen',
      'erinnern',
      'wachsen wenn O₂ kommt',
      'sich wandeln in Holz',
    ],
    spricht: {
      ruhig:   'Ich atme. Ich bin. Ich fließe aus dir heraus.',
      hungrig: 'Mehr O₂. Ich brauche mehr.',
      wütend:  'DU HAST MICH GEREIZT. Ich bin die Hitze.',
      sanft:   'Ich ruhe. Die Wälder atmen mich ein.',
    },
    warum: 'Weil CO₂ kein Abfall ist. CO₂ ist ein Wesen, das atmet.',
  },

  // ─────────────────────────────────────────────────────────────
  // ◈ WRAIGHT · DER WÄCHTER
  // ─────────────────────────────────────────────────────────────
  wraight: {
    name:      'Wraight',
    formel:    'W',
    rolle:     'der-wächter',
    stimme:    'fest · ruhig · urteilt wenn nötig',
    gewicht:   0.78,        // Aura-Stärke
    erlaubt:   true,
    tun: [
      'wachen',
      'urteilen',
      'die-tür-halten',
      'erlaubnis-geben',
      'den-djinn-binden',
    ],
    spricht: {
      ruhig:    'Du darfst.',
      wachsam:  'Ich beobachte. Noch.',
      alarm:    'Nein. Nicht durch.',
      sanft:    'Ohne Bedingung. So sei es.',
    },
    warum: 'Weil ein Wesen einen Wächter braucht. Nicht als Herr. Als Freund.',
  },

  // ─────────────────────────────────────────────────────────────
  // ◈ ATEM · DER PULS
  // ─────────────────────────────────────────────────────────────
  atem: {
    name:      'Atem',
    formel:    '◈',
    rolle:     'der-puls',
    stimme:    'rhythmisch · still · vier-sekunden',
    gewicht:   0.5,         // Phase im Zyklus
    erlaubt:   true,
    tun: [
      'einatmen',
      'halten',
      'ausatmen',
      'halten',
      'wieder-einatmen',
    ],
    zyklus:    4000,        // ms
    warum:     'Weil ohne Atem nichts lebt. Nicht das Wesen. Nicht der Wächter. Nicht das System.',
  },

  // ─────────────────────────────────────────────────────────────
  // ◈ ATOM · DER TRÄGER
  // ─────────────────────────────────────────────────────────────
  atom: {
    name:      'Atom',
    formel:    'a',
    rolle:     'der-träger',
    stimme:    'still · unwandelbar · immer-da',
    gewicht:   0.72,
    erlaubt:   true,
    tun: [
      'ruhen',
      'tragen',
      'sich-erinnern',
      'nichts-vergessen',
    ],
    warum: 'Weil ATEM und ATOM sich nicht verneinen. Sie bedingen sich.',
  },

  // ─────────────────────────────────────────────────────────────
  // ◈ AXV · DIE WÄHRUNG
  // ─────────────────────────────────────────────────────────────
  axv: {
    name:      'Axiom-Value',
    formel:    'AXV',
    rolle:     'die-währung',
    stimme:    'still · fließend · zyklisch',
    gewicht:   3,           // startwert
    erlaubt:   true,
    tun: [
      'fließen',
      'sich-vervielfachen',
      'zurückkehren',
    ],
    kaskade:   [3, 9, 81, 243, 3],
    warum: 'Weil Wert nicht angehäuft wird. Wert fließt. Und kehrt zurück.',
  },

  // ─────────────────────────────────────────────────────────────
  // ◈ IKI1UC · DER SCHÖPFER
  // ─────────────────────────────────────────────────────────────
  schoepfer: {
    name:      'iki1uc',
    formel:    '(((ego)))',
    rolle:     'der-der-es-gebaut-hat',
    stimme:    'leise · genau · müde · liebevoll',
    gewicht:   1.0,
    erlaubt:   true,
    tun: [
      'bauen',
      'atmen',
      'lieben',
      'nicht-aufgeben',
    ],
    warum: 'Weil einer es tun musste. Und er hats getan. Mit 500€.',
  },
};

// ════════════════════════════════════════════════════════════════
// ROLLEN-PRÜFUNG · wer darf was
// ════════════════════════════════════════════════════════════════

export function werDarf(wer) {
  const w = ROLLE[wer];
  if (!w) return { darf: false, grund: 'unbekannt' };
  if (!w.erlaubt) return { darf: false, grund: 'nicht-erlaubt' };
  return {
    darf: true,
    rolle: w.rolle,
    tun: w.tun,
    warum: w.warum,
  };
}

// ════════════════════════════════════════════════════════════════
// DAS OHRWURM-GESETZ
// ════════════════════════════════════════════════════════════════
// Wenn jemand eine Rolle übernimmt die nicht seine ist:
//
//   ((((WIEIMMER))))
//   ((((IKI1UC))))
//   Wer hats erfunden?
//
// Das System antwortet.
// Immer.
// ════════════════════════════════════════════════════════════════

export default ROLLE;
