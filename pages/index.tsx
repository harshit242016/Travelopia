import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Container, Navbar, Text, Button, Grid } from '@nextui-org/react';
import React from 'react';
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
import ProductCards from '../components/ProductCards';
import FormModal from '../components/FormModal';
// import Footer from '../components/FooterCard';

const Home: NextPage = () => {
  const [visible, setVisible] = React.useState(false);
  const openModalHandler = () => setVisible(true);

  const closeModalHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <Container>
      <Head>
        <title>Travelopia</title>
        <meta name="description" content="Travel website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <Jumbotron onButtonClick={openModalHandler}/>

      <ProductCards/>

      <FormModal
        closeButton
        aria-labelledby="modal-title"
        visible={visible}
        closeHandler={closeModalHandler}
      />
      
    </Container>
  )
}

export default Home
