import Meta from "./Meta";
import Layout from "./Layout";
import Footer from "./Footer";

interface PageProps {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  author?: string;
  image?: string;
}

const Page = (props: PageProps) => (
  <Layout>
    <Meta {...props} />
    {props.children}
    <Footer />
  </Layout>
)

export default Page;