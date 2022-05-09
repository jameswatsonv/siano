import '../styles/globals.css'
import Layout from '../components/layout'

const data = {
  puppies:  [
    {
      name: 'Puppy 1',
      color: 'Color 1',
      gender: 'Male',
      id: 'puppy1',
      imageSrc: [
        '/puppy1/1.jpg'
      ],
      description: 'Playful and friendly!',
    },
    {
      name: 'Puppy 2',
      color: 'Color 2',
      gender: 'Male',
      id: 'puppy2',
      imageSrc: [
        '/puppy1/1.jpg'
      ],
      description: 'Playful and friendly!',
    },
    {
      name: 'Puppy 3',
      color: 'Color 3',
      gender: 'Male',
      id: 'puppy3',
      imageSrc: [
        '/puppy1/1.jpg'
      ],
    },
    {
      name: 'Puppy 4',
      color: 'Color 4',
      gender: 'Male',
      id: 'puppy4',
      imageSrc: [
        '/puppy1/1.jpg'
      ],
    },
  ],
  contact: {
    phone: {
      number: 9163467460,
      display: '(916) 346-7460'
    },
    email: 'renerene.7512@yahoo.com'
  }
};

function MyApp({ Component, pageProps }) {
  return (
    <Layout data={data}>
      <Component {...pageProps} data={data} />
    </Layout>
  )
}

export default MyApp
