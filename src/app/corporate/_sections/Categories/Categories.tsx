import ButtonCallToAction from '../../_components/ButtonCallToAction'
import { categories } from '../../_mocks/categories'
import CategorieItem from './components/CategorieItem'

export default function Categories() {
  return (
    <section className="container m-auto flex flex-col items-center gap-2 pb-20">
      <div className="flex flex-col items-center gap-8 p-8">
        <div className="max-w-2xl">
          <h2 className="text-[#ECECEC] text-center text-2xl my-6">
            De <strong>Computadores</strong> e <strong>Notebooks</strong> a{' '}
            <strong>acessórios</strong> e{' '}
            <strong>suprimentos de informática</strong>, estamos aqui para
            ajudá-lo a alavancar os resultados do seu negócio.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {categories.map((categorie, index) => (
            <div key={index}>
              <CategorieItem categorie={categorie} />
            </div>
          ))}
        </div>
      </div>
      <ButtonCallToAction />
    </section>
  )
}
