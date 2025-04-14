export default function ReturnPolicyPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#172D56]">
            Return Policy
          </h1>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full mb-6"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 text-gray-700">
          <p>
            At Durotech, we are committed to ensuring the quality and integrity
            of all commodities we trade. This Return Policy outlines the
            procedures and conditions for returns and refunds related to our
            commodity trading services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#172D56]">
            Quality Assurance
          </h2>
          <p>
            All commodities traded through Durotech undergo rigorous quality
            control checks to ensure they meet the specified standards and
            requirements. We provide detailed specifications for all commodities
            and ensure that proper inspection and verification procedures are
            followed before shipment.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#172D56]">
            Inspection Period
          </h2>
          <p>
            Upon receipt of commodities, buyers are advised to inspect the goods
            promptly. Any discrepancies or quality issues must be reported to
            Durotech within the inspection period specified in the contract,
            typically within 3-5 business days of receipt, unless otherwise
            stated in the specific trading agreement.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#172D56]">
            Return Conditions
          </h2>
          <p>Returns may be accepted under the following conditions:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              The commodity does not meet the specifications outlined in the
              contract.
            </li>
            <li>
              The commodity is damaged during transit (subject to shipping terms
              and insurance coverage).
            </li>
            <li>
              The quantity received is significantly different from the quantity
              ordered (beyond acceptable tolerance levels).
            </li>
            <li>
              The commodity is contaminated or otherwise unfit for its intended
              use.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#172D56]">
            Return Process
          </h2>
          <p>To initiate a return, please follow these steps:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              Contact your Durotech representative immediately upon discovering
              any issues with the received commodities.
            </li>
            <li>
              Provide detailed information about the issue, including
              photographic evidence where applicable.
            </li>
            <li>
              Complete the Return Request Form provided by your representative.
            </li>
            <li>Await confirmation and instructions for the return process.</li>
          </ol>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#172D56]">
            Refunds
          </h2>
          <p>
            Refunds will be processed according to the terms specified in the
            trading contract. Depending on the circumstances, refunds may be
            issued in full or in part, or alternative solutions such as
            replacement shipments or price adjustments may be offered.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#172D56]">
            Exceptions
          </h2>
          <p>
            Please note that certain commodities, particularly those that are
            perishable or have been custom-processed according to buyer
            specifications, may have limited or no return options. These
            exceptions will be clearly stated in the trading contract.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#172D56]">
            Contact Us
          </h2>
          <p>
            If you have any questions about our Return Policy, please contact us
            at:{" "}
            <a
              href="mailto:durotech.uk@gmail.com"
              className="text-blue-600 hover:underline"
            >
              durotech.uk@gmail.com
            </a>
          </p>

          <p className="mt-8 text-sm text-gray-500">Last updated: April 2023</p>
        </div>
      </div>
    </section>
  );
}
