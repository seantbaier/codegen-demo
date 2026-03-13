# Use Case: Publish Provider Programs

**Scope**: Via Connects
**Level**: User goal
**Primary Actor**: Study Abroad Provider

## Stakeholders and Interests
- **Study Abroad Provider**: Wants to publish and maintain program listings across multiple institutional partners efficiently, with visibility into student engagement
- **Education Abroad Administrator**: Wants provider programs to be current, accurate, and seamlessly integrated into their institutional catalog without manual re-entry
- **Student**: Wants accurate, up-to-date program information when browsing and comparing study abroad options

## Preconditions
- The provider has a Via Connects account (Connects, Connects Plus, or Connects Growth tier)
- Partner institutions are configured in the Via network
- The provider has program content ready (descriptions, media, costs, dates, eligibility)

## Postconditions (Success Guarantee)
- Programs are published and visible across all approved partner institution catalogs
- Updates to program content sync automatically to all partner catalogs
- (Connects Growth) Engagement analytics are available showing views, favorites, and applications by campus

## Main Success Scenario

1. Provider logs into the Via Connects dashboard
2. Provider creates a new program listing with description, destination, dates, costs, eligibility, and media
3. System publishes the listing to the Via Program Network
4. Partner institutions see the new listing in their approval queue and can approve it for their catalog
5. Once approved, the program appears in the institution's student-facing program search and discovery interface
6. Provider updates program details (dates, costs, availability) from the Connects dashboard
7. System automatically syncs updates across all partner institution catalogs where the program is approved
8. (Connects Plus) Provider creates rich digital brochures with interactive media, curriculum details, housing info, and custom branding
9. (Connects Growth) Provider reviews engagement analytics showing views, favorites, and application data by campus, region, and trend

## Extensions

**4a. Institution does not approve the program:**
  1. The program remains in the provider's published catalog but is not visible to that institution's students
  2. Provider can contact the institution to discuss inclusion

**6a. Batch updates across multiple programs:**
  1. Provider uses batch editing to update dates, costs, or availability across multiple programs simultaneously
  2. System validates changes and syncs all at once

**6b. Program cloning for a new term:**
  1. Provider clones an existing program listing and modifies only the term-specific details
  2. System creates a new listing that goes through the partner approval process

**9a. Provider identifies underperforming programs (Connects Growth):**
  1. Provider reviews campus-level engagement data and identifies low-interest programs
  2. Provider adjusts brochure content, pricing, or marketing based on the analytics
  3. Provider uses student-level interest lists for targeted outreach

## Special Requirements
- Program updates must sync across partner catalogs in near real-time
- Brochure content must render on mobile and desktop with no app installation required
- Engagement analytics must be filterable by campus, region, program, and time period
- All provider content must be approval-aware — only shown where explicitly authorized by institutions

## Technology & Data Variations
- Program data is managed through the Via Connects web dashboard
- Brochure content may include images, video, and interactive elements
- Analytics data updates in real time as students interact with listings
- Data flows one-way from provider to institution; institutions cannot modify provider content

## Mockups
- [Provider Dashboard](mockups/provider-dashboard.html) — The provider's program management dashboard with listings and sync status
