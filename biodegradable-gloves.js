class BiodegradableGloves extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          margin: 2rem 0;
        }
        .gloves-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          padding: 2rem;
        }
        .gloves-image {
          border-radius: 12px;
          height: 100%;
          object-fit: cover;
        }
        .gloves-content h2 {
          color: #2e7d32;
          font-size: 2rem;
          margin-bottom: 1.5rem;
        }
        .gloves-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin: 2rem 0;
        }
        .feature-card {
          background: #f8f9fa;
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #689f38;
        }
        .feature-card h4 {
          color: #2e7d32;
          margin-bottom: 0.5rem;
        }
        .comparison-chart {
          background: #f1f8e9;
          padding: 1.5rem;
          border-radius: 8px;
          margin-top: 2rem;
        }
        .comparison-row {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          padding: 0.75rem 0;
          border-bottom: 1px solid #e0e0e0;
        }
        .comparison-header {
          font-weight: bold;
          background: #e8f5e9;
        }
        .btn-primary {
          background: #2e7d32;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          display: inline-block;
          margin-top: 1rem;
          text-decoration: none;
          font-weight: 600;
        }
        @media (max-width: 768px) {
          .gloves-container {
            grid-template-columns: 1fr;
          }
          .gloves-features {
            grid-template-columns: 1fr;
          }
        }
      </style>
      <div class="gloves-container">
        <div>
          <img src="http://static.photos/medical/640x360/15" alt="Biodegradable Gloves" class="gloves-image">
        </div>
        <div class="gloves-content">
          <h2>Biodegradable Medical Gloves Solution</h2>
          <p>Transforming one of healthcare's most common waste items into an eco-friendly alternative that decomposes in 1-5 years instead of centuries.</p>
          
          <div class="gloves-features">
            <div class="feature-card">
              <h4>UAE Impact</h4>
              <p>Reduces 21.5 tons of daily medical waste in UAE hospitals</p>
            </div>
            <div class="feature-card">
              <h4>Certifications</h4>
              <p>EN 455, EN 374, ASTM D5526 compliant</p>
            </div>
            <div class="feature-card">
              <h4>Decomposition</h4>
              <p>81-90% biodegradation in 490 days (ASTM testing)</p>
            </div>
            <div class="feature-card">
              <h4>Local Potential</h4>
              <p>Future integration with UAE date palm biopolymers</p>
            </div>
          </div>

          <div class="comparison-chart">
            <div class="comparison-row comparison-header">
              <div>Feature</div>
              <div>Traditional Gloves</div>
              <div>Our Solution</div>
            </div>
            <div class="comparison-row">
              <div>Decomposition Time</div>
              <div>100+ years</div>
              <div>1-5 years</div>
            </div>
            <div class="comparison-row">
              <div>Landfill Impact</div>
              <div>Permanent</div>
              <div>Minimal</div>
            </div>
            <div class="comparison-row">
              <div>Medical Safety</div>
              <div>EN 455 Certified</div>
              <div>EN 455 Certified</div>
            </div>
            <div class="comparison-row">
              <div>UAE Suitability</div>
              <div>N/A</div>
              <div>Optimized for UAE conditions</div>
            </div>
          </div>

          <a href="#contact" class="btn-primary">Request Samples</a>
        </div>
      </div>
    `;
  }
}
customElements.define('biodegradable-gloves', BiodegradableGloves);