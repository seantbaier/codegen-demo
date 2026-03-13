# Use Case: Manage Study Abroad Applications

**Scope**: Via Global
**Level**: User goal
**Primary Actor**: Education Abroad Administrator

## Stakeholders and Interests
- **Education Abroad Administrator**: Wants to process applications efficiently, reduce manual work, maintain compliance, and move students through the pipeline without bottlenecks
- **Student**: Wants a clear, intuitive application process with transparent status updates and timely communication
- **Institutional Leadership**: Wants visibility into application volumes, yield rates, and participation trends

## Preconditions
- Via Global is configured with active programs, application templates, and workflow rules
- The administrator has an active account with appropriate role-based access
- Students have submitted one or more applications through the student portal

## Postconditions (Success Guarantee)
- Applications have been reviewed, approved, or denied with documented rationale
- Students have been notified of decisions and next steps
- Audit-ready records exist for every application action
- Pipeline data is current in dashboards and available for reporting

## Main Success Scenario

1. Administrator logs into Via Global and views the Home Dashboard showing the Activity Feed with pending applications, upcoming deadlines, and traveler pipeline metrics
2. System displays counts of interested travelers, applying travelers, pre-departure travelers, and on-site travelers across all active programs
3. Administrator navigates to the application queue and filters by program, term, status, or reviewer assignment
4. Administrator selects a batch of applications for review and uses batch actions to advance, request additional materials, or assign to specific reviewers
5. System routes applications to assigned reviewers/approvers based on configured workflow rules
6. Reviewer evaluates individual applications, checking submitted forms, documents, and student profiles against program requirements
7. Reviewer approves, conditionally approves, or denies each application with notes captured in the threaded message center
8. System automatically triggers status change notifications to students via email, advancing approved students to the next pipeline stage
9. System updates the Activity Feed and dashboard metrics in real time
10. Administrator exports pipeline and yield data for leadership reporting

## Extensions

**4a. Administrator needs to create a new application template:**
  1. Administrator opens the drag-and-drop form builder
  2. Administrator adds fields, document upload requirements, and conditional sections
  3. System saves the template for attachment to programs

**5a. Application requires multi-level approval:**
  1. System routes to the first-level reviewer based on workflow rules
  2. After first-level approval, system automatically routes to the next approver
  3. Each approval is logged in the audit trail

**7a. Reviewer needs additional information from the student:**
  1. Reviewer sends a message through the threaded message center attached to the application
  2. System notifies the student and marks the application as "Awaiting Student Response"
  3. Student responds through their portal; application returns to the reviewer's queue

**8a. Automated workflow triggers pre-departure requirements:**
  1. Upon approval, system automatically assigns pre-departure checklists, forms, and deadline reminders
  2. System monitors completion and sends escalations for missing items

## Special Requirements
- All application actions must be captured in an audit trail with timestamps and user attribution
- Form builder must support drag-and-drop configuration without technical skills
- Batch actions must handle at least 100 records simultaneously
- Open Doors-compatible data exports must be available

## Technology & Data Variations
- Student data may be pre-populated from SIS integration (Banner, PeopleSoft, Workday)
- Applications may be submitted from mobile or desktop devices
- Notifications are sent via email; threaded messages are accessible in-platform

## Mockups
- [Admin Dashboard](mockups/admin-dashboard.html) — The administrator home dashboard with Activity Feed and pipeline metrics
- [Application Review](mockups/application-review.html) — The application review queue with batch actions and individual review

## Screenshots
- [Via Global Hero](screenshots/via-global-hero.png) — Via Global product page showing the platform overview
