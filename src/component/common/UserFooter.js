import "./UserFooter.css";

export default function UserFooter() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Column 1: About */}
        <div className="footer-col">
          <h2 className="footer-logo">ICICI Lombard</h2>
          <p>General Insurance Company Ltd.<br />
             Protecting you and your loved ones with trust and commitment.
          </p>
        </div>

        {/* Column 2: Products */}
        <div className="footer-col">
          <h3>Products</h3>
          <ul>
            <li><a href="/Portal/Standard_Fire_and_Special_perils_policy">Property</a></li>
            <li><a href="/Portal/Marine_Inland_Open_Declaration_Policy">Marine</a></li>
            <li><a href="/Portal/Comprehensive_General_Liability">Liability</a></li>
            <li><a href="/Portal/Contractors_All_Risk">Engineering</a></li>
            <li><a href="/Portal/Group_Health">Group Health</a></li>
          </ul>
        </div>

        {/* Column 3: Explore */}
        <div className="footer-col">
          <h3>Explore</h3>
          <ul>
            <li><a href="/Portal/Home">Website Home</a></li>
            <li><a href="/Portal/Property_Loss_Prevention_exercise">Property Services</a></li>
            <li><a href="/Portal/Vas_Solution">Marine Services</a></li>
            <li><a href="/Portal/risk_Health">Group Health Services</a></li>
            <li><a href="/Portal/risk_Engineering">Engineering Services</a></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="footer-col">
          <h3>Connect With Us</h3>
          <p>Toll Free: <strong>1800 2666</strong><br />
             Email: <a href="mailto:cpcontactus@icicilombard.com">cpcontactus@icicilombard.com</a>
          </p>
          <div className="footer-social">
            <a href="#">F</a>
            <a href="#">T</a>
            <a href="#">L</a>
            <a href="#">Y</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} ICICI Lombard General Insurance Company Ltd. All rights reserved.
      </div>
    </footer>
  );
}
