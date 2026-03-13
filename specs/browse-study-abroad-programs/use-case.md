# Use Case: Browse & Discover Study Abroad Programs

**Scope**: Via Global
**Level**: User goal
**Primary Actor**: Student / Traveler

## Stakeholders and Interests
- **Student**: Wants to find study abroad programs that match their academic goals, budget, and personal interests with minimal friction
- **Education Abroad Administrator**: Wants students to engage early and self-discover programs, reducing advising burden for basic program matching
- **Study Abroad Provider**: Wants their programs to be visible and attractive to prospective students across partner institutions

## Preconditions
- The institution has Via Global configured with an active program catalog
- Programs have been imported (from providers via Via Connects or created manually) and approved by the institution
- The student has access to the institution's Via portal (may or may not have created an account yet)

## Postconditions (Success Guarantee)
- The student has identified one or more programs of interest and saved or bookmarked them
- The student's interest data (quiz responses, favorites, browsing activity) is captured for follow-up by advisors
- The student may have begun a program application

## Main Success Scenario

1. Student navigates to the institution's Via-powered study abroad portal from any device
2. System presents a mobile-friendly program discovery interface with search, filters, and the advising quiz entry point
3. Student takes the advising quiz, entering their interests, academic goals, budget constraints, and travel preferences
4. System processes quiz responses and surfaces best-fit program recommendations based on the student's inputs and available filters
5. Student browses recommended programs and uses filters (destination, term, subject area, cost) to refine results
6. Student selects a program to view its interactive digital brochure with media, course details, costs, deadlines, FAQs, and testimonials
7. Student favorites or bookmarks one or more programs for later review
8. System captures the student's engagement data (quiz answers, views, favorites) in their profile for advisor visibility
9. Student optionally begins a program application directly from the brochure

## Extensions

**3a. Student skips the advising quiz:**
  1. Student browses the full program catalog using search and filters
  2. System still captures browsing behavior for advisor visibility

**4a. No programs match the student's quiz criteria:**
  1. System displays a message suggesting the student broaden their filters or contact an advisor
  2. System shows the closest available matches with explanations of which criteria were relaxed

**6a. Student views a provider-managed program (Via Connects):**
  1. Digital brochure content is sourced from the provider's Via Connects listing
  2. Content stays current automatically as the provider updates their listings

**9a. Student is not yet logged in when trying to apply:**
  1. System prompts the student to create an account or sign in via campus SSO
  2. After authentication, the student is returned to the application flow

## Special Requirements
- Program discovery interface must be fully responsive and mobile-first
- Page load times should support engagement — brochures should render quickly with media
- Advising quiz should be completable in under 3 minutes
- WCAG AA accessibility compliance for all student-facing interfaces

## Technology & Data Variations
- Students may access the portal from mobile phones, tablets, or desktops
- Program data may come from institutional staff (manual entry) or providers (Via Connects sync)
- Authentication may be via campus SSO (SAML 2.0) or direct Via account creation

## Mockups
- [Program Discovery](mockups/program-discovery.html) — The main program search and browse interface with advising quiz
- [Program Brochure](mockups/program-brochure.html) — An interactive digital brochure for a specific study abroad program

## Screenshots
- [Homepage Hero](../homepage-hero.png) — Via TRM homepage showing the platform overview
