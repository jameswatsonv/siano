import Image from 'next/image'
import Button from '../components/Button';

export default function Home() {
  return (
    <>
      <div style={{textAlign: 'center'}}>
        <Image src='/home.jpg' width={472} height={578} />
      </div>
      
      <h1>French Bulldog Puppies in San Diego</h1>
      <p>If you’re looking for a French bulldog for sale in the San Diego area, Francoeur French Bulldogs is a premier AKC breeder in Central Ventura County. We’re about an hour from Orange County, and we serve the entire San Diego area.</p>
      <p>As breeders with decades of experience, we understand that healthy and happy puppies come from the right parents. We ensure our dogs come from champion lines and have excellent pedigrees. The parents of our puppies are also carefully tested and screened to ensure a great health guarentee. You can trust us to offer French bulldog puppies in San Diego that come from healthy and happy parents. With our attention to pedigrees and bloodlines, you can expect our puppies to have beautiful colors and striking features as well.</p>

      <div style={{'textAlign': 'center'}}>
        <Button href='/puppies' type='primary'>View our puppies</Button>
        <Button href='/contact' type='primary'>Contact Us</Button>
      </div>

      <h2>French Bulldog Puppies for Sale in San Diego</h2>
      <p>If you’re looking for a French bulldog in San Diego, genetics are only part of the equation. They can help determine the french bulldog breed, the color of the coat and whether your puppy is a lilac French bulldog, chocolate French bulldog or another type, but they’re not the whole story.</p>
      <p>What happens early in life also impacts your Frenchie friend. Our puppies get socialization and love from day one. We interact with our puppies and offer early neurological stimulation to keep them happy and well socialized. This creates healthy and well-behaved puppies. At the appropriate moments, we use the Von Falconer Way, crate training and Rule of 7 to give your French bulldog puppy a basic standard of training.</p>
      <p>By eight weeks, when our frenchie puppies go home with their humans, they respond to claps, whistles and snaps. They are also crate trained and can sleep through the night without accidents. They are set up to get training from you and already have the basic framework in place to learn more. We can also professionally train your puppy for an additional fee if you would like.</p>

      <h2>Francoeur French Bulldogs</h2>
      <p>At Francoeur French Bulldogs, we’re simply unbeatable when it comes to the quality of our puppies and their temperaments. Our puppies also get careful veterinary attention early on, and by the time they go home, they’ve been microchipped, vaccinated and de-wormed.</p>
      <p>Best of all, we don’t just send French bulldog puppies home randomly with the first people who apply. We know the human-dog bond is special, and we get to know each puppy and each human looking for a French bulldog. We make sure the puppy you get matches your personality, activity level, lifestyle and more. In our extensive experience, we know this sets you up for success.</p>

      <h2>Are You Considering French Bulldog Breeders in San Diego?</h2>
      <p>Whether you’ve been looking for the right AKC French bulldog for you for years or have just come to the realization you want an addition to the family, learn more about upcoming litters today. You can also contact us with any questions or to see how our team at Francoeur French Bulldogs works to bring you high-quality French bulldogs in San Diego.</p>
    </>
  )
}
