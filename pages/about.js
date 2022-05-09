import Image from '../components/Image'

function About({ data: { contact }}) {
  return <>
    <style jsx>{`
    .banner-img {
      position: relative;
      width: 50%;
      height: 300px;
      margin: 0 auto;
    }

    @media (max-width: 600px) {
      .banner-img {
        width: 100%;
        height: 200px;
      }
    }
    `}</style>
    <div className='banner-img'>
      <Image src='/puppies.jpg' layout='fill' objectFit='cover' objectPosition='50% 25%' />
    </div>
    <h2>About Us</h2>
    <h3>Family-Raised AKC Puppies</h3>
    <h4>Bulldog Puppies, with health as our #1 priority</h4>
    <p>Welcome to xxx.com here we love and care for our french bulldogs, making sure our puppies are raised lovingly and compassionately. We have been raising frenchies for almost XX years.</p>
    <p>We only breed top quality french bulldogs. Our dogs are &quot;hand-raised&quot; in a fun and loving environment and are well socialized and adjusted to people.</p>
    <p>As a small in-home kennel with a limited but well-planned breeding program, we are confident we have the best prices in San Diego for high quality Frenchies (we want happy-returning customers!)</p>
    <p>Contact me directly at {contact?.phone.display}</p>

    <Image src='/about1.jpg' width={1347} height={931} />
  </>
}

export default About;