import NewsItem from "./NewsItem";
import { News } from "../entities/News";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = () => {
  const [articles, setArticles] = useState<News[]>();
  const [loading, setLoading] = useState<boolean>(false);

  // 여기서 주의할 점은 useEffect에 등록하는 함수에 async를 붙이면 안 된다는 것입니다.
  // useEffect에서 반환해야 하는 값은 뒷정리 함수이기 때문입니다.
  // 따라서 useEffect 내부에서 async/await를 사용하고 싶다면, 함수 내부에 async 키워드가 붙은 또 다른 함수를 만들어서 사용해 주어야 합니다.
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=kr&apiKey=68f14cee3559466b9457913ad1319be4",
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }

  // 데이터를 불러와서 뉴스 데이터 배열을 map 함수를 사용하여 컴포넌트 배열로 변환할 때 신경 써야 할 부분이 있습니다.
  // map 함수를 사용하기 전에 꼭 articles를 조회하여 해당 값이 현재 null이 아닌지 검사해야 합니다.
  // 이 작업을 하지 않으면, 아직 데이터가 없을 때 null에는 map 함수가 없기 때문에 렌더링 과정에서 오류가 발생합니다.
  // 그래서 애플리케이션이 제대로 나타나지 않고 흰 페이지만 보이게 됩니다.
  if (!articles) {
    return null;
  }

  return (
    <NewsListBlock>
      {articles.map((article: News) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
