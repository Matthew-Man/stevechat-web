import Header from "../src/Header";
import LayoutFullscreen from "../src/LayoutFullscreen";
import MessageView from "../src/MessageView";

export default function Home() {
  return (
    <LayoutFullscreen>
      {{
        header: <Header />,
        body: <MessageView />
      }}
    </LayoutFullscreen>
  )
}
