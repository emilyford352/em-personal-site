import PageWrapper from "../../components/PageWrapper";
import Paragraph from "../../components/Paragraph";

export default function Comedy() {
  return (
    <div>
      <PageWrapper shouldRenderSecondNavBar={true}>
        <Paragraph>
          Emily Mame is a comedian that can be seen all around New England. She
          started doing comedy in 2018 after a concussion she got while taking
          her dog for a walk...she's never known how to yo-yo so why would she
          know how to walk the dog?!
        </Paragraph>
      </PageWrapper>
    </div>
  );
}
