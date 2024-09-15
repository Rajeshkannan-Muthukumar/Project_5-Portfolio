import mapify from "../../../src/assets/Mapify.png"
import ProjectCard from "../../common/ProjectCard";
import styles from "./ProjectsStyles.module.css";
import malaria from"../../assets/Malaria.png";
function Projects() {
  return <section id='projects' className={styles.container}> 
    <h1 className="sectionTitle">Projects</h1>
    <div className={styles.projectsContainer}>
    <ProjectCard src={mapify} 
    link= "https://rajeshkannan-muthukumar.github.io/Project_4-Mapify/"
    h3="Mapify"
    p="Alarm App">
    </ProjectCard>
    <ProjectCard src={malaria} 
    link= "https://github.com/Rajeshkannan-Muthukumar/Project_6-Malaria-cell-recognition"
    h3="Malarial Cell Recognition"
    p="Image Classifier Model">
    </ProjectCard>
    </div>
  </section>
}

export default Projects;