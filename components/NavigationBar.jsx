import styled from "styled-components";
import {
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import IconButtonWrapper from "./IconButtonWrapper";
import Image from "next/image";
import headshot from "../assets/headshot.png";
import { useRouter } from "next/router";

const Nav = styled.div`
  width: 342px;
  background-color: #ace464;
  min-height: 100vh;
  @media only screen and (max-width: 1000px) {
    width: 120px;
  }
  @media only screen and (max-width: 650px) {
    min-height: 90px;
    height: 90px;
    padding: 10px;
    width: 100%;
    transition: width 1s, height 1s;
  }
`;

const FlexWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ImageWrapper = styled.div`
  display: flex;
  @media only screen and (max-width: 1000px) {
    display: none;
  }
  @media only screen and (max-width: 650px) {
    flex-direction: row;
  }
  img:hover {
    opacity: 80%;
    cursor: pointer;
  }
`;

const NavigationBar = () => {
  const router = useRouter();
  const socialMediaIcons = [
    {
      href: "https://www.linkedin.com/in/emily-ford-2385419b/",
      icon: faLinkedin,
    },
    {
      href: "https://www.youtube.com/@codeemily/videos",
      icon: faYoutube,
    },
    {
      href: "https://www.instagram.com/emilymameford/",
      icon: faInstagram,
    },
    {
      href: "https://twitter.com/emilymameford",
      icon: faTwitter,
    },
  ];
  return (
    <Nav>
      <FlexWrapper>
        <IconButtonWrapper icons={socialMediaIcons} />
        <ImageWrapper onClick={() => router.push("/")}>
          <Image
            width="400px"
            height="500px"
            src={headshot}
            priority
            alt="Emily Mame"
          />
        </ImageWrapper>
      </FlexWrapper>
    </Nav>
  );
};

export default NavigationBar;
