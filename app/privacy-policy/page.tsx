export default function PrivacyPolicyPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#172D56]">
            Privacy Policy
          </h1>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full mb-6"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 text-gray-700">
          <p>
            At Durotech, we are committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you visit our website or engage with our
            services. Please read this privacy policy carefully. If you do not
            agree with the terms of this privacy policy, please do not access
            the site.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#172D56]">
            Information We Collect
          </h2>
          <p>
            We may collect information about you in a variety of ways. The
            information we may collect includes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Personal Data:</strong> Personally identifiable
              information, such as your name, email address, telephone number,
              and company information, that you voluntarily give to us when you
              register with our website or when you choose to participate in
              various activities related to our website.
            </li>
            <li>
              <strong>Derivative Data:</strong> Information our servers
              automatically collect when you access our website, such as your IP
              address, browser type, operating system, access times, and the
              pages you have viewed directly before and after accessing the
              website.
            </li>
            <li>
              <strong>Financial Data:</strong> Financial information, such as
              data related to your payment method (e.g., valid credit card
              number, card brand, expiration date) that we may collect when you
              purchase, order, return, exchange, or request information about
              our services.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#172D56]">
            Use of Your Information
          </h2>
          <p>
            Having accurate information about you permits us to provide you with
            a smooth, efficient, and customized experience. Specifically, we may
            use information collected about you via the website to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Create and manage your account.</li>
            <li>Process your transactions.</li>
            <li>
              Send you administrative information, such as updates, security
              alerts, and support messages.
            </li>
            <li>Respond to your inquiries and provide customer service.</li>
            <li>Send you marketing and promotional communications.</li>
            <li>
              Compile anonymous statistical data and analysis for use internally
              or with third parties.
            </li>
            <li>
              Deliver targeted advertising, newsletters, and other information
              regarding promotions.
            </li>
            <li>
              Monitor and analyze usage and trends to improve your experience
              with the website.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#172D56]">
            Disclosure of Your Information
          </h2>
          <p>
            We may share information we have collected about you in certain
            situations. Your information may be disclosed as follows:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>By Law or to Protect Rights:</strong> If we believe the
              release of information about you is necessary to respond to legal
              process, to investigate or remedy potential violations of our
              policies, or to protect the rights, property, and safety of
              others, we may share your information as permitted or required by
              any applicable law, rule, or regulation.
            </li>
            <li>
              <strong>Third-Party Service Providers:</strong> We may share your
              information with third parties that perform services for us or on
              our behalf, including payment processing, data analysis, email
              delivery, hosting services, customer service, and marketing
              assistance.
            </li>
            <li>
              <strong>Business Transfers:</strong> We may share or transfer your
              information in connection with, or during negotiations of, any
              merger, sale of company assets, financing, or acquisition of all
              or a portion of our business to another company.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#172D56]">
            Security of Your Information
          </h2>
          <p>
            We use administrative, technical, and physical security measures to
            help protect your personal information. While we have taken
            reasonable steps to secure the personal information you provide to
            us, please be aware that despite our efforts, no security measures
            are perfect or impenetrable, and no method of data transmission can
            be guaranteed against any interception or other type of misuse.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#172D56]">
            Contact Us
          </h2>
          <p>
            If you have questions or comments about this Privacy Policy, please
            contact us at:{" "}
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
