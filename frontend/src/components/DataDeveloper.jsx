import React from "react";

function DataDeveloper() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600">
          OTHER DATA OF DEVELOPER
        </h1>

        <p className="text-gray-600 mt-2">
          E-NOTLIFY COMPANY LTD - FULL STACK NI MR ALLI 💻
        </p>

        <p className="text-gray-600 mt-2">
          This page contains additional information about the developer,
          including skills, experience, and projects.
        </p>

        {/* SKILLS */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-3">Skills</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>PHP</li>
          </ul>
        </div>

        {/* EXPERIENCE */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-3">Experience</h2>
          <p className="text-gray-600">
            3 years of experience in full-stack development, working on
            various projects from small business websites to large-scale
            applications.
          </p>
        </div>

        {/* PROJECTS */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-3">Projects</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>E-commerce platform for local businesses</li>
            <li>Personal portfolio website</li>
            <li>Open-source JavaScript contributions</li>
          </ul>
        </div>

        {/* EDUCATION */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-3">Education</h2>
          <p className="text-gray-600">
            E-notlify Company & Groupe Scolaire Gihogwe Catholique / TSS,
            focused on software development and data structures.
          </p>
        </div>

        {/* CONTACT */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-3">Contact</h2>

          <p className="text-gray-700 font-semibold mb-2">Telephone:</p>
          <ol className="text-gray-600 mb-4">
            <li>
              <a href="tel:+250727717537">📞 +250 727 717 537</a>
            </li>
            <li>
              <a href="tel:+250787003827">📞 +250 787 003 827</a>
            </li>
          </ol>

          <div className="flex flex-wrap justify-center gap-4 text-blue-600">
            <a href="allianceniyomugabo@gmail.com">
              📧 Email
            </a>

            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              📘 Facebook
            </a>

            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              📸 Instagram
            </a>

            <a href="https://wa.me/250727717537" target="_blank" rel="noreferrer">
              📞 WhatsApp
            </a>
            <span className="text-gray-600 mt-2"   >
                <h3 className="">LOCATION : KIGALI-RWANDA-GATSATA-KARURUMA-GASHYUSHYA-ROARD5-HOUS657</h3>
            </span>
          </div>
    
        </div>
      </div>
    </div>
  );
}

export default DataDeveloper;