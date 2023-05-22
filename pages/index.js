import Slider from '../components/home/slider/slider'
import Product from '../components/home/product/product'
import VideoAll from '../components/home/videoAll/videoAll'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Slider />
      <Product />
      <VideoAll />
    </Layout>
  )
}
