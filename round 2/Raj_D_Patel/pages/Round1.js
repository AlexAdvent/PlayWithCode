import Image from 'next/image'
import styles from '../styles/Index.module.css'
import phone from './Phone.png';
import email from './Email.png';

export default function Round1() {
    return (
        <div className={styles.container}>
            <div className={styles.cont}>
                <div className={styles.touch}>
                    <h2>
                        Get in Touch
                    </h2>
                    <div className={styles.para}>
                        Feel me to reaching out with me follow my social media account, send me an email, or simple fill-up enquiry form.
                    </div>
                    <div className={styles.info}>
                        <div className={styles.phone}>
                            <Image src={phone} width={20} height={20} />
                            <div>
                                +9108055294445
                            </div>
                        </div>
                        <div className={styles.phone}>
                            <Image src={email} width={20} height={20} />
                            <div>
                                hkenro@gmail.com
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>
                        Send Me a Message
                    </h2>
                    <div className={styles.info2}>
                        <input placeholder='Name' width='330px' className={styles.bar1} />
                    </div>
                    <div className={styles.info2}>
                        <input placeholder='Email Address' className={styles.bar2} />
                    </div>
                    <div className={styles.info2}>
                        <input placeholder='Subject' className={styles.bar3} />
                    </div>
                    <div className={styles.info2}>
                        <input placeholder='Your Message' className={styles.bar4} />
                    </div>
                    <div className={styles.info2}>
                        <button className={styles.submit}>
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
