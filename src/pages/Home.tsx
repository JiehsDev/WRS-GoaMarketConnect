import { motion } from "motion/react";
import { projectData } from "../data";
import { ArrowRight, Star, Quote, MapPin, Users, Play } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const { title, university, teamMembers } = projectData;

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                <Star className="w-3 h-3 fill-primary" />
                HCI Final Project
              </div>
              <h1 className="text-6xl sm:text-7xl font-display font-bold text-gray-900 leading-[1.1] mb-6">
                Evaluating <span className="text-primary">{title}</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg mb-10">
                A comprehensive usability evaluation of the digital marketplace
                bridge for Goa, Camarines Sur, benchmarked against Nielsen's 10
                Heuristics and real-world testing.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/results"
                  className="bg-primary text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-orange-200 transition-all hover:scale-105 hover:bg-orange-600"
                >
                  View Evaluation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <div className="flex items-center gap-3">
                  <button
                    className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white border border-orange-100 text-gray-700 font-bold transition-all hover:bg-orange-50 hover:border-primary/20"
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/file/d/1uxixiWXjJKwzY9_b2ZawCSDp-JisC8Q3/view?usp=sharing",
                        "_blank",
                      )
                    }
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Play className="text-primary w-4 h-4 fill-primary" />
                    </div>
                    Watch Demo Video
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              {/* Mobile Device Mockup */}
              <div className="relative w-[280px] h-[580px] bg-gray-900 rounded-[3rem] border-[8px] border-gray-800 shadow-2xl overflow-hidden shadow-orange-200/50">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-gray-800 rounded-b-3xl z-20 flex items-center justify-center">
                  <div className="w-12 h-1 bg-gray-700 rounded-full" />
                </div>

                {/* Screen Content */}
                <div className="relative h-full w-full bg-white overflow-hidden group">
                  <img
                    src="/hero-img.png"
                    alt="Goa Market Screenshot"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                    <div className="text-white">
                      <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-2">
                        Live Prototype
                      </p>
                      <h3 className="text-lg font-bold leading-tight">
                        Goa MarketConnect Mobile App
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-orange-400/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
            Research & Evaluation Team
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            The multi-disciplinary team behind the prototype creation, data
            gathering and interface evaluation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-bg-card p-6 rounded-3xl border border-orange-50 group hover:border-primary/20 hover:shadow-xl hover:shadow-orange-100 transition-all"
            >
              <div className="relative mb-6">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gray-200 flex items-center justify-center">
                  {member.imageUrl ? (
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  ) : (
                    <Users className="w-12 h-12 text-gray-400" />
                  )}
                </div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg">
                  <Quote className="w-5 h-5 fill-current" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-primary text-sm font-bold uppercase tracking-wider mb-4">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
