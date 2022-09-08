import DG from '2gis-maps';
import { useEffect } from 'react';
import React from 'react';
import styles from './Map.module.scss'

export const Map = () => {
    useEffect(() => {
        let map
         map = DG.map('map-container', {
            center: [54.9966033, 73.3784771],
            zoom: 13,
            key: '123456',
        });
DG.marker([54.9966508, 73.3790184]).addTo(map)
        return () => map.destroy();
    }, []);

    return (
        <div className={styles.karta}>
        <div className={styles.title}><h1>Мы находимся здесь</h1></div>
        <div id="map-container" style={{ width: '600', height: '500px' }}></div>
        </div>
    )
};

export default Map