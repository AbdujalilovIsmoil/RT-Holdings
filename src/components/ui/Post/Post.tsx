import "./style.css";
import Image from "next/image";

interface PostInterface {
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  title: string;
  description: string;
}

const Post = (props: PostInterface) => {
  return (
    <section className='post'>
      <div className='container'>
        <div className='post__content'>
          <Image
            src={props.image.url}
            alt={props.image.alt}
            width={props.image.width}
            height={props.image.height}
            className='post__content-image'
          />
          <h2 className='post__content-title'>{props.title}</h2>
          <p className='post__content-text'>{props.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Post;
