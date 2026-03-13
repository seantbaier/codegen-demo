# Use Case: Manage Partner Agreements

**Scope**: Via Contracts
**Level**: User goal
**Primary Actor**: Education Abroad Administrator

## Stakeholders and Interests
- **Education Abroad Administrator**: Wants to track all partnership agreements, renewal dates, and exchange balances in one system without detective work across scattered folders
- **Legal/Compliance Team**: Wants structured approval workflows with audit trails for agreement review and execution
- **Institutional Leadership**: Wants visibility into the partnership portfolio health, exchange parity, and ROI
- **Partner Institution/Organization**: Wants clear terms, timely renewals, and balanced exchange participation

## Preconditions
- Via Contracts is configured with organizational roles, access controls, and approval workflows
- Partner organization profiles have been created with contact information and relationship history
- Exchange balance rules and parity thresholds are configured

## Postconditions (Success Guarantee)
- All partnership agreements are current, with complete terms, documents, and contact details
- Exchange balances are tracked and alerts fire when approaching caps or parity violations
- Renewal workflows complete before agreement expirations
- Audit-ready records exist for all agreement actions

## Main Success Scenario

1. Administrator logs into Via Contracts and views the active agreements dashboard showing portfolio status, upcoming expirations, and exchange balance summaries
2. Administrator creates a new partner agreement, entering terms, balance caps, parity rules, contacts, and attaching the signed document
3. System creates the agreement record with version tracking and assigns it the "Active" status
4. System begins automated exchange balance tracking, decrementing balances as students commit to programs (when integrated with Via Global)
5. As the agreement approaches its expiration date, system sends automated notifications at 90, 60, and 30 days to the agreement owner and stakeholders
6. Administrator initiates the renewal workflow, routing the agreement through configured review checkpoints (college review, legal review, leadership approval)
7. Each reviewer evaluates the agreement, exchange utilization, and partner performance before approving or requesting modifications
8. Upon final approval, administrator uploads the renewed agreement document and updates terms
9. System advances the agreement to "Active" status with a new expiration date, maintaining the full version history
10. Administrator reviews dashboards for portfolio KPIs — active agreements, exchange parity, and utilization trends

## Extensions

**4a. Exchange balance approaches cap:**
  1. System sends an alert to the agreement owner
  2. Administrator reviews the balance and either adjusts the cap, pauses enrollment, or contacts the partner to negotiate

**4b. Parity falls out of alignment:**
  1. System flags the imbalance with a dashboard indicator
  2. Administrator reviews send/receive ratios and contacts the partner or adjusts recruitment

**6a. Department proposes a new partnership:**
  1. Department user submits a partnership request through their role-based portal
  2. Request enters the approval workflow for central office review
  3. If approved, the administrator creates the formal agreement

**7a. Legal review identifies issues:**
  1. Legal reviewer adds comments and requests modifications
  2. System returns the agreement to the administrator with the review notes
  3. Administrator works with the partner to address issues and resubmits

## Special Requirements
- Access controls must support decentralized management (college, department, central office) while maintaining institution-wide visibility
- All agreement changes must be version-tracked with complete audit history
- Exchange balance tracking must integrate with Via Global student commitments
- Expiry notifications must be configurable by the agreement owner

## Technology & Data Variations
- Agreement documents are uploaded as attachments (PDF, Word)
- Exchange balances may be tracked manually or auto-decremented via Via Global integration
- Access is managed through role-based permissions aligned with institutional hierarchy

## Mockups
- [Agreements Dashboard](mockups/agreements-dashboard.html) — The partnership portfolio overview with active agreements, expirations, and exchange balances
