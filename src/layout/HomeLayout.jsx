import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";

const HomeLayout = () => {
    return (
        <div>
            <Header></Header>
            <section>
                <Banner></Banner>
            </section>
            <section>
                <Footer></Footer>
            </section>
        </div>
    );
};

export default HomeLayout;
