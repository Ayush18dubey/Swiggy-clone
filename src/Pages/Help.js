import { useState } from "react";
import "./../Style/help.css";

const Help = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIssue = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const issues = [
    {
      category: "Order Issues",
      items: [
        { title: "My order is delayed", content: "Sometimes orders get delayed due to traffic or restaurant load." },
        { title: "I received the wrong order", content: "Please raise a complaint in the order details page." },
        { title: "Items are missing in my order", content: "Missing items are refunded within 24 hours." },
      ],
    },
    {
      category: "Payments & Refunds",
      items: [
        { title: "Refund status", content: "Refunds take 5-7 business days depending on your bank." },
        { title: "Payment not going through", content: "Try another payment method or check your internet connection." },
        { title: "Applied coupon not working", content: "Coupons may be expired or not valid for selected items." },
      ],
    },
    {
      category: "Account & App",
      items: [
        { title: "Can't login to my account", content: "Reset your password using the 'Forgot Password' option." },
        { title: "Need to update phone number", content: "Go to Profile > Edit to update your phone number." },
        { title: "App not working properly", content: "Try reinstalling the app or clear cache." },
      ],
    },
  ];

  return (
    <div className="help">
      <h1 className="help__title">Help & Support</h1>
      <p className="help__subtitle">Let's take a step ahead and help you better.</p>

      <div className="help__sections">
        {issues.map((section, sIndex) => (
          <div key={sIndex} className="help__section">
            <h2>{section.category}</h2>
            <ul>
              {section.items.map((item, iIndex) => (
                <li key={iIndex} onClick={() => toggleIssue(`${sIndex}-${iIndex}`)}>
                  <span>{item.title}</span>
                  {activeIndex === `${sIndex}-${iIndex}` && (
                    <div className="help__content">{item.content}</div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Help;
