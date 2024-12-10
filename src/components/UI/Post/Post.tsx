import Image from "next/image";
import classNames from "classnames";
import styles from "./index.module.css";

const Post = () => {
  return (
    <section className={classNames(styles["post"])}>
      <div className="container">
        <div className={classNames(styles["post__content"])}>
          <Image
            alt="image"
            width={500}
            height={510}
            src="/images/jpg/hero-background-image-1.jpg"
            className={classNames(styles["post__content-image"])}
          />
          <h2 className={classNames(styles["post__content-title"])}>
            Lorem ipsum dolor sit
          </h2>
          <p className={classNames(styles["post__content-text"])}>
            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas
            sit, aspernatur aut odit aut fugit, sed quia consequuntur magni
            dolores eos, qui ratione voluptatem sequi nesciunt, neque porro
            quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt, ut
            labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
            minima veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
            vel eum iure reprehenderit, qui in ea voluptate velit esse, quam
            nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo
            voluptas nulla pariatur? At vero eos et accusamus et iusto odio
            dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti
            atque corrupti, quos dolores et quas molestias excepturi sint,
            obcaecati cupiditate non provident, similique sunt in culpa, qui
            officia deserunt mollitia animi, id est laborum et dolorum fuga. Et
            harum quidem rerum facilis est et expedita distinctio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Post;
