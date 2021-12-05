import styled from 'styled-components';


export const Containertop= styled.div`
padding-top:3rem;
width:100%;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
background:  #1a1a1a;
padding-bottom:3rem;
opacity:0.6;
`

export const ContainerInner= styled.div`
width:80%;
display:flex;
align-items:space-between;
justify-content:space-between;
color:white;
padding-bottom:1rem;

@media (max-width: 1000px) {
flex-direction:column;
}


`

export const Row=styled.div`
display:flex;
flex-direction:column;
`





// export const Box = styled.div`
// padding: 80px 60px;
// background: grey;
// position: absolute;
// bottom: -7;
// width: 100%;



// @media (max-width: 1000px) {
// 	padding: 70px 30px;
// }
// `;

// export const Container = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: center;
// 	max-width: 1000px;
// 	margin: 0 auto;
// 	/* background: red; */
// `

// export const Column = styled.div`
// display: flex;
// flex-direction: column;
// text-align: left;
// margin-left: 60px;
// `;

// export const Row = styled.div`
// display: grid;
// grid-template-columns: repeat(auto-fill,
// 						minmax(185px, 1fr));
// grid-gap: 20px;

// @media (max-width: 1000px) {
// 	grid-template-columns: repeat(auto-fill,
// 						minmax(200px, 1fr));
// }
// `;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 10px;
font-size: 15px;
text-decoration: none;

&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 20px;
color: #fff;
margin-bottom: 2rem;
font-weight: bold;
`;
