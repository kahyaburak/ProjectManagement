import {useState} from 'react';

import NewProject from './components/NewProject';
import NoProjectsSelected from './components/NoProjectsSelected';
import ProjectsSidebar from './components/ProjectsSideBar';

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [
      {
        projectName: undefined,
        projectDate: undefined,
        projectGoal: undefined,
        projectId: undefined,
      },
    ],
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {...prevState, selectedProjectId: null};
    });
  }

  let content;
  if (projectsState.selectedProjectId === null) {
    content = <NewProject />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = (
      <NoProjectsSelected
        onStartAddProject={handleStartAddProject}></NoProjectsSelected>
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
