import styled from "styled-components"
import Link from "next/link"

export const MainContainer = styled.div`
  min-height: 100vh;`

export const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
}`

export const CategoryTitle = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 0;
  align-items: center;
  gap: 10px;
  h2 {
    margin-bottom: 10px;
    margin-top: 10px
  }
  a{
    color: #555;
    display: inline-block;
  }`

export const CategoriesWrapper = styled.div`
  margin-bottom: 40px;`

export const ShowAllBox = styled(Link)`
  background-color: #ddd;
  height: 160px;
  border-radius: 10px;
  align-items: center;
  display: flex;
  justify-content: center;
  color: #555;
  text-decoration: none;`

export const CategoryHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  
    h1 {
      font-size: 1.5rem;
    }
    
    @media (max-width: 768px) {
      display: block;
      margin-bottom: 15px;
    }
  `

export const FiltersWrapper = styled.div`
  display: flex;
  gap: 15px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`


export const Filter = styled.div`
 background-color: #ddd;
 padding: 5px 10px;
 border-radius: 5px;
 display: flex;
 gap: 5px;
 color: #444;
 
 select {
  background-image: -webkit-linear-gradient(top, #E5E5E5, #F4F4F4);
  border: 1px solid #AAA;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  color: #555;
  font-size: inherit;
}

 option {
  background-color: #ddd;
 }
`

