import PostsList from '../../components/PostsList'
import Container from '@components/Container';
import SectionHeader from '@components/SectionHeader';
import Head from 'next/head';



export async function getServerSideProps({ params: { category: categorySlug } }) {
  const reqCategory = await fetch(process.env.NEXT_PUBLIC_APIURL + '/categories?slug=' + categorySlug)
  const category = await reqCategory.json()
  const reqPost = await fetch(process.env.NEXT_PUBLIC_APIURL + '/posts?_where[category.slug]=' + categorySlug)
  const posts = await reqPost.json()


  return {
    props: {
      posts,
      category: category.length > 0 ? category[0] : {}
    }
  }
    
  
}

export default function Posts({posts, category}) {
  return (
    <>
      <Head>
        <title>{category.name} &mdash; GoBlog</title>
      </Head>
      <Container>
        <SectionHeader>{category.name}</SectionHeader>
        <PostsList 
          posts={posts}
          noresultTitle= "No post 😥"
          noresultDescription= "No post in this category"
        />
        {/* {!posts.length ? (
          <div className="text-center py-20">
            <h2 className="text-6xl">No result 😥</h2>
            <p className="text-xl mt-4 text-white/60 md:w-6/12 w-full mx-auto">We couldn’t find any posts with the keyword `yahahahayuk`. Please try another keyword.</p>
          </div>
        ) : (
          <div className="flex -mx-4 flex-wrap mt-6">
            {posts.map(post => (
              <div key={post.id} className="md:w-4/12 w-full px-4 py-6">
                <CardPost {...post} />
              </div>
            ))}
          </div>
        )} */}
      </Container>
    </>
  );
}
