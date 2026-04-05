from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/profile")
def get_profile():
    return {
        "name": "Vikas Kanjarla",
        "role": "Associate Software Engineer | EY GDS",
        "summary": "Proficient Java Full Stack developer with strong skills in frontend, backend, cloud, automation, and analytics. Experienced in building end-to-end applications using Java FSE, Spring Boot, .NET, and React, delivering scalable backend services and modern, intuitive user interfaces.",
        "background": [
            "Joined Ernst & Young as a Young Associate Software Engineer in June 2025",
            "Bachelor's degree in Information Technology",
            "Proficient in Java Full Stack development with strong skills in frontend, backend, cloud, automation, and analytics",
            "Good understanding in Azure fundamentals and deployment of applications on Microsoft Azure",
        ],
    }


@app.get("/api/services")
def get_services():
    return [
        {"id": "projects", "label": "Projects", "icon": "projects", "color": "#0078d4"},
        {"id": "skills", "label": "Skills", "icon": "skills", "color": "#ffb900"},
        {"id": "experience", "label": "Experience", "icon": "experience", "color": "#5c2d91"},
        {"id": "resume", "label": "Resume", "icon": "resume", "color": "#e74856"},
        {"id": "certifications", "label": "Certifications", "icon": "certifications", "color": "#00a4ef"},
        {"id": "education", "label": "Education", "icon": "education", "color": "#7fba00"},
        {"id": "contact", "label": "Contact", "icon": "contact", "color": "#f25022"},
        {"id": "github", "label": "GitHub", "icon": "github", "color": "#24292e"},
    ]


@app.get("/api/resources")
def get_resources():
    return [
        {
            "name": "Portfolio Site",
            "type": "React + FastAPI",
            "status": "Running",
            "lastViewed": "Today",
        },
        {
            "name": "CI/CD Pipeline",
            "type": "GitHub Actions",
            "status": "Active",
            "lastViewed": "Today",
        },
        {
            "name": "Container Registry",
            "type": "Docker + ACR",
            "status": "Running",
            "lastViewed": "Yesterday",
        },
        {
            "name": "AKS Cluster",
            "type": "Kubernetes",
            "status": "Running",
            "lastViewed": "Yesterday",
        },
    ]


@app.get("/api/projects")
def get_projects():
    return [
        {
            "id": 1,
            "title": "GreenIT",
            "tech": "Java FSE, Spring Boot, React, Azure OpenAI",
            "description": "Static code analysis platform that scans repositories to estimate algorithmic complexity and compute a carbon footprint score. Integrated Azure OpenAI for performance and sustainability recommendations.",
        },
        {
            "id": 2,
            "title": "Kubementor",
            "tech": "React, Tailwind CSS, MSAL, Azure AD SSO",
            "description": "Contributed to the UI/UX by building responsive interfaces using React and Tailwind CSS. Implemented Single Sign-On (SSO) using Microsoft Authentication Library (MSAL) with Azure Active Directory.",
        },
        {
            "id": 3,
            "title": "Bike Service Center Automation",
            "tech": "Java, Spring Boot, JPA, React, JWT",
            "description": "Full-stack bike service automation platform with modules for scheduling, service tracking, billing, and role-based authorization to manage customer, mechanic, and admin workflows.",
        },
        {
            "id": 4,
            "title": "Decentralized Land Registry",
            "tech": "Solidity, Ganache, Truffle Suite, React, Web3.js",
            "description": "Built a decentralized land registry using blockchain. Designed smart contracts for secure property validation and integrated Web3.js for on-chain interactions.",
        },
        {
            "id": 5,
            "title": "Tripeno - Trip Expense Manager",
            "tech": "Spring Boot, React, OpenWeatherMap API",
            "description": "Travel and expense management application featuring expense tracking, itinerary handling, and user-centric dashboards with real-time weather data integration.",
        },
    ]


@app.get("/api/skills")
def get_skills():
    return [
        {"name": "Java (FSE)", "level": "Advanced", "category": "Languages"},
        {"name": "C, C++, .NET", "level": "Intermediate", "category": "Languages"},
        {"name": "JavaScript", "level": "Advanced", "category": "Languages"},
        {"name": "Spring Boot", "level": "Advanced", "category": "Backend"},
        {"name": "JPA, REST APIs", "level": "Advanced", "category": "Backend"},
        {"name": "React JS", "level": "Advanced", "category": "Frontend"},
        {"name": "HTML, CSS, Tailwind", "level": "Advanced", "category": "Frontend"},
        {"name": "Docker", "level": "Intermediate", "category": "Containers"},
        {"name": "Kubernetes", "level": "Intermediate", "category": "Orchestration"},
        {"name": "GitHub Actions", "level": "Intermediate", "category": "CI/CD"},
        {"name": "Azure", "level": "Intermediate", "category": "Cloud"},
        {"name": "Terraform", "level": "Intermediate", "category": "IaC"},
        {"name": "MySQL, DBMS", "level": "Intermediate", "category": "Databases"},
        {"name": "Power BI", "level": "Intermediate", "category": "Data & Analytics"},
        {"name": "Blockchain / Solidity", "level": "Intermediate", "category": "Blockchain"},
        {"name": "Postman, Eclipse, VS Code", "level": "Advanced", "category": "Tools"},
    ]


@app.get("/api/experience")
def get_experience():
    return [
        {
            "role": "Associate Software Engineer",
            "company": "EY GDS (Ernst & Young)",
            "period": "June 2025 - Present",
            "description": "Developing end-to-end applications using Java FSE, Spring Boot, .NET, and React. Building scalable backend services, static code analysis systems, and workflow automation modules. Experienced in cloud provisioning with Terraform and Azure.",
        },
    ]


@app.get("/api/certifications")
def get_certifications():
    return [
        {"name": "AZ-104: Azure Administrator Associate", "issuer": "Microsoft", "year": "2025"},
        {"name": "Terraform Associate v003", "issuer": "HashiCorp", "year": "2025"},
        {"name": "GH-300: GitHub Copilot", "issuer": "GitHub", "year": "2025"},
    ]


@app.get("/api/education")
def get_education():
    return [
        {
            "degree": "Bachelor's in Information Technology",
            "school": "University",
            "year": "2025",
        },
    ]


@app.get("/api/health")
def health():
    return {"status": "healthy"}