import { Text } from 'components/Text';
import { classes } from 'utils/style';
import styles from './Footer.module.css';
import Link from 'next/link';

export const Footer = ({ className }) => (
  <footer className={classes(styles.footer, className)}>
    <div style={{
      display: "flex",
      flexDirection: "column",
    }}>
      <Text size="s" align="center">
        <span className={styles.date}>
          {`Anslem Seguya © ${new Date().getFullYear()}`}
        </span>
      </Text>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          fontSize: "12px",
          marginTop: "5px"
        }}
      >
        <Link href="https://raw.githubusercontent.com/Anslem27/versify-site/master/src/assets/marketting/PRIVACY_POLICY.md" >
          Privacy policy
        </Link>

        <Link href="https://raw.githubusercontent.com/Anslem27/versify-site/master/src/assets/marketting/TERMS_OF_USE.md">
          Terms of use
        </Link>
      </div>
    </div>
  </footer>
);
