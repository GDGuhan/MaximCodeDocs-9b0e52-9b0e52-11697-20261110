import { InternDetails } from '@/types';

export function generateCertificateId(): string {
  const year = new Date().getFullYear();
  const num = Math.floor(1000 + Math.random() * 9000);
  return `MC-${year}-${num}`;
}

export function getIssueDate(): string {
  return new Date().toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

export function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' });
}

const DOMAIN_SKILLS: Record<string, string[]> = {
  'Web Development': ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js', 'MongoDB'],
  'App Development': ['Flutter', 'Firebase', 'REST APIs', 'UI Development'],
  'Python': ['Python', 'Automation', 'Data Processing', 'Scripting'],
  'Digital Marketing': ['SEO', 'Social Media Marketing', 'Campaign Management', 'Content Strategy'],
  'AI / ML': ['Python', 'Machine Learning', 'Data Analytics', 'Model Development'],
  'Artificial Intelligence': ['Python', 'Machine Learning', 'Data Analytics', 'Model Development'],
  'Machine Learning': ['Python', 'ML Algorithms', 'Data Analytics', 'Model Development'],
  'Data Science': ['Python', 'Pandas', 'Data Visualization', 'Statistical Analysis'],
  'UI/UX Design': ['Figma', 'Wireframing', 'Prototyping', 'User Research'],
  'Cybersecurity': ['Network Security', 'Ethical Hacking', 'Penetration Testing', 'Security Audits'],
  'Cloud Computing': ['AWS', 'Azure', 'Docker', 'DevOps Practices'],
};

export function getSkillsForDomain(domain: string): string[] {
  const key = Object.keys(DOMAIN_SKILLS).find(
    (k) => k.toLowerCase() === domain.toLowerCase()
  );
  if (key) return DOMAIN_SKILLS[key];
  return ['Problem Solving', 'Team Collaboration', 'Communication', 'Technical Skills', 'Project Management'];
}

const DOMAIN_RESPONSIBILITIES: Record<string, string[]> = {
  'Web Development': [
    'Develop and maintain responsive web applications using modern frameworks',
    'Collaborate with the design team to implement UI/UX designs',
    'Write clean, maintainable, and well-documented code',
    'Participate in code reviews and contribute to team best practices',
    'Optimize application performance and ensure cross-browser compatibility',
    'Assist in integrating third-party APIs and services',
  ],
  'App Development': [
    'Design and develop cross-platform mobile applications using Flutter',
    'Integrate Firebase backend services for authentication and database',
    'Implement responsive UI components aligned with design specifications',
    'Test applications on multiple devices and fix reported bugs',
    'Collaborate with senior developers on architecture decisions',
    'Document technical processes and application features',
  ],
  'Digital Marketing': [
    'Plan and execute social media marketing campaigns across platforms',
    'Conduct keyword research and implement SEO best practices',
    'Create engaging content for blogs, social media, and email campaigns',
    'Monitor campaign performance using analytics tools',
    'Assist in developing digital marketing strategies',
    'Generate reports on campaign effectiveness and KPIs',
  ],
  'Python': [
    'Develop Python scripts for automation and data processing tasks',
    'Assist in building and testing backend services and APIs',
    'Collaborate on database design and query optimization',
    'Write unit tests to ensure code reliability and quality',
    'Contribute to open-source or internal Python projects',
    'Document code and maintain technical specifications',
  ],
  'AI / ML': [
    'Assist in developing and training machine learning models',
    'Perform data collection, cleaning, and preprocessing tasks',
    'Evaluate model performance and tune hyperparameters',
    'Research and implement state-of-the-art ML algorithms',
    'Create data visualizations and analytical reports',
    'Collaborate with the AI team on model deployment pipelines',
  ],
};

export function getResponsibilitiesForDomain(domain: string): string[] {
  const key = Object.keys(DOMAIN_RESPONSIBILITIES).find(
    (k) => k.toLowerCase() === domain.toLowerCase()
  );
  if (key) return DOMAIN_RESPONSIBILITIES[key];
  return [
    'Assist in the planning, development, and execution of assigned projects',
    'Collaborate with cross-functional teams to achieve project goals',
    'Conduct research and present findings to the team',
    'Learn and apply industry best practices in daily tasks',
    'Contribute innovative ideas and solutions to project challenges',
    'Document work processes and maintain accurate records',
  ];
}

export function getQrUrl(certId: string): string {
  return `https://maximcode.in/verify/${certId}`;
}

export function buildCertificateData(details: InternDetails) {
  const certId = generateCertificateId();
  return {
    ...details,
    certificateId: certId,
    issueDate: getIssueDate(),
    skills: getSkillsForDomain(details.domain),
    qrUrl: getQrUrl(certId),
  };
}
