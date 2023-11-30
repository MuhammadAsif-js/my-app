import React from 'react';
import Link from 'next/link';

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="max-w-2xl w-full p-6 bg-white rounded shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>

        <div className="text-gray-700">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Information Collection</h2>
            <p className="mb-4">
              We may collect personal information, such as your name and email address, when you
              interact with our website or services.
            </p>
            <p className="mb-4">
              We may also automatically collect certain information about your device when you use
              our services, we will secure your information in accordance with industry standards.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Use of Information</h2>
            <p className="mb-4">
              The information collected is used to provide and maintain our services, notify you
              about changes, and improve our offerings.
            </p>
            <p className="mb-4">
              We may use your information to communicate with you, including sending promotional
              emails or newsletters.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
            <p className="mb-4">
              We implement security measures to protect your personal information and ensure it is
              not misused, accessed, disclosed, altered, or destroyed.
            </p>
          </section>
{/* 
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Cookies</h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies to enhance your browsing experience
              and analyze usage.
            </p>
            <p className="mb-4">
              You can manage your cookie preferences or disable cookies through your browser
              settings.
            </p>
          </section> */}

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Third-Party Links</h2>
            <p className="mb-4">
              Our website may contain links to third-party sites that are not operated by us. We
              have no control over the content or practices of these sites and are not responsible
              for their privacy policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Changes to Privacy Policy</h2>
            <p className="mb-4">
              We reserve the right to update or change our privacy policy at any time. We will
              notify you of any changes by posting the new privacy policy on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
            <p className="mb-4">
              If you have any questions or concerns about our privacy policy or practices, please
              contact us at <Link className='text-blue-300' href = "/Navbar/contactus">Contact us page</Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
