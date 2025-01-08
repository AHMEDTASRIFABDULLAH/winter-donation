const Faq = () => {
  return (
    <div className="mt-20">
      <h1 className="text-4xl font-bold text-center mb-10">
        Frequently Asked Questions (FAQ)
      </h1>
      <div
        tabIndex={0}
        className=" collapse collapse-arrow border-base-300  text-gray-800 border mb-4"
      >
        <div className="collapse-title text-xl font-medium">
          Is my donation tax-deductible?
        </div>
        <div className="collapse-content">
          <p>
            Answer: Yes, donations to [Your Organization&apos;s clothes Donate]
            are typically tax-deductible. Please consult with a tax advisor for
            specific guidance.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className=" collapse collapse-arrow border-base-300  text-gray-800 border mb-4"
      >
        <div className="collapse-title text-xl font-medium">
          How can I make a recurring donation?
        </div>
        <div className="collapse-content">
          <p>
            Answer: To set up a recurring donation, [Provide specific
            instructions, such as a link to a recurring donation form or a
            step-by-step guide]. You can also contact us directly for
            assistance.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className=" collapse collapse-arrow border-base-300  text-gray-800 border mb-4"
      >
        <div className="collapse-title text-xl font-medium">
          How secure is my donation information?
        </div>
        <div className="collapse-content">
          <p>
            Answer: We take the security of your donation information very
            seriously. We use [Specify security measures, such as SSL
            encryption] to protect your personal and financial data.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className=" collapse collapse-arrow border-base-300  text-gray-800 border"
      >
        <div className="collapse-title text-xl font-medium">
          What is the impact of my donation?
        </div>
        <div className="collapse-content">
          <p>
            Answer: Your generous donation will directly support [Specify the
            specific impact, such as funding a project, providing essential
            services, or supporting research]. Your contribution will make a
            real difference in the lives of [Specify the beneficiaries].
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
