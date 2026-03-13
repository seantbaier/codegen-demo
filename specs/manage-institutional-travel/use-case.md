# Use Case: Manage Institutional Travel

**Scope**: Via Travel
**Level**: User goal
**Primary Actor**: Travel Risk Manager

## Stakeholders and Interests
- **Travel Risk Manager**: Wants centralized visibility into all institutional travel with efficient registration, approval workflows, and compliance reporting
- **Traveler (Student/Faculty/Staff)**: Wants a quick, mobile-friendly registration process and clear pre-departure requirements
- **Institutional Leadership**: Wants assurance that all institutional travel is tracked and duty-of-care obligations are met
- **Risk/Compliance Officer**: Wants Clery-compliant records and audit-ready documentation of travel oversight

## Preconditions
- Via Travel is configured with institutional travel policies, approval rules, and risk intelligence feeds
- Travel registration forms and pre-departure checklists are set up
- Risk intelligence partners (International SOS, Riskline, Crisis24) are integrated

## Postconditions (Success Guarantee)
- All institutional travel is registered with complete itinerary details
- Approval workflows have been completed for trips requiring authorization
- Pre-departure requirements are satisfied before travel begins
- Active travelers are visible on the live map with current location data
- Compliance records are audit-ready

## Main Success Scenario

1. Traveler (student, faculty, or staff) accesses the Via Travel registration portal from any device
2. Traveler enters trip details: destination(s), dates, purpose, flights, lodging, contacts, and activity details
3. System applies policy rules and required fields, validating data quality at intake
4. System checks destination risk profiles and triggers appropriate approval workflows based on risk level
5. Approver(s) receive notification and review the trip against institutional travel policies
6. Approver approves the trip (or requests modifications), advancing it to the pre-departure stage
7. System auto-assigns pre-departure checklists based on trip type, destination, and traveler role
8. Traveler completes pre-departure requirements (insurance verification, emergency contacts, travel advisories acknowledgment)
9. Upon departure, the traveler appears on the live map view with their registered itinerary
10. Travel Risk Manager monitors active travelers through dashboards showing who is where, filtered by program, destination, or date range

## Extensions

**2a. Group travel registration:**
  1. Group leader creates a group travel plan with shared itinerary
  2. Individual travelers are added to the group and can supplement with personal details
  3. System tracks the group as a unit while maintaining individual records

**2b. Proxy registration (faculty/staff assistant registers on behalf of traveler):**
  1. Proxy user is authorized by the traveler to register travel on their behalf
  2. Proxy completes registration using the traveler's profile
  3. System attributes the registration appropriately in audit records

**4a. Trip to high-risk destination triggers escalation:**
  1. System flags the destination based on risk intelligence data
  2. Additional approval levels are added to the workflow
  3. Risk-specific briefing materials are added to pre-departure requirements

**8a. Traveler fails to complete pre-departure requirements:**
  1. System sends automated reminders at configured intervals
  2. If deadline passes, system escalates to the Travel Risk Manager
  3. Manager can override, extend, or cancel the trip registration

**10a. Via Travel syncs with Via Global:**
  1. When a study abroad student commits to a program in Via Global, their travel is automatically registered in Via Travel
  2. Travel Risk Manager sees these travelers alongside all other institutional travel

## Special Requirements
- Registration must be completable in under 5 minutes on mobile devices
- No app installation required — all traveler interactions via web, SMS, and email
- Live map must update location data in near real-time
- Clery Act-compliant location history and stay details must be maintained
- SOC 2 Type II security for all traveler data

## Technology & Data Variations
- Travelers interact via mobile web browser, SMS (SafeCheck), and email
- Risk intelligence data comes from integrated partners (International SOS, Riskline, Crisis24)
- Geolocation is opt-in and privacy-aware
- Travel data can sync with Via Global for study abroad travelers

## Mockups
- [Travel Dashboard](mockups/travel-dashboard.html) — The travel risk manager's dashboard with live map and active traveler overview
- [Travel Registration](mockups/travel-registration.html) — The mobile-friendly travel registration form for solo and group trips

## Screenshots
- [Via Travel Hero](screenshots/via-travel-hero.png) — Via Travel product page showing the platform overview
