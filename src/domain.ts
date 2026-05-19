export const domain = {
  "kind": "response-lab",
  "title": "Review Reply Lab",
  "purpose": "A purpose-built response lab interface for privacy-first review response drafts that teach owners how to reply with empathy and local voice.",
  "inputTitle": "Product-specific inputs",
  "previewTitle": "Generated working outputs",
  "tableTitle": "Review response queue",
  "metricLabels": [
    "Response Quality",
    "Escalation Safety",
    "Approval Coverage"
  ],
  "fields": [
    {
      "id": "organization-client",
      "label": "Organization / client",
      "type": "text",
      "sample": "Riverside Community Bakery",
      "placeholder": "Enter organization / client"
    },
    {
      "id": "primary-goal",
      "label": "Primary goal",
      "type": "text",
      "sample": "reviews answered with owner-approved responses",
      "placeholder": "Enter primary goal"
    },
    {
      "id": "owner-reviewer",
      "label": "Owner / reviewer",
      "type": "text",
      "sample": "Volta project lead",
      "placeholder": "Enter owner / reviewer"
    },
    {
      "id": "evidence-source",
      "label": "Evidence source",
      "type": "text",
      "sample": "Owner interview + public audit",
      "placeholder": "Enter evidence source"
    },
    {
      "id": "input-asset",
      "label": "Input asset",
      "type": "text",
      "sample": "Review sentiment classified",
      "placeholder": "Enter input asset"
    },
    {
      "id": "output-format",
      "label": "Output format",
      "type": "text",
      "sample": "Positive reply pack",
      "placeholder": "Enter output format"
    },
    {
      "id": "review-threshold",
      "label": "Review threshold",
      "type": "number",
      "sample": 85,
      "placeholder": "Enter review threshold"
    },
    {
      "id": "approved-channel",
      "label": "Approved channel",
      "type": "text",
      "sample": "Owner handoff packet",
      "placeholder": "Enter approved channel"
    }
  ],
  "rows": [
    "Review sentiment classified",
    "Severity assigned",
    "Tone card selected",
    "Draft acknowledges concern",
    "Next step included",
    "Escalation checked",
    "Owner approval captured",
    "Reply pack exported",
    "PII redaction scan completed",
    "Positive review template selected",
    "Critical review recovery path drafted",
    "Channel posting instructions added"
  ],
  "artifacts": [
    "Positive reply pack",
    "Critical review response",
    "Tone guide",
    "PII-safe reply queue",
    "Owner approval tracker",
    "Channel posting checklist"
  ],
  "checks": [
    "Critical reviews require escalation check",
    "Owner approval before ready",
    "No private customer data",
    "PII scan required before export",
    "Critical replies require offline escalation option",
    "Posting checklist must include reviewer privacy note"
  ],
  "sampleClient": "Riverside Community Bakery",
  "saas": {
    "personas": ["Review response coach", "Business owner", "Customer service lead"],
    "stages": [
      { "name": "Review triage", "goal": "Classify sentiment, severity, privacy risk, and escalation needs.", "rowPatterns": ["sentiment|Severity|PII|Escalation"] },
      { "name": "Reply drafting", "goal": "Generate owner-voice response drafts with tone cards and next steps.", "rowPatterns": ["Tone|Draft|Positive|Critical"] },
      { "name": "Approval and posting", "goal": "Capture owner approval and export channel-ready instructions.", "rowPatterns": ["Owner approval|Reply pack|Channel|posting"] }
    ],
    "sampleValues": { "primary-goal": "clear a weekly queue of owner-approved review replies" },
    "sampleRows": { "PII redaction scan completed": "Removed order details, phone numbers, and private appointment notes", "Channel posting instructions added": "Instructions include copy, paste, verify account, and screenshot proof steps" }
  }
};
