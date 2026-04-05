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
        "role": "Cloud & DevOps Engineer | EY",
        "summary": "Building scalable cloud-native applications on Microsoft Azure. Passionate about containers, Kubernetes, and CI/CD pipelines.",
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
            "title": "Portfolio Site",
            "tech": "React + FastAPI",
            "description": "A cloud-native portfolio deployed on Azure Kubernetes Service with full CI/CD.",
        },
        {
            "id": 2,
            "title": "CI/CD Pipeline",
            "tech": "GitHub Actions + Azure",
            "description": "Automated build, test, and deploy pipeline pushing containers to ACR and AKS.",
        },
        {
            "id": 3,
            "title": "Container Registry",
            "tech": "Docker + ACR",
            "description": "Multi-stage Docker builds with images stored in Azure Container Registry.",
        },
        {
            "id": 4,
            "title": "Infrastructure as Code",
            "tech": "Terraform + Azure",
            "description": "Provisioning AKS clusters, networking, and monitoring with Terraform modules.",
        },
    ]


@app.get("/api/skills")
def get_skills():
    return [
        {"name": "Docker", "level": "Advanced", "category": "Containers"},
        {"name": "Kubernetes", "level": "Intermediate", "category": "Orchestration"},
        {"name": "GitHub Actions", "level": "Advanced", "category": "CI/CD"},
        {"name": "Azure AKS", "level": "Intermediate", "category": "Cloud"},
        {"name": "Azure ACR", "level": "Intermediate", "category": "Cloud"},
        {"name": "Terraform", "level": "Intermediate", "category": "IaC"},
        {"name": "Python", "level": "Advanced", "category": "Languages"},
        {"name": "React", "level": "Advanced", "category": "Frontend"},
    ]


@app.get("/api/experience")
def get_experience():
    return [
        {
            "role": "Cloud & DevOps Engineer",
            "company": "EY (Ernst & Young)",
            "period": "2023 - Present",
            "description": "Building cloud-native solutions on Azure, containerizing applications with Docker, and deploying to AKS with CI/CD pipelines.",
        },
    ]


@app.get("/api/certifications")
def get_certifications():
    return [
        {"name": "AZ-900: Azure Fundamentals", "issuer": "Microsoft", "year": "2024"},
        {"name": "AZ-104: Azure Administrator", "issuer": "Microsoft", "year": "2025"},
    ]


@app.get("/api/education")
def get_education():
    return [
        {
            "degree": "B.Tech Computer Science",
            "school": "University of Technology",
            "year": "2023",
        },
    ]


@app.get("/api/health")
def health():
    return {"status": "healthy"}