
import { Experience, Skill, Publication, Education, Project } from './types';

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    period: '07/2023 — Present',
    role: 'Research Scholar & Teaching Assistant',
    company: 'Indian Institute of Technology Kharagpur',
    companyUrl: 'https://www.iitkgp.ac.in',
    department: 'Ranbir and Chitra Gupta School of Infrastructure Design and Management',
    points: [
      'Teaching Assistant for Multimodal Urban Transport Systems and Public Transport Planning.',
      'TA for NPTEL MOOC "Introduction To Multimodal Urban Transportation Systems (MUTS)".',
      'Organizing committee member for international conferences on sustainable infrastructure.',
      'Consultancy work on TUTEM and SAFAR projects involving VISSIM simulations.'
    ]
  },
  {
    id: '2',
    period: '01/2024 — 04/2024',
    role: 'Visiting Faculty',
    company: 'School of Planning and Architecture Vijayawada',
    companyUrl: 'https://www.spav.ac.in',
    points: [
      'Lectures on applications of remote sensing in environmental planning.',
      'Conducted hands-on GIS practicals in the Lab: Applications of Geo-informatics.'
    ]
  },
  {
    id: '3',
    period: '07/2022 — 07/2023',
    role: 'Assistant Professor',
    company: 'School of Planning and Architecture Vijayawada',
    companyUrl: 'https://www.spav.ac.in',
    department: 'Department of Planning',
    points: [
      'Theory courses: Public Transport Planning, Freight and Logistics, Regional Transport Planning.',
      'Guided Comprehensive Mobility Plan for Jodhpur and Transport Infrastructure Plan for Dehradun.',
      'Hands-on training in Geospatial Techniques (PTV VISSIM/VISUM).',
      'Consultancy: Polavaram Irrigation Project R&R Plan.'
    ]
  },
  {
    id: '4',
    period: '09/2021 — 07/2022',
    role: 'Assistant Professor',
    company: 'Jawaharlal Nehru Architecture and Fine Arts University',
    companyUrl: 'https://jnafau.ac.in',
    department: 'Department of Urban and Regional Planning',
    points: [
      'Taught Traffic and Transportation Planning and Environmental Studies.',
      'Studio: Area Traffic Plan for Banjara Hills, Hyderabad.',
      'PI for Logistics bundling for efficient freight transport research.'
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: 'PTV VISSIM', icon: 'fa-car', category: 'Microscopic Simulation' },
  { name: 'PTV VISUM', icon: 'fa-route', category: 'Demand Modelling' },
  { name: 'ArcGIS / QGIS', icon: 'fa-map', category: 'Geospatial' },
  { name: 'Python & R', icon: 'fa-code', category: 'Data Science' },
  { name: 'SPSS & AnyLogic', icon: 'fa-chart-bar', category: 'Statistics' },
  { name: 'LaTeX & Overleaf', icon: 'fa-file-alt', category: 'Reporting' },
  { name: 'Machine Learning', icon: 'fa-brain', category: 'AI' },
  { name: 'Freight & Logistics', icon: 'fa-truck', category: 'Economics' }
];

export const PUBLICATIONS: Publication[] = [
  { year: '2026', title: 'Multidimensional driving risk prediction: A machine learning approach with instrumented vehicle data', journal: '105th TRB Annual Meeting (Communicated)' },
  { year: '2025', title: 'Analyzing driver emotion and behavior during peak and off-peak traffic conditions', journal: '8th Conference of the Transportation Research Group (Accepted)' },
  { year: '2024', title: 'Potential of Alternative Technology for Urban Freight — A Case of Dehradun', journal: 'Springer — Sustainable Civil Infrastructures' },
  { year: '2023', title: 'Identifying the parameters influencing the adoption of electric intermediate public transport: Gwalior city', journal: 'IOP Conference Series' },
  { year: '2023', title: 'Influence of Regional Transport Accessibility on Development of Settlements: Visakhapatnam Region', journal: 'Planning Malaysia Journal' },
  { year: '2023', title: 'Streamlining Freight Transport Through Planning Interventions in Vijayawada City', journal: 'Springer Geography' }
];

export const EDUCATION: Education[] = [
  { period: '2023 — Present', degree: 'PhD in Transportation Systems', institution: 'IIT Kharagpur', institutionUrl: 'https://www.iitkgp.ac.in', status: 'Pursuing', color: 'blue' },
  { period: '2023 — 2025', degree: 'MA Economics', institution: 'IGNOU', color: 'purple' },
  { period: '2019 — 2021', degree: 'M.Planning (Transportation)', institution: 'SPA Vijayawada', institutionUrl: 'https://www.spav.ac.in', details: 'CGPA: 8.53', color: 'green' },
  { period: '2020 — 2022', degree: 'PG Dip Applied Statistics', institution: 'IGNOU', details: '69%', color: 'orange' },
  { period: '2015 — 2019', degree: 'B.Tech (Planning)', institution: 'JNAFAU Hyderabad', color: 'indigo' }
];

export const PROJECTS: Project[] = [
  { title: 'Charlapally Station Development', description: 'Decongestion through integrated infrastructure.', location: 'Hyderabad', gradient: 'from-slate-900 to-black' },
  { title: 'Mobility Plan Jodhpur', description: 'PTV VISUM travel demand modelling.', location: 'Consultancy', gradient: 'from-blue-600 to-indigo-600' },
  { title: 'Dehradun-Mussoorie Plan', description: 'Tourism and logistics flow optimization.', location: 'Hill Station Mobility', gradient: 'from-indigo-600 to-purple-600' },
  { title: 'Logistics Bundling', description: 'PI for freight optimization research.', location: 'Hyderabad', gradient: 'from-purple-600 to-pink-600' },
  { title: 'Polavaram R&R Plan', description: 'Community rehabilitation planning.', location: 'Consultancy', gradient: 'from-teal-600 to-cyan-600' },
  { title: 'TUTEM & SAFAR', description: 'Urban transit and AI-based road safety.', location: 'IIT Kharagpur', gradient: 'from-cyan-600 to-blue-600' }
];

export const LECTURES = [
  {
    title: "Geospatial Techniques for Transportation Planning",
    event: "Expert Lecture Series",
    date: "15–16 April 2024",
    platform: "YouTube",
    url: "https://www.youtube.com/live/FN30XdhXqsE",
    description: "In-depth training on PTV VISUM demand modeling and practical geospatial applications.",
    type: "Video"
  },
  {
    title: "PTV VISSIM Simulation Techniques",
    event: "Executive Development Programme (EDP)",
    date: "July 2023",
    url: "https://raw.githubusercontent.com/Sesi1397/Sesi1397.github.io/main/SesidharV.pdf",
    description: "Intersection design and microscopic simulation for urban planners and engineers.",
    type: "Document"
  },
  {
    title: "Remote Sensing in Environmental Planning",
    event: "School of Planning and Architecture Vijayawada",
    date: "Jan 2024",
    url: "#",
    description: "Lectures on GIS-based environmental assessment and spatial planning.",
    type: "Slides"
  }
];
