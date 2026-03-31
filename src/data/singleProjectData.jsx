export const singleProjectData = [
  {
    id: 1,
    ProjectHeader: {
      title: "Fromm Chile Web Page",
      tags: "FullStack Web Application",
    },
    ProjectInfo: {
      ClientHeading: "Links",
      Links: [
        {
          id: 2,
          title: "FrontEnd GitHub Repository",
          href: "https://github.com/Fromm-Chile/fromm-cl-prod",
        },
        {
          id: 1,
          title: "BackEnd GitHub Repository",
          href: "https://github.com/Fromm-Chile/fromm-api",
        },
        {
          id: 3,
          title: "Production Website",
          href: "https://fromm-pack.cl/",
        },
      ],
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML",
            "CSS",
            "TypeScript",
            "React.js",
            "TailwindCSS",
            "NestJS",
            "Prima ORM",
            "SQL Server",
            "Clodflare",
            "Azure",
          ],
        },
      ],
      ProjectDetailsHeading: "Description",
      ProjectDetails: [
        {
          id: 1,
          details: (
            <p>
              Fromm Chile is a subsidiary of Fromm International, a Swiss
              company renowned for its high-quality strapping solutions. Our
              website serves as a comprehensive platform, showcasing our diverse
              range of products and services, providing detailed information
              about the company, and facilitating online quotation inquiries.{" "}
              <br /> <br />
              Built using React for the frontend, the website features a modern
              and visually appealing design, ensuring a user-friendly experience
              with intuitive navigation. The responsive layout adapts seamlessly
              to different screen sizes, enhancing accessibility for all users.{" "}
              <br /> <br />
              On the backend, we utilize NestJS, which provides a robust and
              scalable architecture. Our choice of SQL Server for data
              management ensures reliable storage and efficient retrieval of
              information. Additionally, the application is deployed on Azure
              App Service, leveraging cloud capabilities for high availability
              and performance.
              <br /> <br />
              This combination of cutting-edge technologies not only optimizes
              the user experience but also positions us as a leader in the
              industry, committed to innovation and excellence.
            </p>
          ),
        },
      ],
    },
  },
  {
    id: 2,
    ProjectHeader: {
      title: "Fromm Chile Dashboard",
      tags: "FullStack Web Application",
    },
    ProjectInfo: {
      ClientHeading: "Links",
      Links: [
        {
          id: 2,
          title: "FrontEnd GitHub Repository",
          href: "https://github.com/Fromm-Chile/fromm-dashboard",
        },
        {
          id: 1,
          title: "BackEnd GitHub Repository",
          href: "https://github.com/Fromm-Chile/fromm-api",
        },
        {
          id: 3,
          title: "Demo Website",
          href: "https://fromm-dashboard.pages.dev/",
        },
      ],
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML",
            "CSS",
            "TypeScript",
            "React.js",
            "TailwindCSS",
            "NestJS",
            "Prima ORM",
            "SQL Server",
            "Clodflare",
            "Azure",
          ],
        },
      ],
      ProjectDetailsHeading: "Description",
      ProjectDetails: [
        {
          id: 1,
          details: (
            <p>
              Our web application serves as a comprehensive dashboard for
              managing the company's products, orders, and users. Designed with
              an intuitive interface, it empowers administrators to efficiently
              handle various aspects of business operations.
              <br /> <br />
              Built using React for a dynamic frontend, the application ensures
              a seamless user experience. The backend is powered by NestJS,
              providing a robust structure for handling complex business logic,
              user authentication and authorization and data management. We
              utilize SQL Server for reliable data storage and retrieval,
              ensuring that all information is easily accessible and secure.
              <br /> <br />
              Deployed on Azure App Service, our solution benefits from cloud
              scalability and high availability, enabling the business to adapt
              to changing demands effortlessly. This integration of advanced
              technologies enhances operational efficiency and positions us for
              future growth.
              <br /> <br />
              You can access the demo pannel with the fallowing credentials:{" "}
              <br /> Email: demo.user@fromm.cl <br /> password: demo2309*
            </p>
          ),
        },
      ],
    },
  },
  {
    id: 3,
    ProjectHeader: {
      title: "Weather App",
      tags: "Frontend / React Query / REST API",
    },
    ProjectInfo: {
      ClientHeading: "Links",
      Links: [
        {
          id: 1,
          title: "GitHub Repository",
          href: "https://github.com/ReyDavid1500/weather-app",
        },
        {
          id: 2,
          title: "Live Demo",
          href: "https://weather-app-3t3.pages.dev/",
        },
      ],
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "React 19",
            "TypeScript",
            "Tailwind CSS v4",
            "TanStack Query v5",
            "Axios",
            "OpenWeatherMap API",
            "Vite",
            "PapaParse",
            "Cloudflare Pages",
          ],
        },
      ],
      ProjectDetailsHeading: "Description",
      ProjectDetails: [
        {
          id: 1,
          details: (
            <p>
              A real-time weather dashboard built with React 19 and TypeScript,
              showcasing modern frontend patterns around data fetching and state
              management.
              <br />
              <br />
              The app connects to the OpenWeatherMap API to display hourly
              forecasts and a 5-day outlook for multiple cities simultaneously.
              Users can search and add any city via a client-side search powered
              by PapaParse — a CSV city dataset is parsed and filtered in the
              browser, keeping the experience instant without a backend.
              <br />
              <br />
              Data fetching is managed entirely through TanStack Query v5, with
              a 5-minute stale time and manual refresh support. All business
              logic is encapsulated in four custom hooks (
              <code>useWeatherData</code>, <code>useCitySearch</code>,{" "}
              <code>useCityTabs</code>, <code>useOnClickOutside</code>), keeping
              components clean and focused on presentation.
              <br />
              <br />
              Styled with Tailwind CSS v4 and deployed on Cloudflare Pages.
            </p>
          ),
        },
      ],
    },
  },
];
