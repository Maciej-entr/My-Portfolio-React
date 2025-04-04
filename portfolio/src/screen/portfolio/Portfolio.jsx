import { NavLink } from "react-router-dom";
import { projects } from "../../assets/data/data";
import { GoArrowUpRight } from "react-icons/go";

export const Portfolio = () => {
  return (
    <>
      <section id="portfolio" className="portfolio-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">My Recent Works</h2>
            <p>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
          </div>

          <div className="portfolio-box">
            <div className="grid2">
              {projects.map((project) => (
                <div className="portfolio-item branding" key={project.id}>
                  <NavLink to={`/details/${project.id}`}>
                    <div className="image-box">
                      <img src={project.cover} alt="" />
                    </div>
                  </NavLink>
                  <div className="content-box">
                    <NavLink to={`/details/${project.id}`}>
                      <h3 className="portfolio-title">{project.title}</h3>
                    </NavLink>
                    <p>{project.desc}</p>
                    <i>
                      <GoArrowUpRight size={50} />
                    </i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};