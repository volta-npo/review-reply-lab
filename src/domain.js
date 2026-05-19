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
        "Reply pack exported"
    ],
    "artifacts": [
        "Positive reply pack",
        "Critical review response",
        "Tone guide"
    ],
    "checks": [
        "Critical reviews require escalation check",
        "Owner approval before ready",
        "No private customer data"
    ],
    "sampleClient": "Riverside Community Bakery"
};
//# sourceMappingURL=domain.js.map