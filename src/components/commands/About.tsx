import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Tai Nguyen Van</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a Bachelor of Software Engineering</HighlightAlt> from
        FPT Univesity
      </p>
      <p>
        I am passionate about programming, problem-solving, <br />
        and continuously learning new technologies.
      </p>
    </AboutWrapper>
  );
};

export default About;
