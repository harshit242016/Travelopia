import { Grid, Text, Button, Col } from '@nextui-org/react';

type Props = {
  onButtonClick: () => void;
}

const Jumbotron = ({ onButtonClick }: Props) => {
  return (
    <Grid.Container justify="center" css={{ "height": "500px", "backgroundImage": "url(https://littlevisuals.co/images/sunset.jpg)" }}>
      <Grid xs={12} sm={6} alignItems="center">
        <Col css={{ "width": "100%" }}>
          <Text weight={"bold"} size={70} css={{ "textAlign": "center" }}>We Care, So You Can </Text>
          <Text weight={"bold"} size={70} css={{ "textAlign": "center" }}>Travel Carefree</Text>
          <Button size="md" shadow color="gradient" css={{ "width": "100%", "marginTop": "10px" }} onClick={onButtonClick}>Create My Trip Now</Button>
        </Col>
      </Grid>
    </Grid.Container>
  )
}

export default Jumbotron;
