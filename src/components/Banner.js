import styles from "./banner.module.css" ;
import SkillCard from './SkillCard';

const Banner = ({ skills, speed = 5000 }) => {
  return (
    <div className={styles.inner}>
      <div className={styles.wrapper}>
        <section className={styles.animatedSkills}>
        {
          skills.map(skill=>(
            <SkillCard key={skill.skill} skill={skill}></SkillCard>
          ))
          
        }
        {
          skills.map(skill=>(
            <SkillCard key={skill.skill} skill={skill}></SkillCard>
          ))
        }
        </section>
        {/* <section className={styles.animatedSkills}>
        {
          skills.map(skill=>(
            <SkillCard key={skill.skill} skill={skill}></SkillCard>
          ))
        }
        </section> */}
        {/* <section className={styles.section}>
          {images.map(({ id, image }) => (
            <div className="image" key={id}>
              <img src={image} alt={id} />
            </div>
          ))}
        </section> */}
        {/* <section >
          {images.map(({ id, image }) => (
            <div className="image" key={id}>
              <img src={image} alt={id} />
            </div>
          ))}
        </section> */}
        {/* <section style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className="image" key={id}>
              <img src={image} alt={id} />
            </div>
          ))}
        </section> */}
      </div>
    </div>
  );
};

export { Banner };
