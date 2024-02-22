import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <main>
      <h1 className="title">ABOUT</h1>
      <p>This is my story.</p>
      <button>Download CV</button>
      <h2>Full professional experience</h2>
      <div className={styles.work}>
        <div className={styles.date}>Date of work</div>
        <div className={styles.details}>
          <a href="/">ACAPS</a>
          <p>
            <em>Data journalist</em>
          </p>

          <p>
            Description of the job. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Reprehenderit totam quos pariatur sequi, sapiente
            eius quod corrupti nesciunt exercitationem qui repellat repudiandae.
          </p>
        </div>
      </div>
      <div className={styles.work}>
        <div className={styles.date}>Date of work</div>
        <div className={styles.details}>
          <a href="/">Dalk</a>
          <p>
            <em>Data/Content journalist</em>
          </p>

          <p>
            Description of the job. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Reprehenderit totam quos pariatur sequi, sapiente
            eius quod corrupti nesciunt exercitationem qui repellat repudiandae.
          </p>
        </div>
      </div>
    </main>
  );
}
