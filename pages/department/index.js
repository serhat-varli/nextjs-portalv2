import Image from "next/image";
import Link from 'next/link';
import styles from './department.module.scss';
import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import Layout from "../../components/layout";


const baseUrl = "https://rickandmortyapi.com/api/character";

export default function Index() {
  const [grids, setGrid] = useState("col-md-3");
  const [filters, setFilters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get(baseUrl)
      .then((response) => {
        setFilters(response.data.results);
      })
      .catch(e => console.log("Error " + e));
  }, []);

  const memoizedFilters = useMemo(() => filters, [filters]);

  const handleSort = (sortingFunction) => {
    setFilters([...memoizedFilters].sort(sortingFunction));
  };

  const filteredData = useMemo(() => {
    return memoizedFilters.filter((data) =>
      data.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [memoizedFilters, searchTerm]);

  return (
    <Layout>
      <div className='container'>
        <div className="row">
          <div className='col-ms-12 mb-3'>
            <div className="row">
              <div className='col-md-6 col-12'>
                <div className={styles.filter}>
                  <span>Sort By</span> :
                  <ul>
                    <li onClick={() => handleSort((a, b) => a.id - b.id)}>Default</li>
                    <li onClick={() => handleSort((a, b) => a.gender.localeCompare(b.gender))}>Gender</li>
                    <li onClick={() => handleSort((a, b) => b.id - a.id)}>Decreasing</li>
                    <li onClick={() => handleSort((a, b) => a.id - b.id)}>Growing</li>
                    <li onClick={() => handleSort((a, b) => a.status.localeCompare(b.status))}>Status</li>
                    <li onClick={() => handleSort((a, b) => a.created.localeCompare(b.created))}>Date</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-12">
                <div className={styles.search}>
                  <input type="text" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                </div>
              </div>
              <div className='col-md-3 col-12'>
                <ul className={`${styles.grid__area} d-md-flex d-none`}>
                  <li><i onClick={() => setGrid("col-md-6")} className="icon-grid-double"></i></li>
                  <li><i onClick={() => setGrid("col-md-4")} className="icon-grid-triple"></i></li>
                  <li><i onClick={() => setGrid("col-md-3")} className="icon-grid-quad"></i></li>
                </ul>
              </div>
            </div>
          </div>
          {filteredData.map((data) => (
            <div className={`${[styles.item__area, grids].join(" ")} mb-4`} key={data.id} data-id={data.id}>
              <div className='card'>
                <Image quality={70} width="100" height="100" src={data?.image} alt={data?.name} title={data?.name} className='w-100 h-100' />
                <div className='card-body'>
                  <div className={`${styles.point__and__text}`}>
                    <span className={data.status == "Alive" ? styles.active : styles.passive}></span>
                    <span>{data.status}</span>
                    <span>-</span>
                    <span>{data.species}</span>
                  </div>
                  <Link className={styles.title} passHref href={`/department/details/${data.id}`}>
                    <h5>{data.name}</h5>
                  </Link>
                  <div className={styles.gender}>
                    <p><span>Gender:</span> {data.gender}</p>
                  </div>
                  <div className={styles.location}>
                    <p>Last known location:</p>
                    <Link href={data.location.url}>{data.location.name}</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

