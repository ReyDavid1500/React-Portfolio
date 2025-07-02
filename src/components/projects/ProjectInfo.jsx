const ProjectInfo = ({ data }) => {
  return (
    <>
    <div className="block sm:flex gap-0 sm:gap-10 mt-14">
      <div className="w-full sm:w-1/3 text-left">
        {/* Single project client details */}
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
            {data.ProjectInfo.ClientHeading}
          </p>
          <ul className="leading-loose">
            {data.ProjectInfo.Links.map((info) => {
              return (
                <li
                  className="font-general-regular text-ternary-dark dark:text-ternary-light"
                  key={info.id}
                >
                  <a
                    className="hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300"
                    href={info.href}
					target="_blank"
                  >
                    {info.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Single project objectives */}
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            {data.ProjectInfo.ObjectivesHeading}
          </p>
          <p className="font-general-regular text-primary-dark dark:text-ternary-light">
            {data.ProjectInfo.ObjectivesDetails}
          </p>
        </div>

        {/* Single project technologies */}
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            {data.ProjectInfo.Technologies[0].title}
          </p>
          <p className="font-general-regular text-primary-dark dark:text-ternary-light">
            {data.ProjectInfo.Technologies[0].techs.join(", ")}
          </p>
        </div>
      </div>

      {/*  Single project right section */}
      <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
        <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
          {data.ProjectInfo.ProjectDetailsHeading}
        </p>
        {data.ProjectInfo.ProjectDetails.map((details) => {
          return (
            <p
              key={details.id}
              className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
            >
              {details.details}
            </p>
          );
        })}
      </div>
    </div>
    <div className="mt-10 text-left">
      <a
        href="/projects"
        className="font-general-regular text-lg text-ternary-dark dark:text-ternary-light hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300 flex items-center gap-2"
      >
        ← Back to Projects
      </a>
    </div>
    </>
  );
};

export default ProjectInfo;
