import React from "react";
import { motion } from "framer-motion";
import collaborations from "../data/collaborations";
import "./Collaborations.css";

export default function Collaborations() {

  if (!collaborations.length) return null;

  // Maximum 3 companies in each row
  const companyRows = [];

  for (let i = 0; i < collaborations.length; i += 3) {
    companyRows.push(collaborations.slice(i, i + 3));
  }

  return (
    <section className="collaborations-section">

      <div className="container-custom">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="collaborations-heading"
        >

          <span className="collaborations-label">
            OUR NETWORK
          </span>

          <h2>
            Our <span>Collaborations</span>
          </h2>

          <p>
            Proud to collaborate with innovative brands
            and trusted organizations.
          </p>

        </motion.div>

        {/* Company Grid */}
        <div className="collaborations-grid">

          {companyRows.map((row, rowIndex) => (

            <div
              className="collaborations-row"
              key={rowIndex}
            >

              {row.map((company) => (

                <a
                  key={company.id}
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="collaboration-logo-card"
                  aria-label={`Visit ${company.name} website`}
                >

                  <div className="collaboration-logo-wrapper">

                    <img
                      src={company.logo}
                      alt={company.name}
                      loading="lazy"
                    />

                  </div>

                  <span className="collaboration-company-name">
                    {company.name}
                  </span>

                </a>

              ))}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}