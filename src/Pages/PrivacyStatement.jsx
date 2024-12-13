/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";

const PrivacyStatement = () => {
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
          Privacy Policy
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
      </div>

      <div className='mb-12 single-content'>
        <div className='mb-4'>
          <h4 className='mb-2'>
            1. The type of personal information we collect
          </h4>
          <ol start='1' className='ml-4'>
            <li className='list-number'>
              We collect certain personal information about visitors and users
              of our Sites.
            </li>
            <li className='list-number'>
              The most common types of information we collect include things
              like: user-names, member names, email addresses, IP addresses,
              other contact details, survey responses, blogs, photos, payment
              information such as payment agent details, transactional details,
              tax information, support queries, forum comments (if applicable),
              content you direct us to make available on our Sites (such as item
              descriptions), your actions on our Sites (including any selections
              or inputs into items) and web and email analytics data. We will
              also collect personal information from job applications (such as,
              your CV, the application form itself, cover letter and interview
              notes).
            </li>
          </ol>
        </div>
        <div className='mb-4'>
          <h4 className='mb-2'>2. How we collect personal information</h4>
          <ol start='1' className='ml-4'>
            <li className='list-number'>
              We collect personal information directly when you provide it to
              us, automatically as you navigate through the Sites, or through
              other people when you use services associated with the Sites.
            </li>
            <li className='list-number'>
              We collect your personal information when you provide it to us
              when you complete membership registration and buy or provide items
              or services on our Sites, subscribe to a newsletter, email list,
              submit feedback, enter a contest, fill out a survey, or send us a
              communication.
            </li>
            <li className='list-number'>
              We collect your personal information when you provide it to us
              when you complete membership registration and buy or provide items
              or services on our Sites, subscribe to a newsletter, email list,
              submit feedback, enter a contest, fill out a survey, or send us a
              communication.
            </li>
            <li className='list-number'>
              As the operator of digital content marketplaces, we have a
              legitimate interest in verifying the identity of our authors. We
              believe that knowing who our authors are will strengthen the
              integrity of our marketplaces by reducing fraud, making authors
              more accountable for their content and giving HunterTheme and
              customers the ability to enforce contracts for authors who break
              the rules. HunterTheme also has certain legal obligations that
              require us to know who our authors are in certain circumstances.
              In light of this, if you are an author we will verify your
              identity, in particular, your name, full address and date of birth
              by asking you to show us a Photo ID document. The verification
              procedure is called HunterTheme Verify. HunterTheme Verify will be
              carried out by our service provider lal kuan ghaziabad As part of
              HunterTheme Verify, you will be asked to take a selfie which will
              then be compared against your Photo ID document using facial
              recognition technology. We will use your Photo ID document solely
              to carry out HunterTheme Verify and delete it after the completion
              of this process.
            </li>
          </ol>
        </div>

        <div className='mb-4'>
          <h4 className='mb-2'>3. How we use personal information</h4>
          <ol start='1' className='ml-4'>
            <li className='list-number'>
              We will use your personal information:
              <ol>
                <li className='custom-list-inside'>
                  To fulfil a contract, or take steps linked to a contract: in
                  particular, in facilitating and processing transactions that
                  take place on the Sites, like where you purchase an item from
                  our marketplace.
                </li>
                <li className='list-number'>
                  Where this is necessary for purposes which are in our, or
                  third parties’, legitimate interests. These interests include:
                  <ol>
                    <li className='custom-list-inside'>operating the Sites;</li>
                    <li className='custom-list-inside'>
                      providing you with services described on the Sites;
                    </li>
                    <li className='custom-list-inside'>
                      verifying your identity when you sign in to any of our
                      Sites;
                    </li>
                    <li className='custom-list-inside'>
                      responding to support tickets, and helping facilitate the
                      resolution of any disputes;
                    </li>
                    <li className='custom-list-inside'>
                      updating you with operational news and information about
                      our Sites and services e.g. to notify you about changes to
                      our Sites, website disruptions or security updates;
                    </li>
                    <li className='custom-list-inside'>
                      carrying out technical analysis to determine how to
                      improve the Sites and services we provide;
                    </li>
                    <li className='custom-list-inside'>
                      monitoring activity on the Sites, e.g. to identify
                      potential fraudulent activity and to ensure compliance
                      with the user terms that apply to the Sites;
                    </li>
                    <li className='custom-list-inside'>
                      managing our relationship with you, e.g. by responding to
                      your comments or queries submitted to us on the Sites or
                      asking for your feedback or whether you want to
                      participate in a survey;
                    </li>
                    <li className='custom-list-inside'>
                      managing our legal and operational affairs (including,
                      managing risks relating to content and fraud matters);
                    </li>
                    <li className='custom-list-inside'>
                      training AliThemes staff about how to best serve our user
                      community;
                    </li>
                    <li className='custom-list-inside'>
                      improving our products and services;
                    </li>
                    <li className='custom-list-inside'>
                      providing general administrative and performance functions
                      and activities; and
                    </li>
                    <li className='custom-list-inside'>
                      verifying your identity by comparing a selfie taken by you
                      against your Photo ID document using facial recognition
                      technology (as is necessary for the establishment,
                      exercise or defense of legal claims); and
                    </li>
                    <li className='custom-list-inside'>
                      processing your job application to AliThemes.
                    </li>
                  </ol>
                </li>
                <li className='list-number'>
                  Where you give us consent:
                  <ol>
                    <li className='custom-list-inside'>
                      providing you with marketing information about products
                      and services which we feel may interest you; and
                    </li>
                    <li className='custom-list-inside'>
                      customising our services and websites, like advertising
                      that appear on the Site – where this involves the use of
                      cookies or similar technologies – in order to provide a
                      more personalised experience.
                    </li>
                  </ol>
                </li>
                <li className='custom-list-inside'>
                  For purposes which are required by law.
                </li>
                <li className='custom-list-inside'>
                  For the purpose of responding to requests by government, a
                  court of law, or law enforcement authorities conducting an
                  investigation.
                </li>
              </ol>
            </li>
          </ol>
        </div>
        <div className='mb-4'>
          <h4 className='mb-2'>
            4. Where we transfer and/or store your personal information
          </h4>
          <ol start='1' className='ml-4'>
            <li className='list-number'>
              We are based in Australia and Mexico so your data will be
              processed in Australia, Mexico and the US. Some of the recipients
              we have described in section 10 above, and to whom we disclose
              your personal information, are based in places like Australia,
              Canada, Ireland, Mexico, Philippines, Poland, Romania, UK, the US,
              India and Columbia. We do this on the basis of this policy. In
              order to protect your information, we take care where possible to
              work with subcontractors and service providers who we believe
              maintain an acceptable standard of data security compliance.
            </li>
          </ol>
        </div>
        <div className='mb-4'>
          <h4 className='mb-2'>
            5. How we keep your personal information secure
          </h4>
          <ol start='1' className='ml-4'>
            <li className='list-number'>
              We store personal information on secure servers that are managed
              by us and our service providers, and occasionally hard copy files
              that are kept in a secure location in Australia, Ireland, Mexico
              and the US. Personal information that we store or transmit is
              protected by security and access controls, including username and
              password authentication, two-factor authentication, and data
              encryption where appropriate.
            </li>
          </ol>
        </div>
        <div className='mb-4'>
          <h4 className='mb-2'>
            6. How you can access your personal information
          </h4>
          <ol start='1' className='ml-4'>
            <li className='list-number'>
              You can access some of the personal information that we collect
              about you by logging in to your account. You also have the right
              to make a request to access other personal information we hold
              about you and to request corrections of any errors in that data.
              You can also close the account you have with us for any of our
              Sites at any time. To make an access or correction request,
              contact our privacy champion using the contact details at the end
              of this policy.
            </li>
          </ol>
        </div>
        <div className='mb-4'>
          <h4 className='mb-2'>7. Information about children</h4>
          <ol start='1' className='ml-4'>
            <li className='list-number'>
              Our Sites are not suitable for children under the age of 16 years,
              so if you are under 16 we ask that you do not use our Sites or
              give us your personal information (if you are a young tech wiz,
              please direct your nearest responsible adult to use the Sites for
              you!). If you are from 16 to 18 years, you can browse the Sites
              but you’ll need the supervision of a parent or guardian to become
              a registered user. It’s the responsibility of parents or guardians
              to monitor their children’s use of our Sites.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default PrivacyStatement;
