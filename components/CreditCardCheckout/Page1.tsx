import {
  CityInput,
  CountryInput,
  ExpressShippingButton,
  Form,
  Group,
  Information,
  Input,
  Label,
  PersonalDetails,
  SelectedInput,
  ShippingButton,
  ShippingButtons,
  ShippingInformation,
  ShippingMethod,
  ZipCodeInput,
} from './styles';

const Page1 = ({ display }: { display: boolean }) => {
  console.log('page1', display);
  return (
    <Information display={display}>
      <PersonalDetails>
        <h2>Personal&nbsp;details</h2>
        <Form>
          <Group>
            <Label>First name*</Label>
            <SelectedInput />
          </Group>
          <Group>
            <Label>Last name*</Label>
            <Input />
          </Group>
          <Group>
            <Label>Email address*</Label>
            <Input />
          </Group>
          <Group>
            <Label>Phone number</Label>
            <Input />
          </Group>
        </Form>
      </PersonalDetails>
      <ShippingInformation>
        <h2>Shipping&nbsp;information</h2>
        <Form>
          <Group>
            <Label>Street address</Label>
            <Input />
          </Group>
          <Group>
            <Label>Additional information</Label>
            <Input />
          </Group>
          <Group>
            <Label>Zip code</Label>
            <ZipCodeInput />
          </Group>
          <Group>
            <Label>City</Label>
            <CityInput />
          </Group>
          <Group>
            <Label>Country</Label>
            <CountryInput />
          </Group>
        </Form>
      </ShippingInformation>
      <ShippingMethod>
        <h2>Shipping&nbsp;method</h2>
        <ShippingButtons>
          <ShippingButton>
            <span>Standard shipping</span>
            <span>
              <b>4,95€</b>
            </span>
          </ShippingButton>
          <ExpressShippingButton>
            <span>Express shipping</span>
            <span>
              <b>9,95€</b>
            </span>
          </ExpressShippingButton>
        </ShippingButtons>
      </ShippingMethod>
    </Information>
  );
};

export default Page1;
