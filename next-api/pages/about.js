import styles from "../styles/About.module.css";
import stylesscss from "../styles/About.module.scss";

export default function AboutPage() {
  return (
    <>
      <div className={styles.highlight}>About Page</div>
      <div className={stylesscss.highlightscss}>About Page</div>
      <button className="btn btn-primary">button</button>
    </>
  );
}
