# Use Case: Manage International Student Compliance

**Scope**: Via International
**Level**: User goal
**Primary Actor**: ISSS Administrator

## Stakeholders and Interests
- **ISSS Administrator**: Wants to process visa requests accurately, maintain SEVIS compliance, and reduce manual data entry while protecting student status
- **International Student/Scholar**: Wants clear guidance on visa requirements, timely document issuance, and a portal to track their compliance status
- **Campus HR/Departments**: Want role-based access to submit requests and view records for international employees and scholars in their units
- **Institutional Leadership**: Wants assurance that the institution maintains SEVIS certification and minimizes compliance risk

## Preconditions
- Via International is configured with institutional SEVIS credentials and integration settings
- ISSS staff have accounts with appropriate roles and case assignments
- International students and scholars are loaded into the system (via SIS integration or manual entry)

## Postconditions (Success Guarantee)
- Visa requests are processed and SEVIS records updated accurately
- I-20s or DS-2019s are issued and securely delivered to students/scholars
- Audit trails document every compliance action
- SEVIS reconciliation shows no discrepancies between Via and SEVIS records

## Main Success Scenario

1. ISSS Administrator logs into Via International and views the compliance dashboard showing pending requests, approaching deadlines, and SEVIS reconciliation status
2. System displays auto-assigned cases based on configured conditional logic (visa type, nationality, advisor specialization)
3. Administrator selects a batch of pending requests (e.g., OPT applications, program extensions, change of status)
4. Administrator reviews each request using the student's profile, compliance checklist, and submitted documents
5. System validates the request against SEVIS requirements, flagging errors or missing information before submission
6. Administrator processes the request and initiates SEVIS reporting (RTI for individual actions or Batch for bulk processing)
7. System submits to SEVIS and captures the response, updating the student's record with the outcome
8. System generates the I-20 or DS-2019 and makes it available for secure e-delivery to the student
9. Student receives notification and accesses the document through their mobile-friendly portal
10. Administrator reviews SEVIS reconciliation reports to confirm all records are in sync

## Extensions

**3a. Campus partner (HR/department) submits a request on behalf of a scholar:**
  1. Campus partner logs in with their role-based dashboard
  2. Partner submits the request with required information
  3. System routes to the appropriate ISSS advisor for review

**5a. SEVIS validation identifies an error:**
  1. System displays the specific validation failure with guidance on how to correct it
  2. Administrator corrects the data and re-validates before submission
  3. System logs the correction in the audit trail

**6a. Batch SEVIS processing:**
  1. Administrator selects multiple records for batch submission
  2. System validates all records, flagging any that fail validation
  3. Administrator resolves flagged issues and submits the clean batch
  4. System processes the batch and captures individual outcomes

**7a. SEVIS rejects the submission:**
  1. System captures the rejection reason from SEVIS
  2. Administrator reviews the rejection, corrects the issue, and resubmits
  3. All attempts are logged in the audit trail

## Special Requirements
- SEVIS integration must support both RTI and Batch reporting for F, M (coming soon), and J categories
- All compliance actions must be audit-ready with complete change history
- Student portal must support secure e-delivery of I-20s and DS-2019s
- Platform must maintain SOC 2 Type II compliance for handling sensitive visa data
- Reconciliation reports must identify discrepancies between Via and SEVIS records

## Technology & Data Variations
- Student data may come from SIS integration or manual entry
- SEVIS communication uses government-standard RTI and Batch protocols
- Students access documents through web portal; notifications via email
- Campus partners access via role-based dashboards with limited scope

## Mockups
- [ISSS Dashboard](mockups/isss-dashboard.html) — The ISSS administrator dashboard with compliance overview and pending requests
- [Student Compliance Portal](mockups/student-compliance-portal.html) — The international student's view of their compliance status and documents

## Screenshots
- [Via International Hero](screenshots/via-international-hero.png) — Via International product page showing the platform overview
