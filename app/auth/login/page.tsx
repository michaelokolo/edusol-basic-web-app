import styles from '@/app/ui/form.module.css';

export default function Page() {
  return (
    <div className={styles.authContainer}>
      <div className={styles.logoContainer}>
        <img alt="company logo" src="/logo.png" className={styles.logo} />
      </div>

      <h2 className={styles.formHeader}>Login</h2>
      <p>To stay connected with us</p>
      <div>
        <form action="#" method="POST" className={styles.formWrapper}>
          <div>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
            />
          </div>
          <div>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
            />
          </div>
          <div className={styles.btnContainer}>
            <button className={styles.btn} type="submit">LOG IN</button>
          </div>
        </form>
      </div>
    </div>
  );
}
