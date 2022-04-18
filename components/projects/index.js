import React from "react";

export default function index() {
  //TODO create a function to create two columns of cards with one array and not two seperate ones
  return (
    <div className="grid md:grid-cols-2 gap-10 mb-20 mt-10">
      {/* column 1 */}
      <div className="flex flex-col space-y-8 mt-10">
        {projectsLeft.map((project, index) => {
          return <a key={index}>{projectCard(project.image)}</a>;
        })}
      </div>

      {/* column 2 */}
      <div className="flex flex-col space-y-8">
        {projectsRight.map((project, index) => {
          return <a key={index}>{projectCard(project.image)}</a>;
        })}
      </div>
    </div>
  );
}

const projectCard = (image) => {
  return (
    <div className="rounded-3xl w-full h-ful overflow-hidden bg-light-grey">
      <img className="w-full h-full" src={image} />
    </div>
  );
};

// placeholder project cards

const projectsLeft = [
  {
    image:
      "https://placehold.jp/30/dd6699/ffffff/600x600.png?text=placeholder+image",
    title: "Project 1",
  },
  {
    image:
      "https://placehold.jp/30/ffcc00/ffffff/600x600.png?text=placeholder+image",
    title: "Project 2",
  },
];
const projectsRight = [
  {
    image:
      "https://placehold.jp/30/9873ff/ffffff/600x600.png?text=placeholder+image",
    title: "Project 3",
  },
  {
    image:
      "https://placehold.jp/30/ff763c/ffffff/600x600.png?text=placeholder+image",
    title: "Project 4",
  },
];
