-- Simulated SQL log during error reproduction
SELECT * FROM form_submissions WHERE user_id = '1234' AND form_id = 'gov-889'
-- Error: Foreign Key constraint fails on 'department_id'
-- Timestamp: 2025-06-18 14:45:12
