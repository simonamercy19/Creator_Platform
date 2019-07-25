import App, { Container } from 'next/app';
import React, { Fragment } from 'react';
import Head from 'next/head';
import { Provider } from 'mobx-react';
import stores from '../stores';
import '../static/styles/style.scss';
import Header from '../src/components/Header/Header';


class MyMobxApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Fragment>
        <Head>
          {
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
          }
        </Head>
        <Header />
        <Container>
          <Provider {...stores}>
            <Component {...pageProps} />
          </Provider>
        </Container>
      </Fragment>
    );
  }
}
export default MyMobxApp;
