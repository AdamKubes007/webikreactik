import styled from "styled-components"

export const ProfileImagePartImg = styled.img`
width: auto;
height: 500px;
`

export const ProfileImagePart = styled.div`
display: flex;
align-items: center;
justify-content: end;
`

export const MainStyle = styled.main`
display: flex;
padding: 0 6%;
position: relative;
height: 70vh;
overflow: hidden;
`

export const TextPart = styled.div`
width: 76%;
`
export const Articlestyle = styled.article`
width: 75%;
`
export const Articlecite = styled(Articlestyle)`
display: flex;
flex-direction: column;
margin: 80px 0 60px 0;

h2 {
    font-size: 48px;
    margin-bottom: 12px;
}

p {
    font-size: 28px;
    font-style: italic;
    margin-left: 68%;
}
`
export const ArticleAbout = styled(Articlestyle)`
h2 {
    font-size: 48px;
    margin-bottom: 12px;
}

p{
    font-size: 28px;
}
`