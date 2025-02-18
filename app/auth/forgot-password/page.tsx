import styles from '@/app/ui/form.module.css';
import Link from 'next/link';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

export default function Page() {
  return (
    <div className={styles.authContainer}>
      <div className={styles.logoWrapper}>
        <InformationCircleIcon className={styles.icon} />
      </div>

      <h2 className={styles.formTitleSmall}>Forgot Password</h2>
      <p className={styles.formSubtitleSmall}>
        Enter your phone number and you can get a link for a new password
      </p>
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
              placeholder="Phone number"
            />
          </div>
          <div className={styles.buttonWrapper}>
            <button className={styles.submitButton} type="submit">
              SUBMIT
            </button>
          </div>
        </form>
        <div className={styles.formFooter}>
          <Link href="#" className={styles.formFooterLink}>
            Back To Log in Page
          </Link>
        </div>
      </div>
    </div>
  );
}
