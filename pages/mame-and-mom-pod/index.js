import PageWrapper from "../../components/PageWrapper";
import Paragraph from "../../components/Paragraph";
import React from "react";

export default function MameAndMomPod() {
  return (
    <div>
      <PageWrapper shouldRenderSecondNavBar={true}>
        <Paragraph>
          <div>
            Mame & Mom is a podcast put on by the mother and daughter duo, Lori
            Magoon & Emily Mame Ford. They both have been following similar
            paths for years and after a recent roadtrip to California on a whim
            decided they need to start this podcast they've been dreaming of.
            Lori is a retired mental health professional, artist and
            motivational public speaker. Emily is a software engineer by day and
            comedian by night. Follow their journey, laugh with them, and hear
            about how they ended up becoming close - spoiler alert they weren't
            always!
          </div>
          <h3>Tune in every Monday for a new episode!</h3>
        </Paragraph>
      </PageWrapper>
    </div>
  );
}
