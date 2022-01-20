import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  console.log(search);

  return (
    <div>
      <h1>UrlParameterの　ページ</h1>
      <p>parameter is {id}</p>
      <p>クエリパラメータは　{query.get("name")}</p>
    </div>
  );
};
