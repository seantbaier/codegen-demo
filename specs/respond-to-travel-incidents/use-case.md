# Use Case: Respond to Travel Incidents

**Scope**: Via Travel
**Level**: User goal
**Primary Actor**: Travel Risk Manager

## Stakeholders and Interests
- **Travel Risk Manager**: Wants to rapidly identify affected travelers, communicate with them, confirm their safety, and document the incident response
- **Traveler**: Wants to receive timely advisories and be able to confirm their safety quickly and easily
- **Institutional Leadership**: Wants assurance that the institution responded appropriately and has documentation for liability and compliance purposes
- **Risk/Compliance Officer**: Wants complete records of the incident response including timeline, communications, and traveler status confirmations

## Preconditions
- Travelers are registered in Via Travel with current itinerary and location data
- Risk intelligence feeds are active and delivering real-time advisories
- SafeCheck messaging templates and escalation playbooks are configured
- Travel Risk Manager has access to the Via Travel dashboard

## Postconditions (Success Guarantee)
- All affected travelers have been identified and contacted
- Traveler status (safe/needs assistance/unresponsive) has been confirmed and documented
- The incident response timeline is captured in audit-ready records
- Response metrics (time-to-contact, check-in rates) are available for post-incident review

## Main Success Scenario

1. Risk intelligence feed (International SOS, Riskline, or Crisis24) pushes a real-time advisory for a location where institutional travelers are present
2. System automatically pushes the advisory to affected travelers via SMS and email
3. Travel Risk Manager opens the Via Travel dashboard and views the live map filtered to the incident region
4. System displays an on-site roster showing all registered travelers in the affected area with their latest location and contact details
5. Travel Risk Manager initiates a SafeCheck by sending a batch SMS/email to all travelers in the region requesting a one-tap status confirmation
6. Travelers receive the SafeCheck message and respond with a single tap to confirm they are safe
7. System tracks responses in real-time, showing check-in rates, response times, and unresponsive travelers
8. Travel Risk Manager follows up with unresponsive travelers through two-way messaging or phone
9. System logs the entire incident response timeline — advisory, outreach, responses, and follow-ups — in audit-ready records
10. After the incident, Travel Risk Manager reviews response metrics (time-to-contact, check-in completion rate, outreach coverage)

## Extensions

**1a. Incident is identified by institutional staff (not automated feed):**
  1. Travel Risk Manager manually creates an incident alert
  2. Manager selects the affected region or group on the live map
  3. Workflow continues from step 5

**5a. Targeted communication to a specific cohort:**
  1. Manager filters travelers by program, department, or custom criteria rather than geography
  2. SafeCheck is sent to the filtered group only

**6a. Traveler does not respond to initial SafeCheck:**
  1. System flags the traveler as unresponsive after a configured timeout
  2. System sends an automatic follow-up SafeCheck
  3. If still unresponsive, system escalates to the Travel Risk Manager with the traveler's last known location and emergency contacts

**8a. Traveler reports needing assistance:**
  1. System flags the traveler's response and prioritizes them in the dashboard
  2. Travel Risk Manager initiates two-way messaging to assess the situation
  3. Manager coordinates with risk intelligence partner (e.g., International SOS) if evacuation or medical assistance is needed
  4. All communication is logged in the incident record

## Special Requirements
- SafeCheck messages must be deliverable worldwide via SMS and email
- Check-in confirmation must be achievable with a single tap on mobile devices
- Response tracking must update in real-time as travelers respond
- Incident records must be Clery Act-compliant with location history and communication logs
- System must support simultaneous management of multiple active incidents

## Technology & Data Variations
- Travelers receive alerts via SMS (worldwide delivery) and email
- SafeCheck responses can be submitted via SMS reply or web link
- Geolocation provides supplementary location data (opt-in)
- Read receipts track message delivery for email communications
- Templates and playbooks support different incident types (natural disaster, civil unrest, health emergency, etc.)

## Mockups
- [Incident Response Dashboard](mockups/incident-response.html) — The incident view with live map, SafeCheck status, and communication tools
