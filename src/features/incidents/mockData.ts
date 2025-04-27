import { Incident } from '../../types';

export const MOCK_INCIDENTS: Incident[] = [
  {
    id: 1,
    title: "Biased Recommendation Algorithm",
    description: "Algorithm consistently favored certain demographics in product recommendations, leading to unequal exposure of opportunities across user groups. The bias was traced to imbalanced training data that overrepresented specific user segments.",
    severity: "Medium",
    reported_at: "2025-03-15T10:00:00Z"
  },
  {
    id: 2,
    title: "LLM Hallucination in Critical Info",
    description: "LLM provided incorrect safety procedure information when asked about emergency protocols. The model confidently presented fabricated steps that could have led to physical harm if followed. This raises concerns about AI reliability in safety-critical contexts.",
    severity: "High",
    reported_at: "2025-04-01T14:30:00Z"
  },
  {
    id: 3,
    title: "Minor Data Leak via Chatbot",
    description: "Chatbot inadvertently exposed non-sensitive user metadata during standard interactions. The leak was limited to usage statistics and did not include personally identifiable information. The issue was patched within 24 hours of discovery.",
    severity: "Low",
    reported_at: "2025-03-20T09:15:00Z"
  },
];
