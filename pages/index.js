import Content from "../components/Content";
import Hero from "../components/Hero";
import Layout from "../components/layout";

// export async function getServerSideProps() {
//   const req = await fetch("http://localhost:1337/api/products?populate=*");
//   const res = await req.json();

//   return {
//     props: { products: res.data },
//   };
// }

export default function Home({ products }) {
  return (
    <Layout>
      <Hero />
      <Content />
      {/* <div>
        {products.map((product) => {
          return (
            <ul>
              <li>{product.id}</li>
              <li>{product.attributes.name}</li>
              <li>{product.attributes.price}</li>
              <li>{product.attributes.rating}</li>
              <li>{product.attributes.sold}</li>
              <li>{product.attributes.description}</li>
              <img
                src={
                  "http://localhost:1337" +
                  product.attributes.thumbnail.data.attributes.formats.thumbnail
                    .url
                }
              />
            </ul>
          );
        })}
      </div> */}
    </Layout>
  );
}
