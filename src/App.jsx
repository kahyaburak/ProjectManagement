import NewProject from './components/NewProject';
import NoProjectsSelected from './components/NoProjectsSelected';
import ProjectsSidebar from './components/ProjectsSideBar';

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar />
      <NoProjectsSelected />
    </main>
  );
}

export default App;
