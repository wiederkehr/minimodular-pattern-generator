/** @jsx jsx */
import { jsx, Container } from "theme-ui";

const FooterCredits = () => (
  <div
    sx={{
      backgroundColor: "footerCreditsBackground",
      color: "onFooterCreditsBackground",
      fontSize: 0,
    }}
  >
    <Container px="3">
      <div
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p>© 2020 &nbsp; United Nations Development Programme</p>
        <p>
          Designed & Developed by{" "}
          <a
            sx={{
              color: "onFooterCreditsBackground",
              "&:hover": {
                color: "onFooterCreditsBackgroundHighlight",
              },
            }}
            href="https://interactivethings.com"
          >
            Interactive Things
          </a>
        </p>
      </div>
    </Container>
  </div>
);

export default FooterCredits;
