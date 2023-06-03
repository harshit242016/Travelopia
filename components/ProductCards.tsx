import { Grid } from '@nextui-org/react';
import InfoCard from './InfoCard';

const ProductCards = () => {
  return (
    <Grid.Container gap={2}>
      <Grid xs={12} sm={4}>
        <InfoCard
          label="Package"
          title="Japan"
          imageURL="https://images.pexels.com/photos/2187603/pexels-photo-2187603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          prices="81999"
        />
      </Grid>
      <Grid xs={12} sm={4}>
        <InfoCard
          label="Package"
          title="Italy"
          imageURL="https://images.pexels.com/photos/531602/pexels-photo-531602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          prices="101999"
        />
      </Grid>
      <Grid xs={12} sm={4}>
        <InfoCard
          label="Package"
          title="Botswana"
          imageURL="https://images.pexels.com/photos/2751667/pexels-photo-2751667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          prices="129999"
        />
      </Grid>
    </Grid.Container>
  )
}

export default ProductCards;
