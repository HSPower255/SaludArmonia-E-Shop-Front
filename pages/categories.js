import { CategoriesGrid, CategoryTitle, CategoriesWrapper, ShowAllBox, MainContainer } from "@/styles/CategoriesPageStyles"
import Header from "@/components/Header"
import Center from "@/components/styledcomponents/StyledDiv"
import { Category } from "@/models/CategoryModel"
import mongooseConnect from "@/lib/mongoose"
import { Product } from "@/models/ProductModel"
import ProductBox from "@/components/ProductBox"
import Link from "next/link"
import Footer from "@/components/Footer"
import { RevealWrapper } from "next-reveal"

const CategoriesPage = ({ mainCategories, categoriesProducts }) => {
    return (
        <>
            <Header />
            <Center>
                <MainContainer>
                    {mainCategories.map(cat => (
                        <CategoriesWrapper key={cat._id}>
                            <CategoryTitle>
                                <h2>{cat.name}</h2>
                                <div>
                                    <Link href={`/category/${cat._id}`}>
                                        Ver todos...
                                    </Link>
                                </div>
                            </CategoryTitle>
                            <CategoriesGrid>
                                {categoriesProducts[cat._id].map((p, index) => (
                                    <RevealWrapper key={p._id} delay={index * 100}>
                                        <ProductBox  {...p} />
                                    </RevealWrapper>
                                ))}
                                <RevealWrapper delay={categoriesProducts[cat._id].length * 100}>
                                    <ShowAllBox href={`/category/${cat._id}`}>
                                        Ver todos...
                                    </ShowAllBox>
                                </RevealWrapper>
                            </CategoriesGrid>
                        </CategoriesWrapper>
                    ))}
                </MainContainer>
            </Center>
            <Footer />
        </>

    )
}

export default CategoriesPage

export const getServerSideProps = async () => {
    await mongooseConnect()
    const categories = await Category.find()
    const mainCategories = categories.filter(c => !c.parent)
    const categoriesProducts = {}

    for (const mainCat of mainCategories) {
        const mainCategoriesId = mainCat._id.toString()
        const childCategoriesIds = categories.filter(c => c?.parent?.toString() === mainCategoriesId).map(c => c._id.toString())
        const categoriesIds = [mainCategoriesId, ...childCategoriesIds]

        const products = await Product.find({ category: categoriesIds }, null, { limit: 3, sort: { '_id': -1 } })
        categoriesProducts[mainCat._id] = products
    }

    return {
        props: {
            mainCategories: JSON.parse(JSON.stringify(mainCategories)),
            categoriesProducts: JSON.parse(JSON.stringify(categoriesProducts)),
        }
    }
}