import Layout from "../../components/Layout";

export default function Chef({ id }) {
  return (
    <Layout>
      <h1>Chef: {id}</h1>
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: ["/chefs/mauro", "/chefs/eze"],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      id: params.id,
    },
  };
}
