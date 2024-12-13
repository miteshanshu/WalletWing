import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  const date = new Date();
  date.setDate(date.getDate() - 7);
  const dateString = date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className='w-[75%] mx-auto py-[40px]'>
      <div className='single-header style-2'>
        <h2 className='text-[40px] font-bold text-[#253D4E] leading-6 dark:text-white'>
          Terms of Service
        </h2>
        <div className='text-[14px] mt-[25px] mb-[25px]  text-[#7e7e7e] flex justify-start items-center gap-4 shoping-guide'>
          <span className='post-by'>
            By{' '}
            <Link to={'#'} className='text-[#3BB77E]'>
              Hunter
            </Link>
          </span>
          <span className='post-on has-dot dark:text-white'>{dateString}</span>
          <span className='time-reading has-dot dark:text-white'>
            8 mins read
          </span>
          <span className='hit-count has-dot dark:text-white'>29k Views</span>
        </div>
        <p>
          Welcome to our website, provided by
          YourCompany (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;). By using our website, you agree to
          abide by the following Terms of Service (&quot;Terms&quot;). These Terms apply
          to all visitors and users of our website. If you do not agree with any
          part of these Terms, please do not use our website. We reserve the
          right to modify these Terms at any time, and by continuing to use our
          website after such changes, you agree to follow the updated Terms.
        </p>
      </div>

      <div className='single-content'>
        <div className='mb-4'>
          <h4 className='mb-2'>1. Rights & restrictions</h4>
          <ol start='1' className='ml-4'>
            <li className='list-number'>
              Members must be at least 18 years of age.
            </li>
            <li className='list-number'>
              Members must provide accurate and complete registration
              information any time they register to use the Service.
            </li>
            <li className='list-number'>
              Members may not share their password or account with any other
              person.
            </li>
            <li className='list-number'>
              Members are responsible for maintaining the security of their
              password.
            </li>
            <li className='list-number'>
              Evara will not be liable for any loss that Members may incur as a
              result of someone else using their password or account, either
              with or without their knowledge.
            </li>
            <li className='list-number'>
              Members may not use the Service for any illegal or unauthorized
              purpose.
            </li>
            <li className='list-number'>
              Members agree to comply with all local laws regarding online
              conduct and acceptable content.
            </li>
            <li className='list-number'>
              Members must not modify, adapt or hack the Service or modify
              another website so as to falsely imply that it is associated with
              the Service, Evara, or any other Evara service.
            </li>
            <li className='list-number'>
              Members must not create or submit unwanted email or comments to
              any Evara members (“Spam”).
            </li>
          </ol>
        </div>
      </div>

      <div className='single-content'>
        <div className='mb-4'>
          <h4 className='mb-2'>2. Links To Other Web Sites</h4>
          <ol start='1' className='ml-4'>
            <li className='list-number'>
              Our Service may contain links to third-party web sites or services
              that are not owned or controlled by Evara.
            </li>
            <li className='list-number'>
              Evara has no control over, and assumes no responsibility for, the
              content, privacy policies, or practices of any third-party web
              sites or services. You further acknowledge and agree that Evara
              shall not be responsible or liable, directly or indirectly, for
              any damage or loss caused or alleged to be caused by or in
              connection with use of or reliance on any such content, goods or
              services available on or through any such web sites or services.
            </li>
            <li className='list-number'>
              We strongly advise you to read the terms and conditions and
              privacy policies of any third-party web sites or services that you
              visit.
            </li>
          </ol>
        </div>
      </div>
      <div className='single-content'>
        <div className='mb-4'>
          <h4 className='mb-2'>3. Termination</h4>
          <ol start='1' className='ml-4'>
            <li className='list-number'>
              We may terminate or suspend access to our Service immediately,
              without prior notice or liability, for any reason whatsoever,
              including without limitation if you breach the Terms.
            </li>
            <li className='list-number'>
              All provisions of the Terms which by their nature should survive
              termination shall survive termination, including, without
              limitation, ownership provisions, warranty disclaimers, indemnity
              and limitations of liability.
            </li>
          </ol>
        </div>
      </div>
      <div className='single-content'>
        <div className='mb-4 p-4 rounded-md'>
          <h4 className='mb-2'>4. Governing Law</h4>
          <ol start='1' className='ml-4'>
            <li className='list-number'>
              These Terms shall be governed and construed in accordance with the
              laws of United States, without regard to its conflict of law
              provisions.
            </li>
            <li className='list-number'>
              Our failure to enforce any right or provision of these Terms will
              not be considered a waiver of those rights. If any provision of
              these Terms is held to be invalid or unenforceable by a court, the
              remaining provisions of these Terms will remain in effect. These
              Terms constitute the entire agreement between us regarding our
              Service, and supersede and replace any prior agreements we might
              have between us regarding the Service.
            </li>
            <li className='list-number'>
              For more information about our governing laws, please visit our
              governing laws page on our website.
            </li>
          </ol>
        </div>
      </div>
      <div className='single-content'>
        <div className='mb-4 p-4 rounded-md'>
          <h4 className='mb-2'>5. Changes</h4>
          <ol start='1' className='ml-4'>
            <li className='list-number'>
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. If a revision is material we will try to
              provide at least 30 days notice prior to any new terms taking
              effect. What constitutes a material change will be determined at
              our sole discretion.
            </li>
            <li className='list-number'>
              For more information about our policy changes, please
              <Link
                to='/policy'
                className='text-blue-500 hover:underline ml-2 mr-2'
              >
                visit our policy updates page
              </Link>
              on our website.
            </li>
          </ol>
        </div>
      </div>
      <div className='single-content'>
        <div className='mb-4  p-4 rounded-md'>
          <h4 className='mb-2'>6. Contact Us</h4>
          <ol start='1' className='ml-4'>
            <li className='list-number'>
              If you have any questions about these Terms, please contact us.
            </li>
            <li className='list-number'>
              You can reach us via email, phone, or
              <Link
                to='/contact-us'
                className='text-blue-500 hover:underline ml-2 mr-2'
              >
                message us
              </Link>
              on our website.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;