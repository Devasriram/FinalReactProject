import { useState } from "react";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const [projects, setProjects] = useState([
    "Portfolio Website",
    "E-Commerce App",
    "Food Delivery App",
  ]);

  const [newProject, setNewProject] = useState("");

  const addProject = () => {
    if (newProject.trim() !== "") {
      setProjects([...projects, newProject]);
      setNewProject("");
    }
  };

  const deleteProject = (index) => {
    const updatedProjects = projects.filter(
      (_, i) => i !== index
    );

    setProjects(updatedProjects);
  };

  return (
    <div className="page">
      <h1>Projects</h1>

      <div className="project-input">
        <input
          type="text"
          placeholder="Add New Project"
          value={newProject}
          onChange={(e) => setNewProject(e.target.value)}
        />

        <button onClick={addProject}>Add</button>
      </div>

      <div className="grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onDelete={() => deleteProject(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;