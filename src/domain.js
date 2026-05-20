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
    "modules": [
        {
            "name": "Review triage inbox",
            "description": "Classifies review sentiment, urgency, topic, channel, privacy risk, and escalation needs before drafting.",
            "metrics": [
                "Reviews triaged",
                "Escalations flagged",
                "Privacy risks"
            ],
            "deliverable": "Review triage ledger"
        },
        {
            "name": "Owner-voice reply studio",
            "description": "Drafts positive, neutral, critical, and service-recovery responses using approved tone and policy constraints.",
            "metrics": [
                "Drafts ready",
                "Tone fit",
                "Policy matches"
            ],
            "deliverable": "Reply copy pack"
        },
        {
            "name": "Escalation and compliance guardrail",
            "description": "Detects PII, legal/medical claims, refunds, staff disputes, and cases that require owner handling.",
            "metrics": [
                "PII flags",
                "Escalations",
                "Blocked replies"
            ],
            "deliverable": "Escalation decision tree"
        },
        {
            "name": "Publishing approval queue",
            "description": "Tracks owner approval, channel formatting, posting status, and response-time commitments.",
            "metrics": [
                "Owner approvals",
                "Publish queue",
                "SLA coverage"
            ],
            "deliverable": "Approved reply queue"
        }
    ],
    "plays": [
        {
            "name": "Weekly review response batch",
            "trigger": "Owner has unanswered reviews and no safe reply workflow.",
            "outcome": "Triaged reviews and approved response drafts."
        },
        {
            "name": "Critical review recovery",
            "trigger": "A negative review needs careful response or escalation.",
            "outcome": "Owner-approved service-recovery response or no-post escalation note."
        },
        {
            "name": "Owner voice calibration",
            "trigger": "Replies sound generic or risky.",
            "outcome": "Tone rules, do/don\u2019t phrases, and response examples."
        }
    ],
    "economics": {
        "buyer": "Small business owner, reputation manager, or student marketing pod",
        "valueMetric": "Owner-approved review replies posted on time",
        "priceHint": "$59/month reply queue or $249 reputation cleanup sprint",
        "northStar": "Reviews answered within SLA without privacy escalations"
    },
    "exportSuite": [
        "Review triage ledger",
        "Reply copy pack",
        "Escalation decision tree",
        "Owner approval queue",
        "Tone calibration card"
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
        "sampleRows": { "Reviews imported/entered": "Recent Google and Facebook reviews entered with channel and date", "Sentiment/severity tagged": "Positive, neutral, critical, urgent, and service recovery labels applied", "PII/private details removed": "Names, order details, health/legal claims, and private facts removed from drafts", "Owner voice/tone selected": "Warm, accountable, concise owner voice selected with banned phrases", "Positive reply drafted": "Positive review response drafted with specific thank-you and invitation back", "Critical reply drafted": "Critical review response drafted without arguing or exposing private details", "Escalation rule applied": "Refund, safety, staff, and legal triggers routed to owner before posting", "Owner approval captured": "Owner approval, edits, and final channel copy recorded", "Response SLA target set": "48-hour target and weekly batch review cadence selected", "Template variants created": "Positive, mixed, critical, and no-post escalation templates created", "Channel formatting checked": "Google and Facebook formatting checked for length and tone", "Post-response follow-up planned": "Offline follow-up and recurring theme notes assigned to owner" }
    }
};
//# sourceMappingURL=domain.js.map