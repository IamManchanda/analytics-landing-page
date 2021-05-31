import NavFooterLink from "./nav-footer-link";

function NavFooter() {
  return (
    <ul className="grid grid-cols-3 my-24">
      <li className="col-span-1">
        <h6 className="mb-3 text-xl font-medium">Pirsch Analytics</h6>
        <p className="text-pir-gray-500">Made and hosted in Germany.</p>
        <p className="text-pir-gray-500">
          &copy; 2021 Emvi Software GmbH. All rights reserved.
        </p>
      </li>
      <li className="col-span-2">
        <ul className="flex justify-between">
          <li>
            <h6 className="mb-3 text-xl font-medium">Product</h6>
            <ul>
              <NavFooterLink href="/" text="Home" />
              <NavFooterLink href="/#pricing" text="Pricing" />
              <NavFooterLink
                href="/#google-analytics-alternative"
                text="vs Google Analytics"
              />
              <NavFooterLink href="/#faq" text="FAQ" />
            </ul>
          </li>
          <li>
            <h6 className="mb-3 text-xl font-medium">Resources</h6>
            <NavFooterLink href="/#live-demo" text="Live Demo" />
            <NavFooterLink href="/#documentation" text="Documentation" />
            <NavFooterLink href="/#api-sdks" text="API and SDKs" />
            <NavFooterLink href="/#changelog" text="Changelog" />
          </li>
          <li>
            <h6 className="mb-3 text-xl font-medium">Social</h6>
            <NavFooterLink href="/#github" text="Github" />
            <NavFooterLink href="/#twitter" text="Twitter" />
            <NavFooterLink href="/#discord" text="Discord" />
            <NavFooterLink href="/#product-hunt" text="ProductHunt" />
          </li>
          <li>
            <h6 className="mb-4 text-xl font-medium">Legal</h6>
            <NavFooterLink
              href="/#terms-conditions"
              text="Terms and Conditions"
            />
            <NavFooterLink href="/#privacy-policy" text="Privacy Policy" />
            <NavFooterLink href="/#legal-notice" text="Legal Notice" />
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default NavFooter;
