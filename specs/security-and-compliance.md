# Security & Compliance

## Overview

Security and compliance form the foundation of Via TRM's platform architecture. As a system handling sensitive student records, visa information, health data, and institutional agreements, Via maintains rigorous security certifications and compliance standards that meet or exceed the requirements of higher education institutions.

Via's security posture is designed to satisfy institutional procurement teams, IT security offices, and regulatory requirements without placing additional burden on campus IT staff. The platform is fully cloud-hosted on AWS with built-in redundancy, continuous monitoring, and enterprise-grade access controls.

## Key Concepts

- **SOC 2 Type II**: An independent audit verifying that Via's security controls are designed and operating effectively over time. Covers all four products (Global, Travel, International, Contracts).
- **FERPA Alignment**: Role-based access controls and audit trails that support institutional compliance with the Family Educational Rights and Privacy Act.
- **SEVIS Compliance**: Built-in validations and reporting that minimize errors in Student and Exchange Visitor Information System submissions.
- **Duty of Care**: The institutional obligation to protect the safety and well-being of travelers, supported by Via Travel's real-time tracking and alert capabilities.
- **HECVAT**: The Higher Education Community Vendor Assessment Tool — Via is pre-vetted and compliant.

## Current Behavior

### Certifications & Standards
- **SOC 2 Type II** — Full-platform certification across Via Global, Travel, International, and Contracts
- **TX-RAMP Certified** — Meets State of Texas cloud security requirements
- **HECVAT Compliant** — Pre-vetted by the Higher Education Community Vendor Assessment Tool
- **HIPAA-Aligned** — Protects sensitive health data where applicable
- **VPAT Level AA** — Third-party accessibility assessment aligned with WCAG 2.1
- **GDPR Verified** — Meets EU standards for personal data privacy and cross-border transfers

### Data Protection
- All data encrypted at rest (AES-256) and in transit (TLS 1.2+)
- Granular permissions with field-level access controls
- Role-based access controlling what each user type can see and modify
- Every login, edit, approval, and message is time-stamped and traceable in audit logs
- SAML 2.0 SSO integration with Okta, Azure AD, and OneLogin

### Infrastructure
- Hosted on Amazon Web Services (AWS) with built-in redundancy
- 99.998% uptime guarantee with continuous real-time monitoring
- Business continuity and disaster recovery baked into architecture
- Secure integration layer supporting SAML 2.0, REST APIs, and SFTP transfers

## Related Use Cases
- [Manage International Student Compliance](manage-international-student-compliance/use-case.md) — SEVIS compliance requires audit-ready records and validated data submissions
- [Manage Institutional Travel](manage-institutional-travel/use-case.md) — Duty of care obligations require secure traveler data and access controls
- [Respond to Travel Incidents](respond-to-travel-incidents/use-case.md) — Incident response requires Clery-compliant location history and audit trails
- [Manage Partner Agreements](manage-partner-agreements/use-case.md) — Agreement data requires enterprise-grade access controls and encryption

## Technical Notes

Via's security model is designed so institutions can adopt the platform with minimal IT lift. SSO integration eliminates separate credential management, role-based access aligns with campus organizational structures, and audit trails satisfy both internal compliance teams and external auditors. The SOC 2 Type II certification covers the entire platform rather than individual modules, providing consistent security guarantees across all product areas.
