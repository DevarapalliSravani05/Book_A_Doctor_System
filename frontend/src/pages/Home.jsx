import { useEffect, useState } from "react";
import API from "../services/api";
import HeroSection from "../components/HeroSection";
import FeaturedDoctors from "../components/FeaturedDoctors";
import ServicesSection from "../components/ServicesSection";
import WhyChooseUs from "../components/WhyChooseUs";
import StatisticsSection from "../components/StatisticsSection";
import DepartmentsSection from "../components/DepartmentsSection";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

function Home() {
  const [doctors, setDoctors] = useState([]);

useEffect(() => {
  fetchDoctors();
}, []);

const fetchDoctors = async () => {
  try {
    const res = await API.get("/doctors");
    setDoctors(res.data.doctors);
  } catch (error) {
    console.log(error);
  }
};
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <StatisticsSection />
      <DepartmentsSection />
      <FeaturedDoctors doctors={doctors} />
      <Testimonials />
      <ContactSection />
      <Footer />
    </>
  );
}

export default Home;