# Forge

> Transforming ideas into successful projects.

Forge is an AI-powered project planning and management platform designed to help student teams transform ideas into successful projects.

Student teams often struggle with unclear planning, poor task distribution, unrealistic project scopes, and inefficient project execution. Forge addresses these challenges by providing intelligent guidance throughout the project lifecycle, helping teams move efficiently from concept to completion.

## Features

###  Idea Validation
Analyze project ideas and evaluate their feasibility based on team size, timeline, and project requirements.

###  Role Assignment
Suggest team roles and responsibilities based on individual skills and expertise.

###  Scope Analysis
Identify potential scope creep and recommend a realistic MVP that can be completed within the given timeframe.

###  Task Management
Create, assign, and track project tasks through an intuitive project workspace.

###  Progress Tracking
Monitor project progress, milestones, and team productivity throughout development.

###  Pitch Assistant
Generate structured project summaries, problem statements, solution descriptions, and presentation outlines for final evaluations.

---

## Tech Stack

### Frontend
- React.js
- Tailwind CSS

### Backend
- FastAPI
- Python

### Database
- PostgreSQL

### AI Integration
- Groq API
- Llama 3
- DeepSeek

### Deployment
- Vercel
- Render

---

## Architecture

```text
React Frontend
       │
       ▼
   FastAPI API
       │
 ┌─────┼─────┐
 ▼           ▼
PostgreSQL   AI Services
 Database    (Groq)
```

---

## Core Modules

- User Management
- Project Workspace
- Idea Validator
- Role Assignment Engine
- Scope Analysis Engine
- Task & Progress Tracking
- Pitch Assistant

---

## Database Schema

### Users
- id
- name
- email
- password_hash
- created_at

### Projects
- id
- title
- description
- idea
- timeline_weeks
- status
- created_by
- created_at

### Project Members
- id
- project_id
- user_id
- skills
- assigned_role

### Tasks
- id
- project_id
- title
- description
- assigned_to
- status
- priority
- due_date

### AI Analyses
- id
- project_id
- analysis_type
- input_prompt
- result
- created_at

---

## Project Goal

Forge aims to become an intelligent project mentor that helps students plan better, collaborate effectively, and successfully complete projects by combining project management workflows with AI-powered guidance.

---

## Team

Built as part of Project Jam 2026.
