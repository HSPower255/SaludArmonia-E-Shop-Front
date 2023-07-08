import { CategoryHeader, FiltersWrapper, Filter, MainContainer } from "@/styles/CategoriesPageStyles"
import Header from "@/components/Header"
import ProductsGrid from "@/components/ProductsGrid"
import Center from "@/components/styledcomponents/StyledDiv"
import mongooseConnect from "@/lib/mongoose"
import { Category } from "@/models/CategoryModel"
import { Product } from "@/models/ProductModel"
import { useEffect, useState } from "react"
import axios from "axios"
import Footer from "@/components/Footer"
import StyledSpinner from "@/components/Spinner"

const CategoryPage = ({ category, subCategories, products: allProducts }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [products, setProducts] = useState(allProducts)

    const [filtersValues, setFiltersValues] = useState(category.properties.map(p => ({ name: p.name, value: 'all' })))
    const [sort, setSort] = useState('_id-desc')

    const filterChange = (filterName, filterValue) => {
        setFiltersValues(prev => {
            return prev.map(prop => ({
                name: prop.name,
                value: prop.name === filterName ? filterValue : prop.value,
            }))
        })
    }

    useEffect(() => {
        setIsLoading(true)
        const catIds = [category._id, ...(subCategories?.map(c => c._id) || [])]
        const params = new URLSearchParams
        params.set('categories', catIds.join(','))
        params.set('sort', sort)


        filtersValues.forEach(filter => {
            if (filter.value !== 'all') {
                params.set(filter.name, filter.value)
            }
        })

        const url = `/api/products?${params.toString()}`

        axios.get(url).then(response => {
            setProducts(response.data)
            setTimeout(() => {
                setIsLoading(false)
            }, 1000)
        })
    }, [filtersValues, sort])

    return (
        <>
            <Header />
            <Center>
                <MainContainer>
                    <CategoryHeader>
                        <h1>{category.name}</h1>
                        <FiltersWrapper>
                            <Filter>
                                <span>Filtrar:</span>
                                <select
                                    value={sort}
                                    onChange={e => setSort(e.target.value)}
                                >
                                    <option value="price-asc">Más baratos</option>
                                    <option value="price-desc">Más caros</option>
                                    <option value="_id-desc">Más nuevos</option>
                                    <option value="_id-asc">Más antiguos</option>
                                </select>
                            </Filter>
                            {category.properties.map(prop => (
                                <Filter key={prop.name}>
                                    <span>{prop.name}:</span>
                                    <select
                                        onChange={e => filterChange(prop.name, e.target.value)}
                                        value={filtersValues.find(filter => filter.name === prop.name).value}
                                    >
                                        <option value="all"> Todos </option>
                                        {prop.values.map(v => (
                                            <option key={v} value={v}> {v}</option>
                                        ))}
                                    </select>
                                </Filter>
                            ))}
                        </FiltersWrapper>
                    </CategoryHeader>
                    {isLoading ? (
                        <StyledSpinner />
                    ) : (
                        products.length > 0 ? (
                            <ProductsGrid products={products} />
                        ) : (
                            <div>No se encontraron productos con las características selecionadas.</div>
                        )
                    )}
                </MainContainer>
            </Center>
            <Footer />
        </>
    )
}

export default CategoryPage

export const getServerSideProps = async (context) => {
    await mongooseConnect()
    const category = await Category.findById(context.query.id)
    const subCategories = await Category.find({ parent: category._id })
    const catIds = [category._id, ...subCategories.map(c => c._id)]
    const products = await Product.find({ category: catIds })

    return {
        props: {
            category: JSON.parse(JSON.stringify(category)),
            products: JSON.parse(JSON.stringify(products)),
            subCategories: JSON.parse(JSON.stringify(subCategories)),
        }
    }
}