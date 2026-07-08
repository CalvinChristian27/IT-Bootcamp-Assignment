export default function About() {
  return (
    <div className="p-10 md:px-20 md:py-15">
      <div className="md:flex items-center justify-between gap-20">
        <div className="mb-5 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-5">Find Your People. <br />Build Your Community.</h1>
          <p className="text-gray-600">
            University life is more than just lectures. It's about the people you meet and the passions you discover. Campus Club Website was built to bridge the gap between eager students and the vibrant organizations that define our community.
          </p>
        </div>
        <img src="src/assets/images/about-hero.webp" className="w-full md:h-80 md:w-auto rounded-lg shadow-md" />
      </div>
      {/* Tech Used */}
      <div className="border-t-2 border-gray-400 mt-15 items-center justify-center">
        <h2 className="flex justify-center font-bold text-2xl mt-5">
          Build With Modern Tech
        </h2>
        <p className="flex justify-center mt-3 text-gray-600">
          Modern web technologies were used to create a fast, responsive, and user-friendly experience for students.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 mt-5 justify-center gap-5 bg-white">
          {/* React */}
          <div className="border-2 border-gray-400 rounded-md py-6 px-2 w-36 md:w-80">
            <div className="w-14 h-14 rounded-full bg-gray-200 flex justify-center items-center mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 10.11c1.03 0 1.87.84 1.87 1.89c0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7c-.52-.59-1.03-1.23-1.51-1.9a23 23 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86c.27.06.57.11.88.16zm6.54-.76l.81-1.5l-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47c.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7c.52.59 1.03 1.23 1.51 1.9c.82.08 1.63.2 2.4.36c.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86c-.27-.06-.57-.11-.88-.16zm1.45-7.05c1.47.84 1.63 3.05 1.01 5.63c2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63c-1.46.84-3.45-.12-5.37-1.95c-1.92 1.83-3.91 2.79-5.38 1.95c-1.46-.84-1.62-3.05-1-5.63c-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63c1.47-.84 3.46.12 5.38 1.95c1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26c2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26c-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16c-.07-.28-.18-.57-.29-.86zm-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7c.64-.35.83-1.82.32-3.96c-.77.16-1.58.28-2.4.36c-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16c.07.28.18.57.29.86zm2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a23 23 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9"/>
              </svg>
            </div>
            <div className="flex justify-center font-bold mt-2 text-lg">
              React
            </div>
            <div className="flex text-center justify-center text-sm text-gray-600 mt-1">
              Component-based UI library
            </div>
          </div>
          {/* Vite */}
          <div className="border-2 border-gray-400 rounded-md py-6 px-2 w-36 md:w-80">
            <div className="w-14 h-14 rounded-full bg-gray-200 flex justify-center items-center mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10 4.5L16 3l-2 6.5l2-.5l-4 7v-5l-3 1z"/><path d="M15 6.5L22 5L12 22L2 5l7.741 1.5"/></g>
              </svg>
            </div>
            <div className="flex justify-center font-bold mt-2 text-lg">
              Vite
            </div>
            <div className="flex text-center justify-center text-sm text-gray-600 mt-1">
              Fast development and build tool
            </div>
          </div>
          {/* React Router */}
          <div className="border-2 border-gray-400 rounded-md py-6 px-2 w-36 md:w-80">
            <div className="w-14 h-14 rounded-full bg-gray-200 flex justify-center items-center mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                <path fill="currentColor" d="M9 21q-1.65 0-2.825-1.175T5 17V8.825Q4.125 8.5 3.563 7.738T3 6q0-1.25.875-2.125T6 3t2.125.875T9 6q0 .975-.562 1.738T7 8.825V17q0 .825.588 1.413T9 19t1.413-.587T11 17V7q0-1.65 1.175-2.825T15 3t2.825 1.175T19 7v8.175q.875.325 1.438 1.088T21 18q0 1.25-.875 2.125T18 21t-2.125-.875T15 18q0-.975.563-1.75T17 15.175V7q0-.825-.587-1.412T15 5t-1.412.588T13 7v10q0 1.65-1.175 2.825T9 21"/>
              </svg>
            </div>
            <div className="flex justify-center font-bold mt-2 text-lg">
              React Router
            </div>
            <div className="flex text-center justify-center text-sm text-gray-600 mt-1">
              Client-side page navigation
            </div>
          </div>
          {/* Tailwind CSS */}
          <div className="border-2 border-gray-400 rounded-md py-6 px-2 w-36 md:w-80">
            <div className="w-14 h-14 rounded-full bg-gray-200 flex justify-center items-center mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.31.74 1.91 1.35c.98 1 2.09 2.15 4.59 2.15c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12"/>
              </svg>
            </div>
            <div className="flex justify-center font-bold mt-2 text-lg">
              Tailwind CSS
            </div>
            <div className="flex text-center justify-center text-sm text-gray-600 mt-1">
              Utility-first styling framework
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}