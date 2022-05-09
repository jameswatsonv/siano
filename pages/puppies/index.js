import Link from 'next/link';
import Image from 'next/image';

function Puppies({ data: { puppies = [] } }) {
  return <>
    <style jsx>{`
      h2 { text-align: center; margin-bottom: 2rem; }
      span { font-weight: 500; }
      .container {
        display: flex;
        flex-wrap: wrap;
      }
      .item {
        width: 33.33%;
        text-align: center;
        margin-bottom: 3rem;
      }
      .image {
        position: relative;
        width: 12rem;
        height: 12rem;
        background-color: green;
        border-radius: 20rem;
        margin: 0 auto 1rem;
      }
      .image img {
        border-radius: 20rem;
      }
      .info {

      }

      @media (max-width: 600px) {
        .item {
          width: 100%;
        }
        .container {
          padding: 0;
        }
        .image {
          width: 10rem;
          height: 10rem;
        }
      }
    `}</style>
    <h2 style={{ 'textAlign': 'center' }}>Our Puppies</h2>
    <div className='container'>
      {puppies.map(({id, name, color, gender, imageSrc}) => (
        <div className='item' key={id}>
          <Link href={`/puppies/${id}`}>
            <a>
              <div className='image'>
                <Image src={imageSrc[0]} layout='fill' style={{'borderRadius': '20rem', 'transform': 'scale(0.9)'}} />
              </div>
            </a>
          </Link>
          <div className='info'>
            <div><span>Name:</span>{name}</div>
            <div><span>Color:</span>{color}</div>
            <div><span>Gender:</span>{gender}</div>
          </div>
        </div>
      ))}
    </div>
  </>
}

export default Puppies;