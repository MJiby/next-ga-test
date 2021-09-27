import Link from 'next/link'

import styles from '../styles/Home.module.css'



const Third = () => {


    return (
        <>
            <div className={styles.container}>
                <main className={styles.main}>
                    <Link href="/end">
                        <a>마지막</a>
                    </Link>
                </main>
            </div>
        </>
    )
}

export default Third