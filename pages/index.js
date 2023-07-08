import Header from "@/components/Header"
import Featured from "@/components/Featured"
import { Product } from "@/models/ProductModel"
import mongooseConnect from "@/lib/mongoose"
import NewProducts from "@/components/NewProducts"
import Footer from "@/components/Footer"
import { Setting } from "@/models/SettingModel"

const Home = ({ featuredProduct, newProducts }) => {
  return (
    <div>
      <>
        <Header />
        <Featured featuredProduct={featuredProduct} />
        <NewProducts products={newProducts} />
        <Footer />
      </>
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  await mongooseConnect()

  const featuredProductSetting = await Setting.findOne({ name: 'featuredProductId' })
  const featuredProductId = featuredProductSetting.value

  const featuredProduct = await Product.findById(featuredProductId)
  const newProducts = await Product.find({}, null, { sort: { '_id': -1 }, limit: 8 })
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    }
  }
}

