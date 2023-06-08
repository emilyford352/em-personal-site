import styled from "styled-components";
import NavigationBar from "./NavigationBar";
import HomeButton from "./RouteButton";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  align-items: center;
  ${({ isHomePage }) => {
    if (isHomePage) {
      return `
                justify-content: center;
            `;
    }
  }}
`;

const HomeButtonWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.isHomePage ? "column" : "row")};
`;

const StyledPageWrapper = styled.div`
  display: flex;
  @media only screen and (max-width: 650px) {
    flex-direction: column;
  }
`;

const ContentWrapper = styled.div``;

const PageWrapper = ({ children }) => {
  const buttons = [
    { title: "Code Emily", route: "/code-emily" },
    { title: "Mame & Mom Pod", route: "/mame-and-mom-pod" },
    { title: "Comedy", route: "/comedy" },
  ];

  const { pathname } = useRouter();
  const isHomePage = pathname === "/";

  return (
    <StyledPageWrapper>
      <NavigationBar />
      <Wrapper isHomePage={isHomePage}>
        <HomeButtonWrapper isHomePage={isHomePage}>
          {buttons.map((button, index) => (
            <HomeButton
              title={button.title}
              route={button.route}
              key={index}
              isHomePage={isHomePage}
              isSelected={button.route === pathname}
            />
          ))}
        </HomeButtonWrapper>
        <ContentWrapper>{children}</ContentWrapper>
      </Wrapper>
    </StyledPageWrapper>
  );
};

export default PageWrapper;
