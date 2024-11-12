import React from "react";

const AboutClientSingle = ({ title, desc, href, icon, id }) => {
  return (
    <div className="relative w-64 py-5 px-10 border bg-secondary-light border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer group hover:border-blue-500 hover:shadow-md">
		<img className={id > 5 ? "w-[132px]" : ""} src={icon}/>
      <div className="card-details text-black grid place-content-center gap-4">
        <p className="text-center font-medium mb-2">{title}</p>
        <p className="text-sm font-normal mb-4">
          {desc}
        </p>
      </div>
      <a target="_blank" rel="noreferrer" href={href} className="card-button text-center absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-3/5 rounded-md border-none bg-blue-500 text-white text-sm font-medium p-2 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100">
        See certificate
      </a>
    </div>
  );
};

export default AboutClientSingle;