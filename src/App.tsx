import Joyride from "react-joyride";
import type { Step } from "react-joyride";
import { useState } from "react";

function App() {
  const [run, setRun] = useState(true);

  const steps: Step[] = [
    {
      target: ".step-one",
      content: "This is the first step!",
    },
    {
      target: ".step-two",
      content: "This is the second step!",
    },
    {
      target: ".step-three",
      content: "This is the third step!",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-x-auto overflow-y-scroll">
      <nav className="sticky top-0 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold">My App</h2>
      </nav>
      <div className="p-5">
        <Joyride
          steps={steps}
          run={run}
          continuous
          showProgress
          showSkipButton
          callback={({ status }) => {
            if (status === "finished" || status === "skipped") {
              setRun(false);
            }
          }}
        />
        <h1 className="step-one text-2xl font-bold">Welcome to the tour!</h1>
        <p>Here is some content on the page.</p>
        <button className="step-two mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Click me
        </button>
        <div className="step-three mt-12 border border-black p-4">
          <h2 className="text-xl font-bold">Another section</h2>
          <p>With more content.</p>
        </div>
        <div style={{ height: "200vh" }}>
          <p>Scroll down to see more content.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
