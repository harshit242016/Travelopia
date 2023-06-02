import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Container, Navbar, Text, Button, Grid, Col } from '@nextui-org/react';
import InfoCard from '../components/InfoCard';
import FooterCard from '../components/FooterCard';
import React from 'react';
import { useState } from 'react';
import FormModal from '../components/FormModal';
import Header from '../components/Header';

const Home: NextPage = () => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <Container>
      
      {/* Navbar */}
      <Header/>

      {/* Jumbotron */}
      <Grid.Container justify="center" css={{ "height": "500px", "backgroundImage": "url(https://littlevisuals.co/images/sunset.jpg)" }}>
        <Grid xs={12} sm={6} alignItems="center">
          <Col css={{ "width": "100%" }}>
            <Text weight={"bold"} size={70} css={{ "textAlign": "center" }}>We Care, So You Can </Text>
            <Text weight={"bold"} size={70} css={{ "textAlign": "center" }}>Travel Carefree</Text>
            <Button size="md" shadow color="gradient" css={{ "width": "100%", "marginTop": "10px" }} onClick={handler}>Create My Trip Now</Button>
          </Col>
        </Grid>
      </Grid.Container>

      {/* 3 Displaying Product Cards */}
      <Grid.Container gap={2}>
        <Grid xs={12} sm={4}>
          <InfoCard
            label="Package"
            title="Japan"
            imageURL="https://littlevisuals.co/images/red_dawn.jpg"
            prices="81999"
          />
        </Grid>
        <Grid xs={12} sm={4}>
          <InfoCard
            label="Package"
            title="Italy"
            imageURL="https://littlevisuals.co/images/sunset.jpg"
            prices="101999"
          />
        </Grid>
        <Grid xs={12} sm={4}>
          <InfoCard
            label="Package"
            title="Botswana"
            imageURL="https://littlevisuals.co/images/tail.jpg"
            prices="129999"
          />
        </Grid>
      </Grid.Container>
      {/* <FooterCard/> */}
      <FormModal
        closeButton
        aria-labelledby="modal-title"
        visible={visible}
        closeHandler={closeHandler}
      />
    </Container>
  )
}

export default Home
