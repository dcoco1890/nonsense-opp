import { useRouter } from "next/router";

const Region = props => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1>{router.query.name}</h1>
    </div>
  );
};


export default Region;
