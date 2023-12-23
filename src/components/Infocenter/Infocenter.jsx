import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Infocenter() {
  const [popups, setPopups] = useState(new Array(5).fill(false));

  const openPopup = (index) => {
    const newPopups = [...popups];
    newPopups[index] = true;
    setPopups(newPopups);
  };

  const closePopup = (index) => {
    const newPopups = [...popups];
    newPopups[index] = false;
    setPopups(newPopups);
  };


  const popupContents = [
    {
      title: "Terms & Conditions",
      content: (
        <div>
        
        <p>
          These are the terms and conditions governing the use of Shards, (the Service) and the agreement that operates between us and you (the Terms). (us/our/we) and these Terms set out the rights and obligations of all users (you/your) in relation to your use of the Website.
        </p>
        <p>
          By using the Website, you are consenting to be bound by the current Terms and our Privacy Statement. We may revise the Terms and information contained on the Website at any time and without notice. If you do not agree to these Terms or the Privacy Statement, please refrain from using the Website.
        </p>
        <p>
          If you have any questions about the Terms or the Privacy Statement, please contact us through email <a href="mailto:Help@ShardsSocial.com">Help@ShardsSocial.com</a>.
        </p>
        <p><strong>Conduct of Use</strong></p>
        <ul>
          <li>You are not allowed to use this website in any way that is unlawful, abusive, threatening, harassing, obscene, libelous, hateful, or in any other way that will violate these terms and conditions.</li>
          <li>Please review our Rules and Policies which are part of our User Agreement and outline what is and isn't allowed on our Services. You may use the Services only in compliance with our Terms and all applicable laws, rules, and regulations.</li>
        </ul>
        <p><strong>Liability</strong></p>
        <ul>
          <li>The material contained within Shards is provided without any guarantees. Your usage or reliance on any Content or materials posted through our Services or obtained from them is entirely at your own risk. We do not endorse, support, represent, or guarantee the completeness, truthfulness, accuracy, or reliability of any Content or communications posted via the Services, nor do we endorse any opinions expressed through them.</li>
        </ul>
        <p><strong>Limits of Use</strong></p>
        <ul>
          <li>Please review our Rules and Policies which are part of our User Agreement and outline what is and isn't allowed on our Services. You may use the Services only in compliance with our Terms and all applicable laws, rules, and regulations.</li>
        </ul>
        <p><strong>Changes to Terms</strong></p>
        <ul>
          <li>We are committed to ensuring that our website is as useful and efficient as possible. For that reason, we reserve the right to make changes to the services, at any time. We will never charge you for any service without making it very clear to you precisely what you're paying for.</li>
          <li>You can always review the most current version of the Terms and conditions at any time on this page. We reserve the right to update, change, or retrieve any part of these Terms and Conditions by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.</li>
        </ul>
        <p><strong>Personal Information</strong></p>
        <ul>
          <li>Your submission of personal information to Shards is regulated by our Privacy Policy. You are to view our Privacy Policy.</li>
        </ul>
        <p><strong>IFRAMES</strong></p>
        <ul>
          <li>Without prior approval and written permission, you may not create frames around our web pages that alter in any way the visual presentation or appearance of our Website.</li>
        </ul>
        <p><strong>Indemnification</strong></p>
        <ul>
          <li>You agree to indemnify, protect, and hold harmless to Shards, subsidiaries, affiliates, partners, officers, directors, agents, contractors, license, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorney’s fees, made by any third party due to or arising out of your breach of these Terms and conditions or the documents they incorporate by reference or your infringement of any law or the rights of a third party.</li>
        </ul>
        <p><strong>Severability</strong></p>
        <ul>
          <li>In the event that any provision of these Terms and conditions is discovered to be unlawful, null, or unenforceable, such provision shall notwithstanding be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be viewed to be cut off from these Terms of Use, such determination shall not affect the credibility and enforceability of any other remaining provisions.</li>
        </ul>
        <p><strong>Entire Agreement</strong></p>
        <ul>
          <li>Our inability to exercise or enforce any right or provision of these Terms of Service shall not constitute a discharge of such right or provision.</li>
          <li>These Terms of Use and any policies or operating rules posted by us on this website or with respect to the Service constitute the entire agreement and understanding between you and us and govern your use of the Service, pre-empt any prior or synchronous agreements, communications, and proposals, whether oral or written, between you and us.</li>
        </ul>
        <p><strong>Contact Information</strong></p>
        <ul>
          <li>If you would like to: access, correct, register a complaint, or simply want more information please contact us:</li>
          <li>Email: <a href="mailto:Help@ShardsSocial.com">Help@ShardsSocial.com</a></li>
          <li>Web: <a href="https://legal.ShardsSocial.com/contact">https://legal.ShardsSocial.com/contact</a></li>
        </ul>
      </div>
    ),




    },
    {
      title: "Privacy Policy",
      content: (
        <div>
 <p>
          Not Created Yet
        </p>
        
        </div>
      ),
    },
    {
      title: "What do the verified badges mean?",
      content: (
        <div>
        <hr></hr>
      <p><strong>Notability Verification Badge</strong></p>
      <ul>
      <li>This verification is for people or  who have notability, 25k or more followers on Shards. 
Or 60k or more followers on other platforms (YouTube, Instagram etc.)</li>
      </ul>

      <hr></hr>
      <p><strong>Human Verification Badge</strong></p>
      <ul>
      <li>This verification can Help differentiate a Human from a bot or scammer etc, 
To receive this verification a valid phone number along with regular account activity in the past 10 days is required.</li>
      </ul>

      <hr></hr>
      <p><strong>Business/organization Verification Badge</strong></p>
      <ul>
      <li>This verification is for business and organizations, Businesses and organizations must have 1k or more followers on shards or any other platform to qualify, some exceptions may apply</li>
      <li>Business and organizations will also need to provide a public business address, Businesses and organizations can only be verified by a employee who has been verified by the company.</li>
      </ul>
      <hr></hr>
<p>
       If you think that an account has violated rules or might be a bot or fake account 
please Submit a claim at https://report.Shardssocial.com </p>

      </div>
      ),
    },
    {
      title: "Content Policies",
      content: (
        <div>
           <p>
           Shards Social is a community-driven platform for creating and sharing content. We aim to keep a safe and friendly environment for everyone. To keep our platform a safe place for everyone, we have a set of rules and guidelines for content creators and users. A comprehensive list of what is not allowed is written here.
        </p>
        <hr></hr>
        <p><strong>Violence</strong></p>
        <p> &nbsp; &nbsp; Extremely violent content is strictly prohibited. This includes, but is not limited to:</p>
        <ul>
          <li>Human organs and body parts being removed</li>
          <li>The showing of Human death or malicious animal death (talking on the subject related to news or awareness is ok)</li>
          <li>Excessive violence and/or physical harm such as a human being being shot or stabbed</li>
          <li>Animal abuse such as a dog being beaten or abused</li>
          <li>Child abuse such as a child being beaten or abused (further legal action may be taken by  our moderation team)</li>
        </ul>
<p>
&nbsp; &nbsp; If our moderation AI detects that a user has violated this rule, your video will be denied. If your video is rated extremely violent, you will not be allowed to appeal it to our human moderation team. Even if your video is not explicitly banned, we may still warn viewers that your video contains violent content.</p>


        <hr></hr>
        <p><strong>Hate Content</strong></p>
        <p> &nbsp; &nbsp;  Hate content is not allowed. This includes, but is not limited to:</p>
        <ul>
        <li>Threats of violence of any kind</li>
          <li>Extreme toxicity</li>
          <li>Slurs or extremely offensive comments</li>
        </ul>


        <hr></hr>
        <p><strong>Nudity</strong></p>
        <p> &nbsp; &nbsp;  Nudity is strictly prohibited. This includes human, animal, and drawn images of nudity. This includes, but is not limited to:</p>
        <ul>
        <li>Human genitalia</li>
          <li>Intercourse or masturbation</li>
          <li>Animal genitalia</li>
          <li>Hentai</li>
        </ul>


        <hr></hr>
        <p><strong>Drugs and alcohol</strong></p>
        <p> &nbsp; &nbsp;  The consumption, sale, and making of any drugs is strictly prohibited on Shards, posting any of the listed will result in a 3 day ban </p>
        

        <hr></hr>
        <p><strong>Exceptions</strong></p>
        <p> &nbsp; &nbsp; Videos from creators such as news channels and blogs may post violent content, if it is under the context of informing the viewer of a situation that is very likely to be violent (such as a war, or a natural disaster). </p>
        

        <hr></hr>
        <p><strong>Other</strong></p>
        <p> &nbsp; &nbsp;  We reserve the right to remove any content for any reason at any time without notice. </p>


        <hr></hr>
        <p><strong>Contact</strong></p>
        <p> &nbsp; &nbsp;  If you have any questions about our content policies, please contact us by email at Contact@Shardssocial.com </p>



        </div>
      ),
    },
    {
      title: "Getting Started as a Creator",
      content: (
        <div>
          <p>
          Not Created Yet
        </p>
        </div>
      ),
    },
  ];

  


  return (
    <div>
      <h1>Infocenter</h1>
      <div className="top-buttons">
        <button
          style={{
            width: 258,
            height: 125,
            marginBottom: '20px' // Add a 20px space below the button
          }}
          onClick={() => openPopup(0)}
        >
          Terms & Conditions
        </button>
        <button
          style={{
            width: 258,
            height: 125,
            marginBottom: '20px' // Add a 20px space below the button
          }}
          onClick={() => openPopup(1)}
        >
          Privacy Policy
        </button>
        <button
          style={{
            width: 258,
            height: 125,
            marginBottom: '20px' // Add a 20px space below the button
          }}
          onClick={() => openPopup(2)}
        >
          What do the verified badges mean?
        </button>
      </div>
      <div className="bottom-buttons">
        <button
          style={{
            width: 258,
            height: 125,
            marginBottom: '20px' // Add a 20px space below the button
          }}
          onClick={() => openPopup(3)}
        >
          Content policies
        </button>
        <button
          style={{
            width: 258,
            height: 125,
            marginBottom: '20px' // Add a 20px space below the button
          }}
          onClick={() => openPopup(4)}
        >
          Getting Started as a Creator
        </button>
      </div>

      {popups.map((isOpen, index) =>
        isOpen && (
          ReactDOM.createPortal(
            <div
              className="popup-container"
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                zIndex: 1000,
              }}
            >
              <div
                className="popup-content"
                style={{
                  position: 'absolute',
                  top: '10%',
                  left: '10%',
                  right: '10%',
                  bottom: '10%',
                  backgroundColor: '#fff',
                  padding: '20px',
                  textAlign: 'left',
                  overflow: 'auto',
                  zIndex: 1001,
                }}
              >
                <button
                  onClick={() => closePopup(index)}
                  style={{
                    backgroundColor: '#ff5733',
                    color: '#fff',
                    border: 'none',
                    padding: '10px 20px',
                    cursor: 'pointer',
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    zIndex: 1002,
                  }}
                >
                  Close
                </button>
                <h2>{popupContents[index].title}</h2>
                {popupContents[index].content}
              </div>
            </div>,
            document.body
          )
        )
      )}
    </div>
  );
}
export default Infocenter;