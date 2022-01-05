import styles from "./app.module.css";


function App() {
  return (
    <main>
      <header className={styles.header}>
        <img className={styles.header_img} src={require("./favicon.jpg")} alt="/" />
        <span className={styles.header_span}>Bussiniss Card Maker</span>
      </header>
      <section className={styles.login}>
        <span className={styles.login_span}>Login</span>
        <div className={styles.login_SSO}>
          <div className={styles.login_google}>
            Google
          </div>
          <div className={styles.login_github}>
            Github
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <span className={styles.footer_span}>Create your dream</span>
      </footer>
    </main>
  )
}

export default App;
