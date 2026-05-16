export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  workbookUrl?: string;
}

export interface RespondentSummary {
  category: string;
  count: number;
  description: string;
}

export interface HeuristicScore {
  criterion: string;
  score: number; // 1-5 or 0-4
  description: string;
}

export interface TestingResult {
  task: string;
  completionRate: number; // Percentage
  avgTime: number; // Seconds
}

export interface IdentifiedIssue {
  id: string;
  heuristic: string;
  issue: string;
  severity: "Low" | "Medium" | "High" | "Critical";
  recommendation: string;
}

export interface ResearchInstrument {
  title: string;
  description: string;
  url: string;
  type: "workbook" | "survey" | "task-list";
}

export interface QuestionScore {
  id: string;
  question: string;
  score: number;
  isNegative: boolean;
}

export interface ProjectData {
  title: string;
  university: string;
  teamMembers: TeamMember[];
  respondents: RespondentSummary[];
  heuristicResults: HeuristicScore[];
  testingResults: TestingResult[];
  issues: IdentifiedIssue[];
  researchInstruments: ResearchInstrument[];
  susScore: number;
  susGrade: string;
  susInterpretation: string;
  questionScores: QuestionScore[];
}
