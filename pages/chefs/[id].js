export default function Chef({ id }) {
  return (
    <div>
      <h1>Chef: {id}</h1>
    </div>
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
