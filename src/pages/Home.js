import Modal from "../components/Modals/Modal"
import AboutUsSection from "../layouts/AboutUsSection/AboutUsSection"
import BasicFieldsSection from "../layouts/BasicFieldsSection/BasicFieldsSection"
import ConfidenceSection from "../layouts/ConfidenceSection/ConfidenceSection"
import ContactSection from "../layouts/ContactSection/ContactSection"
import DetailedFieldsSection from "../layouts/DetailedFieldsSection/DetailedFieldsSection"
import Footer from "../layouts/Footer/Footer"
import Header from "../layouts/Header/Header"
import Hero from "../layouts/Hero/Hero"
import LetstalkSection from "../layouts/LetsTalkSection/LetstalkSection"
import Navigation from "../layouts/Navigation/Navigation"

const Home = () => {
    return (
        <>
            <Modal />
            <Header />
            <Hero />
            <Navigation />
            <BasicFieldsSection />
            <DetailedFieldsSection />
            <LetstalkSection />
            <ConfidenceSection />
            <AboutUsSection />
            <ContactSection />
            <Footer />
        </>
        )
}

export default Home