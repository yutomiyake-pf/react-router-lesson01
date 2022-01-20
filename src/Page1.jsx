import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  const name = "miyake";
  const history = useHistory();

  const onClickDetailA = () => {
    //history.push("page1/detailA", arr);
    //リダイレクト先に複数のデータを送る（history）
    history.push("page1/detailA", { arr: arr, name: name });
  };

  return (
    <div>
      <h1>Page1ページです</h1>
      <Link to={{ pathname: "/page1/detailA", state: { arr, name } }}>
        DetailA
      </Link>

      <br />
      <Link to="/page1/detailB">DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
