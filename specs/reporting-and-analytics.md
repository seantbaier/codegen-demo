# Reporting & Analytics

## Overview

Via TRM provides built-in reporting and analytics capabilities across all four products, giving administrators real-time visibility into program performance, compliance status, travel activity, and partnership health. Reports are designed to serve both operational needs (day-to-day decision making) and strategic needs (leadership presentations, accreditation, and audit responses).

The reporting layer transforms the data captured through daily platform use into actionable dashboards, trend analyses, and exportable reports — eliminating the need for separate BI tools or manual spreadsheet compilation.

## Key Concepts

- **Activity Feed / Home Dashboard**: A personalized landing page showing real-time metrics, upcoming deadlines, and actionable items for administrators.
- **Open Doors Exports**: Pre-formatted data exports compatible with the Institute of International Education's Open Doors survey, the primary national data source on international students and study abroad.
- **Compliance Exports**: Audit-ready reports for Clery Act compliance, SEVIS reconciliation, and internal reviews.
- **Trend Analysis**: Year-over-year comparisons of participation, destinations, demographics, and outcomes.
- **Response Metrics**: Travel-specific analytics tracking SafeCheck check-in rates, time-to-contact, and outreach coverage during incidents.

## Current Behavior

### Via Global Reporting
- Pipeline analytics showing application flow from interest → application → acceptance → commitment
- Yield analysis tracking conversion rates at each stage
- Participation trends by term, program, destination, and student demographics
- Open Doors-compatible exports for national reporting
- Advisor workload views showing case distribution
- CSV/PDF export for leadership updates and accreditation

### Via International Reporting
- SEVIS reconciliation reports identifying discrepancies between Via and SEVIS records
- Staff workload views and processing time analytics
- Year-over-year trend analysis for visa categories and request types
- Audit-ready records with complete change history
- Compliance dashboards showing pending actions and approaching deadlines

### Via Travel Reporting
- Active traveler dashboards showing who is where in real time
- Destination heat maps and travel volume trends
- Cohort and program views filterable by students, faculty, departments, and terms
- Response metrics: check-in completion rates, time-to-contact during incidents, outreach coverage
- Compliance exports for Clery Act and internal audits
- CSV/PDF exports for board reports and leadership briefings

### Via Contracts Reporting
- Active agreement dashboards showing portfolio status at a glance
- Expiration timelines and renewal pipeline views
- Exchange balance tracking with parity analysis
- Program and college breakdowns showing partnership outcomes
- KPI dashboards for agreement health and portfolio value

## Related Use Cases
- [Browse & Discover Study Abroad Programs](browse-study-abroad-programs/use-case.md) — Program engagement data informs catalog optimization
- [Manage Study Abroad Applications](manage-study-abroad-applications/use-case.md) — Pipeline and yield analytics drive operational decisions
- [Manage International Student Compliance](manage-international-student-compliance/use-case.md) — SEVIS reconciliation and audit reports are essential compliance tools
- [Respond to Travel Incidents](respond-to-travel-incidents/use-case.md) — Response metrics measure incident communication effectiveness

## Technical Notes

Reporting data is drawn from the same transactional database that powers daily operations, ensuring reports reflect current state without ETL delays. Dashboards update in real time as records are created, modified, or advanced through workflows. Export capabilities support both structured data (CSV) and formatted documents (PDF). The reporting engine supports role-based visibility — administrators see data scoped to their access level, while leadership views aggregate across the institution.
