import Header from "../src/Header";
import LayoutFullscreen from "../src/LayoutFullscreen";

export default function Home() {
  return (
    <LayoutFullscreen>
      {{
        header: <Header />,
        body: <></>
      }}
    </LayoutFullscreen>
  )
}
