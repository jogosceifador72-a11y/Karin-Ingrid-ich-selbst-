export interface LegalDoc {
  id: 'impressum' | 'datenschutz' | 'haftungsausschluss';
  title: string;
  eyebrow: string;
  content: string[];
  note?: string;
}

export const legalDocs: Record<string, LegalDoc> = {
  impressum: {
    id: 'impressum',
    title: 'Impressum',
    eyebrow: 'RECHTLICHE INFORMATIONEN',
    content: [
      'Verantwortliche Person / Anbieter: Karin Ingrid – Gesundheit & Ernährung',
      'Anschrift: [vollständige ladungsfähige Anschrift wird bei Veröffentlichung hinterlegt]',
      'E-Mail: kontakt@karin-ingrid.de',
      'Weitere gesetzlich erforderliche Angaben sind abhängig von Betreiber, Angebot und anwendbarem Recht zu ergänzen. Dieser Platzhalter ist keine Rechtsberatung und wird vor der endgültigen Veröffentlichung geprüft.'
    ],
    note: 'Platzhalter – vor Veröffentlichung vervollständigen.'
  },
  datenschutz: {
    id: 'datenschutz',
    title: 'Datenschutzerklärung',
    eyebrow: 'RECHTLICHE INFORMATIONEN',
    content: [
      'Die Datenschutzerklärung beschreibt die technische Umsetzung dieser Website, einschließlich Hosting, Server-Logs, Schriftarten, Kontaktmöglichkeiten, eingebundener Dienste und etwaiger Analysewerkzeuge.',
      'Externe Links führen zu Websites Dritter. Beim Anklicken gelten die Datenschutzbestimmungen des jeweiligen Anbieters.',
      'Verantwortliche, Kontaktangaben, Rechtsgrundlagen, Speicherfristen und Betroffenenrechte (DSGVO) werden transparent gewährleistet.'
    ],
    note: 'Entwurf / Platzhalter – vor Veröffentlichung mit endgültigen Betreiberdaten abgleichen.'
  },
  haftungsausschluss: {
    id: 'haftungsausschluss',
    title: 'Haftungsausschluss',
    eyebrow: 'GESUNDHEITSINFORMATIONEN',
    content: [
      'Die Inhalte dieser Website dienen ausschließlich der allgemeinen Information und Orientierung und ersetzen keinesfalls eine individuelle medizinische Beratung, Untersuchung oder Behandlung.',
      'Aus den bereitgestellten Informationen kann keine Diagnose oder individuelle Behandlungsempfehlung abgeleitet werden. Bei gesundheitlichen Beschwerden wenden Sie sich bitte immer an qualifiziertes medizinisches Fachpersonal.',
      'Bei akuten oder lebensbedrohlichen Symptomen suchen Sie bitte unverzüglich den Notruf oder ärztliche Hilfe auf.'
    ]
  }
};
