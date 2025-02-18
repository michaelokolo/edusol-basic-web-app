import styles from '@/app/ui/form.module.css';

export default function Page() {
  return (
    <div className={styles.authContainer}>
      <div className={styles.logoWrapper}>
        <img alt="company logo" src="/logo.png" className={styles.logo} />
      </div>

      <h2 className={styles.formTitle}>Login</h2>
      <p className={styles.formSubtitle}>To stay connected with us</p>
      <div className={styles.formContainer}>
        <form action="#" method="POST" className={styles.form}>
          <div className={styles.inputGroup}>
            <input
              id="phone"
              name="phone"
              type="phone"
              required
              autoComplete="phone"
              className={styles.inputField}
              placeholder="Phone number / Username"
            />
          </div>
          <div className={styles.inputGroup}>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="password"
              className={styles.inputField}
              placeholder="Password"
            />
          </div>
          <div className={styles.buttonWrapper}>
            <button className={styles.submitButton} type="submit">
              LOG IN
            </button>
          </div>
        </form>
        <div className={styles.formFooter}>
          <p className={styles.formFooterText}>Forgot password?</p>
        </div>
      </div>
    </div>
  );
}
