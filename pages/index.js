import Head from 'next/head'
import FeaturedPost from '@components/FeaturedPost';
import Container from '@components/Container';
import PostsList from '../components/PostsList'




export async function getServerSideProps() {
  const reqFeatured = await fetch(process.env.NEXT_PUBLIC_APIURL + '/posts?featured=true')
  const featured =  await reqFeatured.json()

  const reqPost = await fetch(process.env.NEXT_PUBLIC_APIURL + '/posts?featured=false')
  const posts = await reqPost.json()

  return {
    props: {
      featured: featured.length > 0 ? featured[0] : false,
      posts
    }
  }
    
  
}

export default function Home({featured, posts, categories}) {

  

  return (
    <>
      <Head>
        <title>Home &mdash; GoBlog</title>
      </Head>
      <Container>
        {featured &&
        <FeaturedPost 
          {...featured}
        />
        }
        <PostsList posts={posts} />
      </Container>
    </>
  )
}
