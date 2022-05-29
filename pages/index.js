import Content from "../components/Content";
import Hero from "../components/Hero";
import Layout from "../components/layout";

export async function getServerSideProps() {
  const req = await fetch("http://localhost:1337/api/products?populate=*");
  const res = await req.json();

  return {
    props: { products: res.data },
  };
}

export default function Home({ products }) {
  return (
    <Layout>
      <Hero />
      <Content products={products} />
    </Layout>
  );
}
