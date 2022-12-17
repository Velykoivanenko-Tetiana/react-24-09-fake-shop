//  const Content = () => {
//     return(
//         <>
//         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut quod est qui laborum ea fugit quia adipisci explicabo, maiores fuga earum possimus voluptates impedit. Doloribus illo culpa hic totam nisi.</p>
       
//        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere fugiat consectetur modi, tempora tempore blanditiis magni, asperiores unde impedit sint accusantium itaque ullam perferendis harum inventore libero optio? Omnis, beatae.</p> </>
//     )
// }
// export const test = 10
// export default Content
import './Content.css'

type Props = {
    p1:string
    p2:string

}

const Content = ({p1,p2}: Props) => {
  return (
    <>
       <p className = "tomato">{p1}</p>
       
<p>{p2}</p> </>
  )
}

export default Content
