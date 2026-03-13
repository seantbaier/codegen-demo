# Integrations & Data Exchange

## Overview

Via TRM is designed to operate as a connected hub within an institution's existing technology ecosystem rather than as an isolated system. The platform provides pre-built integrations with major Student Information Systems (SIS), single sign-on providers, risk intelligence services, and payment gateways, along with flexible APIs and SFTP capabilities for custom data exchange.

These integrations eliminate double data entry, keep student records synchronized across campus systems, and extend Via's capabilities through real-time feeds from external risk and compliance services.

## Key Concepts

- **SIS Integration**: Bi-directional data synchronization with institutional Student Information Systems, ensuring student demographics, enrollment status, and academic records stay current in Via without manual re-entry.
- **SAML 2.0 SSO**: Single Sign-On protocol enabling students and staff to access Via using their existing campus credentials.
- **SEVIS RTI + Batch**: Real-Time Interface and Batch processing connections to the US government's Student and Exchange Visitor Information System for visa compliance reporting.
- **Risk Intelligence Feeds**: Real-time travel advisory and risk data from partners like International SOS, Riskline, and Crisis24.
- **SFTP/API Exchange**: Secure File Transfer Protocol and REST API endpoints for bulk data imports, exports, and custom integrations.

## Current Behavior

### Student Information Systems
- **Ellucian Banner** — Bi-directional sync for student demographics and enrollment
- **PeopleSoft** — Student data integration for academic records and program eligibility
- **Workday Student** — Cloud-native SIS connection for modern campus infrastructure
- Data syncs in minutes rather than days, keeping Via records current with campus systems

### Authentication
- SAML 2.0 Single Sign-On with Okta, Azure AD, and OneLogin
- Students and staff authenticate with existing campus credentials
- Eliminates separate password management for the Via platform

### SEVIS Integration (Via International)
- Unified RTI (Real-Time Interface) and Batch reporting in a single platform
- Covers F, M (coming soon), and J visa categories
- Built-in validations minimize SEVIS rejections before submission
- Reconciliation and de-duplication ensure accurate records
- Audit trails track every SEVIS submission and response

### Risk Intelligence Partners (Via Travel)
- **International SOS** — Global travel risk data and medical/security assistance
- **Riskline** — Destination risk profiles and real-time alerts
- **Crisis24** — Security intelligence and crisis management support
- Risk data feeds into destination profiles, approval workflows, and traveler advisories

### Data Exchange
- REST APIs for programmatic access to Via data
- SFTP for bulk file transfers and scheduled data synchronization
- CSV/PDF export for reporting, leadership updates, and accreditation needs
- Traveler data imports via API or SFTP for institutions migrating from other systems

### Provider Network (Via Connects)
- Study abroad providers publish programs once and sync across all partner institution catalogs
- Updates flow automatically — no manual re-entry by institutional staff
- Approval-aware visibility ensures only authorized programs appear in each institution's catalog

## Related Use Cases
- [Manage Study Abroad Applications](manage-study-abroad-applications/use-case.md) — SIS integration keeps student data current during application review
- [Manage International Student Compliance](manage-international-student-compliance/use-case.md) — SEVIS integration is central to visa compliance workflows
- [Manage Institutional Travel](manage-institutional-travel/use-case.md) — Risk intelligence feeds power destination profiles and traveler advisories
- [Publish Provider Programs](publish-provider-programs/use-case.md) — Provider Network syncs program listings across institutional catalogs

## Technical Notes

Via's integration architecture is designed for rapid deployment. SIS connections use standardized data mappings that align with common higher education data models. SAML 2.0 configuration typically requires only metadata exchange between Via and the institutional identity provider. SEVIS integration uses government-standard protocols. Risk intelligence feeds are pre-configured partnerships that activate upon licensing. Custom integrations via REST API follow standard OAuth 2.0 authentication patterns.
