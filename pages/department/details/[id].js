import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import styles from './details.module.scss'
import Layout from '../../../components/layout/';
import axios from 'axios';
import Image from 'next/image';

const Index = (params) => {
  const detailId = params.detailId
  const [getDetail, setGetDetail] = useState([])

  if (detailId) {
    let baseURl = `https://rickandmortyapi.com/api/character/${detailId}`;
    useEffect(() => {
      axios.get(baseURl)
        .then((response) => {
          setGetDetail(response.data);
        })
        .catch(e => console.log("Error " + e));
    }, []);
  }

  return (
    <Layout>
      <Head>
        <title>{getDetail?.name}</title>
      </Head>
      <div className="container mt-3">
        <div className='row'>
          <div className={`${styles.item__area} col-md-12`}>
            <Image quality={100} width="100" height="100" src={getDetail?.image} alt={getDetail?.name} title={getDetail?.name} className='w-100 h-100' />
            <div className={`${styles.point__and__text}  mt-4`}>
              <span className={getDetail.status == "Alive" ? styles.active : styles.passive}></span>
              <span>{getDetail.status}</span>
              <span>-</span>
              <span>{getDetail.species}</span>
            </div>
            <h1 className={`${styles.title}`}>{getDetail.name}</h1>
            <div className={styles.gender}>
              <p><span>Gender:</span> {getDetail.gender}</p>
            </div>
            <div className={styles.location}>
              <p>Last known location:</p>
              {/* <Link href="" >{getDetail.location.name}</Link> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const getServerSideProps = async (params) => {
  console.log('params', params)
  return {
    props: {
      detailId: params.params?.id
    }
  }
};

export default Index