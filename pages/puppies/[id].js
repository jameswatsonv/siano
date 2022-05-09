import { useRouter } from "next/router";
import Image from '../../components/Image'

const PuppyDetails = ({ data: { puppies = [], contact }}) => {
  const { id } = useRouter().query;
  const puppy = puppies.find(p => p.id === id);

  if (!puppy) {
    return <>
    <div>Oops! Something went wrong.</div>
  </>
  }

  const { name, color, gender, description, imageSrc } = puppy;

  return <>
    <div>Details about: {name}</div>
    <Image src={imageSrc[0]} width={506} height={490} />
    <div><span>Name:</span>{name}</div>
    <div><span>Color:</span>{color}</div>
    <div><span>Gender:</span>{gender}</div>
    <div><span>Description:</span>{description}</div>
    <p>Call us and ask about {name} today! {contact?.phone.display}</p>
  </>;
};

export default PuppyDetails;