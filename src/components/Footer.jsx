import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer py-12 border-y-2">
        <div>
          <span className="footer-title opacity-100">Support</span>
          <a className="link link-hover pb-2">Help Center</a>
          <a className="link link-hover pb-2 ">AirCover</a>
          <a className="link link-hover pb-2">Supporting people with disabilities</a>
          <a className="link link-hover pb-2">Cancellation options</a>
          <a className="link link-hover pb-2">Our COVID-19 Response</a>
          <a className="link link-hover">Report a neighborhood concern</a>
        </div>
        <div>
          <span className="footer-title opacity-100">Community</span>
          <a className="link link-hover pb-2">Airbnb.org: disaster relief housing</a>
          <a className="link link-hover">Combating discrimination</a>
        </div>
        <div>
          <span className="footer-title opacity-100">Hosting</span>
          <a className="link link-hover pb-2">Airbnb your home</a>
          <a className="link link-hover pb-2">AirCover for Hosts</a>
          <a className="link link-hover pb-2">Explore hosting resources</a>
          <a className="link link-hover pb-2">Visit our community forum</a>
          <a className="link link-hover pb-2">How to host responsibly</a>
          <a className="link link-hover">Airbnb-friendly apartments</a>
        </div>
        <div>
          <span className="footer-title opacity-100">Airbnb</span>
          <a className="link link-hover pb-2">Newsroom</a>
          <a className="link link-hover pb-2">Learn about new features</a>
          <a className="link link-hover pb-2">Letter from our founders</a>
          <a className="link link-hover pb-2">Careers</a>
          <a className="link link-hover pb-2">Investors</a>
          <a className="link link-hover pb-2">Gift cards</a>
        </div>
      </div>
      <div className="footer items-center py-6">
        <div className="items-center grid-flow-col">
          <p>© 2023 Airbnb, Inc.</p>
          <a className="link link-hover"> · Terms</a>
          <a className="link link-hover"> · Sitemap</a>
          <a className="link link-hover"> · Privacy</a>
          <a className="flex items-center link link-hover">
          ·  Your Privacy Choices{" "}
            <span className="pl-2">
              <svg width="26" height="12" fill="none">
                <rect
                  x="0.5"
                  y="0.5"
                  width="25"
                  height="11"
                  rx="5.5"
                  fill="#fff"
                ></rect>
                <path d="M14 1h7a5 5 0 010 10H11l3-10z" fill="#06F"></path>
                <path
                  d="M4.5 6.5l1.774 1.774a.25.25 0 00.39-.049L9.5 3.5"
                  stroke="#06F"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M16.5 3.5L19 6m0 0l2.5 2.5M19 6l2.5-2.5M19 6l-2.5 2.5"
                  stroke="#fff"
                  stroke-linecap="round"
                ></path>
                <rect
                  x="0.5"
                  y="0.5"
                  width="25"
                  height="11"
                  rx="5.5"
                  stroke="#06F"
                ></rect>
              </svg>
            </span>
          </a>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <p className="flex items-center font-semibold">
            <span className="pr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{display: "block", height: "16px", width: "16px", fill: "currentcolor"}}
              >
                <path d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 5.5H8c.68 0 1.72-2.37 1.93-5.23zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 9zm-9.67 0H1.8a6.26 6.26 0 0 0 3.94 5.08 12.59 12.59 0 0 1-1.16-4.7l-.03-.38zm1.2-6.58-.12.05a6.26 6.26 0 0 0-3.83 5.03h2.75c.09-1.83.48-3.54 1.06-4.81zm2.25-.42c-.7 0-1.78 2.51-1.94 5.5h3.9c-.15-2.9-1.18-5.34-1.89-5.5h-.07zm2.28.43.03.05a12.95 12.95 0 0 1 1.15 5.02h2.75a6.28 6.28 0 0 0-3.93-5.07z"></path>
              </svg>
            </span>
            English (US)
          </p>
          <p className="font-semibold">$ USD</p>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="16"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="16"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="16"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
