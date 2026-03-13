# Automation & Workflows

## Overview

Via TRM's workflow automation engine is a cross-cutting capability that powers all four products. With over 5,000 configurable workflow patterns, the system handles routine administrative tasks — reminders, status updates, form assignments, approval routing, and escalations — automatically, freeing staff to focus on advising, compliance, and strategic work.

The automation system is designed for non-technical administrators who need to configure complex institutional processes without writing code or submitting IT tickets.

## Key Concepts

- **Conditional Logic**: Rules that trigger different actions based on data values (e.g., a student's destination, visa type, or program start date).
- **Deadline Rules**: Time-based triggers that send reminders, escalate tasks, or change statuses based on approaching or passed deadlines.
- **Batch Actions**: The ability to review, approve, email, or update multiple records simultaneously rather than one at a time.
- **Template Management**: Reusable configurations for forms, emails, checklists, and approval workflows that standardize repeatable processes.
- **Auto-Assignment**: Rules that automatically route requests, applications, or tasks to the appropriate staff member based on criteria like visa type, program, or department.

## Current Behavior

### Via Global Workflows
- Drag-and-drop form builder for application creation
- Reviewer/approver routing that sends applications to the right personnel
- Automated reminders for missing forms, incomplete applications, and approaching deadlines
- Status change triggers that advance students through pipeline stages
- Batch actions for reviewing, approving, emailing, and updating records at scale
- Smart notifications for time-sensitive steps and missing items
- Data validation rules that catch errors at the point of entry

### Via International Workflows
- Auto-assignment of cases to ISSS advisors based on conditional logic (visa type, nationality, etc.)
- Template-driven request processing for common visa actions
- Tag management for categorizing and filtering student records
- Built-in SEVIS validations that catch errors before submission
- Automated alerts for compliance deadlines (program end dates, work authorization expiry, etc.)
- Batch SEVIS reporting for processing multiple records simultaneously

### Via Travel Workflows
- Approval workflows triggered by destination risk level, travel dates, or department
- Escalation rules for high-risk destinations requiring additional review
- Pre-departure checklists that auto-assign based on trip type
- SafeCheck automated check-in scheduling during active travel
- Policy rules and required fields that enforce data quality at registration
- Incident logging tied to specific trips and travelers

### Via Contracts Workflows
- Expiry notifications at 90/60/30 days before agreement renewal dates
- Renewal workflows with approver routing and legal review checkpoints
- Draft → Review → Approved status flow with complete audit trail
- Exchange balance alerts when commitments approach caps or parity falls out of alignment
- Task checklists for complex renewal processes

## Related Use Cases
- [Manage Study Abroad Applications](manage-study-abroad-applications/use-case.md) — Application pipeline relies heavily on workflow automation
- [Manage International Student Compliance](manage-international-student-compliance/use-case.md) — SEVIS compliance workflows are automated to reduce errors
- [Manage Institutional Travel](manage-institutional-travel/use-case.md) — Travel approval and pre-departure workflows are rule-based
- [Manage Partner Agreements](manage-partner-agreements/use-case.md) — Agreement renewal workflows prevent expirations from slipping through

## Technical Notes

The workflow engine operates on an event-driven architecture where data changes, time conditions, and user actions trigger configured responses. Workflows are composable — simpler rules can be chained together to create complex multi-step processes. All workflow executions are logged in the platform's audit trail, providing visibility into what was triggered, when, and why. The system supports both synchronous actions (immediate status changes) and asynchronous actions (scheduled reminders, queued batch operations).
