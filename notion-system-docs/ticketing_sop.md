# 📝 Ticket Creation SOP – Notion Demo Format

## 📌 Purpose
Standardize how support agents report issues to engineering in Notion.  
This improves reproducibility, debugging, and response time.

---

## 🔧 Required Fields
- **🎫 Ticket Title**: Clear and concise
- **🧪 Reproduction Steps**: Step-by-step instructions
- **💥 Error Screenshot(s)**: Upload or paste into Notion
- **🎯 Severity / Impact**: High / Medium / Low
- **🛠️ Assigned Developer**: To be assigned in triage

---

## 🔁 Workflow Statuses
1. **Open** – New ticket
2. **In Progress** – Engineer picked it up
3. **Waiting for UAT** – Fixed and awaiting customer verification
4. **Closed** – Verified and completed

---

## 🧠 Example Ticket Table

| 🎫 Ticket Title     | 🧪 Reproduction Steps                                                  | 🎯 Priority | 🔁 Status        | 🛠️ Assigned |
|--------------------|------------------------------------------------------------------------|------------|------------------|-------------|
| Login fails        | 1. Visit /login <br> 2. Input creds <br> 3. Click submit               | 🔴 High    | In Progress      | Alex        |
| PDF download fails | 1. Submit Form 998 <br> 2. Click "Download PDF" <br> 3. Error 404      | 🟡 Medium  | Open             | TBD         |
| Wrong field label  | 1. Open form <br> 2. Field says "County" instead of "City"             | 🟢 Low     | Waiting for UAT  | Bella       |

---

## 💬 Notes
- Tickets should be updated every 48 hours.
- Severity should be reviewed during daily standup.
- Attach SQL Profiler logs and Postman screenshots if relevant.
