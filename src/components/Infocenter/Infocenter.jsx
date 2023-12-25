import React, { useState } from 'react';
import './Infocenter.css'; // Replace 'infocenter.css' with your actual CSS file name and path

const InfoCenter = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const buttonData = [
    {
      id: 1,
      title: 'Terms of Use',
      content: `

      📜 Terms of Use

Welcome to Shards! These Terms of Use outline the rules and regulations for using our platform.

    Responsibility and Conduct

       - Users must engage respectfully and responsibly within the platform community.
       - Compliance with community guidelines, local laws, and regulations is mandatory.
       - Any abusive, harassing, or offensive behavior towards others is strictly prohibited.

    Content Ownership and Usage

        - All content shared or posted on this platform remains the intellectual property of the respective creators.
        - Users agree not to infringe upon any copyright, trademark, or intellectual property rights.
        - Sharing or using content from this platform requires proper attribution to the original creator.

    Accuracy and Reliability of Information

        - While we strive for accuracy, we do not guarantee the completeness or reliability of the information shared by users.
        - Users are encouraged to verify the accuracy of any information before relying on it.

    Privacy and Data Handling

        - Your privacy matters, Our Privacy Policy governs the collection, use, and protection of your personal information.
        - By using this platform, users consent to the processing of their data as described in our Privacy Policy.

    Changes to Terms of Use

        - We reserve the right to modify or update these Terms of Use at any time without prior notice.
        - Continued use of the platform constitutes acceptance of these changes.

    Termination of Access

        - Violation of these Terms of Use may result in the termination of a user's access to the platform without notice.

By accessing or using our platform, you acknowledge that you have read, understood, and agreed to abide by these Terms of Use,
if you dont agree with any of the above please refrain from using the Platform.`
    },
    {
      id: 2,
      title: 'Privacy Policy',
      content: `🔒 Privacy Policy

      Welcome to [Platform Name]! This Privacy Policy outlines how we collect, use, and protect your personal information when you use our platform.
      
          Information Collection

              We collect personal information when you register, create a profile, or interact with our platform's features.
              Information may include your name, email address, profile picture, and any data voluntarily shared while using our services.
      
          Usage of Information

              Personal information is used to provide and personalize our services, improve user experience, and communicate with users.
              We may use collected data to send updates, newsletters, or important notifications related to our platform.
      
          Information Sharing

              Your personal information is not shared, sold, or rented to third parties without your consent, except as required by law or for essential platform operations.
              We may disclose information to service providers assisting in platform maintenance, subject to confidentiality agreements.
      
          Data Security

              We implement security measures to protect against unauthorized access, alteration, disclosure, or destruction of personal information.
              However, no method of transmission over the internet or electronic storage is completely secure; therefore, absolute security cannot be guaranteed.
      
          Cookies and Tracking

              We may use cookies or similar tracking technologies to enhance user experience, gather data about site traffic, and understand user preferences.
              Users can manage cookie preferences or disable them through browser settings.
      
          Third-Party Links

              Our platform may contain links to third-party websites. We are not responsible for their privacy practices and encourage users to review their policies.
      
          Policy Updates

              We reserve the right to update or modify this Privacy Policy. Any changes will be posted on this page with an updated effective date.
      
      By using our platform, you acknowledge that you have read, understood, and agreed to the terms outlined in this Privacy Policy. `,
    },
    {
      id: 3,
      title: 'Community Guidelines',
      content: `🤝 Community Guidelines

      Welcome to Shards! These Community Guidelines are designed to foster a safe and respectful environment for all users.
      
          Respect and Civility

              Treat fellow users with respect, kindness, and consideration.
              Harassment, hate speech, bullying, or discrimination of any form will not be tolerated.
      
          Content Standards

              Ensure your posts and interactions are appropriate for all audiences.
              Avoid sharing content that contains violence, nudity, explicit language, or promotes illegal activities.
      
          Intellectual Property and Copyright

              Respect the intellectual property rights of others; do not post copyrighted material without proper authorization.
              Provide credit and attribution when sharing content that isn’t your own.
      
          Privacy and Confidentiality

              Respect others' privacy; do not share personal information without consent.
              Refrain from disclosing private or confidential information about others.
      
          Reporting and Moderation

              Report any content or behavior that violates these guidelines or makes you feel uncomfortable.
              Our moderation team will review reported content and take necessary actions to maintain a safe environment.
      
          Consequences of Violations

              Violation of these guidelines may result in content removal, account suspension, or permanent ban, depending on the severity of the offense.
      
          Promotion and Spam

              Avoid spamming or repeatedly promoting unrelated content or products.
              Commercial solicitation or advertising without permission is not allowed.
      
          Policy Updates

              We reserve the right to update or modify these Community Guidelines. Users will be informed about significant changes.
      
      By using Shards, you acknowledge and agree to adhere to these Community Guidelines.`,
    },
    {
      id: 4,
      title: 'Content Guidelines',
      content: `📄 Content Guidelines

      Content shared on our platform should align with the following guidelines to maintain a positive and inclusive environment for all users:
      
          Relevance and Context

              Ensure your content is relevant to the platform's purpose and community interests.
              Provide context or descriptions that help others understand your content.
      
          Respectful Communication

              Engage in constructive and respectful discussions with other users.
              Avoid inflammatory, offensive, or disrespectful language or imagery.
      
          Accuracy and Authenticity

              Share information that is accurate, factually correct, and verified from reliable sources.
              Refrain from spreading false information or promoting misinformation.
      
          Sensitive and Mature Content

              Clearly label content that might be sensitive, mature, or potentially triggering to others.
              Respect individual preferences and consider using content warnings when necessary.
      
          Intellectual Property Rights

              Respect copyright laws; only share content you have the right to use.
              Provide proper attribution to original creators or sources when sharing third-party content.
      
          Safety and Harm Prevention

              Do not share content that promotes self-harm, violence, or illegal activities.
              Report any content that may pose a threat or risk to individuals or the community.
      
          Advertising and Promotions

              Avoid excessive self-promotion or spamming.
              Clearly distinguish promotional content and ensure it complies with our advertising policies.
      
          Compliance with Policies

              Adhere to our platform's Terms of Use, Privacy Policy, and Community Guidelines.
              Respect and follow any additional policies or rules specified by the platform.
      
      By adhering to these content guidelines, users contribute positively to our community and create a welcoming environment for everyone.`,
    },
    {
      id: 5,
      title: 'Data Policy',
      content: `🔐 Data Policy

      At Shards, we prioritize the protection and minimal use of your data. Our commitment is to safeguard your information and ensure transparency in its usage.
      
          Data Collection

              We collect only the information necessary to provide and improve our platform services.
              Data collection occurs when users voluntarily provide information or interact with our platform's features.
      
          Data Usage

              We do not track, sell, or use any data not explicitly authorized or shared by the user for platform functionalities.
              User-provided data is used solely to enhance user experience, personalize content, and improve our services.
      
          Advertising Policy

              We do not sell or provide user information to advertisers.
              Advertisements you encounter are related to the categories or interests you have chosen within the platform.
      
          Data Security

              We employ industry-standard security measures to protect user data from unauthorized access, misuse, or alteration.
              However, no method of data transmission over the internet is entirely secure; therefore, absolute security cannot be guaranteed.
      
          Third-Party Links and Services

              Our platform may contain links to third-party websites or services. We are not responsible for their privacy practices and encourage users to review their policies.
      
          User Control and Consent

              Users have control over their data and can manage privacy settings or opt-out of certain data processing.
              Your continued use of the platform implies consent to the outlined data practices.
      
          Policy Updates

              We reserve the right to update or modify this Data Policy. Any significant changes will be communicated to users through appropriate channels.
      
      Our commitment is to maintain the integrity and security of your data while ensuring a personalized and enjoyable experience on our platform.`,
    },
  ];

  const handleButtonClick = (buttonId) => {
    setSelectedButton(selectedButton === buttonId ? null : buttonId);
  };

  return (
    <div className="info-center">
      {buttonData.map((button) => (
        <div key={button.id} className="info-button-container">
          <button
            className="info-button"
            onClick={() => handleButtonClick(button.id)}
          >
            <div className="button-title">{button.title}</div>
          </button>
          <div className={selectedButton === button.id ? "info-menu show" : "info-menu"}>
            <div className="menu-content">
              <h2>{button.title}</h2>
              <p>{button.content}</p>
              <button className="close-button" onClick={() => setSelectedButton(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoCenter;
