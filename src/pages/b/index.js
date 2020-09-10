import React from 'react';
import { withRouter } from 'next/router';
import styles from './styles.styl';

const Home = props => {
  const { urlData } = props;

  return (
    <div>
      <div className="hero">
        <h1 className="title">Welcome to b page!bbb</h1>

        <div className={styles.stark}>路由id参数 {urlData?.id}</div>

        <p className="description">
          To get started, edit <code>pages/index.js</code> and save to reload.
        </p>
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
        .row {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .card {
          padding: 18px 18px 24px;
          width: 220px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
      `}</style>
    </div>
  );
};

Home.getInitialProps = async content => {
  const { req } = content;
  return {
    urlData: req.params // 路由:id参数
  };
};

export default withRouter(Home);
