import { categories } from '../../_mocks/categories'
import CategorieItem from './components/CategorieItem'

export default function Categories() {
  return (
    <section className="container m-auto flex flex-col items-center gap-8 p-8">
      <div className="max-w-3xl">
        <h2 className="text-[#ECECEC] text-center text-xl mb-8">
          De Computadores e Notebooks a acessórios e suprimentos de informática,
          estamos aqui para ajudá-lo a alavancar os resultados do seu negócio.
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {categories.map((categorie, index) => (
          <div key={index}>
            <CategorieItem categorie={categorie} />
          </div>
        ))}
      </div>
    </section>
  )
}
