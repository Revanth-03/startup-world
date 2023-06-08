(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8483],
  {
    22797: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/faqs/startup",
        function () {
          return s(54605);
        },
      ]);
    },
    54605: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return o;
          },
        });
      var a = s(85893),
        i = s(67294),
        r = s(15498);
      function o() {
        let e = [
            {
              key: "sfaq1",
              title: "What kind of businesses can list on Startup Z?",
              description:
                "Startup Z is an online platform that allows startups to create profiles and connect with investors. While the platform is primarily designed for startups and early-stage companies, it is open to businesses from a wide range of industries and sectors. Any company that is seeking funding, networking, mentorship, corporate credits, business collaborations can create a profile on the platform.",
            },
            {
              key: "sfaq2",
              title: "Is there a fee to list a startup on Startup Z?",
              description:
                "Startup Z offers free and paid plans for listing startups on their platform. The free plan allows startups to create a basic profile and be listed in relevant categories.\n \n While the paid plans include several add-on features like access to market research, consultation, etc. The fees for the paid plans vary depending on the level of service selected.",
            },
            {
              key: "sfaq3",
              title:
                "How long does it take to get my business listed on Startup Z?",
              description:
                "The time it takes to get your business listed on Startup Z can vary depending on several factors, such as the completeness of your application, the verification process. In general, Startup Z aims to review and approve applications within 24 hours. However, this timeline may be longer if there are issues with the application or additional information is required. Once your application is approved, your business will be listed on the platform.",
            },
            {
              key: "sfaq4",
              title:
                "Can I update my business information after it is listed on Startup Z?",
              description: "",
            },
            {
              key: "sfaq5",
              title: "How do I remove my business from Startup Z?",
              description: "",
            },
            {
              key: "sfaq6",
              title:
                "Does Startup Z provide any support or resources for startups beyond listing services?",
              description: "",
            },
            {
              key: "sfaq7",
              title:
                "How can I maximize my business's visibility on Startup Z?",
              description: "",
            },
            {
              key: "sfaq8",
              title: "How can I determine if my startup idea is viable?",
              description: "",
            },
            {
              key: "sfaq9",
              title:
                "What resources are available for startups in terms of mentorship and guidance?",
              description:
                "Startup Z provides various resources for startups in terms of mentorship and guidance. It offers a network of experienced mentors who can provide advice and support to startups. \n\n Startup Z also provides access to events, workshops, and other resources that can help startups learn and grow.",
            },
            {
              key: "sfaq10",
              title:
                "Does Startup Z offer any funding or investment opportunities for startups?",
              description:
                "No, Startup Z does not directly offer any funding or investment opportunities for startups as of now. However, it does provide a platform for startups to showcase their businesses and potentially attract investors who may be interested in providing funding. Startup Z also offers resources and tools for startups to help them with their fundraising efforts, such as guidance on creating a pitch deck, consultation, mentorship and much more.",
            },
            {
              key: "sfaq11",
              title:
                "Is Startup Z's platform suitable for startups at all stages of development, or only certain stages?",
              description:
                "Startup Z's platform is suitable for startups at all stages of development, whether they are in the ideation stage, early-stage, growth stage, or beyond. The platform offers a range of resources, tools, and services that can be tailored to the specific needs of startups at each stage.",
            },
            {
              key: "sfaq12",
              title:
                "How does Startup Z ensure the quality of startups listed on its platform?",
              description:
                "Startup Z has a team of experienced professionals who review each startup application before approving it for listing on the platform. The team assesses various factors, including the startup's business model, product or service offering, market potential, and overall viability. Overall, Startup Z strives to maintain a high-quality standard for the startups listed on its platform.",
            },
          ],
          [t, s] = (0, i.useState)(e[0].key);
        return (0, a.jsx)(r.Z, {
          children: (0, a.jsx)("div", {
            className: "page-title mt-10 pt-10 pb-10",
            children: (0, a.jsxs)("div", {
              className: "container",
              children: [
                (0, a.jsx)("div", {
                  className: "row",
                  children: (0, a.jsx)("div", {
                    className: "col-md-12 mb-5",
                    children: (0, a.jsx)("h1", { children: "Startup FAQs" }),
                  }),
                }),
                (0, a.jsx)("div", {
                  className: "mt-lg-10 mt-sm-5",
                  children: (0, a.jsx)("div", {
                    className: "row",
                    children: (0, a.jsx)("div", {
                      className: "col-md-12",
                      children: (0, a.jsx)("div", {
                        className: "accordion mb-6",
                        id: "accordionExample",
                        children:
                          e &&
                          e.map((e, i) =>
                            (0, a.jsxs)(
                              "div",
                              {
                                className: "card mb-4",
                                children: [
                                  (0, a.jsxs)("a", {
                                    className:
                                      "card-header text-decoration-none ".concat(
                                        t === e.key ? "" : "collapsed"
                                      ),
                                    onClick: () => {
                                      s(e.key);
                                    },
                                    children: [
                                      (0, a.jsx)("span", {
                                        className: "card-icon",
                                        children: (0, a.jsx)("i", {
                                          className: "fas fa-file-alt",
                                        }),
                                      }),
                                      (0, a.jsx)("span", {
                                        className: "card-title mb-0",
                                        children: e.title || "",
                                      }),
                                      (0, a.jsx)("span", {
                                        className: "dynamic-icon",
                                      }),
                                    ],
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "collapse ".concat(
                                      t === e.key ? "show" : ""
                                    ),
                                    children: (0, a.jsx)("div", {
                                      className: "card-body border-0 w-100",
                                      children:
                                        e.description
                                          .split("\n")
                                          .map((e, t) =>
                                            (0, a.jsx)("p", { children: e }, t)
                                          ) || "",
                                    }),
                                  }),
                                ],
                              },
                              "sfaq-key-".concat(i)
                            )
                          ),
                      }),
                    }),
                  }),
                }),
              ],
            }),
          }),
        });
      }
    },
  },
  function (e) {
    e.O(0, [4885, 9832, 5498, 9774, 2888, 179], function () {
      return e((e.s = 22797));
    }),
      (_N_E = e.O());
  },
]);
