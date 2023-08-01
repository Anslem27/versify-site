import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="46"
      height="29"
      viewBox="0 0 46 29"
      ref={ref}
      {...props}
    >
      <defs>
        {/* menu path */}
        <clipPath id={clipId}>
          <path d="M14 6H32C32.55 6 33 6.45 33 7C33 7.55 32.55 8 32 8H14C13.45 8 13 7.55 13 7C13 6.45 13.45 6 14 6ZM14 13H32C32.55 13 33 13.45 33 14C33 14.55 32.55 15 32 15H14C13.45 15 13 14.55 13 14C13 13.45 13.45 13 14 13ZM14 20H32C32.55 20 33 20.45 33 21C33 21.55 32.55 22 32 22H14C13.45 22 13 21.55 13 21C13 20.45 13.45 20 14 20Z" />
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});

