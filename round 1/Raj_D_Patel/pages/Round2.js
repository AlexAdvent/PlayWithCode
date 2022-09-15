import Navbar from "./Components/NAvbar";
import styles from '../styles/New.module.css'
import Home from "./Components/Home";

export default function Round2() {
    return (
        <div className={styles.Main}>
            <Navbar />
            <Home />

            {/* //* Footer */}
            <footer className={styles.footer}>
                <div className={styles.Logo}>
                    <div>
                        Brand
                    </div>
                    <div>
                        Brand TagLine
                    </div>
                </div>
                <div className={styles.Moto}>
                    FIRST EVER CUSTOMIZED FOOD IN TOWN
                </div>
                <div className={styles.Menu}>
                    <div>
                        Contact
                    </div>
                    <div>
                        About
                    </div>
                    <div>
                        Menu
                    </div>
                    <div>
                        Locate Us
                    </div>
                </div>
                <div className={styles.Socials}>
                    <div>
                        FaceBook
                    </div>
                    <div>
                        Twitter
                    </div>
                    <div>
                        Instagram
                    </div>
                </div>
                <div className={styles.Mail}>
                    <a href='xyz123@gmail.com'>MAIL US AT :- xyz123@gmail.com</a>
                </div>
            </footer>
            <div>
                Copyright 2021
            </div>
            {/* //* Footer */}
        </div>
    );
}