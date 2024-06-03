import {useState} from 'react';

import NewProject from './components/NewProject';
import NoProjectsSelected from './components/NoProjectsSelected';
import ProjectsSidebar from './components/ProjectsSideBar';

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {...prevState, selectedProjectId: null};
    });
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {...prevState, selectedProjectId: undefined};
    });
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const newProject = {...projectData, id: Math.random()};

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  let content;
  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = (
      <NoProjectsSelected
        onStartAddProject={handleStartAddProject}></NoProjectsSelected>
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
      />
      {content}
    </main>
  );
}

export default App;
