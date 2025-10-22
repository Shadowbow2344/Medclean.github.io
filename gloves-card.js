
class BiodegradableGlovesCard extends HTMLElement {
connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          max-width: 400px;
          margin: 1rem;
        }
        .card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }
        .card:hover {
          transform: translateY(-5px);
        }
        .card-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        .card-content {
          padding: 1.5rem;
        }
        .card-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          color: #2e7d32;
        }
        .card-text {
          color: #4a5568;
          margin-bottom: 1rem;
        }
        .badge {
          display: inline-block;
          background-color: #689f38;
          color: white;
          padding: 0.25rem 0.5rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          margin-right: 0.5rem;
          margin-bottom: 0.5rem;
        }
      </style>
      <div class="card">
        <img src="http://static.photos/medical/640x360/10" alt="Biodegradable Gloves" class="card-image">
        <div class="card-content">
          <h3 class="card-title">GreenGlove Biodegradable Solution</h3>
          <p class="card-text">Medical-grade protection that decomposes in 1-5 years instead of centuries, reducing UAE's hospital waste impact.</p>
          <div>
            <span class="badge">EN 455 Certified</span>
            <span class="badge">ASTM D5526</span>
            <span class="badge">UAE Vision 2030</span>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('biodegradable-gloves-card', BiodegradableGlovesCard);
