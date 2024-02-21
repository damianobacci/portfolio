import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <main>
      <h1 className="title">ABOUT</h1>
      <p>This is my story.</p>
      <h2>Work</h2>
      <div className={styles.work}>
        <div className={styles.date}>Date of work</div>
        <div className={styles.details}>
          <p>Data journalist</p>
          <a href="/">Acaps</a>
          <p>
            Description of the job. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Reprehenderit totam quos pariatur sequi, sapiente
            eius quod corrupti nesciunt exercitationem qui repellat repudiandae,
            nihil accusamus labore fugit deserunt rem ipsum aut!
          </p>
        </div>
      </div>
    </main>
  );
}
