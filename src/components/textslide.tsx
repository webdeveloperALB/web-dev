import "@/app/styles/text.scss";
import { FaStarOfLife } from "react-icons/fa6";

export default function TextSlider1() {
  return (
    <>
      <div className="bg-primary py-8 digital-solution testi-italic">
        <div className="mycustom-marque">
          <div className="scrolling-wrap">
            <div className="comm">
              <div className="cmn-textslide textitalick">
                Full-Stack Development
              </div>
              <div>
                <FaStarOfLife size={30} className="text-black fill-black mx-4" />
              </div>
              <div className="cmn-textslide text-custom-storke">
                Custom Web Applications
              </div>
              <div>
                <FaStarOfLife size={30} className="text-black fill-black mx-4" />
              </div>
              <div className="cmn-textslide textitalick">API Integration</div>
              <div>
                <FaStarOfLife size={30} className="text-black fill-black mx-4" />
              </div>
              <div className="cmn-textslide text-custom-storke">
                Database Management
              </div>
            </div>
            <div className="comm">
              <div>
                <FaStarOfLife size={30} className="text-black fill-black mx-4" />
              </div>
              <div className="cmn-textslide textitalick">E-commerce Solutions</div>
              <div>
                <FaStarOfLife size={30} className="text-black fill-black mx-4" />
              </div>
              <div className="cmn-textslide text-custom-storke">
                Admin Dashboards
              </div>
              <div className="cmn-textslide textitalick">
                Performance Optimization
              </div>
              <div>
                <FaStarOfLife size={30} className="text-black fill-black mx-4" />
              </div>
              <div className="cmn-textslide text-custom-storke">
                CMS Integration
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
