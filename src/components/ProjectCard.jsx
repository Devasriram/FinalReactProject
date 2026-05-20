function ProjectCard({ project, onDelete }) {
  return (
    <div className="card">
      <h3>{project}</h3>

      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default ProjectCard;