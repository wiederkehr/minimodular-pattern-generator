import NextHead from 'next/head'
import site from "../site.config"

interface MetaProps {
  title?: string;
  description?: string;
  author?: string;
  image?: string;
}

const Meta = (props: MetaProps) => (
  <NextHead>
    <title>{props.title ? props.title : site.title}</title>
    <meta property="og:title" content={props.title ? props.title : site.title} />
    <meta name="description" content={props.description ? props.description : site.description} />
    <meta property="og:description" content={props.description ? props.description : site.description} />
    <meta name="author" content={props.author ? props.author : site.author} />
    <meta property="og:author" content={props.author ? props.author : site.author} />
    <meta property="og:image" content={props.image ? props.image : site.image} />
  </NextHead>
);

export default Meta;
