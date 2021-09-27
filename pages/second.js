import Link from 'next/link'

import styles from '../styles/Home.module.css'



const Second = () => {


    return (
        <>
            <div className={styles.container}>
                <main className={styles.main}>
                    <Link href="/third">
                        <a>세번째 페이지 3333333</a>
                    </Link>
                </main>
            </div>
        </>
    )
}


export default Second