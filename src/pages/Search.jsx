import { useSearchParams, Link } from "react-router-dom"

import { useFetch } from "../hooks/useFetch"

const Search = () => {
    const [searchParams] = useSearchParams()

    console.log(searchParams)
    const url = "http://localhost:3000/products?" + searchParams

    const {data: items, loading, error} = useFetch(url)
    console.log(items)

  return (
    <div>
        <h1>Produtos</h1>
        {error && <p>{error}</p>}
        <ul className="products">
          {items && items.map(item => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R$: {item.price}</p>
              <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>  
          ))}
        </ul>
    </div>
  )
}

export default Search