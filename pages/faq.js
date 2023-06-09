// import Link from "../src/components/Link";
// import PageTitle from "../src/components/PageTitle";
import FaqScreen from "../src/screens/FaqScreen";

export default FaqScreen;
// SSR - Serever Side Rendering
// ISG - Incremental Static Generation

//     export async function getServerSideProps(){
//     console.log('Em modo DEV, sempre roda! A cada acesso')
//     console.log('Rodando a cada acesso que recebe')

export async function getStaticProps() {
    console.log('Roda SOMENTE em build time')
    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
    const faq = await fetch(FAQ_API_URL)
        .then((respostaDoServidor) => {
            return respostaDoServidor.json();
        })
        .then((resposta) => {
            return resposta;
        });

    return {
        props: {
            qualquercoisa: 'qualquer coisa mesmo',
            faq,
        },
    };
}

// export default function FaqPage({ faq }) {
//     //console.log(faq);
//     // const [faq, setFaq] = useState([]);
//     // useEffect(() => {
//     // }, []);

//     return (
//         <div>
//               <PageTitle>FAQ - Alura Cases Campanha</PageTitle>
//             <h1>Alura Casaes - Página de Perguntas FAQ</h1>
//             <Link href="/">
//                 Ir para a Home
//             </Link>
//             <ul>
//                 {faq.map(({ answer, question }) => (
//                     <li key={question}>
//                         <article>
//                             <h2>{question}</h2>
//                             <p>{answer}</p>
//                         </article>

//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }