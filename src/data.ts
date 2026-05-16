import { ProjectData } from "./types";

export const projectData: ProjectData = {
  title: "Goa MarketConnect",
  university: "Partido State University",
  teamMembers: [
    {
      id: "1",
      name: "Arian Jane Agdoro",
      role: "Lead Developer, UI/UX Designer",
      bio: "Focuses on user interface patterns and cognitive walkthroughs.",
      imageUrl: "/arian.jpeg",
      workbookUrl:
        "https://drive.google.com/drive/folders/1Wa1O5hxyx0YIfK_1h2UeICiBmvKV11yr?usp=drive_link",
    },
    {
      id: "2",
      name: "Joseph Piloneo",
      role: "UI Designer",
      bio: "Specializes in visual accessibility and responsive layouts.",
      imageUrl: "/joseph.jpeg",
      workbookUrl:
        "https://drive.google.com/drive/folders/1vxGO4Rjc8Zmlj9cPp-9L85il3w_-1q6c?usp=drive_link",
    },
    {
      id: "3",
      name: "John Rey Lovete",
      role: "UI Designer",
      bio: "Expert in heuristic analysis and qualitative data gathering.",
      imageUrl: "pres.jpeg",
      workbookUrl:
        "https://drive.google.com/drive/folders/1YHeSvG_pxMQUd8HB43H31INvkKrFppex?usp=drive_link",
    },
    {
      id: "4",
      name: "Revica Boñon",
      role: "UI Designer",
      bio: "Transforms usability testing metrics into actionable insights.",
      imageUrl: "revica.jpeg",
      workbookUrl:
        "https://drive.google.com/drive/folders/1uhIs3j1ha-lVMW9KKTzydyiQa21VBXro?usp=drive_link",
    },
    {
      id: "5",
      name: "John Lloyd Candelaria",
      role: "UI Designer",
      bio: "Transforms usability testing metrics into actionable insights.",
      imageUrl: "johnloyd.jpeg",
      workbookUrl: "#",
    },
  ],
  respondents: [
    {
      category: "Partido State University",
      count: 20,
      description:
        "Students and faculty members who participated in the usability evaluation sessions.",
    },
  ],
  heuristicResults: [
    {
      criterion: "H1: Visibility of System Status",
      score: 3.5,
      description: "Lack of post-action feedback noticed in some tasks.",
    },
    {
      criterion: "H2: Match between System and Real World",
      score: 4.0,
      description: "Terminology is generally clear.",
    },
    {
      criterion: "H3: User Control and Freedom",
      score: 2.7,
      description: "Navigation dead-ends identified as high severity.",
    },
    {
      criterion: "H4: Consistency and Standards",
      score: 3.0,
      description: "Inconsistent UI layout and transitions noted.",
    },
    {
      criterion: "H5: Error Prevention",
      score: 3.8,
      description: "Basic error handling is present.",
    },
    {
      criterion: "H6: Recognition over Recall",
      score: 2.8,
      description: "Perceived as complex for non-tech savvy users.",
    },
    {
      criterion: "H7: Flexibility & Efficiency of Use",
      score: 4.2,
      description: "Missing rider search bar is a minor inconvenience.",
    },
    {
      criterion: "H8: Aesthetic & Minimalist Design",
      score: 3.2,
      description: "Touch targets are too small for mobile use.",
    },
    {
      criterion: "H9: Help Users with Errors",
      score: 3.5,
      description: "Error messages are diagnostic but lack clear exits.",
    },
    {
      criterion: "H10: Help and Documentation",
      score: 3.0,
      description: "Documentation is present but not comprehensive.",
    },
  ],
  testingResults: [
    { task: "Create Account", completionRate: 92, avgTime: 45 },
    { task: "Search Product", completionRate: 88, avgTime: 30 },
    { task: "Place Order", completionRate: 75, avgTime: 120 },
    { task: "Track Delivery", completionRate: 82, avgTime: 65 },
    { task: "Contact Vendor", completionRate: 95, avgTime: 20 },
  ],
  issues: [
    {
      id: "FINDING-01",
      heuristic: "H3: User Control & Freedom",
      issue: "Navigation dead-ends & missing back button after ordering.",
      severity: "High",
      recommendation:
        "Add persistent back/home navigation after every key action.",
    },
    {
      id: "FINDING-02",
      heuristic: "H4: Consistency & Standards",
      issue: "Inconsistent UI layout & transitions across screens.",
      severity: "High",
      recommendation:
        "Standardize component styles (buttons, spacing, fonts) across all screens.",
    },
    {
      id: "FINDING-03",
      heuristic: "H6: Recognition over Recall",
      issue: "System perceived as complex for less tech-savvy users.",
      severity: "Medium",
      recommendation:
        "Simplify navigation labels; add contextual tooltips and onboarding.",
    },
    {
      id: "FINDING-04",
      heuristic: "H1: Visibility of System Status",
      issue: "Lack of post-action feedback or confirmation after checkout.",
      severity: "Medium",
      recommendation:
        "Implement confirmation dialogs/screens after all key actions.",
    },
    {
      id: "FINDING-05",
      heuristic: "H8: Aesthetic & Minimalist Design",
      issue: "Small touch targets on mobile making interaction difficult.",
      severity: "Medium",
      recommendation: "Increase minimum touch target size to at least 44x44px.",
    },
    {
      id: "FINDING-06",
      heuristic: "H7: Flexibility & Efficiency of Use",
      issue: "No search bar for riders to locate assigned orders.",
      severity: "Low",
      recommendation:
        "Add a search/filter bar on the rider's order management screen.",
    },
  ],
  researchInstruments: [
    {
      title: "SUS Questionnaire",
      description:
        "System Usability Scale used to quantify overall user satisfaction.",
      url: "https://drive.google.com/drive/folders/1XS_PjXTQUWRABsdO4a2_uqEaeGj3hA1G?usp=drive_link",
      type: "survey",
    },
  ],
  susScore: 62.13,
  susGrade: "Poor (D)",
  susInterpretation: "Below average, needs improvement",
  questionScores: [
    {
      id: "Q1",
      question: "I would like to use this system frequently",
      score: 3.85,
      isNegative: false,
    },
    {
      id: "Q2",
      question: "I found the system unnecessarily complex",
      score: 2.85,
      isNegative: true,
    },
    {
      id: "Q3",
      question: "I thought the system was easy to use",
      score: 3.7,
      isNegative: false,
    },
    {
      id: "Q4",
      question: "I think I would need support of a technical person",
      score: 2.85,
      isNegative: true,
    },
    {
      id: "Q5",
      question: "I found various functions well integrated",
      score: 3.75,
      isNegative: false,
    },
    {
      id: "Q6",
      question: "I thought there was too much inconsistency",
      score: 3.0,
      isNegative: true,
    },
    {
      id: "Q7",
      question: "Most people would learn to use this quickly",
      score: 3.95,
      isNegative: false,
    },
    {
      id: "Q8",
      question: "I found the system very cumbersome to use",
      score: 2.75,
      isNegative: true,
    },
    {
      id: "Q9",
      question: "I felt very confident using the system",
      score: 3.95,
      isNegative: false,
    },
    {
      id: "Q10",
      question: "I needed to learn a lot before getting started",
      score: 2.9,
      isNegative: true,
    },
  ],
};
