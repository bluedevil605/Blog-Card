import logo from '../assets/images/blog-image.svg'
import Avatar from './Avatar'


const BlogImage = () => {
  return (
    <div className='blog-card'>
      <img src={logo} alt='blog'></img>
      <div className="content">
        <button className="learning-button">Learning</button>
        <p className='publish-date'>Published 21 Dec 2023</p>
        <p className='title'>HTML & CSS foundations</p>
        <p className='description'>These languages are the backbone of every website, defining structure, content, and presentation.</p>
      </div>
      <Avatar />
    </div>
  )
}

export default BlogImage
