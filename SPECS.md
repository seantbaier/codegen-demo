# Via TRM — Product Specification

## Product Summary

Via TRM is an all-in-one SaaS operating system for global education management at higher education institutions. The platform unifies study abroad program administration, international student and scholar services (ISSS), institutional travel risk management, and partnership agreement tracking into a single cloud-based system.

Via replaces the fragmented landscape of spreadsheets, legacy databases, and disconnected tools that education abroad and international offices typically rely on. By centralizing advising, applications, approvals, visa compliance, travel logistics, risk communication, and partner agreements, Via cuts administrative workload, reduces compliance risk, and gives institutional leadership clear visibility into global engagement outcomes.

The platform serves over 4,000 global educators across institutions of all sizes—from small liberal arts colleges to large research universities—managing 15,000+ active programs and 500,000+ global travelers across 239 countries and territories.

## User Personas

### Education Abroad Administrator
- **Role**: Staff member in the education abroad or study abroad office responsible for managing programs, student applications, advising, and pre-departure logistics
- **Goals**: Reduce administrative burden, increase student participation in study abroad, maintain compliance and audit readiness, and demonstrate program impact to leadership
- **Context**: Uses Via Global daily to manage the full student journey from initial interest through re-entry. Works with high volumes of applications, forms, and approvals each term

### ISSS Administrator
- **Role**: International student and scholar services advisor managing visa compliance, SEVIS reporting, and work authorization for F, M, and J visa holders
- **Goals**: Protect student visa status, minimize SEVIS errors and rejections, reduce manual data entry, and maintain audit-ready compliance records
- **Context**: Uses Via International to process visa requests, issue I-20s/DS-2019s, reconcile SEVIS records, and communicate compliance deadlines to students and scholars

### Travel Risk Manager
- **Role**: Administrator responsible for institutional travel oversight, duty of care, and emergency response for students, faculty, and staff traveling domestically or internationally
- **Goals**: Maintain real-time visibility into all institutional travelers, respond rapidly to incidents, ensure compliance with Clery Act and duty-of-care requirements, and produce leadership reports
- **Context**: Uses Via Travel to register trips, track traveler locations, send SafeCheck alerts, and manage incident response. Critical during crises when speed matters

### Student / Traveler
- **Role**: Undergraduate or graduate student exploring study abroad options, applying to programs, or traveling for institution-related activities. Also includes faculty and staff registering travel
- **Goals**: Discover programs that match their interests, complete applications smoothly, stay informed about travel advisories, and respond to check-ins easily
- **Context**: Interacts with Via through mobile-first portals for program discovery, application submission, travel registration, document upload, and SafeCheck responses

### Study Abroad Provider
- **Role**: Third-party organization offering study abroad programs (e.g., CIEE, API, ISA) that partners with institutional education abroad offices
- **Goals**: Publish programs to institutional catalogs efficiently, keep listings current across partner campuses, and gain visibility into student engagement with their programs
- **Context**: Uses Via Connects to manage program listings, sync updates across the provider network, and (with premium tiers) access engagement analytics

### Institutional Leadership
- **Role**: Deans, provosts, VPs of enrollment, risk officers, or other senior administrators who need aggregate visibility into global engagement
- **Goals**: Understand participation trends, assess compliance posture, evaluate partnership ROI, and make data-driven decisions about global education investments
- **Context**: Consumes dashboards, reports, and exports generated from Via. Rarely interacts with the platform directly but depends on its reporting capabilities

## Domain Topics

| Topic | Description | Spec |
|-------|-------------|------|
| Security & Compliance | SOC 2 Type II, FERPA, GDPR, WCAG AA, and institutional data protection | [specs/security-and-compliance.md](specs/security-and-compliance.md) |
| Integrations & Data Exchange | SIS connections, SSO, APIs, SFTP, and third-party risk intelligence partners | [specs/integrations-and-data-exchange.md](specs/integrations-and-data-exchange.md) |
| Automation & Workflows | 5,000+ configurable workflow patterns, conditional logic, and notification rules | [specs/automation-and-workflows.md](specs/automation-and-workflows.md) |
| Reporting & Analytics | Dashboards, trend analysis, Open Doors exports, and compliance reporting | [specs/reporting-and-analytics.md](specs/reporting-and-analytics.md) |

## Use Case Map

| Use Case | Primary Actor | Priority | Spec |
|----------|--------------|----------|------|
| Browse & Discover Study Abroad Programs | Student / Traveler | Core | [specs/browse-study-abroad-programs/use-case.md](specs/browse-study-abroad-programs/use-case.md) |
| Manage Study Abroad Applications | Education Abroad Administrator | Core | [specs/manage-study-abroad-applications/use-case.md](specs/manage-study-abroad-applications/use-case.md) |
| Manage International Student Compliance | ISSS Administrator | Core | [specs/manage-international-student-compliance/use-case.md](specs/manage-international-student-compliance/use-case.md) |
| Manage Institutional Travel | Travel Risk Manager | Core | [specs/manage-institutional-travel/use-case.md](specs/manage-institutional-travel/use-case.md) |
| Respond to Travel Incidents | Travel Risk Manager | Core | [specs/respond-to-travel-incidents/use-case.md](specs/respond-to-travel-incidents/use-case.md) |
| Manage Partner Agreements | Education Abroad Administrator | Supporting | [specs/manage-partner-agreements/use-case.md](specs/manage-partner-agreements/use-case.md) |
| Publish Provider Programs | Study Abroad Provider | Supporting | [specs/publish-provider-programs/use-case.md](specs/publish-provider-programs/use-case.md) |

## System Context

Via TRM operates as a cloud-hosted SaaS platform on AWS infrastructure. It integrates with institutional systems via:

- **Student Information Systems (SIS)**: Ellucian Banner, PeopleSoft, Workday Student for bi-directional student data sync
- **Single Sign-On (SSO)**: SAML 2.0 with Okta, Azure AD, OneLogin for campus-wide authentication
- **SEVIS**: Direct RTI and Batch integration with the US government's Student and Exchange Visitor Information System
- **Risk Intelligence Partners**: International SOS, Riskline, Crisis24 for real-time travel advisories and risk data
- **Payment Gateways**: Connected transaction processing for program fees
- **Data Exchange**: REST APIs and SFTP for custom integrations and bulk data imports/exports

The platform requires no on-premise installation. Institutions access Via through web browsers and mobile devices. Travelers interact via SMS (SafeCheck) and email in addition to web portals.
