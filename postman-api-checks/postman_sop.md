# 🧪 API Precheck SOP using Postman

## Objective
Test API health **before escalating to engineering**

## Steps
1. Open Postman → Use Collection: `GovForm Prechecks`
2. Run:
   - `GET /api/ping` → Should return 200 OK
   - `GET /api/user/verify` with sample token
3. If external API fails (e.g. 403, 503), stop escalation and contact external IT first.

## Goal
Avoid wasting engineering time on non-internal bugs
