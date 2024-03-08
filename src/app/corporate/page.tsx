import Benefits from './_sections/Benefits/Benefits'
import Categories from './_sections/Categories/Categories'
import Footer from './_sections/Footer/Footer'
import Hero from './_sections/Hero/Hero'
import Products from './_sections/Products/Products'

export default function Page() {
  return (
    <main>
      <Hero />
      <Benefits />
      <Categories />
      <Products />
      <Footer />
    </main>
  )
}
