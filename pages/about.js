import Link from 'next/link'

function about(props) {
    
    return (
        <div className="container">
            {props.posts.map((item,index)=>{
                return(
                    <div className="card" key={index}style={{boxShadow:"1px",margin:"10px",padding:"10px"}}>
                   <Link href="/posts/[id]" as={`/posts/${item.id}`}><h2><a style={{backgroundColor:"yellow"}}>{item.title}</a></h2></Link> 
                    <p>{item.body}</p>
                    </div>
                )
})}
        </div>
    )
}

 export const getStaticProps=async()=> {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()
  console.log(posts,'posts')

  return {
    props: {
      posts,
    },
  }
}
export default about;