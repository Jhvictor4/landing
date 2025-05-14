import type { MetaFunction } from "@remix-run/cloudflare";
import { Navbar } from "~/components/ui/Navbar";
import { Footer } from "~/components/ui/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Projects - Vibranium Lads" },
    { name: "description", content: "Explore our latest projects and case studies." },
  ];
};

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col font-inter">
      <Navbar />

      {/* Projects Header */}
      <section className="px-6 md:px-12 pt-16 pb-16 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest work and see how we've helped our clients succeed through innovative solutions.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-200">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">AI-Powered Analytics</h3>
                <p className="text-gray-600 mb-4">A data visualization platform that leverages machine learning to provide predictive insights.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">React</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">TensorFlow</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">D3.js</span>
                </div>
                <a href="#" className="text-gray-800 font-medium hover:underline">View Project →</a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-200">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">E-Commerce Platform</h3>
                <p className="text-gray-600 mb-4">A fully-featured online shopping experience with advanced search and recommendation systems.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">Next.js</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">Node.js</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">MongoDB</span>
                </div>
                <a href="#" className="text-gray-800 font-medium hover:underline">View Project →</a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-200">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Smart Home App</h3>
                <p className="text-gray-600 mb-4">An IoT application for controlling and automating home devices with voice commands.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">Flutter</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">Firebase</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">IoT</span>
                </div>
                <a href="#" className="text-gray-800 font-medium hover:underline">View Project →</a>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-200">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Financial Dashboard</h3>
                <p className="text-gray-600 mb-4">A comprehensive financial management tool with real-time market data and portfolio tracking.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">Vue.js</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">GraphQL</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">Python</span>
                </div>
                <a href="#" className="text-gray-800 font-medium hover:underline">View Project →</a>
              </div>
            </div>

            {/* Project 5 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-200">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Health & Fitness App</h3>
                <p className="text-gray-600 mb-4">A mobile application for tracking workouts, nutrition, and health metrics with personalized coaching.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">React Native</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">Express</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">Machine Learning</span>
                </div>
                <a href="#" className="text-gray-800 font-medium hover:underline">View Project →</a>
              </div>
            </div>

            {/* Project 6 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-200">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Educational Platform</h3>
                <p className="text-gray-600 mb-4">An interactive learning platform with video courses, quizzes, and progress tracking for students.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">Angular</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">Django</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">WebRTC</span>
                </div>
                <a href="#" className="text-gray-800 font-medium hover:underline">View Project →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-12 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Have a project in mind?</h2>
          <p className="text-xl mb-8 opacity-90">Let's discuss how we can bring your vision to life.</p>
          <a
            href="/contact"
            className="px-8 py-3 rounded-md bg-white text-gray-900 font-semibold text-lg hover:bg-opacity-90 transition-all shadow-md inline-block"
          >
            Let's Talk
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
