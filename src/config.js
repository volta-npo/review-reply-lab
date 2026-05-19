export const config = {
    "number": 8,
    "slug": "review-reply-lab",
    "title": "Review Reply Lab",
    "category": "Digital Presence",
    "tagline": "Privacy-first review response drafts that teach owners how to reply with empathy and local voice.",
    "persona": "Marketing pods managing reputation for clients.",
    "gap": "Review response tools are often paid, generic, or risky with customer data.",
    "niche": "Independent businesses learning reputation management.",
    "metric": "reviews answered with owner-approved responses",
    "modules": [
        "Positive review patterns",
        "Critical review recovery scripts",
        "Escalation guidance",
        "Tone style cards"
    ],
    "theme": {
        "accent": "#2563eb",
        "accent2": "#60a5fa",
        "emoji": "\ud83c\udf10",
        "metricLabel": "Presence readiness",
        "workflow": [
            "Capture public evidence",
            "Score the digital gap",
            "Prioritize owner-safe fixes",
            "Export handoff packet"
        ],
        "privacy": "Only public business information and project notes should be entered. Do not store passwords."
    },
    "statuses": [
        "not-started",
        "blocked",
        "in-progress",
        "ready",
        "approved"
    ],
    "criteria": [
        {
            "id": "positive-review-patterns",
            "label": "Positive review patterns",
            "weight": 15,
            "defaultStatus": "not-started",
            "prompt": "Implement and verify positive review patterns with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "critical-review-recovery-scripts",
            "label": "Critical review recovery scripts",
            "weight": 15,
            "defaultStatus": "not-started",
            "prompt": "Implement and verify critical review recovery scripts with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "escalation-guidance",
            "label": "Escalation guidance",
            "weight": 15,
            "defaultStatus": "not-started",
            "prompt": "Implement and verify escalation guidance with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "tone-style-cards",
            "label": "Tone style cards",
            "weight": 15,
            "defaultStatus": "not-started",
            "prompt": "Implement and verify tone style cards with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "evidence-quality",
            "label": "Evidence quality",
            "weight": 10,
            "defaultStatus": "not-started",
            "prompt": "Attach proof, source notes, screenshots, owner confirmation, or reviewer rationale."
        },
        {
            "id": "owner-handoff",
            "label": "Owner handoff",
            "weight": 10,
            "defaultStatus": "not-started",
            "prompt": "Make the output understandable and maintainable by a nontechnical owner."
        },
        {
            "id": "mission-alignment",
            "label": "Mission alignment",
            "weight": 10,
            "defaultStatus": "not-started",
            "prompt": "Show how this advances digital equity, student growth, or pro bono delivery."
        },
        {
            "id": "qa-safety",
            "label": "QA and safety",
            "weight": 10,
            "defaultStatus": "not-started",
            "prompt": "Resolve privacy, accessibility, accuracy, and operational risks before handoff."
        }
    ],
    "templates": {
        "actions": [
            "Run a real Volta scenario for Review Reply Lab and capture baseline evidence.",
            "Complete the positive review patterns workflow with owner-safe notes.",
            "Resolve all blocked rubric items and add evidence for every ready item.",
            "Export the handoff packet and review it with a mentor before client use."
        ]
    },
    "sample": {
        "clientName": "Riverside Community Bakery",
        "chapter": "Jacksonville",
        "studentLead": "Volta Student Lead",
        "notes": "Digital presence sprint for an under-digitized local storefront. Review Reply Lab sample.",
        "evidencePrefix": "Review Reply Lab",
        "evidence": [
            "Discovery call notes captured with owner confirmation.",
            "Public digital footprint reviewed and summarized.",
            "Mentor QA comments attached before handoff."
        ]
    }
};
//# sourceMappingURL=config.js.map