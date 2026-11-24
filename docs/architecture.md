# Architecture 

## Database Schema

This project specifically use PostgreSQL with Drizzle ORM. The database schema is described by this ERD below:

```mermaid
erDiagram 
    direction LR
    users ||--o{ applications : makes
    users ||--o{ recruitments : creates
    users ||--o{ notifications : receives
    users ||--o| profiles : has
    users {
        int id PK "Generated as identity"
        text username UK
        varchar(320) email UK
        text password_hash
        timestamptz created_at
        timestamptz updated_at
    }

    profiles {
        int user_id PK, FK
        text full_name
        text? profile_picture_uri
        text? bio
        varchar(25)? phone_number 
        text[] skills "Default []"
        jsonb social_links "Default {}"
        boolean is_open_to_team "Default false"
        timestamptz updated_at
    }

    applications {
        int id PK
        int applicant_id FK "UK with recruitment_id"
        int recruitment_id FK "UK with applicant_id"
        text resume_uri
        text? note
        text applied_role
        application_status status "PENDING, ACCEPTED, REJECTED"
        timestamptz created_at
        timestamptz updated_at
    }

    recruitments ||--o{ applications : has
    recruitments {
        int id PK
        int creator_id FK
        text name
        text description
        recruitment_status status "OPEN, CLOSED"
        text[] tags "Default []"
        text[] required_roles "Default []"
        timestamptz created_at
        timestamptz updated_at
    }

    notifications {
        int id PK
        int user_id FK
        notification_event_type event_type 
        "NEW_APPLICATION, 
        APPLICATION_STATUS_UPDATED"
        jsonb payload
        boolean is_read "Default false"
        timestamptz? email_sent_at
        timestamptz created_at
    }
```

