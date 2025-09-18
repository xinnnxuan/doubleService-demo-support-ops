# 🧩 SQL Profiler SOP – Simulated Version

## Objective
Enable customer support agents to capture SQL-level trace logs when reproducing bugs.

## Step-by-Step
1. Reproduce the user issue (e.g. failed form submission)
2. Run the Profiler tool with filter:  
   `SELECT * FROM tickets WHERE status = 'open'`
3. Copy the captured query and paste into ticket under:  
   `Error Context → SQL Snapshot`
4. Provide a screenshot of the stack trace (if any)

## Why This Matters
Instead of engineers guessing the issue context, they now get:
- The raw query
- Execution parameters
- Timestamp of the error
