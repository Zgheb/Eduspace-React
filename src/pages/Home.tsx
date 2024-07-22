import { FunctionComponent } from "react";
import styles from "./Home.module.css";

const Home: FunctionComponent = () => {
  return (
    <div className={styles.home}>
      <div className={styles.homeChild} />
      <div className={styles.bar}>
        <b className={styles.contact}>contact</b>
        <b className={styles.home1}>Home</b>
        <b className={styles.login}>Login</b>
        <b className={styles.joinUs}>Join us</b>
        <b className={styles.about}>About</b>
        <b className={styles.courses}>courses</b>
      </div>
      <div className={styles.kStudentsTrustUsParent}>
        <b className={styles.kStudentsTrustContainer}>
          <p className={styles.kStudents}>20k+ Students</p>
          <p className={styles.kStudents}>trust us</p>
        </b>
        <div className={styles.ourGoalIs}>
          our goal is to make online education work for everyone.
        </div>
        <div className={styles.groupChild} />
        <div className={styles.learnMore}>Learn More</div>
        <div className={styles.groupItem} />
        <div className={styles.getQuoteNow}>Get Quote Now</div>
      </div>
      <div className={styles.readOthersSay}>
        <div className={styles.readOthersSayChild} />
        <div className={styles.hadil}>
          <div className={styles.hadilChild} />
          <img className={styles.hadilItem} alt="" src="/ellipse-1@2x.png" />
          <div className={styles.zghabHadil}>Zghab hadil</div>
        </div>
        <b className={styles.whyPeopleChoose}>
          Why people choose eduspace for their career
        </b>
        <div className={styles.hadil2}>
          <div className={styles.hadilChild} />
          <img className={styles.hadilItem} alt="" src="/ellipse-11@2x.png" />
          <div className={styles.zghabHadil}>Zghab hadil</div>
          <div className={styles.iDirectlyApplied}>
            "I directly applied the concepts and skills I learned from my
            Eduspace to an exciting new project at work."
          </div>
        </div>
        <div className={styles.hadil3}>
          <div className={styles.hadilChild} />
          <img className={styles.hadilItem} alt="" src="/ellipse-12@2x.png" />
          <div className={styles.zghabHadil2}>Zghab hadil</div>
          <div className={styles.iDirectlyApplied1}>
            "I directly applied the concepts and skills I learned from my
            Eduspace to an exciting new project at work."
          </div>
        </div>
      </div>
      <div className={styles.readOthersSay1}>
        <div className={styles.readOthersSayItem} />
        <img
          className={styles.pageHeadingIcon}
          alt=""
          src="/page-heading.svg"
        />
        <b className={styles.seeWhatYou}>
          See what you can learn with Eduspace
        </b>
        <div className={styles.course}>
          <div className={styles.angular}>Angular</div>
          <div className={styles.div}>{`$5.99 `}</div>
          <img className={styles.img1Icon} alt="" src="/img1@2x.png" />
        </div>
        <div className={styles.course}>
          <div className={styles.angular}>Angular</div>
          <div className={styles.div}>Beginner:course</div>
          <img className={styles.img1Icon} alt="" src="/img11@2x.png" />
        </div>
        <div className={styles.course2}>
          <div className={styles.angular}>Python</div>
          <div className={styles.div}>Beginner:course</div>
          <img className={styles.img1Icon} alt="" src="/img12@2x.png" />
        </div>
        <div className={styles.course3}>
          <div className={styles.angular}>Generative AI</div>
          <div className={styles.div}>Beginner:Professional Certificate</div>
          <img className={styles.img1Icon} alt="" src="/img13@2x.png" />
        </div>
      </div>
      <div className={styles.learnerSince2020}>Learner since 2020</div>
      <div className={styles.iDirectlyApplied2}>
        "I directly applied the concepts and skills I learned from my Eduspace
        to an exciting new project at work."
      </div>
      <img className={styles.homeItem} alt="" src="/rectangle-6.svg" />
      <img className={styles.socialMediaIcon} alt="" src="/social-media.svg" />
      <b className={styles.eduspace}>Eduspace</b>
      <div className={styles.communityLearnersPartnersContainer}>
        <p className={styles.community}>COMMUNITY</p>
        <p className={styles.kStudents}>learners</p>
        <p className={styles.kStudents}>partners</p>
      </div>
      <div className={styles.resourcesAboutWhatContainer}>
        <p className={styles.community}>Resources</p>
        <p className={styles.kStudents}>about</p>
        <p className={styles.kStudents}>what we offer</p>
        <p className={styles.kStudents}>certificates</p>
      </div>
      <img className={styles.homeInner} alt="" src="/rectangle-7@2x.png" />
      <img className={styles.rectangleIcon} alt="" src="/rectangle-8@2x.png" />
    </div>
  );
};

export default Home;
