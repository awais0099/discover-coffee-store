import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import coffeeStoreData from '../../data/coffee-stores.json';
import styles from "../../styles/coffee-store.module.css";

export async function getStaticProps(staticProps) {
  const params = staticProps.params;

  return {
    props: {
      coffeeStore: coffeeStoreData.find(store => {
        return store.id.toString() === params.id;
      })
    }
  }
}

export async function getStaticPaths() {
  const paths = coffeeStoreData.map(store => {
    return {
      params: {id: store.id.toString()}
    }
  });
  return {
    paths: paths,
    fallback: true
  }
}

export default function CoffeeStore(props) {
	const router = useRouter();

  if (router.isFallback) {
    return <p>loading...</p>
  }

  console.log(props);

	const {name, imgUrl, address, neighbourhood} = props.coffeeStore;


  function voteBtnClickHandler() {
    console.log("vote");
  }

  return (
    <div className={styles.layout}>
      <Head>
        <title>{name}</title>
      </Head>
      <div className={styles.container}>

        <div className={styles.col1}>
          <Link href="/" className={styles.backToHomeLink}>Go back home</Link>
          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>{name}</h1>
          </div>
          <div className={styles.storeImgWrapper}>
            <Image src={imgUrl} width={600} height={360} alt={name} className={styles.storeImg} />
          </div>
        </div>

        <div className={`${styles.col2} glass`}>
          <div className={styles.iconWrapper}>
            <Image src="/static/icons/places.svg" width="24" height="24" alt='address icon' />
            <p className={styles.text}>{address}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image src="/static/icons/nearMe.svg" width="24" height="24" alt='address icon' />
            <p className={styles.text}>{neighbourhood}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image src="/static/icons/star.svg" width="24" height="24" alt='address icon' />
            <p className={styles.text}>10</p>
          </div>
          <button className={styles.upvoteButton} onClick={voteBtnClickHandler}>Vote</button>
        </div>

      </div>
    </div>
  );
}
