# sqlModel and DB Tables
import uuid
from datetime import datetime
from typing import List, Optional
from enum import Enum
from sqlalchemy import Column, text, Index
from sqlalchemy.dialects.postgresql import UUID as PG_UUID
from sqlalchemy.dialects.postgresql import JSONB
from sqlmodel import Field, SQLModel, Relationship

#enums
class UserRole(str, Enum):
    candidate = "candidate"
    recruiter = "recruiter"
    admin = "admin"

class User(SQLModel, table=True):
    __tablename__ = "users"

    id: uuid.UUID = Field(
        default_factory=uuid.uuid4,
        sa_column=Column(PG_UUID(as_uuid=True), primary_key=True, server_default=("gen_random_uuid()"))
    )
    email: str = Field(unique=True, index=True, nullable=False)
    name: Optional[str] = None
    avatar_url: Optional[str] = None
    role: UserRole = Field(default=UserRole.candidate)
    is_active: bool = Field(default=True)
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    #relationship
    identities: List["AuthIdentity"] = Relationship(back_populates="user")
    profile: Optional["Profile"] = Relationship(back_populates="user")

class AuthIdentity(SQLModel, table=True):
    __tablename__ = "auth_identities"

    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
    user_id: uuid.UUID = Field(foreign_key="users.id", nullable=False)

    provider: str = Field(nullable=False) #local, google, github
    provider_user_id: Optional[str] = None
    password_hash: Optional[str] = None
    is_verified: bool = Field(default=True)
    created_at: datetime = Field(default_factory=datetime.utcnow)

    user: User = Relationship(back_populates="identities")

    __table_args__ = (
        Index("auth_provider_idx", "provider", "provider_user_id"),
    )

class Profile(SQLModel, table=True):
    __tablename__ = "profiles"

    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
    user_id: uuid.UUID = Field(foreign_key="users.id", unique=True, nullable=False)

    resume_url: Optional[str] = None
    raw_text: Optional[str] = None

    skills: List[str] = Field(default=[], sa_column=Column(JSONB, server_default=text("'[]'::jsonb")))
    bio: Optional[str] = None

    user: User = Relationship(back_populates="profiles")

    __table_args__ = (
        Index("skills_gin_idx", "skills", postgresql_using="gin"),
    )

class ApplicationStatus(str, Enum):
    applied = "applied"
    interviewing = "interviewing"
    rejected = "rejected"
    offer = "offer"

class JobType(str, Enum):
    full_time = "full-time"
    part_time = "part-time"
    contract = "contract"
    internship = "internship"

class ExperienceLevel(str, Enum):
    entry = "entry"
    mid = "mid"
    senior = "senior"
    lead = "lead"

#jobs table
class Job(SQLModel, table=True):
    __tablename__ = "jobs"

    id: uuid.UUID = Field(
        default_factory=uuid.uuid4,
        sa_column=Column(PG_UUID(as_uuid=True), primary_key=True, server_default=("gen_random_uuid()"))
    )
    recruiter_id: uuid.UUID = Field(foreign_key="users.id", nullable=False)

    title: str = Field(nullable=False)
    description: str = Field(nullable=False)
    company_name: str = Field(nullable=False)
    location: str = Field(default="remote")

    job_type: JobType = Field(default=JobType.full_time)
    experience_level: ExperienceLevel = Field(default=ExperienceLevel.entry)

    # skill matching
    required_skills: List[str] = Field(default=[], sa_column=Column(JSONB, server_default=text("'[]'::jsonb")))

    salary_range: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    # relationship 
    applications: List["Application"] = Relationship(back_populates="job")

    __table_args__ = (
        Index("job_skills_gin_idx", "required_skills", postgresql_using="gin"),
        Index("job_recruiter_idx", "recruiter_id"),
    )

    # applications tables 
class Application(SQLModel, table=True):
    __tablename__ = "applications"

    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
    job_id: uuid.UUID = Field(foreign_key="jobs.id", nullable=False)
    candidate_id: uuid.UUID = Field(foreign_key="users.id", nullable=False)

    status: ApplicationStatus = Field(default=ApplicationStatus.applied)

    match_score: int = Field(default=0)
    cover_letter: Optional[str] = None
    applied_at: datetime = Field(default_factory=datetime.utcnow)

    job: Job = Relationship(back_populates="applications")

    __table_args__ = (
        Index("job_candidate_unique_idx", "job_id", "candidate_id", unique=True),
        Index("status_idx", "status"),
    )