export default function DisclaimerPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#172D56]">
            Disclaimer
          </h1>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full mb-6"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 text-gray-700">
          <p>
            The information contained on the Al Najm Al Zaher website is
            provided for general information purposes only. While we strive to
            keep the information up to date and correct, we make no
            representations or warranties of any kind, express or implied, about
            the completeness, accuracy, reliability, suitability, or
            availability of the information, products, services, or related
            graphics contained on the website for any purpose.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#172D56]">
            No Warranties
          </h2>
          <p>
            This website is provided &quot;as is&quot; without any
            representations or warranties, express or implied. Al Najm Al Zaher
            makes no representations or warranties in relation to this website
            or the information and materials provided on this website.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#172D56]">
            Limitations of Liability
          </h2>
          <p>
            In no event will Al Najm Al Zaher be liable for any loss or damage
            including without limitation, indirect or consequential loss or
            damage, or any loss or damage whatsoever arising from loss of data
            or profits arising out of, or in connection with, the use of this
            website.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#172D56]">
            Revisions and Errata
          </h2>
          <p>
            The materials appearing on Al Najm Al Zaher&apos;s website could
            include technical, typographical, or photographic errors. Al Najm Al
            Zaher does not warrant that any of the materials on its website are
            accurate, complete, or current. Al Najm Al Zaher may make changes to
            the materials contained on its website at any time without notice.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#172D56]">
            Contact Us
          </h2>
          <p>
            If you have any questions about this Disclaimer, please contact us
            at:{" "}
            <a
              href="mailto:alnajmalzaher.uae@gmail.com"
              className="text-blue-600 hover:underline"
            >
              alnajmalzaher.uae@gmail.com
            </a>
          </p>

          <p className="mt-8 text-sm text-gray-500">Last updated: April 2025</p>
        </div>
      </div>
    </section>
  );
}
