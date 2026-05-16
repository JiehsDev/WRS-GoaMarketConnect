import { motion } from "motion/react";
import { projectData } from "../data";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
} from "recharts";
import {
  AlertCircle,
  CheckCircle2,
  Lightbulb,
  Download,
  ExternalLink,
  Users,
} from "lucide-react";

export default function Results() {
  const {
    heuristicResults,
    testingResults,
    issues,
    susScore,
    susGrade,
    susInterpretation,
    questionScores,
  } = projectData;

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical":
        return "text-red-600 bg-red-100 border-red-200";
      case "High":
        return "text-orange-600 bg-orange-100 border-orange-200";
      case "Medium":
        return "text-amber-600 bg-amber-100 border-amber-200";
      default:
        return "text-blue-600 bg-blue-100 border-blue-200";
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-display font-bold text-gray-900 mb-6 tracking-tight">
          Evaluation Analysis
        </h1>
        <p className="text-gray-500 text-lg leading-relaxed">
          Quantitative metrics and qualitative findings gathered from the
          Usability Testing and Heuristic Evaluation phases of{" "}
          <span className="text-primary font-bold">Goa MarketConnect</span>.
        </p>
      </section>

      {/* SUS Score Card */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <div className="bg-primary/5 border-2 border-primary/10 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 sm:gap-16">
          <div className="relative group">
            <div className="w-48 h-48 rounded-full border-12 border-white shadow-2xl flex flex-col items-center justify-center bg-primary transform group-hover:scale-105 transition-transform duration-500">
              <span className="text-5xl font-display font-black text-white leading-none">
                {susScore}
              </span>
              <span className="text-xs font-bold text-orange-100 mt-1 uppercase tracking-widest">
                Score
              </span>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white px-6 py-3 rounded-2xl shadow-xl border border-orange-100 flex flex-col items-center">
              <span className="text-2xl font-black text-primary leading-none">
                {susGrade.split(" ")[1]}
              </span>
              <span className="text-[9px] font-bold text-gray-400 mt-1 uppercase tracking-tighter">
                Grade
              </span>
            </div>
          </div>
          <div className="flex-grow text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider mb-6">
              System Usability Scale Evaluation
            </div>
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4 tracking-tight">
              Overall User Satisfaction
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed max-w-xl">
              Goa MarketConnect achieved a SUS score of{" "}
              <strong>{susScore}</strong>, which translates to a{" "}
              <strong className="text-red-500">"{susGrade}"</strong> grade. This
              indicates that the prototype currently sits{" "}
              <strong className="text-gray-900 underline decoration-primary underline-offset-4">
                "{susInterpretation}"
              </strong>{" "}
              and requires focused iteration to meet industry standards
              (threshold: 68).
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="px-5 py-3 bg-white rounded-2xl border border-orange-100 flex items-center gap-3 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">
                  Needs Improvement
                </span>
              </div>
              <div className="px-5 py-3 bg-white rounded-2xl border border-orange-100 flex items-center gap-3 shadow-sm">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold text-gray-700">
                  20 Active Respondents
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SUS Question Breakdown Chart */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
            SUS Question Breakdown
          </h2>
          <p className="text-gray-500 text-sm">
            Mean scores for each of the 10 SUS questions. Note: Even-numbered
            questions are negative items where a lower score indicates fewer
            usability problems.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-[0_8px_40px_rgba(0,0,0,0.03)] border border-orange-50"
        >
          <div className="h-[500px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={questionScores}
                margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f1f5f9"
                />
                <XAxis
                  dataKey="id"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fontWeight: 700, fill: "#1e293b" }}
                />
                <YAxis
                  domain={[0, 5]}
                  ticks={[0, 1, 2, 3, 4, 5]}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#94a3b8" }}
                />
                <Tooltip
                  cursor={{ fill: "#FFF4E6", opacity: 0.5 }}
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-white p-4 rounded-2xl shadow-2xl border border-orange-100 max-w-[200px]">
                          <p className="text-[10px] font-black text-primary uppercase mb-1">
                            {data.id}
                          </p>
                          <p className="text-sm font-bold text-gray-900 leading-tight mb-2">
                            {data.question}
                          </p>
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-2 h-2 rounded-full ${data.isNegative ? "bg-red-500" : "bg-primary"}`}
                            />
                            <span className="text-lg font-black text-gray-900">
                              {data.score}
                            </span>
                          </div>
                          {data.isNegative && (
                            <p className="text-[9px] font-bold text-red-400 mt-1 uppercase">
                              Negative Item
                            </p>
                          )}
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="score" radius={[8, 8, 0, 0]} barSize={40}>
                  {questionScores.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.isNegative ? "#f87171" : "#F67A2D"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-8 mt-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-xs" />
              <span>Positive Questions (Higher is Better)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-400 rounded-xs" />
              <span>Negative Questions (Lower is Better)</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Visualizations Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Heuristic Scores Radar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-[2.5rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-orange-50"
        >
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              Nielsen's 10 Heuristics
            </h3>
            <p className="text-sm text-gray-500">
              Mean scores across all evaluators (1-5 range)
            </p>
          </div>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart
                cx="50%"
                cy="50%"
                outerRadius="80%"
                data={heuristicResults}
              >
                <PolarGrid stroke="#f1f5f9" />
                <PolarAngleAxis
                  dataKey="criterion"
                  tick={{ fontSize: 10, fill: "#64748b" }}
                />
                <PolarRadiusAxis angle={30} domain={[0, 5]} />
                <Radar
                  name="Usability Score"
                  dataKey="score"
                  stroke="#F67A2D"
                  fill="#F67A2D"
                  fillOpacity={0.4}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: "16px",
                    border: "none",
                    boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
                    fontSize: "12px",
                  }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Task Completion Bar Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white p-8 rounded-[2.5rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-orange-50"
        >
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              Task Completion Rates
            </h3>
            <p className="text-sm text-gray-500">
              Success rate (%) of users during structured testing
            </p>
          </div>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={testingResults}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal={true}
                  vertical={false}
                  stroke="#f1f5f9"
                />
                <XAxis type="number" domain={[0, 100]} hide />
                <YAxis
                  dataKey="task"
                  type="category"
                  tick={{ fontSize: 11, fill: "#64748b", fontWeight: 600 }}
                  width={120}
                />
                <Tooltip
                  cursor={{ fill: "#FFF4E6" }}
                  contentStyle={{
                    borderRadius: "16px",
                    border: "none",
                    boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
                    fontSize: "12px",
                  }}
                />
                <Bar
                  dataKey="completionRate"
                  radius={[0, 10, 10, 0]}
                  barSize={24}
                >
                  {testingResults.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.completionRate > 80 ? "#F67A2D" : "#fb923c"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </section>

      {/* Issues & Discussions */}
      <section className="space-y-12">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
            Identified Pain Points
          </h2>
          <p className="text-gray-500 leading-relaxed">
            While the prototype scored high on visual design (4.7/5), several
            structural bottlenecks were discovered during the "Place Order"
            task, which had the lowest completion rate (75%).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {issues.map((issue, index) => (
            <motion.div
              key={issue.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-bg-card p-8 rounded-[2rem] border border-orange-100 flex flex-col gap-6"
            >
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">
                    {issue.id}
                  </span>
                  <p className="text-xs font-bold text-primary">
                    {issue.heuristic}
                  </p>
                </div>
                <div
                  className={`px-3 py-1 rounded-full text-[10px] font-bold border ${getSeverityColor(issue.severity)}`}
                >
                  {issue.severity.toUpperCase()}
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <AlertCircle className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Observation</h4>
                  <p className="text-sm text-gray-600 leading-relaxed italic">
                    "{issue.issue}"
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Lightbulb className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    Recommendation
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {issue.recommendation}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
