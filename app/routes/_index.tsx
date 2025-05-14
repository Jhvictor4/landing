import type { MetaFunction } from "@remix-run/cloudflare";
import { Navbar } from "~/components/ui/Navbar";
import { Footer } from "~/components/ui/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Vibranium Lads - Vibe Experts" },
    { name: "description", content: "Building, shipping and conducting experiments, exposures, and expressions." },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col font-inter">
      <Navbar />

      {/* Hero Section */}
      <section className="px-6 md:px-12 pt-16 pb-24 flex-1 flex flex-col items-center justify-center text-center bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Vibranium: Vibe Experts
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            We are an organization that keeps building, shipping and conducting experiments, exposures, and expressions.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="#learn-more"
              className="px-8 py-3 rounded-md bg-gray-800 text-white font-semibold text-lg hover:bg-black transition-all shadow-md"
            >
              Learn More
            </a>
            <a
              href="/contact"
              className="px-8 py-3 rounded-md border-2 border-gray-800 text-gray-800 font-semibold text-lg hover:bg-gray-800 hover:text-white transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="learn-more" className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-6 bg-gray-100 rounded-lg hover:shadow-md transition-all border border-gray-200">
              <div className="w-12 h-12 bg-gray-800 text-white flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="20" x2="12" y2="10"></line>
                  <line x1="18" y1="20" x2="18" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="16"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Building</h3>
              <p className="text-gray-600">We craft digital solutions with precision and expertise, turning ideas into robust, scalable realities.</p>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg hover:shadow-md transition-all border border-gray-200">
              <div className="w-12 h-12 bg-gray-800 text-white flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8a6 6 0 0 0-6-6"></path>
                  <path d="M6 8a6 6 0 0 1 6-6"></path>
                  <path d="M22 22H2"></path>
                  <path d="M12 2v20"></path>
                  <path d="M12 14l2-2l-2-2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Shipping</h3>
              <p className="text-gray-600">We deliver with confidence, ensuring our technology reaches your audience effectively and efficiently.</p>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg hover:shadow-md transition-all border border-gray-200">
              <div className="w-12 h-12 bg-gray-800 text-white flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 2a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H5Z"></path>
                  <path d="M8 6h8"></path>
                  <path d="M8 10h8"></path>
                  <path d="M8 14h4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Experimenting</h3>
              <p className="text-gray-600">We push boundaries, testing new ideas and approaches to discover innovative solutions for complex challenges.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">Our Experts</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center border border-gray-200">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900">Tech Guru</h3>
              <p className="text-gray-500 mb-4">Computer Science Expert</p>
              <p className="text-gray-600">Specializing in advanced algorithms and system architecture.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center border border-gray-200">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900">Design Maven</h3>
              <p className="text-gray-500 mb-4">UX/UI Specialist</p>
              <p className="text-gray-600">Creating intuitive and beautiful digital experiences.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center border border-gray-200">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900">Code Wizard</h3>
              <p className="text-gray-500 mb-4">Full-Stack Developer</p>
              <p className="text-gray-600">Building robust applications with cutting-edge technologies.</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-12 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to collaborate?</h2>
          <p className="text-xl mb-8 opacity-90">Let's build something amazing together.</p>
          <a
            href="/contact"
            className="px-8 py-3 rounded-md bg-white text-gray-900 font-semibold text-lg hover:bg-opacity-90 transition-all shadow-md inline-block"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
