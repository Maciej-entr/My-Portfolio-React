import { useParams, Link } from "react-router-dom";
import { projectsDetails } from "../../assets/data/data";

export const PortfolioDetails = () => {
  const { id } = useParams(); // Get the project ID from the URL
  const projectIndex = projectsDetails.findIndex((project) => project.id === parseInt(id)); // Find the index of the current project
  const project = projectsDetails[projectIndex]; // Get the current project

  if (!project) {
    return <p>Project not found!</p>; // Handle case where project is not found
  }

  // Calculate previous and next project indices
  const prevProjectIndex = (projectIndex - 1 + projectsDetails.length) % projectsDetails.length;
  const nextProjectIndex = (projectIndex + 1) % projectsDetails.length;

  const prevProject = projectsDetails[prevProjectIndex];
  const nextProject = projectsDetails[nextProjectIndex];

  return (
    <div className="popup_content_area">
      <div className="popup_modal_img">
        <img src={project.cover} alt={project.title} />
      </div>

      <div className="popup_modal_content">
        <div className="container">
          <div className="portfolio_info">
            <div className="portfolio_info_text">
              <h2 className="title">{project.title}</h2>
              <div className="desc">
                <p>{project.description}</p>
              </div>
              <a href={project.link} className="btn tj-btn-primary">
                live preview <i className="fal fa-arrow-right"></i>
              </a>
            </div>
            <div className="portfolio_info_items">
              <div className="info_item">
                <div className="key">Category</div>
                <div className="value">{project.category}</div>
              </div>
              <div className="info_item">
                <div className="key">Client</div>
                <div className="value">{project.client}</div>
              </div>
              <div className="info_item">
                <div className="key">Start Date</div>
                <div className="value">{project.startDate}</div>
              </div>
              <div className="info_item">
                <div className="key">Designer</div>
                <div className="value">
                  <a href="#">{project.designer}</a>
                </div>
              </div>
            </div>
          </div>

          <div className="portfolio_gallery grid2">
            {project.images.map((image, index) => (
              <div className="gallery_item" key={index}>
                <img src={image} alt="" />
              </div>
            ))}
          </div>

          <div className="portfolio_description">
            <h2 className="title">Project Description</h2>
            <div className="desc">
              <p>{project.description}</p>
              <br />
              <p>{project.description2}</p>
            </div>
          </div>

          <div className="portfolio_story_approach">
            <div className="portfolio_story">
              <div className="story_title">
                <h4 className="title">The story</h4>
              </div>
              <div className="story_content">
                <p>{project.story}</p>
              </div>
            </div>
            <div className="portfolio_approach">
              <div className="approach_title">
                <h4 className="title">The approach</h4>
              </div>
              <div className="approach_content">
                <p>{project.approach}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio_navigation">
          <div className="navigation_item prev-project">
            <Link to={`/details/${prevProject.id}`} className="project">
              <i className="fal fa-arrow-left"></i>
              <div className="nav_project">
                <div className="label">Previous Project</div>
              </div>
            </Link>
          </div>

          <div className="navigation_item next-project">
            <Link to={`/details/${nextProject.id}`} className="project">
              <div className="nav_project">
                <div className="label">Next Project</div>
              </div>
              <i className="fal fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};