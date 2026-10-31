import React from "react";
import associatePartners from "../data/associatePartners";
import "./AssociatePartners.css";

const AssociatePartners = () => {

  // Automatically distribute partners into balanced rows.
  const createRows = (partners) => {
    const rows = [];
    const total = partners.length;

    if (total === 0) return rows;

    // Maximum 3 cards per row.
    const rowCount = Math.ceil(total / 3);

    const baseSize = Math.floor(total / rowCount);
    const remainder = total % rowCount;

    let index = 0;

    for (let i = 0; i < rowCount; i++) {
      const rowSize = baseSize + (i < remainder ? 1 : 0);

      rows.push(partners.slice(index, index + rowSize));

      index += rowSize;
    }

    return rows;
  };

  const partnerRows = createRows(associatePartners);

  if (!associatePartners.length) return null;

  return (
    <section className="associate-partners-section">

      <div className="associate-partners-container">

        {/* Section Heading */}
        <div className="associate-heading">

          <span className="associate-subtitle">
            OUR NETWORK
          </span>

          <h2>
            Introducing Our <span>Associate Partners</span>
          </h2>

          <p>
            Building meaningful connections and growing together
            through trusted partnerships.
          </p>

        </div>

        {/* Partner Cards */}
        <div className="associate-partners-grid">

          {partnerRows.map((row, rowIndex) => (

            <div
              className="associate-partners-row"
              key={rowIndex}
            >

              {row.map((partner) => (

                <div
                  className="associate-partner-card"
                  key={partner.id}
                >

                  <div className="associate-image-wrapper">

                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="associate-partner-image"
                      loading="lazy"
                    />

                    <div className="associate-image-overlay">
                      <span>Associate Partner</span>
                    </div>

                  </div>

                  <h3>{partner.name}</h3>

                </div>

              ))}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default AssociatePartners;