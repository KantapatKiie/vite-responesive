import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Footballer.module.css';
import { FootballerIcon } from './FootballerIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 1:319 */
export const Footballer: FC<Props> = memo(function Footballer(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.footballer}>
        <FootballerIcon className={classes.icon} />
      </div>
    </div>
  );
});
