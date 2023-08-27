import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
h1,
h2,
h3,
h4,
h5,
p {
  margin: 0;
  padding: 0;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
address {
  font-style: normal;
}
a {
  text-decoration: none;
  color: inherit;
}

ul,
ol {
  list-style: none;
  padding-left: 0;
  margin: 0;
}
body {
  background-color: 	#E8E8E8;
}
`