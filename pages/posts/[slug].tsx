// * This method use url params to get the id or anything else from url
// * it can be used to fetch data or get user info

// export async function getServerSideProps(context) {
//     const {params}=context;
//     const { slug} = params;
//     console.log(params)
//     return {
//         props: {
//             slug
//         }
//     }
// }

import { useRouter } from "next/router"


const slug = () => {
    const {query}=useRouter();
    return <div>{query.slug}</div>

}
export default slug