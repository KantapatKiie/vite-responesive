import { memo, useEffect, useState } from "react";
import type { FC } from "react";

import resets from "../_resets.module.css";
import classes from "./Desktop.module.css";
import { Path45CopyIcon } from "./Path45CopyIcon.js";
import { Path45Icon } from "./Path45Icon.js";
import { Rectangle34CopyIcon } from "./Rectangle34CopyIcon.js";
import { Rectangle34Icon2 } from "./Rectangle34Icon2.js";
import { Rectangle34Icon } from "./Rectangle34Icon.js";
import { DotPaginationIcon2 } from "./DotPaginationIcon2";
import { ZIcon } from "./ZIcon";
import { Footballer } from "./Footballer/Footballer";
import { Path45Icon2 } from "./Path45Icon2";
import { Rectangle34Copy3Icon } from "./Rectangle34Copy3Icon";
import { Rectangle34Copy2Icon } from "./Rectangle34Copy2Icon";
import { DotPaginationIcon } from "./DotPaginationIcon";
import classes2 from "./Mobile.module.css";

interface Props {
  className?: string;
}
/* @figmaId 1:408 */
export const Desktop: FC<Props> = memo(function Desktop(props = {}) {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    setMobile(window.innerWidth < 320 ? true : false);
  }, []);
  addEventListener("resize", (event) => {
    setMobile(window.innerWidth < 320 ? true : false);
  });
  return (
    <>
      {mobile ? (
        <div className={`${resets.clapyResets} ${classes2.root}`}>
          <div className={classes2.players}>
            <div className={classes2.bg}></div>
            <div className={classes2.dotPagination}>
              <DotPaginationIcon className={classes2.icon} />
            </div>
            <div className={classes2.saveYourTimeRecr}>
              Save your time, recruit proper athlets for your team.
            </div>
            <div className={classes2.gROWTH}>GROWTH</div>
            <div className={classes2.underline}></div>
            <div className={classes2._3}>03</div>
            <div className={classes2.graphicMobile}>
              <div className={classes2.rectangle34Copy2}>
                <Rectangle34Copy2Icon className={classes2.icon2} />
              </div>
              <div className={classes2.rectangle34Copy3}>
                <Rectangle34Copy3Icon className={classes2.icon3} />
              </div>
              <div className={classes2.path45}>
                <Path45Icon className={classes2.icon4} />
              </div>
              <div className={classes2.path45Copy}>
                <Path45CopyIcon className={classes2.icon5} />
              </div>
              <div className={classes2.basketball}></div>
              <div className={classes2.z}>
                <ZIcon className={classes2.icon6} />
              </div>
            </div>
            <div className={classes2.pLAYERS}>PLAYERS</div>
          </div>
          <div className={classes2.athlets}>
            <div className={classes2.bg2}></div>
            <div className={classes2.dotPagination2}>
              <DotPaginationIcon2 className={classes2.icon7} />
            </div>
            <div className={classes2.textContainer}>
              <div className={classes2.workWithOtherStud}>
                Work with other student athletes to increase visability. When
                you share and like other players videos it will increase your
                visability as a player. This is the team work aspect to Surface
                1.
              </div>
              <div className={classes2.title}>
                <div className={classes2.collaboration}>COLLABORATION</div>
                <div className={classes2.number}>
                  <div className={classes2.underline2}></div>
                  <div className={classes2._2}>02</div>
                </div>
              </div>
            </div>
            <div className={classes2.graphicMobile2}>
              <div className={classes2.path452}>
                <Path45Icon2 className={classes2.icon8} />
              </div>
              <Footballer />
              <div className={classes2.rectangle34}>
                <Rectangle34Icon className={classes2.icon9} />
              </div>
              <div className={classes2.rectangle34Copy}>
                <Rectangle34CopyIcon className={classes2.icon10} />
              </div>
            </div>
            <div className={classes2.aTHLETS}>ATHLETS</div>
          </div>
        </div>
      ) : (
        <div className={`${resets.clapyResets} ${classes.root}`}>
          <div className={classes.players}>
            <div className={classes.text3}>
              <div className={classes.bg3}></div>
              <div className={classes.textContainer}>
                <div className={classes.saveYourTimeRecr}>
                  Save your time, recruit proper athlets for your team.
                </div>
                <div className={classes.title}>
                  <div className={classes.gROWTH}>GROWTH</div>
                  <div className={classes.number}>
                    <div className={classes.underline}></div>
                    <div className={classes._3}>03</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.text2}>
              <div className={classes.bg2}></div>
              <div className={classes.textContainer2}>
                <div className={classes.workWithRecruiter}>
                  <div className={classes.textBlock}>
                    Work with recruiter to increase your chances of finding
                  </div>
                  <div className={classes.textBlock2}>talented athlete.</div>
                </div>
                <div className={classes.title2}>
                  <div className={classes.collaborationCopy}>COLLABORATION</div>
                  <div className={classes.number2}>
                    <div className={classes.underline2}></div>
                    <div className={classes._2}>02</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.text1}>
              <div className={classes.bg1}></div>
              <div className={classes.textContainer3}>
                <div className={classes.connectWithTalente}>
                  <div className={classes.textBlock3}>
                    Connect with talented athlete directly, you can watch their{" "}
                  </div>
                  <div className={classes.textBlock4}>
                    skills through video showreels directly from Surface 1.
                  </div>
                </div>
                <div className={classes.title3}>
                  <div className={classes.cONNECTION}>CONNECTION</div>
                  <div className={classes.number3}>
                    <div className={classes.underline3}></div>
                    <div className={classes._1}>
                      <p className={classes.labelWrapper}>
                        <span className={classes.label}>0</span>
                        <span className={classes.label2}>1</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.pLAYERS}>PLAYERS</div>
            <div className={classes.graphicDesktop}>
              <div className={classes.path45}>
                <Path45Icon className={classes.icon} />
              </div>
              <div className={classes.path45Copy}>
                <Path45CopyIcon className={classes.icon2} />
              </div>
              <div className={classes.rectangle34}>
                <Rectangle34Icon className={classes.icon3} />
              </div>
              <div className={classes.rectangle34Copy}>
                <Rectangle34CopyIcon className={classes.icon4} />
              </div>
              <div className={classes.rectangle342}>
                <Rectangle34Icon2 className={classes.icon5} />
              </div>
              <div className={classes.basketball}></div>
            </div>
          </div>
          <div className={classes.athlets}>
            <div className={classes.text32}>
              <div className={classes.bg32}></div>
              <div className={classes.textContainer4}>
                <div className={classes.resourcesAndTools}>
                  <div className={classes.textBlock5}>
                    Resources and tools for you to get better as a student
                    Athelte.{" "}
                  </div>
                  <div className={classes.textBlock6}>
                    Access to training classes, tutor sessions, etc 
                  </div>
                </div>
                <div className={classes.title4}>
                  <div className={classes.growth}>GROWTH</div>
                  <div className={classes.number4}>
                    <div className={classes.underline4}></div>
                    <div className={classes._32}>03</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.text22}>
              <div className={classes.bg22}></div>
              <div className={classes.textContainer5}>
                <div className={classes.workWithOtherStud}>
                  Work with other student athletes to  increase visability. When
                  you share and like other players videos it will increase your
                  visability as a player. This is the team work aspect to
                  Surface 1.
                </div>
                <div className={classes.title5}>
                  <div className={classes.collaboration}>COLLABORATION</div>
                  <div className={classes.number5}>
                    <div className={classes.underline5}></div>
                    <div className={classes._22}>02</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.text12}>
              <div className={classes.bg12}></div>
              <div className={classes.textContainer6}>
                <div className={classes.connectWithCoaches}>
                  Connect with coaches directly, you can ping coaches to view
                  profile.
                </div>
                <div className={classes.title6}>
                  <div className={classes.connection}>CONNECTION</div>
                  <div className={classes.number6}>
                    <div className={classes.underline6}></div>
                    <div className={classes._12}>
                      <p className={classes.labelWrapper2}>
                        <span className={classes.label3}>01</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.aTHLETS}>ATHLETS</div>
            <div className={classes.graphicDesktop2}>
              <div className={classes.path46}>
                <Path45Icon className={classes.icon} />
              </div>
              <div className={classes.rectangle3423}>
                <Rectangle34Icon2 className={classes.icon5} />
              </div>
              <div className={classes.football1}></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
});
