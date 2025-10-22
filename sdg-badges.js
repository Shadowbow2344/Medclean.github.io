class SDGBadges extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          margin: 1rem 0;
        }
        .badges-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
        }
        .sdg-badge {
          display: inline-flex;
          align-items: center;
          background: white;
          border-radius: 20px;
          padding: 0.5rem 1rem;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          font-size: 0.875rem;
          font-weight: 600;
        }
        .sdg-badge svg {
          width: 20px;
          height: 20px;
          margin-right: 0.5rem;
        }
        .sdg-3 { color: #4c9f38; }
        .sdg-12 { color: #bf8b2e; }
        .sdg-13 { color: #48773e; }
      </style>
      <div class="badges-container">
        <div class="sdg-badge sdg-3">
          <svg viewBox="0 0 24 24">
            <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H9V14H7V12H9V10H11V12H13V14H11V17M16,17H14V14H12V12H14V10H16V12H18V14H16V17Z" />
          </svg>
          SDG 3: Good Health
        </div>
        <div class="sdg-badge sdg-12">
          <svg viewBox="0 0 24 24">
            <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M16.2,11L14.5,8.7L16.9,7.4L18.6,9.7L21,8.3L19.3,6L21,3.7L18.6,2.3L16.9,4.6L14.5,3.3L16.2,1H11.8L13.5,3.3L11.1,4.6L9.4,2.3L7,3.7L8.7,6L7,8.3L9.4,9.7L11.1,7.4L8.7,8.7L10.4,11H11.8L10.1,13.3L12.5,14.6L14.2,12.3L16.6,13.7L14.9,16L16.6,18.3L14.2,19.6L12.5,17.3L10.1,18.6L11.8,21H16.2L14.5,18.7L16.9,17.4L18.6,19.7L21,18.3L19.3,16L21,13.7L18.6,12.3L16.9,14.6L14.5,13.3L16.2,11Z" />
          </svg>
          SDG 12: Responsible Consumption
        </div>
        <div class="sdg-badge sdg-13">
          <svg viewBox="0 0 24 24">
            <path fill="currentColor" d="M12,2L1,12L4,12L4,21H11V15H13V21H20V12L23,12L12,2M12,5.3L18,11V19H15V13H9V19H6V11L12,5.3Z" />
          </svg>
          SDG 13: Climate Action
        </div>
      </div>
    `;
  }
}
customElements.define('sdg-badges', SDGBadges);