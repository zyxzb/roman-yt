import React, {useState, useEffect} from 'react';
import { Button } from 'components/atoms/Button/Button.styles';
import { ArticleWrapper, ContentWrapper } from 'components/organisms/News/News.styles';
import { Wrapper } from './NewsSection.styles';
import { TitleWrapper } from 'components/organisms/News/News.styles';
import axios from 'axios';

export const query = `
         {
          allArticles {
            id
            title
            category
            content
            image {
              url
            }
          }
        }
      `;

const NewsSection = () => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState('');

   useEffect(() => {
    console.log(articles);
    axios
    .post(
      'https://graphql.datocms.com/',
      {
        query,
      },
      {
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
        },
      }
    )
    .then(({data: {data}}) => {
        setArticles(data.allArticles)
    })
    .catch(() => {
        setError('Error, please try again 😥')
    });
   },[]);

    return (
            <Wrapper>
                <h2>News Feed Section</h2>
                {articles.length > 0 ? ( 
                    articles.map(({title, category, content, image}, index) => (
                    <ArticleWrapper key={index}>
                        <TitleWrapper>
                        <h3>{title}</h3>
                        <p>{category}</p>
                        </TitleWrapper>
                        <ContentWrapper>
                            <p>{content}</p>
                            {image ? <img src={image.url} alt={title} /> : null}
                        </ContentWrapper>
                        <Button>Read more</Button>
                    </ArticleWrapper>
                )))
                : (
                    <h2>Loading...</h2>
                )}
                {error && <h2>{error}</h2>}
            </Wrapper>
    );
}

export default NewsSection;
