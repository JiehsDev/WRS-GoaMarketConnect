import { motion } from "motion/react";
import { projectData } from "../data";
import { Link } from "react-router-dom";
import {
  ClipboardCheck,
  Users,
  FileText,
  Camera,
  Link as LinkIcon,
  Download,
  Star,
  ExternalLink,
} from "lucide-react";

export default function DataGathering() {
  const { respondents, researchInstruments } = projectData;

  const getInstrumentIcon = (type: string) => {
    switch (type) {
      case "workbook":
        return <ClipboardCheck className="w-6 h-6" />;
      case "survey":
        return <Star className="w-6 h-6" />;
      default:
        return <FileText className="w-6 h-6" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32">
      {/* Consent Section */}
      <section className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <ClipboardCheck className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-display font-bold text-gray-900 tracking-tight">
              Ethical Data Gathering
            </h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Participation was strictly voluntary. Before each session,
            respondents were oriented about the purpose of the study and signed
            a <strong>Consent Form</strong> ensuring anonymity and responsible
            handling of their feedback.
          </p>

          <Link
            to="https://drive.google.com/drive/folders/1XS_PjXTQUWRABsdO4a2_uqEaeGj3hA1G?usp=drive_link" // Put your redirect link or download URL here
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-bg-card p-6 rounded-3xl border border-orange-100 flex items-center justify-between group hover:border-primary transition-colors max-w-md mx-auto text-decoration-none"
          >
            <div className="flex items-center gap-4 text-left">
              <div className="p-3 bg-white rounded-xl shadow-sm">
                <FileText className="text-primary w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">
                  Consent Form Template
                </p>
                <p className="text-xs text-gray-500">PDF Document • 1.2 MB</p>
              </div>
            </div>
            <Download className="text-gray-400 group-hover:text-primary transition-colors" />
          </Link>
        </motion.div>
      </section>

      {/* Respondent Summary */}
      <section>
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="max-w-xl">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Users className="w-6 h-6" />
              </div>
              Target Respondents
            </h2>
            <p className="text-gray-500">
              User evaluation sessions were conducted exclusively with the
              academic community of Partido State University to gather focused
              feedback.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          {respondents.map((item, index) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-12 rounded-[2.5rem] shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b-8 border-orange-100 hover:border-primary transition-all max-w-2xl w-full text-center"
            >
              <div className="text-6xl font-display font-bold text-primary mb-4">
                {item.count}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {item.category}
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Member Heuristic Workbooks */}
      <section className="space-y-12">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-4 tracking-tight">
            Evaluator Workbooks
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Access the individual heuristic evaluation workbooks for each team
            member to see detailed scoring and specific feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {projectData.teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-5 rounded-2xl border border-orange-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-orange-50 text-[10px] font-bold text-primary uppercase tracking-wider mb-3">
                  Heuristic Workbook
                </div>
                <h4 className="text-sm font-bold text-gray-900 mb-1 leading-tight">
                  {member.name}
                </h4>
                <p className="text-[11px] text-gray-500 mb-4 line-clamp-1">
                  {member.role}
                </p>
              </div>
              <a
                href={member.workbookUrl || "#"}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2 bg-bg-card hover:bg-orange-100 text-primary text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-colors border border-orange-50"
              >
                View Workbook
                <ExternalLink className="w-3 h-3" />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Survey Instruments */}
      <section className="bg-bg-card -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Methodology & Instruments
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Our evaluation used a combination of inspection methods (Heuristic
              Evaluation) and empirical methods (Usability Testing).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-12 max-w-4xl mx-auto">
            {researchInstruments.map((inst, index) => (
              <motion.a
                key={inst.title}
                href={inst.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center p-10 bg-white/50 rounded-[2.5rem] border border-white shadow-sm hover:shadow-xl hover:bg-white hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="w-20 h-20 rounded-3xl bg-white shadow-lg flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                  {getInstrumentIcon(inst.type)}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                  {inst.title}
                </h3>
                <p className="text-gray-500 leading-relaxed mb-6">
                  {inst.description}
                </p>
                <div className="mt-auto inline-flex items-center gap-2 text-primary font-bold text-sm">
                  View Document
                  <ExternalLink className="w-4 h-4" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Gallery */}
      <section>
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-display font-bold text-gray-900 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <Camera className="w-6 h-6" />
            </div>
            Testing Documentation
          </h2>
          <button className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
            Full Archive
            <LinkIcon className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "/ss/ss1.jpg",
            "/ss/ss2.jpg",
            "/ss/ss3.jpg",
            "/ss/ss4.jpg",
            "/ss/ss5.jpg",
            "/ss/ss6.jpg",
            "/ss/ss7.jpg",
          ].map((url, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`aspect-square rounded-[2rem] overflow-hidden group border-4 border-white shadow-lg ${i % 2 === 0 ? "rotate-2" : "-rotate-2"}`}
            >
              <img
                src={url}
                alt={`Documentation ${i}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
